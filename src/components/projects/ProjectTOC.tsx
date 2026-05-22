import type { ProjectSection } from "@/types/project";

export function ProjectTOC({
  sections,
}: {
  sections?: ProjectSection[];
}) {
  if (!sections || sections.length === 0) return null;

  return (
    <nav aria-label="On this page" className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4">
      <div className="text-xs font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em]">On this page</div>
      <ul className="mt-3 space-y-2 text-sm">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-[color:var(--muted-2)] hover:text-[color:var(--text)] hover:underline"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
