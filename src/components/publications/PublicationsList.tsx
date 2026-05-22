import { publications } from "@/data/publications";
import Link from "next/link";

export function PublicationsList() {
  return (
    <div className="space-y-6">
      {publications.map((pub) => (
        <article
          key={pub.id}
          className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_12px_30px_var(--shadow-1)] p-4 sm:p-5"
        >
          <h3 className="text-sm sm:text-base font-semibold text-[color:var(--text)]">
            {pub.title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-[color:var(--muted)]">
            {pub.authors}
          </p>

          <p className="mt-1 text-xs sm:text-sm text-[color:var(--muted)]">
            {pub.venue} · {pub.year}
          </p>

          {pub.abstract && (
            <p className="mt-3 text-xs sm:text-sm text-[color:var(--muted-2)]">
              {pub.abstract}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
            {pub.link && (
              <Link
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--primary)] hover:opacity-90 underline underline-offset-2"
              >
                View online
              </Link>
            )}
            {pub.pdf && (
              <Link
                href={pub.pdf}
                target="_blank"
                rel="noreferrer"
                className="text-[color:var(--primary)] hover:opacity-90 underline underline-offset-2"
              >
                Download PDF
              </Link>
            )}
          </div>

          {pub.bibtex && (
            <details className="mt-3 text-xs">
              <summary className="cursor-pointer text-[color:var(--primary)] hover:opacity-90">
                Show BibTeX
              </summary>
              <pre className="mt-2 whitespace-pre-wrap rounded-md bg-[color:var(--surface-2)] p-2 text-[11px] text-[color:var(--muted-2)]">
                {pub.bibtex}
              </pre>
            </details>
          )}
        </article>
      ))}
    </div>
  );
}
