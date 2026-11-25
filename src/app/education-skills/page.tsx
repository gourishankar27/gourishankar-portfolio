import type { Metadata } from "next";
import { EducationTimeline } from "@/components/education/EducationTimeline";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { absoluteUrl, ogImageUrl } from "@/lib/seo";

const description = "Education in Robotics and Autonomous Systems at Arizona State University and Intelligent Systems at MIT-ADT University, with skills across applied AI, robotics, software engineering, and research evaluation.";
export const metadata: Metadata = {
  title: "Education & Skills",
  description,
  alternates: { canonical: "/education-skills" },
  openGraph: { title: "Education & Skills | Gourishankar Bansode", description, url: absoluteUrl("/education-skills"), images: [ogImageUrl({ title: "Education & Skills", subtitle: "AI · Robotics · Software Engineering" })] },
  twitter: { card: "summary_large_image", title: "Education & Skills | Gourishankar Bansode", description, images: [ogImageUrl({ title: "Education & Skills", subtitle: "AI · Robotics · Software Engineering" })] },
};

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
          Academic study in robotics, autonomous systems, and intelligent systems,
          alongside practical work in LLM applications, perception, planning,
          backend software, and research evaluation.
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
