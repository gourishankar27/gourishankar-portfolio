// Data, regression, asset, route and metadata checks without a new test dependency.
import assert from "node:assert/strict";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const baseline = "d575a75407e907a6ee3ccaddad74388f81c981b3";
const modules = new Map();
function load(file, supplied) {
  if (!supplied && modules.has(file)) return modules.get(file);
  const value = { exports: {} };
  const source = supplied ?? readFileSync(file, "utf8");
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  vm.runInNewContext(code, { exports: value.exports, module: value, require: (specifier) => {
    const target = specifier.startsWith("@/") ? join(root, "src", specifier.slice(2)) : resolve(dirname(file), specifier);
    const found = [target + ".ts", target + ".tsx", target].find(existsSync);
    assert.ok(found, `Module exists: ${specifier}`);
    return load(found);
  } }, { filename: file });
  if (!supplied) modules.set(file, value.exports);
  return value.exports;
}
const plain = (value) => JSON.parse(JSON.stringify(value));
const { getAllProjects, getFeaturedProjects, getRelatedProjects } = load(join(root, "src/lib/projects.ts"));
const projects = plain(getAllProjects());
const expected = ["event-based-star-tracking", "ownerpilot-ai-operating-copilot", "vision-guided-diff-physics", "adaptive-digital-assistant", "mission-x-citycar", "autonomous-drone-navigation", "automated-goalie", "sp500-deep-learning-forecasting"];
const updated = new Set(expected.slice(1, 5));
assert.deepEqual(projects.map((p) => p.id), expected);
assert.deepEqual(plain(getFeaturedProjects()).map((p) => p.order), [0, 1, 2, 3, 4, 5, 6, 7]);
assert.equal(new Set(projects.map((p) => p.id)).size, projects.length);

const originalText = execFileSync("git", ["show", `${baseline}:src/data/projects.ts`], { cwd: root, encoding: "utf8" });
const original = plain(load(join(root, "src/data/projects.ts"), originalText));
const withoutOrder = (project) => Object.fromEntries(
  Object.entries(project).filter(([key]) => key !== "order")
);
for (const old of original.featuredProjects) {
  const current = projects.find((p) => p.id === old.id);
  assert.ok(current, `Existing slug preserved: ${old.id}`);
  assert.equal(current.year, old.year, `Start year preserved: ${old.id}`);
  if (!updated.has(old.id)) assert.deepEqual(withoutOrder(current), withoutOrder(old), `Unrelated content unchanged: ${old.id}`);
  for (const path of [old.coverImage, ...(old.media ?? []).map((m) => m.src)]) {
    if (path?.startsWith("/projects/")) assert.ok(existsSync(join(root, "public", path)), `Historical asset retained: ${path}`);
  }
}
assert.deepEqual(plain(load(join(root, "src/data/projects.ts")).miniProjects), original.miniProjects);

const assets = new Set();
const github = {
  "ownerpilot-ai-operating-copilot": "ownerpilot", "vision-guided-diff-physics": "Vision-Guided-Robotic-Manipulation",
  "adaptive-digital-assistant": "adaptive-digital-assistant", "mission-x-citycar": "mission-x-car",
};
for (const p of projects) {
  const ids = (p.sections ?? []).map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length, `Unique anchors: ${p.id}`);
  for (const l of p.links ?? []) {
    if (l.href.startsWith("#")) assert.ok(ids.includes(l.href.slice(1)), `Valid anchor: ${p.id}${l.href}`);
  }
  for (const path of [p.coverImage, ...(p.media ?? []).flatMap((m) => [m.src, m.poster])]) {
    if (path?.startsWith("/")) {
      assert.ok(existsSync(join(root, "public", path)), `Asset exists: ${path}`);
      assets.add(path);
    }
  }
  const related = plain(getRelatedProjects(p.id, 4));
  assert.ok(related.length && related.every((r) => r.id !== p.id && expected.includes(r.id)), `Valid related projects: ${p.id}`);
  if (updated.has(p.id)) {
    const words = p.summary.trim().split(/\s+/).length;
    assert.ok(words >= 30 && words <= 55, `Card summary 30–55 words: ${p.id} (${words})`);
    assert.ok(p.highlights.length >= 3 && p.highlights.length <= 5);
    assert.ok(p.role && p.tech.length && p.tags.length && p.sections.length >= 11);
    assert.ok(p.links.some((l) => l.type === "github" && l.href === `https://github.com/gourishankar27/${github[p.id]}`));
    assert.ok(p.coverAlt && p.media.every((m) => m.alt && m.caption), `Descriptive media: ${p.id}`);
    const content = JSON.stringify(p);
    assert.ok(!/\.ts\.net|192\.168\.|10\.\d+\.\d+\.\d+|Bearer\s+[\w.-]{10,}|AIza[\w-]+|ghp_[\w]+/.test(content), `No private hostname/address/token patterns: ${p.id}`);
  }
}
const report = { baseline_commit: baseline, data_checks: "PASS", projects: expected, unrelated_content: "All four unrelated featured projects and all mini-project data match baseline, excluding requested order fields.", local_assets: assets.size, http: null };
console.log(`PASS: 8 deterministic projects; stable IDs/years; unrelated content preserved; ${assets.size} local cover/media assets; anchors, summaries, GitHub and related links valid.`);

