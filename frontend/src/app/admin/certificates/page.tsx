"use client";

import { useEffect, useState } from "react";

import {
  Certificate,
  fetchCertificates,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} from "@/data/api";

export default function CertificatesAdminPage() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    title: "",
    issuer: "",
    date: "",
    credential_id: "",
    verification_url: "",
  });

  const loadCertificates = async () => {
    try {
      setLoading(true);

      const data = await fetchCertificates();

      setCertificates(data);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil data sertifikat");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCertificates();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setForm({
      title: "",
      issuer: "",
      date: "",
      credential_id: "",
      verification_url: "",
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
        await updateCertificate(editingId, form);

        alert("Sertifikat berhasil diubah");
      } else {
        await createCertificate(form);

        alert("Sertifikat berhasil ditambahkan");
      }

      resetForm();

      await loadCertificates();
    } catch (error) {
      console.error(error);
      alert("Gagal menyimpan sertifikat");
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (certificate: Certificate) => {
    setEditingId(certificate.id);

    setForm({
      title: certificate.title,
      issuer: certificate.issuer,
      date: certificate.date,
      credential_id: certificate.credentialId || "",
      verification_url: certificate.verificationUrl || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Yakin ingin menghapus sertifikat ini?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteCertificate(id);

      alert("Sertifikat berhasil dihapus");

      await loadCertificates();
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus sertifikat");
    }
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Certificates
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Kelola sertifikat yang tampil di website portfolio.
        </p>
      </div>

      {/* FORM */}
      <div className="rounded-2xl border border-gray-800 bg-[#0b0f19] p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">
            {editingId !== null
              ? "Edit Sertifikat"
              : "Tambah Sertifikat"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Masukkan informasi sertifikat.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid gap-5 md:grid-cols-2"
        >
          {/* TITLE */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Judul Sertifikat
            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Contoh: JavaScript Essentials"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* ISSUER */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Penerbit
            </label>

            <input
              type="text"
              name="issuer"
              value={form.issuer}
              onChange={handleChange}
              placeholder="Contoh: Cisco Networking Academy"
              required
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Tanggal
            </label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* CREDENTIAL ID */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Credential ID
            </label>

            <input
              type="text"
              name="credential_id"
              value={form.credential_id}
              onChange={handleChange}
              placeholder="Contoh: 123456789"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
            />
          </div>

          {/* VERIFICATION URL */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-gray-300">
              Verification URL
            </label>

            <input
              type="url"
              name="verification_url"
              value={form.verification_url}
              onChange={handleChange}
              placeholder="https://example.com/certificate"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-gray-500"
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
                : "Tambah Sertifikat"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg border border-gray-700 px-5 py-3 text-sm text-gray-300 transition hover:bg-gray-800 hover:text-white"
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
            Daftar Sertifikat
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Semua sertifikat yang tersimpan di database.
          </p>
        </div>

        {loading ? (
          <div className="p-6 text-sm text-gray-500">
            Memuat data...
          </div>
        ) : certificates.length === 0 ? (
          <div className="p-6 text-sm text-gray-500">
            Belum ada sertifikat.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead>
                <tr className="border-b border-gray-800 text-left">
                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Sertifikat
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Penerbit
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Tanggal
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Credential
                  </th>

                  <th className="px-6 py-4 text-xs font-medium uppercase text-gray-500">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {certificates.map((certificate) => (
                  <tr
                    key={certificate.id}
                    className="border-b border-gray-800 last:border-0"
                  >
                    {/* TITLE */}
                    <td className="px-6 py-5">
                      <div className="font-medium text-white">
                        {certificate.title}
                      </div>
                    </td>

                    {/* ISSUER */}
                    <td className="px-6 py-5 text-sm text-gray-400">
                      {certificate.issuer}
                    </td>

                    {/* DATE */}
                    <td className="px-6 py-5 text-sm text-gray-400">
                      {certificate.date}
                    </td>

                    {/* CREDENTIAL */}
                    <td className="px-6 py-5 text-sm text-gray-400">
                      {certificate.credentialId || "-"}
                    </td>

                    {/* ACTION */}
                    <td className="px-6 py-5">
                      <div className="flex gap-2">
                        {certificate.verificationUrl &&
                          certificate.verificationUrl !== "#" && (
                            <a
                              href={certificate.verificationUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="rounded-lg border border-gray-700 px-3 py-2 text-xs text-gray-300 transition hover:bg-gray-800 hover:text-white"
                            >
                              Lihat
                            </a>
                          )}

                        <button
                          type="button"
                          onClick={() =>
                            handleEdit(certificate)
                          }
                          className="rounded-lg border border-gray-700 px-3 py-2 text-xs text-gray-300 transition hover:bg-gray-800 hover:text-white"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(certificate.id)
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