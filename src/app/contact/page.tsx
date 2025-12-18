import Link from "next/link";

export default function ContactPage() {
  // TODO: replace these with your real links
  const email = "gourishankar@asu.edu";
  const linkedInUrl = "https://linkedin.com/in/gourishankarb/";
  const githubUrl = "https://github.com/gourishankar27";

  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Contact
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#3A3A3A] max-w-2xl">
          If you&apos;d like to talk about robotics, AI, research
          collaborations, or opportunities, feel free to reach out. I&apos;m
          especially interested in work at the intersection of perception,
          physics, and autonomous systems.
        </p>
      </header>

      {/* Contact card */}
      <section>
        <div className="rounded-2xl border border-[#E4E6EB] bg-white shadow-[0_12px_30px_rgba(77,163,255,0.12)] p-5 sm:p-6 space-y-5">
          <div>
            <h2 className="text-sm font-semibold text-[#1F1F1F] mb-1">
              Get in touch
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6B6B]">
              I try to respond to thoughtful messages as soon as I can.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            {/* Email */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
              <span className="text-[#6B6B6B]">Email</span>
              <a
                href={`mailto:${email}`}
                className="text-[#4DA3FF] hover:text-[#3b83d1] break-all"
              >
                {email}
              </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
              <span className="text-[#6B6B6B]">LinkedIn</span>
              <Link
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#4DA3FF] hover:text-[#3b83d1]"
              >
                View LinkedIn profile
              </Link>
            </div>

            {/* GitHub */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5">
              <span className="text-[#6B6B6B]">GitHub</span>
              <Link
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[#4DA3FF] hover:text-[#3b83d1]"
              >
                View GitHub profile
              </Link>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E4E6EB] text-xs text-[#6B6B6B]">
            <p>
              Open to: robotics &amp; AI roles, research internships, and
              collaborations on autonomous systems, differentiable physics, and
              deep learning.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
