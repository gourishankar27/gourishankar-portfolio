import type { ProjectMetric } from "@/types/project";

export function ProjectMetrics({
  metrics,
}: {
  metrics?: ProjectMetric[];
}) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section aria-label="Key metrics">
      <h2 className="text-sm font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em] mb-3">
        Key metrics
      </h2>
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <div
            key={`${m.label}:${m.value}`}
            className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 shadow-[0_12px_30px_var(--shadow-1)]"
          >
            <div className="text-xs text-[color:var(--muted)]">{m.label}</div>
            <div className="mt-1 text-lg font-semibold text-[color:var(--text)]">
              {m.value}
            </div>
            {m.context && (
              <div className="mt-1 text-xs text-[color:var(--muted-2)]">{m.context}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
