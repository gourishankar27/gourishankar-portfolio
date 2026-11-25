"use client";

import { useState } from "react";
import { skillCategories } from "@/data/skills";
import type { SkillGroup } from "@/types/skills";
import { SkillTag } from "./SkillTag";

const filters: { id: "all" | SkillGroup; label: string }[] = [
  { id: "all", label: "All Skills" },
  { id: "ai", label: "AI & ML" },
  { id: "robotics", label: "Robotics & Autonomy" },
  { id: "software", label: "Software Engineering" },
  { id: "research", label: "Research & Evaluation" },
];

export function SkillsGrid() {
  const [selected, setSelected] = useState<"all" | SkillGroup>("all");
  const categories = skillCategories.filter((category) => selected === "all" || category.groups?.includes(selected));
  return (
    <div className="space-y-4">
      <div role="group" aria-label="Filter technical skills" className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button key={filter.id} type="button" aria-pressed={selected === filter.id} onClick={() => setSelected(filter.id)} className={`min-h-11 rounded-full border px-3 py-2 text-xs sm:text-sm ${selected === filter.id ? "border-[color:var(--primary-border)] bg-[color:var(--primary-soft)] text-[color:var(--text)]" : "border-[color:var(--border)] bg-[color:var(--surface)] text-[color:var(--muted-2)] hover:border-[color:var(--primary)]"}`}>
            {filter.label}
          </button>
        ))}
      </div>
      <p role="status" aria-live="polite" className="text-xs text-[color:var(--muted)]">Showing {categories.length} skill categories. Project case studies describe the implementation and evaluation context.</p>
      <div className="grid gap-4 md:gap-6 md:grid-cols-2">
      {categories.map((category) => (
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
          {category.familiarity && (
            <div className="mt-4">
              <p className="mb-2 text-xs font-medium text-[color:var(--muted)]">Additional familiarity</p>
              <div className="flex flex-wrap gap-1.5">{category.familiarity.map((skill) => <SkillTag key={skill} label={skill} />)}</div>
            </div>
          )}
        </div>
      ))}
      </div>
    </div>
  );
}
