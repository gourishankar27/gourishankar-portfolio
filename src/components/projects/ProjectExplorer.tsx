"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";

function normalize(text: string) {
  return text.toLowerCase().trim();
}

function matchQuery(project: Project, q: string) {
  if (!q) return true;
  const haystack = [
    project.title,
    project.summary,
    project.category,
    ...(project.tags ?? []),
    ...(project.tech ?? []),
  ]
    .join(" ")
    .toLowerCase();

  return haystack.includes(q);
}

function parseTagsParam(value: string | null): string[] {
  if (!value) return [];
  // Support both comma-separated and repeated values (we store comma-separated).
  return value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function getTagsFromSearchParams(sp: ReturnType<typeof useSearchParams>): string[] {
  const all = sp.getAll("tags");
  if (all.length === 0) return [];
  if (all.length === 1) return parseTagsParam(all[0]);
  // If tags are repeated in the URL (?tags=A&tags=B), treat each as a tag.
  return all.map((t) => t.trim()).filter(Boolean);
}

function serializeTagsParam(tags: string[]): string {
  return tags
    .map((t) => t.trim())
    .filter(Boolean)
    .join(",");
}

function useDebouncedValue<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = React.useState(value);
  React.useEffect(() => {
    const t = window.setTimeout(() => setDebounced(value), delayMs);
    return () => window.clearTimeout(t);
  }, [value, delayMs]);
  return debounced;
}

