import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";
import type { Project } from "@/types/project";
import Link from "next/link";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

function buildTitle(project: Project | undefined) {
  if (!project) return "Project not found | Gourishankar Bansode";
  return `${project.title} | Gourishankar Bansode`;
}

export async function generateMetadata(
  { params }: ProjectPageProps
): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  return {
    title: buildTitle(project),
    description: project?.summary ?? "Project details.",
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">
      {/* Back link */}
      <div className="text-sm">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-[#4DA3FF] hover:text-[#3b83d1] transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Header */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">
          {project.category} · {project.year}
        </p>
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h1>
        {project.role && (
          <p className="text-sm sm:text-base text-[#6B6B6B]">
            {project.role}
          </p>
        )}
      </header>

      {/* Main layout: left = description, right = meta card */}
      <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
        {/* Left: summary + highlights */}
        <div className="space-y-6">
          {project.summary && (
            <p className="text-sm sm:text-base text-[#3A3A3A]">
              {project.summary}
            </p>
          )}

          {project.highlights && project.highlights.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold text-[#1F1F1F] mb-2">
                Highlights
              </h2>
              <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#3A3A3A]">
                {project.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right: meta card */}
        <aside className="rounded-2xl border border-[#E4E6EB] bg-white shadow-[0_12px_30px_rgba(77,163,255,0.12)] p-4 sm:p-5 space-y-4">
          {project.tags && project.tags.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6B6B] mb-2">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[#E4E6EB] bg-[#FDFDFE] px-2.5 py-1 text-[11px] text-[#4A4A4A]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.tech && project.tech.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6B6B] mb-2">
                Tech Stack
              </h3>
              <ul className="flex flex-wrap gap-1.5 text-[11px] text-[#3A3A3A]">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-[#B7DAFF]/40 px-2.5 py-1"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="text-xs text-[#9A9A9A]">
            <p>
              This page is part of the portfolio of Gourishankar Bansode,
              showcasing robotics, AI, and deep learning work.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
