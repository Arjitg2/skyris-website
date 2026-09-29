import type { Metadata } from "next";
import PortfolioContent from "./PortfolioContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies — Real Websites & Automations",
  description:
    "Explore Clivik's portfolio of custom websites, clinic platforms, restaurant reservation flows, and local business digital systems.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | Clivik Digital Solutions",
    description:
      "Explore Clivik's portfolio of custom websites, clinic platforms, restaurant reservation flows, and local business digital systems.",
    url: `${siteConfig.url}/portfolio`,
    images: ["/images/clivik-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | Clivik Digital Solutions",
    description:
      "Explore Clivik's portfolio of custom websites, clinic platforms, restaurant reservation flows, and local business digital systems.",
  },
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
