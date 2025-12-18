import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { DefenseHudCanvas } from "@/components/experience/DefenseHudCanvas";

export default function ExperiencePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Experience
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#3A3A3A] max-w-2xl">
          Work across robotics, embedded systems, and AI — from defense‑grade
          systems to research in differentiable physics, autonomous drones, and
          deep learning.
        </p>
      </header>

      {/* Layout: left timeline, right HUD */}
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
