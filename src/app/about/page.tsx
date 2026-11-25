import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, ogImageUrl, siteConfig } from "@/lib/seo";
import { getResume } from "@/data/resumes";
import { ResumeSelector } from "@/components/resumes/ResumeSelector";

const description = "Meet Gourishankar Bansode, a Robotics & AI Software Engineer with professional C++ and Python experience, applied AI projects, and spacecraft attitude-estimation research at Arizona State University. Explore AI and robotics resumes.";
export const metadata: Metadata = {
  title: "About & Resumes",
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile", url: absoluteUrl("/about"), title: "About & Resumes | Gourishankar Bansode", description,
    images: [{ url: ogImageUrl({ title: "About & Resumes", subtitle: "AI Engineering · Robotics · Software Systems" }), width: 1200, height: 630, alt: "Professional profile and dual resumes" }],
  },
  twitter: {
    card: "summary_large_image", title: "About & Resumes | Gourishankar Bansode", description,
    images: [ogImageUrl({ title: "About & Resumes", subtitle: "AI Engineering · Robotics · Software Systems" })],
  },
};

const contactItems = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/gourishankarb", href: siteConfig.socials.linkedin, external: true },
  { label: "GitHub", value: "github.com/gourishankar27", href: siteConfig.socials.github, external: true },
];
const panel = "rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-5 sm:p-6 shadow-[0_12px_30px_var(--shadow-1)]";
const body = "mt-3 space-y-3 text-sm sm:text-base text-[color:var(--muted-2)]";
type PageProps = { searchParams?: Promise<Record<string, string | string[] | undefined>> };

