# Portfolio featured-project modernization

Implemented locally on November 24, 2026 (America/Phoenix). Portfolio baseline: `d575a75407e907a6ee3ccaddad74388f81c981b3`, branch `feature/portfolio-project-modernization`. Initial `git status --short` was empty. No commit, push, or deployment was performed.

## Implementation status

The four requested case studies, ordering, homepage discovery, media, evidence extracts, and documentation are implemented. Lint, TypeScript, production build, data regression checks, and production HTTP verification pass. Interactive browser and exact viewport verification remain unexecuted because the browser tools were blocked; see [validation](PORTFOLIO_VALIDATION.md). This is a local implementation with an explicit browser-verification gap.

| Project | Before | After |
| --- | --- | --- |
| ADA | Absent | Complete privacy-first AI systems case study, 11 sections, recorded host validation, device/release limitations |
| Mission-X | Absent | Complete mobile robotics case study, 13 sections, source-derived control chain and explicit simulation/hardware evidence boundary |
| Manipulation | Earlier Isaac Sim temporal-learning presentation | 15-section evolution through ROS 2, perception, C++ execution, differentiable contact, Phase 5, 6A and 6A.1; historical assets retained |
| OwnerPilot | SMB operating copilot | 15-section business/procurement case study through Phase 3.2, preserving SMB functionality and disclosing the missed research-quality target |

Each updated card has a 30–55-word summary, role, category, technology/search tags, 3–5 engineering highlights, source link, meaningful technical sections, and captioned media. ADA has five structural/host-check metrics, manipulation and OwnerPilot six each. Mission-X intentionally has no performance cards: the inspected source does not establish measured navigation results.

## Initial portfolio audit

- Next.js 16.0.10 / React 19.2.1 / TypeScript; npm with the existing `package-lock.json`. No package manifest or lockfile change.
- `src/types/project.ts` already provides `Project`, `ProjectSection`, `ProjectMetric`, `ProjectLink`, and `ProjectMedia`. These interfaces remain unchanged.
- `src/data/projects.ts` supplied six featured projects and no active mini-projects. OwnerPilot and S&P 500 both had order 1. The homepage had a Three.js hero and information panels but no featured-card list.
- `getFeaturedProjects` sorted order; `getAllProjects` previously returned raw array order. The explorer separately sorts featured/order/year/title, searches title/summary/category/tags/technology, derives category/tag options, and synchronizes shareable filters with the URL. Selected tags use OR semantics.
- Dynamic project routes use stable IDs, static params, derived titles/descriptions/keywords, canonical URLs, JSON-LD, and the existing `/api/og` image generator. The sitemap derives project routes from the same data.
- Detail pages compose links, highlights, metric cards, a media grid/lightbox, technology tags, sections, sticky desktop TOC, and ranked related projects. Related ranking uses tag/category/technology overlap and deterministic tie-breakers.
- Cards/covers use a fixed 16:9 image area with lazy loading. Gallery images previously used cover-cropping, which concealed axes or tall screen content. The lightbox supports arrows and Escape but needed focus trapping. The TOC was desktop-only.
- Existing assets include nine manipulation PNGs, three OwnerPilot SVGs, and unrelated research/robotics/forecasting media. Every existing asset was retained byte-for-byte.
- Baseline: install, types, and production build passed. Lint had four errors (two apostrophes; two conditional hooks) and one unused-disable warning. Full details are in [validation](PORTFOLIO_VALIDATION.md).

## Source repository inventory

Remote default `main` heads were checked against GitHub on the implementation date. The GitHub connector confirmed all four repositories are public and accessible. `git ls-remote` confirmed their heads without changing existing workspaces.

