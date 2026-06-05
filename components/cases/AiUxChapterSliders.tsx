"use client";

import { AiUxMediaSlider, type MediaSlide } from "./AiUxMediaSlider";

export const AiUxChapterSliders = ({
  assetBase,
  chapters,
}: {
  assetBase: string;
  chapters: {
    label: string;
    description?: string;
    slides: MediaSlide[];
    initialSlide?: number;
  }[];
}) => {
  return (
    <div className="w-full space-y-16 md:space-y-24">
      {chapters.map((chapter) => (
        <section key={chapter.label} className="space-y-6 lg:space-y-8">
          <header className="grid lg:grid-cols-12 gap-4 lg:gap-8">
            <div className="lg:col-span-12 space-y-4">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
                {chapter.label}
              </h3>
              {chapter.description ? (
                <p className="text-base md:text-lg leading-relaxed text-slate-300 lg:max-w-[90%]">
                  {chapter.description}
                </p>
              ) : null}
            </div>
          </header>
          <AiUxMediaSlider
            slides={chapter.slides}
            assetBase={assetBase}
            initialSlide={chapter.initialSlide}
          />
        </section>
      ))}
    </div>
  );
};
