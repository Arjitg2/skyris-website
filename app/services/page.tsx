"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

import { IconGlobe, IconMapPin, IconSmartphone, IconBot, IconZap, IconShield, IconWhatsApp } from "../components/icons";

const services = [
  {
    icon: <IconGlobe size={32} color="#6c3bff" />,
    title: "Website Development",
    price: "Starting ₹3,999",
    desc: "A fast, mobile-ready, premium-looking website your customers will trust — live in just 5 days.",
    bullets: [
      "Up to 10 custom pages",
      "Mobile & desktop responsive",
      "WhatsApp chat button",
      "Contact & booking forms",
      "Google Maps embed",
      "Free deployment & hosting setup",
    ],
    accent: "#6c3bff",
  },
  {
    icon: <IconMapPin size={32} color="#0ea5e9" />,
    title: "Google Business Profile",
    price: "Free with every plan",
    desc: "Show up when people search 'near me' — we handle the full setup, photos, and optimization.",
    bullets: [
      "Full profile creation & verification",
      "Keyword-rich business description",
      "Photo & service catalog upload",
      "Map pin placement",
      "Review management guidance",
      "100% free with any package",
    ],
    accent: "#0ea5e9",
  },
  {
    icon: <IconSmartphone size={32} color="#ec4899" />,
    title: "Social Media Setup",
    price: "Included in Growth & Pro",
    desc: "Instagram, Facebook & WhatsApp Business — all setup professionally so you look credible from day 1.",
    bullets: [
      "Instagram & Facebook page branding",
      "Profile bio & link setup",
      "WhatsApp Business account",
      "First 5 posts designed & posted",
      "Story highlights created",
      "Content calendar guidance",
    ],
    accent: "#ec4899",
  },
  {
    icon: <IconBot size={32} color="#10b981" />,
    title: "AI WhatsApp Automation",
    price: "Included in Growth & Pro",
    desc: "Auto-replies, appointment booking and lead capture — working 24/7 even when you're asleep.",
    bullets: [
      "Instant auto-reply to all messages",
      "Appointment booking flow",
      "Lead capture with contact save",
      "FAQ auto-response setup",
      "Zero manual work required",
      "Works 24 hours a day",
    ],
    accent: "#10b981",
  },
  {
    icon: <IconZap size={32} color="#f59e0b" />,
    title: "Speed & SEO Optimization",
    price: "Included in all plans",
    desc: "Every website we build is lightning fast and SEO-ready so you rank higher on Google locally.",
    bullets: [
      "Compressed images & fast loads",
      "Mobile-first design",
      "Local SEO keywords built-in",
      "Proper meta tags & descriptions",
      "Google Search Console setup",
      "Sitemap submission",
    ],
    accent: "#f59e0b",
  },
  {
    icon: <IconShield size={32} color="#8b5cf6" />,
    title: "Post-Delivery Support",
    price: "15–60 days depending on plan",
    desc: "We don't disappear after delivery. WhatsApp us anytime — we'll fix, tweak, and guide you.",
    bullets: [
      "Quick bug fixes",
      "Minor content changes",
      "Guidance & how-to help",
      "No extra charges for support",
      "Same-day WhatsApp response",
      "Up to 60 days on Pro plan",
    ],
    accent: "#8b5cf6",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <section style={{
        background: "linear-gradient(160deg, #0d0e1a 0%, #131525 60%, #1a1b2e 100%)",
        paddingTop: 120,
        paddingBottom: 80,
        paddingLeft: "clamp(20px, 6vw, 120px)",
        paddingRight: "clamp(20px, 6vw, 120px)",
        textAlign: "center",
      }}>
        <div style={{ display: "inline-block", padding: "6px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontSize: "0.95em", fontWeight: 500, marginBottom: 24 }}>
          What We Offer
        </div>
        <h1 style={{ fontSize: "clamp(2.4em,5vw,4em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
          Six Services,<br />One Goal: More Customers
        </h1>
        <p style={{ fontSize: "1.15em", color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto 40px" }}>
          Everything a local business needs to get found online — delivered in 5 days, at a price that makes sense.
        </p>
        <Link href="/contact" style={{
          display: "inline-block", padding: "15px 36px", borderRadius: 12,
          background: "#6c3bff", color: "#fff", textDecoration: "none",
          fontSize: "1em", fontWeight: 700,
          boxShadow: "0 4px 24px rgba(108,59,255,0.3)",
        }}>
          Get Free Consultation →
        </Link>
      </section>

      {/* Services Grid */}
      <section style={{ background: "#0d0e1a", padding: "80px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {services.map((s) => (
            <div key={s.title} style={{
              background: "rgba(255,255,255,0.04)", borderRadius: 24, padding: "40px 36px",
              boxShadow: "none",
              border: "1px solid rgba(255,255,255,0.08)",
              borderTop: `4px solid ${s.accent}`,
              display: "flex", flexDirection: "column",
              transition: "transform 0.25s, box-shadow 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              <div style={{ marginBottom: 20 }}>{s.icon}</div>
              <h2 style={{ fontSize: "1.4em", fontWeight: 800, color: "#fff", marginBottom: 8 }}>{s.title}</h2>
              <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: 999, background: `${s.accent}24`, color: s.accent, fontSize: "0.85em", fontWeight: 600, marginBottom: 16, width: "fit-content" }}>{s.price}</div>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "auto", display: "flex", flexDirection: "column", gap: 10 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: "0.95em", color: "rgba(255,255,255,0.8)" }}>
                    <span style={{ color: s.accent, fontWeight: 700, flexShrink: 0 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d0e1a", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)", textAlign: "center" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 32, padding: "60px 40px", maxWidth: 800, margin: "0 auto", border: "1px solid rgba(255,255,255,0.08)" }}>
          <h2 style={{ fontSize: "clamp(1.8em,3.5vw,2.8em)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Not sure which service you need?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1em", marginBottom: 36 }}>WhatsApp us — we'll guide you to the right solution. Free advice, zero pressure.</p>
          <a
            href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20know%20more%20about%20your%20services."
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "15px 36px", borderRadius: 12, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: "1em", fontWeight: 700 }}
          >
            <IconWhatsApp size={20} color="#fff" /> Chat on WhatsApp →
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
