"use client";

import {
  AiCaseAboutSection,
  AiUxPatternList,
  aiCaseMainClassName,
} from "./aiUxCaseLayout";
import { AiCaseYoutubeEmbed } from "./AiCaseYoutubeEmbed";
import { AiUxChapterSliders } from "./AiUxChapterSliders";
import { emailAssistantMediaChapters } from "@/lib/caseScreens/emailAssistantMedia";

const ASSET = "/assets/CaseEmailAssistant";

export const EmailAssistantContent = () => {
  return (
    <div className={aiCaseMainClassName}>
      <AiCaseAboutSection
        meta={[
          { label: "Team", value: "4 designers · collaborative shot" },
          { label: "My role", value: "UX/UI design · video motion & UI components" },
          { label: "Format", value: "5 chapters · video + UI carousel" },
        ]}
      >
        <h2 className="text-xl lg:text-2xl font-semibold text-white tracking-tight">
          About the case
        </h2>
        <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
          This AI email assistant was shaped by a team of{" "}
          <strong className="text-slate-100 font-medium">four designers</strong> — we
          projected the flows together, then published the result as a multi-chapter
          Dribbble shot with video and full UI carousels.
        </p>
        <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
          My contribution covered{" "}
          <strong className="text-slate-100 font-medium">product and interface design</strong>{" "}
          for inbox, reply, and automation patterns, and{" "}
          <strong className="text-slate-100 font-medium">motion for the chapter videos</strong>{" "}
          — I built and animated the UI components that appear in each demo clip.
        </p>
        <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
          Below, each chapter follows the Dribbble layout: a video on top and a horizontal
          thumbnail strip to browse the screens.
        </p>
      </AiCaseAboutSection>

      <AiCaseYoutubeEmbed
        videoId="O65cPfpFXM0"
        startSeconds={119}
        title="AI Email Assistant — case walkthrough"
        caption="Full case overview — motion and UI we built for the shot."
      />

      <AiUxChapterSliders assetBase={ASSET} chapters={emailAssistantMediaChapters} />

      <AiUxPatternList
        title="What we designed"
        intro="A single email workspace where AI reads context, suggests the next action, and keeps projects moving — from the first urgent thread to scheduled follow-ups."
        groups={[
          {
            label: "Inbox & priority",
            items: [
              "Smart tabs: Important, Urgent, Meetings, Other",
              "One-line AI summaries on every row",
              "Filters and meetings surfaced without manual sorting",
            ],
          },
          {
            label: "Reply & assistant",
            items: [
              "Side AI chat with tone-of-voice control",
              "Draft replies from thread context",
              "Out-of-office rules and auto-replies",
            ],
          },
          {
            label: "Tasks & context",
            items: [
              "Schedule meetings from urgent mail",
              "Contact hub, files, and smart naming",
              "Company intel and partnership threads",
            ],
          },
          {
            label: "Ecosystem",
            items: [
              "Gmail, Outlook, and Mailchimp hooks",
              "Consistent UI for a future email.ai product",
            ],
          },
        ]}
      />
    </div>
  );
};
