"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useIsClient } from "@/lib/useIsClient";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useIsClient();

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-teal-400/40 transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-teal-400" />
      ) : (
        <Moon className="w-4 h-4 text-slate-600" />
      )}
    </button>
  );
};
