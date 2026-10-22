import type { Metadata, Viewport } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { GetInTouch } from "@/components/GetInTouch";
import { ContactModal } from "@/components/layout/contact-modal";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
// import { siteConfig } from "@/config/site";
import "./globals.css";

const syne = localFont({
  src: "../fonts/syne-latin-wght-normal.woff2",
  variable: "--font-syne",
  weight: "500 800",
  display: "swap",
});

// export const metadata: Metadata = {
//   metadataBase: new URL(siteConfig.url),
// };

export const viewport: Viewport = {
  themeColor: "#090908",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-ember focus:px-3 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" tabIndex={-1} className="min-w-0 flex-1 outline-none">
          {children}
        </main>
        <GetInTouch />
        <SiteFooter />
        <ContactModal />
      </body>
    </html>
  );
}
