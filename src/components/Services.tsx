import Link from "next/link";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { H3 } from "@/components/ui/h3";
import { Paragraph } from "@/components/ui/paragraph";

export type ServiceItem = {
    id: string;
    index: string;
    title: string;
    chip: string;
    icon: string;
    description: string;
    points: string[];
    tags: string[];
    href: string;
};

export type ServicesContent = {
    id: string;
    kicker: string;
    title: string;
    titleAccent: string;
    description: string;
    exploreLabel: string;
    bookLabel: string;
    bookHref: string;
    pointsLabel: string;
    items: ServiceItem[];
};

const icons: Record<string, string> = {
    web: "M3 4h18v16H3zM3 9h18",
    mobile: "M7 2h10v20H7zM11 18.5h2",
    code: "M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14",
    pin: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 7.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z",
    health: "M12 21s-8-5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6-8 11-8 11zM12 9v5M9.5 11.5h5",
    exchange: "M4 8h14l-3-3M20 16H6l3 3",
    chain: "M3 3h7v7H3zM14 3h7v7h-7zM8.5 14h7v7h-7zM10 6.5h4M6.5 10v2.5h2M17.5 10v2.5h-2",
    nft: "M12 3l8 6-8 12L4 9l8-6zM4 9h16M9 9l3 12 3-12",
    chart: "M3 3v18h18M7 15l4-4 3 3 5-6",
    game: "M2 7h20v11a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5zM7 10.5v4M5 12.5h4M16 11.6h.1M18.2 13.8h.1",
};

function inputIdFor(sectionId: string, itemId: string) {
    return `${sectionId}-${itemId}`.replace(/[^a-z0-9-]/gi, "");
}

function ServiceIcon({ name }: { name: string }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-7 fill-none stroke-current stroke-[1.7] [stroke-linecap:round] [stroke-linejoin:round]">
            <path d={icons[name] ?? icons.web} />
        </svg>
    );
}

function ArrowIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
            <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
    );
}

function selectionCss(items: ServiceItem[], sectionId: string) {
    return items
        .map((item) => {
            const id = inputIdFor(sectionId, item.id);
            const on = `.svc:has(#${id}:checked)`;
            return `
        ${on} [data-tab="${id}"]{color:#fff;background:linear-gradient(100deg,rgba(255,77,46,.22),rgba(255,154,60,.08));box-shadow:inset 0 0 0 1px rgba(255,130,70,.4)}
        ${on} [data-tab="${id}"] .svc-index,${on} [data-tab="${id}"] .svc-arrow,${on} [data-tab="${id}"] .svc-mark{opacity:1;color:#ff9a3c}
        ${on} [data-tab="${id}"] .svc-arrow,${on} [data-tab="${id}"] .svc-mark{color:inherit}
        ${on} [data-panel="${id}"]{display:flex}
        .svc:has(#${id}:focus-visible) [data-tab="${id}"]{outline:2px solid #ff9a3c;outline-offset:2px}
      `;
        })
        .join("");
}

