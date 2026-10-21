import { Image } from "@/components/ui/image";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { Paragraph } from "@/components/ui/paragraph";

export type AboutImage = {
  src: string;
  alt: string;
};

export type AboutContent = {
  id: string;
  kicker: string;
  title: string;
  titleAccent: string;
  highlight: string;
  lead: string;
  detail: string;
  checks: string[];
  primary: { href: string; label: string };
  images: { main: AboutImage; sub: AboutImage };
  valuesKicker: string;
  valuesTitle: string;
  valuesLead: string;
  values: { icon: string; title: string; description: string }[];
  mission: { title: string; description: string; href: string; label: string };
};

export function About({ content }:any) {
  const headingId = `${content.id}-title`;
  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="relative scroll-mt-10 bg-[#080a12] py-16 text-[#f3f4fa] sm:py-10 lg:py-10"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 lg:order-2">
            <H2 id={headingId} className="max-w-xl !font-sans">
              {content.title}
            </H2>
            <Paragraph className="mt-5 max-w-xl">
              <strong className="font-semibold text-white">{content.highlight}</strong> {content.lead}
            </Paragraph>
            <Paragraph className="mt-4 max-w-xl">{content.detail}</Paragraph>
            <ul className="mt-6 grid max-w-xl gap-3">
              {content.checks.map((check:any) => (
                <li key={check} className="flex items-start gap-3 text-[0.97rem] leading-snug">
                  <span aria-hidden="true" className="mt-0.5 text-[#c218ef]">✓</span>
                  {check}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4 pb-2">
              <Button variant="quote" htmlFor="contact-open">
                {content.primary.label}
              </Button>
            </div>
          </div>

          <div className="relative min-w-0 pb-8 pr-6 lg:order-1">
            <figure className="relative aspect-[4/5] w-full overflow-hidden border rounded-t-2xl rounded-bl-2xl border-line bg-surface">
              <Image src={content.images.main.src} alt={content.images.main.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </figure>
            <figure className="absolute right-0 bottom-0 aspect-square w-[38%] overflow-hidden border-4  rounded-b-2xl  rounded-tr-2xl border-[#080a12] bg-surface">
              <Image src={content.images.sub.src} alt={content.images.sub.alt} fill sizes="(min-width: 1024px) 18vw, 40vw" className="object-cover" />
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
