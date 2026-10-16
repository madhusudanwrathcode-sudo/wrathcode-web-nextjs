import Script from "next/script";
import { Button } from "@/components/ui/button";
import { H3 } from "@/components/ui/h3";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { Paragraph } from "@/components/ui/paragraph";

export type ProcessStep = {
  stage: string;
  title: string;
  description: string;
  tags: string[];
};

export type ProcessContent = {
  id: string;
  title: string;
  description: string;
  points: string[];
  cta: { href: string; label: string };
  note: string;
  steps: ProcessStep[];
};

export function ProcessSection({ content }: { content: ProcessContent }) {
  const headingId = `${content.id}-title`;

  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-[#080a12] py-16 text-[#f3f4fa] sm:py-24"
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="min-w-0 lg:sticky lg:top-28">
            <H2 id={headingId} className="max-w-xl !font-sans">
              {content.title}
            </H2>
            <Paragraph className="mt-5 max-w-xl">{content.description}</Paragraph>
            <ul className="mt-6 grid max-w-xl gap-3">
              {content.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-[0.97rem] leading-snug">
                  <span aria-hidden="true" className="mt-0.5 text-[#c218ef]">
                    ✓
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-8 pb-2">
              <Button href={content.cta.href} variant="quote">
                {content.cta.label}
              </Button>
              {/* <p className="mt-3 text-sm text-muted">{content.note}</p> */}
            </div>
          </div>

          <ol className="relative min-w-0" style={{ ["--p" as string]: 0 }}>
            <span aria-hidden className="pointer-events-none absolute top-3 bottom-3 left-0 w-px -translate-x-1/2 bg-line" />
            <span
              aria-hidden
              className="pointer-events-none absolute top-3 left-0 w-px -translate-x-1/2 bg-[#c218ef] motion-reduce:hidden"
              style={{ height: "calc((100% - 1.5rem) * var(--p, 0))" }}
            />
            {content.steps.map((step, index) => (
              <li
                key={step.title}
                className="group relative pb-10 pl-8 opacity-100 transition-opacity duration-[400ms] last:pb-0 data-[state=upcoming]:opacity-55 motion-reduce:transition-none"
              >
                <span
                  data-node
                  className="absolute top-0 left-0 z-10 grid size-6 -translate-x-1/2 place-items-center bg-[#080a12] text-sm font-medium text-[#c218ef] transition-transform duration-[400ms] group-data-[state=active]:scale-110 group-data-[state=upcoming]:text-muted motion-reduce:transition-none"
                >
                  {index + 1}
                </span>
                <div className="transition-transform duration-[400ms] group-data-[state=active]:translate-x-1 motion-reduce:transition-none">
                  <p className="text-xs font-medium tracking-wide text-[#c218ef] uppercase">{step.stage}</p>
                  <H3 className="mt-1 !font-sans text-xl">{step.title}</H3>
                  <Paragraph className="mt-3">{step.description}</Paragraph>
                  {/* <p className="mt-3 text-sm text-muted">{step.tags.join(" · ")}</p> */}
                </div>
              </li>
            ))}
          </ol>
          <Script id="process-timeline" strategy="lazyOnload">
            {`(function(){function run(){var list=document.querySelector("#process ol");if(!list||list.dataset.ready||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;list.dataset.ready="true";function start(){var items=[].slice.call(list.querySelectorAll(":scope > li"));var ticking=false;function update(){ticking=false;var focus=window.innerHeight*0.5;var rect=list.getBoundingClientRect();var progress=(focus-rect.top)/rect.height;list.style.setProperty("--p",Math.max(0,Math.min(1,progress)).toFixed(4));var active=-1;items.forEach(function(item,index){var node=item.querySelector("[data-node]");if(!node)return;var box=node.getBoundingClientRect();if(box.top+box.height/2<=focus+40)active=index});items.forEach(function(item,index){item.dataset.state=index<active?"done":index===active?"active":"upcoming"})}function requestUpdate(){if(ticking)return;ticking=true;requestAnimationFrame(update)}update();window.addEventListener("scroll",requestUpdate,{passive:true});window.addEventListener("resize",requestUpdate)}if(!("IntersectionObserver" in window)){start();return}var watcher=new IntersectionObserver(function(entries){if(entries.some(function(entry){return entry.isIntersecting})){watcher.disconnect();start()}},{rootMargin:"200px"});watcher.observe(list)}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run()})();`}
          </Script>
        </div>
      </Container>
    </section>
  );
}
