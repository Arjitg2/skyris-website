"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";
import { IconTarget, IconZap, IconMessageCircle, IconHandshake, IconTag, IconEye } from "../components/icons";

const values = [
  { icon: <IconTag size={28} color="#6c3bff" />, title: "Honest Pricing", desc: "What we quote is what you pay. No hidden fees, no surprise charges — ever.", accent: "#6c3bff" },
  { icon: <IconZap size={28} color="#f59e0b" />, title: "Fast Delivery", desc: "Your website goes live in 5 days. While other agencies take 45 days.", accent: "#f59e0b" },
  { icon: <IconMessageCircle size={28} color="#10b981" />, title: "Same-Day Reply", desc: "WhatsApp karo — we reply the same day. No ghosting, no excuses.", accent: "#10b981" },
  { icon: <IconEye size={28} color="#0ea5e9" />, title: "You See First, Pay Later", desc: "We build your mockup for free. You only pay once you love it.", accent: "#0ea5e9" },
];

const milestones = [
  { year: "2023", event: "Clivik founded in Bhopal with a single mission — local businesses deserve great websites." },
  { year: "2024", event: "Delivered 25+ websites for restaurants, clinics, gyms and retail shops across M.P." },
  { year: "2025", event: "Launched AI WhatsApp Automation — helping businesses capture leads 24/7 automatically." },
  { year: "2026", event: "Serving 50+ businesses with full digital presence packages across Madhya Pradesh." },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero — matches home page gradient */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: 100, paddingBottom: 64,
        paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)",
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
            About Clivik
          </div>
          <h1 style={{ fontSize: "clamp(2.8em, 6.5vw, 4.6em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 16 }}>
            Built by Someone Who<br />Understands Your Business
          </h1>
          <p style={{ fontSize: "1.1em", color: "rgba(255,255,255,0.75)", maxWidth: 520, margin: "0 auto" }}>
            Clivik exists because local businesses deserve to be found online — not just the big brands with big budgets.
          </p>
          <Link href="/contact" style={{
            display: "inline-block", marginTop: 32, padding: "14px 32px", borderRadius: 12,
            background: "#fff", color: "#3730a3", textDecoration: "none",
            fontSize: "1em", fontWeight: 700, position: "relative", zIndex: 10,
            boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
          >
            Meet the Founder →
          </Link>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(to bottom, transparent, #f2f2f7)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Founder Section */}
      <section style={{ background: "#f2f2f7", padding: "120px clamp(20px,6vw,120px) 80px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "center" }}>
          {/* Photo */}
          <div style={{ background: "#fff", borderRadius: 24, padding: 16, boxShadow: "0 12px 40px rgba(0,0,0,0.08)", position: "relative" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden", background: "#e0e0e0", minHeight: 320 }}>
              <Image
                src="/arjit-photo.png"
                alt="Arjit Gupta — Founder of Clivik"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div style={{ position: "absolute", bottom: -10, right: 24, background: "#fff", padding: "14px 20px", borderRadius: 14, boxShadow: "0 8px 30px rgba(0,0,0,0.12)" }}>
              <div style={{ fontWeight: 700, color: "#0d0e1a" }}>Arjit Gupta</div>
              <div style={{ color: "#6c3bff", fontWeight: 500, fontSize: "0.9em" }}>Founder, Clivik</div>
            </div>
          </div>

          {/* Story */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: "1.05em", color: "#444", lineHeight: 1.8 }}>
            <p style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "1.3em" }}>Hi, I'm Arjit Gupta — founder of Clivik.</p>
            <p>I started Clivik because I kept seeing local businesses lose customers to competitors who were simply more visible online.</p>
            <p>Their competitors were not better. They were just easier to find on Google.</p>
            <p>That is the problem Clivik exists to solve — helping every local shop, clinic, restaurant, and gym in M.P. get the online presence they deserve, at a price they can actually afford.</p>
            <p>I personally handle every project — because the person who understands your problem should be the same person solving it.</p>
            <div style={{ background: "#fff", padding: "24px", borderRadius: 16, borderLeft: "4px solid #6c3bff", fontWeight: 500, color: "#0d0e1a" }}>
              Based in Bhopal.<br />Built for M.P. businesses.
            </div>
            <Link href="/contact" style={{
              display: "inline-block", padding: "15px 32px", borderRadius: 12,
              background: "#6c3bff", color: "#fff", textDecoration: "none",
              fontSize: "1em", fontWeight: 700, width: "fit-content",
              transition: "transform 0.2s, background 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#5a2fe0"; (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#6c3bff"; (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)"; }}
            >
              Meet The Founder →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#f2f2f7", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8em,3.5vw,2.8em)", fontWeight: 700, color: "#0d0e1a", marginBottom: 40, textAlign: "center" }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {values.map(v => (
              <div key={v.title} style={{
                background: "#161726", borderRadius: 20, padding: "32px",
                boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255,255,255,0.06)",
                display: "flex", flexDirection: "column",
                transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(0,0,0,0.3)"; (e.currentTarget as HTMLElement).style.borderColor = v.accent; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${v.accent}15`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {v.icon.type({ ...v.icon.props, size: 22 })}
                </div>
                <h3 style={{ fontWeight: 800, color: "#fff", fontSize: "1.35em", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontSize: "0.95em" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#0d0e1a", padding: "80px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8em,3.5vw,2.8em)", fontWeight: 700, color: "#fff", marginBottom: 52, textAlign: "center" }}>Our Journey</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, alignItems: "start" }}>
                <div style={{ color: "#6c3bff", fontWeight: 800, fontSize: "1.1em", paddingTop: 4 }}>{m.year}</div>
                <div style={{ paddingBottom: i < milestones.length - 1 ? 32 : 0, borderLeft: i < milestones.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", paddingLeft: 28, position: "relative" }}>
                  {i < milestones.length - 1 && <div style={{ position: "absolute", left: -5, top: 8, width: 10, height: 10, borderRadius: "50%", background: "#6c3bff" }} />}
                  <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>{m.event}</p>
                </div>
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
