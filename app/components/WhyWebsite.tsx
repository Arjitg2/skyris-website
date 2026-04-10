"use client";
import { IconGlobe, IconBot, IconShield, IconZap, IconMapPin, IconSmartphone } from "./icons";

const services = [
  {
    icon: <IconGlobe size={24} color="#6c3bff" />,
    title: "Website Development",
    desc: "Fast, premium, mobile-ready website live in 5 days",
    bullets: ["Custom pages", "WhatsApp btn", "Contact forms", "Maps embed"]
  },
  {
    icon: <IconMapPin size={24} color="#6c3bff" />,
    title: "Google Business Profile",
    desc: "Show up when locals search your business near me",
    bullets: ["Full setup", "Map placement", "Photos done", "Free always"]
  },
  {
    icon: <IconSmartphone size={24} color="#6c3bff" />,
    title: "Social Media Setup",
    desc: "Instagram + Facebook + WhatsApp Biz all setup professionally",
    bullets: ["Bio & brand", "First 5 posts", "Ready day 1"]
  },
  {
    icon: <IconBot size={24} color="#6c3bff" />,
    title: "AI WhatsApp Automation",
    desc: "Auto-replies, booking & lead capture on complete autopilot",
    bullets: ["Works 24/7", "Instant replies", "Lead capture auto", "No missed leads"]
  },
  {
    icon: <IconZap size={24} color="#6c3bff" />,
    title: "Speed & SEO Optimization",
    desc: "Lightning fast loading + local SEO built into every website",
    bullets: ["Faster load time", "Mobile optimized", "SEO ready pages", "Rank higher"]
  },
  {
    icon: <IconShield size={24} color="#6c3bff" />,
    title: "30-Day Free Support",
    desc: "We don't disappear after delivery. WhatsApp us anytime for 30 days — free",
    bullets: ["Quick fixes", "Minor changes", "Guidance support", "No extra charges"]
  },
];

export default function WhyWebsite() {
  return (
    <section style={{
      background: "#f2f2f7", /* Outer light background */
      padding: "var(--pricing-outer-py) var(--pricing-outer-px) 0",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", borderRadius: 40, overflow: "hidden", background: "linear-gradient(160deg, #0d0e1a 0%, #131525 100%)", padding: "calc(var(--pricing-inner-py) / 2) var(--pricing-inner-px) var(--pricing-inner-py)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" as any }}>
          <div style={{
            display: "inline-block", padding: "5px 14px", borderRadius: 999,
            background: "rgba(255,255,255,0.07)", fontSize: "1em", fontWeight: 500, /* Subheading size 1em */
            color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: 20,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>What We Do</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#fff",
            lineHeight: 1.1, letterSpacing: "-0.04em",
            maxWidth: "var(--title-max-width)", margin: "0 auto",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            Six Services, One Goal<br />More Customers For You.
          </h2>
        </div>

        {/* 3x2 card grid */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", gap: 20 }}>
          {services.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "36px 32px",
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
                width: 52, height: 52, borderRadius: 14,
                background: "rgba(108,59,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 24,
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ fontSize: "1em", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 20 }}>{s.desc}</p>
              
              {/* Bullets */}
              <div style={{ marginTop: "auto" }}>
                {s.bullets.map((b, bi) => (
                  <div key={bi} style={{ display: "flex", alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{ color: "#6c3bff", marginRight: 10, fontSize: "1.1em", lineHeight: "1.3" }}>→</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95em", lineHeight: "1.4" }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
