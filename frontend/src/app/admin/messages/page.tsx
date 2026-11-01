"use client";

import { useEffect, useState } from "react";

import {
  ContactMessage,
  fetchMessages,
  deleteMessage,
} from "@/data/api";

export default function MessagesAdminPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMessages = async () => {
    try {
      setLoading(true);

      const data = await fetchMessages();

      setMessages(data);
    } catch (error) {
      console.error(error);
      alert("Gagal mengambil pesan");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = window.confirm(
      "Yakin ingin menghapus pesan ini?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteMessage(id);

      alert("Pesan berhasil dihapus");

      await loadMessages();
    } catch (error) {
      console.error(error);
      alert("Gagal menghapus pesan");
    }
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Messages
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          Kelola pesan yang masuk melalui form kontak website.
        </p>
      </div>

      {/* CONTENT */}
      <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#0b0f19]">
        <div className="flex items-center justify-between border-b border-gray-800 p-6">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Pesan Masuk
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Semua pesan dari pengunjung website.
            </p>
          </div>

          <div className="rounded-lg border border-gray-700 bg-[#070a12] px-4 py-2">
            <span className="text-sm text-gray-400">
              Total:{" "}
            </span>

            <span className="text-sm font-semibold text-white">
              {messages.length}
            </span>
          </div>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="p-6 text-sm text-gray-500">
            Memuat pesan...
          </div>
        ) : messages.length === 0 ? (
          <div className="p-10 text-center">
            <div className="text-4xl">✉</div>

            <h3 className="mt-4 text-lg font-medium text-white">
              Belum ada pesan
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Pesan dari form kontak akan muncul di sini.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className="p-6 transition hover:bg-[#0e1320]"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                  {/* MESSAGE INFO */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                      <h3 className="font-semibold text-white">
                        {message.name}
                      </h3>

                      <span className="hidden text-gray-700 sm:inline">
                        •
                      </span>

                      <a
                        href={`mailto:${message.email}`}
                        className="text-sm text-gray-400 transition hover:text-white"
                      >
                        {message.email}
                      </a>
                    </div>

                    <div className="mt-2 text-xs text-gray-600">
                      {new Date(
                        message.created_at
                      ).toLocaleString("id-ID")}
                    </div>

                    <div className="mt-5 rounded-xl border border-gray-800 bg-[#070a12] p-5">
                      <p className="whitespace-pre-wrap text-sm leading-7 text-gray-300">
                        {message.message}
                      </p>
                    </div>
                  </div>

                  {/* ACTION */}
                  <div className="flex shrink-0 gap-2">
                    <a
                      href={`mailto:${message.email}?subject=Re:%20Pesan%20dari%20Portfolio`}
                      className="rounded-lg border border-gray-700 px-4 py-2 text-xs text-gray-300 transition hover:bg-gray-800 hover:text-white"
                    >
                      Balas
                    </a>

                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(message.id)
                      }
                      className="rounded-lg border border-red-900 px-4 py-2 text-xs text-red-400 transition hover:bg-red-950"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}