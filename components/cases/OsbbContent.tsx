"use client";

import {
  CaseTextMediaSection,
  caseChapterStackClassName,
} from "./aiUxCaseLayout";

const BooksShelfShot = ({ src, alt }: { src: string; alt: string }) => (
  <article className="rounded-2xl overflow-hidden ring-1 ring-white/10">
    <img src={src} alt={alt} className="w-full h-auto block" />
  </article>
);

const BooksShelfSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}) => (
  <CaseTextMediaSection title={title} description={description}>
    <BooksShelfShot src={imageSrc} alt={imageAlt} />
  </CaseTextMediaSection>
);

export const OsbbContent = () => {
  return (
    <div className="max-w-7xl mx-auto w-full pt-16 pb-24 px-6 space-y-16 lg:space-y-20">
      <section className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-semibold text-white tracking-tight">About the project</h2>
          <p className="text-slate-300 leading-relaxed">
            <strong className="text-slate-200 font-medium">Books Shelf</strong> is a learning project
            from a product design course: a full bookstore experience where reading, discovery, and
            management live in one calm interface.
          </p>
          <p className="text-slate-300 leading-relaxed">
            The idea is simple — books should feel personal, not overwhelming. Users browse featured
            titles, build a shelf, listen to audiobooks, and follow what friends read. Behind the
            scenes, an AI assistant helps keep the catalog clear and supports everyday decisions for
            both readers and admins.
          </p>
          <p className="text-slate-300 leading-relaxed">
            I focused on hierarchy, soft visual rhythm, and flows that stay friendly on desktop: from
            the home screen to product detail and the admin view with AI.
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-black/40 backdrop-blur-xl ring-1 ring-white/10 rounded-2xl p-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Type</span>
              <span className="text-slate-100">Learning project</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Product</span>
              <span className="text-slate-100">Books Shelf · AI bookstore</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Role</span>
              <span className="text-slate-100">UI/UX · Product design</span>
            </div>
          </div>
        </div>
      </section>

      <section className={caseChapterStackClassName}>
        <BooksShelfSection
          title="Home — discovery and weekly picks"
          description="The home screen sets the tone: search, profile, and navigation to Library, Audiobooks, and My shelf. A featured block highlights the top book of the week with a clear CTA, while “Book of the month” scrolls popular titles so users can start browsing in seconds."
          imageSrc="/assets/CaseOsbb/02.png"
          imageAlt="Books Shelf home screen with featured and monthly books"
        />

        <BooksShelfSection
          title="Library overview"
          description="The library view keeps structure visible at once — sidebar, search, featured banner, monthly carousel, audiobook progress, and friend activity. It shows how the product balances inspiration (what to read next) with social context (what others are reading)."
          imageSrc="/assets/CaseOsbb/04.png"
          imageAlt="Books Shelf library overview on tablet"
        />

        <BooksShelfSection
          title="Book detail & formats"
          description="On the product page, the cover, formats, and price sit together without noise. Users pick paperback or hardcover, add to cart, or save to shelf. A short description supports the decision — the layout prioritizes clarity over decoration."
          imageSrc="/assets/CaseOsbb/06-terrace-story.png"
          imageAlt="Books Shelf book detail page for Terrace Story"
        />

        <BooksShelfSection
          title="AI assistant for the bookstore"
          description="The admin view pairs catalog data — categories, authors, publishers — with a built-in AI assistant. It helps with quick answers, smarter sorting, and less manual work, so the product feels like a team where people and AI support each other instead of working in silos."
          imageSrc="/assets/CaseOsbb/08-ai-bookstore.png"
          imageAlt="Books Shelf admin catalog with AI assistant"
        />
      </section>

      <section className="w-full space-y-6 pt-12 md:pt-16 lg:pt-20 border-t border-white/10">
        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
          What the product covers
        </h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
          <li className="flex gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            Home, library, audiobooks, and personal shelf
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            Search, featured picks, and book of the month
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            Product page with formats and cart actions
          </li>
          <li className="flex gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            Friend activity and listening progress
          </li>
          <li className="flex gap-2 sm:col-span-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
            Admin catalog with AI assistant for faster management
          </li>
        </ul>
      </section>
    </div>
  );
};
