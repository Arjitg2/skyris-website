"use client";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface TeamMember {
  name: string;
  role: string;
  categoryIcon: string;
  bio: string;
  skills: string[];
  imageSrc: string;
  objectPosition?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Mr. Sudipto Sarkar",
    role: "AI Automation Engineer",
    categoryIcon: "👨‍💻",
    bio: "Designs and builds the AI-powered automation systems that handle lead qualification, follow-ups, appointment booking and customer conversations.",
    skills: ["AI Agents", "n8n Workflows", "APIs", "Sales Automations"],
    imageSrc: "/images/team/sudipto-sarkar.jpg",
    objectPosition: "center 20%",
  },
  {
    name: "Miss. Prachi Tirole",
    role: "Meta & WhatsApp Integration Specialist",
    categoryIcon: "🔗",
    bio: "Handles Meta, WhatsApp Business and API integrations to connect your ads, conversations and business workflows into one seamless system.",
    skills: ["Meta API", "WhatsApp Cloud", "Webhooks", "Ad Routing"],
    imageSrc: "/images/team/prachi-tirole.jpg",
    objectPosition: "center 15%", // Crop tighter around face/upper body
  },
  {
    name: "Mr. Aryan Chandrawanshi",
    role: "AI Automation Strategist",
    categoryIcon: "🧠",
    bio: "Turns business problems into practical AI workflows designed to reduce manual work, respond faster and capture more opportunities.",
    skills: ["AI Strategy", "Workflow Architecture", "Process Optimization"],
    imageSrc: "/images/team/aryan-chandrawanshi.jpg",
    objectPosition: "center 25%",
  },
  {
    name: "Mr. Pravesh Baghel",
    role: "Growth & Sales Lead",
    categoryIcon: "📈",
    bio: "Focuses on customer acquisition, sales systems and growth strategies that turn automation into measurable business outcomes.",
    skills: ["B2B Acquisition", "Funnel Strategy", "Lead Economics", "Growth"],
    imageSrc: "/images/team/pravesh-baghel.jpg",
    objectPosition: "center 25%",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: "#0d0e1a",
        padding: "var(--sec-py) var(--sec-px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Electric Glows */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: 700,
          height: 350,
          background: "radial-gradient(ellipse at center, rgba(108, 59, 255, 0.22) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "10%",
          width: 500,
          height: 300,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.14) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <ScrollReveal>
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "clamp(36px, 6vw, 64px)" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "8px 18px",
                borderRadius: 999,
                background: "rgba(108, 59, 255, 0.15)",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "#c4b5fd",
                border: "1px solid rgba(108, 59, 255, 0.35)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              <span>MEET THE TEAM</span>
            </div>
            <h2
              style={{
                fontSize: "var(--title-size)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                maxWidth: 900,
                margin: "0 auto 16px",
                fontFamily: "'FullerSansDT', 'Inter', sans-serif",
              }}
            >
              Built by a Team That Understands Your Growth
            </h2>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1.125rem",
                maxWidth: 680,
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              We don&apos;t just build automations. We engineer systems that turn conversations into customers.
            </p>
          </div>

          {/* 4 Cards in 2x2 Grid (Desktop) / Horizontal Stack (Mobile) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "var(--team-grid, repeat(auto-fit, minmax(320px, 1fr)))",
              gap: 28,
            }}
          >
            {teamMembers.map((member, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(170deg, rgba(26, 27, 46, 0.85) 0%, rgba(18, 19, 31, 0.95) 100%)",
                  borderRadius: 24,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 16px 48px rgba(0, 0, 0, 0.3)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  position: "relative",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(-6px)";
                  el.style.borderColor = "rgba(108, 59, 255, 0.45)";
                  el.style.boxShadow = "0 24px 60px rgba(108, 59, 255, 0.22)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget;
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(255, 255, 255, 0.08)";
                  el.style.boxShadow = "0 16px 48px rgba(0, 0, 0, 0.3)";
                }}
              >
                {/* Photo Container */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: 320,
                    overflow: "hidden",
                    background: "#12131f",
                  }}
                >
                  <Image
                    src={member.imageSrc}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: member.objectPosition || "center",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  {/* Bottom Vignette Overlay to blend portrait into card */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(18, 19, 31, 1) 0%, rgba(18, 19, 31, 0.4) 40%, transparent 100%)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Category Pill Over Photo */}
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      padding: "6px 12px",
                      borderRadius: 999,
                      background: "rgba(13, 14, 26, 0.75)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#ffffff",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>{member.categoryIcon}</span>
                    <span>{member.role}</span>
                  </div>
                </div>

                {/* Details Body */}
                <div
                  style={{
                    padding: "24px 28px 28px",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                  }}
                >
                  <h3
                    style={{
                      color: "#ffffff",
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      marginBottom: 4,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {member.name}
                  </h3>
                  <div
                    style={{
                      color: "#a78bfa",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: 14,
                    }}
                  >
                    {member.role}
                  </div>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.78)",
                      fontSize: "0.9375rem",
                      lineHeight: 1.6,
                      marginBottom: 20,
                    }}
                  >
                    {member.bio}
                  </p>

                  {/* Skills / Tech Identity Badges */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 16,
                      borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    {member.skills.map((skill, si) => (
                      <span
                        key={si}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: 8,
                          background: "rgba(108, 59, 255, 0.12)",
                          color: "#c4b5fd",
                          border: "1px solid rgba(108, 59, 255, 0.22)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {skill}
                      </span>
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
