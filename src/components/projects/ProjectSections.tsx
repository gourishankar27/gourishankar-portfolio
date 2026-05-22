import type { ProjectSection } from "@/types/project";

export function ProjectSections({
  sections,
}: {
  sections?: ProjectSection[];
}) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[color:var(--text)]">
            {section.title}
          </h2>

          {section.paragraphs && section.paragraphs.length > 0 && (
            <div className="mt-3 space-y-3 text-sm sm:text-base text-[color:var(--muted-2)]">
              {section.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          )}

          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-3 space-y-2 text-sm sm:text-base text-[color:var(--muted-2)] list-disc pl-5">
              {section.bullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
