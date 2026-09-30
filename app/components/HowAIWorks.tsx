"use client";
import ScrollReveal from "./ScrollReveal";
import { IconTarget, IconBot, IconZap, IconCalendar, IconUser, IconCheck } from "./icons";

const flowSteps = [
  {
    step: "01",
    label: "Meta Ad / Lead Form",
    detail: "Prospect clicks an ad or submits an inquiry on Instagram, Facebook, or Google.",
    tag: "Inbound Traffic",
    icon: <IconTarget size={22} color="#c4b5fd" />,
  },
  {
    step: "02",
    label: "Instant WhatsApp AI",
    detail: "Sub-second WhatsApp message greets the lead personally with zero human delay.",
    tag: "< 3s Response",
    icon: <IconZap size={22} color="#c4b5fd" />,
  },
  {
    step: "03",
    label: "Lead Qualification",
    detail: "AI identifies requirement, budget, location & urgency through natural conversation.",
    tag: "Smart Screening",
    icon: <IconBot size={22} color="#c4b5fd" />,
  },
  {
    step: "04",
    label: "Automated Follow-Up",
    detail: "If the lead goes silent, persistent multi-touch sequences re-engage them automatically.",
    tag: "Zero Cold Leads",
    icon: <IconCheck size={22} color="#c4b5fd" />,
  },
  {
    step: "05",
    label: "Demo / Appointment",
    detail: "Coordinates calendar slots and generates Google Meet link straight in the chat.",
    tag: "Autopilot Booking",
    icon: <IconCalendar size={22} color="#c4b5fd" />,
  },
  {
    step: "06",
    label: "Sales Team Closes",
    detail: "Your sales reps and counsellors step in to speak exclusively with high-intent buyers.",
    tag: "Closed Revenue",
    icon: <IconUser size={22} color="#c4b5fd" />,
  },
];

export default function HowAIWorks() {
  return (
    <section id="how-it-works" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <ScrollReveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Section Header */}
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
              How The AI Works
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
              From Meta Ad to Customer — Automatically
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.0625rem", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>
              A frictionless sales pipeline where every inbound lead is acknowledged, qualified, and booked into a demo without manual staff overhead.
            </p>
          </div>

          {/* Flow Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 20,
              marginBottom: 32,
            }}
          >
            {flowSteps.map((s, i) => (
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
                  position: "relative",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 30px rgba(108,59,255,0.08)";
                  el.style.borderColor = "rgba(108,59,255,0.3)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                  el.style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "linear-gradient(135deg, #1a1040, #3730a3)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {s.icon}
                  </div>
                  <div
                    style={{
                      padding: "4px 10px",
                      borderRadius: 999,
                      background: "rgba(108,59,255,0.08)",
                      color: "#6c3bff",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.step} · {s.tag}
                  </div>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#0d0e1a", marginBottom: 8, lineHeight: 1.3 }}>
                  {s.label}
                </h3>
                <p style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.6 }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Underneath Core Punchline Banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #0d0e1a 0%, #1e1b4b 100%)",
              borderRadius: 20,
              padding: "24px 32px",
              textAlign: "center",
              border: "1px solid rgba(108,59,255,0.3)",
              boxShadow: "0 8px 32px rgba(108,59,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#22c55e",
                boxShadow: "0 0 12px #22c55e",
                display: "inline-block",
              }}
            />
            <p style={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: 700, margin: 0, letterSpacing: "-0.01em" }}>
              Your team only talks to the leads who actually need them.
            </p>
            <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
              Zero cold dials. 100% focused closing.
            </span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
