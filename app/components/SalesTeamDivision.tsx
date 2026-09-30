"use client";
import ScrollReveal from "./ScrollReveal";
import { IconBot, IconUser, IconCheck, IconZap } from "./icons";

const aiTasks = [
  { title: "Instant Inbound Response (<10s)", desc: "Instantly greets leads in under 10 seconds of ad submission, 24/7/365." },
  { title: "Deep Criteria Qualification", desc: "Asks 2-3 essential questions to identify real intent, timeline and budget." },
  { title: "Automated FAQ & Objection Handling", desc: "Answers batch timings, doctor credentials, and common questions." },
  { title: "30-Day Follow-Up Autopilot", desc: "Nurtures unresponsive leads with polite check-ins for up to 30 days on autopilot." },
  { title: "Calendar & Google Meet Generation", desc: "Coordinates meeting slots and sends calendar invites with zero friction." },
];

const teamTasks = [
  { title: "High-Value In-Person Counselling", desc: "Conduct live demos, consultations, and personalized advice." },
  { title: "Nuanced Complex Objections", desc: "Address specific hesitation that requires human empathy and experience." },
  { title: "Custom Packages & Negotiations", desc: "Craft bespoke offers for high-ticket clients ready to commit." },
  { title: "Closing Deals & Collecting Revenue", desc: "Focus 100% of human energy on conversions and building relationships." },
];

export default function SalesTeamDivision() {
  return (
    <section style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
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
              Sales Workflow Efficiency
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
              Your Sales Team Shouldn&apos;t Chase Every Lead.
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.0625rem", maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
              Stop paying valuable sales reps to dial busy numbers or paste generic replies. Let AI automate the first 80% so your humans can focus on the final 20% that closes revenue.
            </p>
          </div>

          {/* 2 Column Comparison Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--grid-2)",
              gap: 24,
              alignItems: "stretch",
            }}
          >
            {/* AI Handles Column */}
            <div
              style={{
                background: "linear-gradient(160deg, #0d0e1a 0%, #15172b 100%)",
                borderRadius: 28,
                padding: "clamp(24px, 4vw, 40px)",
                border: "1px solid rgba(108, 59, 255, 0.35)",
                boxShadow: "0 12px 40px rgba(108, 59, 255, 0.14)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(108, 59, 255, 0.25)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconBot size={22} color="#c4b5fd" />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#a78bfa", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Volume &amp; Speed
                  </span>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#ffffff", marginTop: 2 }}>
                    What Clivik AI Handles
                  </h3>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {aiTasks.map((task, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#6c3bff",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <IconCheck size={12} color="#fff" />
                    </div>
                    <div>
                      <div style={{ color: "#ffffff", fontSize: "0.9375rem", fontWeight: 600 }}>
                        {task.title}
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", lineHeight: 1.5, marginTop: 2 }}>
                        {task.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 24,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  color: "#c4b5fd",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <IconZap size={16} color="#c4b5fd" />
                <span>Response → Qualification → FAQs → Follow-ups → Booking</span>
              </div>
            </div>

            {/* Human Team Handles Column */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 28,
                padding: "clamp(24px, 4vw, 40px)",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(16, 185, 129, 0.12)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconUser size={22} color="#10b981" />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#10b981", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    High-Value Empathy
                  </span>
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "#0d0e1a", marginTop: 2 }}>
                    What Your Team Handles
                  </h3>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {teamTasks.map((task, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#10b981",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <IconCheck size={12} color="#fff" />
                    </div>
                    <div>
                      <div style={{ color: "#0d0e1a", fontSize: "0.9375rem", fontWeight: 600 }}>
                        {task.title}
                      </div>
                      <div style={{ color: "#4b5563", fontSize: "0.875rem", lineHeight: 1.5, marginTop: 2 }}>
                        {task.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 24,
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  color: "#059669",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span>✓ Counselling → Objections → High-Ticket Closing</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
