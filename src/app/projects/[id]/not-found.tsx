import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight">Project not found</h1>
      <p className="text-sm sm:text-base text-[color:var(--muted-2)] max-w-2xl">
        The project you're looking for doesn't exist (or the link is outdated).
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-4 py-2 text-sm text-[color:var(--text)] hover:border-[color:var(--primary)]"
      >
        ← Back to Projects
      </Link>
    </div>
  );
}
