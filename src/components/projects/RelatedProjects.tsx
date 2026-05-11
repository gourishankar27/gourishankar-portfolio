import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function RelatedProjects({
  projects,
}: {
  projects?: Project[];
}) {
  if (!projects || projects.length === 0) return null;

  return (
    <section aria-label="Related projects" className="space-y-3">
      <h2 className="text-sm font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em]">
        Related projects
      </h2>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            className="shadow-none hover:shadow-[0_12px_30px_var(--shadow-1)]"
          />
        ))}
      </div>
    </section>
  );
}
