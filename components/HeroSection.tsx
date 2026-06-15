"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto pt-16 lg:pt-20 pb-16 px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <AnimatedSection className="lg:col-span-7" delay={0.1}>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-4">
            Dmytro Chyzh
          </h1>
          <p className="text-lg sm:text-xl font-medium text-teal-400 mb-6">UI UX Product Designer</p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            UI/UX designer and AI design engineer working at the intersection of design, product logic, and code. I create modern visuals, thoughtful interfaces, and interactive prototypes that are easy to hand off to development. From idea, structure, and user scenarios to visual storytelling and micro-interactions, I focus on products that look great, feel clear, and deliver business results.
          </p>

          <div className="flex flex-wrap gap-8 mb-8 pt-6 border-t border-white/10">
            <div>
              <div className="text-xl font-semibold text-white">2+ years</div>
              <div className="text-sm text-slate-400">Experience</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-white">Cieden</div>
              <div className="text-sm text-slate-400">Working at</div>
            </div>
            <div>
              <div className="text-xl font-semibold text-white">Lviv</div>
              <div className="text-sm text-slate-400">Ukraine</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="/About%20Page%20Materials/CV-UXUI-Product-Designer-Dmytro-Chyzh.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-teal-400/15 hover:bg-teal-400/25 ring-1 ring-teal-400/50 hover:ring-teal-400 rounded-full transition shadow-[0_0_30px_rgba(45,212,191,0.25)]"
              aria-label="View portfolio PDF"
            >
              View Portfolio
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-100 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 rounded-full transition"
            >
              View Case Studies
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://www.linkedin.com/in/dima-chyzh-0360aa24a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-100 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 rounded-full transition"
              aria-label="Get in contact on LinkedIn"
            >
              Get in Contact
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection className="lg:col-span-5" delay={0.4} direction="right">
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              <div className="aspect-square rounded-2xl overflow-hidden bg-black/40 backdrop-blur-xl ring-1 ring-white/10 shadow-2xl relative">
                <Image
                  src="/assets/photo_2.jpg"
                  alt="Dmytro Chyzh — UI/UX Product Designer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 384px"
                  priority
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
