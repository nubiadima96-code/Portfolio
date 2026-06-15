"use client";

import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { getFeaturedCaseStudies } from "@/lib/data";
import { CaseCard } from "./CaseCard";
import { AnimatedSection } from "./AnimatedSection";

export const FeaturedCases = () => {
  const featured = getFeaturedCaseStudies();

  return (
    <section id="work" className="max-w-7xl mx-auto pt-24 pb-24 px-6">
      <AnimatedSection className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
          <Briefcase className="w-3 h-3" />
          Selected work
        </div>
        <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
          Featured <span className="text-teal-400">case studies</span>
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          A few projects that show product thinking, AI UX, and mobile design.
        </p>
      </AnimatedSection>

      <div className="grid items-stretch gap-x-8 gap-y-8 md:grid-cols-2 lg:gap-y-10">
        {featured.map((study, i) => (
          <CaseCard key={study.slug} study={study} index={i} />
        ))}
      </div>

      <AnimatedSection className="text-center mt-12" delay={0.2}>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200 transition"
        >
          View all case studies
          <ArrowRight className="w-4 h-4" />
        </Link>
      </AnimatedSection>
    </section>
  );
};
