"use client";
import Link from "next/link";
import { IconGlobe, IconStar, IconInstagram, IconGift } from "./icons";

// Floating mock website image card
function ImageMockCard({ title, subtitle, location, rotate, top, left, delay, width = 280, imageSrc, themeMode }: {
  title: string; subtitle: string; location: string; rotate: number;
  top: string; left: string; delay: number; width?: number; imageSrc: string; themeMode: 'dark' | 'light';
}) {
  return (
    <div style={{
      position: "absolute", top, left, width,
      background: themeMode === 'dark' ? "var(--bg-dark-card, #1a1b2e)" : "#fff", borderRadius: 16, overflow: "hidden",
      boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
      border: themeMode === 'dark' ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.05)",
      transform: `rotate(${rotate}deg)`,
      transformOrigin: "bottom center",
      animation: `floatY 5s ease-in-out ${delay}s infinite`,
      ["--rot" as string]: `${rotate}deg`, zIndex: 2,
    }}>
      {/* Browser Bar */}
      <div style={{ display: "flex", gap: 5, padding: "10px 12px 6px", background: themeMode === 'dark' ? "rgba(255,255,255,0.03)" : "#f5f5f5", borderBottom: themeMode === 'dark' ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#28c840" }} />
      </div>
      <div style={{ position: "relative", width: "100%", aspectRatio: "9/16" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={title} />
        <div style={{ position: "absolute", inset: 0, background: themeMode === 'dark' ? "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.1))" : "linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.1))" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 16px 12px" }}>
          <div style={{ fontSize: 12, fontWeight: 800, color: themeMode === 'dark' ? "#fff" : "#111", letterSpacing: 0.5, marginBottom: 2 }}>{title}</div>
          <div style={{ fontSize: 10, color: themeMode === 'dark' ? "rgba(255,255,255,0.8)" : "#555", marginBottom: 6 }}>{subtitle}</div>
          <div style={{ fontSize: 9, color: themeMode === 'dark' ? "rgba(255,255,255,0.5)" : "#888", display: "flex", alignItems: "center", gap: 4 }}>
             📍 [{location}]
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" style={{
      background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
      display: "flex", flexDirection: "column",
      position: "relative", overflow: "hidden",
      paddingTop: 68, /* navbar height */
      paddingBottom: 80, /* space for overlapping ticker */
    }}>
      {/* Orbs */}
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-100px", left: "-100px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.22) 0%, transparent 70%)", bottom: "0px", left: "30%", pointerEvents: "none" }} />
      {/* Circles */}
      <div style={{ position: "absolute", top: "20%", left: "15%", width: 500, height: 500, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "28%", left: "8%", width: 680, height: 680, border: "1px solid rgba(255,255,255,0.04)", borderRadius: "50%", pointerEvents: "none" }} />

      {/* 
        Desktop: two-column grid (text left, cards right), min-height: calc(100vh - 68px)
        Mobile: single column, text centered, cards below
        We use a wrapper div that switches layout via CSS custom vars + media query pattern
      */}
      <div style={{
        maxWidth: 1400, margin: "0 auto", padding: "var(--hero-py) var(--hero-px)",
        width: "100%", position: "relative", zIndex: 1,
        display: "grid",
        gridTemplateColumns: "var(--hero-grid)",
        gap: "var(--hero-gap)",
        alignItems: "center",
        minHeight: "var(--hero-min-height)",
      }}>
        {/* Left / Top: Text */}
        <div style={{ textAlign: "var(--hero-text-align)" as React.CSSProperties["textAlign"] }}>
          {/* Eyebrow Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "8px 16px", borderRadius: 999,
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(139,92,246,0.5)",
            boxShadow: "0 0 15px rgba(139,92,246,0.3)", marginBottom: 24,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff", boxShadow: "0 0 8px #fff" }} />
            <span style={{ color: "#fff", fontSize: "0.9em", fontWeight: 500 }}>Helping Local Businesses Get Found Online</span>
          </div>

          <h1 style={{
            fontSize: "var(--hero-title-size)", fontWeight: 700, lineHeight: 1.1,
            color: "#fff", letterSpacing: "-0.04em", marginBottom: 24,
            maxWidth: "100%", fontFamily: "'FullerSansDT', 'Inter', sans-serif",
          }}>
            Your Business<br />Deserves to<br />Be Found Online
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.75)", fontSize: "var(--hero-sub-size)",
            marginBottom: 32, fontWeight: 300, lineHeight: 1.6,
            maxWidth: "var(--hero-sub-max)", margin: "0 auto 32px",
            whiteSpace: "var(--hero-sub-wrap)",
          }}>
            Website + Google Profile + Social Media — sab kuch ek jagah, affordable price mein
          </p>

          {/* Service Chips */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 24, justifyContent: "var(--hero-chips-justify)" }}>
            {[
              { icon: <IconGlobe size={16} color="#36309d" />, text: "Website" },
              { icon: <IconStar size={16} color="#36309d" />, text: "Google Profile" },
              { icon: <IconInstagram size={16} color="#36309d" />, text: "Social Media" },
            ].map((chip, i) => (
              <div key={i} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)", background: "#fff" }}>
                {chip.icon}
                <span style={{ color: "#36309d", fontSize: "0.9em", fontWeight: 600 }}>{chip.text}</span>
              </div>
            ))}
          </div>

          {/* Free offer line */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 0", marginBottom: 40, justifyContent: "var(--hero-chips-justify)" }}>
            <IconGift size={20} color="#fef08a" />
            <span style={{ color: "#fef08a", fontSize: "0.95em", fontWeight: 500, textShadow: "0 0 10px rgba(254,240,138,0.4)" }}>
              Free Google Business Profile with Every Package
            </span>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "var(--hero-chips-justify)" }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", padding: "15px 30px",
              borderRadius: 12, background: "#fff", color: "#3730a3", textDecoration: "none",
              fontSize: "1em", fontWeight: 700, transition: "all 0.25s ease",
              boxShadow: "0 4px 24px rgba(255,255,255,0.4)",
              flex: "var(--hero-btn-flex)",
              justifyContent: "center",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#f0f0f0"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.transform = "translateY(0)"; }}
            >Get Free Consultation &rarr;</Link>
            <Link href="/portfolio" style={{
              display: "inline-flex", alignItems: "center", padding: "15px 30px",
              borderRadius: 12, background: "#1a1040", color: "#fff",
              textDecoration: "none", fontSize: "1em", fontWeight: 500,
              border: "1px solid rgba(255,255,255,0.2)", transition: "all 0.25s ease",
              flex: "var(--hero-btn-flex)",
              justifyContent: "center",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#261565"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#1a1040"; e.currentTarget.style.transform = "translateY(0)"; }}
            >View Sample Work</Link>
          </div>
        </div>

        {/* Right / Bottom: Floating mock image cards */}
        <div style={{ position: "relative", height: "var(--hero-cards-height)", width: "100%", overflow: "visible", display: "var(--hero-cards-display, flex)" as any, justifyContent: "center" }}>
          <div style={{ position: "relative", width: 320, height: "100%" }}>
            <ImageMockCard
              title="Skyris Analytics" subtitle="AI Studio Platform" location="Global"
              rotate={-10} top="10px" left="-30px" delay={0} width={280} imageSrc="/My-Google-AI-Studio-App (1).png" themeMode="dark"
            />
            <ImageMockCard
              title="Dentify Bhopal" subtitle="Clinic Management" location="Bhopal"
              rotate={-2} top="-15px" left="30px" delay={1.2} width={260} imageSrc="/Home-Dentify-free-template (1).png" themeMode="light"
            />
            <ImageMockCard
              title="Sofra Restaurant" subtitle="Digital Dining" location="Bhopal"
              rotate={8} top="20px" left="100px" delay={0.6} width={270} imageSrc="/Sofra-Restaurant-Template (1).png" themeMode="dark"
            />
          </div>
        </div>
      </div>

      {/* Seamless bottom fade to ticker */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, background: "linear-gradient(to bottom, rgba(237,233,255,0) 0%, #ede9ff 100%)", pointerEvents: "none", zIndex: 0 }} />
    </section>
  );
}
