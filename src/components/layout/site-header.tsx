import Script from "next/script";
import Link from "next/link";
import { quoteLink } from "@/config/navigation";
import { MobileNav, PrimaryNav } from "@/components/layout/primary-nav";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

const headerScript = `(function(){function run(){var header=document.querySelector("header");if(!header||header.dataset.menuReady)return;header.dataset.menuReady="true";function closeDetails(except){header.querySelectorAll("details[open]").forEach(function(el){if(el!==except)el.open=false})}var items=[].slice.call(header.querySelectorAll("details.desktop-item"));var hover=window.matchMedia("(hover: hover) and (pointer: fine)").matches;var timer=0;function openItem(current){clearTimeout(timer);closeDetails(current);current.open=true}function scheduleClose(current){clearTimeout(timer);timer=setTimeout(function(){if(!current.matches(":hover"))current.open=false},140)}items.forEach(function(el){el.addEventListener("mouseenter",function(){openItem(el)});el.addEventListener("mouseleave",function(){scheduleClose(el)});el.addEventListener("focusout",function(event){var next=event.relatedTarget;if(next&&el.contains(next))return;if(el.matches(":hover"))return;scheduleClose(el)})});header.querySelectorAll("details.desktop-item summary").forEach(function(summary){summary.addEventListener("click",function(event){if(hover)event.preventDefault()})});window.addEventListener("keydown",function(event){if(event.key==="Escape"){clearTimeout(timer);closeDetails()}});header.addEventListener("click",function(event){var target=event.target;if(target&&target.closest&&target.closest("a")){clearTimeout(timer);closeDetails()}});header.addEventListener("focusin",function(event){var target=event.target;if(!target||!target.closest)return;var current=target.closest("details.desktop-item");if(current)openItem(current)})}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run()})();`;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 h-[90px] border-b border-line bg-[#09101c]">
      <div className="mx-auto flex h-[90px] w-full max-w-[1440px] items-center gap-4 px-5 md:px-8">
        <Link href="/" className="shrink-0 rounded-sm">
          <Logo />
        </Link>
        <PrimaryNav />
        <div className="ml-auto hidden shrink-0 xl:block">
          <Button href={quoteLink.href} variant="quote">
            {quoteLink.label}
          </Button>
        </div>
        <MobileNav />
      </div>
      <Script id="header-menu" strategy="lazyOnload">
        {headerScript}
      </Script>
    </header>
  );
}
