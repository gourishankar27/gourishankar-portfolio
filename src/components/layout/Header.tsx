"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Bio & Contact" },
  { href: "/education-skills", label: "Education & Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/publications", label: "Publications" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="w-full border-b border-[color:var(--border)] bg-[color:var(--surface-alpha)] backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-semibold tracking-tight text-[color:var(--text)]">
            Gourishankar Bansode
          </span>
          <span className="hidden sm:inline text-xs text-[color:var(--muted)]">
            Robotics &amp; AI Software Engineer
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-sm">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "px-3 py-1.5 rounded-full transition-colors",
                  active
                    ? "text-[color:var(--text)] bg-[color:var(--primary-soft)] border border-[color:var(--primary-border)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--text)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] h-9 w-9"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Open navigation</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-0.5 w-5 rounded-full bg-[color:var(--text)] transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-[color:var(--text)] transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`h-0.5 w-5 rounded-full bg-[color:var(--text)] transition-transform ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--border)] bg-[color:var(--surface-alpha)] backdrop-blur-sm">
          <nav className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-3 flex flex-col gap-1.5 text-sm">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "w-full rounded-lg px-3 py-2 transition-colors",
                    active
                      ? "text-[color:var(--text)] bg-[color:var(--primary-soft)] border border-[color:var(--primary-border)]"
                      : "text-[color:var(--muted-2)] hover:bg-[color:var(--surface-2)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
