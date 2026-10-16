"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function TestimonialsTrack({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const track = root.querySelector<HTMLElement>("[data-track]");
    const prev = root.querySelector<HTMLButtonElement>("[data-prev]");
    const next = root.querySelector<HTMLButtonElement>("[data-next]");
    if (!track || !prev || !next) return;

    const step = () => {
      const card = track.querySelector("article");
      return card ? card.getBoundingClientRect().width + 18 : 300;
    };
    const sync = () => {
      prev.disabled = track.scrollLeft < 8;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    };
    const onPrev = () => track.scrollBy({ left: -step(), behavior: "smooth" });
    const onNext = () => track.scrollBy({ left: step(), behavior: "smooth" });
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrev();
      }
    };

    prev.addEventListener("click", onPrev);
    next.addEventListener("click", onNext);
    track.addEventListener("keydown", onKey);
    track.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    root.dataset.slider = "1";
    sync();

    return () => {
      prev.removeEventListener("click", onPrev);
      next.removeEventListener("click", onNext);
      track.removeEventListener("keydown", onKey);
      track.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, []);

  return (
    <div ref={rootRef} className="w-full min-w-0 max-w-full overflow-hidden contain-paint">
      {children}
    </div>
  );
}
