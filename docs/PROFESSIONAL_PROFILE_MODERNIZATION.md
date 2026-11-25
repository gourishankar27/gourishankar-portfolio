# Phase 3: professional profile modernization

Completed locally on November 24, 2026 (America/Phoenix). No commit, push, merge, or deployment was performed. Phase 2 remains deferred. This report covers the professional profile and resume integration; the existing technical project case studies remain unchanged.

## Baseline and initial audit

The implementation baseline is commit `5faa473600c7bd5ea47657fd1a4b7296ef97e357` on `feature/portfolio-project-modernization`. Initial Git status contained only the user-supplied, untracked `public/resumes/` directory. Both source PDFs were preserved there. No repository or ancestor `AGENTS.md` instructions were found.

The audit covered the homepage, hero, About, experience, education/skills, contact redirect, layout, header/footer, professional data/types, timeline components, SEO, sitemap, resume references, public files, and Phase 1 evidence. Baseline `npm ci`, lint, TypeScript, and production build succeeded before implementation.

| Area | Before | After |
| --- | --- | --- |
| Identity | Robotics/research emphasis and inconsistent profile wording | Shared name, Robotics & AI Software Engineer title, ASU Research Assistant affiliation, and full Tempe location |
| Professional pathways | Generic focus content and one resume action | Equal AI and robotics resume cards with direct PDFs and relevant existing project links |
| About | Longer biography with stale academic status and single embedded resume | First-person professional journey, separate AI/robotics/research sections, engineering philosophy, dual resume selection |
| Tata role | Software Executive | Software Engineer, matching both current resumes |
| Education | Pursuing/expected-graduation wording and GPA embedded in prose | Neutral date periods and dedicated GPA badges; no degree-conferral or alumni assertion |
| Skills | Older broad category structure | Nine evidence-scoped categories, five functional filters, and explicit additional familiarity |
| Resume delivery | Ambiguous `/resume.pdf` plus older public PDF | Two canonical PDFs, role-specific actions/deep links, old URLs redirected to selection |
| SEO | Earlier research-oriented descriptions | Balanced AI, robotics and professional software identity in descriptions, social metadata and Person data |

## Primary sources and verification boundaries

Both resumes were read as complete one-page documents, extracted for private analysis outside the repository, rendered and visually inspected. They are readable and unencrypted. No resume was rewritten, regenerated, compressed, or edited. Original and canonical SHA-256 identity, including production HTTP and browser downloads, is documented in [RESUME_MANAGEMENT.md](RESUME_MANAGEMENT.md).

| Source file | Role in this update |
| --- | --- |
| `public/resumes/Gourishankar_Resume_AI_ML.pdf` | Shared professional history, AI specialization, internship, education, publication and awards |
| `public/resumes/Gourishankar_Resume_Robotics.pdf` | Shared professional history, robotics specialization and education; advanced project claims checked against source reports |
| [PROJECT_CONTENT_EVIDENCE.md](PROJECT_CONTENT_EVIDENCE.md) | Preserved Phase 1 technical claim boundaries and immutable source references |
| Existing professional data | Supported earlier tools, links, internship interfaces and achievement details retained where consistent |

The four source repositories were inspected read-only at these `main` revisions, matching Phase 1. No source-project files were changed and their application/simulation suites were not rerun.

| Repository | Commit |
| --- | --- |
| adaptive-digital-assistant | `34f3c1028e167a033f8912211ca0be5e303cae1d` |
| ownerpilot | `0883e71d33f502ea6d1f9d92c2c36ae6d50903e7` |
| Vision-Guided-Robotic-Manipulation | `b033f38f7d9c4807ef5e04135ef766156a2598e1` |
| mission-x-car | `f8c48ee2ed68218c384a5e87ecb320979ec6b285` |

Existing ADA and OwnerPilot Windows checkouts were clean. The matching manipulation WSL checkout was clean; Mission-X had pre-existing README/config changes that were left untouched. Isolated committed-source references were used for additional manipulation and Mission-X inspection.

## Professional identity and homepage

`siteConfig` centralizes the display name, role, affiliation, full location and balanced description. The hero now connects more than two years of professional C++/Python work with applied AI, autonomous systems and spacecraft attitude estimation. Its four concise specialization tags match the approved brief. View Projects, View Experience, View Resumes and Contact remain direct actions; View Resumes points to `/about#resume`.

The highlights retain recognition, add the six-engineer leadership context, and scope approximately 8.7 million events/372 batches to one representative 3.0-second research sequence. This is not represented as traffic, production scale, commercial deployment or an accuracy gain.

Two equal resume cards combine the requested specialization pathways and resume access in one section, replacing the older generic focus/single-resume call to action. Each has ten relevant technology tags, existing project links, View PDF, Download PDF, and a selected-preview deep link. The featured grid is still rendered from the same `getFeaturedProjects()` call with identical content and ordering.

The avatar and `HeroRobotCanvas` markup, canvas implementation, animation and Three.js scene files were preserved. Their live rendering was checked in Edge.

## About, contact and navigation

