"use client";

import { AiCaseAboutSection, AiUxPatternList, aiCaseMainClassName } from "./aiUxCaseLayout";
import { AiCaseYoutubeEmbed } from "./AiCaseYoutubeEmbed";
import { AiUxChapterSliders } from "./AiUxChapterSliders";
import { meetingAssistantMediaChapters } from "@/lib/caseScreens/meetingAssistantMedia";

const ASSET = "/assets/CaseMeetingAssistant";

export const MeetingAssistantContent = () => {
  return (
    <div className={aiCaseMainClassName}>
      <AiCaseAboutSection
        meta={[
          { label: "Team", value: "4 designers · collaborative shot" },
          { label: "My role", value: "UX/UI design · video motion & UI components" },
          { label: "Format", value: "7 chapters · video + UI carousel" },
        ]}
      >
        <h2 className="text-xl lg:text-2xl font-semibold text-white tracking-tight">
          About the case
        </h2>
        <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
          Meeting-assistant UX patterns from a collaborative Dribbble shot — four designers,
          with my work on interfaces and animated UI for the chapter videos.
        </p>
        <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
          Transcript, notes, scheduling, tasks, and overview — each chapter is a video plus a
          screen carousel, aligned with the shot on Dribbble.
        </p>
      </AiCaseAboutSection>

      <AiCaseYoutubeEmbed
        videoId="WQNQ238nMac"
        title="Meeting Assistant — case walkthrough"
        caption="Full case overview — motion and UI from the collaborative Dribbble shot."
      />

      <AiUxChapterSliders assetBase={ASSET} chapters={meetingAssistantMediaChapters} />

      <AiUxPatternList
        title="What we designed"
        intro="Patterns for reviewing calls after they end — cleaner audio and transcript, AI notes, tasks, and scheduling in one meeting workspace."
        groups={[
          {
            label: "During & after the call",
            items: [
              "Filler-word cleanup in transcripts",
              "Video with multi-track waveforms",
              "Jargon explained in context",
            ],
          },
          {
            label: "Outcomes",
            items: [
              "AI meeting notes and action points",
              "Task breakdown from discussion",
              "Follow-up scheduling from the recap",
            ],
          },
          {
            label: "Platform",
            items: ["Meet, Teams, and Slack in the overview"],
          },
        ]}
      />
    </div>
  );
};
