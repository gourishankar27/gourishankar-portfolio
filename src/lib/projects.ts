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

function overlapCount(a?: string[], b?: string[]) {
  if (!a || !b || a.length === 0 || b.length === 0) return 0;
  const setB = new Set(b);
  let count = 0;
  for (const item of a) {
    if (setB.has(item)) count += 1;
  }
  return count;
}

/**
 * Returns a ranked list of projects that are most similar to the given project.
 * Heuristic: tag overlap > same category > tech overlap.
 */
export function getRelatedProjects(projectId: string, limit = 3): Project[] {
  const base = getProjectById(projectId);
  if (!base) return [];

  const baseTags = base.tags ?? [];
  const baseTech = base.tech ?? [];

  const scored = getAllProjects()
    .filter((p) => p.id !== projectId)
    .map((p) => {
      const tagOverlap = overlapCount(baseTags, p.tags);
      const techOverlap = overlapCount(baseTech, p.tech);
      const sameCategory = p.category === base.category;

      // Weighted score tuned for autonomy portfolios: tags matter most.
      const score = tagOverlap * 3 + (sameCategory ? 2 : 0) + techOverlap * 1;

      return { p, score, tagOverlap, techOverlap };
    })
    .sort((a, b) => {
      if (a.score !== b.score) return b.score - a.score;
      // Tie-breakers: featured, recent, title.
      const af = a.p.featured ? 1 : 0;
      const bf = b.p.featured ? 1 : 0;
      if (af !== bf) return bf - af;
      if (a.p.year !== b.p.year) return b.p.year - a.p.year;
      return a.p.title.localeCompare(b.p.title);
    });

  const top = scored.filter((s) => s.score > 0).slice(0, limit).map((s) => s.p);
  if (top.length > 0) return top;

  // Fallback if nothing overlaps: show latest projects.
  return scored.slice(0, limit).map((s) => s.p);
}
