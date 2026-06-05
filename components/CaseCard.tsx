"use client";

import Link from "next/link";
import { CaseStudy } from "@/lib/data";
import { motion } from "framer-motion";
import { DynamicIcon } from "./DynamicIcon";

export const CaseCard = ({ study, index }: { study: CaseStudy; index: number }) => {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/case-studies/${study.slug}`} className="block group h-full">
        <article className="flex h-full flex-col bg-slate-950/60 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-teal-400/40 hover:shadow-[0_20px_60px_rgba(45,212,191,0.2)] transition-all duration-300">
          <div className="relative aspect-[16/10] shrink-0 overflow-hidden bg-black/40">
            {study.coverImage ? (
              <img
                src={study.coverImage}
                alt={study.title}
                width={study.coverImageWidth}
                height={study.coverImageHeight}
                className="h-full w-full object-cover object-center block group-hover:scale-[1.02] transition-transform duration-500"
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <DynamicIcon name={study.coverIcon || "Box"} className="w-16 h-16 text-teal-400/40" />
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-semibold text-white mb-1">
              {study.title}
              {study.subtitle && (
                <span className="text-teal-400"> {study.subtitle}</span>
              )}
            </h3>
            <p className="text-sm text-slate-400 line-clamp-2 mb-4 flex-1">
              {study.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs text-slate-300"
                >
                  <DynamicIcon name={tag.icon} className="w-3 h-3" />
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
};
