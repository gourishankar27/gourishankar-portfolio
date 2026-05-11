import type { Achievement } from "@/types/achievement";
import Link from "next/link";

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const { title, issuer, date, description, link, tags } = achievement;

  return (
    <div className="rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-[0_12px_30px_var(--shadow-1)] p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm sm:text-base font-semibold text-[color:var(--text)]">
          {title}
        </h3>
        {date && (
          <p className="text-xs sm:text-sm text-[color:var(--muted)] whitespace-nowrap">
            {date}
          </p>
        )}
      </div>

      {issuer && (
        <p className="text-xs sm:text-sm text-[color:var(--muted)]">
          {issuer}
        </p>
      )}

      {description && (
        <p className="text-xs sm:text-sm text-[color:var(--muted-2)]">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-1 text-[11px] text-[color:var(--muted-2)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {link && (
        <div className="mt-2">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-xs text-[color:var(--primary)] hover:opacity-90 underline underline-offset-2"
          >
            View details
          </Link>
        </div>
      )}
    </div>
  );
}
