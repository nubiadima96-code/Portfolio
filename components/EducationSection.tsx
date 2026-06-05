"use client";

import { useState } from "react";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";
import { CertificateModal } from "./CertificateModal";

export const EducationSection = () => {
  const [certificateSrc, setCertificateSrc] = useState<string | null>(null);
  const [certificateAlt, setCertificateAlt] = useState("");

  const openCertificate = (imageSrc: string, title: string) => {
    setCertificateSrc(imageSrc);
    setCertificateAlt(`${title} — certificate`);
  };

  return (
    <section id="education" className="max-w-7xl mx-auto pt-24 pb-24 px-6">
      {certificateSrc && (
        <CertificateModal
          imageSrc={certificateSrc}
          alt={certificateAlt}
          onClose={() => setCertificateSrc(null)}
        />
      )}

      <AnimatedSection className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
          <GraduationCap className="w-3 h-3" />
          Education and certificates
        </div>
        <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
          Learning and <span className="text-teal-400">certificates</span>
        </h2>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Continuous learning is key to growth. Click Certified to view the certificate.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {education.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <article className="group bg-slate-950/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.6)] px-5 py-6 flex flex-col justify-between hover:border-teal-400/60 hover:shadow-[0_20px_60px_rgba(45,212,191,0.35)] transition-all duration-300 h-full">
              <div>
                <p className="text-xs text-slate-400 mb-3 uppercase tracking-[0.16em]">
                  {item.type}
                </p>
                <h3 className="text-base font-semibold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400">
                  {item.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                <span>{item.date}</span>
                {item.certificateImage ? (
                  <button
                    type="button"
                    onClick={() => openCertificate(item.certificateImage!, item.title)}
                    className="inline-flex items-center gap-1 text-teal-300 hover:text-teal-200 transition underline-offset-2 hover:underline cursor-pointer"
                    aria-label="View certificate"
                  >
                    {item.status}
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 text-teal-300 group-hover:text-teal-200 transition">
                    {item.status}
                  </span>
                )}
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};
