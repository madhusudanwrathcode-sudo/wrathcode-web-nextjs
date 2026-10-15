import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter() {
  const year = await getCopyrightYear();
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Product engineering for teams that need the software to hold.
          </p>
        </div>
        {/* <nav aria-label="Footer" className="flex flex-col gap-2">
          {footerNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav> */}
        <div className="text-sm text-muted">
          <p>{siteConfig.locations.join(" · ")}</p>
          <a className="mt-2 inline-block hover:text-foreground" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </div>
      </Container>
      <Container className="border-t border-line py-6">
        <p className="font-display text-4xl tracking-tight md:text-6xl">{siteConfig.name}</p>
        <p className="mt-3 text-sm text-muted">
          © {year} {siteConfig.name}
        </p>
      </Container>
    </footer>
  );
}
