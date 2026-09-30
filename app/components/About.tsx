"use client";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px)" }}>
      <ScrollReveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "var(--sec-mb)", textAlign: "var(--sec-text-align)" as any }}>
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
              Our Mission
            </div>
            <h2
              style={{
                fontSize: "var(--title-size)",
                fontWeight: 700,
                color: "#0d0e1a",
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                maxWidth: 900,
                fontFamily: "'FullerSansDT', 'Inter', sans-serif",
              }}
            >
              We&apos;re Building the Infrastructure <br className="desktop-br" />
              Behind Smarter Sales Conversations
            </h2>
          </div>

          {/* Content Grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "var(--about-flex, row)" as any,
              gap: 40,
              alignItems: "center",
            }}
          >
            {/* Left Image Content */}
            <div
              style={{
                background: "#ffffff",
                borderRadius: 24,
                padding: 16,
                flex: "1 1 45%",
                boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
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
                  minHeight: "360px",
                }}
              >
                <Image
                  src="https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790584426/ChatGPT_Image_Sep_28_2026_02_02_51_PM_n7nhui.png"
                  alt="Arjit Gupta — Founder of Clivik"
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: 24,
                  background: "#ffffff",
                  padding: "16px 24px",
                  borderRadius: 16,
                  zIndex: 10,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <span style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "16px", lineHeight: 1.25 }}>
                  Arjit Gupta
                </span>
                <span style={{ color: "#6c3bff", fontWeight: 600, fontSize: "14px", lineHeight: 1.25, marginTop: 4 }}>
                  Founder, Clivik
                </span>
              </div>
            </div>

            {/* Right Text Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--about-para-gap, 20px)",
                fontSize: "1.0625rem",
                color: "#374151",
                lineHeight: 1.75,
                flex: "1 1 55%",
              }}
            >
              <p style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "1.35rem", lineHeight: 1.4 }}>
                Turning manual lead chasing into automated revenue engines.
              </p>
              <p>
                Clivik helps businesses automate the most repetitive parts of their customer acquisition process — from the moment a lead comes in to the moment they&apos;re ready to speak with your team.
              </p>
              <p>
                Our team combines AI automation, WhatsApp &amp; Meta integrations, sales strategy, and growth systems to build automation that actually works inside your business.
              </p>
              <p>
                We believe that when technology handles the qualification, follow-ups, and calendar booking, your human sales team can focus on what they do best: building relationships and closing deals.
              </p>

              <div
                style={{
                  background: "#ffffff",
                  padding: "20px 24px",
                  borderRadius: 16,
                  borderLeft: "4px solid #6c3bff",
                  marginTop: 8,
                  fontWeight: 600,
                  color: "#0d0e1a",
                  lineHeight: 1.6,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                Founded in Bhopal.<br />
                Built for businesses across India.
              </div>

              <div style={{ marginTop: 8 }}>
                <Link
                  href="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#6c3bff",
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "1rem",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#5a2fe0")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6c3bff")}
                >
                  <span>Learn more about our team and vision</span>
                  <span className="optical-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
