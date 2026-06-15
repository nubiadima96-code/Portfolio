"use client";

import {
  Calculator,
  ExternalLink,
  Mic,
  Sparkles,
  Target,
  Workflow,
} from "lucide-react";
import {
  CaseTextMediaSection,
  caseChapterStackClassName,
} from "./aiUxCaseLayout";

const ASSET = "/assets/CaseChatbot";
const LIVE_DEMO_URL = "https://cieden-assistant.vercel.app/voice-chat";

const ChatbotShot = ({ src, alt }: { src: string; alt: string }) => (
  <article className="rounded-2xl overflow-hidden ring-1 ring-white/10">
    <img src={src} alt={alt} className="w-full h-auto block" />
  </article>
);

const impactStats = [
  {
    label: "Lead volume",
    value: "More inbound",
    detail: "Visitors start a conversation instead of bouncing from a static contact form.",
  },
  {
    label: "Qualification",
    value: "Warmer leads",
    detail: "Chats capture goals, scope signals, and estimate inputs before sales steps in.",
  },
  {
    label: "Team load",
    value: "Less manual work",
    detail: "Managers spend time on meaningful calls — not repeating the same intro questions.",
  },
];

const productFeatures = [
  "Voice & text onboarding with assistant voice preview",
  "Quick prompts: portfolio, pricing, process, services, how to start",
  "Rich answer cards — company overview, industries, full-cycle services",
  "Interactive portfolio browser by industry (42+ cases)",
  "Design process timeline with phase details",
  "Preliminary estimate — assistant Q&A or quick questionnaire",
  "Project brief & next-steps flows inside the chat",
  "Book a call panel with structured discovery form",
  "Follow-up chips after every answer to keep the dialogue moving",
  "Live product on the company site — try it anytime",
];

