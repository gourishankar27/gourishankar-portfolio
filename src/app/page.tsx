import Link from "next/link";
import { HeroSection } from "@/components/hero/HeroSection";

export default function HomePage() {
  return (
    <div className="space-y-10 lg:space-y-12">
      <HeroSection />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-alpha)] p-4 sm:p-5 shadow-[0_10px_24px_var(--shadow-1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] mb-1">
            Current Research
          </p>
          <p className="text-sm text-[color:var(--text)]">
            Research Assistant at ASU working on NASA/Alphacore event-based star
            tracking for high-speed spacecraft attitude estimation.
          </p>
        </div>

        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-alpha)] p-4 sm:p-5 shadow-[0_10px_24px_var(--shadow-1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] mb-1">
            Systems Background
          </p>
          <p className="text-sm text-[color:var(--text)]">
            2+ years building Python, C, and C++ software for distributed,
            reliability-critical defense platforms at Tata Advanced Systems.
          </p>
        </div>

        <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-alpha)] p-4 sm:p-5 shadow-[0_10px_24px_var(--shadow-1)]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)] mb-1">
            Recognition
          </p>
          <p className="text-sm text-[color:var(--text)]">
            Smart India Hackathon winner, National Innovation Contest finalist,
            and IEEE-published work on a descriptive question-answering system.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6 shadow-[0_12px_30px_var(--shadow-1)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Portfolio focus
            </p>
            <h2
              className="mt-2 text-xl font-semibold text-[color:var(--text)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Robotics case studies with measurable engineering outcomes.
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[color:var(--muted-2)]">
              Each project is structured around the problem, system design,
              evaluation metrics, media, and next steps so reviewers can quickly
              see both research depth and implementation rigor.
            </p>
          </div>
          <Link
            href="/about#resume"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-[color:var(--primary-border)] bg-[color:var(--primary-soft)] px-5 py-2.5 text-sm font-medium text-[color:var(--primary)] hover:border-[color:var(--primary)]"
          >
            View resume
          </Link>
        </div>
      </section>
    </div>
  );
}
