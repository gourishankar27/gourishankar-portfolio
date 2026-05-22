import type { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/education-skills",
    "/experience",
    "/projects",
    "/achievements",
    "/publications",
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
  }));

  const projectRoutes = getAllProjects().map((p) => ({
    url: absoluteUrl(`/projects/${p.id}`),
    lastModified: now,
  }));

  return [...staticRoutes, ...projectRoutes];
}
