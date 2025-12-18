import Link from "next/link";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block rounded-xl border border-[#E4E6EB] bg-white shadow-[0_12px_30px_rgba(77,163,255,0.12)] hover:shadow-[0_16px_40px_rgba(77,163,255,0.18)] hover:border-[#FF6B6B] transition-all duration-200 p-4 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-[#1F1F1F]">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-[#6B6B6B]">
            {project.category} · {project.year}
          </p>
        </div>
        {project.featured && (
          <span className="text-[10px] uppercase tracking-[0.16em] rounded-full bg-[#FFE3E3] text-[#B03333] px-2 py-1">
            Featured
          </span>
        )}
      </div>

      <p className="mt-3 text-sm text-[#3A3A3A] line-clamp-3">
        {project.summary}
      </p>

      {project.tags && project.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-[#E4E6EB] bg-[#FDFDFE] px-2.5 py-1 text-[11px] text-[#4A4A4A] group-hover:border-[#4DA3FF]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
