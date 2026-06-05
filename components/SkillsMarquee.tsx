"use client";

import { useState } from "react";
import { skills, industries, tools } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";
import { Sparkles, ChevronDown, ChevronUp } from "lucide-react";
import { DynamicIcon } from "./DynamicIcon";

interface SkillItem {
  icon: string;
  name: string;
  desc: string;
}

const SkillCard = ({ item, className = "" }: { item: SkillItem; className?: string }) => (
  <div
    className={`bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl px-5 py-4 flex flex-col items-start gap-2 ${className}`}
  >
    <div className="flex items-center gap-3">
      <DynamicIcon name={item.icon} className="w-5 h-5 text-teal-400 flex-shrink-0" />
      <p className="text-sm font-medium text-white mb-0">{item.name}</p>
    </div>
    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
  </div>
);

interface CategoryRowProps {
  title: string;
  items: SkillItem[];
  slow?: boolean;
}

const CategoryRow = ({ title, items, slow }: CategoryRowProps) => {
  const [expanded, setExpanded] = useState(false);
  const doubled = [...items, ...items];

  return (
    <div>
      <div className="flex items-center justify-between mb-4 gap-4">
        <h3 className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-300">
          {title}
        </h3>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-300 hover:text-teal-200 transition shrink-0"
          aria-expanded={expanded}
        >
          {expanded ? (
            <>
              Show less
              <ChevronUp className="w-3.5 h-3.5" />
            </>
          ) : (
            <>
              Show all ({items.length})
              <ChevronDown className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      {expanded ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
          {items.map((item) => (
            <SkillCard key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <div className="marquee-mask rounded-2xl border border-white/10 bg-black/20 py-4">
          <div className={`marquee-track ${slow ? "marquee-track-skills" : ""} gap-4 px-4`}>
            {doubled.map((item, i) => (
              <SkillCard key={`${item.name}-${i}`} item={item} className="min-w-[240px]" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export const SkillsMarquee = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto pt-24 pb-24 px-6">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-6">
          <Sparkles className="w-3 h-3" />
          What I do best
        </div>
        <h2 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
          Skills, industries, and tools
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          Product thinking, UX strategy, visual design, design systems, and a modern tool stack.
        </p>
        <p className="text-sm text-slate-500 max-w-xl mx-auto mt-3">
          Click Show all to view the full list without scrolling animation.
        </p>
      </AnimatedSection>

      <div className="space-y-10">
        <AnimatedSection delay={0.1}>
          <CategoryRow title="Skills" items={skills} slow />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <CategoryRow title="Industries" items={industries} />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <CategoryRow title="Tools" items={tools} />
        </AnimatedSection>
      </div>
    </section>
  );
};
