import type { Metadata } from "next";
import ContactContent from "./ContactContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Clivik — Free Website Mockup & WhatsApp Consultation",
  description:
    "Get in touch with Clivik Digital Solutions in Bhopal. Contact us for a free custom website mockup within 24 hours or chat with us on WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Clivik | Free Mockup & WhatsApp Consultation",
    description:
      "Get in touch with Clivik Digital Solutions in Bhopal. Contact us for a free custom website mockup within 24 hours or chat with us on WhatsApp.",
    url: `${siteConfig.url}/contact`,
    images: ["/images/clivik-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Clivik | Free Mockup & WhatsApp Consultation",
    description:
      "Get in touch with Clivik Digital Solutions in Bhopal. Contact us for a free custom website mockup within 24 hours or chat with us on WhatsApp.",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Clivik Digital Solutions",
    description: "Contact page for Clivik Digital Solutions — free mockup request and WhatsApp consultation.",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.contact.phoneClean,
      email: siteConfig.contact.email,
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.contact.addressLocality,
        addressRegion: siteConfig.contact.addressRegion,
        addressCountry: siteConfig.contact.countryCode,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <ContactContent />
    </>
  );
}
