# Phase 3 validation

Validated November 24, 2026 (America/Phoenix), against the local production build at `http://127.0.0.1:3100`. The user development server at `localhost:3000` was not stopped or replaced. No commit, push, merge or deployment was performed.

## Baseline

Baseline: `5faa473600c7bd5ea47657fd1a4b7296ef97e357`, branch `feature/portfolio-project-modernization`. Initial changes were only the two supplied PDFs in untracked `public/resumes/`. No dependency inputs changed during Phase 3.

| Command before implementation | Result | Retained log |
| --- | --- | --- |
| `npm ci` | PASS, exit 0; 419 packages added, 420 audited | [Install](evidence/phase3-logs/baseline-install.log) |
| `npm run lint` | PASS, exit 0, no errors/warnings | [Lint](evidence/phase3-logs/baseline-lint.log) |
| `npx tsc --noEmit` | PASS, exit 0, no diagnostics | [Types](evidence/phase3-logs/baseline-types.log) |
| `npm run build` | PASS, exit 0 | [Build](evidence/phase3-logs/baseline-build.log) |

The install reported 17 existing audit findings: 1 low, 4 moderate, 11 high and 1 critical. No automatic audit fix, version upgrade or lockfile rewrite was performed. This is not a claim that the dependency tree is vulnerability-free.

## Final commands and results

| Command | Result | Evidence |
| --- | --- | --- |
| `npm run lint` | PASS, exit 0; no errors or warnings | [Final lint](evidence/phase3-logs/final-lint.log) |
| `npx tsc --noEmit` | PASS, exit 0; no diagnostics | [Final types](evidence/phase3-logs/final-types.log) |
| `npm run build` | PASS, exit 0; production routes generated | [Final build](evidence/phase3-logs/final-build.log) |
| `node scripts/validate-profile.mjs --base-url http://127.0.0.1:3100 --report docs/evidence/phase3-profile-checks.json` | PASS, exit 0 | [Profile/HTTP receipt](evidence/phase3-profile-checks.json) |
| `node scripts/validate-portfolio.mjs --base-url http://127.0.0.1:3100 --report docs/evidence/phase3-project-regression.json` | PASS, exit 0 | [Project regression receipt](evidence/phase3-project-regression.json) |
| `pdfinfo` on both canonical files | PASS; one readable, unencrypted Letter page each, PDF 1.5, no JavaScript | PDF checks below |
| `git diff --check` | PASS; no whitespace errors | Local Git check |

The final build covers the current application implementation. Later edits were confined to validation helpers, reports and evidence; final lint and types were rerun after the profile helper fix. A whole-HTML `decodeURIComponent` check was corrected to match the literal/encoded image path because ordinary percentage text made whole-page decoding invalid. This was a validation-helper issue, not an application exception. The final project check also asserts every expected project exists inside the featured section before checking its order; its production regression was rerun successfully after that assertion.

`/about` is intentionally server-rendered on demand because resume selection reads `searchParams`. Homepage, education, experience, achievements and publications remain static. Existing project detail routes remain generated and the OG route remains dynamic. The build retains its existing stale `baseline-browser-mapping` notice and the edge-runtime/static-generation notice.

## Production HTTP and markup checks

All requested page URLs returned successful final responses:

| Route | Observed behavior |
| --- | --- |
| `/` | 200; shared identity, avatar path, two resume cards/actions and relevant project links |
| `/about` | 200; AI default, preserved anchors |
| `/about#resume` | 200; same route with client fragment anchor |
| `/about?resume=ai#resume` | 200; AI selected in server markup, correct title/actions/filename |
| `/about?resume=robotics#resume` | 200; Robotics selected in server markup, correct title/actions/filename |
| `/about?resume=unknown#resume` | 200; intentional AI fallback |
| `/experience` | 200; current role title and retained internship |
| `/education-skills` | 200; both GPA badges and all five filter controls |
| `/projects` | 200; unchanged project data/routes |
| `/achievements` | 200 |
| `/publications` | 200 |
| `/contact` | Existing 307 to `/about#contact`, followed by 200 |
| Both canonical PDFs | 200, `application/pdf`, exact original bytes |
| `/resume.pdf` | 308 to `/about#resume`, followed by 200 |
| `/resume_oold.pdf` | 308 to `/about#resume`, followed by 200 |

Fragments are not sent to the HTTP server; HTTP success alone does not test scroll position. Browser checks separately inspected the actual resume section. Redirects were tested with redirects disabled to verify status and destination, then followed. The old static files are absent from `public/`, and their archived hashes match Git baseline bytes.