export default async function AboutPage({ searchParams }: PageProps) {
  const params = searchParams ? await searchParams : {};
  const selected = getResume(params.resume);
  const jsonLd = {
    "@context": "https://schema.org", "@type": "ProfilePage", name: "About & Resumes", url: absoluteUrl("/about"),
    mainEntity: {
      "@type": "Person", "@id": absoluteUrl("/#person"), name: siteConfig.name, url: siteConfig.url,
      email: siteConfig.email, jobTitle: siteConfig.role,
      affiliation: { "@type": "Organization", name: "Arizona State University" },
      address: { "@type": "PostalAddress", addressLocality: "Tempe", addressRegion: "AZ", addressCountry: "US" },
      sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
    },
  };

  return (
    <div className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted)]">About / Resumes / Contact</p>
        <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>About Me</h1>
        <p className="max-w-3xl text-sm sm:text-base text-[color:var(--muted-2)]">
          {siteConfig.role} · {siteConfig.location}. I combine professional software engineering experience with applied AI and robotics research.
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="#resume" className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--primary-border)] bg-[color:var(--primary-soft)] px-4 py-2 text-sm font-medium text-[color:var(--text)] hover:border-[color:var(--primary)]">View resumes</a>
          <Link href="/projects" className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]">Browse projects</Link>
          <a href="#contact" className="inline-flex min-h-11 items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]">Contact</a>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <main className="min-w-0 space-y-6">
          <section id="bio" className={`${panel} scroll-mt-24`}>
            <h2 className="text-lg font-semibold text-[color:var(--text)]">About Me</h2>
            <div className={body}>
              <p>I&apos;m a software engineer working at the intersection of robotics, artificial intelligence, and reliable software systems.</p>
              <p>What interests me most is understanding a complete system: how its components interact, where it can fail, and what the measurements actually tell us. I enjoy turning research ideas into working implementations and improving them through careful evaluation.</p>
            </div>
          </section>

          <section id="engineering-journey" className={`${panel} scroll-mt-24`}>
            <h2 className="text-lg font-semibold text-[color:var(--text)]">My Engineering Journey</h2>
            <div className={body}>
              <p>I started my professional career at Tata Advanced Systems, where I spent more than two years developing software for mission-critical systems. My work included C++ and Python backend services, telemetry and diagnostics, data pipelines, automation, and leading a team of six engineers. That experience taught me the importance of building software that remains dependable beyond the initial prototype.</p>
              <p>My graduate studies in Robotics and Autonomous Systems at Arizona State University, from August 2024 to May 2026, gave me the opportunity to explore how software interacts with the physical world through perception, state estimation, motion planning, and control.</p>
            </div>
          </section>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <section id="ai-engineering" className={`${panel} scroll-mt-24`}>
              <h2 className="text-lg font-semibold text-[color:var(--text)]">AI Engineering</h2>
              <div className={body}><p>Alongside my robotics work, I build AI applications that go beyond a single model call. Through OwnerPilot and Adaptive Digital Assistant, I&apos;ve worked on self-hosted LLMs, retrieval systems, document processing, tool-using agents, persistent memory, and full-stack applications. Review, evidence, and recovery are part of the application design.</p></div>
              <p className="mt-3 text-sm"><Link href="/projects/ownerpilot-ai-operating-copilot" className="text-[color:var(--primary)] hover:underline">OwnerPilot</Link><span aria-hidden="true"> · </span><Link href="/projects/adaptive-digital-assistant" className="text-[color:var(--primary)] hover:underline">Adaptive Digital Assistant</Link></p>
            </section>
            <section id="robotics" className={`${panel} scroll-mt-24`}>
              <h2 className="text-lg font-semibold text-[color:var(--text)]">Robotics &amp; Autonomous Systems</h2>
              <div className={body}><p>My robotics work connects perception and state estimation with planning, control, simulation, and hardware interfaces. I&apos;ve developed ROS 2 navigation and mecanum-drive software, and integrated RGB-D perception, MoveIt planning, and differentiable models for manipulation experiments in simulation. I keep implementation, simulation evidence, and physical validation distinct.</p></div>
              <p className="mt-3 text-sm"><Link href="/projects/vision-guided-diff-physics" className="text-[color:var(--primary)] hover:underline">Robotic Manipulation</Link><span aria-hidden="true"> · </span><Link href="/projects/mission-x-citycar" className="text-[color:var(--primary)] hover:underline">Mission-X CityCar</Link></p>
            </section>
          </div>

          <section id="research" className={`${panel} scroll-mt-24`}>
            <h2 className="text-lg font-semibold text-[color:var(--text)]">Research</h2>
            <div className={body}>
              <p>I work as a Research Assistant at Arizona State University under Prof. Dr. Suren Jayasuriya on a NASA project with Alphacore Inc. My research focuses on event-based spacecraft star tracking and attitude estimation, combining algorithm development with reproducible experimental evaluation.</p>
              <p>The work includes speed- and brightness-aware centroid correction, measurement uncertainty, and weighted Wahba estimation. A representative 3.0-second sequence contains approximately 8.7 million events across 372 batches. That result demonstrates pipeline integration and runtime feasibility; broader accuracy improvements need their own trusted-reference evaluation.</p>
            </div>
            <Link href="/projects/event-based-star-tracking" className="mt-3 inline-block text-sm text-[color:var(--primary)] hover:underline">Explore the research case study →</Link>
          </section>

          <section id="engineering-philosophy" className={`${panel} scroll-mt-24`}>
            <h2 className="text-lg font-semibold text-[color:var(--text)]">Engineering Philosophy</h2>
            <div className={body}><p>I prefer building complete, integrated systems and understanding how individual parts affect the outcome. I use meaningful metrics, test failure conditions, and keep experiments reproducible so another person can inspect the reasoning. Useful software should be understandable and maintainable, with evidence guiding the next engineering decision.</p></div>
          </section>

          <section id="contact" className={`${panel} scroll-mt-24`}>
            <h2 className="text-lg font-semibold text-[color:var(--text)]">Let&apos;s talk AI, robotics, and software engineering.</h2>
            <p className="mt-3 text-sm sm:text-base text-[color:var(--muted-2)]">I&apos;m open to AI engineering, robotics software engineering, applied machine learning, autonomous systems, and relevant research opportunities.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map((item) => (
                <a key={item.label} href={item.href} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined} className="group rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-4 hover:border-[color:var(--primary)]">
                  <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">{item.label}</span>
                  <span className="mt-1 block break-all text-sm font-medium text-[color:var(--text)] group-hover:text-[color:var(--primary)]">{item.value}{item.external ? <span aria-hidden="true"> ↗</span> : null}</span>
                </a>
              ))}
            </div>
          </section>
        </main>

        <aside id="resume" className={`${panel} min-w-0 scroll-mt-24 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto`}>
          <h2 className="text-lg font-semibold text-[color:var(--text)]">Resumes</h2>
          {/* <p className="mt-2 mb-4 text-sm text-[color:var(--muted-2)]">Choose the specialization that matches the role you&apos;re exploring.</p> */}
          <ResumeSelector selectedId={selected.id} />
        </aside>
      </div>
    </div>
  );
}
