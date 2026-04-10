"use client";
import { useState } from "react";

const faqs = [
  { n: "01/", q: "How long does it take to build my website?", a: "Just 5 days from the moment you approve the mockup. While other agencies take 30–45 days, we deliver fast without compromising on quality. Guaranteed." },
  { n: "02/", q: "Do I need any technical knowledge?", a: "Zero. You just tell us about your business on WhatsApp. We handle everything — design, development, Google profile setup, social media. You focus on your business, we handle the tech." },
  { n: "03/", q: "What if I don't like the design?", a: "No problem at all. We create your custom mockup completely free before you pay a single rupee. Don't love it? We part ways as friends — zero charge, zero drama." },
  { n: "04/", q: "How much does it cost?", a: "Our packages start at just ₹3,999 — one time payment, no hidden charges. Jo price bataya wahi final price hai. No surprises after delivery. Ever." },
  { n: "05/", q: "Will my website work on mobile?", a: "100%. Every website we build is fully mobile-friendly and tested on all screen sizes. Most of your customers will visit from their phone — we make sure it looks perfect for them." },
  { n: "06/", q: "What is included in every package?", a: "Every package includes a mobile-friendly website, free Google Business Profile setup, WhatsApp button integration, free deployment and basic local SEO. No hidden add-ons. No surprise charges." },
  { n: "07/", q: "How do I reach you after delivery?", a: "Just WhatsApp us. We provide 30 to 60 days of free support after your website goes live — changes, fixes, questions, all covered. Same day response. Always." },
  { n: "08/", q: "Do you only work in Bhopal?", a: "We are based in Bhopal but serve businesses across all of M.P. Everything is handled remotely over WhatsApp — so location is never a problem for you." },
];

function FAQItem({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      background: "#fff", borderRadius: 16,
      border: "1px solid rgba(0,0,0,0.06)",
      overflow: "hidden",
      boxShadow: open ? "0 6px 28px rgba(0,0,0,0.09)" : "0 1px 4px rgba(0,0,0,0.04)",
      transition: "box-shadow 0.3s ease",
    }}>
      <button
        suppressHydrationWarning
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "22px 24px",
          background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16,
          fontFamily: "inherit", fontSize: "1em",
        }}
      >
        <span style={{ fontSize: "1.15em", fontWeight: 600, color: "#0d0e1a", display: "flex", gap: 12, alignItems: "center" }}>
          <span style={{ color: "#bbb", fontSize: "0.9em", fontWeight: 500, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{faq.n}</span>
          {faq.q}
        </span>

        {/* Plus → X — pure CSS transform, no layout shift, no jitter */}
        <span style={{
          width: 28, height: 28, borderRadius: "50%",
          background: open ? "#6c3bff" : "rgba(0,0,0,0.06)",
          display: "flex", alignItems: "center", justifyContent: "center",
          flexShrink: 0, transition: "background 0.3s ease",
          position: "relative",
        }}>
          {/* Horizontal bar */}
          <span style={{
            position: "absolute",
            width: 12, height: 2, borderRadius: 2,
            background: open ? "#fff" : "#333",
            transition: "background 0.3s ease",
          }} />
          {/* Vertical bar — collapses when open */}
          <span style={{
            position: "absolute",
            width: 2, height: 12, borderRadius: 2,
            background: open ? "#fff" : "#333",
            transform: open ? "scaleY(0)" : "scaleY(1)",
            transition: "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s ease",
            transformOrigin: "center",
          }} />
        </span>
      </button>

      {/* Smooth max-height reveal — NO mount/unmount, NO jitter */}
      <div style={{
        maxHeight: open ? "240px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.42s cubic-bezier(0.4, 0, 0.2, 1)",
      }}>
        <div style={{ padding: "0 24px 24px 24px", paddingLeft: "60px" }}>
          <p style={{ fontSize: "1em", color: "#666", lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ marginBottom: "var(--sec-mb)" as any }}>
          <div style={{
            display: "inline-block", padding: "5px 14px", borderRadius: 999,
            background: "#fff", fontSize: "1em", fontWeight: 500, color: "#111", /* Subheading size 1em */
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 20,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>FAQ</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
            lineHeight: 1.1, letterSpacing: "-0.04em", maxWidth: "var(--title-max-width)",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            Questions You&apos;re Probably<br/>Thinking Right Now.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", gap: 16, alignItems: "start" }}>
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
        </div>
      </div>
    </section>
  );
}
