import { HeroSection } from "@/components/hero/HeroSection";

export default function HomePage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <HeroSection />

      {/* Snapshot row to use vertical space */}
      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-[#E4E6EB] bg-white/80 p-4 sm:p-5 shadow-[0_10px_24px_rgba(77,163,255,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">
            Background
          </p>
          <p className="text-sm text-[#1F1F1F]">
            More than 2 years of experience building backend and data-intensive
            software for defense platforms at Tata Advanced Systems.
          </p>
        </div>

        <div className="rounded-xl border border-[#E4E6EB] bg-white/80 p-4 sm:p-5 shadow-[0_10px_24px_rgba(77,163,255,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">
            Current Focus
          </p>
          <p className="text-sm text-[#1F1F1F]">
            M.S. in Robotics and Autonomous Systems (Artificial Intelligence) at ASU,
            with work in differentiable physics, autonomous drones, and deep learning systems.
          </p>
        </div>

        <div className="rounded-xl border border-[#E4E6EB] bg-white/80 p-4 sm:p-5 shadow-[0_10px_24px_rgba(77,163,255,0.12)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B6B6B] mb-1">
            Highlights
          </p>
          <p className="text-sm text-[#1F1F1F]">
            Smart India Hackathon winner, National Innovation Contest finalist, and an
            IEEE publication on a BERT based descriptive question answering system.
          </p>
        </div>
      </section>

    </div>
  );
}
