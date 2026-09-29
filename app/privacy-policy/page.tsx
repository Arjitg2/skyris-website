import type { Metadata } from "next";
import PrivacyPolicyContent from "./PrivacyPolicyContent";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Clivik Digital Solutions — how we collect, use, and protect your information when using our website and services.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Clivik Digital Solutions",
    description:
      "Privacy Policy for Clivik Digital Solutions — how we collect, use, and protect your information when using our website and services.",
    url: `${siteConfig.url}/privacy-policy`,
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Clivik Digital Solutions",
    description:
      "Privacy Policy for Clivik Digital Solutions — how we collect, use, and protect your information when using our website and services.",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyContent />;
}
