"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export type MediaSlide =
  | {
      type: "video";
      src: string;
      poster: string;
      title: string;
      description?: string;
    }
  | {
      type: "image";
      src: string;
      title: string;
      description?: string;
    };

const slideVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: (d: number) => ({
      opacity: 0,
      x: d > 0 ? 56 : -56,
      filter: "blur(8px)",
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
    exit: (d: number) => ({
      opacity: 0,
      x: d > 0 ? -40 : 40,
      filter: "blur(6px)",
    }),
  },
};

export const AiUxMediaSlider = ({
  slides,
  assetBase,
  initialSlide = 0,
}: {
  slides: MediaSlide[];
  assetBase: string;
  initialSlide?: number;
}) => {
  const safeInitial = Math.min(Math.max(0, initialSlide), Math.max(0, slides.length - 1));
  const [active, setActive] = useState(safeInitial);
  const [direction, setDirection] = useState(1);
  const thumbRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const current = slides[active];
  const resolve = (p: string) => (p.startsWith("/") ? p : `${assetBase}/${p}`);

  const scrollThumbIntoView = useCallback((index: number) => {
    const el = thumbRef.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  const navigate = useCallback(
    (index: number, dir: 1 | -1) => {
      if (index === active) return;
      setDirection(dir);
      setActive(index);
      scrollThumbIntoView(index);
    },
    [active, scrollThumbIntoView],
  );

  const select = (index: number) => {
    if (index === active) return;
    const dir = index > active ? 1 : -1;
    navigate(index, dir);
  };

  const goPrev = useCallback(() => {
    const index = (active - 1 + slides.length) % slides.length;
    navigate(index, -1);
  }, [active, slides.length, navigate]);

  const goNext = useCallback(() => {
    const index = (active + 1) % slides.length;
    navigate(index, 1);
  }, [active, slides.length, navigate]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (slides.length < 2) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext, slides.length]);

  if (!slides.length) return null;

  const mediaClassName = "w-full h-auto block";
  const showArrows = slides.length > 1;
  const arrowClassName =
    "absolute top-1/2 z-20 flex h-10 w-10 sm:h-11 sm:w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white ring-1 ring-white/20 shadow-lg backdrop-blur-sm transition-colors hover:bg-black/80 hover:ring-white/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ea4c89]";

  const renderSlide = (slide: MediaSlide) =>
    slide.type === "video" ? (
      <video
        key={slide.src}
        className={mediaClassName}
        controls
        playsInline
        preload="metadata"
        poster={resolve(slide.poster)}
        aria-label={slide.title}
      >
        <source src={resolve(slide.src)} type="video/mp4" />
      </video>
    ) : (
      <img src={resolve(slide.src)} alt={slide.title} className={mediaClassName} />
    );

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-xl">
        {showArrows ? (
          <>
            <motion.button
              type="button"
              onClick={goPrev}
              className={`${arrowClassName} left-2 sm:left-4`}
              aria-label="Previous slide"
              whileHover={reduceMotion ? undefined : { scale: 1.06 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            </motion.button>
            <motion.button
              type="button"
              onClick={goNext}
              className={`${arrowClassName} right-2 sm:right-4`}
              aria-label="Next slide"
              whileHover={reduceMotion ? undefined : { scale: 1.06 }}
              whileTap={reduceMotion ? undefined : { scale: 0.94 }}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
            </motion.button>
          </>
        ) : null}

        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={`${active}-${current.type}-${current.src}`}
            className="w-full"
            custom={direction}
            variants={reduceMotion ? slideVariants.fade : slideVariants.slide}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={
              reduceMotion
                ? { duration: 0.2 }
                : { duration: 0.42, ease: [0.32, 0.72, 0, 1] }
            }
          >
            {renderSlide(current)}
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        ref={thumbRef}
        className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
        role="tablist"
        aria-label="Case media thumbnails"
      >
        {slides.map((slide, index) => {
          const isActive = index === active;
          const thumbSrc =
            slide.type === "video" ? resolve(slide.poster) : resolve(slide.src);

          return (
            <motion.button
              key={`${slide.type}-${slide.src}-${index}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={slide.title}
              onClick={() => select(index)}
              layout
              className={`relative shrink-0 rounded-lg snap-start ring-2 ${
                isActive
                  ? "ring-[#ea4c89] shadow-[0_0_0_1px_rgba(234,76,137,0.35)]"
                  : "ring-transparent"
              }`}
              animate={{
                opacity: isActive ? 1 : 0.72,
                scale: isActive ? 1.04 : 1,
              }}
              whileHover={reduceMotion ? undefined : { opacity: 1, scale: isActive ? 1.04 : 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              <img
                src={thumbSrc}
                alt=""
                className="w-[88px] sm:w-[100px] h-auto block rounded-lg"
              />
              {slide.type === "video" ? (
                <span className="absolute top-1.5 right-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/55 text-white">
                  <Play className="w-3 h-3 fill-current" aria-hidden />
                </span>
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
