import { education } from "@/data/education";

export function EducationTimeline() {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <div key={edu.id} className="flex gap-4">
          {/* Timeline marker */}
          <div className="flex flex-col items-center">
            <div className="h-3 w-3 rounded-full bg-[color:var(--danger)]" />
            {index !== education.length - 1 && (
              <div className="mt-1 w-px flex-1 bg-[color:var(--border)]" />
            )}
          </div>

          {/* Card */}
          <div className="flex-1 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_12px_30px_var(--shadow-1)] p-4 sm:p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[color:var(--text)]">
                  {edu.degree} in {edu.field}
                </h3>
                <p className="text-xs sm:text-sm text-[color:var(--muted)]">
                  {edu.school}
                  {edu.location ? ` · ${edu.location}` : ""}
                </p>
              </div>
              <p className="text-xs sm:text-sm text-[color:var(--muted)]">{edu.period}</p>
            </div>

            {edu.details && (
              <p className="mt-3 text-xs sm:text-sm text-[color:var(--muted-2)]">
                {edu.details}
              </p>
            )}

            {edu.highlights && edu.highlights.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-[color:var(--muted-2)] list-disc pl-4">
                {edu.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
