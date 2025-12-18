import { PublicationsList } from "@/components/publications/PublicationsList";

export default function PublicationsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Publications
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#3A3A3A] max-w-2xl">
          Academic and research publications, starting with my bachelor&apos;s
          thesis work on descriptive question answering. This section will grow
          as I publish more in robotics and AI.
        </p>
      </header>

      {/* Publications list */}
      <section className="space-y-4">
        <PublicationsList />
      </section>
    </div>
  );
}
