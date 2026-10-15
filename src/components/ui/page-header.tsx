import { Container } from "@/components/ui/container";
import { H1 } from "@/components/ui/h1";
import { Paragraph } from "@/components/ui/paragraph";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="border-b border-line">
      <Container className="py-16 md:py-24">
        <Paragraph className="font-mono !text-xs tracking-[0.22em] uppercase !text-brass">
          {eyebrow}
        </Paragraph>
        <H1 className="mt-4">{title}</H1>
        <Paragraph className="mt-5 max-w-2xl !text-lg">{description}</Paragraph>
      </Container>
    </header>
  );
}
