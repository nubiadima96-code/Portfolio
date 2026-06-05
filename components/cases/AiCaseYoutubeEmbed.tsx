"use client";

import { useCallback, useState } from "react";
import { Play } from "lucide-react";

const buildEmbedSrc = (videoId: string, startSeconds: number, autoplay: boolean) => {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (startSeconds > 0) params.set("start", String(startSeconds));
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
};

export const AiCaseYoutubeEmbed = ({
  videoId,
  startSeconds = 0,
  title = "Case study video",
  caption,
}: {
  videoId: string;
  startSeconds?: number;
  title?: string;
  caption?: string;
}) => {
  const [playing, setPlaying] = useState(false);

  const watchUrl = `https://www.youtube.com/watch?v=${videoId}${
    startSeconds > 0 ? `&t=${startSeconds}` : ""
  }`;
  const posterSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  const activate = useCallback(() => {
    setPlaying(true);
  }, []);

  return (
    <section className="relative z-20 w-full space-y-3" aria-label={title}>
      {caption ? (
        <p className="text-sm text-slate-400 px-1">{caption}</p>
      ) : null}
      <div className="relative z-20 w-full overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black shadow-2xl">
        <div className="relative w-full pb-[56.25%]">
          {playing ? (
            <iframe
              src={buildEmbedSrc(videoId, startSeconds, true)}
              title={title}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={activate}
              className="group absolute inset-0 flex h-full w-full items-center justify-center"
              aria-label={`Play video: ${title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={posterSrc}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
                decoding="async"
              />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#ea4c89] text-white shadow-lg ring-4 ring-black/40 transition group-hover:scale-105 group-hover:bg-[#f0629a]">
                <Play className="h-7 w-7 fill-current pl-0.5" aria-hidden />
              </span>
            </button>
          )}
        </div>
      </div>
      <p className="text-xs text-slate-500 px-1">
        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-2 hover:text-slate-300 hover:underline"
        >
          Open on YouTube
        </a>
        {!playing ? " · tap play to load the player" : null}
      </p>
    </section>
  );
};
