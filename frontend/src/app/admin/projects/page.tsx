"use client";

import { useEffect, useState } from "react";
import {
  createProject,
  deleteProject,
  fetchProjects,
  updateProject,
  Project,
} from "@/data/api";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [image, setImage] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);

  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadProjects() {
    try {
      setLoading(true);
      setError("");

      const data = await fetchProjects();

      setProjects(data);
    } catch (error) {
      console.error("Gagal mengambil projects:", error);

      setError("Gagal mengambil data projects.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProjects();
  }, []);

  function resetForm() {
    setTitle("");
    setCategory("");
    setDescription("");
    setTech("");
    setDemoUrl("");
    setGithubUrl("");
    setImage("");
    setEditingId(null);
  }

  function handleEdit(project: Project) {
    setEditingId(project.id);

    setTitle(project.title);
    setCategory(project.category);
    setDescription(project.description);
    setTech(project.tech.join(", "));
    setDemoUrl(project.demoUrl);
    setGithubUrl(project.githubUrl);
    setImage(project.image);

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

    if (
      !title ||
      !category ||
      !description ||
      !tech
    ) {
      setError("Title, category, description, dan technology harus diisi.");

      return;
    }

    const techArray = tech
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    try {
      setSaving(true);

      const data = {
        title,
        category,
        description,
        tech: techArray,
        demo_url: demoUrl || "#",
        github_url: githubUrl || "#",
        image: image || "",
      };

      if (editingId !== null) {
        await updateProject(editingId, data);

        setMessage("Project berhasil diubah.");
      } else {
        await createProject(data);

        setMessage("Project berhasil ditambahkan.");
      }

      resetForm();

      await loadProjects();
    } catch (error) {
      console.error("Gagal menyimpan project:", error);

      setError(
        editingId !== null
          ? "Gagal mengubah project."
          : "Gagal menambahkan project."
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    const yakin = window.confirm(
      "Yakin ingin menghapus project ini?"
    );

    if (!yakin) {
      return;
    }

    try {
      setDeletingId(id);
      setMessage("");
      setError("");

      await deleteProject(id);

      setMessage("Project berhasil dihapus.");

      if (editingId === id) {
        resetForm();
      }

      await loadProjects();
    } catch (error) {
      console.error("Gagal menghapus project:", error);

      setError("Gagal menghapus project.");
    } finally {
      setDeletingId(null);
    }
  }

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Projects
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Kelola data project portfolio.
        </p>
      </div>

      {/* FORM */}
      <div className="rounded-2xl border border-gray-800 bg-[#0b0f19] p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-white">
            {editingId !== null
              ? "Edit Project"
              : "Tambah Project"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {editingId !== null
              ? "Ubah data project yang dipilih."
              : "Tambahkan project baru ke portfolio."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {/* TITLE */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Judul Project
            </label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Contoh: RingKita"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />
          </div>

          {/* CATEGORY */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-500"
            >
              <option value="">
                Pilih Category
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="Mobile App">
                Mobile App
              </option>

              <option value="UI/UX Design">
                UI/UX Design
              </option>

              <option value="Other">
                Other
              </option>
            </select>
          </div>

          {/* DESCRIPTION */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-gray-300">
              Description
            </label>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              placeholder="Deskripsi project..."
              rows={5}
              className="w-full resize-none rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />
          </div>

          {/* TECHNOLOGY */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-gray-300">
              Technology
            </label>

            <input
              type="text"
              value={tech}
              onChange={(e) => setTech(e.target.value)}
              placeholder="Contoh: Next.js, Node.js, Express.js, MySQL"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />

            <p className="mt-2 text-xs text-gray-600">
              Pisahkan setiap technology dengan koma.
            </p>
          </div>

          {/* DEMO URL */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              Demo URL
            </label>

            <input
              type="text"
              value={demoUrl}
              onChange={(e) => setDemoUrl(e.target.value)}
              placeholder="https://..."
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />
          </div>

          {/* GITHUB URL */}
          <div>
            <label className="mb-2 block text-sm text-gray-300">
              GitHub URL
            </label>

            <input
              type="text"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              placeholder="https://github.com/..."
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />
          </div>

          {/* IMAGE */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm text-gray-300">
              Image
            </label>

            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="/ringkita.jpg"
              className="w-full rounded-lg border border-gray-700 bg-[#070a12] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-indigo-500"
            />

            <p className="mt-2 text-xs text-gray-600">
              Masukkan path gambar dari folder public.
            </p>
          </div>

          {/* BUTTON */}
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
                  : "Tambah Project"}
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

        {/* SUCCESS */}
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
            Daftar Projects
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Data project yang tersimpan di database.
          </p>
        </div>

        {loading ? (
          <div className="py-10 text-center text-sm text-gray-500">
            Memuat data projects...
          </div>
        ) : projects.length === 0 ? (
          <div className="py-10 text-center text-sm text-gray-500">
            Belum ada data projects.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1100px]">
              <thead>
                <tr className="border-b border-gray-800 text-left">
                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Project
                  </th>

                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Category
                  </th>

                  <th className="px-4 py-4 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Technology
                  </th>

                  <th className="px-4 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Aksi
                  </th>
                </tr>
              </thead>

              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-gray-800/70 transition hover:bg-gray-900/50"
                  >
                    {/* PROJECT */}
                    <td className="px-4 py-5">
                      <div className="flex items-center gap-4">
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-14 w-20 rounded-lg border border-gray-800 object-cover"
                          />
                        ) : (
                          <div className="flex h-14 w-20 items-center justify-center rounded-lg border border-gray-800 bg-gray-900 text-xs text-gray-600">
                            No Image
                          </div>
                        )}

                        <div>
                          <p className="font-medium text-white">
                            {project.title}
                          </p>

                          <p className="mt-1 max-w-md truncate text-xs text-gray-500">
                            {project.description}
                          </p>

                          <p className="mt-1 text-xs text-gray-700">
                            ID: {project.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* CATEGORY */}
                    <td className="px-4 py-5">
                      <span className="rounded-md bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-300">
                        {project.category}
                      </span>
                    </td>

                    {/* TECH */}
                    <td className="px-4 py-5">
                      <div className="flex max-w-md flex-wrap gap-2">
                        {project.tech.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-400"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* ACTION */}
                    <td className="px-4 py-5 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(project)}
                          disabled={
                            deletingId === project.id
                          }
                          className="rounded-lg border border-indigo-900/50 px-3 py-2 text-xs font-medium text-indigo-400 transition hover:bg-indigo-950/30 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() =>
                            handleDelete(project.id)
                          }
                          disabled={
                            deletingId === project.id
                          }
                          className="rounded-lg border border-red-900/50 px-3 py-2 text-xs font-medium text-red-400 transition hover:bg-red-950/30 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {deletingId === project.id
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