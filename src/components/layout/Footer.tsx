export function Footer() {
  return (
    <footer className="w-full border-t border-[color:var(--border)] bg-[color:var(--surface-alpha)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[color:var(--muted)]">
          © {new Date().getFullYear()} Gourishankar Bansode. All rights
          reserved.
        </p>
        <p className="text-xs text-[color:var(--muted)]">
          Event-Based Vision · Space Autonomy · Robotics Systems · AI Software
        </p>
      </div>
    </footer>
  );
}
