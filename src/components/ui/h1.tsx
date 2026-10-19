import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type H1Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export function H1({ children, className, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        "max-w-3xl font-sans text-3xl font-semibold tracking-tight text-foreground md:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
