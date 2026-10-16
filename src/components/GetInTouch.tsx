import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { H3 } from "@/components/ui/h3";
import { Paragraph } from "@/components/ui/paragraph";

const phones = ["+91-8000-83-6145", "+91-9982-14-1988", "+91-6376-74-7457"];
const countries = ["+91", "+1", "+44", "+61", "+971"];

const socials = [
  {
    href: "https://www.instagram.com/wrathcode_technology",
    label: "Instagram",
    path: "M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 3.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 1.6A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.4 6.4a.9.9 0 1 1-.9.9.9.9 0 0 1 .9-.9z",
  },
  {
    href: "https://www.facebook.com/WrathcodeTechnology",
    label: "Facebook",
    path: "M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z",
  },
  {
    href: "https://www.linkedin.com/company/wrathcode-technology/",
    label: "LinkedIn",
    path: "M6.5 9H3.7v11h2.8V9zM5.1 3.3A1.6 1.6 0 1 0 5.1 6.5 1.6 1.6 0 0 0 5.1 3.3zM20.3 13.4c0-2.6-1.4-3.8-3.3-3.8-1.5 0-2.2.8-2.6 1.4V9.6H11.6c0 1.3 0 11 0 11h2.8v-6.1c0-.3 0-.7.1-1 .3-.7.9-1.4 2-1.4 1.4 0 2 1.1 2 2.6V20.6h2.8v-7.2z",
  },
  {
    href: "https://www.youtube.com/@WrathcodeTechnology",
    label: "YouTube",
    path: "M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5V8.9l6.2 3.3-6.2 3.3z",
  },
];

const fieldClass =
  "mt-2 w-full border border-[#d4d4d8] bg-white px-3 py-2.5 text-sm text-[#16181f] outline-none focus:border-[#6d28d9]";

export function GetInTouch() {
  return (
    <section id="get-in-touch" aria-labelledby="get-in-touch-title" className="scroll-mt-24 bg-white py-16 sm:py-24">
      <Container>
        <div className="grid overflow-hidden rounded-2xl shadow-xl lg:grid-cols-2">
          <div className="flex flex-col bg-[#6d28d9] px-8 py-10 text-white sm:px-12 sm:py-14">
            <H2 id="get-in-touch-title" className="!text-[#f0d9ff]">
              Get in Touch
            </H2>
            <Paragraph className="mt-5 max-w-md !text-white/90">
              Have a project in mind? Share a few details and the Wrathcode team will get back to you about your website, app, game, or crypto product.
            </Paragraph>

            <address className="mt-10 space-y-5 text-sm not-italic text-white/90">
              <p>
                <span className="block text-base font-semibold text-white">Head Office India</span>
                <span className="mt-2 flex gap-3">
                  <MapPin aria-hidden className="mt-0.5 size-4 shrink-0" />
                  <span>1st Floor, JDA Complex, Plot no.11 Sector-4, Vidhyadhar Nagar, Jaipur, 302039</span>
                </span>
              </p>
              <p>
                <span className="block text-base font-semibold text-white">Project Inquiries</span>
                <a className="mt-2 inline-flex items-center gap-3 hover:text-white" href="mailto:sales@wrathcode.com">
                  <Mail aria-hidden className="size-4 shrink-0" />
                  sales@wrathcode.com
                </a>
              </p>
              <ul className="space-y-3">
                {phones.map((phone) => (
                  <li key={phone}>
                    <a className="inline-flex items-center gap-3 hover:text-white" href={`tel:${phone.replace(/-/g, "")}`}>
                      <Phone aria-hidden className="size-4 shrink-0" />
                      {phone}
                    </a>
                  </li>
                ))}
              </ul>
            </address>

            <div className="mt-10">
              <p className="text-base font-semibold text-white">Follow Us</p>
              <ul className="mt-4 flex items-center gap-3">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid size-10 place-items-center rounded-full border border-white/30 text-white hover:bg-white hover:text-[#6d28d9]"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
                        <path d={social.path} />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <form
            className="bg-[#f6f3fb] px-6 py-10 sm:px-12 sm:py-14"
            action="mailto:sales@wrathcode.com"
            method="post"
            encType="text/plain"
          >
            <H3 className="!font-sans !text-[#16181f]">Get Started with Wrathcode</H3>
            <Paragraph className="mt-3 !text-[#5b6074]">
              Tell us your name, how to reach you, and what you want to build.
            </Paragraph>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block text-sm font-medium text-[#16181f]">
                Full Name
                <input name="name" autoComplete="name" className={fieldClass} />
              </label>
              <label className="block text-sm font-medium text-[#16181f]">
                Email*
                <input name="email" type="email" required autoComplete="email" className={fieldClass} />
              </label>
            </div>
            <label className="mt-4 block text-sm font-medium text-[#16181f]">
              Phone*
              <span className="mt-2 flex border border-[#d4d4d8] bg-white">
                <select
                  name="code"
                  aria-label="Country code"
                  defaultValue="+91"
                  className="border-r border-[#d4d4d8] bg-[#f4f4f5] px-2 text-sm text-[#16181f] outline-none"
                >
                  {countries.map((code) => (
                    <option key={code}>{code}</option>
                  ))}
                </select>
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="123-456-7890"
                  className="w-full px-3 py-2.5 text-sm text-[#16181f] outline-none"
                />
              </span>
            </label>
            <label className="mt-4 block text-sm font-medium text-[#16181f]">
              Your Message
              <textarea name="message" rows={5} className={`${fieldClass} resize-y`} />
            </label>
            <button
              type="submit"
              className="mt-5 w-full cursor-pointer bg-[#c026d3] px-4 py-3 text-sm font-semibold text-white shadow-[0_4px_0_#86198f]"
            >
              Enquiry Now
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