export function ProjectExplorer({
  projects,
  initialQuery,
  initialCategory,
  initialTags,
  initialFeaturedOnly,
}: {
  projects: Project[];
  initialQuery?: string;
  initialCategory?: string;
  initialTags?: string[];
  initialFeaturedOnly?: boolean;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [query, setQuery] = React.useState(initialQuery ?? "");
  const [category, setCategory] = React.useState<string>(initialCategory ?? "All");
  const [selectedTags, setSelectedTags] = React.useState<string[]>(initialTags ?? []);
  const [featuredOnly, setFeaturedOnly] = React.useState(Boolean(initialFeaturedOnly));

  const debouncedQuery = useDebouncedValue(query, 250);

  const skipNextUrlToStateSync = React.useRef(false);

  // Keep state in sync with the URL (supports back/forward navigation).
  React.useEffect(() => {
    const q = searchParams.get("q") ?? "";
    const c = searchParams.get("category") ?? "All";
    const t = getTagsFromSearchParams(searchParams);
    const f = searchParams.get("featured") === "1" || searchParams.get("featured") === "true";

    if (skipNextUrlToStateSync.current) {
      // This URL change was initiated by our own state → URL syncing.
      skipNextUrlToStateSync.current = false;
      return;
    }

    // Only update state if URL differs.
    if (q !== query) setQuery(q);
    if (c !== category) setCategory(c);

    const currTags = selectedTags.slice().sort().join(",");
    const nextTags = t.slice().sort().join(",");
    if (currTags !== nextTags) setSelectedTags(t);

    if (f !== featuredOnly) setFeaturedOnly(f);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  // Push filter state into the URL so filtered views are shareable.
  React.useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());

    const q = debouncedQuery.trim();
    if (q) params.set("q", q);
    else params.delete("q");

    if (category && category !== "All") params.set("category", category);
    else params.delete("category");

    const tagsParam = serializeTagsParam(selectedTags);
    if (tagsParam) params.set("tags", tagsParam);
    else params.delete("tags");

    if (featuredOnly) params.set("featured", "1");
    else params.delete("featured");

    const href = params.toString() ? `${pathname}?${params.toString()}` : pathname;
    const currentHref = searchParams.toString() ? `${pathname}?${searchParams.toString()}` : pathname;
    if (href !== currentHref) {
      skipNextUrlToStateSync.current = true;
      router.replace(href, { scroll: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery, category, selectedTags, featuredOnly]);

  const categories = React.useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.category))).sort();
  }, [projects]);

  const tags = React.useMemo(() => {
    const all = projects.flatMap((p) => p.tags ?? []);
    return Array.from(new Set(all)).sort();
  }, [projects]);

  const filtered = React.useMemo(() => {
    const q = normalize(query);
    const results = projects
      .filter((p) => (featuredOnly ? Boolean(p.featured) : true))
      .filter((p) => (category === "All" ? true : p.category === category))
      .filter((p) => {
        if (selectedTags.length === 0) return true;
        const set = new Set(p.tags ?? []);
        // OR semantics (any selected tag)
        return selectedTags.some((t) => set.has(t));
      })
      .filter((p) => matchQuery(p, q))
      .sort((a, b) => {
        // Featured first, ordered; then newest year; then title.
        const aFeatured = a.featured ? 1 : 0;
        const bFeatured = b.featured ? 1 : 0;
        if (aFeatured !== bFeatured) return bFeatured - aFeatured;

        const ao = a.order ?? 999;
        const bo = b.order ?? 999;
        if (ao !== bo) return ao - bo;

        if (a.year !== b.year) return b.year - a.year;
        return a.title.localeCompare(b.title);
      });
    return results;
  }, [projects, query, category, selectedTags, featuredOnly]);

  function toggleTag(tag: string) {
    setSelectedTags((prev) => {
      if (prev.includes(tag)) return prev.filter((t) => t !== tag);
      return [...prev, tag];
    });
  }

  function clearAll() {
    setQuery("");
    setCategory("All");
    setSelectedTags([]);
    setFeaturedOnly(false);
  }

  const hasFilters =
    query.trim().length > 0 || category !== "All" || selectedTags.length > 0 || featuredOnly;

  const [copied, setCopied] = React.useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // no-op
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 sm:p-5 shadow-[0_12px_30px_var(--shadow-1)]">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-end">
          <label className="block">
            <span className="block text-xs font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em]">
              Search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects (YOLO, SLAM, Isaac, Transformers…)"
              className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--primary)]"
            />
          </label>

          <label className="block">
            <span className="block text-xs font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em]">
              Category
            </span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full rounded-lg border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-2 text-sm text-[color:var(--text)] outline-none focus:border-[color:var(--primary)]"
            >
              <option value="All">All</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="inline-flex items-center gap-2 text-sm text-[color:var(--muted-2)] select-none">
            <input
              type="checkbox"
              checked={featuredOnly}
              onChange={(e) => setFeaturedOnly(e.target.checked)}
              className="h-4 w-4"
            />
            Featured only
          </label>
        </div>

        {tags.length > 0 && (
          <div className="mt-4">
            <div className="text-xs font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em]">
              Tags
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {tags.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={[
                      "rounded-full px-3 py-1 text-xs border transition-colors",
                      active
                        ? "bg-[color:var(--primary-soft)] border-[color:var(--primary-border)] text-[color:var(--text)]"
                        : "bg-[color:var(--surface)] border-[color:var(--border)] text-[color:var(--muted-2)] hover:border-[color:var(--primary)]",
                    ].join(" ")}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-sm text-[color:var(--muted)]">
            {filtered.length} project{filtered.length === 1 ? "" : "s"}
            {hasFilters ? " match" : ""}
          </div>
          <div className="flex items-center gap-3">
            {hasFilters && (
              <button
                type="button"
                onClick={clearAll}
                className="text-sm text-[color:var(--text)] hover:underline"
              >
                Clear filters
              </button>
            )}

            <button
              type="button"
              onClick={copyLink}
              className="text-sm text-[color:var(--text)] hover:underline"
              aria-label="Copy link to this filtered view"
            >
              {copied ? "Copied" : "Copy link"}
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-sm text-[color:var(--muted-2)]">
          No projects matched your filters. Try clearing filters or searching for a different term.
        </div>
      )}
    </div>
  );
}
