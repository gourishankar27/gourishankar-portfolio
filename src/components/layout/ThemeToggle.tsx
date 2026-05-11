"use client";

import React from "react";

type Theme = "light" | "dark";

function getThemeFromDom(): Theme | null {
  if (typeof document === "undefined") return null;
  const v = document.documentElement.getAttribute("data-theme");
  if (v === "light" || v === "dark") return v;
  return null;
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function setDomTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

const SunIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M4.93 19.07l1.41-1.41" />
    <path d="M17.66 6.34l1.41-1.41" />
  </svg>
);

const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = React.useState<Theme>("light");

  // Initialize from DOM/local preference (set by the early init script), otherwise use system theme.
  React.useEffect(() => {
    const domTheme = getThemeFromDom();
    const next = domTheme ?? getSystemTheme();
    setTheme(next);
    if (!domTheme) {
      // Keep DOM attribute in sync so components relying on [data-theme] have a stable source.
      setDomTheme(next);
    }
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setDomTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // no-op
    }
  }

  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={[
        "inline-flex items-center justify-center rounded-full h-9 w-9",
        "border border-[color:var(--border)] bg-[color:var(--surface)]",
        "text-[color:var(--text)] transition-colors",
        "hover:border-[color:var(--primary)]",
        className ?? "",
      ].join(" ")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  );
}
