import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/education-skills", label: "Education & Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/publications", label: "Publications" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="w-full border-b border-[#E4E6EB]/80 bg-white/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight text-[#1F1F1F]">
            Gourishankar Bansode
          </span>
          <span className="hidden sm:inline text-xs text-[#6B6B6B]">
            Robotics &amp; AI Engineer
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#6B6B6B] hover:text-[#1F1F1F] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