About uses the approved first-person voice, organized as About Me, My Engineering Journey, AI Engineering, Robotics & Autonomous Systems, Research, Engineering Philosophy, Resumes, and Contact. It connects professional software work with independent AI applications and simulation/research experience without promoting experimental capabilities to physical validation.

The existing `bio`, `resume` and `contact` anchors remain. On desktop the selected resume occupies a bounded, scrollable sticky aside; below the large-screen breakpoint it follows the biography naturally. Phones show selected resume information and direct actions without an iframe.

Contact uses “Let's talk AI, robotics, and software engineering.” and lists the approved opportunity areas. The existing email, GitHub and LinkedIn addresses are unchanged. No phone number, work authorization, visa, relocation or start-date claim was added to rendered markup or structured data. `/contact` still redirects to `/about#contact`.

The header retains all seven routes and labels About as “About & Resumes.” The full navigation begins at `xl` to fit the longer label; narrower widths retain the existing mobile-menu pattern. The mobile toggle is 44px and exposes expanded/control state. The footer adds resume discovery and balanced specialization text. Theme tokens, fonts and global styles are unchanged.

## Professional experience

All three IDs and reverse chronological ordering are preserved, as are the timeline and experience visualization implementations.

| Entry | Final content |
| --- | --- |
| ASU Research Assistant | January 2026–Present, Tempe; ASU is the organization, Prof. Dr. Suren Jayasuriya the supervisor, and NASA/Alphacore the project context. Centroid correction, weighted Wahba estimation, uncertainty, reproducibility and scoped event volume are described without claiming independently established accuracy improvements. |
| Tata Software Engineer | December 2021–June 2024, Mumbai; six-engineer leadership, Health Monitor SDK, telemetry, pipelines, 75% reduced manual intervention and 60% processing-efficiency improvement are retained from the resumes. Transferable software work replaces unnecessary operational detail. Existing Qt/Django/database experience is retained; recent personal-project technologies are not attributed to this employer. |
| Softnautics Software Engineering Intern | January–June 2021, Pune; OpenCV/TensorFlow gesture interface and the reported 92% prototype evaluation, with existing supporting interfaces. The internship remains despite its omission from the shorter robotics resume. |

Employment metrics are resume-reported professional outcomes, not independently reproduced employer benchmarks.

## Education, skills, publications and recognition

Both education IDs remain. The optional structured GPA type renders once as a dedicated badge per card:

| Program | Period | GPA |
| --- | --- | --- |
| ASU MS, Robotics and Autonomous Systems (Artificial Intelligence) | August 2024–May 2026 | 3.84 / 4.00 |
| MIT-ADT BTech, Computer Science — Intelligent Systems | August 2017–July 2021 | 7.96 / 10.00 |

Descriptions are date-based. No graduation, conferral, alumni or credential metadata is inferred. Undergraduate publication and achievement highlights remain, and the bachelor's scale is unchanged.

The nine skills categories are Generative AI & LLM Engineering; Robotics & Autonomous Systems; Perception & State Estimation; Machine Learning & Deep Learning; Backend & Software Engineering; Full-Stack & Application Development; Simulation & Differentiable Physics; Developer Tools, Testing & Infrastructure; and Research & Data Engineering. Practical context is described by category. Jacobians, PCL, Open3D, reinforcement learning and TensorRT are listed separately as additional familiarity. No ratings, percentages or expert labels were introduced. VLM/VLA/Kubernetes familiarity is not promoted to a deployed capability.

The five native-button filters expose pressed state, wrap responsively and announce the category count. Observed results are All 9, AI 5, Robotics 4, Software 3 and Research 3.

The publication display and BibTeX title were aligned to “A Transfer Learning Approach for Descriptive Question Answering System.” Its ID, authors, venue, year and links remain. Achievement data and both page implementations are unchanged; no award dates or rankings were inferred.

## SEO and structured data

The default title is `Gourishankar Bansode | Robotics & AI Software Engineer`. The shared description covers C++/Python experience, self-hosted LLMs, agents/retrieval, autonomous navigation, vision, estimation and reliable software.

About, experience and education/skills have appropriate canonical, Open Graph and Twitter metadata. About's `ProfilePage` and the root `Person` share the visible title and ASU affiliation without NASA employment, phone, alumni or conferred credentials. The default OG image uses the shared role. Canonical domain, existing route paths, sitemap and project metadata behavior remain intact. Generated images returned successful image responses in production checks.

## Cross-source discrepancies and decisions

