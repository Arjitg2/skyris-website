import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clivik Digital Solutions",
    short_name: "Clivik",
    description:
      "WhatsApp lead automation, review automation, and conversion-focused websites for local businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0e1a",
    theme_color: "#0d0e1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
