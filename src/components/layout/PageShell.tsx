import React from "react";

interface PageShellProps {
  children: React.ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-6 lg:py-10">
      {children}
    </div>
  );
}
