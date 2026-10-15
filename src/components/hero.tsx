import type { CSSProperties } from "react";
import { Image } from "@/components/ui/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Container } from "./ui/container";

export type HeroAction = {
  href: string;
  label: string;
};


export function Hero({
  homeHero
}: any) {
  const headingId = `${homeHero?.id}-heading`;
  const [primary, secondary] = homeHero?.actions;

  return (
    <section
      aria-labelledby={headingId}
      className="hero-banner"
      style={
        {
          "--hero-ratio": `${homeHero?.image.width} / ${homeHero?.image.height}`,
        } as CSSProperties
      } >
      <Image
        src={homeHero?.image.src}
        alt={homeHero?.image.alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-16">
        <Container>
          <div className="flex w-full flex-col items-center text-center">
            <p className="border border-[#d7a4ff]/80 px-3 py-1 text-[11px] leading-none font-medium tracking-wide text-[#e4c6ff] sm:text-xs">
              {homeHero?.eyebrow}
            </p>
            <h1
              id={headingId}
              className="mt-4 text-[clamp(1.45rem,4.2vw,3rem)] leading-[1.12] font-bold tracking-tight text-balance text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.65)]"
            >
              {homeHero?.title}
              <span className="mt-1 block text-[clamp(1.6rem,4.4vw,3rem)] leading-none font-extrabold text-[#c218ef]">
                {homeHero?.brand}
              </span>
            </h1>
            {primary ? (
              <div className="hero-actions">
                <Link href={primary.href} className="hero-action hero-action-solid">
                  {primary.label}
                </Link>
                {/* {secondary ? (
                <Link href={secondary.href} className="hero-action hero-action-light">
                  <span className="hero-action-marks" aria-hidden />
                  {secondary.label}
                </Link>
              ) : null} */}
              </div>
            ) : null}
          </div>
        </Container>
      </div>
    </section>
  );
}
