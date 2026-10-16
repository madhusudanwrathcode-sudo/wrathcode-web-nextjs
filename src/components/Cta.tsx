import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { Paragraph } from "@/components/ui/paragraph";

export type CtaContent = {
  id: string;
  title: string;
  titleAccent: string;
  titleRest: string;
  description: string;
  button: { href: string; label: string };
};

export function Cta({ content }: { content: CtaContent }) {
  const headingId = `${content.id}-title`;

  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-white py-16 text-[#f3f4fa] sm:py-24"
    >
      <Container>
        <div className="grid items-center gap-10 overflow-hidden rounded-[32px] bg-[#0b0d16] bg-[radial-gradient(ellipse_45%_90%_at_92%_50%,rgba(194,24,239,0.22),transparent_70%)] px-7 py-10 sm:px-12 sm:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16 lg:px-16 lg:py-16">
          <div className="min-w-0">
            <H2 id={headingId} className="max-w-3xl !font-sans">
              {content.title} 
            </H2>
            <Paragraph className="mt-5 max-w-2xl !text-[#b3b8cc]">{content.description}</Paragraph>
            <div className="mt-8">
              <Button href={content.button.href} variant="quote">
                {content.button.label}
              </Button>
            </div>
          </div>

          <div aria-hidden="true" className="mx-auto hidden w-full max-w-[360px] lg:block">
            <svg viewBox="0 0 360 300" fill="none" className="h-auto w-full overflow-visible">
              <defs>
                <radialGradient id="cta-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0" stopColor="#c218ef" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#c218ef" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="cta-accent" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#c218ef" />
                  <stop offset="1" stopColor="#e879f9" />
                </linearGradient>
              </defs>
              <circle cx="180" cy="150" r="140" fill="url(#cta-glow)" />
              <circle cx="180" cy="150" r="124" stroke="#e879f9" strokeOpacity="0.4" strokeDasharray="3 7" />
              <circle cx="180" cy="26" r="6" fill="url(#cta-accent)" />
              <circle cx="180" cy="150" r="88" stroke="#8f8fff" strokeOpacity="0.3" />
              <g>
                <rect x="60" y="78" width="190" height="130" rx="16" fill="#151930" stroke="#e879f9" strokeOpacity="0.45" />
                <path d="M60 104h190" stroke="#fff" strokeOpacity="0.1" />
                <circle cx="78" cy="91" r="4" fill="#ff5f57" />
                <circle cx="92" cy="91" r="4" fill="#febc2e" />
                <circle cx="106" cy="91" r="4" fill="#28c840" />
                <path d="M80 130l-12 12 12 12M122 130l12 12-12 12" stroke="#e879f9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M104 160l14-36" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                <rect x="150" y="124" width="76" height="8" rx="4" fill="#fff" fillOpacity="0.14" />
                <rect x="150" y="142" width="54" height="8" rx="4" fill="#fff" fillOpacity="0.1" />
                <rect x="150" y="160" width="66" height="8" rx="4" fill="url(#cta-accent)" fillOpacity="0.8" />
                <rect x="80" y="182" width="150" height="8" rx="4" fill="#fff" fillOpacity="0.07" />
              </g>
              <g>
                <rect x="214" y="110" width="84" height="150" rx="16" fill="#0f1220" stroke="url(#cta-accent)" strokeWidth="2" />
                <rect x="244" y="118" width="24" height="5" rx="2.5" fill="#fff" fillOpacity="0.2" />
                <rect x="226" y="136" width="60" height="36" rx="8" fill="url(#cta-accent)" fillOpacity="0.9" />
                <rect x="226" y="182" width="60" height="7" rx="3.5" fill="#fff" fillOpacity="0.16" />
                <rect x="226" y="196" width="42" height="7" rx="3.5" fill="#fff" fillOpacity="0.1" />
                <rect x="226" y="222" width="60" height="22" rx="11" fill="#fff" fillOpacity="0.12" />
                <path d="M246 233h20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
              </g>
              <path d="M300 60l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#e879f9" />
              <path d="M44 214l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#8f8fff" />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
