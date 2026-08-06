"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCertificates, Certificate } from "../../mockData";
import SkeletonCard from "../../components/SkeletonCard";

export default function CertificatePage() {
  const [certificatesList, setCertificatesList] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        setLoading(true);

        const data = await getCertificates();

        setCertificatesList(data);
      } catch (error) {
        console.error("Failed to fetch certificates:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  return (
    <section className="py-16 sm:py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Sertifikasi keahlian dan pencapaian akademik yang saya raih selama
            menempuh pendidikan di bidang informatika.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Skeleton Loader */}
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <SkeletonCard
                key={i}
                variant="certificate"
              />
            ))
          ) : (

            /* Certificate Data */
            certificatesList.slice(0, 3).map((cert) => (
              <div
                key={cert.id}
                className="group rounded-2xl bg-gray-900/50 border border-gray-800/50 overflow-hidden hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300"
              >

                {/* Certificate Image */}
                <div className="relative aspect-[4/3] bg-gray-950 overflow-hidden">
                  <Image
                    src="/sertivikat.jpg"
                    alt={`Sertifikat ${cert.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Certificate Information */}
                <div className="p-6">

                  <p className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-2">
                    Certificate
                  </p>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-indigo-300 text-sm font-semibold mb-4">
                    {cert.issuer}
                  </p>

                  <div className="space-y-1.5 text-xs text-gray-500">
                    <div>
                      <span className="font-medium text-gray-400">
                        Diterbitkan:{" "}
                      </span>
                      {cert.date}
                    </div>

                    <div>
                      <span className="font-medium text-gray-400">
                        ID Kredensial:{" "}
                      </span>
                      {cert.credentialId}
                    </div>
                  </div>

                  {/* Verification */}
                  <div className="mt-6 pt-4 border-t border-gray-800/50">
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-indigo-400 transition-colors duration-300"
                    >
                      Lihat Kredensial
                      <span className="text-xs">↗</span>
                    </a>
                  </div>

                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </section>
  );
}