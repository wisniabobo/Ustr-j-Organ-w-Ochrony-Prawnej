import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  defaultOpen?: boolean;
}

export function AccordionItem({
  trigger,
  children,
  className,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div className={cn("border-b border-border", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm font-medium transition-all hover:underline [&[aria-expanded=true]>svg]:rotate-180"
      >
        <span className="flex-1">{trigger}</span>
        <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="pb-4 pt-0 text-sm text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Accordion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn("w-full", className)}>{children}</div>;
}
