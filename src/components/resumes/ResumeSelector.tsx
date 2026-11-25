"use client";

import { useRef } from "react";
import type { KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { getResume, resumes, resumeSelectionHref } from "@/data/resumes";
import type { ResumeId } from "@/types/resume";
import { ResumePreview } from "./ResumePreview";

export function ResumeSelector({ selectedId }: { selectedId: ResumeId }) {
  const router = useRouter();
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = getResume(selectedId);

  function select(id: ResumeId) {
    router.replace(resumeSelectionHref(id), { scroll: false });
  }

  function navigateTabs(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % resumes.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + resumes.length) % resumes.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = resumes.length - 1;
    else return;
    event.preventDefault();
    buttons.current[next]?.focus();
    select(resumes[next].id);
  }

  return (
    <div className="min-w-0">
      <div role="tablist" aria-label="Choose a resume specialization" className="grid grid-cols-2 gap-2">
        {resumes.map((resume, index) => (
          <button key={resume.id} ref={(element) => { buttons.current[index] = element; }} id={`resume-tab-${resume.id}`} role="tab" type="button" aria-selected={selected.id === resume.id} aria-controls="resume-panel" tabIndex={selected.id === resume.id ? 0 : -1} onClick={() => select(resume.id)} onKeyDown={(event) => navigateTabs(event, index)} className={`min-h-11 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${selected.id === resume.id ? "border-[color:var(--primary-border)] bg-[color:var(--primary-soft)] text-[color:var(--text)]" : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted-2)] hover:border-[color:var(--primary)]"}`}>
            {resume.tabLabel}
          </button>
        ))}
      </div>
      <div id="resume-panel" role="tabpanel" aria-labelledby={`resume-tab-${selected.id}`} className="mt-5 min-w-0">
        <h3 className="text-base font-semibold text-[color:var(--text)]">{selected.title}</h3>
        <p className="mt-2 text-sm text-[color:var(--muted-2)]">{selected.description}</p>
        <p role="status" aria-live="polite" className="sr-only">{selected.title} selected.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href={selected.pdfPath} target="_blank" rel="noopener noreferrer" aria-label={`Open ${selected.title} PDF in a new tab`} className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--primary-border)] bg-[color:var(--primary-soft)] px-4 py-2 text-sm font-medium text-[color:var(--text)] hover:border-[color:var(--primary)]">
            Open PDF <span aria-hidden="true" className="ml-1">↗</span>
          </a>
          <a href={selected.pdfPath} download={selected.downloadFilename} aria-label={`Download ${selected.title} PDF`} className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]">
            Download PDF
          </a>
        </div>
        <ResumePreview resume={selected} />
      </div>
      <noscript>
        <p className="mt-4 text-sm text-[color:var(--muted-2)]">Choose a version: {resumes.map((resume, index) => <span key={resume.id}>{index > 0 ? " · " : ""}<a href={resumeSelectionHref(resume.id)} className="underline">{resume.tabLabel}</a></span>)}</p>
      </noscript>
    </div>
  );
}
