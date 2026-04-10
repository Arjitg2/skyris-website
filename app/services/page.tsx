"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";
import { IconGlobe, IconMapPin, IconSmartphone, IconBot, IconZap, IconShield, IconCheck, IconWhatsApp } from "../components/icons";

const services = [
  {
    icon: <IconGlobe size={28} color="#6c3bff" />,
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
    icon: <IconMapPin size={28} color="#0ea5e9" />,
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
    icon: <IconSmartphone size={28} color="#ec4899" />,
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
    icon: <IconBot size={28} color="#10b981" />,
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
    icon: <IconZap size={28} color="#f59e0b" />,
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
    icon: <IconShield size={28} color="#8b5cf6" />,
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

      {/* Hero — matches home page gradient exactly */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: 100,
        paddingBottom: 64,
        paddingLeft: "clamp(20px, 6vw, 120px)",
        paddingRight: "clamp(20px, 6vw, 120px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Orbs */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-80px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", bottom: "0px", right: "10%", pointerEvents: "none" }} />
        {/* Circles */}
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(139,92,246,0.4)", color: "#e0d9ff", fontSize: "0.9em", fontWeight: 500, marginBottom: 20 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#c4b5fd", boxShadow: "0 0 6px #c4b5fd" }} />
            What We Offer
          </div>
          <h1 style={{ fontSize: "clamp(2.8em, 6.5vw, 4.6em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
            Six Services,<br />One Goal: More Customers
          </h1>
          <p style={{ fontSize: "1.1em", color: "rgba(255,255,255,0.75)", maxWidth: 500, margin: "0 auto 32px" }}>
            Everything a local business needs to get found online — delivered in 5 days, at a price that makes sense.
          </p>
          <Link href="/contact" style={{
            display: "inline-block", padding: "14px 32px", borderRadius: 12,
            background: "#fff", color: "#3730a3", textDecoration: "none",
            fontSize: "1em", fontWeight: 700,
            boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
          >
            Get Free Consultation →
          </Link>

          <div style={{ 
            marginTop: 48, 
            display: "inline-flex", 
            flexWrap: "wrap", 
            justifyContent: "center", 
            alignItems: "center",
            gap: 16,
            background: "rgba(0,0,0,0.3)", 
            padding: "12px 24px", 
            borderRadius: 16, 
            border: "1px solid rgba(255,255,255,0.1)", 
            backdropFilter: "blur(10px)",
            fontSize: "0.9em",
            color: "rgba(255,255,255,0.85)"
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#c4b5fd", fontWeight: 700 }}>150+</span> Websites Built</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#c4b5fd", fontWeight: 700 }}>5 Day</span> Delivery</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>Free Mockup First</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>Same-Day WhatsApp Reply</span>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(to bottom, transparent, #f2f2f7)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Services Grid */}
      <section style={{ background: "#f2f2f7", padding: "72px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {services.map((s) => (
            <div key={s.title} style={{
              background: "#161726", borderRadius: 20, padding: "32px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
              border: "1px solid rgba(255,255,255,0.06)",
              display: "flex", flexDirection: "column",
              height: "100%",
              transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)"; (e.currentTarget as HTMLElement).style.borderColor = s.accent; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.accent}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                {/* Clone icon with smaller size since container is smaller */}
                {s.icon.type({ ...s.icon.props, size: 22 })}
              </div>
              <h2 style={{ fontSize: "1.35em", fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95em", lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>
              
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: 24, width: "100%" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.9em", color: "rgba(255,255,255,0.8)" }}>
                    <span style={{ color: s.accent, fontSize: "1.2em", lineHeight: 1 }}>→</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f2f2f7", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)", textAlign: "center" }}>
        <div style={{ background: "#0d0e1a", borderRadius: 32, padding: "60px 40px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8em,3.5vw,2.8em)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Not sure which service you need?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1em", marginBottom: 36 }}>WhatsApp us — we'll guide you to the right solution. Free advice, zero pressure.</p>
          <a
            href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20know%20more%20about%20your%20services."
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 36px", borderRadius: 12, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: "1em", fontWeight: 700, transition: "transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            <IconWhatsApp size={20} color="#fff" />
            Chat on WhatsApp →
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
