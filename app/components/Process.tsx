"use client";
import { IconWhatsApp, IconMonitor, IconZap, IconShield } from "./icons";

const IconSettings = ({ size = 20, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const steps = [
  {
    num: "01",
    title: "Quick WhatsApp Chat",
    desc: "Drop us a message on WhatsApp. We understand your business and goals in one simple chat.",
    icon: <IconWhatsApp size={24} color="#6c3bff" />
  },
  {
    num: "02",
    title: "Free Custom Mockup",
    desc: "We design your site for free before you pay a single rupee. Love it? We proceed. Don’t? Zero charge.",
    icon: <IconMonitor size={24} color="#6c3bff" />
  },
  {
    num: "03",
    title: "Build & Automate",
    desc: "We build everything once you approve — website, WhatsApp, Google profile and AI auto-replies.",
    icon: <IconSettings size={24} color="#6c3bff" />
  },
  {
    num: "04",
    title: "Go Live on Day 5",
    desc: "Your website goes live on Day 5 — fast, mobile-ready and optimized to bring in customers.",
    icon: <IconZap size={24} color="#6c3bff" />
  },
  {
    num: "05",
    title: "Support & Growth",
    desc: "We stay with you for 30–60 days after delivery. Changes, fixes and questions. All free.",
    icon: <IconShield size={24} color="#6c3bff" />
  }
];

export default function Process() {
  return (
    <section id="process" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        
        <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" as any }}>
          <div style={{
            display: "inline-block", padding: "5px 14px", borderRadius: 999,
            background: "#fff", fontSize: "1em", fontWeight: 500, color: "#111",
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 20,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>How We Work</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
            lineHeight: 1.1, letterSpacing: "-0.04em",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            From WhatsApp Message to<br/>Live Website in 5 Days.
          </h2>
        </div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
          gap: 20 
        }}>
          {steps.map((s, i) => (
            <div key={i} style={{
              background: "#ffffff",
              borderRadius: 20,
              padding: "32px 24px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 30px rgba(0,0,0,0.08)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)";
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                <div style={{ fontSize: "1.4em", fontWeight: 800, color: "rgba(0,0,0,0.1)" }}>{s.num}</div>
                <div style={{
                  width: 44, height: 44, borderRadius: 12, background: "rgba(108,59,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center"
                }}>
                  {s.icon}
                </div>
              </div>
              <h3 style={{ fontSize: "1.25em", fontWeight: 800, color: "#0d0e1a", marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: "0.95em", color: "#666", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
