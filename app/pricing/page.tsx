"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";
import { IconCheck, IconShield, IconWhatsApp } from "../components/icons";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for shops & small businesses\njust getting online",
    price: "₹3,999", featured: false, type: "One-time",
    features: ["5 Page Website", "Mobile Responsive", "Google Profile Setup", "WhatsApp Button", "Basic Local SEO", "Contact Form", "Social Links", "Free Deployment", "7 Day Delivery", "15 Day Support"],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Starter plan (₹3,999). Please guide me.",
  },
  {
    name: "Growth",
    desc: "For businesses ready to\ngrow faster online",
    price: "₹6,999", featured: true, badge: "Most Popular", type: "One-time",
    features: ["7 Page Website", "Premium Design", "WhatsApp Auto Reply", "Appointment Booking", "Lead Capture Form", "Google Maps Integration", "Fast Loading Speed", "5 Day Delivery", "30 Day Support", "Custom Domain Setup"],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Growth plan (₹6,999). Please guide me.",
  },
  {
    name: "Pro",
    desc: "For serious businesses wanting\ncomplete digital dominance",
    price: "₹11,999", featured: false, type: "One-time",
    features: ["10 Page Website", "Custom Premium Design", "Instagram DM Automation", "Monthly Report", "Priority Support", "Blog Section", "Advanced SEO", "Multiple Forms", "Email Notifications", "60 Day Support"],
    btnText: "Get Started →",
    waMsg: "Hi Clivik! I am interested in the Pro plan (₹11,999). Please guide me.",
  },
];

const stats = [
  { n: "₹3,999", label1: "Starting", label2: "Price" },
  { n: "5 Days", label1: "Live", label2: "Delivery" },
  { n: "100%", label1: "Free", label2: "Mockup First" },
];

const faqs = [
  { q: "Do I need to pay upfront?", a: "No. We build your free mockup first. You only pay once you love the design." },
  { q: "Are there any hidden charges?", a: "Absolutely none. The price we quote is the final price — forever." },
  { q: "What is the delivery time?", a: "Starter: 7 days. Growth: 5 days. Pro: 7 days. We guarantee on-time delivery." },
  { q: "Can I upgrade my plan later?", a: "Yes! You can move from Starter to Growth or Pro at any time, paying only the difference." },
  { q: "What if I need changes after delivery?", a: "Support is included for 15–60 days depending on your plan. Minor changes are free." },
];

