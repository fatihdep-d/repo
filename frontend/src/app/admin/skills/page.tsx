"use client";

import { useEffect, useState } from "react";
import {
  createSkill,
  deleteSkill,
  fetchAdminSkills,
  updateSkill,
  Skill,
} from "@/data/api";

export default function AdminSkillsPage() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [percentage, setPercentage] = useState("");
  const [groupId, setGroupId] = useState("1");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadSkills() {
    try {
      setLoading(true);
      setError("");

      const data = await fetchAdminSkills();

      setSkills(data);
    } catch (error) {
      console.error("Gagal mengambil skills:", error);

      setError("Gagal mengambil data skills.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSkills();
  }, []);

  function resetForm() {
    setName("");
    setLevel("");
    setPercentage("");
    setGroupId("1");
    setEditingId(null);
  }

  function handleEdit(skill: Skill) {
    setEditingId(skill.id);

    setName(skill.name);
    setLevel(skill.level);
    setPercentage(String(skill.percentage));
    setGroupId(String(skill.group_id));

    setMessage("");
    setError("");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!name || !level || !percentage || !groupId) {
      setError("Semua data harus diisi.");

      return;
    }

    const percentageNumber = Number(percentage);

    if (
      Number.isNaN(percentageNumber) ||
      percentageNumber < 0 ||
      percentageNumber > 100
    ) {
      setError("Persentase harus antara 0 sampai 100.");

      return;
    }

    try {
      setSaving(true);

      if (editingId !== null) {
        await updateSkill(editingId, {
          name,
          level,
          percentage: percentageNumber,
          group_id: Number(groupId),
        });

        setMessage("Skill berhasil diubah.");
      } else {
        await createSkill({
          name,
          level,
          percentage: percentageNumber,
          group_id: Number(groupId),
        });

        setMessage("Skill berhasil ditambahkan.");
      }

      resetForm();

      await loadSkills();
    } catch (error) {
      console.error("Gagal menyimpan skill:", error);

      setError(
        editingId !== null
          ? "Gagal mengubah skill."
          : "Gagal menambahkan skill."
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    const yakin = window.confirm(
      "Yakin ingin menghapus skill ini?"
    );

    if (!yakin) {
      return;
    }

    try {
      setDeletingId(id);
      setMessage("");
      setError("");

      await deleteSkill(id);

      setMessage("Skill berhasil dihapus.");

      if (editingId === id) {
        resetForm();
      }

      await loadSkills();
    } catch (error) {
      console.error("Gagal menghapus skill:", error);

      setError("Gagal menghapus skill.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Skills
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Kelola data skills portfolio.
        </p>
      </div>

      {/* FORM */}
      <div className="rounded-2xl border border-gray-800 bg-[#0b0f19] p-6">

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">
            {editingId !== null
              ? "Edit Skill"
              : "Tambah Skill"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {editingId !== null
              ? "Ubah data skill yang dipilih."
              : "Tambahkan skill baru ke portfolio."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >

          {/* NAME */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Nama Skill
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: JavaScript"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />
          </div>

          {/* LEVEL */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Level
            </label>

            <input
              type="text"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              placeholder="Contoh: Intermediate"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />
          </div>

          {/* PERCENTAGE */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Persentase
            </label>

            <input
              type="number"
              min="0"
              max="100"
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
              placeholder="Contoh: 80"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />
          </div>

          {/* GROUP */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Group
            </label>

            <select
              value={groupId}
              onChange={(e) => setGroupId(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
            >
              <option value="1">
                Frontend
              </option>

              <option value="2">
                Backend
              </option>

              <option value="3">
                Tools
              </option>
            </select>
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 md:col-span-2">

            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving
                ? "Menyimpan..."
                : editingId !== null
                  ? "Simpan Perubahan"
                  : "Tambah Skill"}
            </button>

            {editingId !== null && (
              <button
                type="button"
                onClick={resetForm}
                disabled={saving}
                className="rounded-lg border border-gray-700 px-5 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-800 hover:text-white disabled:opacity-50"
              >
                Batal
              </button>
            )}
          </div>
        </form>

        {/* MESSAGE */}
        {message && (
          <div className="mt-5 rounded-lg border border-green-900/50 bg-green-950/20 px-4 py-3 text-sm text-green-400">
            {message}
          </div>
        )}

        {/* ERROR */}
        {error && (
          <div className="mt-5 rounded-lg border border-red-900/50 bg-red-950/20 px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}
      </div>

      {/* TABLE */}
      <div className="rounded-2xl border border-gray-800 bg-[#0b0f19] p-6">

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">
            Daftar Skills
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Data skills yang tersimpan di database.
          </p>
        </div>

        {loading ? (
          <div className="py-10 text-center text-sm text-gray-500">
            Memuat data skills...
          </div>
        ) : skills.length === 0 ? (
          <div className="py-10 text-center text-sm text-gray-500">
            Belum ada data skills.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[850px]">

              <thead>
                <tr className="border-b border-gray-800 text-left">

                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Skill
                  </th>

                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Group
                  </th>

                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Level
                  </th>

                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Progress
                  </th>

                  <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Aksi
                  </th>

                </tr>
              </thead>

              <tbody>
                {skills.map((skill) => (
                  <tr
                    key={skill.id}
                    className="border-b border-gray-800/70 transition hover:bg-gray-900/50"
                  >

                    {/* SKILL */}
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-3">

                        <span className="text-xl">
                          {skill.group_icon || "💻"}
                        </span>

                        <div>
                          <p className="font-medium text-white">
                            {skill.name}
                          </p>

                          <p className="mt-1 text-xs text-gray-600">
                            ID: {skill.id}
                          </p>
                        </div>

                      </div>
                    </td>

                    {/* GROUP */}
                    <td className="px-4 py-5">
                      <span className="text-sm text-gray-300">
                        {skill.group_title}
                      </span>
                    </td>

                    {/* LEVEL */}
                    <td className="px-4 py-5">
                      <span className="rounded-md bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-300">
                        {skill.level}
                      </span>
                    </td>

                    {/* PROGRESS */}
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-3">

                        <div className="h-2 w-28 overflow-hidden rounded-full bg-gray-800">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
                            style={{
                              width: `${skill.percentage}%`,
                            }}
                          />
                        </div>

                        <span className="text-xs text-gray-400">
                          {skill.percentage}%
                        </span>

                      </div>
                    </td>

                    {/* ACTION */}
                    <td className="px-4 py-5 text-right">

                      <div className="flex justify-end gap-2">

                        <button
                          type="button"
                          onClick={() => handleEdit(skill)}
                          disabled={deletingId === skill.id}
                          className="rounded-lg border border-indigo-900/50 px-3 py-2 text-xs font-medium text-indigo-400 transition hover:bg-indigo-950/30 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(skill.id)}
                          disabled={deletingId === skill.id}
                          className="rounded-lg border border-red-900/50 px-3 py-2 text-xs font-medium text-red-400 transition hover:bg-red-950/30 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId === skill.id
                            ? "Menghapus..."
                            : "Hapus"}
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