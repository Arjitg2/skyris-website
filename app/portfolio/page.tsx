"use client";
import { useState } from "react";
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
    imageSrc: "/Home-Dentify-free-template (1).png",
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
    imageSrc: "/My-Google-AI-Studio-App (1).png",
    tags: ["Website", "WhatsApp Automation", "SEO"],
    accent: "#10b981",
  },
  {
    title: "Shree Mangalam Properties",
    category: "Real Estate",
    desc: "A premium real estate website for a Bhopal-based property firm — featuring verified listings, locality exploration, and a seamless contact flow.",
    link: "https://shri-mangalam.netlify.app/",
    imageSrc: "/Shree-Mangalam-Properties (1).png",
    tags: ["Website", "Property Listings", "SEO"],
    accent: "#f59e0b",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Restaurant", "Clinic", "Gym", "Retail", "Real Estate"];
  const filteredWorks = filter === "All" ? works : works.filter(w => w.category.includes(filter));

  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: 100,
        paddingBottom: 64,
        paddingLeft: "clamp(20px, 6vw, 120px)",
        paddingRight: "clamp(20px, 6vw, 120px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Orbs */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-80px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", bottom: "0px", right: "10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(139,92,246,0.4)", color: "#e0d9ff", fontSize: "0.9em", fontWeight: 500, marginBottom: 20 }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#c4b5fd", boxShadow: "0 0 6px #c4b5fd" }} />
            Our Work
          </div>
          <h1 style={{ fontSize: "clamp(2.8em, 6.5vw, 4.6em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
            Real Websites.<br />Real Businesses.
          </h1>
          <p style={{ fontSize: "1.1em", color: "rgba(255,255,255,0.75)", maxWidth: 500, margin: "0 auto 32px" }}>
            Each project is built with care — custom-designed, fast-loading, and ready to bring in customers from day one.
          </p>
          <Link href="/contact" style={{
            display: "inline-block", padding: "14px 32px", borderRadius: 12,
            background: "#fff", color: "#3730a3", textDecoration: "none",
            fontSize: "1em", fontWeight: 700,
            boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
          >
            Get Your Website →
          </Link>

          <div style={{ marginTop: 48, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, position: "relative", zIndex: 10 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{
                padding: "8px 24px", borderRadius: 999, fontSize: "0.95em", fontWeight: 700, cursor: "pointer",
                border: filter === cat ? "1px solid #6c3bff" : "1px solid rgba(0,0,0,0.5)",
                background: filter === cat ? "#6c3bff" : "rgba(0,0,0,0.4)",
                color: filter === cat ? "#fff" : "rgba(255,255,255,0.85)",
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s",
                transform: "translateY(0)"
              }}
                onMouseEnter={e => { if (filter !== cat) e.currentTarget.style.background = "rgba(0,0,0,0.6)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { if (filter !== cat) e.currentTarget.style.background = "rgba(0,0,0,0.4)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(to bottom, transparent, #f2f2f7)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Portfolio Grid */}
      <section style={{ background: "#f2f2f7", padding: "50px clamp(20px,6vw,120px) 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          {filteredWorks.map((work, i) => (
            <div key={work.title} style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
              alignItems: "center",
            } as React.CSSProperties}>

              {/* Image */}
              <div style={{
                order: i % 2 === 1 ? 2 : 1,
                background: "#0d0e1a", borderRadius: 24, overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
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
                <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 999, background: `${work.accent}18`, color: work.accent, fontSize: "0.85em", fontWeight: 600, marginBottom: 16 }}>{work.category}</div>
                <h2 style={{ fontSize: "clamp(1.8em,3vw,2.4em)", fontWeight: 800, color: "#0d0e1a", marginBottom: 16, letterSpacing: "-0.03em" }}>{work.title}</h2>
                <p style={{ color: "#555", fontSize: "1.05em", lineHeight: 1.75, marginBottom: 28 }}>{work.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
                  {work.tags.map(tag => (
                    <span key={tag} style={{ padding: "6px 14px", borderRadius: 999, background: "#fff", border: "1px solid rgba(0,0,0,0.1)", fontSize: "0.85em", color: "#333", fontWeight: 500 }}>{tag}</span>
                  ))}
                </div>
                <a
                  href={work.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "inline-block", padding: "14px 32px", borderRadius: 12,
                    background: "#0d0e1a", color: "#fff", textDecoration: "none",
                    fontSize: "1em", fontWeight: 600,
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#6c3bff"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#0d0e1a"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                >
                  View Live Website →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f2f2f7", padding: "20px clamp(20px,6vw,120px) 60px", textAlign: "center" }}>
        <div style={{ background: "linear-gradient(135deg, #0d0e1a, #131525)", borderRadius: 32, padding: "60px 40px", maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8em,3.5vw,2.8em)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>Want a website like these?</h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1em", marginBottom: 36 }}>We'll build you a free mockup first. See it before you pay for it.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ 
              display: "inline-block", padding: "15px 36px", borderRadius: 12, background: "#fff", color: "#0d0e1a", textDecoration: "none", fontSize: "1em", fontWeight: 700, transition: "transform 0.2s" 
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              Get Free Mockup →
            </Link>
            <Link href="/pricing" style={{ 
              display: "inline-block", padding: "15px 36px", borderRadius: 12, background: "rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none", fontSize: "1em", fontWeight: 600, border: "1px solid rgba(255,255,255,0.2)", transition: "transform 0.2s, background 0.2s" 
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; }}
            >
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
