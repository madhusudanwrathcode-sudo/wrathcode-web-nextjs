import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-ember text-background hover:bg-ember-deep",
  secondary: "border border-line bg-transparent text-foreground hover:bg-surface-2",
  quote: "quote-btn",
} as const;

export function buttonStyles(variant: keyof typeof variants = "primary") {
  if (variant === "quote") return variants.quote;
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium motion-safe:transition-colors disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  icon = false,
  className,
  current = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  icon?: boolean;
  className?: string;
  current?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={current ? "page" : undefined}
      className={cn(buttonStyles(variant), className)}
    >
      {children}
      {variant === "quote" ? (
        <Send className="size-4" fill="currentColor" strokeWidth={0} aria-hidden />
      ) : icon ? (
        <ArrowUpRight className="size-4" aria-hidden />
      ) : null}
    </Link>
  );
}
