import type { Metadata } from "next";
import TermsContent from "./TermsContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions governing the use of Clivik Digital Solutions' website, WhatsApp automation services, and web development deliverables.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms and Conditions | Clivik Digital Solutions",
    description:
      "Terms and Conditions governing the use of Clivik Digital Solutions' website, WhatsApp automation services, and web development deliverables.",
    url: `${siteConfig.url}/terms-of-service`,
  },
  twitter: {
    card: "summary",
    title: "Terms and Conditions | Clivik Digital Solutions",
    description:
      "Terms and Conditions governing the use of Clivik Digital Solutions' website, WhatsApp automation services, and web development deliverables.",
  },
};

export default function TermsOfServicePage() {
  return <TermsContent />;
}
