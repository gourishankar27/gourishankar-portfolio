# Project media inventory and capture requirements

Reviewed November 24, 2026 (America/Phoenix). All new visuals distinguish source-based diagrams, recorded application/simulator captures, and measured evaluation charts. No screenshot, robot photograph, result, or deployment was generated to stand in for missing evidence.

## Added assets

All destinations below are relative to `public/projects/`. Sixteen new files total approximately 295 KiB; existing files are retained. Four optimized authentic captures are approximately 15–99 kB each. Images are lazy-loaded in the existing fixed-area gallery, contained rather than cropped by CSS, and open in its lightbox. Data includes descriptive alternative text and informative captions.

| Project | New destination | Type / source |
| --- | --- | --- |
| ADA | `adaptive-digital-assistant/cover.svg` | Labeled technical illustration; no app screenshot |
| ADA | `adaptive-digital-assistant/architecture.svg` | Actual API/context/Ollama/PostgreSQL/Android-journal architecture |
| Mission-X | `mission-x-citycar/cover.svg` | Labeled technical illustration; no robot photograph |
| Mission-X | `mission-x-citycar/architecture.svg` | Combined bringup, command supervision and sensor feedback diagram |
| Mission-X | `mission-x-citycar/mecanum.svg` | Implemented inverse-kinematics equations; body/wheel frames and units |
| Manipulation | `vision-guided-diff-physics/cover-current.svg` | Current technical cover; old Isaac Sim cover remains on disk |
| Manipulation | `vision-guided-diff-physics/architecture-current.svg` | Current perception/C++ execution/Gazebo/surrogate diagram; historical learning and opt-in proposals separated |
| Manipulation | `vision-guided-diff-physics/gazebo-contact.webp` | Authentic geometry-v4 confirmation6a1-v2-005 `gui-contact.png`, unchanged framing, WebP optimization |
| Manipulation | `vision-guided-diff-physics/rviz-contact.webp` | Authentic same-trial `rviz-contact.png`, unchanged framing, WebP optimization |
| Manipulation | `vision-guided-diff-physics/phase45-stop-comparison.svg` | Matplotlib chart recomputed from 64 per-condition recorded forecast errors; RMSE in mm |
| Manipulation | `vision-guided-diff-physics/phase6a1-lateral-confirmation.svg` | Eight actual unseen-seed confirmation displacements; signs, mm, threshold and frozen endpoint retained |
| OwnerPilot | `ownerpilot-ai-operating-copilot/cover-procurement.svg` | Technical illustration; supersedes the original stylized cover in current rendering without deleting it |
| OwnerPilot | `ownerpilot-ai-operating-copilot/architecture-procurement.svg` | Upload/OCR/review/catalog/research/verification/internal-approval architecture |
| OwnerPilot | `ownerpilot-ai-operating-copilot/research-coverage.webp` | Actual `docs/rfq/phase3_2/screenshots/native-2-line.png` crop, fictional sources |
| OwnerPilot | `ownerpilot-ai-operating-copilot/catalog-review.webp` | Actual `docs/rfq/phase3_2/screenshots/regression/catalog-match.png` crop, fictional catalog; account/sidebar excluded |
| OwnerPilot | `ownerpilot-ai-operating-copilot/phase32-evaluation.svg` | Matplotlib plot of independently verified report counts; completion and source-coverage denominators differ |

[Media provenance](evidence/media-provenance.json) records exact source paths, source/report commits, original SHA-256 hashes, crop rectangles, destination paths, and output sizes. Crop coordinates are pixels in the original source capture. Cropping and encoding change framing/format only; no UI/business value is drawn or replaced.

Robotics raw artifacts were read from the matching clean WSL checkout. They are ignored experiment output, not files available through the public Git tree. Their source/report commit and exact raw hashes are recorded. No screenshot was taken of a physical Panda.

## Existing assets preserved

- Manipulation: `cover.png`, `architecture.png`, `visual-property-estimation.png`, `optimization-progression.png`, `training-summary.png`, `loss-curve.png`, `ee-rollout.png`, `ablation-summary.png`, `context-frame.png`.
- OwnerPilot: original `cover.svg`, `architecture.svg`, `workflow.svg`. The latter two remain captioned as the original SMB architecture/workflow.
- All event-based star tracking, drone, goalie, forecasting, resume/report, and other public assets remain unchanged.

The updated manipulation gallery retains the context frame, learning curve, trajectory and ablation figures as historical material. Original trained logs/weights were absent from the latest reference snapshot. Captions explicitly say the historical numerical labels were not reproduced here. Conceptual mass/property/gradient illustrations remain on disk but are not presented as measured property-estimation results.

## Regeneration

The generated assets are included, so ordinary `npm ci` / build does not need a plotting environment or source repositories.

```powershell
# Source-based covers, architectures and mecanum illustration; Node only.
node scripts/generate-project-diagrams.mjs

# Evaluation figures from the included compact sanitized evidence.
# Requires an existing Python environment with Matplotlib; no simulator/model needed.
python scripts/generate-project-plots.py

# Optional: regenerate authentic WebPs from the original accessible checkouts.
# Uses the sharp installation supplied by the existing Next.js dependency tree.
node scripts/prepare-project-media.mjs '<OwnerPilot checkout>' '<robotics checkout>'

# Optional: re-import only the two named robotics CSVs before drawing figures.
python scripts/generate-project-plots.py --import-results '<robotics checkout>/results'
```

