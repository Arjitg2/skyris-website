"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { IconPhone, IconSend, IconWhatsApp, IconMapPin, IconClock } from "../components/icons";

const BUSINESS_DOMAINS = [
  "Restaurant / Cafe",
  "Clinic / Hospital",
  "Gym / Fitness",
  "Shop / Retail",
  "Real Estate",
  "Education",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", domain: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "14px 16px", borderRadius: 12,
    background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff", fontSize: "1em", fontFamily: "inherit", outline: "none",
    transition: "border-color 0.2s, background 0.2s", boxSizing: "border-box",
  };
  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "0.9em", fontWeight: 500,
    color: "rgba(255,255,255,0.65)", marginBottom: 8,
  };

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
          Get In Touch
        </div>
        <h1 style={{ fontSize: "clamp(2.4em,5vw,4em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
          Ready to See Your<br />Business Online?
        </h1>
        <p style={{ fontSize: "1.15em", color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto" }}>
          Fill the form below or WhatsApp us directly. We respond same day — always.
        </p>
      </section>

      {/* Contact Section */}
      <section style={{ background: "#0d0e1a", padding: "80px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "start" }}>

          {/* Left: Info */}
          <div>
            <h2 style={{ fontSize: "clamp(1.8em,3vw,2.4em)", fontWeight: 700, color: "#fff", marginBottom: 20 }}>
              Let&apos;s Build Something Great
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontSize: "1.05em", marginBottom: 36 }}>
              Tell us about your business and we will send you a free custom website mockup within 24 hours. See it first, pay only if you love it. Zero risk.
            </p>

            {/* Contact methods */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 40 }}>
              {[
                {
                  icon: <IconWhatsApp size={24} color="#25D366" />, label: "WhatsApp", value: "+91 62650 22474",
                  href: "https://wa.me/916265022474?text=Hi%20Clivik!%20I%27d%20like%20to%20get%20a%20free%20mockup%20for%20my%20business.",
                  color: "#25D366",
                },
                {
                  icon: <IconSend size={24} color="#6c3bff" />, label: "Email", value: "helloclivik@gmail.com",
                  href: "mailto:helloclivik@gmail.com",
                  color: "#6c3bff",
                },
                {
                  icon: <IconMapPin size={24} color="#f59e0b" />, label: "Location", value: "Bhopal, Madhya Pradesh",
                  href: "https://maps.google.com/?q=Bhopal,Madhya+Pradesh",
                  color: "#f59e0b",
                },
                {
                  icon: <IconClock size={24} color="#0ea5e9" />, label: "Response Time", value: "Same Day — Always",
                  href: "#",
                  color: "#0ea5e9",
                },
              ].map(item => (
                <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 20px", borderRadius: 16, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.3)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: `${item.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.85em", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{item.label}</div>
                    <div style={{ color: "#fff", fontWeight: 600 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Quick CTA */}
            <a
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%27d%20like%20to%20get%20a%20free%20mockup%20for%20my%20business."
              target="_blank" rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                padding: "16px", borderRadius: 14, background: "#25D366", color: "#fff",
                textDecoration: "none", fontSize: "1em", fontWeight: 700,
                transition: "transform 0.2s, opacity 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.9"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              <IconWhatsApp size={20} color="#fff" /> Message Us on WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div style={{
            background: "#0d0e1a", borderRadius: 24, padding: "40px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#6c3bff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  <IconSend size={28} color="#fff" />
                </div>
                <h3 style={{ fontSize: "1.6em", fontWeight: 800, color: "#fff", marginBottom: 12 }}>Message Sent! 🎉</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>
                  We&apos;ll reach out to you within 24 hours on your WhatsApp number.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ marginTop: 28, padding: "12px 28px", borderRadius: 12, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer", fontSize: "0.95em" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#fff", marginBottom: 4 }}>Get Your Free Mockup</h3>
                  <p style={{ fontSize: "0.95em", color: "rgba(255,255,255,0.5)" }}>Takes 2 minutes. We respond to every enquiry same day.</p>
                </div>

                <div>
                  <label style={labelStyle}>Your Name</label>
                  <input type="text" required placeholder="Rahul Sharma"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Your Business Type</label>
                  <select
                    value={form.domain} onChange={e => setForm({ ...form, domain: e.target.value })}
                    required
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  >
                    <option value="" style={{ background: "#0d0e1a" }}>Select business type</option>
                    {BUSINESS_DOMAINS.map(d => <option key={d} value={d} style={{ background: "#0d0e1a" }}>{d}</option>)}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>WhatsApp Number</label>
                  <div style={{ position: "relative" }}>
                    <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", display: "flex", alignItems: "center" }}>
                      <IconPhone size={16} color="rgba(255,255,255,0.4)" />
                    </span>
                    <input type="tel" required placeholder="+91 98765 43210"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      style={{ ...inputStyle, paddingLeft: 42 }}
                      onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Tell Us More</label>
                  <textarea required placeholder="What does your business do? What do you need?"
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical", minHeight: 110, lineHeight: 1.6 } as React.CSSProperties}
                    onFocus={e => { e.currentTarget.style.borderColor = "#6c3bff"; e.currentTarget.style.background = "rgba(108,59,255,0.08)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  />
                </div>

                <button type="submit" style={{
                  padding: "15px", borderRadius: 12, background: "#6c3bff", color: "#fff",
                  border: "none", fontSize: "1em", fontWeight: 700, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  transition: "all 0.2s", boxShadow: "0 4px 20px rgba(108,59,255,0.35)",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#5a2fe0"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#6c3bff"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  Get My Free Mockup →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
