import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { Paragraph } from "@/components/ui/paragraph";

async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

const reviews = [
  { name: "Clutch", score: "4.6" },
  { name: "Goodfirms", score: "4.7" },
  { name: "DesignRush", score: "4.8" },
  { name: "TopDevelopers", score: "5.0" },
  { name: "Google", score: "4.7" },
];

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/work", label: "Our Work" },
      { href: "/contact", label: "Contact Us" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Game Development",
    links: [
      { href: "/ludo-game-development", label: "Ludo Game Development" },
      { href: "/rummy-game-development", label: "Rummy Game Development" },
      { href: "/poker-game-development", label: "Poker Game Development" },
      { href: "/multigame-development", label: "Multi Game Development" },
      { href: "/teenpatti-game-development", label: "Teen Patti App Development" },
      { href: "/fantasy-app-development", label: "Fantasy App Development" },
      { href: "/sport-betting-app-development", label: "Sport Betting App Development" },
    ],
  },
  {
    title: "Crypto Services",
    links: [
      { href: "/crypto-exchange-development", label: "Crypto Exchange Development" },
      { href: "/white-label-crypto-exchange-solutions", label: "White Label Crypto Exchange Development" },
      { href: "/forex-trading-development", label: "Forex Trading Development" },
      { href: "/nft-marketplace-development", label: "NFT Marketplace Development" },
      { href: "/ico-development-company", label: "ICO Development" },
      { href: "/blockchain-development-services", label: "Blockchain Development" },
      { href: "/mlm-software-development", label: "Cryptocurrency MLM Software Development" },
    ],
  },
  {
    title: "Our Expertise",
    links: [
      { href: "/crypto-exchange-development", label: "Crypto Currency Exchange Development" },
      { href: "/forex-trading-development", label: "Forex Trading Development" },
      { href: "/nft-marketplace-development", label: "NFT Marketplace Development" },
      { href: "/healthcare-app-development", label: "Healthcare Web/App Development" },
      { href: "/food-delivery-app-development", label: "Food App Development" },
      { href: "/ecommerce-development-company", label: "E-commerce Web/App Development" },
      { href: "/fitness-app-development", label: "Fitness App Development" },
    ],
  },
];

const socials = [
  {
    href: "https://www.facebook.com/wrathcode",
    label: "Facebook",
    path: "M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z",
  },
  {
    href: "https://www.linkedin.com/company/wrathcode-technology/",
    label: "LinkedIn",
    path: "M6.5 9H3.7v11h2.8V9zM5.1 3.3A1.6 1.6 0 1 0 5.1 6.5 1.6 1.6 0 0 0 5.1 3.3zM20.3 13.4c0-2.6-1.4-3.8-3.3-3.8-1.5 0-2.2.8-2.6 1.4V9.6H11.6c0 1.3 0 11 0 11h2.8v-6.1c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V20.6h2.8v-7.2z",
  },
  {
    href: "https://x.com/wrathcode",
    label: "X",
    path: "M14.7 3h2.5l-5.5 6.3L18.5 21h-4.6l-3.6-6.2L6.4 21H3.9l5.9-6.8L3.5 3h4.7l3.3 5.6L14.7 3zm-.9 16.2h1.4L7.3 4.7H5.8l8 14.5z",
  },
  {
    href: "https://www.instagram.com/wrathcode",
    label: "Instagram",
    path: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.4a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z",
  },
];

const phones = ["+91-8000-83-6145", "+91-9982-14-1988", "+91-6376-74-7457"];

