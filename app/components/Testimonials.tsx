"use client";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import { IconZap, IconStar } from "./icons";

export default function Testimonials() {
  return (
    <section id="founding-program" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <ScrollReveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "8px 18px",
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
              <span>⭐ Founding Client Program</span>
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
              Free 7-Day Setup for 2 Selected Businesses
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.0625rem", maxWidth: 680, margin: "0 auto", lineHeight: 1.6 }}>
              We are partnering with the first 2 ambitious businesses to build, test, and deploy their complete custom WhatsApp AI sales infrastructure completely free for 7 days — in exchange for an honest video testimonial.
            </p>
          </div>

          {/* Founding Program Card Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 28,
              alignItems: "stretch",
            }}
          >
            {/* Card 1: What You Get */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 40px)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 44px rgba(108,59,255,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(108,59,255,0.1)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconZap size={22} color="#6c3bff" />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#6c3bff", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    ZERO UPFRONT COST
                  </span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0d0e1a", margin: 0 }}>
                    What We Build For You
                  </h3>
                </div>
              </div>

              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 24 }}>
                Our team designs and deploys your end-to-end sales automation system tailored to your exact customer questions and booking milestones:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28, flexGrow: 1 }}>
                {[
                  "Custom WhatsApp AI agent trained on your services & FAQs",
                  "Instant response to incoming Meta/Google ad leads in under 10 seconds",
                  "Automated qualification & screening of serious buyers",
                  "Direct Google Calendar & Google Meet demo slot booking",
                  "30-Day WhatsApp Follow-up Autopilot for silent leads",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "rgba(108,59,255,0.12)",
                        color: "#6c3bff",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ color: "#1f2937", fontSize: "0.9375rem", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: 12,
                  background: "rgba(108,59,255,0.06)",
                  border: "1px solid rgba(108,59,255,0.18)",
                  fontSize: "0.85rem",
                  color: "#5b21b6",
                  fontWeight: 600,
                }}
              >
                ⚡ 100% Free 7-Day Live Deployment — No credit card or upfront commitment required.
              </div>
            </div>

            {/* Card 2: The Exchange & Criteria */}
            <div
              style={{
                background: "linear-gradient(160deg, #0d0e1a 0%, #17182f 100%)",
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 40px)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
                border: "1px solid rgba(108,59,255,0.3)",
                display: "flex",
                flexDirection: "column",
                color: "#ffffff",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 24px 60px rgba(108,59,255,0.25)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.2)";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.12)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <IconStar size={22} color="#f59e0b" />
                </div>
                <div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c4b5fd", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    FOUNDING COHORT
                  </span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff", margin: 0 }}>
                    The Exchange &amp; Criteria
                  </h3>
                </div>
              </div>

              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: 24 }}>
                We invest our engineering time and infrastructure to prove the impact on your real sales pipeline:
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32, flexGrow: 1 }}>
                {[
                  "Active inbound lead flow (Meta ads, Google, or organic inquiries)",
                  "Commitment to test the AI on live incoming leads for 7 days",
                  "If the system saves time and books leads, provide a brief 60-second video testimonial",
                  "Strictly capped at 2 businesses to ensure hands-on founder attention",
                ].map((crit, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        background: "rgba(108,59,255,0.3)",
                        color: "#c4b5fd",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        flexShrink: 0,
                        marginTop: 2,
                      }}
                    >
                      ✓
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9375rem", lineHeight: 1.5 }}>{crit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button -> Free Lead Audit */}
              <Link
                href="/#get-in-touch"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                  padding: "16px 28px",
                  minHeight: 50,
                  borderRadius: 12,
                  background: "#6c3bff",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 700,
                  boxShadow: "0 4px 20px rgba(108,59,255,0.4)",
                  transition: "transform 0.2s, background 0.2s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = "#5a2fe0";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = "#6c3bff";
                  (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                }}
              >
                <span>Apply for Founding Cohort</span>
                <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
