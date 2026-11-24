# Portfolio validation record

Executed November 24, 2026 (America/Phoenix), against portfolio baseline `d575a75407e907a6ee3ccaddad74388f81c981b3` on `feature/portfolio-project-modernization`. Initial working tree was clean. Final implementation remains uncommitted and local.

## Baseline

| Check | Observed result before implementation |
| --- | --- |
| `git status --short` | Empty |
| `npm ci` | Exit 0; 419 packages added, 420 audited; lockfile unchanged |
| `npm run lint` | Exit 1: four errors, one warning |
| `npx tsc --noEmit` | Exit 0 |
| `npm run build` | Exit 0; six existing project paths; 19 static generation entries |

Pre-existing lint findings:

- `src/app/projects/[id]/not-found.tsx`: two `react/no-unescaped-entities` errors from apostrophes on line 8.
- `src/components/projects/ProjectMediaGallery.tsx`: `useMemo` and `useState` called after a conditional return; two `react-hooks/rules-of-hooks` errors.
- `src/app/layout.tsx`: one unused `react/no-danger` suppression warning.

All four errors and the warning were fixed. A temporary unused destructuring warning in the new validation helper was also corrected; final lint has zero errors and zero warnings.

The existing dependency audit reports **17 findings: 1 low, 4 moderate, 11 high, 1 critical**. No `npm audit fix`, manifest change, lockfile update, or unrelated dependency upgrade was performed. These existing dependency findings remain for a separate maintenance milestone. Build output also retains the existing stale `baseline-browser-mapping` notice and the expected edge-runtime static-generation notice for `/api/og`; neither is a failed build.

## Final executed commands

Commands below used the existing npm lockfile/dependencies. The production server was restarted after the final application build so HTTP checks exercised the final compiled content.

```powershell
npm ci
npm run lint
npx tsc --noEmit
npm run build

# Current typed data, existing-content regression, media and link invariants.
node scripts/validate-portfolio.mjs

# Local production server used during verification.
npm run start -- --hostname 127.0.0.1 --port 3100
node scripts/validate-portfolio.mjs --base-url http://127.0.0.1:3100 --report docs/evidence/portfolio-checks.json

# Source-based assets, plus CSV/report-backed figures.
node scripts/generate-project-diagrams.mjs
python scripts/generate-project-plots.py

git diff --check
```

For plotting, the actual command selected the existing robotics Python virtual environment with Matplotlib/Pillow. The first generic Python probe encountered an existing incompatible NumPy environment; it was not used for generation. No Python package was installed or upgraded. Selected original screenshots were optimized with `scripts/prepare-project-media.mjs`, reading source checkouts and writing only portfolio destinations. The generated assets are included and do not require Python to run/build the site.

| Final check | Result |
| --- | --- |
| npm install / lockfile | PASS, exit 0; both `package.json` and `package-lock.json` unchanged |
| ESLint | PASS, exit 0; zero errors/warnings |
| TypeScript | PASS, exit 0 |
| Next.js production build | PASS, exit 0; eight project routes, 21 static generation entries |
| Data/regression helper | PASS |
| Production HTTP/metadata/assets helper | PASS |
| Plot data cardinality / numerical assertions | PASS: 64 forecast conditions, eight distinct confirmation seeds; published RMSE/range checks |
| New SVG XML/accessibility checks | PASS: all 12 new SVGs parse, have role/title/description, no script or foreignObject |
| Asset visual inspection | PASS for inspected rasterized diagrams/charts and delivered authentic captures; see scope below |
| `git diff --check` | PASS |
| Browser interaction / exact viewport matrix | UNEXECUTED: environment/tool blockers below |

The test receipts are in [portfolio-checks.json](evidence/portfolio-checks.json); the [browser receipt](evidence/browser-checks.json) explicitly records unexecuted checks. Full terminal logs were kept outside the repository in `G:/tmp/portfolio-validation-20261124/` to avoid adding build output to the project.

## Data, links and regressions

`scripts/validate-portfolio.mjs` loads the actual typed project data and helper functions using the existing TypeScript dependency. It compares protected content to the recorded Git baseline rather than a newly authored expected copy.

Passed assertions:

- Eight unique stable IDs with deterministic order 0–7; homepage order agrees with explorer/public data order.
- Every original slug and start year remains. The four unrelated featured objects match baseline exactly after removing only the explicitly requested `order` field. Mini-project data matches baseline.
- All original referenced cover/media files remain. No existing public asset was deleted or rewritten.
- All four updated summaries meet 30–55 words; each has a role, category, tags, technologies, 3–5 highlights, at least 11 sections, valid source link, descriptive media alternatives and captions.
- No duplicate section IDs; published hash links resolve to real section anchors.
- Related projects reference real IDs, exclude self, and remain available for every project.
- All **44 distinct local cover/media paths** exist and return HTTP 200 with an image content type.
- All eight project detail routes, homepage, listing, robots and sitemap return HTTP 200; an unknown project returns HTTP 404.
- All eight detail pages have the correct data-derived title and description, stable canonical URL, Open Graph URL/image metadata, and sitemap entry.
- All eight generated Open Graph images return HTTP 200 with image content type. The existing `/api/og` generator is retained; no fake demo/deployment metadata was introduced.
- All eight projects are linked from the homepage and projects listing. Direct GitHub URLs for the four sources match the repositories confirmed accessible by the GitHub connector; pinned documentation paths were inspected in those snapshots.

