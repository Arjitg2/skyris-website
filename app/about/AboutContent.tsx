"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Team from "../components/Team";
import Image from "next/image";
import Link from "next/link";
import { IconZap, IconBot, IconTarget, IconCheck } from "../components/icons";

const principles = [
  {
    icon: <IconZap size={28} color="#a78bfa" />,
    title: "Instant Response First",
    desc: "Speed is the #1 conversion factor in digital sales. If you reply in seconds, you win the customer before competitors even notice.",
    accent: "#a78bfa",
  },
  {
    icon: <IconBot size={28} color="#a78bfa" />,
    title: "Intelligent Qualification",
    desc: "We never deploy dumb decision trees. Our systems use context-aware AI to qualify real intent, timeline, and customer budget.",
    accent: "#a78bfa",
  },
  {
    icon: <IconTarget size={28} color="#a78bfa" />,
    title: "Closing Focused",
    desc: "Automation exists to produce revenue. Every conversation workflow is engineered to book demos, visits, or consults.",
    accent: "#a78bfa",
  },
  {
    icon: <IconCheck size={28} color="#a78bfa" />,
    title: "End-to-End Integration",
    desc: "Meta ads, WhatsApp Cloud API, Google Calendar, and your CRM connected into one reliable, self-healing sales machine.",
    accent: "#a78bfa",
  },
];

export default function AboutContent() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
          paddingTop: "var(--subpage-hero-pt, 180px)",
          paddingBottom: "var(--about-hero-pb, 80px)",
          paddingLeft: "clamp(20px, 6vw, 120px)",
          paddingRight: "clamp(20px, 6vw, 120px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow Orbs */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)",
            top: "-80px",
            left: "-80px",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            <span>About Clivik</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5em, 5.5vw, 4.2em)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
              marginBottom: 20,
              fontFamily: "'FullerSansDT', 'Inter', sans-serif",
            }}
          >
            Built by a Team That Understands Your Growth
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.92)",
              maxWidth: 640,
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            We don&apos;t just build automations. We engineer systems that turn conversations into customers.
          </p>

          <Link
            href="#team"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              padding: "14px 32px",
              minHeight: 48,
              borderRadius: 12,
              background: "#ffffff",
              color: "#3730a3",
              textDecoration: "none",
              fontSize: "1rem",
              fontWeight: 700,
              boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            <span>Meet Our Team</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 90,
            background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      </section>

      {/* Founder & Vision Section */}
      <section style={{ background: "#f2f2f7", padding: "64px clamp(20px,6vw,120px) 100px" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Photo */}
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: 16,
              boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: 16,
                overflow: "hidden",
                background: "#e0e0e0",
                minHeight: 340,
              }}
            >
              <Image
                src="https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790584426/ChatGPT_Image_Sep_28_2026_02_02_51_PM_n7nhui.png"
                alt="Arjit Gupta — Founder of Clivik"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -12,
                right: 24,
                background: "#fff",
                padding: "16px 24px",
                borderRadius: 16,
                boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                border: "1px solid rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "16px", lineHeight: 1.25 }}>
                Arjit Gupta
              </div>
              <div style={{ color: "#6c3bff", fontWeight: 600, fontSize: "14px", lineHeight: 1.25, marginTop: 4 }}>
                Founder, Clivik
              </div>
            </div>
          </div>

          {/* Vision & Story */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              fontSize: "1.0625rem",
              color: "#374151",
              lineHeight: 1.75,
            }}
          >
            <h2
              style={{
                fontWeight: 800,
                color: "#0d0e1a",
                fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
                lineHeight: 1.25,
                letterSpacing: "-0.03em",
              }}
            >
              We&apos;re Building the Infrastructure Behind Smarter Sales Conversations
            </h2>
            <p>
              Clivik helps businesses automate the most repetitive parts of their customer acquisition process — from the moment a lead comes in to the moment they&apos;re ready to speak with your team.
            </p>
            <p>
              Our team combines AI automation, WhatsApp &amp; Meta integrations, sales strategy and growth systems to build automation that actually works inside your business.
            </p>
            <p>
              When a lead submits an inquiry, every second of hesitation reduces the probability of a conversion. By giving local and growing businesses the same instant AI response infrastructure used by multi-billion dollar tech companies, we level the playing field.
            </p>

            <div
              style={{
                background: "#fff",
                padding: "20px 24px",
                borderRadius: 16,
                borderLeft: "4px solid #6c3bff",
                fontWeight: 600,
                color: "#0d0e1a",
                lineHeight: 1.6,
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              Founded in Bhopal.<br />
              Built for businesses across India.
            </div>
          </div>
        </div>
      </section>

      {/* SaaS/AI Team Section */}
      <Team />

      {/* Engineering Principles */}
      <section
        style={{
          background: "#0d0e1a",
          padding: "80px clamp(20px,6vw,120px) 120px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span
              style={{
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(108,59,255,0.2)",
                color: "#c4b5fd",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "inline-block",
                marginBottom: 16,
              }}
            >
              Engineering Principles
            </span>
            <h2 style={{ fontSize: "clamp(2em, 3.5vw, 2.8em)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em" }}>
              How We Build Systems That Deliver
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
            }}
          >
            {principles.map(p => (
              <div
                key={p.title}
                style={{
                  background: "#161726",
                  borderRadius: 20,
                  padding: "32px 24px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.borderColor = p.accent;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${p.accent}15`,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  {p.icon}
                </div>
                <h3 style={{ fontWeight: 700, color: "#fff", fontSize: "1.25em", marginBottom: 12 }}>
                  {p.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.6, fontSize: "0.9375rem" }}>
                  {p.desc}
                </p>
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
