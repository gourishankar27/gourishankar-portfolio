import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { DefenseHudCanvas } from "@/components/experience/DefenseHudCanvas";

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
          Experience spanning NASA-aligned event-based space autonomy research,
          reliability-critical defense platforms, backend/data systems,
          observability, computer vision, and real-time autonomy evaluation.
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
