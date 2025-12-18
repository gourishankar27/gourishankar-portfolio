"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/education-skills", label: "Education & Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
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
    <header className="w-full border-b border-[#E4E6EB]/80 bg-white/80 backdrop-blur-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link
          href="/"
          className="flex items-baseline gap-2"
          onClick={() => setOpen(false)}
        >
          <span className="text-lg font-semibold tracking-tight text-[#1F1F1F]">
            Gourishankar Bansode
          </span>
          <span className="hidden sm:inline text-xs text-[#6B6B6B]">
            Robotics &amp; AI Engineer
          </span>
        </Link>

        {/* Desktop nav */}
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
                    ? "text-[#1F1F1F] bg-[#F4F9FF] border border-[#4DA3FF33]"
                    : "text-[#6B6B6B] hover:text-[#1F1F1F]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-[#E4E6EB] bg-white h-9 w-9"
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open navigation</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 rounded-full bg-[#1F1F1F] transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#1F1F1F] transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-[#1F1F1F] transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <div className="md:hidden border-t border-[#E4E6EB]/80 bg-white/95 backdrop-blur-sm">
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
                      ? "text-[#1F1F1F] bg-[#F4F9FF] border border-[#4DA3FF33]"
                      : "text-[#3A3A3A] hover:bg-[#F5F5F9]",
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
