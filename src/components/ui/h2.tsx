import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type H2Props = HTMLAttributes<HTMLHeadingElement> & {
  children: ReactNode;
};

export function H2({ children, className, ...props }: H2Props) {
  return (
    <h2
      className={cn(
        " text-3xl font-sans font-semibold tracking-tight text-foreground md:text-4xl",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
