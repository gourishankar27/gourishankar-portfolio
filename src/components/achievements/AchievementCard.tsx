import type { Achievement } from "@/types/achievement";
import Link from "next/link";

interface AchievementCardProps {
  achievement: Achievement;
}

export function AchievementCard({ achievement }: AchievementCardProps) {
  const { title, issuer, date, description, link, tags } = achievement;

  return (
    <div className="rounded-xl border border-[#E4E6EB] bg-white shadow-[0_12px_30px_rgba(77,163,255,0.12)] p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-sm sm:text-base font-semibold text-[#1F1F1F]">
          {title}
        </h3>
        {date && (
          <p className="text-xs sm:text-sm text-[#9A9A9A] whitespace-nowrap">
            {date}
          </p>
        )}
      </div>

      {issuer && (
        <p className="text-xs sm:text-sm text-[#6B6B6B]">
          {issuer}
        </p>
      )}

      {description && (
        <p className="text-xs sm:text-sm text-[#3A3A3A]">
          {description}
        </p>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-[#E4E6EB] bg-[#FDFDFE] px-2.5 py-1 text-[11px] text-[#4A4A4A]"
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
            className="text-xs text-[#4DA3FF] hover:text-[#3b83d1] underline underline-offset-2"
          >
            View details
          </Link>
        </div>
      )}
    </div>
  );
}
