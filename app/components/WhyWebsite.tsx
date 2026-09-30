"use client";
import ScrollReveal from "./ScrollReveal";
import { IconWhatsApp, IconGlobe, IconBot, IconZap, IconCheck } from "./icons";

const services = [
  {
    icon: <IconBot size={28} color="#a78bfa" />,
    title: "WhatsApp Lead Qualification",
    desc: "Auto-replies, lead screening & calendar bookings — 24/7 on complete autopilot",
    bullets: [
      "Instant replies in under 10 seconds 24/7",
      "Screen serious buyers from tire-kickers",
      "Automated appointment scheduling",
      "CRM & Google Sheets integration",
      "Zero missed inquiries while you sleep",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconZap size={28} color="#a78bfa" />,
    title: "30-Day WhatsApp Follow-up Autopilot",
    desc: "Multi-touch conversational sequences that prevent warm leads from going cold",
    bullets: [
      "Timed gentle WhatsApp check-ins",
      "Recover 20%–40% of abandoned leads",
      "Answer objections & FAQs automatically",
      "Smart stop-on-reply logic",
      "No manual texting required",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconWhatsApp size={28} color="#a78bfa" />,
    title: "WhatsApp Marketing",
    desc: "Broadcast campaigns that drive repeat business, bookings & customer re-engagement",
    bullets: [
      "Up to 98% open rates & 45% clicks",
      "Promotional & festival campaigns",
      "Inactive customer re-engagement",
      "Meta-verified official templates",
      "Contact list segmentation",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconCheck size={28} color="#a78bfa" />,
    title: "Customer Review Automation",
    desc: "Automatically collect authentic 5-star Google reviews from satisfied clients",
    bullets: [
      "Automated post-service WhatsApp prompt",
      "1-tap direct link to Google review box",
      "3x to 5x more Google reviews in 30 days",
      "Elevate Google Maps local SEO ranking",
      "Build instant trust with nearby searchers",
    ],
    accent: "#a78bfa",
  },
  {
    icon: <IconGlobe size={28} color="#a78bfa" />,
    title: "Website & Landing Page Add-on",
    desc: "Fast, mobile-ready websites custom engineered to turn searchers into WhatsApp leads",
    bullets: [
      "Custom premium design (not generic templates)",
      "Mobile-first responsive architecture",
      "WhatsApp click-to-chat integration",
      "High-converting contact & inquiry forms",
      "5–7 day delivery + free audit first",
    ],
    accent: "#a78bfa",
  },
];

export default function WhyWebsite() {
  return (
    <section style={{
      background: "#f2f2f7", /* Outer light background */
      padding: "var(--pricing-outer-py) var(--pricing-outer-px) 0",
    }}>
      <ScrollReveal>
      <div style={{ maxWidth: 1280, margin: "0 auto", borderRadius: 40, overflow: "hidden", background: "linear-gradient(160deg, #0d0e1a 0%, #131525 100%)", padding: "var(--pricing-inner-py) var(--pricing-inner-px)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "calc(var(--sec-mb) * 1.3)" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center",
            padding: "8px 16px", borderRadius: 999,
            background: "rgba(255,255,255,0.12)", fontSize: "0.875rem", fontWeight: 500,
            color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)", marginBottom: 24,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>What We Do</div>
          <h2 style={{
            fontSize: "clamp(2em, 9vw, var(--title-size))", fontWeight: 600, color: "#fff",
            lineHeight: 1.15, letterSpacing: "-0.04em",
            margin: "0 auto",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif",
          }}>
            Five Services,<br className="mobile-br" /><span className="desktop-only"> </span>
            One Goal,<br className="mobile-br" /><span className="desktop-only"> </span>
            More Customers<span className="desktop-only"> For You.</span>
          </h2>
        </div>

        {/* 3x2 card grid */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 24 }}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 300px",
                maxWidth: 400,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "32px 28px",
                transition: "background 0.3s, border-color 0.3s, transform 0.3s",
                cursor: "default",
                display: "flex",
                flexDirection: "column",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(108,59,255,0.1)";
                el.style.borderColor = "rgba(108,59,255,0.35)";
                el.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.04)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "rgba(108,59,255,0.15)",
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: "1.35em", fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>
              
              {/* Bullets */}
              <div style={{ marginTop: "auto" }}>
                {s.bullets.map((b, bi) => (
                  <div key={bi} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <IconCheck size={16} color="#c4b5fd" />
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9375rem", lineHeight: "1.4" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
