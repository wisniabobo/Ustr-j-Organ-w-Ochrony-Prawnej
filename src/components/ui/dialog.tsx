import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Dialog({
  open,
  onClose,
  children,
  className,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className={cn(
          "relative z-10 flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-border bg-card shadow-2xl animate-fade-in",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogHeader({
  title,
  description,
  onClose,
  right,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  onClose: () => void;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border p-4 sm:px-6">
      <div className="min-w-0">
        <h2 className="truncate text-base font-semibold sm:text-lg">{title}</h2>
        {description && (
          <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
            {description}
          </p>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {right}
        <button
          onClick={onClose}
          className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          aria-label="Zamknij"
        >
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
}
