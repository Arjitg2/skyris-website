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

      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, #0d0e1a 0%, #131525 60%, #1a1b2e 100%)",
        paddingTop: 120, paddingBottom: 80,
        paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)",
        textAlign: "center",
      }}>
        <div style={{ display: "inline-block", padding: "6px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontSize: "0.95em", fontWeight: 500, marginBottom: 24 }}>
          Pricing
        </div>
        <h1 style={{ fontSize: "clamp(2.4em,5vw,4em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
          Smart Pricing for<br />Serious Businesses
        </h1>
        <p style={{ fontSize: "1.15em", color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto" }}>
          Everything you need to get customers online — without overpaying.
        </p>
      </section>

      <section style={{ background: "#0d0e1a", padding: "0 clamp(20px,6vw,120px) 80px" }}>
        {/* Plans */}
        <div style={{ maxWidth: 1280, margin: "0 auto", paddingTop: 60 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start", marginBottom: 60 }}>
            {plans.map(plan => (
              <div key={plan.name} style={{
                background: plan.featured ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
                border: plan.featured ? "2px solid #6c3bff" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24, padding: "40px 32px",
                color: "#fff",
                transform: plan.featured ? "scale(1.04)" : "scale(1)",
                boxShadow: plan.featured ? "0 28px 80px rgba(108,59,255,0.28)" : "none",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <h2 style={{ fontSize: "1.4em", fontWeight: 800 }}>{plan.name}</h2>
                  {plan.badge && (
                    <span style={{ padding: "3px 12px", borderRadius: 999, background: "#6c3bff", color: "#fff", fontSize: "0.85em", fontWeight: 600 }}>{plan.badge}</span>
                  )}
                </div>
                <p style={{ fontSize: "1em", color: "rgba(255,255,255,0.6)", marginBottom: 28, lineHeight: 1.5, whiteSpace: "pre-line" }}>{plan.desc}</p>
                <div style={{ marginBottom: 32 }}>
                  <span style={{ fontSize: "3em", fontWeight: 900, letterSpacing: "-0.03em" }}>{plan.price}</span>
                  <span style={{ fontSize: "1em", fontWeight: 500, color: "rgba(255,255,255,0.5)", marginLeft: 8 }}>{plan.type}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.95em" }}>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: plan.featured ? "#6c3bff" : "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <IconCheck size={10} color="#fff" />
                      </div>
                      <span style={{ color: "rgba(255,255,255,0.85)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <a
                  href={`https://wa.me/916265022474?text=${encodeURIComponent(plan.waMsg)}`}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "block", width: "100%", padding: "15px", borderRadius: 12,
                    background: plan.featured ? "#6c3bff" : "rgba(255,255,255,0.08)",
                    color: "#fff", textDecoration: "none",
                    border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.12)",
                    fontSize: "1em", fontWeight: 700, textAlign: "center",
                    transition: "opacity 0.2s, transform 0.2s",
                    boxSizing: "border-box",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  {plan.btnText}
                </a>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, padding: "48px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 40, marginBottom: 40, textAlign: "center" }}>
            {stats.map(s => (
              <div key={s.label1}>
                <div style={{ fontSize: "3.2em", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "1em", marginTop: 8 }}>{s.label1} {s.label2}</div>
              </div>
            ))}
          </div>

          {/* Not sure */}
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 24, padding: "40px", textAlign: "center", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 60 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "1.3em", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
              <IconShield size={22} color="#6c3bff" /> Not sure which plan is right for you?
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 28 }}>
              WhatsApp us — we'll suggest the best package for YOUR business. Free advice. Zero pressure.
            </p>
            <a
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20need%20help%20choosing%20the%20right%20plan%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#25D366", color: "#fff", padding: "14px 36px", borderRadius: 12, fontSize: "1em", fontWeight: 700, textDecoration: "none" }}
            >
              <IconWhatsApp size={20} color="#fff" /> Chat on WhatsApp →
            </a>
          </div>

          {/* FAQ */}
          <h2 style={{ fontSize: "clamp(1.6em, 3vw, 2.4em)", fontWeight: 700, color: "#fff", marginBottom: 32, textAlign: "center" }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 760, margin: "0 auto" }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: "24px 28px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: "1.05em", marginBottom: 8 }}>{faq.q}</div>
                <div style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{faq.a}</div>
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
