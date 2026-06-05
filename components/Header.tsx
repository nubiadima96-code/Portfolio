"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinkClass = (isActive: boolean) =>
  `transition ${
    isActive
      ? "text-white font-medium relative after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-teal-400 after:rounded-full"
      : "text-slate-200/80 hover:text-white"
  }`;

const HeaderShell = ({ pathname }: { pathname: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isOverview = pathname === "/";
  const isCaseStudies = pathname.startsWith("/case-studies");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-white tracking-tight">
            Dmytro Chyzh
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm absolute left-1/2 -translate-x-1/2">
            <Link href="/" className={navLinkClass(isOverview)}>
              Overview
            </Link>
            <Link href="/case-studies" className={navLinkClass(isCaseStudies)}>
              Case Studies
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/dima-chyzh-0360aa24a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-slate-100 bg-white/5 hover:bg-white/10 ring-1 ring-teal-400/40 hover:ring-teal-400/60 rounded-full transition shadow-[0_0_20px_rgba(45,212,191,0.35)]"
              aria-label="Get in contact on LinkedIn"
            >
              Get in Contact
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <div className="md:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-xl">
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4 text-base">
            <Link href="/" className={navLinkClass(isOverview)} onClick={() => setMenuOpen(false)}>
              Overview
            </Link>
            <Link
              href="/case-studies"
              className={navLinkClass(isCaseStudies)}
              onClick={() => setMenuOpen(false)}
            >
              Case Studies
            </Link>
            <a
              href="https://www.linkedin.com/in/dima-chyzh-0360aa24a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 mt-2 text-sm font-medium text-slate-100 bg-white/5 ring-1 ring-teal-400/40 rounded-full"
              aria-label="Get in contact on LinkedIn"
            >
              Get in Contact
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export const Header = () => {
  const pathname = usePathname();
  return <HeaderShell key={pathname} pathname={pathname} />;
};
