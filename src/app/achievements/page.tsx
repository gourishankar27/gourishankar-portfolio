import { achievements } from "@/data/achievements";
import { AchievementCard } from "@/components/achievements/AchievementCard";

export default function AchievementsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Achievements
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[#3A3A3A] max-w-2xl">
          Selected academic and project milestones, including publications and
          graduate-level work in robotics, AI, and deep learning.
        </p>
      </header>

      {/* Achievements grid */}
      <section className="space-y-4">
        <div className="grid gap-4 md:gap-6 md:grid-cols-2">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </section>
    </div>
  );
}