The profile helper also checks shared name/role/email, hidden phone, exact experience IDs/roles/dates, structured GPAs, no stale expected-graduation/conferral wording, nine distinct skills categories, valid group/project IDs, canonical filenames, missing/invalid/repeated-query selection, no cross-linked variant actions, tab ARIA markup, preserved About anchors, and no eager server-rendered iframes.

Root/About `Person` data matches visible identity and ASU affiliation without `telephone`, `alumniOf` or conferred credentials. The profile routes emit canonical, Open Graph and Twitter metadata. Generated OG URLs return images. No stale single-resume link or `tel:` link was found in the inspected page markup.

## PDF checks

| Check | AI | Robotics |
| --- | --- | --- |
| Source found/read in full | PASS | PASS |
| Source visually rendered and inspected | PASS | PASS |
| Pages | 1 | 1 |
| Size | 177,483 bytes | 138,090 bytes |
| Page dimensions | 612 × 792pt, Letter | 612 × 792pt, Letter |
| PDF version | 1.5 | 1.5 |
| Encrypted / JavaScript | No / No | No / No |
| Tagged | No | No |
| Source = canonical SHA-256 | PASS | PASS |
| Production HTTP SHA-256 = original | PASS | PASS |
| Actual browser download SHA-256 = original | PASS | PASS |
| Actual new-tab opening | PASS | PASS |
| Actual canonical download filename | PASS | PASS |

Full hashes and paths are in [RESUME_MANAGEMENT.md](RESUME_MANAGEMENT.md) and the evidence receipts. Original PDFs were not edited. Private extracted text and rendered source pages were kept outside the repository and are not report deliverables. Captured website evidence does not reproduce PDF pages or their additional contact details.

## Actual browser validation

The browser integration host was unavailable, but native Edge control through CUA worked. Tests used a separate local production tab, accessible control observations, screenshots, keyboard/mouse actions and Edge DevTools responsive mode. The original user tab/window size was restored, test/PDF tabs were closed, and dark theme was restored after theme testing. These are observed native-browser checks, separate from HTTP assertions.

| Browser check | Observed result |
| --- | --- |
| Homepage | Avatar, new identity/affiliation, four actions and existing three-robot scene rendered |
| Equal specialization cards | AI and robotics cards, technology tags, real related links and direct actions visible in the light desktop capture |
| Resume direct selection | Robotics deep link opened Robotics panel, matching iframe title and actions; AI selection likewise matched |
| Selection and keyboard | Click selection, Left Arrow, Home and End updated URL, selected title, preview and links consistently |
| PDF open | Each direct action opened its canonical PDF in a separate tab |
| PDF download | Both expected filenames saved; actual downloaded bytes hash-identical to originals |
| Mobile fallback | At 390px, selected information/direct links remained visible and no PDF preview document was present |
| Skills filters | All 9; AI 5; Robotics 4; Software 3; Research 3, observed after actual clicks |
| Mobile navigation | Opened with all seven routes; Education & Skills navigation worked and closed menu |
| Education | Both GPA badges visible together on the additional 375px phone check |
| Experience | Current research title/content, timeline and unchanged visualization rendered |
| Theme | Light/dark toggle visibly changed palette and accessible label on About and homepage cards; dark restored |
| Horizontal overflow | None visible in the inspected views; not measured programmatically across every document |

### Responsive coverage

Sizes below are CSS viewport dimensions. Screenshots were saved at 2× device pixel density, without resizing.

| Viewport | Coverage | Result |
| --- | --- | --- |
| 1920 × 1080 | Dark homepage hero/avatar/scene/highlights, then light resume pathways and actions | PASS for inspected views |
| 1440 × 900 | Dark homepage, About selected previews/actions, experience scene; light About palette | PASS for inspected views |
| 768 × 1024 | Education/skills two-column presentation and wrapping controls | PASS for inspected views |
| 390 × 844 | Mobile About resume section, selected information/direct links, omitted iframe | PASS for inspected view |
| 375 × 812, additional | GPA cards, mobile menu, all skills filters | PASS for inspected views |

This is representative coverage, not every route at every size in both themes. No test is inferred from an unexecuted configuration.

### Accessibility evidence and limits

Code/production markup confirms real anchor elements for PDF/download actions, role-specific accessible labels, `noopener noreferrer` on new-tab links, tablist/tab/tabpanel relationships, one selected tab in the tab order, active-navigation state, filter pressed state, polite status announcements, accessible iframe titles and native button semantics. Existing global focus styling and theme variables are reused. New resume controls, filters and the menu toggle have 44px minimum heights; wrapping/min-width constraints avoid cramped mobile PDF UI.

