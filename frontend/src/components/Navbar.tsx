"use client";

import { useState } from "react";

const links = [
  "Home",
  "About",
  "Portfolio",
  "Skills",
  "Certificates",
  "Testimonials",
  "Contact",
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080b14]/80 px-6 py-4 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-indigo-400"
        >
          MyPortfolio
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setActive(link)}
              className={`rounded-lg px-4 py-2 text-sm transition ${
                active === link
                  ? "bg-indigo-500/15 text-indigo-300"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}