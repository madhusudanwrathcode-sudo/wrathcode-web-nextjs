import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { H3 } from "@/components/ui/h3";
import { Paragraph } from "@/components/ui/paragraph";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  id: string;
  title: string;
  titleAccent: string;
  footer: string;
  button: { href: string; label: string };
  items: FaqItem[];
};

export function Faq({ content }: { content: FaqContent }) {
  const headingId = `${content.id}-title`;
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  });

  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-white py-16 text-[#0b0d16] sm:py-24"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Container>
        <H2 id={headingId} className="text-center !font-sans !font-medium !text-[#0b0d16]">
          {content.title} <span className="text-[#c218ef]">{content.titleAccent}</span>
        </H2>

        <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-[18px] sm:mt-14">
          {content.items.map((item, index) => {
            const questionId = `${content.id}-q${index + 1}`;
            return (
              <details
                key={item.question}
                className="group rounded-[18px] border border-[#e3e5ee] bg-white transition-[background,border-color,box-shadow] duration-300 hover:bg-[#f4f5fb] open:border-[#c218ef]/45 open:bg-[#f4f5fb] open:shadow-[0_14px_34px_-22px_rgba(194,24,239,0.55)] motion-reduce:transition-none"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 sm:px-7 sm:py-7 [&::-webkit-details-marker]:hidden">
                  <H3 id={questionId} className="!font-sans !text-base !font-semibold !text-[#0b0d16] sm:!text-xl">
                    {item.question}
                  </H3>
                  <span aria-hidden="true" className="relative size-[18px] shrink-0">
                    <span className="absolute top-1/2 left-0 h-[2.5px] w-full -translate-y-1/2 rounded-sm bg-[#0b0d16] group-open:bg-[#c218ef]" />
                    <span className="absolute top-1/2 left-0 h-[2.5px] w-full -translate-y-1/2 rotate-90 rounded-sm bg-[#0b0d16] transition-transform duration-300 group-open:rotate-0 group-open:bg-[#c218ef] motion-reduce:transition-none" />
                  </span>
                </summary>
                <Paragraph className="max-w-[880px] px-5 pb-5 !text-[#5b6074] sm:px-7 sm:pb-7">{item.answer}</Paragraph>
              </details>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
