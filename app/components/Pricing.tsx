"use client";
import { IconCheck, IconShield } from "./icons";

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

export default function Pricing() {
  return (
    <section id="pricing" style={{
      background: "#f2f2f7",
      padding: "var(--pricing-outer-py) var(--pricing-outer-px) 0",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", borderRadius: 40, overflow: "hidden", background: "linear-gradient(160deg, #0d0e1a 0%, #131525 100%)", padding: "var(--pricing-inner-py) var(--pricing-inner-px) calc(var(--pricing-inner-py) / 2)" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" as any }}>
          <div style={{
            display: "inline-block", padding: "5px 14px", borderRadius: 999,
            background: "rgba(255,255,255,0.07)", fontSize: "1em", fontWeight: 500,
            color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: 20,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>Pricing</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#fff",
            lineHeight: 1.1, letterSpacing: "-0.04em",
            maxWidth: "var(--title-max-width)", margin: "0 auto",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            Smart Pricing for Serious Businesses
          </h2>
          <p style={{
            fontSize: "1.25em", color: "rgba(255,255,255,0.6)", marginTop: 20,
            maxWidth: 600, margin: "20px auto 0"
          }}>
            Everything you need to get customers online — without overpaying.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", gap: 20, alignItems: "start", marginBottom: 80 }}>
          {plans.map(plan => (
            <div key={plan.name} style={{
              background: plan.featured ? "#fff" : "rgba(255,255,255,0.04)",
              border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.08)",
              borderRadius: 24, padding: "40px 32px",
              color: plan.featured ? "#0d0e1a" : "#fff",
              transform: plan.featured ? "scale(1.04)" : "scale(1)",
              boxShadow: plan.featured ? "0 28px 80px rgba(108,59,255,0.28)" : "none",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <h3 style={{ fontSize: "1.4em", fontWeight: 800 }}>{plan.name}</h3>
                {plan.badge && (
                  <span style={{ padding: "3px 12px", borderRadius: 999, background: "#6c3bff", color: "#fff", fontSize: "0.9em", fontWeight: 600 }}>{plan.badge}</span>
                )}
              </div>
              
              <p style={{ fontSize: "1em", color: plan.featured ? "#444" : "rgba(255,255,255,0.6)", marginBottom: 28, lineHeight: 1.5, whiteSpace: "pre-line" }}>
                {plan.desc}
              </p>

              <div style={{ marginBottom: 32, display: "flex", alignItems: "baseline", gap: 6, flexWrap: "nowrap" }}>
                <span style={{ fontSize: "clamp(1.7em, 6.5vw, 3em)", fontWeight: 900, letterSpacing: "-0.03em", whiteSpace: "nowrap" }}>{plan.price}</span>
                <span style={{ fontSize: "1em", fontWeight: 500, color: plan.featured ? "#666" : "rgba(255,255,255,0.6)", whiteSpace: "nowrap" }}>{plan.type}</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 36 }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "1em" }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: plan.featured ? "#0d0e1a" : "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <IconCheck size={10} color={plan.featured ? "#fff" : "#131525"} />
                    </div>
                    <span style={{ color: plan.featured ? "#333" : "rgba(255,255,255,0.85)" }}>{f}</span>
                  </div>
                ))}
              </div>

              <a
                href={`https://wa.me/916265022474?text=${encodeURIComponent(plan.waMsg)}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  display: "block", width: "100%", padding: "15px", borderRadius: 12, border: "none",
                  background: plan.featured ? "#6c3bff" : "#fff",
                  color: plan.featured ? "#fff" : "#0d0e1a",
                  fontSize: "1em", fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                  textDecoration: "none", textAlign: "center", boxSizing: "border-box",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >{plan.btnText}</a>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--stats-grid)", gap: "var(--stats-container-gap)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "56px 0", marginBottom: 56 }}>
          {stats.map(s => (
            <div key={s.label1} style={{ display: "flex", flexDirection: "var(--stats-item-flex)" as any, alignItems: "var(--stats-item-align)" as any, textAlign: "var(--stats-item-text)" as any, gap: "var(--stats-item-gap)" }}>
              <div style={{ fontSize: "var(--stats-number)", fontWeight: 700, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1, minWidth: "max-content" }}>{s.n}</div>
              <div style={{ fontSize: "var(--stats-label)", color: "rgba(255,255,255,0.85)", marginTop: "var(--stats-text-mt)", lineHeight: 1.25, textAlign: "left" }}>
                {s.label1}<br/>{s.label2}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Not Sure Prompt */}
        <div style={{ textAlign: "center", background: "rgba(255,255,255,0.04)", padding: "32px 40px", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: "1.3em", fontWeight: 700, color: "#fff", marginBottom: 12 }}>
            <IconShield size={22} color="#6ea8fe" /> Not sure which plan is right for you?
          </div>
          <p style={{ fontSize: "1em", color: "rgba(255,255,255,0.6)", marginBottom: 24, lineHeight: 1.6 }}>
            WhatsApp us — we'll suggest the best<br/>package for YOUR business. Free advice.<br/>Zero pressure.
          </p>
          <a
            href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20need%20help%20choosing%20the%20right%20plan%20for%20my%20business."
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", background: "#25D366", color: "#fff", padding: "14px 32px", borderRadius: 12, fontSize: "1.05em", fontWeight: 600, cursor: "pointer", alignItems: "center", gap: 8, textDecoration: "none", transition: "opacity 0.2s" }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
