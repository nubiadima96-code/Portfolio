"use client";

import { ExternalLink } from "lucide-react";

export const CompanyCaseContent = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-6 space-y-16">
      <section className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-semibold text-white tracking-tight">Context</h2>
          <p className="text-slate-300 leading-relaxed">
            At the company, I was responsible for creating visual case studies for different products. My task was not to design products from scratch, but to make them as attractive and clear as possible for portfolios, presentations, and clients.
          </p>
          <p className="text-slate-300 leading-relaxed">
            In practice, I transformed raw product design into stories that are easy to browse, scroll, and present in meetings, focusing on key functionality and user value.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Role</span>
              <span className="text-slate-100">UI/UX Designer · Case Study Creator</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Focus</span>
              <span className="text-slate-100">Visual storytelling, animations, prototypes</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Tools</span>
              <span className="text-slate-100">Figma, After Effects, mockups, HTML</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white tracking-tight">What I specifically did</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Prepared UI screens (cleanup, alignment, and selecting the strongest, most impactful shots).</li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Created animations for core flows and micro-interactions.</li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Built clickable Figma prototypes to demonstrate key flows.</li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Selected and created mockups (desktop, mobile, mixed scenes).</li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Worked with copy and structured each case from headings to feature explanations.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white tracking-tight">Work process</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />The product designer explained product logic, target audience, and key functionality.</li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />I selected the most valuable usage scenarios and decided what should be shown in each case.</li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />I created visually strong screens, added animations, and built storytelling from problem to solution.</li>
            <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Finally, I assembled each case in a format suitable for portfolios, presentations, and client sharing.</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-lg font-semibold text-white tracking-tight">What this delivered</h3>
        <p className="text-slate-300 leading-relaxed">
          This experience taught me not only to design screens, but to present products: highlight value, build story logic, and show only what truly matters. It directly shaped how I approach case studies in my own portfolio.
        </p>
        <div className="pt-6">
          <p className="text-slate-400 font-medium mb-4 text-sm">Case links</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <a href="https://cieden.com/sidekick-fast-track-design-for-massage-app" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">Sidekick - app for massage and workouts</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/designing-a-powerful-3pl-software-platform" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">3PL - platform for logistics and order analytics</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/article-revamped-ux-design-for-a-sustainable-property-investment-project" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">Sustainable Property - UX for real-estate investment</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/e-learning-platform-design" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">MedEntry - educational platform (e-learning)</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/telecom-design-sitenna" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">Sitenna - 5G telecom platform</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/article-open-iq-redesigning-a-leading-call-center-software-in-the-cloud" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">Open IQ - call-center software</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/blizzard" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">Blizzard - CMS for digital assets</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/voice-user-interface-design" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">Voice UI - AI banking, interactive prototype</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/lykon" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">LYKON - health app, personalized nutrition</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
            <a href="https://cieden.com/optahaul" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-black/40 backdrop-blur-sm ring-1 ring-white/10 hover:ring-teal-400/40 hover:bg-white/5 transition text-left">
              <span className="text-sm text-slate-200 group-hover:text-teal-200 transition">OptaHaul - logistics for the dairy industry</span>
              <ExternalLink className="w-4 h-4 text-teal-400/80 group-hover:text-teal-300 flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
