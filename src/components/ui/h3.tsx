import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type H3Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export function H3({ children, className, ...props }: H3Props) {
  return (
    <h3
      className={cn("font-display text-2xl font-semibold tracking-tight text-foreground", className)}
      {...props}
    >
      {children}
    </h3>
  );
}
