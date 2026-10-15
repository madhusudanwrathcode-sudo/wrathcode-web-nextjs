import Link from "next/link";
import { NavIcon } from "@/components/layout/nav-icon";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { H3 } from "@/components/ui/h3";
import { Paragraph } from "@/components/ui/paragraph";
import { navIconNames, type NavIcon as NavIconName } from "@/config/nav-types";

function industryIcon(name: string): NavIconName {
  return (navIconNames as readonly string[]).includes(name) ? (name as NavIconName) : "grid";
}

export type IndustryItem = {
  title: string;
  description: string;
  href: string;
  icon: string;
  built?: string;
};

export type IndustryGroup = {
  label: string;
  items: IndustryItem[];
};

export type IndustriesContent = {
  id: string;
  title: string;
  description: string;
  groups: IndustryGroup[];
  cta: { title: string; description: string; href: string; label: string };
};

export function Industries({ content }: { content: IndustriesContent }) {
  const headingId = `${content.id}-title`;
  const items = content.groups.flatMap((group) => group.items);

  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 bg-[#080a12] py-6 text-[#f3f4fa] sm:py-10"
    >
      <Container>
        <header className="mx-auto max-w-3xl text-center">
          <H2 id={headingId} className="!font-sans">
            {content.title}
          </H2>
          <Paragraph className="mt-4">{content.description}</Paragraph>
          <span aria-hidden className="mx-auto mt-5 block h-1 w-16 rounded-full bg-linear-to-r from-[#7c3aed] to-[#c218ef]" />
        </header>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col items-center rounded-2xl border border-white/80 bg-white px-4 py-8 text-center text-[#16181f] shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:shadow-[0_18px_36px_-16px_rgba(194,24,239,0.7)]"
              >
                <span className="grid size-16 place-items-center rounded-full bg-[#f3eefb]">
                  <NavIcon name={industryIcon(item.icon)} className="size-7 text-[#6d28d9]" />
                </span>
                <H3 className="mt-4 !font-sans !text-base !text-[#16181f]">{item.title}</H3>
                <span className="mt-3 h-0.5 w-8 origin-center scale-x-0 rounded-full bg-[#c218ef] transition group-hover:scale-x-100" />
                <p className="sr-only">
                  {item.description}
                  {item.built ? ` Built: ${item.built}.` : ""}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
