"use client";

import type { ReactNode } from "react";

export type CaseMetaRow = { label: string; value: string };

export const AiCaseAboutSection = ({
  children,
  meta,
}: {
  children: ReactNode;
  meta: CaseMetaRow[];
}) => (
  <section className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
    <div className="lg:col-span-7 space-y-5">{children}</div>
    <div className="lg:col-span-5">
      <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-6 md:p-8 space-y-4 h-full">
        {meta.map((row) => (
          <div
            key={row.label}
            className="flex items-start justify-between gap-4 text-sm border-b border-white/5 last:border-0 pb-4 last:pb-0"
          >
            <span className="text-slate-400 shrink-0">{row.label}</span>
            <span className="text-slate-100 text-right leading-snug">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const aiCaseMainClassName =
  "max-w-7xl mx-auto w-full pt-16 pb-24 px-6 space-y-20 lg:space-y-24";

export const caseChapterStackClassName =
  "w-full space-y-16 md:space-y-20 lg:space-y-24";

export const CaseTextMediaSection = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) => (
  <section className="space-y-8 md:space-y-10 lg:space-y-12">
    <header className="space-y-3 md:space-y-4 max-w-4xl">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
        {title}
      </h3>
      <p className="text-base md:text-lg leading-relaxed text-slate-300 lg:max-w-[90%]">
        {description}
      </p>
    </header>
    <div className="pt-1 lg:pt-2">{children}</div>
  </section>
);

export const CaseTextBlock = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <header className="space-y-3 md:space-y-4 max-w-4xl">
    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
      {title}
    </h3>
    <p className="text-base md:text-lg leading-relaxed text-slate-300 lg:max-w-[90%]">
      {description}
    </p>
  </header>
);

export const AiUxShot = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="w-full h-auto block" />
);

export const AiUxSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}) => (
  <div className="space-y-6 md:space-y-8">
    <article className="rounded-2xl bg-black/40 text-slate-200 p-8 md:p-12 ring-1 ring-white/10 backdrop-blur-xl">
      <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
        <h3 className="md:col-span-4 text-2xl md:text-3xl font-semibold leading-tight text-white">
          {title}
        </h3>
        <p className="md:col-span-8 text-base md:text-lg leading-relaxed text-slate-300">
          {description}
        </p>
      </div>
    </article>
    {imageSrc && imageAlt ? <AiUxShot src={imageSrc} alt={imageAlt} /> : null}
  </div>
);

export type PatternGroup = { label: string; items: string[] };

export const AiUxPatternList = ({
  title,
  intro,
  groups,
  items,
}: {
  title: string;
  intro?: string;
  groups?: PatternGroup[];
  items?: string[];
}) => {
  const resolvedGroups: PatternGroup[] =
    groups ??
    (items
      ? [{ label: "Patterns", items }]
      : []);

  return (
    <section className="relative w-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-gradient-to-br from-black/55 via-teal-950/25 to-slate-950/80 backdrop-blur-xl p-8 md:p-10 lg:p-14">
      <div
        className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
        aria-hidden
      />
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <header className="lg:col-span-4 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300/90">
            Scope
          </p>
          <h3 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-tight">
            {title}
          </h3>
          {intro ? (
            <p className="text-base text-slate-300 leading-relaxed">{intro}</p>
          ) : null}
        </header>
        <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 lg:gap-5">
          {resolvedGroups.map((group) => (
            <article
              key={group.label}
              className="rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-5 md:p-6 space-y-3 hover:bg-white/[0.06] transition-colors"
            >
              <h4 className="text-sm font-semibold text-teal-200/95 tracking-tight">
                {group.label}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-sm text-slate-300 leading-relaxed"
                  >
                    <span
                      className="mt-2 w-1 h-1 rounded-full bg-teal-400/90 shrink-0"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
