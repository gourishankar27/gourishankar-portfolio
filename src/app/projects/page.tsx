import type { Metadata } from "next";

import { getAllProjects } from "@/lib/projects";
import { absoluteUrl, ogImageUrl } from "@/lib/seo";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Robotics, space autonomy, and AI/ML projects - case studies with metrics, media, and system-level engineering details.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/projects"),
    title: "Projects | Gourishankar Bansode",
    description:
      "Robotics, space autonomy, and AI/ML projects - case studies with metrics, media, and system-level engineering details.",
    images: [
      {
        url: ogImageUrl({
          title: "Projects",
          subtitle: "Robotics · Space Autonomy · AI",
        }),
        width: 1200,
        height: 630,
        alt: "Projects preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Gourishankar Bansode",
    description:
      "Robotics, space autonomy, and AI/ML projects - case studies with metrics, media, and system-level engineering details.",
    images: [
      ogImageUrl({
        title: "Projects",
        subtitle: "Robotics · Space Autonomy · AI",
      }),
    ],
  },
};

type SearchParams = Record<string, string | string[] | undefined>;

type PageProps = {
  searchParams?: Promise<SearchParams>;
};

function firstParam(value: string | string[] | undefined): string | undefined {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value[0];
  return undefined;
}

function booleanParam(value: string | string[] | undefined): boolean {
  const v = firstParam(value)?.toLowerCase();
  return v === "1" || v === "true" || v === "yes";
}

function tagsParam(value: string | string[] | undefined): string[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.flatMap((v) => v.split(",")).map((t) => t.trim()).filter(Boolean);
  }
  return value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

export default async function ProjectsPage({ searchParams }: PageProps) {
  const projects = getAllProjects();
  const resolvedSearchParams = searchParams ? await searchParams : {};

  const initialQuery = firstParam(resolvedSearchParams.q) ?? "";
  const initialCategory = firstParam(resolvedSearchParams.category) ?? "All";
  const initialTags = tagsParam(resolvedSearchParams.tags);
  const initialFeaturedOnly = booleanParam(resolvedSearchParams.featured);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: absoluteUrl("/projects"),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: absoluteUrl(`/projects/${p.id}`),
        name: p.title,
      })),
    },
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Projects
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[color:var(--muted-2)] max-w-2xl">
          A selection of robotics, space autonomy, AI, and deep learning
          projects - from event-based star tracking and differentiable physics
          to autonomous drones, real-time vision, and forecasting systems.
        </p>
      </header>

      <ProjectExplorer
        projects={projects}
        initialQuery={initialQuery}
        initialCategory={initialCategory}
        initialTags={initialTags}
        initialFeaturedOnly={initialFeaturedOnly}
      />
    </div>
  );
}
