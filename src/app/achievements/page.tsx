import { achievements } from "@/data/achievements";
import { AchievementCard } from "@/components/achievements/AchievementCard";

export default function AchievementsPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Achievements
        </h1>
        <p className="mt-2 text-sm sm:text-base text-[color:var(--muted-2)] max-w-3xl">
          Selected awards, publications, and certifications spanning national
          innovation competitions, academic publishing, robotics/AI projects,
          and production software engineering foundations.
        </p>
      </header>

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