| Source | Branch / exact commit used | Read-only reference |
| --- | --- | --- |
| [ADA](https://github.com/gourishankar27/adaptive-digital-assistant) | `main` / `34f3c1028e167a033f8912211ca0be5e303cae1d` | Existing clean Windows checkout; matches remote |
| [Mission-X](https://github.com/gourishankar27/mission-x-car) | `main` / `f8c48ee2ed68218c384a5e87ecb320979ec6b285` | Isolated filtered reference checkout; matching WSL checkout also located |
| [Manipulation](https://github.com/gourishankar27/Vision-Guided-Robotic-Manipulation) | `main` / `b033f38f7d9c4807ef5e04135ef766156a2598e1` | Isolated filtered checkout plus matching clean WSL source/results |
| [OwnerPilot](https://github.com/gourishankar27/ownerpilot) | `main` / `0883e71d33f502ea6d1f9d92c2c36ae6d50903e7` | Existing clean Windows checkout; matches remote |

Existing manipulation copies included an older `c878756…` checkout with an untracked plan and older `ab0956e…` copies with user modifications. An older OwnerPilot copy was also found. These were not updated or edited. The WSL Mission-X checkout has a modified README and untracked configuration; published claims use its committed remote-matching source through the isolated reference, not those changes. The third-party SLAM wrapper is pinned as a gitlink at `a0e24ac1701896ff00c9eccb1c58ba0224781540`; no submodule dataset was downloaded.

Temporary reference checkouts live outside the portfolio under `G:/tmp/portfolio-reference-20261124/`. Robotics retrieval used `--filter=blob:none`, sparse source/docs selection, and disabled LFS smudging. No datasets, checkpoints, generated builds, or LFS objects were imported into the portfolio. Small WSL result CSVs and selected authentic captures were read directly, with hashes retained in sanitized manifests.

The investigation covered recent commit subjects; requested READMEs, architecture, release/milestone reports and limitations; relevant Python/Kotlin/C++/TypeScript implementation; manifests/configuration; test files; and available evaluation/media artifacts. Older ADA phase summaries, OwnerPilot's top RFQ status, and the manipulation roadmap lag later executed reports. They were not used to override newer evidence. Source-project test results are report-backed observations, not test suites rerun as part of this portfolio task.

## Content and architecture decisions

Four typed modules under `src/data/projects/` keep the substantial case studies readable. `src/data/projects.ts` remains the central public data export, importing the updated entries. No schema extension, new UI framework, or design system was needed.

- ADA: local server inference, scoped provenance-aware retrieval, Kotlin/Keystore client, reviewed voice, consent, exact replay, and versioned recovery. Host checks remain distinct from physical voice/device acceptance. Optional semantic retrieval is described as default-off; on-device text generation stays disabled.
- Mission-X: A* graph planning, separate follower, named missions, mux/limiter/supervision/range-gate chain, inverse kinematics, sensor/TF interfaces, experimental ORB-SLAM3 relay, and Pi drivers. No invented physical autonomy, EKF, RL, Nav2, or navigation-accuracy result.
- Manipulation: original CNN/Transformer design and figures remain historical. New content separates flange execution, held-out release/stop prediction, first-attempt controller results, and corrected-fixture feasibility. The poor EKF baseline, failed original directional transfer, blocked per-object identification, and 93/94 lifecycle failure remain visible. Original training logs/weights were unavailable for independently reproducing old portfolio accuracy labels.
- OwnerPilot: original analytics/planning/action scope remains. New content covers extraction/OCR limitations, catalog retrieval/specification checks, native research, citation-only backend materialization, coverage-aware execution, deterministic internal quotes, and immutable human approvals. Selected hybrid versus native-only scores and source coverage versus completion remain separate.

All four have direct GitHub links and immutable source-document links. There are no invented live-demo links or deployment claims. [The claim ledger](PROJECT_CONTENT_EVIDENCE.md) records source paths, commits, conditions, and limitations.

## Featured order and discovery

| Order | Stable ID |
| ---: | --- |
| 0 | `event-based-star-tracking` |
| 1 | `ownerpilot-ai-operating-copilot` |
| 2 | `vision-guided-diff-physics` |
| 3 | `adaptive-digital-assistant` |
| 4 | `mission-x-citycar` |
| 5 | `autonomous-drone-navigation` |
| 6 | `automated-goalie` |
| 7 | `sp500-deep-learning-forecasting` |

`getAllProjects` now consumes the sorted featured and mini-project helpers. The homepage displays all eight existing-style cards in this order; the explorer's existing comparator agrees. Structured listing data and the sitemap share the ordered inventory. Related-project logic is preserved and now includes the new entries naturally through their tags/categories/technology.

New-project start years are 2026: ADA history starts October 2026; Mission-X history starts January 2026. Manipulation remains 2025; OwnerPilot remains 2026. Unrelated start years and content are unchanged.

## UX and media integration

The original typography, CSS variables, layout shell, navigation, theme behavior, animations, and Three.js components remain. Additions reuse the existing card and project components. Minimal changes add a collapsible small-screen TOC, constrain the detail grid's flexible column, make the long sticky TOC scrollable, contain gallery thumbnails so entire figures remain visible, stabilize lightbox callbacks, trap dialog keyboard focus, and expose selected-tag state with `aria-pressed`. The pre-existing lint issues were fixed without changing personal content.

Sixteen new web assets comprise four source-based architecture diagrams, four labeled technical cover illustrations, one mecanum diagram, three reproducible evaluation charts, and four authentic optimized captures. Previous SVG/PNG assets are preserved. New SVGs are self-contained. New captures are approximately 15–99 kB each; captions explain crops and distinguish diagrams, historical figures, actual UI, and simulated robot scenes.

Robotics plots derive from 64 actual per-condition forecast errors and eight fresh confirmation rows. OwnerPilot's chart transcribes the verified report table and retains its two denominators. `docs/evidence/` contains compact sanitized inputs and provenance; no full dataset or model is included. See [media requirements](PROJECT_MEDIA_REQUIREMENTS.md).

## Files modified

- `src/data/projects.ts`: typed case-study imports/entries and the three requested unrelated order changes.
- `src/lib/projects.ts`: deterministic sorted public inventory and order tie-break.
- `src/app/page.tsx`: existing-style featured cards.
- `src/app/projects/[id]/page.tsx`: small-screen TOC and bounded detail/sidebar layout.
- `src/components/projects/ProjectMediaGallery.tsx`: hook-order fix, contained image previews, stable lightbox handlers and focus trap.
- `src/components/projects/ProjectExplorer.tsx`: selected-tag accessibility state.
- `src/app/projects/[id]/not-found.tsx`: escape two apostrophes for existing lint rule.
- `src/app/layout.tsx`: remove one unused lint suppression; no personal/SEO/theme content changed.

## Files added

- Four typed case-study files in `src/data/projects/`.
- The sixteen assets listed in [media requirements](PROJECT_MEDIA_REQUIREMENTS.md).
- `scripts/generate-project-diagrams.mjs`, `scripts/generate-project-plots.py`, `scripts/prepare-project-media.mjs`, `scripts/validate-portfolio.mjs`.
- The four requested reports and sanitized evidence/provenance/check files under `docs/evidence/`.

## Preserved functionality and remaining work

Automated comparisons against the baseline confirm all four unrelated featured objects are identical except requested order fields, all original IDs/years remain, mini-project data is unchanged, and historical media still exists. Existing about/resume, education, research/experience, achievements, contact, publications, theme, navigation and Three.js source files are unchanged (apart from the single layout lint suppression noted above). No dependency upgrades or source-project workspace edits occurred.

Remaining work is actual browser QA at the four requested viewports, interaction/console verification and real portfolio screenshots. ADA and CityCar need additional sanitized authentic screens/photos/videos. Project-level research/device/hardware gates remain the source projects' limitations, not tasks silently completed by editing a portfolio.

Run locally with `npm ci`, `npm run dev`, and open the printed local URL. For production verification: `npm run build`, `npm run start`, then `node scripts/validate-portfolio.mjs --base-url http://localhost:3000`. Full commands and limitations are in [validation](PORTFOLIO_VALIDATION.md).
