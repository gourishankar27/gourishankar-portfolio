import { experiences } from "@/data/experience";

export function ExperienceTimeline() {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="flex gap-4">
          {/* Timeline marker */}
          <div className="flex flex-col items-center">
            <div className="h-3 w-3 rounded-full bg-[color:var(--primary)]" />
            {index !== experiences.length - 1 && (
              <div className="mt-1 w-px flex-1 bg-[color:var(--border)]" />
            )}
          </div>

          {/* Card */}
          <div className="flex-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_12px_30px_var(--shadow-1)] p-4 sm:p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[color:var(--text)]">
                  {exp.role}
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)]">
                  {exp.company}
                  {exp.location ? ` · ${exp.location}` : ""}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[color:var(--muted)]">{exp.period}</p>
            </div>

            {exp.description && (
              <p className="mt-3 text-xs sm:text-sm text-[color:var(--muted-2)]">
                {exp.description}
              </p>
            )}

            {exp.bullets && exp.bullets.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-[color:var(--muted-2)] list-disc pl-4">
                {exp.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}

            {exp.tech && exp.tech.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-[color:var(--primary-soft)] border border-[color:var(--primary-border)] px-2.5 py-1 text-[11px] text-[color:var(--muted-2)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
