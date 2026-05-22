import Link from "next/link";
import type { ProjectLink } from "@/types/project";

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

function linkClassName(type: ProjectLink["type"]) {
  switch (type) {
    case "github":
      return "bg-[color:var(--surface-inverse)] text-white hover:opacity-90";
    case "paper":
      return "bg-[color:var(--primary)] text-white hover:opacity-90";
    case "demo":
      return "bg-[color:var(--danger)] text-white hover:opacity-90";
    case "video":
      return "bg-[#7C3AED] text-white hover:opacity-90";
    case "docs":
    case "slides":
    case "dataset":
    case "website":
    case "other":
    default:
      return "bg-[color:var(--surface)] text-[color:var(--text)] border border-[color:var(--border)] hover:border-[color:var(--primary)]";
  }
}

export function ProjectLinks({ links }: { links?: ProjectLink[] }) {
  if (!links || links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Link
          key={`${link.type}:${link.href}`}
          href={link.href}
          target={isExternal(link.href) ? "_blank" : undefined}
          rel={isExternal(link.href) ? "noreferrer" : undefined}
          className={[
            "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition-colors",
            linkClassName(link.type),
          ].join(" ")}
        >
          {link.label}
          {isExternal(link.href) && (
            <span aria-hidden="true" className="text-xs opacity-80">
              ↗
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
