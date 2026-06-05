import { HeroSection } from "@/components/HeroSection";
import { FeaturedCases } from "@/components/FeaturedCases";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { EducationSection } from "@/components/EducationSection";
import { JsonLd } from "@/components/JsonLd";
import { personJsonLd, webSiteJsonLd } from "@/lib/jsonLd";

const HomePage = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <JsonLd data={[personJsonLd(), webSiteJsonLd()]} />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <FeaturedCases />
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <SkillsMarquee />
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
      <EducationSection />
    </div>
  );
};

export default HomePage;
