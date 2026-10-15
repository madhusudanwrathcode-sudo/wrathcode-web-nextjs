import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { H1 } from "@/components/ui/h1";
import { Paragraph } from "@/components/ui/paragraph";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col justify-center py-24">
      <Paragraph className="font-mono !text-xs tracking-[0.22em] uppercase !text-brass">404</Paragraph>
      <H1 className="mt-4">That page is not on the map.</H1>
      <Paragraph className="mt-4 max-w-lg !text-lg">
        The link may be old, or the address may be mistyped. The work and the studio are still
        here.
      </Paragraph>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back home</Button>
        <Link
          href="/work"
          className="inline-flex items-center justify-center rounded-md border border-line px-4 py-2.5 text-sm font-medium hover:bg-surface-2"
        >
          See the work
        </Link>
      </div>
    </Container>
  );
}
