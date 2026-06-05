"use client";

import { CaseStudy } from "@/lib/data";
import { AnimatedSection } from "./AnimatedSection";
import { DynamicIcon } from "./DynamicIcon";

const getHeroVisual = (study: CaseStudy) => {
  const src = study.heroImage ?? study.coverImage;
  const width = study.heroImageWidth ?? study.coverImageWidth;
  const height = study.heroImageHeight ?? study.coverImageHeight;
  return { src, width, height };
};

export const CaseHero = ({ study }: { study: CaseStudy }) => {
  const { src, width, height } = getHeroVisual(study);

  return (
    <section className="max-w-7xl mx-auto pt-24 lg:pt-32 pb-16 px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <AnimatedSection className="lg:col-span-7" delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-400/10 ring-1 ring-teal-400/20 rounded-full mb-4">
            <DynamicIcon name={study.badgeIcon} className="w-3 h-3" />
            {study.badge}
          </div>
          <h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
            {study.title}
            {study.subtitle && (
              <>
                <br />
                <span className="text-teal-400">{study.subtitle}</span>
              </>
            )}
          </h1>
          <p className="text-lg text-slate-300 leading-relaxed max-w-xl mb-6">
            {study.description}
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-slate-300">
            {study.tags.map((tag) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10"
              >
                <DynamicIcon name={tag.icon} className="w-3 h-3" />
                {tag.label}
              </span>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection className="lg:col-span-5" delay={0.3} direction="right">
          <div className="relative">
            {src ? (
              <img
                src={src}
                alt={study.title}
                width={width}
                height={height}
                className="w-full h-auto block"
              />
            ) : (
              <div className="aspect-[4/3] rounded-2xl bg-black/40 backdrop-blur-xl ring-1 ring-white/10 flex items-center justify-center">
                <DynamicIcon
                  name={study.coverIcon || "Box"}
                  className="w-20 h-20 text-teal-400/40"
                />
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
