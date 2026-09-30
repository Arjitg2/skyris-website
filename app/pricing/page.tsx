import type { Metadata } from "next";
import PricingContent from "./PricingContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Pricing & Packages — Transparent Plans for Local Businesses",
  description:
    "Transparent pricing starting at ₹4,999 for WhatsApp automation, lead follow-up, Google review automation, and RTO prevention in Bhopal. Get a free lead audit.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Pricing & Packages | Clivik Digital Solutions",
    description:
      "Transparent pricing starting at ₹4,999 for WhatsApp automation, lead follow-up, Google review automation, and RTO prevention in Bhopal. Get a free lead audit.",
    url: `${siteConfig.url}/pricing`,
    images: ["/images/clivik-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Packages | Clivik Digital Solutions",
    description:
      "Transparent pricing starting at ₹4,999 for WhatsApp automation, lead follow-up, Google review automation, and RTO prevention in Bhopal. Get a free lead audit.",
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
