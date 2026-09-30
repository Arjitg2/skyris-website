"use client";
import ScrollReveal from "./ScrollReveal";
import { IconArrowRight } from "./icons";

const industries = [
  {
    emoji: "🎓",
    title: "Coaching & Education",
    subtitle: "NEET, JEE, UPSC, IELTS & Test Prep Academies",
    pipeline: ["Capture", "Qualify Target Exam", "Book Free Demo", "Automated Reminder"],
    description:
      "Instantly screen student grade and target exam, explain batch options, and book parents directly into Google Meet demo classes or counsellor sessions.",
    metric: "0 Missed Ad Leads",
  },
  {
    emoji: "🏥",
    title: "Clinics & Healthcare",
    subtitle: "Specialists, Diagnostics, Skin & Hair Clinics",
    pipeline: ["Enquiry", "Symptom Screening", "Slot Booking", "Appointment Confirmed"],
    description:
      "Triage patient inquiries 24/7, check doctor availability, and confirm clinic consults without forcing your front-desk staff to play endless phone tag.",
    metric: "24/7 Triage & Booking",
  },
  {
    emoji: "🦷",
    title: "Dentists & Orthodontics",
    subtitle: "Cosmetic, Implants & Dental Care Practices",
    pipeline: ["Lead", "Treatment Enquiry", "Chair Appointment", "Review Follow-Up"],
    description:
      "Filter high-value cosmetic and dental treatment inquiries, schedule chair time efficiently, and automatically collect 5-star Google reviews post-treatment.",
    metric: "High Chair Occupancy",
  },
  {
    emoji: "🏠",
    title: "Real Estate & Developers",
    subtitle: "Brokers, Channel Partners & Builders",
    pipeline: ["Enquiry", "Budget & Location Filter", "Site Visit Scheduled", "Broker Handoff"],
    description:
      "Qualify buyer budgets, preferred localities, and schedule physical site walkthroughs automatically before handing warm buyers to your closing team.",
    metric: "Pre-Screened Buyers",
  },
  {
    emoji: "💼",
    title: "High-Intent Local Businesses",
    subtitle: "Fitness Centers, Car Consultants & Premium Services",
    pipeline: ["Ad Click", "Instant WhatsApp", "Objection Handling", "High-Ticket Conversion"],
    description:
      "Engage searchers and Meta ad respondents within 3 seconds, address pricing objections gracefully, and schedule private consultations on complete autopilot.",
    metric: "< 3s Lead Response",
  },
];

export default function Industries() {
  return (
    <section id="industries" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
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
              Target Industries
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
              Built for Businesses That Depend on Leads
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.0625rem", maxWidth: 660, margin: "0 auto", lineHeight: 1.6 }}>
              We do not build generic chatbots. We build vertical-specific sales engines tailored to your specific customer journey and conversion milestones.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: 24,
            }}
          >
            {industries.map((ind, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  borderRadius: 24,
                  padding: "32px 28px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                  border: "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 14px 36px rgba(108,59,255,0.09)";
                  el.style.borderColor = "rgba(108,59,255,0.25)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
                  el.style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                {/* Top Row: Emoji & Tag */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                  <div
                    style={{
                      fontSize: "2rem",
                      width: 50,
                      height: 50,
                      borderRadius: 14,
                      background: "#f4f4f8",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {ind.emoji}
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "#6c3bff",
                      background: "rgba(108,59,255,0.08)",
                      padding: "6px 12px",
                      borderRadius: 999,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {ind.metric}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#0d0e1a", marginBottom: 4 }}>
                  {ind.title}
                </h3>
                <div style={{ fontSize: "0.8125rem", color: "#6b7280", fontWeight: 500, marginBottom: 16 }}>
                  {ind.subtitle}
                </div>

                <p style={{ fontSize: "0.9375rem", color: "#4b5563", lineHeight: 1.6, marginBottom: 24 }}>
                  {ind.description}
                </p>

                {/* Pipeline Flow Pills */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: 16,
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#9ca3af", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>
                    Automation Pipeline
                  </div>
                  <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 6 }}>
                    {ind.pipeline.map((step, si) => (
                      <div key={si} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: 600,
                            padding: "4px 8px",
                            borderRadius: 6,
                            background: "#f3f4f6",
                            color: "#1f2937",
                          }}
                        >
                          {step}
                        </span>
                        {si < ind.pipeline.length - 1 && (
                          <span style={{ color: "#9ca3af", fontSize: "0.75rem" }}>→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
