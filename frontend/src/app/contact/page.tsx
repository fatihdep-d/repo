export default function ContactPage() {
    return (
      <main className="min-h-screen bg-[#070a12] text-slate-100">
        <section className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-6xl">
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-4xl font-bold md:text-5xl">
                Contact{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
  
              <p className="mt-5 text-sm text-slate-400 md:text-base">
                Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk
                menghubungi saya!
              </p>
            </div>
  
            {/* Content */}
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Form */}
              <div className="rounded-2xl border border-slate-800 bg-[#0d1320] p-7">
                <h2 className="text-xl font-bold">Kirim Pesan</h2>
  
                <div className="mt-7 space-y-5">
                  {/* Nama */}
                  <div>
                    <label className="text-sm text-slate-300">
                      Nama Lengkap
                    </label>
  
                    <input
                      type="text"
                      placeholder="Masukkan Nama Anda"
                      className="mt-2 w-full rounded-lg border border-slate-800 bg-[#10182a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500"
                    />
                  </div>
  
                  {/* Email */}
                  <div>
                    <label className="text-sm text-slate-300">Email</label>
  
                    <input
                      type="email"
                      placeholder="contoh@email.com"
                      className="mt-2 w-full rounded-lg border border-slate-800 bg-[#10182a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500"
                    />
                  </div>
  
                  {/* Subject */}
                  <div>
                    <label className="text-sm text-slate-300">
                      Subject
                    </label>
  
                    <input
                      type="text"
                      placeholder="Tentang Apa?"
                      className="mt-2 w-full rounded-lg border border-slate-800 bg-[#10182a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500"
                    />
                  </div>
  
                  {/* Pesan */}
                  <div>
                    <label className="text-sm text-slate-300">Pesan</label>
  
                    <textarea
                      rows={6}
                      placeholder="Tulis Pesan Anda..."
                      className="mt-2 w-full resize-none rounded-lg border border-slate-800 bg-[#10182a] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-indigo-500"
                    />
                  </div>
  
                  {/* Button */}
                  <button
                    type="button"
                    className="w-full rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 py-3 font-semibold text-white transition duration-300 hover:scale-[1.01] hover:opacity-90"
                  >
                    Kirim Pesan
                  </button>
                </div>
              </div>
  
              {/* Contact Information */}
              <div className="space-y-5">
                {/* Email */}
                <div className="rounded-2xl border border-slate-800 bg-[#0d1320] p-7 transition duration-300 hover:border-indigo-500/30">
                  <h2 className="font-bold">Email</h2>
  
                  <p className="mt-2 text-indigo-400">
                    fatihataillahataillah@gmail.com
                  </p>
  
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Silakan hubungi saya melalui email untuk pertanyaan,
                    kolaborasi, atau diskusi lebih lanjut.
                  </p>
                </div>
  
                {/* Telepon */}
                <div className="rounded-2xl border border-slate-800 bg-[#0d1320] p-7 transition duration-300 hover:border-violet-500/30">
                  <h2 className="font-bold">Telepon</h2>
  
                  <p className="mt-2 text-violet-400">
                    +62 821 2269 1813
                  </p>
  
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Jika ingin berbicara langsung, jangan ragu untuk
                    menghubungi saya.
                  </p>
                </div>
  
                {/* Lokasi */}
                <div className="rounded-2xl border border-slate-800 bg-[#0d1320] p-7 transition duration-300 hover:border-fuchsia-500/30">
                  <h2 className="font-bold">Lokasi</h2>
  
                  <p className="mt-2 text-fuchsia-400">
                    Makassar, Indonesia
                  </p>
  
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Saya tinggal di Makassar, Indonesia.
                  </p>
                </div>
  
                {/* Social Media */}
                <div className="rounded-2xl border border-slate-800 bg-[#0d1320] p-7">
                  <h2 className="font-bold">Social Media</h2>
  
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="https://github.com/fatihdep-d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-800 bg-[#10182a] px-4 py-2 text-sm text-slate-300 transition hover:border-indigo-500 hover:text-white"
                    >
                      GitHub
                    </a>
  
                    <a
                      href="https://www.linkedin.com/in/fatihataillah-ataillah-288219427/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-800 bg-[#10182a] px-4 py-2 text-sm text-slate-300 transition hover:border-indigo-500 hover:text-white"
                    >
                      LinkedIn
                    </a>
  
                    <a
                      href="https://www.instagram.com/atokkdalanggs/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-800 bg-[#10182a] px-4 py-2 text-sm text-slate-300 transition hover:border-fuchsia-500 hover:text-white"
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