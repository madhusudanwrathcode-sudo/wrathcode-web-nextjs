import { StoryVideo } from "@/components/story-video";
import { TestimonialsTrack } from "@/components/testimonials-track";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H2 } from "@/components/ui/h2";
import { H3 } from "@/components/ui/h3";
import { Paragraph } from "@/components/ui/paragraph";

export type TestimonialReview = {
  tag: string;
  quote: string;
  name: string;
  location: string;
  initials: string;
};

export type TestimonialsContent = {
  id: string;
  title: string;
  titleRest: string;
  titleAccent: string;
  description: string;
  button: { href: string; label: string };
  video: { href: string; label: string; duration: string };
  stats: { value: string; label: string }[];
  reviewsTitle: string;
  reviewsTitleStrong: string;
  work: { href: string; label: string };
  reviews: TestimonialReview[];
};

export function Testimonials({ content }: { content: TestimonialsContent }) {
  const headingId = `${content.id}-title`;
  const reviewsId = `${content.id}-reviews`;

  return (
    <section
      id={content.id}
      aria-labelledby={headingId}
      className="min-w-0 scroll-mt-24 bg-[#080a12] py-16 text-[#f3f4fa] sm:py-24"
    >
      <Container>
        <div className="min-w-0 overflow-hidden rounded-[36px] border border-white/10 bg-[#0f1220]  px-6 py-8 sm:px-10 sm:py-11">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
            <div className="min-w-0">
              <H2 id={headingId} className="max-w-xl !font-sans !font-normal">
                {content.title}
                <span className="mt-1 block font-bold">
                  {content.titleRest} <span className="text-[#c218ef]">{content.titleAccent}</span>
                </span>
              </H2>
              <Paragraph className="mt-5 max-w-md !text-[#9fa5bd]">{content.description}</Paragraph>
              <ul className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
                {content.stats.map((stat) => (
                  <li key={stat.label}>
                    <b className="block text-2xl font-semibold tracking-tight sm:text-3xl">{stat.value}</b>
                    <span className="mt-1 block text-sm text-[#9fa5bd]">{stat.label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={content.button.href} variant="quote">
                  {content.button.label}
                </Button>
              </div>
            </div>

            <StoryVideo href={content.video.href} label={content.video.label} duration={content.video.duration} />
          </div>

          <TestimonialsTrack>
          <div className="mt-12 flex items-center justify-between gap-4 sm:mt-14">
            <H3 id={reviewsId} className="!font-sans !font-normal">
              {content.reviewsTitle} <span className="font-bold">{content.reviewsTitleStrong}</span>
            </H3>
            <div className="hidden shrink-0 gap-2.5 sm:flex">
              <button
                type="button"
                data-prev
                aria-label="Previous reviews"
                className="grid size-12 cursor-pointer place-items-center rounded-full border border-white/20 text-[#f3f4fa] hover:border-transparent hover:bg-[#c218ef] disabled:cursor-default disabled:opacity-35 disabled:hover:border-white/20 disabled:hover:bg-transparent"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M19 12H5M11 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                data-next
                aria-label="Next reviews"
                className="grid size-12 cursor-pointer place-items-center rounded-full border border-white/20 text-[#f3f4fa] hover:border-transparent hover:bg-[#c218ef] disabled:cursor-default disabled:opacity-35 disabled:hover:border-white/20 disabled:hover:bg-transparent"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            data-track
            tabIndex={0}
            aria-labelledby={reviewsId}
            className="mt-6 flex w-full min-w-0 gap-[18px] overflow-x-auto snap-x snap-mandatory pb-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {content.reviews.map((review) => (
              <article
                key={review.name}
                itemScope
                itemType="https://schema.org/Review"
                className="flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#151930] transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-[#c218ef]/45 motion-reduce:transition-none sm:w-[calc((100%-18px)/2)] lg:w-[calc((100%-36px)/3)]"
              >
                <meta itemProp="itemReviewed" content="WrathCode" />
                <div className="flex flex-1 flex-col gap-4 px-6 pt-6 pb-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold tracking-[0.1em] text-[#c218ef] uppercase">{review.tag}</p>
                    <p className="text-sm tracking-wider text-[#e2b15a]">
                      <span aria-hidden="true">★★★★★</span>
                      <span className="sr-only">Rated 5 out of 5</span>
                    </p>
                  </div>
                  <blockquote itemProp="reviewBody" className="flex-1">
                    <Paragraph className="!text-[#dfe2f0]">“{review.quote}”</Paragraph>
                  </blockquote>
                  <footer itemProp="author" itemScope itemType="https://schema.org/Person" className="flex items-center gap-3 pt-1">
                    <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full bg-linear-to-br from-[#c218ef] to-[#e879f9] text-sm font-semibold text-white">
                      {review.initials}
                    </span>
                    <div>
                      <cite itemProp="name" className="block text-[0.95rem] font-semibold not-italic">
                        {review.name}
                      </cite>
                      <span itemProp="address" className="text-sm text-[#9fa5bd]">
                        {review.location}
                      </span>
                    </div>
                  </footer>
                </div>
                <div className="border-t border-white/10 bg-white/5 px-6 py-3">
                  <Button href={content.work.href} variant="secondary" className="w-full">
                    {content.work.label}
                  </Button>
                </div>
              </article>
            ))}
          </div>
          </TestimonialsTrack>
        </div>
      </Container>
    </section>
  );
}
