import { getFeaturedProjects, getMiniProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const featured = getFeaturedProjects();
  const mini = getMiniProjects();

  return (
    <div className="space-y-10">
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Projects
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#3A3A3A] max-w-2xl">
          A selection of robotics, AI, and deep learning projects — from
          differentiable physics and autonomous drones to financial forecasting
          and large-scale vision models.
        </p>
      </header>

      {/* Featured Projects */}
      <section>
        <h2 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-3">
          Featured
        </h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Mini / Additional Projects */}
      <section>
        <h2 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-[0.18em] mb-3">
          Deep Learning &amp; Research
        </h2>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {mini.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