| Difference or claim | Evidence and decision |
| --- | --- |
| Tata “Software Executive” versus “Software Engineer” | Both supplied resumes use Software Engineer. The website now follows those current sources; the prior title is recorded here. |
| Expected graduation/pursuing versus education dates | Both resumes list August 2024–May 2026. Removed stale status text and used neutral dates; completion remains unconfirmed. |
| Full PDF name versus approved display name | PDFs include a middle name; the website follows the explicitly approved Gourishankar Bansode identity. PDF bytes remain unchanged. |
| Short robotics resume omits internship | AI resume and existing professional data support Softnautics; retained all three entries. |
| Manipulation: 120 held-out cases/three geometries/≤6mm; 135 matched trials/≥90%/+15% error reduction; 600+ regressions/400+ independent conditions | These resume figures exceed corroborated evidence at `b033f38`. Current reports support narrower known-cube experiments, 444 latest unique regression cases, 30 matched conditions × 3 executions = 90 executions, and a failed 93/94 clean-lifecycle gate with per-object adaptation still blocked. No advanced figures were copied into the new professional profile. PDFs and Phase 1 project pages remain unchanged. |
| Manipulation: 74.7% RMSE reduction | `docs/PHASE4_VALIDATION.md` supports 0.456073→0.115209mm mean position RMSE for 100ms unforced-coast forecasts on four held-out episodes. Bounded non-gradient search matched the Warp result. This is not general driven-contact prediction, a gradient-method advantage, arbitrary planar control or a hardware success rate. No new headline metric was added. |
| Mission-X GPS versus graph-navigation evidence | `citycar_gps_nav.py` does implement `NavSatFix` input and rule-based GPS-at-intersections guidance; GPS source must not be described as absent. Other graph-following modes are separate. No measured physical GNSS/autonomy acceptance was found. Existing Phase 1 content was left untouched. |
| Drone rosbag/TF2 details in newer resume | Do not expand the professional summary into uncorroborated implementation/validation detail; preserve the existing project evidence and supplied PDF. |
| AI retrieval percentages | OwnerPilot's Phase 2 97.43% Recall@10 is 341/350 offer identities over 35 answerable held-out synthetic queries. Later 86.7% completion is 52/60 on a different controlled corpus. These are distinct evaluations, not production AI accuracy. No new profile percentage was promoted. |
| Research event count | Existing evidence supports approximately 8.7M events/372 batches in one 3.0-second representative sequence. Implementation/runtime evidence does not establish independently verified accuracy gains. This scope is explicit in the updated content. |
| Skills evidence varies | Supported tools remain contextualized; resume-listed skills without inspected implementation are separated as additional familiarity rather than claimed as deployed expertise. |

The source-project Phase I/II or numbered experiment reports refer to those projects, not initiation of another portfolio phase.

## File inventory

Modified application/config files:

- `next.config.ts`
- `src/app/page.tsx`, `src/app/about/page.tsx`, `src/app/experience/page.tsx`, `src/app/education-skills/page.tsx`, `src/app/layout.tsx`, `src/app/api/og/route.tsx`
- `src/components/hero/HeroSection.tsx`, `src/components/layout/Header.tsx`, `src/components/layout/Footer.tsx`
- `src/components/education/EducationTimeline.tsx`, `src/components/skills/SkillsGrid.tsx`
- `src/data/experience.ts`, `src/data/education.ts`, `src/data/skills.ts`, `src/data/publications.ts`, `src/lib/seo.ts`
- `src/types/education.ts`, `src/types/skills.ts`

Added application files:

- `src/types/resume.ts`, `src/data/resumes.ts`
- `src/components/resumes/ResumeCard.tsx`, `ResumeSelector.tsx`, `ResumePreview.tsx`
- `public/resumes/Gourishankar_Bansode_AI_Resume.pdf`, `Gourishankar_Bansode_Robotics_Resume.pdf` (exact copies)

Other changes:

- Moved `public/resume.pdf` and `public/resume_oold.pdf` byte-for-byte to `docs/archive/resumes/`; redirects replace their old public URLs.
- Preserved user-supplied source PDFs in `public/resumes/` without changes.
- Added `scripts/validate-profile.mjs` and Phase 3 profile/project/browser JSON evidence.
- Scoped `scripts/validate-portfolio.mjs` homepage order checking to the featured-project section. New resume-related project links occur earlier; the actual featured-order assertion still checks all eight unchanged entries.
- Added this report, [RESUME_MANAGEMENT.md](RESUME_MANAGEMENT.md), [PHASE3_VALIDATION.md](PHASE3_VALIDATION.md), and six actual screenshots in `docs/screenshots/phase3/`.

## Preserved scope and remaining limits

The validation helper confirms no tracked diff from the Phase 3 baseline in project data, IDs/order, project components/routes, project media/images, global CSS, Three.js files, experience timeline/visualization, sitemap, achievement data/pages, publication page, package manifest or lockfile. No dependency was added. Phase 2 media production and other portfolio phases were not started.

The two supplied PDFs contain personal contact information and remain public assets by the user's explicit requirement. They are untagged documents; website controls have accessible labels, but this phase does not remediate PDF tagging or certify document accessibility.

The existing dependency audit reports 17 findings and the build reports stale browser-compatibility data. Native Edge observed local analytics blocking and PDF-viewer policy noise. Representative visual/interaction checks passed, with cross-browser, assistive-technology, physical-device and exhaustive matrix checks explicitly unexecuted. See [PHASE3_VALIDATION.md](PHASE3_VALIDATION.md) for exact evidence and limitations.
