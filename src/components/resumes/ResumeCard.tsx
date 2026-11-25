import Link from "next/link";
import type { Resume } from "@/types/resume";
import { getProjectById } from "@/lib/projects";
import { resumeSelectionHref } from "@/data/resumes";

export function ResumeCard({ resume }: { resume: Resume }) {
  return (
    <article className="min-w-0 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 sm:p-5 shadow-[0_12px_30px_var(--shadow-1)] flex flex-col">
      <h3 className="text-base sm:text-lg font-semibold text-[color:var(--text)]">{resume.title}</h3>
      <p className="mt-1 text-xs text-[color:var(--muted)]">{resume.specialization}</p>
      <p className="mt-3 text-sm text-[color:var(--muted-2)]">{resume.description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5" aria-label={`${resume.tabLabel} technologies`}>
        {resume.technologies.map((technology) => (
          <span key={technology} className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-[11px] text-[color:var(--muted-2)]">
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">Related engineering work</p>
        <ul className="mt-2 space-y-2">
          {resume.relatedProjectIds.map((id) => {
            const project = getProjectById(id);
            return project ? (
              <li key={id}>
                <Link href={`/projects/${id}`} className="text-[color:var(--primary)] hover:underline">{project.title}</Link>
              </li>
            ) : null;
          })}
        </ul>
      </div>
      <div className="mt-auto pt-5 flex flex-wrap items-center gap-2">
        <a href={resume.pdfPath} target="_blank" rel="noopener noreferrer" aria-label={`View ${resume.title} PDF (opens in a new tab)`} className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--primary-border)] bg-[color:var(--primary-soft)] px-4 py-2 text-sm font-medium text-[color:var(--text)] hover:border-[color:var(--primary)]">
          View PDF <span aria-hidden="true" className="ml-1">↗</span>
        </a>
        <a href={resume.pdfPath} download={resume.downloadFilename} aria-label={`Download ${resume.title} PDF`} className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]">
          Download PDF
        </a>
        <Link href={resumeSelectionHref(resume.id)} className="inline-flex min-h-11 items-center px-1 text-xs text-[color:var(--muted-2)] hover:underline">Preview &amp; details</Link>
      </div>
    </article>
  );
}