Live keyboard selection was exercised with Left Arrow, Home and End. The browser accessibility tree exposed the selected panel, correct PDF title/actions and skills counts. No full screen-reader run, exhaustive Tab-order pass, automated axe/Lighthouse audit or numerical color-contrast measurement was performed. The original PDFs are untagged; document accessibility is not certified.

### Console observations

The local production browser displayed blocked `/_vercel/insights/script.js` and `/_vercel/speed-insights/script.js` requests with `ERR_BLOCKED_BY_CLIENT` and their existing package messages. After direct PDF viewing, Edge's PDF viewer also emitted an unload permissions-policy message. These are recorded as local analytics/browser-viewer observations; no dependency or analytics behavior was changed to silence them.

No React hydration error or application exception was observed during the inspected interactions. This is not an exhaustive automated console guarantee. Browser extensions were present in Edge and can inject their own DOM/noise.

## Screenshots

These are actual DevTools “Capture screenshot” PNG downloads copied byte-for-byte into the repository, not generated mockups. All six saved artifacts were opened and visually reviewed. Their SHA-256 values and pixel dimensions are in [phase3-browser-checks.json](evidence/phase3-browser-checks.json).

| View | Screenshot |
| --- | --- |
| Homepage, 1440 × 900, dark | [Homepage](screenshots/phase3/home-desktop-1440x900-dark.png) |
| Equal resume pathways, 1920 × 1080, light | [Resume cards](screenshots/phase3/resume-pathways-desktop-1920x1080-light.png) |
| Experience, 1440 × 900, dark | [Timeline and scene](screenshots/phase3/experience-desktop-1440x900-dark.png) |
| Skills, 768 × 1024, dark | [Tablet skills](screenshots/phase3/skills-tablet-768x1024-dark.png) |
| Resume selection/fallback, 390 × 844, dark | [Mobile resume](screenshots/phase3/resume-mobile-390x844-dark.png) |
| GPA cards, 375 × 812, dark | [Mobile education](screenshots/phase3/education-mobile-375x812-dark.png) |

## Phase 1 and design regressions

`validate-profile.mjs` asserts no tracked change against the Phase 3 baseline in project data/modules, project IDs/order/types/library, project components and routes, project media and all images, global CSS, Three.js code, hero robot canvas, experience timeline/visualization, sitemap, achievements data/page, publications page, package manifest or lockfile. The user-supplied source PDFs are unmodified.

The existing project validator also passed: eight deterministic projects; retained unrelated/mini-project content; 44 local media assets; homepage featured order; project listing; all eight detail routes; six initial filter query states; unknown-route 404; 44 image responses; eight project OG images; metadata, anchors and sitemap. Its original Phase 1 comparison baseline remains `d575a75407e907a6ee3ccaddad74388f81c981b3`; the new protected-path test separately uses `5faa4736` for Phase 3 byte-preservation checks.

The only change to the older validator is selecting the featured-project section before checking homepage link order. Resume cards add related-project links earlier in the document. The final featured-order assertion remains intact; no ordering or content requirement was weakened.

Project browser search/filter/history/media interactions were not rerun in Phase 3; their source is unchanged and production HTTP regression passed. No source-repository tests, simulators, physical hardware, model benchmarks or research experiments were executed as part of this website phase.

## Remaining limitations and local operation

- Dependency audit findings and stale compatibility-data notices remain as described above.
- Advanced robotics resume metrics need matching validation reports/conditions before promotion to website claims. Both PDFs and project pages remain unchanged; [the source comparison](PROFESSIONAL_PROFILE_MODERNIZATION.md#cross-source-discrepancies-and-decisions) records exact differences.
- No Safari/Firefox cross-browser, physical mobile device, screen-reader, automated accessibility or exhaustive visual matrix audit was performed.
- Browser PDF failure was not forcibly induced. The direct fallback links were visible and worked; phones intentionally omit the iframe.
- Supplied PDFs contain personal contact information and are public assets by the user's instruction. Website phone/contact exposure was not expanded.
- No deployment or external production-domain smoke test was performed. All observed production responses came from the local build.

To run the updated site locally from the repository root:

```powershell
npm ci
npm run dev
```

Open `http://localhost:3000`, `/about#resume`, or either selected-resume URL. For production validation use `npm run build`, then `npm run start -- --hostname 127.0.0.1 --port 3100` in one terminal and the two validation-helper commands above in another. Keep build and server processes sequential. Stop a task-owned test server with Ctrl+C after checking; do not stop an unrelated user's server.

Resume replacement requires one canonical file replacement and no component edits; follow [RESUME_MANAGEMENT.md](RESUME_MANAGEMENT.md). Full change inventory and audit are in [PROFESSIONAL_PROFILE_MODERNIZATION.md](PROFESSIONAL_PROFILE_MODERNIZATION.md).
