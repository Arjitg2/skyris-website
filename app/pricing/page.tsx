import type { Metadata } from "next";
import PricingContent from "./PricingContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Pricing & Packages — Transparent Plans for Local Businesses",
  description:
    "Honest, upfront pricing starting at ₹4,999. Custom websites, WhatsApp automation, and Google review automation with 100% free mockup first.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing & Packages | Clivik Digital Solutions",
    description:
      "Honest, upfront pricing starting at ₹4,999. Custom websites, WhatsApp automation, and Google review automation with 100% free mockup first.",
    url: `${siteConfig.url}/pricing`,
    images: ["/images/clivik-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Packages | Clivik Digital Solutions",
    description:
      "Honest, upfront pricing starting at ₹4,999. Custom websites, WhatsApp automation, and Google review automation with 100% free mockup first.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
