"use client";

import { useEffect, useRef } from "react";
import { useIsClient } from "@/lib/useIsClient";

const UNICORN_SDK =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
const PROJECT_ID = "OMO2zbNkRGUqAVYhB4jD";

type UnicornScene = {
  element: HTMLElement;
  destroy: () => void;
};

type UnicornStudioGlobal = {
  isInitialized?: boolean;
  init: (config?: { scale?: number; dpi?: number }) => Promise<UnicornScene[]>;
  destroy?: () => void;
};

declare global {
  interface Window {
    UnicornStudio?: UnicornStudioGlobal;
  }
}

let sdkLoadPromise: Promise<void> | null = null;

const loadUnicornSdk = (): Promise<void> => {
  if (sdkLoadPromise) return sdkLoadPromise;

  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized: false } as UnicornStudioGlobal;
  }

  const existing = document.querySelector<HTMLScriptElement>(
    `script[src="${UNICORN_SDK}"]`,
  );
  if (existing) {
    sdkLoadPromise = Promise.resolve();
    return sdkLoadPromise;
  }

  sdkLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = UNICORN_SDK;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => {
      sdkLoadPromise = null;
      reject(new Error("Unicorn Studio SDK failed to load"));
    };
    document.head.appendChild(script);
  });

  return sdkLoadPromise;
};

const waitForPaint = () =>
  new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });

export const UnicornBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scenesRef = useRef<UnicornScene[]>([]);
  const mounted = useIsClient();

  useEffect(() => {
    if (!mounted || !containerRef.current) return;

    let cancelled = false;

    const destroyScenes = () => {
      scenesRef.current.forEach((scene) => scene.destroy?.());
      scenesRef.current = [];
      window.UnicornStudio?.destroy?.();
      if (window.UnicornStudio) {
        window.UnicornStudio.isInitialized = false;
      }
    };

    const boot = async () => {
      try {
        await loadUnicornSdk();
        if (cancelled || !containerRef.current) return;

        await waitForPaint();
        if (cancelled || !containerRef.current) return;

        const us = window.UnicornStudio;
        if (!us?.init) return;

        destroyScenes();

        const result = await Promise.resolve(us.init());
        const scenes = Array.isArray(result) ? result : [];
        if (cancelled) {
          scenes.forEach((scene) => scene.destroy?.());
          return;
        }

        scenesRef.current = scenes;
        us.isInitialized = true;
      } catch {
        /* Decorative background — ignore WebGL race errors in dev */
      }
    };

    void boot();

    return () => {
      cancelled = true;
      destroyScenes();
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div
        className="fixed top-0 left-0 w-full h-screen -z-10 bg-slate-950"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none"
      aria-hidden
    >
      <div
        ref={containerRef}
        data-us-project={PROJECT_ID}
        className="absolute top-0 left-0 -z-10 w-full h-full"
      />
    </div>
  );
};
