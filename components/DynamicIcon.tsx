"use client";

import { icons } from "lucide-react";
import { ElementType } from "react";

/** Lucide v1+ renamed icons — map legacy names from old HTML/data */
const iconAliases: Record<string, keyof typeof icons> = {
  TestTube2: "TestTube",
  BarChart2: "ChartBar",
  Layout: "LayoutTemplate",
  CheckCircle: "CircleCheck",
  Sitemap: "Network",
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon = ({ name, className }: DynamicIconProps) => {
  const resolved = iconAliases[name] ?? (name as keyof typeof icons);
  const Icon = icons[resolved] as ElementType | undefined;
  if (!Icon) return null;
  return <Icon className={className} />;
};