export function Services({ content }: { content: ServicesContent }) {
    const headingId = `${content.id}-title`;

    return (
        <section
            id={content.id}
            aria-labelledby={headingId}
            className="svc relative isolate scroll-mt-24 overflow-hidden bg-[#080a12] py-16 text-[#f3f4fa] sm:py-24 lg:py-28"
        >
            <style>{selectionCss(content.items, content.id)}</style>
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-[10%] -right-[180px] -z-10 size-[620px] rounded-full"
            />

            <Container>
                <header className="text-center">
                    <H2 id={headingId} className="mx-auto max-w-8xl">
                        {content.title}
                    </H2>
                    <Paragraph className="mx-auto mt-4 max-w-3xl">{content.description}</Paragraph>
                </header>

                <div className="mt-10 sm:mt-14">
                    <div className="grid items-stretch gap-6 lg:grid-cols-12">
                        <div role="radiogroup" aria-label={content.kicker} className="flex gap-2 overflow-x-auto rounded-3xl border border-white/10 bg-[#0f1220] p-2.5 [scrollbar-width:none] lg:col-span-4 lg:flex-col lg:gap-1.5 lg:p-3 [&::-webkit-scrollbar]:hidden">
                            {content.items.map((item, index) => {
                                const inputId = inputIdFor(content.id, item.id);
                                return (
                                    <label
                                        key={item.id}
                                        htmlFor={inputId}
                                        data-tab={inputId}
                                        className="relative flex cursor-pointer items-center gap-3.5 rounded-[14px] px-4 py-3 text-[0.98rem] font-medium whitespace-nowrap text-[#9399b0] transition-colors hover:bg-white/4 hover:text-[#f3f4fa] lg:py-4 lg:whitespace-normal"
                                    >
                                        <input
                                            id={inputId}
                                            name={`${content.id}-choice`}
                                            type="radio"
                                            defaultChecked={index === 0}
                                            className="absolute inset-0 z-10 m-0 size-full cursor-pointer opacity-0"
                                        />
                                        <span aria-hidden="true" className="svc-mark absolute top-[20%] bottom-[20%] -left-3 hidden w-1 rounded-r bg-linear-to-b from-[#ff4d2e] to-[#ff9a3c] opacity-0 lg:block" />
                                        <span className="svc-index min-w-[22px] font-display text-[0.78rem] font-semibold text-white/30">{item.index}</span>
                                        <span className="flex-1">{item.title}</span>
                                        <ArrowIcon className="svc-arrow hidden size-[18px] fill-none stroke-current stroke-2 opacity-0 [stroke-linecap:round] [stroke-linejoin:round] lg:block" />
                                    </label>
                                );
                            })}
                        </div>

                        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#151930] to-[#0f1220] p-6 sm:p-8 lg:col-span-8 lg:min-h-[560px] lg:p-11">
                            {content.items.map((item) => {
                                const inputId = inputIdFor(content.id, item.id);
                                const titleId = `${inputId}-title`;
                                return (
                                    <article
                                        key={item.id}
                                        id={`${inputId}-panel`}
                                        data-panel={inputId}
                                        aria-labelledby={titleId}
                                        className="svc-panel hidden h-full flex-col gap-5"
                                    >
                                        <span aria-hidden="true" className="pointer-events-none absolute top-1.5 right-7 font-display text-[clamp(4.5rem,12vw,9rem)] leading-none font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,.07)] select-none">
                                            {item.index}
                                        </span>
                                        <div className="flex items-center gap-3.5">
                                            <div className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-[#ff4d2e] to-[#ff9a3c] text-white shadow-[0_12px_30px_-10px_#ff4d2e]">
                                                <ServiceIcon name={item.icon} />
                                            </div>
                                            <p className="rounded-full border border-[#ff9a3c]/35 px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.1em] text-[#ff9a3c] uppercase">
                                                {item.chip}
                                            </p>
                                        </div>
                                        <H3 id={titleId}>{item.title}</H3>
                                        <Paragraph className="max-w-[620px]">{item.description}</Paragraph>
                                        <h4 className="text-[0.76rem] font-semibold tracking-[0.14em] text-white/45 uppercase">{content.pointsLabel}</h4>
                                        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            {item.points.map((point) => (
                                                <li key={point} className="flex items-start gap-3 rounded-[14px] border border-white/10 bg-white/4 px-4 py-3.5 text-[0.95rem] leading-snug font-medium">
                                                    <span aria-hidden="true" className="mt-px grid size-5 shrink-0 place-items-center rounded-full bg-linear-to-br from-[#ff4d2e] to-[#ff9a3c]">
                                                        <svg viewBox="0 0 20 20" className="size-3.5 fill-none stroke-white stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                                                            <path d="M5.5 10.3l3 3 6-6.2" />
                                                        </svg>
                                                    </span>
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                      
                                        
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
