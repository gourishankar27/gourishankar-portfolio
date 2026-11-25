# Resume management

Phase 3, November 24, 2026 (America/Phoenix). The website serves two unchanged, independently replaceable resume PDFs. All application labels, canonical paths, download filenames, technologies and related project IDs live in `src/data/resumes.ts`.

## Files and public paths

| Variant | Supplied source, preserved unchanged | Canonical copy used by the website |
| --- | --- | --- |
| AI | `public/resumes/Gourishankar_Resume_AI_ML.pdf` | `public/resumes/Gourishankar_Bansode_AI_Resume.pdf` |
| Robotics | `public/resumes/Gourishankar_Resume_Robotics.pdf` | `public/resumes/Gourishankar_Bansode_Robotics_Resume.pdf` |

Public canonical URLs after deployment:

- `/resumes/Gourishankar_Bansode_AI_Resume.pdf`
- `/resumes/Gourishankar_Bansode_Robotics_Resume.pdf`

Both sources are one-page, nonempty, unencrypted Letter-size PDF 1.5 documents. Their contents were read and rendered for review; canonical copies were made without conversion, regeneration or compression. The original source filenames are also reachable under `/resumes/` because the user supplied them inside `public/`; active website actions use the canonical names only.

## Exact byte verification

| Variant | Bytes | Source = canonical = production HTTP = browser download SHA-256 |
| --- | ---: | --- |
| AI | 177,483 | `160c51673b6f4074afe902acd61b0c29b011b9a4f14a8766b68923ac61bd3ea6` |
| Robotics | 138,090 | `7be8882e9328022f0fd68fabe67261000ceda51fd0fbddb152e3b3b89dada4af` |

These are distinct files. [Profile checks](evidence/phase3-profile-checks.json) record original/canonical hashes and production responses. [Browser checks](evidence/phase3-browser-checks.json) record actual downloaded filenames and hashes. Browser download files were read for comparison; unrelated existing downloads were left untouched.

Recheck from the repository root in PowerShell:

```powershell
Get-FileHash -Algorithm SHA256 -LiteralPath 'public/resumes/Gourishankar_Resume_AI_ML.pdf', 'public/resumes/Gourishankar_Bansode_AI_Resume.pdf', 'public/resumes/Gourishankar_Resume_Robotics.pdf', 'public/resumes/Gourishankar_Bansode_Robotics_Resume.pdf'
node scripts/validate-profile.mjs
```

## Configuration and rendering

`src/types/resume.ts` defines the stable `ai`/`robotics` IDs and a `Resume` type. Each entry in `src/data/resumes.ts` contains its title, tab label, specialization, description, PDF path, download filename, technologies and existing related-project IDs. Shared helpers provide the resume section URL, selection URLs and default selection. Unknown/missing values default to AI; the first value is used for repeated query parameters.

| Component or module | Responsibility |
| --- | --- |
| `ResumeCard.tsx` | Equal homepage cards; project links, direct View PDF and Download PDF actions, selected-preview link |
| `ResumeSelector.tsx` | URL-based selected variant, accessible tabs and keyboard navigation, matching title/actions/status |
| `ResumePreview.tsx` | One selected, lazy iframe at widths ≥768px; no iframe on phones; always-visible direct-link fallback guidance |
| `src/app/about/page.tsx` | Reads App Router `searchParams` on the server and supplies the selected ID; canonical remains `/about` |
| `next.config.ts` | Redirects legacy ambiguous resume URLs to the shared selection anchor |

There is no duplicated component-local selected-resume state. Selection calls `router.replace` with scrolling disabled. Mouse, Left/Right Arrow, Home and End are supported; tabs expose selected state, controlled panel and roving tab order. A no-JavaScript link list supports navigation to each server-selected variant, and direct PDF anchors work without an iframe.

The homepage uses both entries from the same config. Hero and footer link to `/about#resume`. The About viewer changes title, open/download actions, status and iframe title/source together. Its desktop sticky aside is height-bounded and scrollable. Only the selected preview mounts after the media query hydrates; neither PDF iframe is eagerly rendered by the server.

## Stable selection URLs

```text
/about#resume
/about?resume=ai#resume
/about?resume=robotics#resume
```

The first URL defaults to AI while showing both choices. A query such as `resume=unknown` also selects AI. All three URLs preserve the existing `resume` anchor.

## Legacy compatibility

| Old path | Production behavior | Archived original |
| --- | --- | --- |
| `/resume.pdf` | Permanent HTTP 308 to `/about#resume` | `docs/archive/resumes/resume.pdf` |
| `/resume_oold.pdf` | Permanent HTTP 308 to `/about#resume` | `docs/archive/resumes/resume_oold.pdf` |

The old files are absent from `public/`, so they cannot conflict with the redirects or silently serve stale resume content. Their exact bytes match the Phase 3 Git baseline:

