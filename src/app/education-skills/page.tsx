import { EducationTimeline } from "@/components/education/EducationTimeline";
import { SkillsGrid } from "@/components/skills/SkillsGrid";

export default function EducationSkillsPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Education &amp; Skills
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[color:var(--muted-2)] max-w-3xl">
          Formal training in robotics, autonomous systems, and intelligent
          systems, combined with hands-on experience in event-based vision,
          state estimation, computer vision, data pipelines, and reliable
          production software.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em]">
          Education
        </h2>
        <EducationTimeline />
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold text-[color:var(--muted)] uppercase tracking-[0.18em]">
          Skills
        </h2>
        <SkillsGrid />
      </section>
    </div>
  );
}
