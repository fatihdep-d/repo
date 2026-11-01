"use client";

import { useEffect, useState } from "react";

import {
  Testimonial,
  fetchAdminTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from "@/data/api";

export default function TestimonialsAdminPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    avatar: "",
    stars: 5,
    quote: "",
  });

  const loadTestimonials = async () => {
    try {
      setLoading(true);

      const data = await fetchAdminTestimonials();

      setTestimonials(data);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data testimonials");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "stars" ? Number(value) : value,
    }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      role: "",
      company: "",
      avatar: "",
      stars: 5,
      quote: "",
    });

    setEditingId(null);
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setSaving(true);

      if (editingId !== null) {
        await updateTestimonial(editingId, form);

        alert("Testimonial berhasil diubah");
      } else {
        await createTestimonial(form);

        alert("Testimonial berhasil ditambahkan");
      }

      resetForm();

      await loadTestimonials();
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan testimonial");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id);

    setForm({
      name: testimonial.name,
      role: testimonial.role,
      company: testimonial.company || "",
      avatar: testimonial.avatar || "",
      stars: testimonial.stars,
      quote: testimonial.quote,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Yakin ingin menghapus testimonial ini?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteTestimonial(id);

      alert("Testimonial berhasil dihapus");

      await loadTestimonials();
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus testimonial");
    }
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Testimonials
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Kelola testimonial yang tampil di website portfolio.
        </p>
      </div>

      {/* FORM */}
      <div className="rounded-2xl border border-gray-800 bg-[#0b0f19] p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">
            {editingId !== null
              ? "Edit Testimonial"
              : "Tambah Testimonial"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Isi data testimonial di bawah.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 md:grid-cols-2"
        >
          {/* NAME */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Nama
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama pemberi testimonial"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* ROLE */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Role
            </label>

            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              placeholder="Contoh: Client"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* COMPANY */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Company
            </label>

            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              placeholder="Nama perusahaan"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* AVATAR */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Avatar
            </label>

            <input
              type="text"
              name="avatar"
              value={form.avatar}
              onChange={handleChange}
              placeholder="/avatar.jpg"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* STARS */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Rating
            </label>

            <select
              name="stars"
              value={form.stars}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  stars: Number(e.target.value),
                }))
              }
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none"
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>

          {/* QUOTE */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-gray-300">
              Quote
            </label>

            <textarea
              name="quote"
              value={form.quote}
              onChange={handleChange}
              placeholder="Tulis testimonial..."
              required
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* BUTTON */}
          <div className="flex gap-3 md:col-span-2">
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving
                ? "Menyimpan..."
                : editingId !== null
                ? "Simpan Perubahan"
                : "Tambah Testimonial"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300 transition hover:bg-gray-800"
              >
                Batal
              </button>
            )}
          </div>
        </form>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0b0f19]">
        <div className="border-b border-gray-800 p-6">
          <h2 className="text-lg font-semibold text-white">
            Daftar Testimonials
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Semua testimonial yang tersimpan di database.
          </p>
        </div>

        {loading ? (
          <div className="p-6 text-sm text-gray-500">
            Memuat data...
          </div>
        ) : testimonials.length === 0 ? (
          <div className="p-6 text-sm text-gray-500">
            Belum ada testimonial.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-800 text-left">
                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Nama
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Role
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Company
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Rating
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Quote
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {testimonials.map((testimonial) => (
                  <tr
                    key={testimonial.id}
                    className="border-b border-gray-800 last:border-0"
                  >
                    <td className="px-6 py-5">
                      <div className="font-medium text-white">
                        {testimonial.name}
                      </div>
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-400">
                      {testimonial.role}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-400">
                      {testimonial.company || "-"}
                    </td>

                    <td className="px-6 py-5 text-sm text-gray-300">
                      {"★".repeat(testimonial.stars)}
                    </td>

                    <td className="max-w-md px-6 py-5 text-sm text-gray-400">
                      <p className="line-clamp-2">
                        {testimonial.quote}
                      </p>
                    </td>

                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleEdit(testimonial)
                          }
                          className="rounded-lg border border-gray-700 px-3 py-2 text-xs text-gray-300 transition hover:bg-gray-800 hover:text-white"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(testimonial.id)
                          }
                          className="rounded-lg border border-red-900 px-3 py-2 text-xs text-red-400 transition hover:bg-red-950"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}