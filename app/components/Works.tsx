"use client";
import ScrollReveal from "./ScrollReveal";
import Link from "next/link";

const works = [
  {
    title: "Dentify Bhopal Template",
    link: "https://dentifybhopal.framer.website/",
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1780293818/My-Google-AI-Studio-App_1_atjomq.png"
  },
  {
    title: "Sofra Restaurant Template",
    link: "https://sofrabhopal.framer.website/",
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1780293817/Sofra-Restaurant-Template_1_tlo7cs.png"
  },
  {
    title: "S-Three Fitness Template",
    link: "https://s-three-fitness.netlify.app/",
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1780293818/Home-Dentify-free-template_1_rgr7k7.png"
  },
];

function WorkCard({ work }: { work: typeof works[0] }) {
  return (
    <a
      href={work.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        textDecoration: "none",
        background: "#fff", borderRadius: 24, padding: 8, overflow: "hidden",
        boxShadow: "0 2px 24px rgba(0,0,0,0.08)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease", cursor: "pointer",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 56px rgba(0,0,0,0.14)";
        const overlay = e.currentTarget.querySelector('.work-overlay') as HTMLElement;
        if (overlay) overlay.style.opacity = "1";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 24px rgba(0,0,0,0.08)";
        const overlay = e.currentTarget.querySelector('.work-overlay') as HTMLElement;
        if (overlay) overlay.style.opacity = "0";
      }}
    >
      {/* Inner Radius Formula: Inner radius = Outer radius (24px) - Padding (8px) = 16px */}
      <div style={{ borderRadius: 16, overflow: "hidden" }}>
        {/* Mac dots */}
        <div style={{ display: "flex", gap: 6, padding: "12px 16px", background: "#f0f0f0", alignItems: "center" }}>
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          <span style={{ marginLeft: "auto", fontSize: 13, fontWeight: 500, color: "#4b5563", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "80%" }}>{work.title}</span>
        </div>

        {/* Image Preview */}
        <div style={{ position: "relative", width: "100%", aspectRatio: "9/16", background: "#111" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={work.imageSrc} alt={work.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          
          {/* Hover Overlay */}
          <div 
            className="work-overlay"
            style={{ 
              position: "absolute", inset: 0, 
              background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent 50%)", 
              opacity: 0, transition: "opacity 0.3s ease",
              display: "flex", alignItems: "flex-end", padding: 24
            }} 
          >
             <div style={{ color: "#fff", fontWeight: 700, fontSize: "16px", display: "inline-flex", alignItems: "center", gap: 8 }}>
               <span>Visit Website</span>
               <span style={{ transform: "translateY(0.5px)" }}>&rarr;</span>
             </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function Works() {
  return (
    <section id="projects" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <ScrollReveal>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "var(--works-flex)" as any, justifyContent: "space-between", alignItems: "var(--works-align)" as any, marginBottom: "var(--sec-mb)" as any, gap: "24px", textAlign: "var(--sec-text-align)" as any }}>
          <div style={{ flex: "1 1 100%" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              padding: "8px 16px", borderRadius: 999,
              background: "#fff", fontSize: "14px", fontWeight: 600, color: "#0d0e1a",
              border: "1px solid rgba(0,0,0,0.08)", marginBottom: 24,
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              fontFamily: "'FullerSansDT', 'Inter', sans-serif"
            }}>Works</div>
            <h2 style={{
              fontSize: "var(--title-size)", fontWeight: 700, color: "#0d0e1a",
              lineHeight: 1.4, letterSpacing: "-0.04em", maxWidth: "var(--title-max-width)",
              fontFamily: "'FullerSansDT', 'Inter', sans-serif"
            }}>Explore Featured Businesses</h2>
          </div>
          <Link href="/portfolio" style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            padding: "12px 28px", minHeight: 48, borderRadius: 999, background: "#6c3bff",
            color: "#fff", textDecoration: "none", fontSize: "15px", fontWeight: 600,
            transition: "all 0.2s ease", whiteSpace: "nowrap", height: "fit-content",
            boxShadow: "0 4px 16px rgba(108,59,255,0.25)"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#5a2fe0"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#6c3bff"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <span>View All Works</span>
            <span style={{ transform: "translateY(0.5px)" }}>&rarr;</span>
          </Link>
        </div>

        <div className="slider-wrapper">
          <div className="slider-mobile">
            {works.map((work, i) => (
              <div key={work.title + i}><WorkCard work={work} /></div>
            ))}
            {/* Duplicated items for infinite marquee on mobile */}
            {works.map((work, i) => (
              <div key={'dup' + i} className="mobile-only-card"><WorkCard work={work} /></div>
            ))}
          </div>
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
