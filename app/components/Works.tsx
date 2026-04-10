"use client";
import Link from "next/link";

const works = [
  {
    title: "Dentify Bhopal Template",
    link: "https://dentifybhopal.framer.website/",
    imageSrc: "/My-Google-AI-Studio-App (1).png"
  },
  {
    title: "Sofra Restaurant Template",
    link: "https://sofrabhopal.framer.website/",
    imageSrc: "/Sofra-Restaurant-Template (1).png"
  },
  {
    title: "S-Three Fitness Template",
    link: "https://s-three-fitness.netlify.app/",
    imageSrc: "/Home-Dentify-free-template (1).png"
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
        background: "#fff", borderRadius: 20, overflow: "hidden",
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
      {/* Mac dots */}
      <div style={{ display: "flex", gap: 5, padding: "10px 14px", background: "#f0f0f0", alignItems: "center" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "auto", fontSize: 11, color: "#aaa", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "80%" }}>{work.title}</span>
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
            background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)", 
            opacity: 0, transition: "opacity 0.3s ease",
            display: "flex", alignItems: "flex-end", padding: 24
          }} 
        >
           <div style={{ color: "#fff", fontWeight: 600, fontSize: "1.1em", display: "flex", alignItems: "center", gap: 8 }}>
             Visit Website &rarr;
           </div>
        </div>
      </div>
    </a>
  );
}

export default function Works() {
  return (
    <section id="projects" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "var(--works-flex)" as any, justifyContent: "space-between", alignItems: "var(--works-align)" as any, marginBottom: "var(--sec-mb)" as any, gap: "24px", textAlign: "var(--sec-text-align)" as any }}>
          <div style={{ flex: "1 1 100%" }}>
            <div style={{
              display: "inline-block", padding: "5px 14px", borderRadius: 999,
              background: "#fff", fontSize: "1em", fontWeight: 500, color: "#111", /* Subheading size 1em */
              border: "1px solid rgba(0,0,0,0.08)", marginBottom: 16,
              fontFamily: "'FullerSansDT', 'Inter', sans-serif"
            }}>Works</div>
            <h2 style={{
              fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
              lineHeight: 1.1, letterSpacing: "-0.04em", maxWidth: "var(--title-max-width)",
              fontFamily: "'FullerSansDT', 'Inter', sans-serif"
            }}>Explore Featured Businesses</h2>
          </div>
          <Link href="/portfolio" style={{
            padding: "13px 26px", borderRadius: 999, background: "#6c3bff",
            color: "#fff", textDecoration: "none", fontSize: "1em", fontWeight: 600,
            transition: "all 0.2s", whiteSpace: "nowrap", height: "fit-content"
          }}
            onMouseEnter={e => { e.currentTarget.style.background = "#5a2fe0"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "#6c3bff"; e.currentTarget.style.transform = "translateY(0)"; }}
          >View All Works</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", gap: 24 }}>
          {works.map(work => <WorkCard key={work.title} work={work} />)}
        </div>
      </div>
    </section>
  );
}
