import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";
import Preloader from "./components/Preloader";
import JsonLd from "./components/JsonLd";
import Analytics from "./components/Analytics";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "WhatsApp AI automation",
    "WhatsApp lead follow-up",
    "Meta ads lead automation",
    "Google review automation",
    "RTO prevention",
    "Bhopal",
  ],
  authors: [{ name: siteConfig.founder.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/images/clivik-og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — WhatsApp Automation & Digital Solutions`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/images/clivik-og.png"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0d0e1a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body>
        <Preloader />
        <Analytics />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
