import type { Project } from "@/types/project";
import { featuredProjects, miniProjects } from "@/data/projects";

export function getFeaturedProjects(): Project[] {
  return [...featuredProjects].sort(
    (a, b) => (a.order ?? 0) - (b.order ?? 0)
  );
}

export function getMiniProjects(): Project[] {
  return [...miniProjects].sort(
    (a, b) => (a.year ?? 0) - (b.year ?? 0)
  ).reverse();
}

export function getAllProjects(): Project[] {
  return [...featuredProjects, ...miniProjects];
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find((p) => p.id === id);
}
