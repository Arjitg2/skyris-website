"use client";
import ScrollReveal from "./ScrollReveal";
import { useState } from "react";
import { IconZap } from "./icons";

const faqs = [
  {
    n: "01/",
    q: "Can we use our existing WhatsApp Business number?",
    a: "Yes. If your number is on the WhatsApp Business app, we connect it using Meta's Coexistence mode. Your number stays the same, your ads keep working, and you can still reply from your phone while the AI handles the automation. If you use regular WhatsApp, we first help you switch to the Business app.",
  },
  {
    n: "02/",
    q: "Is there any risk of our WhatsApp number getting banned?",
    a: "We use only Meta's official WhatsApp Cloud API, never unofficial QR-scan tools, which are the main cause of bans. We follow opt-in rules and use approved templates for follow-ups.",
  },
  {
    n: "03/",
    q: "Can it integrate with our existing Meta ads, Google Sheets, or CRM?",
    a: "Yes. Inbound leads from Meta Lead Ads, Google Ads, or your website form route into the WhatsApp AI agent in under 10 seconds via instant webhooks. All qualification details, chat summaries, and booked demo slots sync live to Google Sheets or your existing CRM.",
  },
  {
    n: "04/",
    q: "Does the AI support Hindi, Hinglish, and regional phrasing?",
    a: "Yes. Clivik AI natively understands and communicates in conversational Hinglish (70% English / 30% Hindi), pure Hindi, and fluent English. It dynamically mirrors the lead's preferred tone and language so conversations feel warm, relatable, and human.",
  },
  {
    n: "05/",
    q: "How long does setup take and what is needed from our team?",
    a: "Setup takes only 3 to 5 business days. All we need from your team is your service/pricing details, common FAQs, and your calendar availability. Our engineering team handles all Meta API configurations, prompt architecture, workflow testing, and integrations from start to finish.",
  },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid rgba(0,0,0,0.06)",
        overflow: "hidden",
        boxShadow: open ? "0 6px 28px rgba(0,0,0,0.09)" : "0 1px 4px rgba(0,0,0,0.04)",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <button
        suppressHydrationWarning
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          minHeight: 56,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: 16,
          fontFamily: "inherit",
          fontSize: "1rem",
        }}
      >
        <span style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#0d0e1a", display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ color: "#6c3bff", fontSize: "0.9375rem", fontWeight: 700, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{faq.n}</span>
          <span>{faq.q}</span>
        </span>

        {/* Plus → X */}
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: open ? "#6c3bff" : "rgba(0,0,0,0.06)",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.3s ease",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              width: 12,
              height: 2,
              borderRadius: 2,
              background: open ? "#fff" : "#1f2937",
              transition: "background 0.3s ease",
            }}
          />
          <span
            style={{
              position: "absolute",
              width: 2,
              height: 12,
              borderRadius: 2,
              background: open ? "#fff" : "#1f2937",
              transform: open ? "scaleY(0)" : "scaleY(1)",
              transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease",
              transformOrigin: "center",
            }}
          />
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? "280px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ padding: "0 24px 24px 24px", paddingLeft: "56px" }}>
          <p style={{ fontSize: "1rem", color: "#4b5563", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

function RoiCalculator() {
  const [leads, setLeads] = useState<number>(150);
  const [dealValue, setDealValue] = useState<number>(5000);

  // Estimates based on sales metrics:
  // Delayed replies drop ~40% of leads.
  // Instant reply in under 10s + 30-day follow-up recovers ~20% of otherwise lost leads.
  const recoveredLeads = Math.round(leads * 0.22);
  const recoveredRevenue = recoveredLeads * dealValue;

  return (
    <div
      style={{
        background: "linear-gradient(160deg, #0d0e1a 0%, #16182e 100%)",
        borderRadius: 24,
        padding: "clamp(24px, 4vw, 36px)",
        border: "1px solid rgba(108,59,255,0.3)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
        color: "#ffffff",
        marginBottom: 56,
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(108,59,255,0.25)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
            <IconZap size={20} color="#c4b5fd" />
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, margin: 0, color: "#fff" }}>
              WhatsApp AI Lead Recovery Calculator
            </h3>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>
              Estimate how many lost ad inquiries you can convert into revenue
            </span>
          </div>
        </div>

        <div style={{ padding: "6px 14px", borderRadius: 999, background: "rgba(108,59,255,0.18)", border: "1px solid rgba(108,59,255,0.35)", fontSize: "0.75rem", fontWeight: 700, color: "#c4b5fd", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          ROI ESTIMATOR
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 24 }}>
        {/* Input 1 */}
        <div>
          <label style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginBottom: 8, fontWeight: 500 }}>
            Monthly Inbound Leads: <strong style={{ color: "#c4b5fd", fontSize: "1rem" }}>{leads}</strong>
          </label>
          <input
            type="range"
            min={30}
            max={600}
            step={10}
            value={leads}
            onChange={e => setLeads(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#6c3bff", cursor: "pointer" }}
          />
        </div>

        {/* Input 2 */}
        <div>
          <label style={{ display: "block", fontSize: "0.85rem", color: "rgba(255,255,255,0.8)", marginBottom: 8, fontWeight: 500 }}>
            Average Deal / Student Value: <strong style={{ color: "#c4b5fd", fontSize: "1rem" }}>₹{dealValue.toLocaleString("en-IN")}</strong>
          </label>
          <input
            type="range"
            min={1000}
            max={30000}
            step={1000}
            value={dealValue}
            onChange={e => setDealValue(Number(e.target.value))}
            style={{ width: "100%", accentColor: "#6c3bff", cursor: "pointer" }}
          />
        </div>
      </div>

      {/* Outputs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 16,
          padding: "20px 24px",
          borderRadius: 16,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div>
          <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>Estimated Extra Demos / Month</div>
          <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#c4b5fd", marginTop: 4 }}>
            +{recoveredLeads} Demos
          </div>
        </div>

        <div>
          <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.7)" }}>Potential Revenue Recovered</div>
          <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#34d399", marginTop: 4 }}>
            ₹{recoveredRevenue.toLocaleString("en-IN")}
          </div>
        </div>
      </div>

      {/* Prominent One-Line Example */}
      <div style={{ marginTop: 18, fontSize: "0.875rem", color: "rgba(255,255,255,0.85)", fontStyle: "italic", lineHeight: 1.5 }}>
        💡 <strong>One-Line ROI Example (Illustrative example, not a guarantee):</strong> If you spend ₹30,000 on Meta ads and get 100 leads, saving just 3 extra conversions with instant reply in under 10 seconds pays for the entire year.
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: "#f2f2f7", padding: "calc(var(--sec-py) * 0.8) var(--sec-px)" }}>
      <ScrollReveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" as any }}>
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
              Frequently Asked Questions
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
              Everything You Need to Know About WhatsApp AI
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.0625rem", maxWidth: 660, margin: "0 auto", lineHeight: 1.6 }}>
              Direct answers to common questions about response times, language naturalness, and booking mechanics.
            </p>
          </div>

          {/* Interactive ROI Calculator */}
          <RoiCalculator />

          {/* 5-Question FAQ Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, maxWidth: 840, margin: "0 auto" }}>
            {faqs.map(faq => (
              <FAQItem key={faq.n} faq={faq} />
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
