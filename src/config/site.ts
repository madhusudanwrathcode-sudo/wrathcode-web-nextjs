const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wrathcode.dev";

export const siteConfig = {
  name: "Wrathcode",
  title: "Wrathcode — Product engineering studio",
  description:
    "Wrathcode designs and builds product systems for teams that cannot ship fragile software.",
  url: configuredUrl.replace(/\/$/, ""),
  email: "hello@wrathcode.dev",
  locations: ["Bengaluru", "Austin"],
} as const;
