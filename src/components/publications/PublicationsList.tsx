import { publications } from "@/data/publications";
import Link from "next/link";

export function PublicationsList() {
  return (
    <div className="space-y-6">
      {publications.map((pub) => (
        <article
          key={pub.id}
          className="rounded-xl border border-[#E4E6EB] bg-white shadow-[0_12px_30px_rgba(77,163,255,0.12)] p-4 sm:p-5"
        >
          <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F]">
            {pub.title}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-[#6B6B6B]">
            {pub.authors}
          </p>

          <p className="mt-1 text-xs sm:text-sm text-[#6B6B6B]">
            {pub.venue} · {pub.year}
          </p>

          {pub.abstract && (
            <p className="mt-3 text-xs sm:text-sm text-[#3A3A3A]">
              {pub.abstract}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
            {pub.link && (
              <Link
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#4DA3FF] hover:text-[#3b83d1] underline underline-offset-2"
              >
                View online
              </Link>
            )}
            {pub.pdf && (
              <Link
                href={pub.pdf}
                target="_blank"
                rel="noreferrer"
                className="text-[#4DA3FF] hover:text-[#3b83d1] underline underline-offset-2"
              >
                Download PDF
              </Link>
            )}
          </div>

          {pub.bibtex && (
            <details className="mt-3 text-xs">
              <summary className="cursor-pointer text-[#4DA3FF] hover:text-[#3b83d1]">
                Show BibTeX
              </summary>
              <pre className="mt-2 whitespace-pre-wrap rounded-md bg-[#F4F4F7] p-2 text-[11px] text-[#3A3A3A]">
                {pub.bibtex}
              </pre>
            </details>
          )}
        </article>
      ))}
    </div>
  );
}
