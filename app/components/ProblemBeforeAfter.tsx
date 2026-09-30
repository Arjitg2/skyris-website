"use client";
import ScrollReveal from "./ScrollReveal";
import { IconCheck, IconZap } from "./icons";

const withoutPoints = [
  "Lead fills Meta or Google lead form",
  "Sales staff notices notification 2 hours later",
  "Rep dials manually during busy office hours",
  "Prospect doesn't answer unknown incoming number",
  "Zero structured or timed follow-up messages",
  "Frustrated lead books with the competitor who replied first",
];

const withPoints = [
  "Instant WhatsApp greeting in under 10 seconds",
  "AI screens budget, urgency, grade/treatment & requirement",
  "30-Day WhatsApp follow-up autopilot",
  "24/7 availability — handles leads at midnight and weekends",
  "Demo / appointment automatically booked with Google Meet link",
  "Your human sales team receives only warm, pre-qualified prospects",
];

export default function ProblemBeforeAfter() {
  return (
    <section id="the-problem" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
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
              The Leaking Sales Funnel
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
              Your Leads Are Already Coming In. <br className="desktop-br" />
              You&apos;re Losing Them After They Arrive.
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.0625rem", maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
              7 out of 10 prospects lose interest within the first hour. When manual follow-up is delayed, advertising budget goes straight down the drain.
            </p>
          </div>

          {/* Before vs After Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--grid-2)",
              gap: 24,
              alignItems: "stretch",
            }}
          >
            {/* Without Clivik */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: "clamp(24px, 4vw, 40px)",
                border: "1px solid rgba(239, 68, 68, 0.2)",
                boxShadow: "0 4px 24px rgba(239, 68, 68, 0.06)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "#fee2e2",
                    color: "#dc2626",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                  }}
                >
                  ✕
                </span>
                <div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#dc2626", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    Without Clivik
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0d0e1a", marginTop: 2 }}>
                    The Manual Friction Trap
                  </h3>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {withoutPoints.map((pt, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span
                      style={{
                        color: "#ef4444",
                        fontSize: "1rem",
                        lineHeight: 1.5,
                        flexShrink: 0,
                      }}
                    >
                      ✕
                    </span>
                    <span style={{ color: "#4b5563", fontSize: "0.9375rem", lineHeight: 1.5 }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 24,
                  borderTop: "1px solid rgba(0,0,0,0.06)",
                  color: "#991b1b",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                Result: High cost per acquisition, wasted ad spend, and unclosed prospects.
              </div>
            </div>

            {/* With Clivik */}
            <div
              style={{
                background: "linear-gradient(160deg, #0d0e1a 0%, #16172e 100%)",
                borderRadius: 24,
                padding: "clamp(24px, 4vw, 40px)",
                border: "1px solid rgba(108, 59, 255, 0.4)",
                boxShadow: "0 12px 40px rgba(108, 59, 255, 0.18)",
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: "rgba(108, 59, 255, 0.25)",
                    color: "#a78bfa",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                  }}
                >
                  ✓
                </span>
                <div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#a78bfa", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    With Clivik AI
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", marginTop: 2 }}>
                    Sales Autopilot on WhatsApp
                  </h3>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {withPoints.map((pt, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "#6c3bff",
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      <IconCheck size={12} color="#fff" />
                    </span>
                    <span style={{ color: "rgba(255,255,255,0.92)", fontSize: "0.9375rem", lineHeight: 1.5 }}>
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: "auto",
                  paddingTop: 24,
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  color: "#c4b5fd",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <IconZap size={16} color="#c4b5fd" />
                <span>Result: Instant lead capture, booked demos &amp; max ROI on your marketing.</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
