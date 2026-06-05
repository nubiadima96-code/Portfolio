"use client";

import { CaseStudy } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";

interface Props {
  study: CaseStudy;
  mdxContent?: string;
}

export const CaseContent = ({ study, mdxContent }: Props) => {
  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-6 space-y-16">
      <AnimatedSection>
        <section className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              Role in the project
            </h2>
            {mdxContent ? (
              <div className="text-slate-300 leading-relaxed space-y-4">
                {mdxContent.split("\n\n").map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            ) : (
              <p className="text-slate-300 leading-relaxed">
                {study.description}
              </p>
            )}
          </div>
          <div className="lg:col-span-5">
            <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-6 space-y-3">
              {study.role && (
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Role</span>
                  <span className="text-slate-100">{study.role}</span>
                </div>
              )}
              {study.product && (
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Product</span>
                  <span className="text-slate-100">{study.product}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};
