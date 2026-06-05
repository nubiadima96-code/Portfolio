import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

const NotFoundPage = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <section className="max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-24 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-teal-300/90 mb-4">
          404
        </p>
        <h1 className="text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-lg text-slate-300 max-w-xl mx-auto mb-8">
          This page doesn&apos;t exist or was moved. Head back to the overview or browse case
          studies.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-teal-400/15 hover:bg-teal-400/25 ring-1 ring-teal-400/50 rounded-full transition"
          >
            Back to overview
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-100 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-full transition"
          >
            View case studies
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
