import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Core Services — WhatsApp AI Agents, Follow-Up Autopilot & Review Automation",
  description:
    "Explore Clivik's core services: WhatsApp Lead Qualification, 30-Day Follow-Up Autopilot, WhatsApp Marketing, Google Review Automation, and RTO/COD Confirmation.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Core Services | Clivik Digital Solutions",
    description:
      "Explore Clivik's core services: WhatsApp Lead Qualification, 30-Day Follow-Up Autopilot, WhatsApp Marketing, Google Review Automation, and RTO/COD Confirmation.",
    url: `${siteConfig.url}/services`,
    images: ["/images/clivik-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Services | Clivik Digital Solutions",
    description:
      "Explore Clivik's core services: WhatsApp Lead Qualification, 30-Day Follow-Up Autopilot, WhatsApp Marketing, Google Review Automation, and RTO/COD Confirmation.",
  },
};

export default function ServicesPage() {
  const serviceListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: siteConfig.coreServices.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.url,
        },
        areaServed: "India",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
      />
      <ServicesContent />
    </>
  );
}
