import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { CaseHero } from "@/components/CaseHero";
import { caseContentMap } from "@/components/cases";
import { JsonLd } from "@/components/JsonLd";
import { buildCaseStudyMetadata } from "@/lib/metadata";
import { caseStudyJsonLd } from "@/lib/jsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) {
    return { title: "Case Study not found" };
  }
  return buildCaseStudyMetadata(study);
}

const CaseStudyPage = async ({ params }: Props) => {
  const { slug } = await params;
  const study = caseStudies.find((c) => c.slug === slug);
  if (!study) notFound();

  const ContentComponent = caseContentMap[slug];

  return (
    <div className="relative isolate overflow-hidden">
      <JsonLd data={caseStudyJsonLd(study)} />
      <CaseHero study={study} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <div className="relative z-10">{ContentComponent ? <ContentComponent /> : null}</div>
    </div>
  );
};

export default CaseStudyPage;
