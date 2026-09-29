import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Clivik — Founder Story, Mission & Values",
  description:
    "Learn about Clivik Digital Solutions, founded by Arjit Gupta in Bhopal, MP. We help local businesses win online through WhatsApp automation and fast custom websites.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Clivik | Founder Story & Mission",
    description:
      "Learn about Clivik Digital Solutions, founded by Arjit Gupta in Bhopal, MP. We help local businesses win online through WhatsApp automation and fast custom websites.",
    url: `${siteConfig.url}/about`,
    images: ["/images/clivik-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Clivik | Founder Story & Mission",
    description:
      "Learn about Clivik Digital Solutions, founded by Arjit Gupta in Bhopal, MP. We help local businesses win online through WhatsApp automation and fast custom websites.",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.role,
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
      image: siteConfig.founder.image,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <AboutContent />
    </>
  );
}
