import Link from "next/link";
import { HeroSection } from "@/components/hero/HeroSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";
import { resumes } from "@/data/resumes";
import { ResumeCard } from "@/components/resumes/ResumeCard";

export default function HomePage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <HeroSection />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-alpha)] p-4 sm:p-5 shadow-[0_10px_24px_var(--shadow-1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] mb-1">
            Current Research
          </p>
          <p className="text-sm text-[color:var(--text)]">
            ASU Research Assistant on event-based spacecraft attitude estimation:
            approximately 8.7 million events across 372 batches in one representative
            3.0-second research sequence.
          </p>
        </div>

        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-alpha)] p-4 sm:p-5 shadow-[0_10px_24px_var(--shadow-1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] mb-1">
            Systems Background
          </p>
          <p className="text-sm text-[color:var(--text)]">
            2+ years developing C++ and Python backend systems, telemetry, and
            automation at Tata Advanced Systems, including leadership of a
            six-engineer team.
          </p>
        </div>

        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-alpha)] p-4 sm:p-5 shadow-[0_10px_24px_var(--shadow-1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] mb-1">
            Recognition
          </p>
          <p className="text-sm text-[color:var(--text)]">
            Smart India Hackathon winner, National Innovation Contest finalist,
            and IEEE-published work on a descriptive question-answering system.
          </p>
        </div>
      </section>
      <section aria-labelledby="resume-pathways-title" className="space-y-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">Professional focus</p>
          <h2 id="resume-pathways-title" className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
            AI &amp; robotics resumes
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-[color:var(--muted-2)]">
            Two views of the same software engineering background. Choose a
            specialization to open the relevant resume and explore the technical work behind it.
          </p>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {resumes.map((resume) => <ResumeCard key={resume.id} resume={resume} />)}
        </div>
      </section>
      <section aria-labelledby="featured-projects-title" className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Selected engineering work
            </p>
            <h2
              id="featured-projects-title"
              className="mt-2 text-xl sm:text-2xl font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Featured projects
            </h2>
          </div>
          <Link href="/projects" className="text-sm text-[color:var(--primary)] hover:underline">
            Explore and filter all projects →
          </Link>
        </div>
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {getFeaturedProjects().map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

    </div>
  );
}
