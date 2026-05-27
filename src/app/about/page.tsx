import type { Metadata } from "next";
import Link from "next/link";

import { absoluteUrl, ogImageUrl, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Bio & Contact",
  description:
    "Bio, contact details, and resume for Gourishankar Bansode - robotics and AI software engineer focused on event-based vision, state estimation, space autonomy, and robust autonomous systems.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    url: absoluteUrl("/about"),
    title: "Bio & Contact | Gourishankar Bansode",
    description:
      "Robotics and AI software engineer working on event-based vision, state estimation, differentiable physics, and production-grade autonomous systems.",
    images: [
      {
        url: ogImageUrl({
          title: "Bio & Contact",
          subtitle: "Resume · Research · Links",
        }),
        width: 1200,
        height: 630,
        alt: "Bio and contact preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bio & Contact | Gourishankar Bansode",
    description:
      "Robotics and AI software engineer working on event-based vision, state estimation, differentiable physics, and production-grade autonomous systems.",
    images: [
      ogImageUrl({
        title: "Bio & Contact",
        subtitle: "Resume · Research · Links",
      }),
    ],
  },
};

const contactItems = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  // {
  //   label: "Phone",
  //   value: siteConfig.phone,
  //   href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`,
  // },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gourishankarb",
    href: siteConfig.socials.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/gourishankar27",
    href: siteConfig.socials.github,
    external: true,
  },
];

const focusAreas = [
  "Event-based vision",
  "Space autonomy",
  "State estimation",
  "Differentiable physics",
  "Robotics simulation/control",
  "Reliable distributed systems",
];

export default function AboutPage() {
  const resumePath = "/resume.pdf";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Bio & Contact",
    url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      // telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Tempe",
        addressRegion: "AZ",
        addressCountry: "US",
      },
      sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
      jobTitle: "Robotics & AI Software Engineer",
    },
  };

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
          Bio / Contact / Resume
        </p>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Building reliable autonomy systems from sensing to software.
        </h1>
        <p className="max-w-3xl text-sm sm:text-base text-[color:var(--muted-2)]">
          I&apos;m a Robotics and AI Software Engineer based in Tempe, Arizona,
          currently pursuing an M.S. in Robotics and Autonomous Systems at ASU
          and working as a Research Assistant on event-based star tracking for
          high-speed spacecraft attitude estimation.
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center rounded-full bg-[color:var(--primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Email me
          </a>
          <a
            href={resumePath}
            download
            className="inline-flex items-center rounded-full border border-[color:var(--primary-border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--primary)] hover:bg-[color:var(--primary-soft)]"
          >
            Download resume
          </a>
          <Link
            href="/projects"
            className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm font-medium text-[color:var(--text)] hover:border-[color:var(--primary)]"
          >
            Browse projects
          </Link>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <main className="space-y-6">
          <section
            id="bio"
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6 shadow-[0_12px_30px_var(--shadow-1)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Bio
                </p>
                <h2 className="mt-2 text-lg font-semibold text-[color:var(--text)]">
                  Research-driven engineer with production systems depth
                </h2>
              </div>
              <span className="hidden sm:inline-flex rounded-full border border-[color:var(--primary-border)] bg-[color:var(--primary-soft)] px-3 py-1 text-xs font-medium text-[color:var(--text)]">
                ASU RA · NASA / Alphacore
              </span>
            </div>

            <div className="mt-4 space-y-3 text-sm sm:text-base text-[color:var(--muted-2)]">
              <p>
                My current research focuses on event-based sensing for spacecraft
                attitude estimation, including centroid correction, event
                batching, astrometric initialization, adaptive measurement
                uncertainty, and weighted Wahba attitude estimation.
              </p>
              <p>
                Before graduate school, I built production-grade Python, C, and
                C++ software for distributed, reliability-critical defense
                platforms at Tata Advanced Systems, including backend services,
                telemetry/health monitoring, data pipelines, and deterministic
                control workflows.
              </p>
              <p>
                Across my projects, I care about measurable engineering:
                latency, reliability, detection accuracy, tracking error,
                simulation-to-control loops, and the tooling that makes complex
                systems observable and easier to improve.
              </p>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_12px_30px_var(--shadow-1)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Current focus
              </p>
              <h2 className="mt-2 text-base font-semibold text-[color:var(--text)]">
                Event-based space autonomy
              </h2>
              <p className="mt-2 text-sm text-[color:var(--muted-2)]">
                Low-SWaP sensing, high-speed star motion, centroid correction,
                synthetic/real evaluation, and attitude-estimation pipelines.
              </p>
            </div>

            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 shadow-[0_12px_30px_var(--shadow-1)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Engineering signal
              </p>
              <h2 className="mt-2 text-base font-semibold text-[color:var(--text)]">
                Robust, measurable systems
              </h2>
              <p className="mt-2 text-sm text-[color:var(--muted-2)]">
                Backend services, C/C++ and Python pipelines, observability,
                profiling, evaluation design, simulation, and real-time control.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
              Focus areas
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center rounded-full border border-[color:var(--primary-border)] bg-[color:var(--primary-soft)] px-3 py-1.5 text-xs text-[color:var(--text)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6 shadow-[0_12px_30px_var(--shadow-1)] scroll-mt-24"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Contact
                </p>
                <h2 className="mt-2 text-lg font-semibold text-[color:var(--text)]">
                  Let&apos;s talk robotics, autonomy, and research.
                </h2>
              </div>
              <span className="rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-1 text-xs text-[color:var(--muted-2)]">
                {siteConfig.location}
              </span>
            </div>

            <p className="mt-3 max-w-2xl text-sm text-[color:var(--muted-2)]">
              Open to robotics/autonomy research roles, AI software engineering,
              space autonomy work, and collaborations around event-based vision,
              simulation, and real-time perception-to-control systems.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4 transition-colors hover:border-[color:var(--primary)]"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-all text-sm font-medium text-[color:var(--text)] group-hover:text-[color:var(--primary)]">
                    {item.value}
                    {item.external ? <span aria-hidden="true"> ↗</span> : null}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <aside
          id="resume"
          className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6 shadow-[0_12px_30px_var(--shadow-1)] scroll-mt-24 lg:sticky lg:top-24"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Resume
              </p>
              <h2 className="mt-2 text-lg font-semibold text-[color:var(--text)]">
                View or download
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2">
              <a
                href={resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1.5 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]"
              >
                Open
              </a>
              <a
                href={resumePath}
                download
                className="inline-flex items-center rounded-full bg-[color:var(--primary)] px-3 py-1.5 text-sm font-medium text-white hover:opacity-90"
              >
                Download
              </a>
            </div>
          </div>

          <div className="mt-4 overflow-hidden rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)]">
            <div className="h-[70vh] w-full">
              <iframe
                src={`${resumePath}#view=FitH`}
                title="Resume PDF"
                className="h-full w-full"
              />
            </div>
          </div>


        </aside>
      </div>
    </div>
  );
}