export const AiChatbotContent = () => {
  return (
    <div className="max-w-7xl mx-auto w-full pt-16 pb-24 px-6 space-y-16 lg:space-y-20">
      <section className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-semibold text-white tracking-tight">
            What we built for the company
          </h2>
          <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
            A single <strong className="text-white">AI sales assistant</strong> on the company
            website — not a contact form, not a FAQ widget. It talks like a human, explains what
            the agency does, opens portfolio cases, walks through process, and can run a{" "}
            <strong className="text-white">preliminary estimate</strong> or book a discovery call.
          </p>
          <p className="text-slate-300 leading-relaxed text-base lg:text-lg">
            For the business it changed the first touch:{" "}
            <strong className="text-white">more new leads</strong>, faster answers for clients, and{" "}
            <strong className="text-white">easier handoff to the sales team</strong> because every
            conversation already carries context — what they need, which direction fits, and how
            serious the project looks.
          </p>
        </div>
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between gap-4 text-xs text-slate-400">
              <span>Product</span>
              <span className="text-slate-100 text-right">Cieden AI Assistant</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs text-slate-400">
              <span>Status</span>
              <span className="text-teal-300">Live · production</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs text-slate-400">
              <span>My role</span>
              <span className="text-slate-100 text-right max-w-[72%]">
                UI/UX · dialogue logic · animations · vibe coding (AI + frontend)
              </span>
            </div>
            <div className="flex items-center justify-between gap-4 text-xs text-slate-400">
              <span>Try it</span>
              <a
                href={LIVE_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal-300 hover:text-teal-200 transition"
              >
                cieden-assistant.vercel.app
                <ExternalLink className="w-3 h-3" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-teal-400/5 ring-1 ring-teal-400/20 p-8 md:p-10 space-y-8">
        <div className="space-y-3 max-w-3xl">
          <h3 className="text-lg font-semibold text-white">Impact for the company</h3>
          <p className="text-slate-300 leading-relaxed">
            The assistant works as a always-on front door for sales: it educates visitors, filters
            curiosity from real intent, and prepares better conversations for the team — without
            adding another tool for managers to learn.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-black/30 ring-1 ring-white/10 p-5 space-y-2"
            >
              <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
              <p className="text-2xl font-semibold text-teal-300">{stat.value}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={caseChapterStackClassName}>
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-300/90">
            Product walkthrough
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
            Everything the assistant can do
          </h2>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            Screens from the live product — each flow is a real feature visitors use on the site
            today.
          </p>
        </header>

        <CaseTextMediaSection
          title="Voice or text — visitor picks the channel"
          description="Onboarding lets people preview assistant voices or switch to text chat. No signup wall on step one — the goal is to lower friction and start a real conversation in seconds."
        >
          <ChatbotShot
            src={`${ASSET}/01-welcome-voice.png`}
            alt="Cieden AI Assistant voice and text onboarding"
          />
        </CaseTextMediaSection>

        <CaseTextMediaSection
          title="Smart entry points instead of a dead form"
          description="Six quick prompts cover the questions sales hears every day — what we do, portfolio, pricing, process, services, and how to start. Visitors tap once instead of writing a cold email."
        >
          <ChatbotShot
            src={`${ASSET}/02-quick-prompts.png`}
            alt="Cieden AI Assistant quick prompt grid"
          />
        </CaseTextMediaSection>

        <CaseTextMediaSection
          title="Company story as rich UI cards"
          description="Answers are not a wall of text — the assistant opens structured cards: what we do, industries, and design + development scope, with follow-up chips to go deeper or jump to estimate."
        >
          <ChatbotShot
            src={`${ASSET}/03-about-cieden.png`}
            alt="Cieden AI Assistant company overview cards"
          />
        </CaseTextMediaSection>

        <CaseTextMediaSection
          title="Portfolio inside the chat"
          description="“Show your portfolio” opens an industry grid — Edtech, Fintech, Logistics, Real Estate, and more — so prospects self-qualify before a call. One tap and the assistant explains the best match."
        >
          <ChatbotShot src={`${ASSET}/04-portfolio.png`} alt="Cieden AI Assistant portfolio grid" />
        </CaseTextMediaSection>

        <CaseTextMediaSection
          title="Design process — timeline, not a PDF"
          description="The process flow is visual: Discovery → UX Sprints → UI & System → Handoff & Support. Each phase can expand with details, keeping trust high while the user stays in chat."
        >
          <ChatbotShot
            src={`${ASSET}/06-process.png`}
            alt="Cieden AI Assistant design process timeline"
          />
        </CaseTextMediaSection>

        <CaseTextMediaSection
          title="Preliminary estimate — two paths"
          description="When someone asks about cost, they get a clear choice: talk through the project with the assistant (only the questions that matter) or fill a short questionnaire in the side panel. No “we’ll email you a quote in 3 days.”"
        >
          <ChatbotShot
            src={`${ASSET}/09-estimate-chooser.png`}
            alt="Cieden AI Assistant preliminary estimate options"
          />
        </CaseTextMediaSection>

        <CaseTextMediaSection
          title="Estimate chat with progress"
          description="The assistant-led estimate runs as a guided dialogue — platform, scope, features — with a visible progress bar (e.g. 8 steps). Sales gets structured inputs instead of vague “we need an app” messages."
        >
          <ChatbotShot
            src={`${ASSET}/10-estimate-calculator.png`}
            alt="Cieden AI Assistant estimate Q&A with progress"
          />
        </CaseTextMediaSection>

        <CaseTextMediaSection
          title="Book a discovery call"
          description="Ready to talk to a human? The assistant opens a booking panel — name, email, source, project brief — plus a clear “what happens next” block so leads know the team will respond within one business day."
        >
          <ChatbotShot
            src={`${ASSET}/11-book-call.png`}
            alt="Cieden AI Assistant book a call panel"
          />
        </CaseTextMediaSection>
      </section>

      <section className="rounded-2xl bg-black/40 ring-1 ring-white/10 p-8 md:p-10 backdrop-blur-xl space-y-8">
        <header className="space-y-3">
          <h3 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-teal-400" aria-hidden />
            Full feature set
          </h3>
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            One product surface — many sales jobs handled without leaving the chat.
          </p>
        </header>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
          {productFeatures.map((feature) => (
            <li key={feature} className="flex gap-2.5 leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" aria-hidden />
              {feature}
            </li>
          ))}
        </ul>
        <div className="grid sm:grid-cols-3 gap-4 pt-2">
          {[
            { icon: Mic, label: "Voice + text" },
            { icon: Calculator, label: "Estimate flows" },
            { icon: Workflow, label: "Sales automation" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl bg-white/[0.04] ring-1 ring-white/10 px-4 py-3 text-sm text-slate-200"
            >
              <Icon className="w-4 h-4 text-teal-400 shrink-0" aria-hidden />
              {label}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl bg-teal-400/5 ring-1 ring-teal-400/20 p-8 md:p-10 space-y-6">
        <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
          <Target className="w-5 h-5 text-teal-400" aria-hidden />
          Why it matters
        </h2>
        <p className="text-slate-300 leading-relaxed max-w-4xl">
          This was a full product loop — UX dialogue design, interface, motion, and implementation
          with AI tooling. For the company it means more qualified conversations, less repetitive
          work for sales, and a modern first impression that matches an AI-native agency. The
          assistant is live —{" "}
          <a
            href={LIVE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-300 hover:text-teal-200 underline-offset-2 hover:underline"
          >
            try it here
          </a>
          .
        </p>
      </section>
    </div>
  );
};
