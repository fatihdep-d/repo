"use client";

import { useState, useEffect } from "react";
// Menggunakan import dari src/mockData.ts
import { getProjects, Project } from "../../mockData";
import SkeletonCard from "@/components/SkeletonCard";
import Image from "next/image";

export default function PortfolioPage() {
  const [projectsList, setProjectsList] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    async function fetchProjects() {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjectsList(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const categories = ["All", "Web Dev", "Mobile App", "UI/UX"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsList
      : projectsList.filter((project) => project.category === selectedCategory);

  return (
    <section className="py-16 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kumpulan proyek terbaik yang telah saya kerjakan, mencakup web development, mobile apps, dan desain UI/UX.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                  : "bg-gray-900/50 text-gray-400 hover:text-white border border-gray-800/50 hover:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard key={i} variant="project" />
            ))
          ) : (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl bg-gray-900/50 border border-gray-800/50 hover:border-indigo-500/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Container Gambar Portofolio */}
                  <div className="aspect-video relative overflow-hidden bg-gray-900 border-b border-gray-800/50">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-3 group-hover:text-indigo-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-800/60 text-gray-300 border border-gray-700/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex items-center gap-4 text-sm font-semibold">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-indigo-400 transition-colors duration-300 flex items-center gap-1"
                  >
                    Live Demo ↗
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}