export async function SiteFooter() {
  const year = await getCopyrightYear();

  return (
    <footer className="relative bg-[#080a12] text-[#f3f4fa]">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr] lg:gap-12">
          <div>
            <Logo className="h-14" />
            <Paragraph className="mt-4 max-w-sm !text-sm !text-[#9aa0b5]">
              WrathCode Technology Pvt Ltd – Delivering cutting-edge solutions in web development, mobile apps, blockchain, and AI-powered software. Innovate, scale, and grow with us.
            </Paragraph>
          </div>

          <div>
            <h2 className="text-base font-semibold">Head Office India</h2>
            <p className="mt-4 flex gap-3 text-sm leading-relaxed text-[#c5cad8]">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-[#22c55e]" />
              <span>1st Floor, JDA Complex, Plot no.11 Sector-4, Vidhyadhar Nagar, Jaipur, 302039</span>
            </p>
          </div>

          <div>
            <h2 className="text-base font-semibold">Project Inquiries</h2>
            <ul className="mt-4 space-y-3 text-sm text-[#c5cad8]">
              <li>
                <a className="inline-flex items-center gap-3 hover:text-white" href="mailto:sales@wrathcode.com">
                  <Mail aria-hidden className="size-4 shrink-0 text-[#22c55e]" />
                  sales@wrathcode.com
                </a>
              </li>
              {phones.map((phone) => (
                <li key={phone}>
                  <a className="inline-flex items-center gap-3 hover:text-white" href={`tel:${phone.replace(/-/g, "")}`}>
                    <Phone aria-hidden className="size-4 shrink-0 text-[#22c55e]" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 bg-black px-5 py-4 text-sm">
          {reviews.map((review) => (
            <li key={review.name} className="flex items-center gap-2">
              <span className="font-medium">{review.name}</span>
              <span className="text-[#f5c542]" aria-hidden>
                ★
              </span>
              <span>{review.score}</span>
              <span className="sr-only">out of 5</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-base font-semibold">{column.title}</h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    {link.href === "/contact" ? (
                      <label htmlFor="contact-open" className="cursor-pointer text-sm text-[#b7bdcc] hover:text-white">
                        {link.label}
                      </label>
                    ) : (
                      <Link href={link.href} className="text-sm text-[#b7bdcc] hover:text-white">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              {column.title === "Company" ? (
                <div className="mt-5 border-t border-white/15 pt-4">
                  <p className="text-sm text-[#b7bdcc]">Follow Us :</p>
                  <ul className="mt-3 flex items-center gap-3">
                    {socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          aria-label={social.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="grid size-8 place-items-center rounded-full border border-white/20 text-white hover:border-[#c218ef] hover:text-[#c218ef]"
                        >
                          <svg viewBox="0 0 24 24" aria-hidden className="size-3.5 fill-current">
                            <path d={social.path} />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </nav>
          ))}
        </div>

        <p className="mt-12 border-t border-white/10 pt-6 text-sm text-[#9aa0b5]">© {year} WrathCode Technology Pvt Ltd</p>
      </Container>

      <label
        htmlFor="contact-open"
        className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 cursor-pointer rounded-l-md bg-[#c218ef] px-2.5 py-4 text-sm font-semibold text-white [writing-mode:vertical-rl] sm:block"
      >
        Let&apos;s talk
      </label>
      <a
        href="https://api.whatsapp.com/send?phone=919982141988&text=Hi+Wrathcode+Family%2C+I%27m+interested+in+starting+a+project+with+you."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#c218ef] py-1.5 pr-3 pl-1.5 text-xs font-semibold text-white shadow-lg"
      >
        <span className="grid size-8 place-items-center rounded-full bg-[#25D366] text-white">
          <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
            <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.42-.14-.95-.31-1.64-.6-2.89-1.25-4.77-4.16-4.91-4.35-.14-.2-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.44.03.64.49.24.57.82 1.98.89 2.12.07.14.12.31.02.5-.09.2-.14.31-.28.48-.14.16-.29.36-.41.48-.14.14-.28.29-.12.55.16.26.7 1.15 1.5 1.86 1.03.92 1.9 1.2 2.16 1.34.26.13.42.11.57-.07.16-.18.66-.77.84-1.03.18-.27.35-.22.59-.13.24.08 1.53.72 1.79.85.26.13.44.2.5.31.07.11.07.64-.17 1.32z" />
          </svg>
        </span>
        Online
      </a>
    </footer>
  );
}
