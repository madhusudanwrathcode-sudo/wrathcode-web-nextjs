import NextImage, { type ImageProps } from "next/image";
import { cn } from "@/lib/cn";

type ImageComponentProps = ImageProps & {
  className?: string;
};

function publicSrc(src: ImageProps["src"]) {
  if (typeof src !== "string" || src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  const path = src.replace(/^\.?\//, "").replace(/^public\//, "");
  return `/${path}`;
}

export function Image({ className, alt, src, ...props }: ImageComponentProps) {
  return <NextImage alt={alt} src={publicSrc(src)} className={cn("object-cover", className)} {...props} />;
}
