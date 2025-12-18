import { EducationTimeline } from "@/components/education/EducationTimeline";
import { SkillsGrid } from "@/components/skills/SkillsGrid";

export default function EducationSkillsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Education &amp; Skills
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#3A3A3A] max-w-2xl">
          Formal training in engineering, deep learning, and robotics, combined
          with hands-on experience building autonomous systems and AI models.
        </p>
      </header>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-[0.18em]">
          Education
        </h2>
        <EducationTimeline />
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[#6B6B6B] uppercase tracking-[0.18em]">
          Skills
        </h2>
        <SkillsGrid />
      </section>
    </div>
  );
}
