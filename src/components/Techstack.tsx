import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { H3 } from "@/components/ui/h3";
import { Image } from "@/components/ui/image";
import { Paragraph } from "@/components/ui/paragraph";

export type TechItem = {
  name: string;
  mark: string;
  logo?: string;
  featured?: boolean;
};

export type TechGroup = {
  id: string;
  title: string;
  items: TechItem[];
};

export type TechstackContent = {
  id: string;
  title: string;
  titleStrong: string;
  titleAccent: string;
  note: string;
  button: { href: string; label: string };
  groups: TechGroup[];
};

function choiceId(sectionId: string, groupId: string) {
  return `${sectionId}-${groupId}`.replace(/[^a-z0-9-]/gi, "");
}

function selectionCss(groups: TechGroup[], sectionId: string) {
  return groups
    .map((group) => {
      const id = choiceId(sectionId, group.id);
      const on = `#${sectionId}:has(#${id}:checked)`;
      return `
        ${on} [data-panel="${id}"]{display:flex}
        ${on} [data-tab="${id}"]{color:#c218ef;font-weight:600}
        ${on} [data-tab="${id}"] .tech-arrow{opacity:1;transform:none}
        ${on} [data-tab="${id}"] .tech-count{color:#c218ef}
        @media (min-width:1024px){${on} [data-tab="${id}"]{padding-left:12px}}
        @media (max-width:1023px){${on} [data-tab="${id}"]{border-color:#c218ef;background:#f8f0fc}}
      `;
    })
    .join("");
}

export function Techstack({ content }: { content: TechstackContent }) {
  const headingId = `${content.id}-title`;

  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-[#f2f3f7] py-16 text-[#0d0f18] sm:py-24"
    >
      <style>{selectionCss(content.groups, content.id)}</style>
      <Container>
        <div className="grid items-stretch gap-8 rounded-[32px] border border-[#e6e8ef] bg-white p-6 shadow-[0_30px_70px_-45px_rgba(20,24,50,0.35)] sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10">
          <div className="min-w-0">
            <H2 id={headingId} className="max-w-xl !font-sans !font-light !text-[#0d0f18]">
              {content.title} <span className="font-extrabold">{content.titleStrong}</span>{" "}
              <span className="font-extrabold text-[#c218ef]">{content.titleAccent}</span>
            </H2>

            <div
              role="radiogroup"
              aria-label="Technology categories"
              className="mt-8 flex gap-2 overflow-x-auto border-[#dfe2ea] [scrollbar-width:none] lg:mt-8 lg:block lg:border-t [&::-webkit-scrollbar]:hidden"
            >
              {content.groups.map((group, index) => {
                const id = choiceId(content.id, group.id);
                return (
                  <label
                    key={group.id}
                    htmlFor={id}
                    data-tab={id}
                    className="relative flex shrink-0 cursor-pointer items-center justify-between gap-3 rounded-full border border-[#dfe2ea] px-5 py-2.5 text-base text-[#0d0f18] lg:w-full lg:rounded-none lg:border-0 lg:border-b lg:px-1 lg:py-4 lg:text-lg"
                  >
                    <input
                      id={id}
                      name={`${content.id}-choice`}
                      type="radio"
                      defaultChecked={index === 0}
                      className="absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0"
                    />
                    <span>{group.title}</span>
                    <span className="tech-count ml-auto hidden text-xs font-medium text-[#a2a7b8] lg:inline">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="tech-arrow hidden size-5 shrink-0 -translate-x-2 fill-none stroke-current stroke-2 opacity-0 [stroke-linecap:round] [stroke-linejoin:round] lg:block"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </label>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              {/* <Paragraph className="!text-[#6a7084]">{content.note}</Paragraph> */}
              <Button href={content.button.href} variant="quote">
                {content.button.label}
              </Button>
            </div>
          </div>

          <div className="grid min-h-0 place-items-center rounded-[26px] bg-[radial-gradient(circle_at_22%_12%,rgba(194,24,239,0.16),transparent_45%),radial-gradient(circle_at_85%_90%,rgba(194,24,239,0.12),transparent_50%),linear-gradient(160deg,#fbfbfd,#f1f2f8)] px-4 py-8 lg:min-h-[480px]">
            {content.groups.map((group) => {
              const id = choiceId(content.id, group.id);
              const titleId = `${id}-title`;
              return (
                <div key={group.id} id={`${id}-panel`} data-panel={id} aria-labelledby={titleId} className="hidden w-full flex-wrap items-center justify-center gap-3 sm:gap-[18px]">
                  <H3 id={titleId} className="sr-only !font-sans">
                    {group.title}
                  </H3>
                  <ul className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-[18px]">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className={
                          item.featured
                            ? "flex size-[136px] flex-col items-center justify-center gap-2 rounded-full bg-white text-center text-sm font-semibold text-[#0d0f18] shadow-[0_14px_30px_-14px_rgba(30,34,70,0.28)] sm:size-[172px] sm:text-[0.92rem]"
                            : "flex size-[100px] flex-col items-center justify-center gap-2 rounded-full bg-white text-center text-xs font-semibold text-[#0d0f18] shadow-[0_14px_30px_-14px_rgba(30,34,70,0.28)] sm:size-[122px] sm:text-[0.78rem]"
                        }
                      >
                        {item.logo ? (
                          <Image
                            src={item.logo}
                            alt=""
                            width={item.featured ? 56 : 42}
                            height={item.featured ? 56 : 42}
                            className={item.featured ? "!h-11 !w-11 !object-contain sm:!h-14 sm:!w-14" : "!h-8 !w-8 !object-contain sm:!h-10 sm:!w-10"}
                          />
                        ) : (
                          <span
                            aria-hidden="true"
                            className={
                              item.featured
                                ? "grid size-12 place-items-center rounded-full bg-linear-to-br from-[#c218ef] to-[#e879f9] text-base font-semibold text-white sm:size-14"
                                : "grid size-10 place-items-center rounded-full bg-linear-to-br from-[#c218ef] to-[#e879f9] text-sm font-semibold text-white sm:size-11"
                            }
                          >
                            {item.mark}
                          </span>
                        )}
                        {item.name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
