import type { MediaSlide } from "@/components/cases/AiUxMediaSlider";
import emailSections from "@/public/assets/CaseEmailAssistant/dribbble-sections.json";
import meetingSections from "@/public/assets/CaseMeetingAssistant/dribbble-sections.json";
import dataSections from "@/public/assets/CaseDataManagement/dribbble-sections.json";

export type MediaChapter = {
  label: string;
  description: string;
  slides: MediaSlide[];
  initialSlide?: number;
};

type RawChapter = {
  label: string;
  description?: string;
  slides: MediaSlide[];
  initialSlide?: number;
};

const stripPromo = (text: string) =>
  text.split(/Not a fan of reading\?/i)[0].replace(/\s+/g, " ").trim();

const toChapters = (raw: RawChapter[]): MediaChapter[] =>
  raw.map((chapter) => ({
    label: chapter.label,
    description: stripPromo(chapter.description ?? ""),
    slides: chapter.slides,
    initialSlide: chapter.initialSlide,
  }));

export const emailAssistantMediaChapters = toChapters(
  emailSections as RawChapter[]
);
export const meetingAssistantMediaChapters = toChapters(
  meetingSections as RawChapter[]
);
export const dataManagementMediaChapters = toChapters(
  dataSections as RawChapter[]
);