- `resume.pdf`: 165,603 bytes, SHA-256 `399ded89c2b5079c738a1659021dfad3e4e700b2737e392b004399b2fe27d81e`.
- `resume_oold.pdf`: 164,632 bytes, SHA-256 `0b4d69810618839c9412e186d555d50d0942dcb6b00c46b0ae355e5cb28329d9`.

Do not restore those files into `public/` unless intentionally replacing the redirect strategy. All active application resume references use the config or the selection anchor. The archive is outside Next.js static serving; it is still part of the local repository and could be accessible through Git hosting if later committed to a public repository.

## Replace either resume independently

For a content-only update, replace just that canonical PDF and retain its stable filename. No React component or route change is necessary. Keep the new original separately so its identity can be checked; keep the current supplied originals for historical evidence.

Example for an AI replacement, run from the repository root:

```powershell
$replacementAiPdf = 'C:\path\to\new-ai-resume.pdf'
Copy-Item -LiteralPath $replacementAiPdf -Destination 'public/resumes/Gourishankar_Bansode_AI_Resume.pdf'
Get-FileHash -Algorithm SHA256 -LiteralPath $replacementAiPdf, 'public/resumes/Gourishankar_Bansode_AI_Resume.pdf'
node scripts/validate-profile.mjs --ai-source $replacementAiPdf
```

For Robotics:

```powershell
$replacementRoboticsPdf = 'C:\path\to\new-robotics-resume.pdf'
Copy-Item -LiteralPath $replacementRoboticsPdf -Destination 'public/resumes/Gourishankar_Bansode_Robotics_Resume.pdf'
Get-FileHash -Algorithm SHA256 -LiteralPath $replacementRoboticsPdf, 'public/resumes/Gourishankar_Bansode_Robotics_Resume.pdf'
node scripts/validate-profile.mjs --robotics-source $replacementRoboticsPdf
```

Read and open the new PDF before publishing. The hashes in each pair must match. If both variants change, pass both source arguments. The helper defaults to the original supplied files for the untouched variant; after a replacement, use its new source argument for later identity checks until intentionally updating the recorded source baseline. The Phase 3 helper also protects project/design files against its frozen baseline; a later project modernization may require a deliberate update to that regression boundary.

If positioning or filenames change, edit only that entry in `src/data/resumes.ts`; all consumers follow it. Keep stable IDs unless intentionally migrating deep links. Keep `downloadFilename` equal to the PDF basename. Update the hash record and source-discrepancy review when publishing a new resume. Replacing a PDF does not automatically make its new metrics verified website claims.

Validate a production server after the replacement:

```powershell
npm run lint
npx tsc --noEmit
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
```

In a second terminal, include the appropriate replacement source argument:

```powershell
node scripts/validate-profile.mjs --base-url http://127.0.0.1:3100 --ai-source 'C:\path\to\new-ai-resume.pdf'
```

Then open both selection URLs. Check title, selected preview, direct-open action, download filename and byte identity. Check a phone viewport as well. Stop the temporary production server with Ctrl+C when finished. Hosting/publication remains a separate user-controlled action.

## Visibility and privacy

The supplied PDFs contain personal contact information and will be publicly accessible when deployed. Phase 3 preserves those exact user-authorized documents. It does not copy their phone number or other additional personal details into website content, JSON-LD, metadata, reports or screenshots. The existing website phone property remains disabled. No credentials, private host addresses, extracted PDF text or source experiment artifacts were added.

PDFs are untagged; the website's accessible controls do not fix the documents' internal reading order or tagging. If a future version needs contact removal or accessibility remediation, prepare a separate reviewed source PDF and follow the replacement process instead of editing the currently supplied originals silently.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| Embedded PDF does not display | Expected on phones. At desktop width, use Open PDF or Download PDF; inspect content type and browser PDF support. Fallback actions remain visible. |
| Wrong resume selected | Check `resume=ai` or `resume=robotics`; unknown values intentionally fall back to AI. Check the single config entry and server build. |
| PDF 404 | Verify case-sensitive filename and `public` location. Config paths start `/resumes/`, never `/public/resumes/`. |
| Wrong filename downloaded | Confirm the entry's `downloadFilename`, PDF basename and cached browser download. Native browser settings may affect whether downloads prompt. |
| Hash validation fails after an intentional update | Supply the new original with `--ai-source` or `--robotics-source`; ensure the canonical copy was made byte-for-byte. Do not relabel an unexpected mismatch as passing. |
| Old PDF still appears | Check for an accidentally restored `public/resume.pdf`, restart a production build after config changes, and check cached redirects/PDFs. |
| Local analytics warnings | Existing Vercel analytics scripts may be blocked or unavailable on a local production server. They do not identify a PDF-path or selector failure. |
