import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070a12] text-slate-100">

      {/* =========================
          HERO
      ========================== */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[140px]" />

        {/* Badge */}
        <div className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 text-sm">
          <span className="w-2 h-2 bg-emerald-400 rounded-full" />
          Available for projects
        </div>

        {/* Heading */}
        <h1 className="relative mt-10 text-5xl md:text-7xl font-bold leading-tight tracking-tight">
          Halo, Saya{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Fatih Ataillah
          </span>

          <br />

          <span className="text-slate-100">
            Saya Seorang Web Developer
          </span>
        </h1>

        {/* Description */}
        <p className="relative mt-8 max-w-2xl text-lg text-slate-400 leading-relaxed">
          Membangun antarmuka web yang responsif dan interaktif.
          <br />
          Berpengalaman dalam merancang aplikasi web modern yang
          fungsional dan estetis.
        </p>

        {/* Buttons */}
        <div className="relative mt-10 flex gap-4 flex-wrap justify-center">
          <a
            href="#about"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold hover:scale-105 transition duration-300"
          >
            Lihat Profil
          </a>

          <a
            href="#contact"
            className="px-8 py-4 rounded-full bg-slate-800 border border-slate-700 font-semibold hover:bg-slate-700 transition duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      </section>

      {/* =========================
          ABOUT
      ========================== */}
      <section
        id="about"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Kenali lebih lanjut siapa saya, apa yang saya pelajari,
            dan apa yang memotivasi saya.
          </p>
        </div>

        {/* About Content */}
        <div className="mt-16 grid md:grid-cols-[280px_1fr] gap-12">

          {/* Profile */}
          <div>
            <div className="w-full aspect-square rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Profile"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Data */}
            <div className="mt-6 rounded-xl border border-slate-800 overflow-hidden">

              <div className="flex justify-between px-4 py-4 border-b border-slate-800">
                <span className="text-slate-500 text-sm">
                  Nama
                </span>

                <span className="text-sm font-semibold">
                   Muh Fatih Ataillah
                </span>
              </div>

              <div className="flex justify-between px-4 py-4 border-b border-slate-800">
                <span className="text-slate-500 text-sm">
                  Kelas
                </span>

                <span className="text-sm font-semibold">
                  XII RPL 1
                </span>
              </div>

              <div className="flex justify-between px-4 py-4 border-b border-slate-800">
                <span className="text-slate-500 text-sm">
                  Sekolah
                </span>

                <span className="text-sm font-semibold">
                  SMK Telkom Makassar
                </span>
              </div>

              <div className="flex justify-between px-4 py-4">
                <span className="text-slate-500 text-sm">
                  Lokasi
                </span>

                <span className="text-sm font-semibold">
                  Indonesia
                </span>
              </div>

            </div>
          </div>

          {/* About Text */}
          <div className="space-y-10">

            {/* Siapa Saya */}
            <div>
              <h3 className="text-2xl font-bold">
                Siapa Saya?
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Saya adalah siswa SMK Telkom Makassar yang sedang
                duduk di kelas 12 Jurusan Rekayasa Perangkat Lunak
                (RPL). Saya memiliki ketertarikan besar di bidang
                web development.
              </p>

              <p className="mt-4 text-slate-400 leading-7">
                Saya senang membangun website dan aplikasi web yang
                tidak hanya fungsional, tetapi juga memiliki tampilan
                yang menarik dan memberikan pengalaman pengguna
                yang baik.
              </p>
            </div>

            {/* Perjalanan */}
            <div>
              <h3 className="text-2xl font-bold">
                Perjalanan Saya
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Perjalanan saya di dunia programming dimulai sejak
                kelas 10. Saat itu saya mulai belajar HTML dan CSS,
                kemudian mengeksplorasi berbagai teknologi seperti
                JavaScript, React, Next.js, hingga backend dengan
                Express.js dan database MySQL.
              </p>
            </div>

            {/* Tujuan */}
            <div>
              <h3 className="text-2xl font-bold">
                Tujuan Saya
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Saya ingin terus berkembang menjadi full-stack web
                developer yang handal, jago, dan dapat dipercaya.
                Setiap project menjadi kesempatan bagi saya untuk
                belajar dan meningkatkan kemampuan.
              </p>
            </div>

          </div>
        </div>

        {/* Pendidikan */}
        <div className="mt-28">

          <h2 className="text-3xl font-bold text-center">
            Pendidikan
          </h2>

          <div className="mt-10 max-w-2xl mx-auto">

            <div className="relative pl-8 border-l border-slate-700">

              <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-indigo-500" />

              <div className="rounded-xl border border-slate-800 bg-[#0d1320] p-6">

                <p className="text-xs text-slate-500">
                  2024 - Sekarang
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  SMK Telkom Makassar - XII RPL 1
                </h3>

                <p className="mt-3 text-sm text-slate-400 leading-6">
                  Mempelajari pemrograman web, mobile, dan desktop.
                  Fokus pada pengembangan full-stack web application.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SKILLS
      ========================== */}
      <section
        id="skills"
        className="py-28 px-6 bg-[#090d18]"
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Keahlian{" "}
            <span className="text-indigo-400">
              Saya
            </span>
          </h2>

          <p className="mt-4 text-slate-400">
            Beberapa keahlian dan bidang yang saya tekuni
            selama belajar di jurusan RPL.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14 text-left">

            {/* Frontend */}
            <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-indigo-500/40 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
                💻
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Frontend Development
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Membangun antarmuka web yang responsif dan
                interaktif menggunakan React, Next.js,
                dan Tailwind CSS.
              </p>

            </div>

            {/* Backend */}
            <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-violet-500/40 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-500/10 text-2xl">
                ⚙️
              </div>

              <h3 className="mt-6 text-xl font-bold">
                Backend Development
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Mengembangkan API dan server-side logic dengan
                Express.js serta mengelola database MySQL.
              </p>

            </div>

            {/* UI UX */}
            <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800 hover:border-fuchsia-500/40 hover:-translate-y-1 transition duration-300">

              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-fuchsia-500/10 text-2xl">
                🎨
              </div>

              <h3 className="mt-6 text-xl font-bold">
                UI/UX Design
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                Mendesain pengalaman pengguna yang intuitif
                dan tampilan visual yang modern dan menarik.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =========================
          PORTFOLIO
      ========================== */}
      <section
        id="portfolio"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Portfolio
          </h2>

          <p className="mt-4 text-slate-400">
            Beberapa project yang pernah saya kerjakan.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {[
            {
              title: "Web Portfolio",
              text: "Website portfolio pribadi menggunakan Next.js dan Tailwind CSS.",
            },
            {
              title: "Web Application",
              text: "Aplikasi web dengan frontend React dan backend Express.js.",
            },
            {
              title: "Database Project",
              text: "Project aplikasi dengan database MySQL.",
            },
          ].map((project) => (

            <div
              key={project.title}
              className="rounded-2xl bg-[#0d1320] border border-slate-800 p-6 hover:border-indigo-500/40 transition"
            >

              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 border border-slate-800 flex items-center justify-center">

                <span className="text-4xl">
                  💻
                </span>

              </div>

              <h3 className="mt-6 text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {project.text}
              </p>

            </div>

          ))}

        </div>
      </section>

      {/* =========================
          CERTIFICATES
      ========================== */}
      <section
        id="certificates"
        className="py-28 px-6 bg-[#090d18]"
      >
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Certificates
          </h2>

          <p className="mt-4 text-slate-400">
            Sertifikat dan pencapaian yang saya miliki.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {[
              "Web Development",
              "JavaScript",
              "Database",
            ].map((certificate) => (

              <div
                key={certificate}
                className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800"
              >

                <div className="text-4xl">
                  🏆
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {certificate}
                </h3>

                <p className="mt-3 text-slate-400 text-sm">
                  Certificate of completion
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =========================
          TESTIMONIALS
      ========================== */}
      <section
        id="testimonials"
        className="py-28 px-6 max-w-6xl mx-auto"
      >
        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Testimonials
          </h2>

          <p className="mt-4 text-slate-400">
            Pendapat orang-orang mengenai project saya.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-14">

          <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800">

            <p className="text-slate-400 leading-7">
              &quot;Website yang dibuat terlihat modern,
              responsif, dan mudah digunakan.&quot;
            </p>

            <h3 className="mt-6 font-bold">
              Client
            </h3>

            <p className="text-sm text-slate-500">
              Project Client
            </p>

          </div>

          <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800">

            <p className="text-slate-400 leading-7">
              &quot;Komunikasinya bagus dan hasil project
              sesuai dengan yang dibutuhkan.&quot;
            </p>

            <h3 className="mt-6 font-bold">
              Partner
            </h3>

            <p className="text-sm text-slate-500">
              Web Development
            </p>

          </div>

        </div>
      </section>

      {/* =========================
          CONTACT
      ========================== */}
      <section
        id="contact"
        className="py-28 px-6 bg-[#090d18]"
      >
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center">

            <h2 className="text-4xl md:text-5xl font-bold">
              Contact{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>

            <p className="mt-4 text-slate-400">
              Punya pertanyaan atau ingin berkolaborasi?
              Jangan ragu untuk menghubungi saya!
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {/* Form */}
            <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800">

              <h3 className="text-xl font-bold">
                Kirim Pesan
              </h3>

              <div className="mt-7 space-y-5">

                <div>
                  <label className="text-sm text-slate-300">
                    Nama Lengkap
                  </label>

                  <input
                    type="text"
                    placeholder="Masukkan Nama Anda"
                    className="mt-2 w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="contoh@email.com"
                    className="mt-2 w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Tentang Apa?"
                    className="mt-2 w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-300">
                    Pesan
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tulis Pesan Anda..."
                    className="mt-2 w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-800 outline-none focus:border-indigo-500 transition resize-none"
                  />
                </div>

                <button
                  type="button"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold hover:opacity-90 transition"
                >
                  Kirim Pesan
                </button>

              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-5">

              {/* Email */}
              <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800">

                <h3 className="font-bold">
                  Email
                </h3>

                <p className="mt-2 text-indigo-400">
                  fatihataillahataillah@gmail.com
                </p>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Silakan hubungi saya melalui email untuk
                  pertanyaan, kolaborasi, atau diskusi lebih lanjut.
                </p>

              </div>

              {/* Phone */}
              <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800">

                <h3 className="font-bold">
                  Telepon
                </h3>

                <p className="mt-2 text-violet-400">
                  +62 821 2269 1813
                </p>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Jika ingin berbicara langsung, jangan ragu
                  untuk menghubungi saya.
                </p>

              </div>

              {/* Location */}
              <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800">

                <h3 className="font-bold">
                  Lokasi
                </h3>

                <p className="mt-2 text-fuchsia-400">
                  Makassar, Indonesia
                </p>

                <p className="mt-3 text-sm text-slate-500 leading-6">
                  Saya tinggal di Makassar, Indonesia.
                </p>

              </div>

              {/* Social Media */}
              <div className="p-7 rounded-2xl bg-[#0d1320] border border-slate-800">

                <h3 className="font-bold">
                  Social Media
                </h3>

                <div className="flex gap-3 mt-5">

                  <a
                    href="https://github.com/fatihdep-d"
                    className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm hover:border-indigo-500 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/fatihataillah-ataillah-288219427/"
                    className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm hover:border-indigo-500 transition"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://www.instagram.com/atokkdalanggs?igsh=MW0wbDh0bDE5c3g5cA=="
                    className="px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-sm hover:border-indigo-500 transition"
                  >
                    Instagram
                  </a>

                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}