// Lossy web optimization and explicitly bounded crops of authentic source captures.
// This never generates UI, changes business values, or modifies a source workspace.
import sharp from "sharp";
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const [ownerRoot, roboticsRoot] = process.argv.slice(2);
if (!ownerRoot || !roboticsRoot) throw new Error("Usage: node scripts/prepare-project-media.mjs <OwnerPilot checkout> <robotics checkout>");
const entries = [
  {
    repo: "ownerpilot", sha: "0883e71d33f502ea6d1f9d92c2c36ae6d50903e7",
    base: ownerRoot, source: "docs/rfq/phase3_2/screenshots/native-2-line.png",
    destination: "ownerpilot-ai-operating-copilot/research-coverage.webp",
    crop: { left: 0, top: 240, width: 846, height: 930 },
    note: "Authentic fictional-source demonstration; top research status, coverage, and receipt activity. Crop only.",
  },
  {
    repo: "ownerpilot", sha: "0883e71d33f502ea6d1f9d92c2c36ae6d50903e7",
    base: ownerRoot, source: "docs/rfq/phase3_2/screenshots/regression/catalog-match.png",
    destination: "ownerpilot-ai-operating-copilot/catalog-review.webp",
    crop: { left: 448, top: 885, width: 890, height: 1285 },
    note: "Authentic fictional catalog workflow. Crop omits the synthetic account/sidebar and unrelated page regions.",
  },
  ...["gui", "rviz"].map((kind) => ({
    repo: "Vision-Guided-Robotic-Manipulation", sha: "b033f38f7d9c4807ef5e04135ef766156a2598e1",
    base: roboticsRoot,
    source: `results/phase6a1/run-20261105T015355Z/geometry-v4/trials/confirmation6a1-v2-005/attempt-001/${kind}-contact.png`,
    destination: `vision-guided-diff-physics/${kind === "gui" ? "gazebo" : "rviz"}-contact.webp`,
    note: "Actual simulated confirmation contact capture, unchanged framing. Raw WSL artifact is untracked; source/report SHA is recorded separately.",
  })),
];

const provenance = [];
for (const entry of entries) {
  const input = readFileSync(join(entry.base, entry.source));
  const output = join(root, "public", "projects", entry.destination);
  mkdirSync(dirname(output), { recursive: true });
  let pipeline = sharp(input);
  if (entry.crop) pipeline = pipeline.extract(entry.crop);
  await pipeline.resize({ width: 1440, withoutEnlargement: true }).webp({ quality: 86 }).toFile(output);
  provenance.push({ repository: entry.repo, source_commit: entry.sha, source_artifact: entry.source,
    source_sha256: createHash("sha256").update(input).digest("hex"), destination: `/projects/${entry.destination}`,
    crop: entry.crop ?? null, note: entry.note, output_bytes: readFileSync(output).length });
}
mkdirSync(join(root, "docs/evidence"), { recursive: true });
writeFileSync(join(root, "docs/evidence/media-provenance.json"), JSON.stringify(provenance, null, 2) + "\n");
console.log(`Prepared ${entries.length} authentic web images and a sanitized provenance manifest.`);