export default function PricingPage() {
  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: 100,
        paddingBottom: 64,
        paddingLeft: "clamp(20px,6vw,120px)",
        paddingRight: "clamp(20px,6vw,120px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Orbs */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-80px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", bottom: "0px", right: "10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(139,92,246,0.4)", color: "#e0d9ff", fontSize: "0.9em", fontWeight: 500, marginBottom: 20 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#c4b5fd", boxShadow: "0 0 6px #c4b5fd" }} />
            Pricing
          </div>
          <h1 style={{ fontSize: "clamp(2.8em, 6.5vw, 4.6em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
            Smart Pricing for<br />Serious Businesses
          </h1>
          <p style={{ fontSize: "1.1em", color: "rgba(255,255,255,0.75)", maxWidth: 480, margin: "0 auto" }}>
            Everything you need to get customers online — without overpaying.
          </p>

          <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, position: "relative", zIndex: 10 }}>
            {["Free mockup", "No upfront payment", "5-day delivery"].map(trust => (
              <span key={trust} style={{
                padding: "6px 16px", borderRadius: 999, fontSize: "0.85em", fontWeight: 700,
                background: "rgba(0,0,0,0.5)", color: "#fff", border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)"
              }}>
                {trust}
              </span>
            ))}
          </div>

          <Link href="/contact" style={{
            display: "inline-block", marginTop: 32, padding: "14px 32px", borderRadius: 12,
            background: "#fff", color: "#3730a3", textDecoration: "none",
            fontSize: "1em", fontWeight: 700, position: "relative", zIndex: 10,
            boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
          >
            Get Your Free Mockup →
          </Link>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(to bottom, transparent, #f2f2f7)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      <section style={{ background: "#f2f2f7", padding: "0 clamp(20px,6vw,120px) 60px" }}>
        {/* Plans */}
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start", marginBottom: 60 }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: plan.featured ? "#fff" : "#12131f",
                border: plan.featured ? "2px solid #6c3bff" : "1px solid rgba(255,255,255,0.06)",
                borderRadius: 24, padding: "40px 32px",
                color: plan.featured ? "#0d0e1a" : "#fff",
                transform: plan.featured ? "scale(1.04)" : "scale(1)",
                boxShadow: plan.featured ? "0 28px 80px rgba(108,59,255,0.28)" : "0 8px 30px rgba(0,0,0,0.15)",
                display: "flex", flexDirection: "column", height: "100%",
                position: plan.featured ? "relative" : "static",
                zIndex: plan.featured ? 10 : 1,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <h2 style={{ fontSize: "1.4em", fontWeight: 800 }}>{plan.name}</h2>
                  {plan.badge && (
                    <span style={{ padding: "3px 12px", borderRadius: 999, background: "#6c3bff", color: "#fff", fontSize: "0.85em", fontWeight: 600 }}>{plan.badge}</span>
                  )}
                </div>
                <p style={{ fontSize: "1em", color: plan.featured ? "#555" : "rgba(255,255,255,0.6)", marginBottom: 28, lineHeight: 1.5, whiteSpace: "pre-line" }}>{plan.desc}</p>
                <div style={{ marginBottom: 32 }}>
                  <span style={{ fontSize: "3em", fontWeight: 900, letterSpacing: "-0.03em" }}>{plan.price}</span>
                  <span style={{ fontSize: "1em", fontWeight: 500, color: plan.featured ? "#888" : "rgba(255,255,255,0.4)", marginLeft: 8 }}>{plan.type}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36, flexGrow: 1 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95em" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: plan.featured ? "#6c3bff" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <IconCheck size={10} color="#fff" />
                      </div>
                      <span style={{ color: plan.featured ? "#333" : "rgba(255,255,255,0.8)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/916265022474?text=${encodeURIComponent(plan.waMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "block", width: "100%", padding: "15px", borderRadius: 12,
                    background: plan.featured ? "#6c3bff" : "rgba(255,255,255,0.1)",
                    color: "#fff", textDecoration: "none",
                    fontSize: "1em", fontWeight: 700, textAlign: "center",
                    transition: "transform 0.2s, background 0.2s, opacity 0.2s",
                    border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.1)",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = plan.featured ? "#5a2fe0" : "rgba(255,255,255,0.15)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.02)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = plan.featured ? "#6c3bff" : "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                >
                  {plan.btnText}
                </a>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ background: "#0d0e1a", borderRadius: 24, padding: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 40, marginBottom: 40, textAlign: "center" }}>
            {stats.map(s => (
              <div key={s.label1}>
                <div style={{ fontSize: "3.2em", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "1em", marginTop: 8 }}>{s.label1} {s.label2}</div>
              </div>
            ))}
          </div>

          {/* Not sure */}
          <div style={{ background: "#fff", borderRadius: 24, padding: "36px", textAlign: "center", border: "1px solid rgba(0,0,0,0.07)", marginBottom: 40 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "1.3em", fontWeight: 700, color: "#0d0e1a", marginBottom: 12 }}>
              <IconShield size={22} color="#6c3bff" /> Not sure which plan is right for you?
            </div>
            <p style={{ color: "#666", lineHeight: 1.7, marginBottom: 28 }}>
              WhatsApp us — we'll suggest the best package for YOUR business. Free advice. Zero pressure.
            </p>
            <a
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20need%20help%20choosing%20the%20right%20plan%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#25D366", color: "#fff", padding: "14px 36px", borderRadius: 12, fontSize: "1em", fontWeight: 700, textDecoration: "none", transition: "transform 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              <IconWhatsApp size={18} color="#fff" />
              Chat on WhatsApp →
            </a>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "clamp(1.6em, 3vw, 2.4em)", fontWeight: 700, color: "#0d0e1a", marginBottom: 32, textAlign: "center" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ background: "#fff", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(0,0,0,0.07)" }}>
                <div style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "1.05em", marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: "#666", lineHeight: 1.7 }}>{faq.a}</div>
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
