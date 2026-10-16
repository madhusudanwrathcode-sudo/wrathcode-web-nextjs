import { Container } from "@/components/ui/container";

const reviews = [
  { name: "Clutch", score: "4.6", mark: "clutch" },
  { name: "GoodFirms", score: "4.7", mark: "goodfirms" },
  { name: "DesignRush", score: "4.8", mark: "designrush" },
  { name: "TopDevelopers", score: "5.0", mark: "topdevelopers" },
  { name: "Google", score: "4.7", mark: "google" },
] as const;

function Mark({ name }: { name: (typeof reviews)[number]["mark"] }) {
  if (name === "clutch") {
    return <span className="text-lg font-semibold tracking-tight">Clutch</span>;
  }
  if (name === "goodfirms") {
    return (
      <span className="inline-flex items-center gap-2 text-[0.95rem] font-semibold">
        <svg viewBox="0 0 24 24" aria-hidden className="size-5 fill-current">
          <path d="M4 20V8l8-4 8 4v12H4zm4-2h3v-4H8v4zm5 0h3v-6h-3v6z" />
        </svg>
        GoodFirms
      </span>
    );
  }
  if (name === "designrush") {
    return (
      <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.08em] sm:tracking-[0.14em]">
        <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
          <path d="M12 2l4 7H8l4-7zm0 20l-4-7h8l-4 7zM2 12l7-4v8l-7-4zm20 0l-7 4V8l7 4z" />
        </svg>
        DESIGNRUSH
      </span>
    );
  }
  if (name === "topdevelopers") {
    return (
      <span className="inline-flex items-center gap-2 text-[0.95rem] font-semibold">
        <svg viewBox="0 0 24 24" aria-hidden className="size-5 fill-current">
          <path d="M4 5h16v3h-6.2v11h-3.6V8H4V5z" />
        </svg>
        TopDevelopers
      </span>
    );
  }
  return (
    <span className="text-lg font-medium tracking-tight">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

export function TrustBar() {
  return (
    <section aria-labelledby="trust-bar-title" className="bg-white py-8 sm:py-10">
      <h2 id="trust-bar-title" className="sr-only">
        Client ratings on review platforms
      </h2>
      <Container>
        <ul className="flex w-full min-w-0 flex-wrap items-center justify-center gap-x-5 gap-y-4 rounded-2xl bg-black px-4 py-5 text-white shadow-[0_16px_40px_rgba(8,10,18,0.12)] sm:gap-x-8 sm:px-6 xl:flex-nowrap xl:justify-between xl:px-8">
          {reviews.map((review, index) => (
            <li key={review.name} className="flex items-center justify-center gap-4 xl:gap-6">
              {index > 0 ? <span aria-hidden className="hidden h-5 w-px bg-white/25 xl:block" /> : null}
              <span className="flex items-center gap-2 sm:gap-3">
                <Mark name={review.mark} />
                <span className="text-[#f5c542]" aria-hidden>
                  ★
                </span>
                <span className="text-sm font-medium">{review.score}</span>
                <span className="sr-only"> out of 5 on {review.name}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
