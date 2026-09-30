"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";
import { IconCheck, IconShield, IconWhatsApp } from "../components/icons";

const plans = [
  {
    name: "Lead Reply Plan",
    desc: "Instant response & qualification for businesses losing ad leads",
    price: "₹4,999",
    featured: false,
    type: "One-time setup",
    features: [
      "Free 7-Day Lead Audit First",
      "Instant WhatsApp Auto-Reply (<10s)",
      "Lead Qualification & Intent Screening",
      "Google Calendar & Meet Slot Booking",
      "Instant Team Notifications on WhatsApp",
      "15 Days Free Post-Launch Support",
    ],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Lead Reply plan (₹4,999). Please guide me.",
  },
  {
    name: "Follow-up Autopilot",
    desc: "Multi-day smart follow-ups that turn cold leads into closed customers",
    price: "₹14,999",
    featured: true,
    badge: "Most Popular",
    type: "One-time setup",
    features: [
      "Free 7-Day Lead Audit First",
      "Everything in Lead Reply Plan",
      "30-Day WhatsApp Follow-up Autopilot",
      "Smart Stop-on-Reply Conversational Logic",
      "Meta Ads & Inbound Lead Webhook Sync",
      "Live Google Sheets / CRM Integration",
      "30 Days Free Post-Launch Support",
    ],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Follow-up Autopilot plan (₹14,999). Please guide me.",
  },
  {
    name: "Full Sales Engine",
    desc: "End-to-end sales automation with review collection & multi-channel routing",
    price: "₹29,999",
    featured: false,
    type: "One-time setup",
    features: [
      "Free 7-Day Lead Audit First",
      "Everything in Follow-up Autopilot",
      "Google Review Automation (Private bad review filter)",
      "RTO & COD Order Confirmation Workflows",
      "Multi-Agent Objection Handling & Voice Handoff",
      "Priority Same-Day WhatsApp Support",
      "60 Days Free Post-Launch Support",
    ],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Full Sales Engine plan (₹29,999). Please guide me.",
  },
];

const websiteAddons = [
  {
    title: "Starter Website",
    desc: "5-page fast responsive website with WhatsApp click-to-chat & local SEO setup.",
    price: "₹4,999",
    delivery: "5-Day Delivery",
  },
  {
    title: "Growth Website",
    desc: "10-page custom website with lead capture forms, local SEO, and full mobile optimization.",
    price: "₹9,999",
    delivery: "5-Day Delivery",
  },
  {
    title: "E-Commerce / Custom Store",
    desc: "Product catalog, online ordering, and automated WhatsApp order notifications.",
    price: "₹19,999",
    delivery: "7-Day Delivery",
  },
];

const stats = [
  { n: "₹4,999", label1: "Starting", label2: "Price" },
  { n: "5 Days", label1: "Live", label2: "Deployment" },
  { n: "100%", label1: "Free", label2: "Lead Audit" },
];

const faqs = [
  { q: "Do I need to pay upfront?", a: "No. We start with a free 7-day lead audit and live demo workflow. You only pay once you approve the automation plan." },
  { q: "How long does setup take?", a: "Setup takes only 3 to 5 business days. Our engineering team handles Meta WhatsApp Cloud API verification, workflow configuration, CRM/Sheets integration, and end-to-end testing." },
  { q: "Are there any hidden software charges?", a: "None. Our setup is a transparent one-time investment. Meta includes 1,000 free service conversations per month, and we show you exact operational costs beforehand." },
  { q: "What support is included after launch?", a: "Every plan includes 15 to 60 days of free dedicated support. We monitor live conversations, optimize prompt handling, and tune follow-up triggers at no extra cost." },
  { q: "Can I add a website later?", a: "Yes! Websites are available as an add-on at any time, custom engineered to route visitors straight into your WhatsApp AI sales system." },
];

