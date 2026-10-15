import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "**.ngrok-free.app",
    "**.ngrok-free.dev",
    "**.ngrok.app",
    "**.ngrok.io",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wrathcode.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    inlineCss: true,
  },
  // async redirects() {
  //   return [
  //     { source: "/about-us", destination: "/about", permanent: true },
  //     { source: "/contact-us", destination: "/contact", permanent: true },
  //     { source: "/portfolio", destination: "/work", permanent: true },
  //   ];
  // },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
