"use client";

import { useState, useEffect } from "react";
import { fetchSkills, SkillGroup } from "@/data/api";

export default function SkillsPage() {
  const [skillGroupsList, setSkillGroupsList] = useState<SkillGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSkills() {
      try {
        setLoading(true);
        const data = await fetchSkills();
        setSkillGroupsList(data);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      } finally {
        setLoading(false);
      }
    }

    loadSkills();
  }, []);

  return (
    <section className="min-h-screen py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>

          <p className="mx-auto max-w-xl text-gray-400">
            Kombinasi keahlian teknis dan kakas bantu yang saya gunakan untuk
            mewujudkan konsep menjadi website yang fungsional.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {loading ? (
            Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse rounded-2xl border border-gray-800/40 bg-gray-900/40 p-6 sm:p-8"
              >
                <div className="mb-8 flex items-center gap-3 border-b border-gray-800/40 pb-4">
                  <div className="h-8 w-8 rounded bg-gray-800" />
                  <div className="h-6 w-1/2 rounded bg-gray-800" />
                </div>

                <div className="space-y-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i}>
                      <div className="mb-2 flex items-center justify-between">
                        <div className="h-4 w-1/3 rounded bg-gray-800" />
                        <div className="h-4 w-12 rounded bg-gray-800" />
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-800" />
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : skillGroupsList.length === 0 ? (
            <div className="col-span-1 rounded-2xl border border-gray-800/50 bg-gray-900/50 p-8 text-center lg:col-span-3">
              <p className="text-gray-500">
                Belum ada data skills.
              </p>
            </div>
          ) : (
            skillGroupsList.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-gray-800/50 bg-gray-900/50 p-6 sm:p-8"
              >
                {/* Group Header */}
                <div className="mb-8 flex items-center gap-3 border-b border-gray-800/50 pb-4">
                  <span className="text-3xl">
                    {group.icon}
                  </span>

                  <h2 className="text-xl font-bold text-white">
                    {group.title}
                  </h2>
                </div>

                {/* Skill List */}
                <div className="space-y-6">
                  {group.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-semibold text-white">
                          {skill.name}
                        </span>

                        <span className="rounded bg-indigo-500/10 px-2 py-0.5 text-xs font-semibold text-indigo-300">
                          {skill.level}
                        </span>
                      </div>

                      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.percentage}%`,
                          }}
                        />
                      </div>

                      <div className="mt-1 text-right text-xs text-gray-400">
                        {skill.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}