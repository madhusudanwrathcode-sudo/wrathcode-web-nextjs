import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, quoteLink, type NavFeature, type NavMenu } from "@/config/navigation";
import { NavIcon } from "@/components/layout/nav-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const triggerClass =
  "inline-flex h-full items-center gap-1 whitespace-nowrap rounded-sm px-1 text-[14px] font-medium text-muted text-white hover:text-[#b111e5]";

function FeatureCard({ feature }: { feature: NavFeature }) {
  return (
    <div className="bg-[#f6f1ea] p-5 sm:p-6">
      <p className="text-sm font-semibold text-[#1c1b18]">Featured insight</p>
      <Link href={feature.href} className="mt-4 block rounded-lg">
        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#14120f]" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,77,28,0.62),transparent_46%),radial-gradient(circle_at_82%_78%,rgba(226,177,90,0.38),transparent_40%)]" />
          <div className="absolute inset-5 rounded-full border border-white/15" />
          <p className="absolute inset-x-5 bottom-4 font-display text-2xl leading-none tracking-tight text-white">
            {feature.art}
          </p>
        </div>
        <p className="mt-4 text-sm leading-snug font-medium text-[#1c1b18]">{feature.title}</p>
        <span className="mt-3 inline-block text-sm font-medium text-[#9a3412] underline decoration-[#9a3412]/40 underline-offset-4">
          Read full article
        </span>
      </Link>
    </div>
  );
}

function MenuPanel({ menu }: { menu: NavMenu }) {
  return (
    <div
      className={cn(
        "nav-panel absolute top-full z-50",
        menu.variant === "mega" ? "inset-x-0 px-5 pt-3" : "left-0 w-[22rem] pt-3",
      )}
    >
      <div
        className={cn(
          "overflow-hidden rounded-2xl border border-[#e7e1d8] bg-white shadow-[0_22px_50px_rgba(0,0,0,0.28)]",
          menu.variant === "mega" && "mx-auto",
          menu.variant === "mega" && (menu.columns === 2 ? "max-w-[1080px]" : "max-w-[760px]"),
        )}
      >
        <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain">
          <div className={cn(menu.feature && "xl:grid xl:grid-cols-[minmax(0,1.4fr)_19rem]")}>
            <div className="p-5 sm:p-6">
              <p className="flex items-center text-sm font-semibold text-[#1c1b18]">
                <span className="mr-2 inline-block size-2 rotate-45 bg-ember" aria-hidden />
                {menu.heading}
              </p>
              <ul className={cn("mt-3", menu.columns === 2 && "grid grid-cols-2 gap-x-3")}>
                {menu.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm leading-snug font-medium text-[#1c1b18] hover:bg-[#f3efe6]"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-md border border-[#e6e1d8] bg-[#faf8f5] text-[#1c1b18]">
                        <NavIcon name={item.icon} className="size-4" />
                      </span>
                      <span className="min-w-0 ">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {menu.feature ? <FeatureCard feature={menu.feature} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrimaryNav() {
  return (
    <nav className="primary-nav hidden h-full xl:block" aria-label="Primary">
      <ul className="flex h-full items-stretch gap-x-4">
        {primaryNav.map((entry) =>
          entry.type === "link" ? (
            <li key={entry.href} className="flex ">
              <Link href={entry.href} className={`${triggerClass} `} >
                {entry.label}
              </Link>
            </li>
          ) : (
            <li key={entry.label} className="flex h-full ">
              <details
                name="desktop-nav"
                className={cn(
                  "desktop-item flex h-full ",
                  entry.variant === "mega" ? "static" : "relative",
                )}
              >
                <summary className={`${triggerClass} cursor-pointer list-none `}>
                  {entry.label}
                  <ChevronDown className="nav-chevron size-3.5 shrink-0" aria-hidden />
                </summary>
                <MenuPanel menu={entry} />
              </details>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}

export function MobileNav() {
  return (
    <details className="mobile-nav ml-auto shrink-0 xl:hidden">
      <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-md border border-line">
        <Menu className="icon-open size-5" aria-hidden />
        <X className="icon-close size-5" aria-hidden />
        <span className="sr-only">Menu</span>
      </summary>
      <div className="fixed inset-x-0 top-20 bottom-0 z-30 overflow-y-auto overscroll-contain border-t border-line bg-background">
        <nav aria-label="Mobile" className="mx-auto flex w-full max-w-[720px] flex-col px-5 py-2 pb-10">
          {primaryNav.map((entry) =>
            entry.type === "link" ? (
              <Link
                key={entry.href}
                href={entry.href}
                className="border-b border-line py-3.5 text-base"
              >
                {entry.label}
              </Link>
            ) : (
              <details key={entry.label} name="mobile-sections" className="mobile-section border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-base">
                  {entry.label}
                  <ChevronDown className="nav-chevron size-4 shrink-0 text-muted" aria-hidden />
                </summary>
                <ul className="pb-3">
                  {entry.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-3 rounded-md px-1 py-2.5 text-sm text-muted hover:text-foreground"
                      >
                        <NavIcon name={item.icon} className="size-4 shrink-0 text-brass" />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  {entry.feature ? (
                    <li className="mt-1 border-t border-line pt-1">
                      <Link
                        href={entry.feature.href}
                        className="block rounded-md px-1 py-2.5 text-sm text-brass"
                      >
                        {entry.feature.title}
                      </Link>
                    </li>
                  ) : null}
                </ul>
              </details>
            ),
          )}
          <Button href={quoteLink.href} variant="quote" className="mt-5">
            {quoteLink.label}
          </Button>
        </nav>
      </div>
    </details>
  );
}
