import { caseStudies } from "@/lib/data";
import { CaseCard } from "@/components/CaseCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected UI/UX and product design case studies — AI products, mobile apps, dashboards, and learning projects by Dmytro Chyzh.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies — Dmytro Chyzh",
    description:
      "Selected UI/UX and product design case studies — AI products, mobile apps, dashboards, and learning projects.",
    url: "/case-studies",
  },
};

const CaseStudiesPage = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="max-w-7xl mx-auto pt-24 lg:pt-32 pb-24 px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Selected projects showcasing my design process and outcomes.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-x-8 gap-y-8 md:grid-cols-2 lg:gap-y-10">
          {caseStudies.map((study, i) => (
            <CaseCard key={study.slug} study={study} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
