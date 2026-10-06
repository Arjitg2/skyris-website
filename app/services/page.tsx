"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FAQ from "../components/FAQ";
import Link from "next/link";
import { IconGlobe, IconMapPin, IconSmartphone, IconBot, IconZap, IconShield, IconCheck, IconWhatsApp, IconRefreshCw, IconStar } from "../components/icons";

const services = [
  {
    icon: <IconZap size={28} color="#a78bfa" />,
    title: "AI Speed-to-Lead",
    price: "",
    desc: "7-second automated WhatsApp replies to instantly capture and qualify every inbound lead.",
    bullets: [
      "7-Second Instant Auto-Replies",
      "24/7 Smart Lead Qualification",
      "Automated Demo & Booking Setup",
      "Instant Team Notification Alerts",
      "Direct Meta Ads & CRM Sync",
      "Intelligent FAQ Handling",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconRefreshCw size={28} color="#a78bfa" />,
    title: "30-Day Follow-Up Autopilot",
    price: "",
    desc: "Stop losing leads who don't buy on day one. Automated nurturing sequences that convert.",
    bullets: [
      "Multi-Day Nurturing Sequences",
      "Abandoned Lead & Form Recovery",
      "Automated Appointment Reminders",
      "Long-Term Prospect Re-engagement",
      "Custom Delay & Condition Timers",
      "Seamless CRM Pipeline Updating",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconWhatsApp size={28} color="#a78bfa" />,
    title: "WhatsApp Broadcast Marketing",
    price: "",
    desc: "Turn your existing contact list into instant revenue with high-conversion promotional campaigns.",
    bullets: [
      "Bulk Promotional Broadcasts",
      "Festival & Special Offer Campaigns",
      "Targeted Customer Segmentation",
      "Past Client Reactivation Workflows",
      "Official WhatsApp API Compliance",
      "Comprehensive Campaign Analytics",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconStar size={28} color="#a78bfa" />,
    title: "Google Review Automation",
    price: "",
    desc: "Build a 5-star local reputation on autopilot by capturing positive feedback immediately after service.",
    bullets: [
      "Automated Post-Service Requests",
      "5-Star Public Review Routing",
      "Private Feedback for Complaints",
      "Local SEO & Map Ranking Boost",
      "Video Testimonial Collection",
      "Hands-Free Reputation Management",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconGlobe size={28} color="#a78bfa" />,
    title: "Lead-Generation Web Design",
    price: "",
    desc: "Fast, mobile-first websites engineered specifically to capture traffic and convert it into WhatsApp leads.",
    bullets: [
      "Conversion-Optimized Layouts",
      "Mobile-First Responsive Design",
      "Persistent Click-to-Chat Buttons",
      "Custom Lead Capture Forms",
      "Lightning-Fast Loading Speeds",
      "Premium Technical Deployment",
    ],
    accent: "#a78bfa",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient exactly */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: "var(--subpage-hero-pt, 208px)",
        paddingBottom: 16,
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
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(139,92,246,0.4)", color: "#fff", fontSize: "0.875rem", fontWeight: 500, marginBottom: 24 }}>
            What We Do
          </div>
          <h1 style={{ fontSize: "clamp(3.1em, 7.1vw, 5.1em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 16 }}>
            Five Services.<br />One Goal — More Customers, Less Manual Work.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)", maxWidth: 500, margin: "0 auto 32px" }}>
            Everything a local business needs to get found online — delivered in 5 days, at a price that makes sense.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "14px 32px", minHeight: 48, borderRadius: 12,
            background: "#fff", color: "#3730a3", textDecoration: "none",
            fontSize: "1rem", fontWeight: 700,
            boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
          >
            <span>Get Free Consultation</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>

          <div style={{ 
            marginTop: 96, 
            display: "inline-flex", 
            flexWrap: "wrap", 
            justifyContent: "center", 
            alignItems: "center",
            gap: 16,
            background: "#fff", 
            padding: "16px 28px", 
            borderRadius: 16, 
            border: "1px solid rgba(0,0,0,0.08)", 
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
            backdropFilter: "none",
            fontSize: "0.9375rem",
            color: "#161726",
            fontWeight: 500
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>⚡ AI-Powered Automation</span>
            <span style={{ color: "rgba(0,0,0,0.2)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>5-Day Delivery</span>
            <span style={{ color: "rgba(0,0,0,0.2)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>Same-Day WhatsApp Setup</span>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Services Grid */}
      <section style={{ background: "#f2f2f7", padding: "72px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 32 }}>
          {services.map((s) => (
            <div key={s.title} style={{
              flex: "1 1 330px",
              maxWidth: 440,
              background: "#fff", borderRadius: 24, padding: "40px 32px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.06)",
              display: "flex", flexDirection: "column",
              height: "100%",
              transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = s.accent; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.06)"; }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: `${s.accent}15`, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                {/* Clone icon with smaller size since container is smaller */}
                {s.icon.type({ ...s.icon.props, size: 22 })}
              </div>
              <h2 style={{ fontSize: "1.35em", fontWeight: 700, color: "#161726", marginBottom: 10 }}>{s.title}</h2>
              <p style={{ color: "rgba(0,0,0,0.7)", fontSize: "0.95em", lineHeight: 1.6, marginBottom: 24 }}>{s.desc}</p>
              
              <div style={{ height: "1px", background: "rgba(0,0,0,0.06)", marginBottom: 24, width: "100%" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
                {s.bullets.map(b => (
                  <li key={b} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "0.9em", color: "rgba(0,0,0,0.78)" }}>
                    <div style={{ flexShrink: 0, display: "flex" }}>
                      <IconCheck size={16} color={s.accent} />
                    </div>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f2f2f7", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)", textAlign: "center" }}>
        <div style={{ background: "#0d0e1a", borderRadius: 32, padding: "64px 32px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "var(--title-size)", fontWeight: 600, color: "#fff", lineHeight: 1.15, letterSpacing: "-0.04em", fontFamily: "'FullerSansDT', 'Inter', sans-serif", marginBottom: 16 }}>Not sure which service you need?</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1em", marginBottom: 32 }}>WhatsApp us — we'll guide you to the right solution. Free advice, zero pressure.</p>
          <a
            href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20know%20more%20about%20your%20services."
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "14px 32px", minHeight: 48, borderRadius: 12, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: 700, transition: "transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            <IconWhatsApp size={20} color="#fff" />
            <span>Chat on WhatsApp</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