Six initial server-rendered filter URLs were also exercised:

| Query | Expected and observed cards |
| --- | --- |
| `q=Ollama` | OwnerPilot, ADA |
| `category=Robotics` | Manipulation, Mission-X, drone, goalie |
| `tags=ROS%202` | Manipulation, Mission-X |
| `featured=1` | All eight, correct order |
| `q=OCR&category=AI%20Product%20Engineering` | OwnerPilot |
| An intentionally unmatched search | No cards |

These HTTP tests exercise initial query-state filtering and rendered results. They **do not** exercise live typing/debounce, tag/category clicks, clipboard, hydration, back/forward history, mobile navigation, or browser console state.

Protected-source comparisons also confirmed no changes to project interfaces, global styles, hero/Three.js components, education, experience, resume/about page, package files or lockfile. The layout file changed only to remove its unused lint suppression. Source-project Git heads/statuses were rechecked: existing clean/dirty states remained as inventoried, including the older manipulation untracked plan and WSL CityCar README/config changes.

## Media and evidence checks

Sixteen newly added web assets total **302,437 bytes** in the final inventory: 12 self-contained SVGs and four authentic WebPs. The assets and their exact contexts are listed in [media requirements](PROJECT_MEDIA_REQUIREMENTS.md).

The four architecture diagrams and covers were generated from the inspected implementation, then selected final SVGs were rasterized for inspection. Final diagrams, all three evaluation plots, and the selected original/delivered application/simulation captures were inspected for legibility, complete axes/labels, and safe contents. Text sizing was reduced where initial diagram labels crowded node boundaries. Source screenshots were bounded crops/encodes, not redrawn UIs. No private account/sidebar context was retained in the catalog crop.

The Phase 4.5 plot recomputes RMSE from 64 per-condition errors, retaining nominal, training-mean, bounded-fit and Warp-fit baselines. The Phase 6A.1 plot preserves all eight signed displacements, original seeds and ±3 mm requirement. OwnerPilot's chart keeps verified RFQ completion and line source inspection as separate denominators and marks the unmet 57/60 target. All figures carry SVG titles/descriptions and website alternative text/captions.

No source-project test count is a result of testing the portfolio. Source report claims and raw-artifact verification are distinguished in [the claim ledger](PROJECT_CONTENT_EVIDENCE.md). Historical Isaac Sim figures are retained with explicit missing-log/reproduction caveats.

## Browser verification blocker

Browser automation was attempted against the local production server. `cua.createBrowserTab("chrome", ...)` failed with **“The browser access host is unavailable.”** A surface inventory confirmed no browser host. A native Chrome selection was then stopped by Computer Use because it could not determine the current browser URL confidently enough to enforce its policy. No further UI automation or alternate route around that block was attempted.

Consequently, **no actual portfolio desktop or mobile screenshot was captured**. Source-project screenshots and rasterized SVG inspections are asset QA, not browser screenshots. No browser console result or visual-responsive pass is claimed.

| Requested viewport | Render / overflow / interactions / screenshot |
| --- | --- |
| Desktop 1920 × 1080 | UNEXECUTED |
| Laptop 1440 × 900 | UNEXECUTED |
| Tablet 768 × 1024 | UNEXECUTED |
| Mobile 390 × 844 | UNEXECUTED |

The existing responsive classes and design tokens are preserved, with targeted small-screen TOC and flexible-column improvements. Static/source review supports their intended behavior, but does not establish a real rendered viewport result.

## Accessibility review scope

Source/HTML checks confirm native labeled search/category controls, selected-tag `aria-pressed`, descriptive image alternatives, meaningful headings, valid TOC links, native details/summary on small screens, and an existing dialog with Escape/arrow navigation, initial/restored focus and a newly bounded Tab loop. Gallery thumbnails now show entire diagrams rather than cropping content. Existing theme/focus styles are unchanged.

Keyboard behavior, screen reader output, contrast, touch target behavior, reduced-motion behavior, and lightbox/navigation interaction remain unexecuted in a browser. This is not a WCAG conformance audit.

## Remaining checks and next milestone

Once browser access is available, run the four viewport checks against both homepage and explorer and all four updated detail pages, plus a representative unchanged page. Exercise search/debounce, category and tag OR filters, clear filters, back/forward URL state, GitHub/navigation links, TOC anchors, image loading, lightbox previous/next/Escape/Tab, mobile menu, dark/light theme, horizontal overflow and browser console. Capture actual images under `docs/screenshots/portfolio/` as described in the media document.

Additional honest media can improve ADA/CityCar and OwnerPilot's upload/quote narrative. Existing dependency audit findings should be addressed in a separate scoped maintenance change, followed by the same checks. Source-project physical-device, hardware-autonomy, research-quality and simulator-lifecycle gates remain open as published; editing this portfolio does not complete them.

## Local review

```powershell
cd G:\Project\AllFeaturedProjects\gourishankar-portfolio
npm ci
npm run dev
```

Open the printed local URL, normally `http://localhost:3000`. For the compiled application use `npm run build` followed by `npm run start`. The task-owned temporary production preview was stopped after verification. All changes remain available locally; nothing was committed, pushed or deployed.
