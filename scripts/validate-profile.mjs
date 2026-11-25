// Phase 3 regression and production HTTP checks. No browser results are inferred.
import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join, resolve, basename } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const baseline = "5faa473600c7bd5ea47657fd1a4b7296ef97e357";
const sha = (bytes) => createHash("sha256").update(bytes).digest("hex");
const arg = (name) => { const i = process.argv.indexOf(name); return i < 0 ? undefined : process.argv[i + 1]; };
const cache = new Map();
function load(file) {
  if (cache.has(file)) return cache.get(file);
  const evaluated = { exports: {} };
  const source = readFileSync(file, "utf8");
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  vm.runInNewContext(code, { module: evaluated, exports: evaluated.exports, process, require: (name) => {
    const target = name.startsWith("@/") ? join(root, "src", name.slice(2)) : resolve(dirname(file), name);
    const found = [target + ".ts", target + ".tsx", target].find(existsSync);
    assert.ok(found, `Module exists: ${name}`);
    return load(found);
  } }, { filename: file });
  cache.set(file, evaluated.exports);
  return evaluated.exports;
}
const plain = (value) => JSON.parse(JSON.stringify(value));
const { resumes, getResume, resumeSelectionHref, resumeSectionHref } = load(join(root, "src/data/resumes.ts"));
const { experiences } = load(join(root, "src/data/experience.ts"));
const { education } = load(join(root, "src/data/education.ts"));
const { skillCategories } = load(join(root, "src/data/skills.ts"));
const { siteConfig } = load(join(root, "src/lib/seo.ts"));
const { getAllProjects } = load(join(root, "src/lib/projects.ts"));
assert.deepEqual(plain(resumes).map((r) => r.id), ["ai", "robotics"]);
assert.equal(getResume(undefined).id, "ai");
assert.equal(getResume("invalid").id, "ai");
assert.equal(getResume(["robotics", "ai"]).id, "robotics");
assert.equal(siteConfig.name, "Gourishankar Bansode");
assert.equal(siteConfig.role, "Robotics & AI Software Engineer");
assert.equal(siteConfig.email, "gourishankar@asu.edu");
assert.ok(!Object.hasOwn(siteConfig, "phone"), "Phone remains hidden");
assert.deepEqual(plain(experiences).map((e) => [e.id, e.role, e.period]), [
  ["asu-research-assistant-nasa-alphacore", "Research Assistant", "January 2026 – Present"],
  ["tata-advanced-systems", "Software Engineer", "December 2021 – June 2024"],
  ["softnautics-intern", "Software Engineering Intern", "January 2021 – June 2021"],
]);
assert.deepEqual(plain(education).map((e) => [e.id, e.gpa.value, e.gpa.scale]), [
  ["asu-ms-ras", "3.84", "4.00"], ["mit-adt-btech-intelligent-systems", "7.96", "10.00"],
]);
assert.ok(!/expected|currently pursuing|graduated|conferred|alumni/i.test(JSON.stringify(education)));
assert.equal(skillCategories.length, 9);
assert.equal(new Set(skillCategories.map((c) => c.id)).size, 9);
const groups = ["ai", "robotics", "software", "research"];
for (const group of groups) assert.ok(skillCategories.some((c) => c.groups?.includes(group)));
for (const category of skillCategories) {
  assert.equal(new Set(category.skills).size, category.skills.length);
  assert.ok(category.groups.every((g) => groups.includes(g)));
}
const projectIds = new Set(getAllProjects().map((p) => p.id));
const pdfs = [];
for (const resume of resumes) {
  const source = resolve(arg(`--${resume.id}-source`) ?? join(root, "public/resumes", resume.id === "ai" ? "Gourishankar_Resume_AI_ML.pdf" : "Gourishankar_Resume_Robotics.pdf"));
  const destination = join(root, "public", resume.pdfPath);
  const original = readFileSync(source), copy = readFileSync(destination);
  assert.ok(copy.length > 0 && copy.subarray(0, 5).toString() === "%PDF-" && copy.subarray(-2048).includes(Buffer.from("%%EOF")));
  assert.equal(sha(original), sha(copy), `Unchanged PDF identity: ${resume.id}`);
  assert.equal(basename(resume.pdfPath), resume.downloadFilename);
  assert.equal(resumeSelectionHref(resume.id), `/about?resume=${resume.id}#resume`);
  assert.ok(resume.relatedProjectIds.every((id) => projectIds.has(id)));
  pdfs.push({ id: resume.id, source_filename: basename(source), public_url: resume.pdfPath, download_filename: resume.downloadFilename, bytes: copy.length, source_sha256: sha(original), destination_sha256: sha(copy), identity: "PASS" });
}
assert.notEqual(pdfs[0].source_sha256, pdfs[1].source_sha256);
for (const name of ["resume.pdf", "resume_oold.pdf"]) {
  assert.ok(!existsSync(join(root, "public", name)), `No stale static redirect conflict: ${name}`);
  const previous = execFileSync("git", ["show", `${baseline}:public/${name}`], { cwd: root });
  assert.equal(sha(previous), sha(readFileSync(join(root, "docs/archive/resumes", name))), `Legacy bytes archived: ${name}`);
}
const protectedPaths = ["src/data/projects.ts", "src/data/projects", "src/lib/projects.ts", "src/types/project.ts", "src/components/projects", "src/app/projects", "public/projects", "public/images", "src/app/globals.css", "src/components/hero/HeroRobotCanvas.tsx", "src/components/three", "src/components/experience/DefenseHudCanvas.tsx", "src/components/experience/ExperienceTimeline.tsx", "src/app/sitemap.ts", "src/data/achievements.ts", "src/app/achievements/page.tsx", "src/app/publications/page.tsx", "package.json", "package-lock.json"];
const protectedDiff = execFileSync("git", ["diff", "--name-only", baseline, "--", ...protectedPaths], { cwd: root, encoding: "utf8" }).trim();
assert.equal(protectedDiff, "", `Phase 1/design protected files remain identical: ${protectedDiff}`);
const sourceFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? sourceFiles(join(dir, entry.name)) : /\.tsx?$/.test(entry.name) ? [join(dir, entry.name)] : []);
const stale = sourceFiles(join(root, "src")).filter((path) => /["'`]\/resume\.pdf|currently pursuing|expected graduation|May 2026 \(expected\)|Software Executive/.test(readFileSync(path, "utf8")));
assert.deepEqual(stale, []);
const report = { date: "2026-11-24", timezone: "America/Phoenix", baseline_commit: baseline, static_checks: "PASS", protected_paths: protectedPaths, pdfs, http: null, browser: "NOT RUN by this helper; HTTP/markup checks do not establish browser interactions or responsive rendering." };
console.log("PASS: profile identity, roles/dates/GPAs, skills, resume configuration, exact PDF bytes, legacy archives, and Phase 1/design preservation.");

if (arg("--base-url")) {
  const base = arg("--base-url");
  const request = async (path, expected = 200, options) => {
    const response = await fetch(new URL(path, base), options);
    assert.equal(response.status, expected, `${path}: HTTP ${expected}`);
    return response;
  };
  const decode = (text) => text.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'");
  const markup = {};
  for (const path of ["/", "/about", "/about#resume", "/about?resume=ai#resume", "/about?resume=robotics#resume", "/experience", "/education-skills", "/projects", "/achievements", "/publications"]) markup[path] = await (await request(path)).text();
  const home = markup["/"];
  assert.ok(home.includes(`href="${resumeSectionHref}"`));
  assert.ok(home.includes("/images/avatar.jpg") || home.includes(encodeURIComponent("/images/avatar.jpg")));
  assert.ok((await request("/images/avatar.jpg")).headers.get("content-type")?.startsWith("image/"));
  for (const resume of resumes) {
    const pdf = await request(resume.pdfPath);
    assert.ok(pdf.headers.get("content-type")?.toLowerCase().startsWith("application/pdf"));
    assert.equal(sha(Buffer.from(await pdf.arrayBuffer())), pdfs.find((p) => p.id === resume.id).source_sha256, `HTTP PDF byte identity: ${resume.id}`);
    assert.ok(home.includes(`href="${resume.pdfPath}"`) && home.includes(`download="${resume.downloadFilename}"`));
    assert.ok(home.includes(`aria-label="View ${resume.title} PDF (opens in a new tab)"`));
    for (const id of resume.relatedProjectIds) assert.ok(home.includes(`href="/projects/${id}"`));
    const page = markup[`/about?resume=${resume.id}#resume`];
    const selector = page.match(/<aside id="resume"[\s\S]*?<\/aside>/)?.[0];
    assert.ok(selector);
    const tab = selector.match(new RegExp(`<button[^>]*id="resume-tab-${resume.id}"[^>]*>`))?.[0];
    assert.ok(tab?.includes('aria-selected="true"') && /tabindex="0"/i.test(tab));
    assert.ok(selector.includes(`aria-labelledby="resume-tab-${resume.id}"`));
    assert.ok(selector.includes(`href="${resume.pdfPath}"`) && selector.includes(`download="${resume.downloadFilename}"`));
    assert.ok(selector.includes('target="_blank"') && selector.includes('rel="noopener noreferrer"'));
    const other = resumes.find((r) => r.id !== resume.id);
    assert.ok(!selector.includes(`href="${other.pdfPath}"`), "Selected actions do not cross-link variants");
    assert.ok(!selector.includes("<iframe"), "No eager server-side PDF iframes; desktop preview loads after media-query hydration");
    assert.ok(page.includes('rel="canonical" href="https://gshankar.me/about"'));
  }
  for (const id of ["bio", "resume", "contact"]) assert.ok(markup["/about"].includes(`id="${id}"`));
  assert.ok(markup["/experience"].includes("Software Engineer"));
  assert.ok(markup["/experience"].includes("Softnautics LLP"));
  const educationText = markup["/education-skills"].replaceAll(/<!--.*?-->/gs, "");
  assert.ok(educationText.includes("GPA 3.84 / 4.00") && educationText.includes("GPA 7.96 / 10.00"));
  for (const label of ["All Skills", "AI &amp; ML", "Robotics &amp; Autonomy", "Software Engineering", "Research &amp; Evaluation"]) assert.ok(educationText.includes(label));
  for (const html of Object.values(markup)) {
    assert.ok(!/href="\/resume\.pdf|tel:|currently pursuing|expected graduation|Software Executive/.test(html));
  }
  for (const path of ["/", "/about", "/experience", "/education-skills"]) {
    const html = markup[path];
    assert.ok(html.includes('property="og:description"') && html.includes('name="twitter:description"'));
    for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      const value = JSON.parse(match[1]);
      const entities = value["@graph"] ?? [value.mainEntity ?? value];
      for (const person of entities.filter((e) => e["@type"] === "Person")) {
        assert.equal(person.name, siteConfig.name);
        assert.equal(person.jobTitle, siteConfig.role);
        assert.ok(!person.telephone && !person.alumniOf && !person.hasCredential);
        assert.equal(person.affiliation.name, "Arizona State University");
      }
    }
    const image = decode(html.match(/<meta property="og:image" content="([^"]+)"/)?.[1] ?? "");
    const imagePath = new URL(image).pathname + new URL(image).search;
    assert.ok((await request(imagePath)).headers.get("content-type")?.startsWith("image/"));
  }
  const redirects = [];
  for (const path of ["/resume.pdf", "/resume_oold.pdf"]) {
    const response = await request(path, 308, { redirect: "manual" });
    assert.equal(new URL(response.headers.get("location"), base).pathname + new URL(response.headers.get("location"), base).hash, resumeSectionHref);
    assert.equal((await fetch(new URL(path, base))).status, 200);
    redirects.push({ path, status: 308, destination: response.headers.get("location") });
  }
  const contact = await request("/contact", 307, { redirect: "manual" });
  assert.ok(contact.headers.get("location")?.endsWith("/about#contact"));
  assert.equal((await fetch(new URL("/contact", base))).status, 200);
  const fallback = await (await request("/about?resume=unknown#resume")).text();
  assert.ok(fallback.match(/<button[^>]*id="resume-tab-ai"[^>]*aria-selected="true"/));
  report.http = { status: "PASS", routes: Object.keys(markup), pdf_identity_and_content_type: "PASS", selected_resume_markup: ["ai", "robotics"], unknown_selection: "ai", legacy_redirects: redirects, contact_redirect: 307, social_contact_preservation: "PASS", metadata: "PASS", note: "Native PDF opening/downloading, responsive iframes, tab/keyboard behavior and skills-filter clicks still require an actual browser." };
  console.log("PASS: production routes, deep-link selection markup, canonical PDFs/content types/exact bytes, download filenames, contact/legacy redirects, metadata and preserved anchors.");
}
if (arg("--report")) writeFileSync(arg("--report"), JSON.stringify(report, null, 2) + "\n");