export default function PricingContent() {
  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient */}
      <section
        style={{
          background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
          paddingTop: "var(--subpage-hero-pt, 208px)",
          paddingBottom: 32,
          paddingLeft: "clamp(20px,6vw,120px)",
          paddingRight: "clamp(20px,6vw,120px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Orbs */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-80px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", bottom: "0px", right: "10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(139,92,246,0.4)", color: "#fff", fontSize: "0.875rem", fontWeight: 500, marginBottom: 24 }}>
            Transparent Pricing
          </div>
          <h1 style={{ fontSize: "clamp(3.1em, 7.1vw, 5.1em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 16 }}>
            Smart Pricing for<br />WhatsApp AI Automation
          </h1>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)", maxWidth: 520, margin: "0 auto" }}>
            Capture, qualify, follow up and close leads on WhatsApp — without manual overhead or hidden fees.
          </p>

          <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, position: "relative", zIndex: 10 }}>
            {["Free lead audit first", "No upfront payment", "5-day deployment"].map(trust => (
              <span
                key={trust}
                style={{
                  padding: "8px 16px",
                  borderRadius: 999,
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {trust}
              </span>
            ))}
          </div>

          <Link
            href="/#get-in-touch"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              marginTop: 48,
              padding: "14px 32px",
              minHeight: 48,
              borderRadius: 12,
              background: "#fff",
              color: "#3730a3",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 700,
              position: "relative",
              zIndex: 10,
              boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)";
            }}
          >
            <span>Get a Free Lead Audit</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 180, background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      <section style={{ background: "#f2f2f7", padding: "0 clamp(20px,6vw,120px) 60px" }}>
        {/* Plans */}
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start", marginBottom: 60 }}>
            {plans.map(plan => (
              <div
                key={plan.name}
                style={{
                  background: plan.featured ? "#fff" : "#12131f",
                  border: plan.featured ? "2px solid #6c3bff" : "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 24,
                  padding: "40px 32px",
                  color: plan.featured ? "#0d0e1a" : "#fff",
                  transform: plan.featured ? "scale(1.04)" : "scale(1)",
                  boxShadow: plan.featured ? "0 28px 80px rgba(108,59,255,0.28)" : "0 8px 30px rgba(0,0,0,0.15)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  position: plan.featured ? "relative" : "static",
                  zIndex: plan.featured ? 10 : 1,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <h2 style={{ fontSize: "1.4em", fontWeight: 800 }}>{plan.name}</h2>
                  {plan.badge && (
                    <span style={{ padding: "4px 12px", borderRadius: 999, background: "#6c3bff", color: "#fff", fontSize: "0.8125rem", fontWeight: 600 }}>{plan.badge}</span>
                  )}
                </div>
                <p style={{ fontSize: "1rem", color: plan.featured ? "#374151" : "rgba(255,255,255,0.88)", marginBottom: 28, lineHeight: 1.5, whiteSpace: "pre-line" }}>{plan.desc}</p>
                <div style={{ marginBottom: 32 }}>
                  <span style={{ fontSize: "3em", fontWeight: 900, letterSpacing: "-0.03em" }}>{plan.price}</span>
                  <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: plan.featured ? "#4b5563" : "rgba(255,255,255,0.8)", marginLeft: 8 }}>{plan.type}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36, flexGrow: 1 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95em" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: plan.featured ? "#6c3bff" : "rgba(255,255,255,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <IconCheck size={10} color="#fff" />
                      </div>
                      <span style={{ color: plan.featured ? "#1f2937" : "rgba(255,255,255,0.92)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/916265022474?text=${encodeURIComponent(plan.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    width: "100%",
                    padding: "14px 20px",
                    minHeight: 48,
                    borderRadius: 12,
                    background: plan.featured ? "#6c3bff" : "rgba(255,255,255,0.12)",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1rem",
                    fontWeight: 700,
                    textAlign: "center",
                    transition: "transform 0.2s, background 0.2s, opacity 0.2s",
                    border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.15)",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = plan.featured ? "#5a2fe0" : "rgba(255,255,255,0.2)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = plan.featured ? "#6c3bff" : "rgba(255,255,255,0.12)";
                    (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                  }}
                >
                  <span>{plan.btnText.replace("→", "").trim()}</span>
                  <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
                </a>
              </div>
            ))}
          </div>

          {/* Add-on: Website Block */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: 24,
              padding: "clamp(28px, 4vw, 44px)",
              border: "1px solid rgba(0,0,0,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              marginBottom: 60,
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 20, marginBottom: 32, borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: 24 }}>
              <div>
                <span style={{ padding: "6px 14px", borderRadius: 999, background: "rgba(108,59,255,0.08)", color: "#6c3bff", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-block", marginBottom: 12 }}>
                  ADD-ON PACKAGES
                </span>
                <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#0d0e1a", margin: 0, letterSpacing: "-0.03em" }}>
                  Add-on: Websites &amp; Digital Storefronts
                </h3>
              </div>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", maxWidth: 480, margin: 0, lineHeight: 1.6 }}>
                Need a modern website to pair with your WhatsApp AI? Custom-designed to drive visitors directly into WhatsApp conversations.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {websiteAddons.map((addon, i) => (
                <div key={i} style={{ background: "#f8f9fa", borderRadius: 16, padding: "24px", border: "1px solid rgba(0,0,0,0.06)", display: "flex", flexDirection: "column" }}>
                  <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#0d0e1a", marginBottom: 6 }}>{addon.title}</h4>
                  <p style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.5, marginBottom: 16, flexGrow: 1 }}>{addon.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 14 }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: 800, color: "#6c3bff" }}>{addon.price}</span>
                    <span style={{ fontSize: "0.8rem", color: "#6b7280", fontWeight: 500 }}>{addon.delivery}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div style={{ background: "#0d0e1a", borderRadius: 24, padding: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 40, marginBottom: 40, textAlign: "center" }}>
            {stats.map(s => (
              <div key={s.label1}>
                <div style={{ fontSize: "3.2em", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", marginTop: 8 }}>{s.label1} {s.label2}</div>
              </div>
            ))}
          </div>

          {/* Not sure */}
          <div style={{ background: "#fff", borderRadius: 24, padding: "36px", textAlign: "center", border: "1px solid rgba(0,0,0,0.07)", marginBottom: 120 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "1.3em", fontWeight: 700, color: "#0d0e1a", marginBottom: 12 }}>
              <IconShield size={22} color="#6c3bff" /> Not sure which plan is right for your lead volume?
            </div>
            <p style={{ color: "#4b5563", lineHeight: 1.7, marginBottom: 28, fontSize: "1rem" }}>
              WhatsApp us — we&apos;ll audit your current lead flow and suggest the most profitable setup for YOUR business. Free consultation. Zero pressure.
            </p>
            <a
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20a%20free%20lead%20audit%20/%20live%20WhatsApp%20AI%20demo."
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#25D366", color: "#fff", padding: "14px 36px", minHeight: 48, borderRadius: 12, fontSize: "1rem", fontWeight: 700, textDecoration: "none", transition: "transform 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              <IconWhatsApp size={18} color="#fff" />
              <span>Chat on WhatsApp</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </a>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "var(--title-size)", fontWeight: 700, color: "#0d0e1a", marginBottom: 32, textAlign: "center", fontFamily: "'FullerSansDT', 'Inter', sans-serif" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "1.05em", marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: "#4b5563", lineHeight: 1.7, fontSize: "1rem" }}>{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
