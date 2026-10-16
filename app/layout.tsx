import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clivikai.dpdns.org"),
  title: {
    default: "Clivik — AI Automation & WhatsApp Automation for Businesses",
    template: "%s | Clivik",
  },
  description:
    "Clivik helps businesses automate WhatsApp, reply to leads in 7 seconds, qualify prospects 24/7, and deploy lead-generating websites live in 5 days.",
  keywords: [
    "Clivik",
    "Clivik AI",
    "clivikai",
    "clivikai.dpdns.org",
    "AI Automation",
    "WhatsApp Automation",
    "WhatsApp Business API",
    "WhatsApp Bot",
    "AI WhatsApp Chatbot",
    "AI Speed to Lead",
    "Instant 7-second Replies",
    "Lead Qualification Automation",
    "Appointment Booking Automation",
    "Google Review Automation",
    "Lead Generation Website",
    "AI Agency Bhopal",
    "WhatsApp Marketing Automation India",
    "Digital Growth",
    "Bhopal",
  ],
  authors: [{ name: "Arjit Gupta", url: "https://clivikai.dpdns.org" }],
  creator: "Clivik Digital Solutions",
  publisher: "Clivik Digital Solutions",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clivik — AI Automation & WhatsApp Automation for Businesses",
    description:
      "Stop losing leads. 7-second automated WhatsApp replies, 24/7 smart lead qualification, and lead-gen websites live in 5 days.",
    url: "https://clivikai.dpdns.org",
    siteName: "Clivik Digital Solutions",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clivik — AI Automation & WhatsApp Automation for Businesses",
    description:
      "Stop losing leads. 7-second automated WhatsApp replies, 24/7 smart lead qualification, and lead-gen websites live in 5 days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070814",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://clivikai.dpdns.org/#organization",
      "name": "Clivik Digital Solutions",
      "alternateName": ["Clivik AI", "Clivik"],
      "url": "https://clivikai.dpdns.org",
      "logo": "https://clivikai.dpdns.org/logo.png",
      "sameAs": [
        "https://www.instagram.com/clivikai/?hl=en",
        "https://www.facebook.com/profile.php?id=61589704865610",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-6265022474",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://clivikai.dpdns.org/#website",
      "url": "https://clivikai.dpdns.org",
      "name": "Clivik",
      "description": "AI Automation & WhatsApp Automation Agency for Modern Businesses",
      "publisher": {
        "@id": "https://clivikai.dpdns.org/#organization",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://clivikai.dpdns.org/#localbusiness",
      "name": "Clivik Digital Solutions",
      "telephone": "+916265022474",
      "url": "https://clivikai.dpdns.org",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bhopal",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "IN",
      },
      "openingHours": "Mo-Su 00:00-23:59",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://clivikai.dpdns.org/#software",
      "name": "Clivik AI WhatsApp Automation System",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud / WhatsApp Business API",
      "offers": {
        "@type": "Offer",
        "price": "3999",
        "priceCurrency": "INR",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "38",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://clivikai.dpdns.org/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does WhatsApp automation help my business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Clivik WhatsApp automation connects directly to WhatsApp Business API to reply to incoming customer leads within 7 seconds, answer repetitive product/service questions 24/7, qualify prospect budgets, and book meetings directly into your calendar."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can my website and automation go live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most Clivik AI WhatsApp and website setups go live within 5 to 10 days, complete with automated replies, lead capture, and full testing before launch."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need technical skills to manage Clivik AI automations?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No technical skills are needed. Clivik handles end-to-end design, API configuration, workflow automation, and provides up to 60 days of free post-launch support."
          }
        }
      ]
    }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
