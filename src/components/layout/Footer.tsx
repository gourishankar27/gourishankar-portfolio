export function Footer() {
  return (
    <footer className="w-full border-t border-[#E4E6EB]/80 bg-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-[#6B6B6B]">
          © {new Date().getFullYear()} Gourishankar Bansode. All rights
          reserved.
        </p>
        <p className="text-xs text-[#6B6B6B]">
          Robotics &amp; AI · Differentiable Physics · Autonomous Systems
        </p>
      </div>
    </footer>
  );
}
