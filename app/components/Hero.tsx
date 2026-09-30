"use client";
import Link from "next/link";
import { IconBot, IconZap, IconCalendar } from "./icons";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        paddingTop: 88,
        paddingBottom: 120,
      }}
    >
      {/* Background Radial Orbs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)",
          top: "-100px",
          left: "-100px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,181,253,0.22) 0%, transparent 70%)",
          bottom: "0px",
          left: "30%",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "calc(var(--hero-py) * 1.3) var(--hero-px) var(--hero-py)",
          width: "100%",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "var(--hero-grid)",
          gap: "var(--hero-gap)",
          alignItems: "center",
          minHeight: "var(--hero-min-height)",
        }}
      >
        {/* Left: Text & Value Proposition */}
        <div style={{ textAlign: "var(--hero-text-align)" as React.CSSProperties["textAlign"] }}>
          {/* Eyebrow Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.28)",
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              marginBottom: 24,
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            }}
          >
            <IconZap size={16} color="#c4b5fd" />
            <span>Built for Businesses That Can&apos;t Afford to Lose Leads</span>
          </div>

          {/* Main H1 Title */}
          <h1
            style={{
              fontSize: "calc(var(--hero-title-size) * 1.1)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#fff",
              letterSpacing: "-0.04em",
              marginBottom: 20,
              maxWidth: "100%",
              fontFamily: "'FullerSansDT', 'Inter', sans-serif",
            }}
          >
            Stop Losing Leads.<br />
            Put Your WhatsApp Sales on Autopilot.
          </h1>

          {/* Primary Subtext */}
          <p
            style={{
              color: "rgba(255,255,255,0.95)",
              fontSize: "1.125rem",
              marginBottom: 28,
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "var(--hero-sub-max, 620px)",
              margin: "0 auto 28px",
            }}
          >
            AI-powered WhatsApp automation that captures, qualifies, follows up automatically and books appointments — 24/7 on WhatsApp.
          </p>

          {/* Core Feature Chips */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 36,
              justifyContent: "var(--hero-chips-justify)",
            }}
          >
            {[
              { icon: <IconZap size={16} color="#3730a3" />, text: "Instant WhatsApp Response (<10s)" },
              { icon: <IconBot size={16} color="#3730a3" />, text: "Automated Lead Qualification" },
              { icon: <IconCalendar size={16} color="#3730a3" />, text: "Google Meet Demo Booking" },
            ].map((chip, i) => (
              <div
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 16px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "#ffffff",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                }}
              >
                <span className="optical-center">{chip.icon}</span>
                <span style={{ color: "#3730a3", fontSize: "0.875rem", fontWeight: 700 }}>
                  {chip.text}
                </span>
              </div>
            ))}
          </div>

          {/* Call-to-Actions */}
          <div
            style={{
              display: "flex",
              gap: 16,
              flexWrap: "wrap",
              justifyContent: "var(--hero-chips-justify)",
            }}
            className="hero-cta-row"
          >
            <Link
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20a%20free%20lead%20audit%20/%20live%20WhatsApp%20AI%20demo."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "16px 36px",
                minHeight: 52,
                borderRadius: 12,
                background: "#ffffff",
                color: "#3730a3",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 700,
                transition: "all 0.25s ease",
                boxShadow: "0 4px 24px rgba(255,255,255,0.45)",
                flex: "var(--hero-btn-flex)",
                justifyContent: "center",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#f5f5f5";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>Claim Free Lead Audit</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </Link>

            <Link
              href="#how-it-works"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "16px 32px",
                minHeight: 52,
                borderRadius: 12,
                background: "rgba(108, 59, 255, 0.4)",
                color: "#ffffff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.25)",
                transition: "all 0.25s ease",
                flex: "var(--hero-btn-flex)",
                justifyContent: "center",
                whiteSpace: "nowrap",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(108, 59, 255, 0.65)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(108, 59, 255, 0.4)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>See How It Works</span>
            </Link>
          </div>
        </div>

        {/* Right: Interactive High-Tech WhatsApp AI Engine Preview Card */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 440,
              background: "#0d0e1a",
              borderRadius: 24,
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 24px 72px rgba(0,0,0,0.5)",
              overflow: "hidden",
              animation: "floatY 6s ease-in-out infinite",
            }}
          >
            {/* Header Bar */}
            <div
              style={{
                background: "#075e54",
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#ffffff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "#128c7e",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                  }}
                >
                  ⚡
                </div>
                <div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
                    <span>Clivik AI Sales Engine</span>
                    <span style={{ color: "#25d366", fontSize: 10 }}>●</span>
                  </div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.85 }}>Live · 24/7 Autopilot</div>
                </div>
              </div>
              <span
                style={{
                  fontSize: "0.6875rem",
                  padding: "4px 8px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.2)",
                  fontWeight: 600,
                }}
              >
                Inbound Demo Flow
              </span>
            </div>

            {/* Chat Body */}
            <div
              style={{
                background: "#1a1b2e",
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 12,
                fontSize: "0.875rem",
              }}
            >
              {/* Lead Message */}
              <div
                style={{
                  alignSelf: "flex-end",
                  background: "#1e3a5f",
                  color: "#ffffff",
                  padding: "10px 14px",
                  borderRadius: "14px 14px 2px 14px",
                  maxWidth: "88%",
                  lineHeight: 1.45,
                }}
              >
                Hi, I saw your ad. Want to know about your NEET batch.
                <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.6)", textAlign: "right", marginTop: 4 }}>
                  10:14 AM ✓✓
                </div>
              </div>

              {/* AI Reply 1 */}
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "#262940",
                  color: "#ffffff",
                  padding: "10px 14px",
                  borderRadius: "14px 14px 14px 2px",
                  maxWidth: "90%",
                  border: "1px solid rgba(255,255,255,0.06)",
                  lineHeight: 1.45,
                }}
              >
                Hey Rahul! 👋 Thanks for reaching out. Are you preparing for NEET 2027 or targetting this year&apos;s batch?
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6875rem", color: "#a78bfa", marginTop: 4 }}>
                  <span>⚡ Replied in 6s</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>10:14 AM</span>
                </div>
              </div>

              {/* Lead Reply */}
              <div
                style={{
                  alignSelf: "flex-end",
                  background: "#1e3a5f",
                  color: "#ffffff",
                  padding: "10px 14px",
                  borderRadius: "14px 14px 2px 14px",
                  maxWidth: "88%",
                }}
              >
                2027 batch.
                <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.6)", textAlign: "right", marginTop: 4 }}>
                  10:15 AM ✓✓
                </div>
              </div>

              {/* AI Reply 2 with Meet Link */}
              <div
                style={{
                  alignSelf: "flex-start",
                  background: "#262940",
                  color: "#ffffff",
                  padding: "10px 14px",
                  borderRadius: "14px 14px 14px 2px",
                  maxWidth: "92%",
                  border: "1px solid rgba(108,59,255,0.3)",
                  lineHeight: 1.45,
                }}
              >
                Understood! Free live 1-on-1 demo slot confirmed for Tomorrow at 4:00 PM. 🎉
                <div
                  style={{
                    margin: "8px 0 4px",
                    padding: "8px 10px",
                    background: "rgba(108,59,255,0.15)",
                    borderRadius: 8,
                    border: "1px solid rgba(108,59,255,0.3)",
                    fontSize: "0.75rem",
                    color: "#c4b5fd",
                  }}
                >
                  📅 Google Meet: meet.google.com/pex-demo<br />
                  Academic Counsellor Assigned
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.6875rem", color: "#34d399", marginTop: 4 }}>
                  <span>✓ Demo Booked on Calendar</span>
                  <span style={{ color: "rgba(255,255,255,0.5)" }}>10:15 AM</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div
              style={{
                background: "#12131f",
                padding: "12px 16px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                <span>Zero Missed Leads</span>
              </span>
              <span style={{ color: "#c4b5fd", fontWeight: 600 }}>WhatsApp + Meet Synced</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fade into bottom section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to bottom, rgba(237,233,255,0) 0%, #f2f2f7 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </section>
  );
}