`docs/evidence/phase45-stop-errors.csv` and `phase6a1-confirmations.csv` retain exact numeric strings but omit original absolute paths. Plot generation checks cardinalities and published RMSE/range values. `ownerpilot-phase32.json` records the report transcription, split, preselected configuration, and finite-sample caveats.

## Captures still needed

These are requests for future authentic captures, not assets advertised as already present. Use the established project directories and add real links only after the media exists and is reviewed.

| Project | Suggested destination | Suggested capture / demonstration |
| --- | --- | --- |
| ADA | `adaptive-digital-assistant/chat-sanitized.webp` | A fresh fictional conversation with a source card; no personal history, account identifier or network origin |
| ADA | `adaptive-digital-assistant/memory-provenance.webp` | Exact source excerpt, scope, reviewed correction and trust distinction using authored demonstration text |
| ADA | `adaptive-digital-assistant/voice-review.webp` | Explicit recording mode, editable public transcript, review and Send; label ordinary versus native evaluation build |
| ADA | `adaptive-digital-assistant/recovery.webp` | Interrupted operation restored read-only, receipt inspection and deliberate retry; no real session token/UUID tied to private content |
| ADA | Future real video link | 60–90 seconds: sign in off-camera → fictional prompt/source → memory review → voice draft/edit/Send → independent Stop. Do not imply open wake/battery/long-mic gates passed |
| Mission-X | `mission-x-citycar/robot.webp` | The user's actual robot, with four wheels, Pi and motor interfaces visible; remove identifying labels/serials/background documents |
| Mission-X | `mission-x-citycar/gazebo-city.webp` | Actual city scene, named goal and planned route; identify source commit and simulation mode |
| Mission-X | `mission-x-citycar/dashboard.webp` | Real React drive/autonomy/sensor panels using a sanitized connection profile, no robot IP or hostname |
| Mission-X | `mission-x-citycar/rviz.webp` | Actual sensor/TF/odometry view; label simulator truth versus localization estimate |
| Mission-X | Future real video links | Separate simulation navigation/recovery demo and supervised physical motor/sensor demo. Show arming, E-stop, heartbeat/disconnect and range-failure policy. Physical autonomous claims need a measured acceptance report |
| Manipulation | `vision-guided-diff-physics/phase5-execution.mp4` or a real public link | Actual recorded global-fallback push with camera, accepted controller state and endpoint; distinguish intended cancel/hold from aborts |
| Manipulation | `vision-guided-diff-physics/contact-comparison.mp4` or real link | Matched original-single-post failure and corrected mirrored-fixture sequences. Label geometry version, seed, simulation, and open-loop scope |
| Manipulation | Historical metric provenance | Recover original Isaac Sim logs/checkpoints and their evaluation recipe if the old 1.67/1.37 cm labels should become freshly verified evidence |
| OwnerPilot | `ownerpilot-ai-operating-copilot/dashboard.webp` | Original SMB dashboard with fully fictional ledger, forecasts and replenishment; diagrams currently preserve this story |
| OwnerPilot | `ownerpilot-ai-operating-copilot/extraction-review.webp` | Actual upload → OCR/extraction → source-linked correction/approval; include a difficult scan and visible unknown/conflict state |
| OwnerPilot | `ownerpilot-ai-operating-copilot/internal-quote.webp` | Actual deterministic financial breakdown and explicit internal human approval; no supplier/customer identifiers |
| OwnerPilot | Future real video link | 90–120 seconds: fictional RFQ → correction/approval → hybrid match → local research → coverage vs citation status → unknown price/failure → quote review. No external send/order/payment sequence |

No new first-party ADA or Mission-X screenshots/photos were found suitable for inclusion in the inspected committed evidence. Third-party SLAM dataset images are not CityCar media and were excluded. Source-project videos/recorded-state animations are not relabeled as portfolio browser screenshots or actual simulator video.

## Privacy and sanitization

Use newly authored fictional/public demonstration content. Remove credentials, access/refresh tokens, private HTTPS origins/IPs, notification text, usernames/account identifiers, personal conversations, private business/research data, device serials, and unrelated windows. Review the full capture before cropping, then review the delivered crop. Avoid crops that change the meaning of a result or hide a failure needed to interpret it.

Keep axes, units, legends, trial IDs, and simulated/physical labels legible. Use WebP/PNG at sensible display dimensions, SVG for diagrams/plots, and MP4/WebM or a genuine video link for motion. Record source commit, scene/model version, evaluation split, and capture context. Do not infer a passed validation gate from a screenshot alone.

## Portfolio screenshots

Actual screenshots of the updated website were **not captured**. Browser-host access failed; native Chrome access was then stopped because the computer-use guard could not verify its URL. Existing project-source captures and rasterized SVG QA images are not substitutes for these screenshots.

After browser access is available, capture the homepage, explorer, and all four detail routes at 1920×1080, 1440×900, 768×1024, and 390×844. Suggested destination: `docs/screenshots/portfolio/<viewport>-<route>.png`. Include a mobile open TOC, an open gallery/lightbox, category/tag/search states, empty results and a representative unchanged project. Verify console/image errors and overflow at the same time.
