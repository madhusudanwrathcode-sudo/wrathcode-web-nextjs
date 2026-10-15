"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H1 } from "@/components/ui/h1";
import { Paragraph } from "@/components/ui/paragraph";

export default function SiteError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <Paragraph className="font-mono !text-xs tracking-[0.22em] uppercase !text-brass">Fault</Paragraph>
      <H1 className="mt-4 md:!text-5xl">This page failed to render.</H1>
      <Paragraph className="mt-4 max-w-lg !text-lg">
        Try again. If it keeps happening, write to us and include what you were doing.
      </Paragraph>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md bg-ember px-4 py-2.5 text-sm font-medium text-background hover:bg-ember-deep"
        >
          Try again
        </button>
        <Button href="/" variant="secondary">
          Back home
        </Button>
      </div>
    </Container>
  );
}
