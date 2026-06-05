"use client";

import { AiUxSection } from "./aiUxCaseLayout";

export type CaseScreen = {
  file: string;
  title: string;
  description: string;
};

export const AiUxScreenGallery = ({
  assetBase,
  chapters,
}: {
  assetBase: string;
  chapters: { label: string; screens: CaseScreen[] }[];
}) => {
  return (
    <div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
      {chapters.map((chapter) => (
        <div key={chapter.label} className="space-y-10 md:space-y-12">
          <h3 className="text-lg font-semibold text-teal-300/90 tracking-tight px-1">
            {chapter.label}
          </h3>
          {chapter.screens.map((screen) => (
            <AiUxSection
              key={screen.file}
              title={screen.title}
              description={screen.description}
              imageSrc={`${assetBase}/${screen.file}`}
              imageAlt={screen.title}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
