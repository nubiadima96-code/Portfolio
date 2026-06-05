"use client";

import { MessageSquare, LayoutDashboard, Target } from "lucide-react";

export const AiChatbotContent = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 pb-24 px-6 space-y-20">
      <section className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-semibold text-white tracking-tight">Project idea and goal</h2>
          <p className="text-slate-300 leading-relaxed">
            The goal was to build an AI chatbot for the company website that not only answers standard questions, but <strong className="text-white">fully replaces the initial sales/briefing stage</strong>.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="flex gap-2"><span className="text-teal-400 mt-0.5">→</span> Prepare the manager <strong className="text-white">before</strong> the first contact with a client</li>
            <li className="flex gap-2"><span className="text-teal-400 mt-0.5">→</span> Increase lead trust</li>
            <li className="flex gap-2"><span className="text-teal-400 mt-0.5">→</span> Save time for both team and client</li>
          </ul>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Format</span>
              <span className="text-slate-100">Internal product project</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Role</span>
              <span className="text-slate-100">UI/UX Designer · UX Logic · Animation · Vibe Coding (AI + Frontend)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-400/10 ring-1 ring-teal-400/20 text-teal-400">
            <MessageSquare className="w-5 h-5" />
          </span>
          <h2 className="text-2xl font-semibold text-white tracking-tight">Part #1: AI Chatbot for clients</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Chatbot functionality</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Communicates with clients in a natural, human style</li>
              <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Answers questions about the company, services, and processes</li>
              <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Clarifies project details: product type, goals, platform, budget, deadlines, functionality</li>
              <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Guides the client through a logical UX conversation instead of a dry form</li>
              <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Builds a preliminary estimate based on responses</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">UX value</h3>
            <p className="text-slate-300 text-sm">
              Instead of &quot;Leave a request - we will contact you,&quot; the client gets: <em>&quot;I can talk right away, explain everything, and understand the cost&quot;</em>. This increases trust, reduces cold leads, and makes the experience more comfortable.
            </p>
          </div>
        </div>
        <div className="bg-white/5 ring-1 ring-white/10 rounded-xl p-6">
          <h4 className="text-sm font-medium text-teal-300 mb-2">My role</h4>
          <ul className="flex flex-wrap gap-2 text-sm text-slate-300">
            <li className="flex gap-2"><span className="text-teal-400">·</span> UX dialogue logic</li>
            <li className="flex gap-2"><span className="text-teal-400">·</span> Chatbot interface</li>
            <li className="flex gap-2"><span className="text-teal-400">·</span> Question-and-answer scenarios</li>
            <li className="flex gap-2"><span className="text-teal-400">·</span> State animations (typing, transitions, responses)</li>
            <li className="flex gap-2"><span className="text-teal-400">·</span> UX + AI logic</li>
          </ul>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-400/10 ring-1 ring-teal-400/20 text-teal-400">
            <LayoutDashboard className="w-5 h-5" />
          </span>
          <h2 className="text-2xl font-semibold text-white tracking-tight">Part #2: Manager Dashboard (Admin)</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Dashboard functionality</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Full conversation history with the client</li>
              <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Structured project brief: client goals, tasks, budget range, preliminary estimate</li>
              <li className="flex gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-400 flex-shrink-0" />Ability to quickly understand context and immediately move to a meaningful conversation</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">UX impact for business</h3>
            <p className="text-slate-300 text-sm">
              The manager does not start from zero, arrives prepared, asks more precise questions, and appears professional. This improves sales quality, lead conversion, and saves time for everyone involved.
            </p>
          </div>
        </div>
        <div className="bg-white/5 ring-1 ring-white/10 rounded-xl p-6">
          <h4 className="text-sm font-medium text-teal-300 mb-2">My role</h4>
          <ul className="flex flex-wrap gap-2 text-sm text-slate-300">
            <li className="flex gap-2"><span className="text-teal-400">·</span> UX dashboard structure</li>
            <li className="flex gap-2"><span className="text-teal-400">·</span> Screen design</li>
            <li className="flex gap-2"><span className="text-teal-400">·</span> Information hierarchy</li>
            <li className="flex gap-2"><span className="text-teal-400">·</span> Prepared for scaling (many managers, many leads)</li>
          </ul>
        </div>
      </section>

      <section className="bg-teal-400/5 ring-1 ring-teal-400/20 rounded-2xl p-8 md:p-10 space-y-6">
        <h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
          <Target className="w-5 h-5 text-teal-400" />
          Project result
        </h2>
        <p className="text-slate-300 leading-relaxed">
          The project combined AI, UX, design, and business logic, making lead workflows smarter and more effective. For me, it was an especially valuable case: I worked from idea to UX implementation, combined design + AI + vibe coding, and created a solution that truly impacts business. It showed I can think not only as a designer, but as a product specialist.
        </p>
      </section>
    </div>
  );
};
