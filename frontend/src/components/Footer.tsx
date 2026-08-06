const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Skills", href: "/skills" },
  { name: "Certificates", href: "/certificates" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/fatihdep-d",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fatihataillah-ataillah-288219427/",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/atokkdalanggs",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080b14] px-6 pt-16 pb-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3">
        <div>
          <h3 className="mb-4 text-lg font-bold text-indigo-400">
            MyPortfolio
          </h3>

          <p className="max-w-xs text-sm leading-relaxed text-gray-400">
            Siswa XII RPL 1 yang passionate di bidang web development.
            Membangun pengalaman melalui project nyata dan terus belajar
            teknologi terbaru.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-indigo-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-white">
            Social Media
          </h3>

          <ul className="space-y-2">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 transition hover:text-indigo-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 sm:flex-row">
        <p className="text-sm text-gray-500">
          © 2026 MyPortfolio. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}