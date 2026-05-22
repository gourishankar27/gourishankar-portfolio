import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getAllProjects, getProjectById, getRelatedProjects } from "@/lib/projects";
import { absoluteUrl, ogImageUrl, siteConfig } from "@/lib/seo";
import { ProjectLinks } from "@/components/projects/ProjectLinks";
import { ProjectMediaGallery } from "@/components/projects/ProjectMediaGallery";
import { ProjectMetrics } from "@/components/projects/ProjectMetrics";
import { ProjectSections } from "@/components/projects/ProjectSections";
import { ProjectTOC } from "@/components/projects/ProjectTOC";
import { RelatedProjects } from "@/components/projects/RelatedProjects";

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};

  const title = `${project.title}`;
  const description = project.summary;
  const url = absoluteUrl(`/projects/${project.id}`);
  const image = ogImageUrl({
    title: project.title,
    subtitle: `${project.category} · ${project.year}`,
  });

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${project.id}`,
    },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${project.title} preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    keywords: Array.from(
      new Set([project.category, ...(project.tags ?? []), ...(project.tech ?? [])])
    ),
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  const related = getRelatedProjects(project.id, 4);

  const sections = project.sections ?? [];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.id}`),
    datePublished: `${project.year}-01-01`,
    keywords: project.tags ?? [],
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    about: project.tech ?? [],
    sameAs: (project.links ?? [])
      .map((l) => l.href)
      .filter((href) => /^https?:\/\//i.test(href)),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-4">
        <div className="text-sm text-[color:var(--muted)]">
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[color:var(--muted-2)]">{project.title}</span>
        </div>

        <div className="space-y-3">
          <h1
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {project.title}
          </h1>

          <p className="text-sm sm:text-base text-[color:var(--muted-2)] max-w-3xl">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-[color:var(--muted-2)]">
              {project.category}
            </span>
            <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-[color:var(--muted-2)]">
              {project.year}
            </span>
            {project.role && (
              <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-[color:var(--muted-2)]">
                {project.role}
              </span>
            )}
          </div>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-[color:var(--primary-soft)] border border-[color:var(--primary-border)] px-3 py-1 text-xs text-[color:var(--text)]"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          <ProjectLinks links={project.links} />
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <main className="space-y-10">
          {project.highlights && project.highlights.length > 0 && (
            <section aria-label="Highlights">
              <h2 className="text-sm font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em] mb-3">
                Highlights
              </h2>
              <ul className="space-y-2 text-sm sm:text-base text-[color:var(--muted-2)] list-disc pl-5">
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </section>
          )}

          <ProjectMetrics metrics={project.metrics} />
          <ProjectMediaGallery media={project.media} />

          {project.tech && project.tech.length > 0 && (
            <section aria-label="Tech stack">
              <h2 className="text-sm font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em] mb-3">
                Tech stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 text-xs text-[color:var(--muted-2)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <ProjectSections sections={sections} />

          <RelatedProjects projects={related} />

          <section aria-label="Back to projects">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]"
            >
              ← Back to all projects
            </Link>
          </section>
        </main>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <ProjectTOC sections={sections} />

            {project.coverImage && (
              <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-3">
                <div className="text-xs font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em]">
                  Cover
                </div>
                <div className="mt-3 overflow-hidden rounded-lg border border-[color:var(--border)] bg-[color:var(--surface-2)]">
                  <div className="aspect-[16/9] w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.coverImage}
                      alt={project.coverAlt ?? `${project.title} cover`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
