"use client";
import ScrollReveal from "./ScrollReveal";
import { IconBot, IconZap, IconCalendar, IconCheck, IconWhatsApp, IconGlobe } from "./icons";

const primaryCapabilities = [
  {
    num: "01",
    title: "AI Lead Qualification",
    desc: "Automatically identifies serious prospects and filters tire-kickers based on your exact criteria.",
    bullets: ["Screens budget, intent & timeline", "Answers common FAQs automatically", "Replaces long, friction-heavy forms"],
  },
  {
    num: "02",
    title: "Instant WhatsApp Response",
    desc: "Responds immediately in under 10 seconds — proving your speed to the lead 24/7, even outside business hours.",
    bullets: ["Under 10-second automated reply", "24/7 round-the-clock availability", "Prevents leads from checking competitors"],
  },
  {
    num: "03",
    title: "30-Day Follow-Up Autopilot",
    desc: "Multi-touch conversational check-ins across 30 days that gently nurture quiet leads until they convert.",
    bullets: ["Brings cold & unanswered leads back", "Smart stop-on-reply logic", "Zero manual texting required from staff"],
  },
  {
    num: "04",
    title: "Appointment & Demo Booking",
    desc: "Offers real-time slots and books calls, demos and appointments automatically without back-and-forth.",
    bullets: ["Direct Google Calendar integration", "Auto-generates Google Meet links", "Instant confirmation to customer & team"],
  },
  {
    num: "05",
    title: "Google Review Automation",
    desc: "Automated post-service prompts with private filtering of bad reviews so unhappy clients give private feedback while happy customers are guided to leave 5-star Google reviews.",
    bullets: ["Private filtering of bad ratings (1-3 stars)", "Direct 5-star Google Maps review links", "Boosts local search rankings & trust"],
  },
  {
    num: "06",
    title: "RTO & COD Order Confirmation",
    desc: "Instant WhatsApp confirmation & address validation for Cash-on-Delivery orders, reducing fake orders and cutting return shipping losses.",
    bullets: ["Instant order verification via WhatsApp", "Detects incorrect addresses & fake orders", "Cuts RTO losses by 30% to 45%"],
  },
];

const additionalSolutions = [
  {
    icon: <IconWhatsApp size={24} color="#a78bfa" />,
    title: "WhatsApp Marketing & Broadcasts",
    desc: "Meta-verified broadcast campaigns and seasonal offers with high engagement for existing customer re-activation.",
    tag: "Campaigns & Offers",
  },
  {
    icon: <IconGlobe size={24} color="#a78bfa" />,
    title: "Conversion-Focused Websites",
    desc: "Modern, high-converting digital storefronts custom-built to drive visitors straight into WhatsApp conversations.",
    tag: "Add-On: Web Design",
  },
  {
    icon: <IconZap size={24} color="#a78bfa" />,
    title: "CRM & API Integrations",
    desc: "Connect your WhatsApp AI with n8n, Meta Ads, Google Sheets, internal CRMs, and webhook-driven backend workflows.",
    tag: "Custom Automations",
  },
];

export default function CoreSolutions() {
  return (
    <section id="solutions" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <ScrollReveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
                borderRadius: 999,
                background: "#fff",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#6c3bff",
                border: "1px solid rgba(108,59,255,0.2)",
                marginBottom: 20,
                boxShadow: "0 2px 8px rgba(108,59,255,0.06)",
                fontFamily: "'FullerSansDT', 'Inter', sans-serif",
              }}
            >
              Solutions Architecture
            </div>
            <h2
              style={{
                fontSize: "var(--title-size)",
                fontWeight: 700,
                color: "#0d0e1a",
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                maxWidth: 900,
                margin: "0 auto 16px",
                fontFamily: "'FullerSansDT', 'Inter', sans-serif",
              }}
            >
              Engineered for Lead-Driven Businesses
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.0625rem", maxWidth: 660, margin: "0 auto", lineHeight: 1.6 }}>
              A unified AI infrastructure that captures, qualifies, nurtures, and books appointments on WhatsApp with zero manual effort.
            </p>
          </div>

          {/* PRIMARY: WhatsApp AI Automation */}
          <div
            style={{
              background: "linear-gradient(160deg, #0d0e1a 0%, #17182f 100%)",
              borderRadius: 32,
              padding: "clamp(28px, 5vw, 56px)",
              boxShadow: "0 24px 64px rgba(108,59,255,0.18)",
              border: "1px solid rgba(108,59,255,0.3)",
              marginBottom: 40,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Subtle Top Glow */}
            <div
              style={{
                position: "absolute",
                top: -80,
                left: "20%",
                width: 400,
                height: 200,
                background: "radial-gradient(circle, rgba(108,59,255,0.3) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "flex-end",
                gap: 20,
                marginBottom: 40,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                paddingBottom: 28,
              }}
            >
              <div>
                <span
                  style={{
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "rgba(108,59,255,0.25)",
                    border: "1px solid rgba(108,59,255,0.4)",
                    color: "#c4b5fd",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    display: "inline-block",
                    marginBottom: 12,
                  }}
                >
                  Primary Flagship Solution
                </span>
                <h3
                  style={{
                    color: "#ffffff",
                    fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    margin: 0,
                  }}
                >
                  WhatsApp AI Automation
                </h3>
              </div>
              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1rem",
                  maxWidth: 480,
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                The complete autonomous system that turns cold clicks into booked appointments and ready-to-close customers.
              </p>
            </div>

            {/* 4 Capabilities Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 24,
              }}
            >
              {primaryCapabilities.map((cap, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    borderRadius: 20,
                    padding: "28px 24px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.borderColor = "rgba(108,59,255,0.5)";
                    el.style.background = "rgba(108,59,255,0.1)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      color: "#a78bfa",
                      marginBottom: 12,
                    }}
                  >
                    {cap.num}
                  </div>
                  <h4
                    style={{
                      color: "#ffffff",
                      fontSize: "1.1875rem",
                      fontWeight: 700,
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    {cap.title}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    {cap.desc}
                  </p>
                  <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
                    {cap.bullets.map((b, bi) => (
                      <div key={bi} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ color: "#c4b5fd", fontSize: "0.875rem" }}>✓</span>
                        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.8125rem" }}>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Banner */}
            <div
              style={{
                marginTop: 32,
                padding: "16px 24px",
                borderRadius: 16,
                background: "rgba(108, 59, 255, 0.12)",
                border: "1px solid rgba(108, 59, 255, 0.28)",
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: "1.25rem" }}>🛡️</span>
              <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.875rem", margin: 0, lineHeight: 1.5 }}>
                <strong style={{ color: "#c4b5fd" }}>Built on Meta&apos;s official WhatsApp Cloud API.</strong> Opt-in based messaging, approved templates for follow-ups, instant unsubscribe honoring.
              </p>
            </div>
          </div>

          {/* ADDITIONAL SOLUTIONS */}
          <div>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <span
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  color: "#4b5563",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Additional Solutions
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: 20,
              }}
            >
              {additionalSolutions.map((sol, i) => (
                <div
                  key={i}
                  style={{
                    background: "#ffffff",
                    borderRadius: 20,
                    padding: "28px 24px",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-4px)";
                    el.style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: "rgba(108,59,255,0.1)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {sol.icon}
                    </div>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#6c3bff",
                        background: "rgba(108,59,255,0.06)",
                        padding: "4px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {sol.tag}
                    </span>
                  </div>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#0d0e1a", marginBottom: 8 }}>
                    {sol.title}
                  </h4>
                  <p style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
                    {sol.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
