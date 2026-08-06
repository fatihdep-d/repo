import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-[#070a12] text-slate-100 pt-24">

      {/* =========================
          HEADER
      ========================== */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">

          <p className="mb-4 font-medium text-indigo-400">
            ABOUT ME
          </p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Tentang{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Saya
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Kenali lebih dekat tentang saya, perjalanan belajar saya,
            dan ketertarikan saya dalam dunia web development.
          </p>

        </div>
      </section>

      {/* =========================
          PROFILE
      ========================== */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-[300px_1fr]">

          {/* FOTO PROFILE */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-800 bg-[#0d1320]">

              <Image
                src="/profile.jpg"
                alt="Foto profil Muh Fatih Ataillah"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 300px"
              />

            </div>

            {/* INFORMASI SINGKAT */}
            <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-[#0d1320]">

              {/* Nama */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <span className="text-sm text-slate-500">
                  Nama
                </span>

                <span className="text-right text-sm font-semibold">
                  Muh Fatih Ataillah
                </span>
              </div>

              {/* Kelas */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <span className="text-sm text-slate-500">
                  Kelas
                </span>

                <span className="text-sm font-semibold">
                  XII RPL 1
                </span>
              </div>

              {/* Sekolah */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <span className="text-sm text-slate-500">
                  Sekolah
                </span>

                <span className="text-right text-sm font-semibold">
                  SMK Telkom Makassar
                </span>
              </div>

              {/* Bidang */}
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm text-slate-500">
                  Bidang
                </span>

                <span className="text-sm font-semibold text-indigo-400">
                  Web Development
                </span>
              </div>

            </div>
          </div>

          {/* =========================
              ABOUT TEXT
          ========================== */}
          <div className="space-y-10">

            {/* Siapa Saya */}
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Siapa Saya?
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Saya adalah siswa SMK Telkom Makassar jurusan
                Rekayasa Perangkat Lunak (RPL). Saya memiliki
                ketertarikan besar terhadap dunia programming,
                khususnya web development.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                Saya senang membuat website yang memiliki tampilan
                modern, responsif, dan mudah digunakan.
              </p>
            </div>

            {/* Perjalanan */}
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Perjalanan Saya
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Saya mulai mempelajari programming sejak masuk
                jurusan RPL. Dari HTML dan CSS, kemudian berkembang
                mempelajari JavaScript, React, Next.js, Express.js,
                hingga database MySQL.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                Setiap project yang saya kerjakan menjadi kesempatan
                untuk meningkatkan kemampuan dan mendapatkan
                pengalaman baru.
              </p>
            </div>

            {/* Tujuan */}
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                Tujuan Saya
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Saya ingin terus berkembang menjadi seorang
                full-stack web developer yang mampu membangun
                aplikasi web yang bermanfaat, modern, dan
                berkualitas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================
          PENDIDIKAN
      ========================== */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-bold">
            Pendidikan
          </h2>

          <div className="mx-auto mt-10 max-w-2xl">

            <div className="relative border-l border-slate-700 pl-8">

              {/* Titik Timeline */}
              <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-indigo-500" />

              <div className="rounded-xl border border-slate-800 bg-[#0d1320] p-6">

                <p className="text-xs text-slate-500">
                  2024 - Sekarang
                </p>

                <h3 className="mt-2 text-lg font-bold">
                  SMK Telkom Makassar - XII RPL 1
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Mempelajari pemrograman web, mobile, dan desktop.
                  Fokus pada pengembangan aplikasi dan website.
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}