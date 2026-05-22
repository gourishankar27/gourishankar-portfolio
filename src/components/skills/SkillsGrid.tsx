import { skillCategories } from "@/data/skills";
import { SkillTag } from "./SkillTag";

export function SkillsGrid() {
  return (
    <div className="grid gap-4 md:gap-6 md:grid-cols-2">
      {skillCategories.map((category) => (
        <div
          key={category.id}
          className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_12px_30px_var(--shadow-1)] p-4 sm:p-5"
        >
          <h3 className="text-sm sm:text-base font-semibold text-[color:var(--text)] mb-1">
            {category.name}
          </h3>
          {category.description && (
            <p className="text-xs sm:text-sm text-[color:var(--muted)] mb-3">
              {category.description}
            </p>
          )}
          <div className="flex flex-wrap gap-1.5">
            {category.skills.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
