import Link from "next/link";
import { ChartColumn, CodeXml, ShieldCheck, Smartphone, Trophy, Wrench, type LucideIcon } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { H3 } from "@/components/ui/h3";
import { Paragraph } from "@/components/ui/paragraph";

const pointIcons: LucideIcon[] = [CodeXml, ShieldCheck, ChartColumn, Smartphone, Trophy, Wrench];

export type WhyChoosePoint = {
  title: string;
  description: string;
};

export type WhyChooseContent = {
  id: string;
  title: string;
  description: string;
  cta: { href: string; label: string };
  highlight: {
    title: string;
    description: string;
    href: string;
    label: string;
    image: { src: string; alt: string };
  };
  points: WhyChoosePoint[];
};

export function WhyChoose({ content }: { content: WhyChooseContent }) {
  const headingId = `${content.id}-title`;

  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-[#080a12] py-16 text-[#f3f4fa] sm:py-24"
    >
      <Container>
        <header className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-3xl">
            <H2 id={headingId} className="!font-sans">
              {content.title}
            </H2>
            <Paragraph className="mt-5">{content.description}</Paragraph>
          </div>
          <div className="pb-2">
            <Button href={content.cta.href} variant="quote">
              {content.cta.label}
            </Button>
          </div>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-[22px] sm:grid-cols-2 xl:grid-cols-[1.05fr_1fr_1fr_1fr] xl:grid-rows-2">
          <article className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl border border-line sm:col-span-2 xl:col-span-1 xl:row-span-2">
            <Image
              src={content.highlight.image.src}
              alt={content.highlight.image.alt}
              fill
              sizes="(min-width: 1100px) 28vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-[#080a12] via-[#080a12]/45 to-transparent" />
            <div className="relative z-10 p-7">
              <H3 className="!font-sans !text-white">{content.highlight.title}</H3>
              <Paragraph className="mt-3 max-w-md">{content.highlight.description}</Paragraph>
              <Link
                href={content.highlight.href}
                className="mt-6 inline-flex items-center rounded-full border border-white/85 px-6 py-3 text-sm font-medium text-white"
              >
                {content.highlight.label}
              </Link>
            </div>
          </article>

          {content.points.map((point, index) => {
            const Icon = pointIcons[index] ?? CodeXml;
            return (
              <article key={point.title} className="flex min-h-[270px] flex-col gap-3 rounded-3xl border border-line bg-[#0f1220] p-7">
                <Icon aria-hidden className="size-6 text-[#c218ef]" />
                <H3 className="!font-sans !text-xl">{point.title}</H3>
                <Paragraph>{point.description}</Paragraph>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
