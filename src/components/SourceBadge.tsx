import { Sparkles, GraduationCap } from "lucide-react";
import type { Origin } from "@/data/types";
import { cn } from "@/lib/utils";

/**
 * Wyraźne oznaczenie pochodzenia materiału:
 *  - "pani" => materiały wykładowcy,
 *  - "ai"   => przygotowane z AI.
 */
export function SourceBadge({
  origin,
  className,
  size = "default",
}: {
  origin: Origin;
  className?: string;
  size?: "sm" | "default";
}) {
  const isPani = origin === "pani";
  const Icon = isPani ? GraduationCap : Sparkles;
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border font-medium",
        size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-xs",
        isPani
          ? "border-violet-500/40 bg-violet-500/10 text-violet-500 dark:text-violet-300"
          : "border-sky-500/40 bg-sky-500/10 text-sky-600 dark:text-sky-300",
        className
      )}
    >
      <Icon className={size === "sm" ? "size-3" : "size-3.5"} />
      {isPani ? "Materiały od pani" : "Przygotowane z AI"}
    </span>
  );
}
