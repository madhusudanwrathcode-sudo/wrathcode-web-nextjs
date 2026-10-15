import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/wrathcode-logo.svg"
      alt="Wrathcode"
      width={200}
      height={60}
      unoptimized
      className={cn("h-16 w-auto", className)}
    />
  );
}
