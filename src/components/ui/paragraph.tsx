import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
};

export function Paragraph({ children, className, ...props }: ParagraphProps) {
  return (
    <p className={cn("text-base leading-relaxed text-white", className)} {...props}>
      {children}
    </p>
  );
}
