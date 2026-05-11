import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={[
        "group block rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)]",
        "shadow-[0_12px_30px_var(--shadow-1)] hover:shadow-[0_16px_40px_var(--shadow-2)]",
        "hover:border-[color:var(--danger)] transition-all duration-200 p-4 sm:p-5",
        className ?? "",
      ].join(" ")}
    >
      {project.coverImage && (
        <div className="mb-4 overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-2)]">
          <div className="aspect-[16/9] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.coverImage}
              alt={project.coverAlt ?? `${project.title} cover`}
              className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-[color:var(--text)]">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-[color:var(--muted)]">
            {project.category} · {project.year}
          </p>
        </div>
        {project.featured && (
          <span className="text-[10px] uppercase tracking-[0.16em] rounded-full bg-[color:var(--danger-soft)] text-[color:var(--danger)] px-2 py-1">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-[color:var(--muted-2)] line-clamp-3">
        {project.summary}
      </p>

      {project.tags && project.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-[11px] text-[color:var(--muted-2)] group-hover:border-[color:var(--primary)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
