import { ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto pt-20 pb-12 px-6">
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
        <a
          href="https://www.linkedin.com/in/dima-chyzh-0360aa24a/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition text-sm"
        >
          Linkedin
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.instagram.com/dmytro.chyzh/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition text-sm"
        >
          Instagram
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href="/About%20Page%20Materials/CV-UXUI-Product-Designer-Dmytro-Chyzh.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition text-sm"
          aria-label="View CV PDF"
        >
          CV
          <ExternalLink className="w-3.5 h-3.5" aria-hidden />
        </a>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-slate-400">
        <div className="space-y-1">
          <a href="mailto:dima.chyzuk@gmail.com" className="block hover:text-white transition">
            dima.chyzuk@gmail.com
          </a>
        </div>
        <div className="space-y-1 md:text-right">
          <span className="block">Lviv, Ukraine</span>
          <span className="block">&copy; 2026 Dmytro Chyzh Portfolio</span>
        </div>
      </div>
    </footer>
  );
};
