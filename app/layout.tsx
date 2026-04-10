import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skyris · Design Agency — Smarter Way to Build Your Website",
  description: "Skyris is a creative design agency offering premium custom websites at a fraction of the cost. Fast turnaround, seamless process, unlimited revisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
