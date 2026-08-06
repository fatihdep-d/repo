"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Skills", href: "/skills" },
  { name: "Certificates", href: "/certificates" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#080b14]/80 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-indigo-400 transition hover:text-indigo-300"
        >
          MyPortfolio
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative rounded-lg px-4 py-2 text-sm transition-all duration-300 ${
                  isActive
                    ? "bg-indigo-500/15 text-indigo-300"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}

                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-indigo-400 transition-all duration-300 ${
                    isActive ? "w-5 opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}