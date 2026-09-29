import type { Metadata } from "next";
import ServicesContent from "./ServicesContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Core Services — WhatsApp Automation, Review Automation & Websites",
  description:
    "Explore Clivik's core services: WhatsApp Lead Qualification, Automated Lead Follow-Up, WhatsApp Marketing, Customer Review Automation, and Custom Website Development.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Core Services | Clivik Digital Solutions",
    description:
      "Explore Clivik's core services: WhatsApp Lead Qualification, Automated Lead Follow-Up, WhatsApp Marketing, Customer Review Automation, and Custom Website Development.",
    url: `${siteConfig.url}/services`,
    images: ["/images/clivik-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Core Services | Clivik Digital Solutions",
    description:
      "Explore Clivik's core services: WhatsApp Lead Qualification, Automated Lead Follow-Up, WhatsApp Marketing, Customer Review Automation, and Custom Website Development.",
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
