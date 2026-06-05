"use client";

import { AiCaseAboutSection, AiUxPatternList, aiCaseMainClassName } from "./aiUxCaseLayout";
import { AiCaseYoutubeEmbed } from "./AiCaseYoutubeEmbed";
import { AiUxChapterSliders } from "./AiUxChapterSliders";
import { dataManagementMediaChapters } from "@/lib/caseScreens/dataManagementMedia";

const ASSET = "/assets/CaseDataManagement";

export const DataManagementContent = () => {
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
          Data-management UX from a team Dribbble shot — four designers, with my work on product
          UI and motion for the chapter demos.
        </p>
        <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
          Catalog enrichment, formulas, unification, and dashboards — video plus full UI frames
          per chapter.
        </p>
      </AiCaseAboutSection>

      <AiCaseYoutubeEmbed
        videoId="X-2x2l-GxJY"
        startSeconds={126}
        title="Data Management — case walkthrough"
        caption="Full case overview — motion and UI from the collaborative Dribbble shot."
      />

      <AiUxChapterSliders assetBase={ASSET} chapters={dataManagementMediaChapters} />

      <AiUxPatternList
        title="What we designed"
        intro="How AI helps teams turn sparse catalogs into rich product data — autofill, copy, formulas, unification, and dashboards in one tool."
        groups={[
          {
            label: "Data enrichment",
            items: [
              "Autofill missing catalog fields in bulk",
              "AI writer for product descriptions",
              "Formula assistance in tables",
            ],
          },
          {
            label: "Insight & viz",
            items: [
              "Unify sources into one view",
              "KPI cards with trend deltas",
              "Charts with Reformat and Analyze",
            ],
          },
        ]}
      />
    </div>
  );
};
