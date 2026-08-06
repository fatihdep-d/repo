export default function Home() {
  return (
    <main className="min-h-screen bg-[#070a12] text-slate-100">
      {/* HERO */}
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
            href="/about"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 font-semibold hover:scale-105 transition duration-300"
          >
            Lihat Profil
          </a>

          <a
            href="/contact"
            className="px-8 py-4 rounded-full bg-slate-800 border border-slate-700 font-semibold hover:bg-slate-700 transition duration-300"
          >
            Hubungi Saya
          </a>
        </div>
      </section>
    </main>
  );
}