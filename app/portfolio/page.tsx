"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Link from "next/link";

const works = [
  {
    title: "Dentify Bhopal",
    category: "Dental Clinic",
    desc: "A clean, professional dental clinic website with appointment booking, Google Maps integration and a trust-building design.",
    link: "https://dentifybhopal.framer.website/",
    imageSrc: "/My-Google-AI-Studio-App (1).png",
    tags: ["Website", "Google Profile", "WhatsApp Button"],
    accent: "#0ea5e9",
  },
  {
    title: "Sofra Restaurant",
    category: "Restaurant & Dining",
    desc: "A premium restaurant website with a full menu, online table reservation flow, and an immersive visual design.",
    link: "https://sofrabhopal.framer.website/",
    imageSrc: "/Sofra-Restaurant-Template (1).png",
    tags: ["Website", "Social Media", "Google Profile"],
    accent: "#f59e0b",
  },
  {
    title: "S-Three Fitness",
    category: "Gym & Fitness",
    desc: "High-energy gym website showcasing classes, trainers, membership plans and a strong call-to-action for sign-ups.",
    link: "https://s-three-fitness.netlify.app/",
    imageSrc: "/Home-Dentify-free-template (1).png",
    tags: ["Website", "WhatsApp Automation", "SEO"],
    accent: "#10b981",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, #0d0e1a 0%, #131525 60%, #1a1b2e 100%)",
        paddingTop: 120,
        paddingBottom: 80,
        paddingLeft: "clamp(20px, 6vw, 120px)",
        paddingRight: "clamp(20px, 6vw, 120px)",
        textAlign: "center",
      }}>
        <div style={{ display: "inline-block", padding: "6px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontSize: "0.95em", fontWeight: 500, marginBottom: 24 }}>
          Our Work
        </div>
        <h1 style={{ fontSize: "clamp(2.4em,5vw,4em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
          Real Websites.<br />Real Businesses.
        </h1>
        <p style={{ fontSize: "1.15em", color: "rgba(255,255,255,0.6)", maxWidth: 520, margin: "0 auto 40px" }}>
          Each project is built with care — custom-designed, fast-loading, and ready to bring in customers from day one.
        </p>
        <Link href="/contact" style={{
          display: "inline-block", padding: "15px 36px", borderRadius: 12,
          background: "#6c3bff", color: "#fff", textDecoration: "none",
          fontSize: "1em", fontWeight: 700,
          boxShadow: "0 4px 24px rgba(108,59,255,0.3)",
        }}>
          Get Your Website →
        </Link>
      </section>

      {/* Portfolio Grid */}
      <section style={{ background: "#0d0e1a", padding: "80px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          {works.map((work, i) => (
            <div key={work.title} style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
              alignItems: "center",
              flexDirection: i % 2 === 1 ? "row-reverse" : "row",
            } as React.CSSProperties}>

              {/* Image */}
              <div style={{
                order: i % 2 === 1 ? 2 : 1,
                background: "#0d0e1a", borderRadius: 24, overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.08)",
                aspectRatio: "16/10",
                position: "relative",
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={work.imageSrc}
                  alt={work.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0,
                  display: "flex", gap: 6, padding: "14px 16px",
                  background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)",
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                  <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginLeft: "auto" }}>{work.title}</span>
                </div>
              </div>

              {/* Text */}
              <div style={{ order: i % 2 === 1 ? 1 : 2, padding: "0 8px" }}>
                <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: `${work.accent}24`, color: work.accent, fontSize: "0.85em", fontWeight: 600, marginBottom: 16 }}>{work.category}</div>
                <h2 style={{ fontSize: "clamp(1.8em,3vw,2.4em)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.03em" }}>{work.title}</h2>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05em", lineHeight: 1.75, marginBottom: 28 }}>{work.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                  {work.tags.map(tag => (
                    <span key={tag} style={{ padding: "6px 14px", borderRadius: 999, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85em", color: "#fff", fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
                <a
                  href={work.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-block", padding: "14px 32px", borderRadius: 12,
                    background: "rgba(255,255,255,0.08)", color: "#fff", textDecoration: "none", border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: "1em", fontWeight: 600,
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6c3bff"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  View Live Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0d0e1a", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)", textAlign: "center" }}>
        <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 32, padding: "60px 40px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8em,3.5vw,2.8em)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Want a website like these?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1em", marginBottom: 36 }}>We'll build you a free mockup first. See it before you pay for it.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ display: "inline-block", padding: "15px 36px", borderRadius: 12, background: "#6c3bff", color: "#fff", textDecoration: "none", fontSize: "1em", fontWeight: 700 }}>
              Get Free Mockup →
            </Link>
            <Link href="/pricing" style={{ display: "inline-block", padding: "15px 36px", borderRadius: 12, background: "rgba(255,255,255,0.08)", color: "#fff", textDecoration: "none", fontSize: "1em", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)" }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
