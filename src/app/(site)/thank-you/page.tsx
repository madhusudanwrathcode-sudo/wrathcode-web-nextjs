import { Rubik } from "next/font/google";
import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const whatsappHref =
  "https://api.whatsapp.com/send?phone=919982141988&text=Hi+Wrathcode+Family%2C+I%27m+interested+in+starting+a+project+with+you.";

// Kept to the edges so they never sit on top of the text.
// `mobile: false` hides the dot on small screens where space is tight.
const particles = [
  { top: "14%", left: "12%", size: 10, mobile: true },
  { top: "22%", left: "84%", size: 12, mobile: true },
  { top: "48%", left: "6%", size: 12, mobile: false },
  { top: "62%", left: "90%", size: 10, mobile: true },
  { top: "80%", left: "18%", size: 8, mobile: false },
  { top: "34%", left: "28%", size: 6, mobile: false, accent: true },
];

export default function ThankYouPage() {
  return (
    <>
      <title>Thank You | Wrathcode</title>
      <meta
        name="description"
        content="Your request has reached the WrathCode team. We will connect with you as soon as possible."
      />
      <meta name="robots" content="noindex, nofollow" />

      <section
        className={`${rubik.className} relative isolate flex flex-col overflow-hidden bg-[#0B0E1C] pt-12 sm:pt-16 lg:min-h-[calc(100svh-5rem)] lg:pt-20`}
      >
        {/* Soft purple glow, fades into the background with no hard edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-[42%] left-1/2 -z-10 aspect-square w-[min(1000px,150vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(145,13,194,0.5),rgba(145,13,194,0.18)_50%,transparent)] blur-2xl"
        />

        {particles.map((dot) => (
          <span
            key={`${dot.top}-${dot.left}`}
            aria-hidden
            className={`pointer-events-none absolute -z-10 rounded-full blur-[3px] motion-safe:animate-pulse ${
              dot.accent ? "bg-[#DE24F8]" : "bg-white/70"
            } ${dot.mobile ? "" : "hidden md:block"}`}
            style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
          />
        ))}

        <Container className="flex flex-1 flex-col items-center justify-center text-center">
          {/* Success badge */}
          <div className="relative grid size-[190px] place-items-center sm:size-[240px] lg:size-[320px]">
            <svg aria-hidden viewBox="0 0 354 354" className="absolute inset-0 size-full" fill="none">
              <circle
                cx="177"
                cy="177"
                r="176"
                stroke="white"
                strokeOpacity="0.2"
                strokeDasharray="1.4 3.6"
              />
            </svg>
            <div className="grid size-[124px] place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.28),rgba(145,13,194,0.5)_40%,#120A24_82%)] shadow-[inset_0_0_40px_rgba(183,97,215,0.3),0_0_60px_rgba(145,13,194,0.35)] sm:size-[156px] lg:size-[212px]">
              <svg
                viewBox="0 0 120 80"
                className="w-[42%]"
                fill="none"
                role="img"
                aria-label="Request received"
              >
                <path
                  d="M12 42 L44 72 L108 8"
                  stroke="white"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <h1 className="mt-6 text-[48px] leading-none font-bold tracking-tight text-white sm:mt-8 sm:text-[80px] lg:text-[120px]">
            Thank You
          </h1>

          <Paragraph className="mt-5 max-w-[34rem] text-balance !text-base !leading-relaxed font-normal !text-[#C1C3C6] sm:mt-6 sm:!text-lg lg:max-w-none lg:!text-[22px]">
            Your request has reached the WrathCode team.
            <strong className="mt-1 block font-bold text-white">
              Due to high demand, our team will try to connect with you ASAP.
            </strong>
          </Paragraph>
        </Container>

        {/* Bottom arc: thin curved line with a purple glow under its peak */}
        {/* Extra bottom padding below lg keeps the button clear of the floating chat widgets */}
        <div className="relative mt-14 flex justify-center pt-12 pb-28 sm:mt-16 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[420px] w-[260%] -translate-x-1/2 rounded-[50%] border-t border-white/15 bg-[radial-gradient(ellipse_25%_30%_at_50%_0%,rgba(145,13,194,0.35),transparent)] sm:w-[170%] lg:w-[130%] lg:bg-[radial-gradient(ellipse_30%_45%_at_50%_0%,rgba(145,13,194,0.5),transparent)]"
          />

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-[#C21DE8] to-[#8A0CC4] px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_30px_rgba(194,29,232,0.35)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-9 sm:py-4 sm:text-lg"
          >
            Chat with us on WhatsApp
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="size-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}