const arg = process.argv.indexOf("--base-url");
if (arg >= 0) {
  const base = process.argv[arg + 1];
  const decode = (s) => s.replaceAll("&amp;", "&").replaceAll("&quot;", '"').replaceAll("&#x27;", "'").replaceAll("&#39;", "'").replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  const request = async (path) => {
    const result = await fetch(new URL(path, base));
    assert.equal(result.status, 200, `HTTP 200: ${path}`);
    return result;
  };
  const home = await (await request("/")).text();
  const listing = await (await request("/projects")).text();
  for (const id of expected) {
    assert.ok(home.includes(`href="/projects/${id}"`), `Homepage discovery: ${id}`);
    assert.ok(listing.includes(`href="/projects/${id}"`), `Explorer discovery: ${id}`);
  }
  const featured = home.match(/<section aria-labelledby="featured-projects-title"[\s\S]*?<\/section>/)?.[0];
  assert.ok(featured, "Homepage featured section exists");
  const positions = expected.map((id) => featured.indexOf(`href="/projects/${id}"`));
  assert.ok(positions.every((position) => position >= 0), "All expected projects appear in the homepage featured section");
  assert.deepEqual([...positions].sort((a, b) => a - b), positions, "Homepage order matches explorer data order");
  const sitemap = await (await request("/sitemap.xml")).text();
  const cardIds = (html) => [...html.matchAll(/<a\b[^>]*href="\/projects\/([^"#?]+)"/g)].map((match) => match[1]);
  const filterCases = [
    ["q=Ollama", ["ownerpilot-ai-operating-copilot", "adaptive-digital-assistant"]],
    ["category=Robotics", ["vision-guided-diff-physics", "mission-x-citycar", "autonomous-drone-navigation", "automated-goalie"]],
    ["tags=ROS%202", ["vision-guided-diff-physics", "mission-x-citycar"]],
    ["featured=1", expected],
    ["q=OCR&category=AI%20Product%20Engineering", ["ownerpilot-ai-operating-copilot"]],
    ["q=does-not-match-any-project-84721", []],
  ];
  for (const [query, wanted] of filterCases) {
    const html = await (await request(`/projects?${query}`)).text();
    assert.deepEqual(cardIds(html), wanted, `Initial server-rendered filter results: ${query}`);
  }
  const images = new Set();
  for (const p of projects) {
    const path = `/projects/${p.id}`;
    const html = await (await request(path)).text();
    const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] ?? "");
    const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
    assert.ok(title.includes(p.title), `Correct title: ${p.id}`);
    assert.equal(description, p.summary, `Correct description: ${p.id}`);
    assert.ok(html.includes(`rel="canonical" href="https://gshankar.me${path}"`), `Canonical: ${p.id}`);
    assert.ok(html.includes(`property="og:url" content="https://gshankar.me${path}"`));
    const og = decode(html.match(/<meta property="og:image" content="([^"]*)"/)?.[1] ?? "");
    assert.ok(og.includes("/api/og?"));
    images.add(new URL(og).pathname + new URL(og).search);
    assert.ok(sitemap.includes(`https://gshankar.me${path}</loc>`));
    for (const section of p.sections ?? []) assert.ok(html.includes(`id="${section.id}"`));
    if (updated.has(p.id)) assert.ok(html.includes(`href="https://github.com/gourishankar27/${github[p.id]}"`));
  }
  for (const path of assets) {
    const result = await request(path);
    assert.ok(result.headers.get("content-type")?.startsWith("image/"), `Image content type: ${path}`);
    if (path.endsWith(".svg") && /architecture|cover-current|cover-procurement|adaptive-digital-assistant|mission-x-citycar|phase32|phase45|phase6a1/.test(path)) {
      const svg = await result.text();
      assert.ok(/<svg\b/.test(svg) && !/<script\b|<foreignObject\b/.test(svg));
    }
  }
  for (const path of images) assert.ok((await request(path)).headers.get("content-type")?.startsWith("image/"));
  await request("/robots.txt");
  assert.equal((await fetch(new URL("/projects/does-not-exist", base))).status, 404);
  report.http = { status: "PASS", origin: base, project_routes: 8, local_images: assets.size, og_images: images.size, initial_filter_queries: filterCases.length, sitemap: "PASS", unknown_route: 404, browser_interaction: "UNEXECUTED; HTTP initial-state checks do not exercise hydration, typing, click, debounce or history." };
  console.log(`PASS: production homepage, listing, 8 detail routes, 6 initial filter queries, 404, ${assets.size} image responses, 8 OG images, metadata, anchors and sitemap.`);
}
const output = process.argv.indexOf("--report");
if (output >= 0) writeFileSync(process.argv[output + 1], JSON.stringify(report, null, 2) + "\n");
