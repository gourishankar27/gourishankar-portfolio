import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { DefenseHudCanvas } from "@/components/experience/DefenseHudCanvas";
import { absoluteUrl, ogImageUrl } from "@/lib/seo";

const description = "Professional C++ and Python software engineering, telemetry, automation, computer vision, and spacecraft attitude-estimation research at Arizona State University.";
export const metadata: Metadata = {
  title: "Professional Experience",
  description,
  alternates: { canonical: "/experience" },
  openGraph: { title: "Professional Experience | Gourishankar Bansode", description, url: absoluteUrl("/experience"), images: [ogImageUrl({ title: "Professional Experience", subtitle: "Software Engineering · Applied AI · Robotics Research" })] },
  twitter: { card: "summary_large_image", title: "Professional Experience | Gourishankar Bansode", description, images: [ogImageUrl({ title: "Professional Experience", subtitle: "Software Engineering · Applied AI · Robotics Research" })] },
};

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Professional Experience
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[color:var(--muted-2)] max-w-3xl">
          More than two years of professional C++ and Python engineering,
          followed by research in event-based vision and spacecraft attitude
          estimation. My work connects dependable backend systems, applied AI,
          and robotics evaluation.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-start">
        <div>
          <ExperienceTimeline />
        </div>
        <div>
          <DefenseHudCanvas />
        </div>
      </section>
    </div>
  );
}
