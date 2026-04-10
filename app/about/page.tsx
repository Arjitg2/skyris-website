"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Image from "next/image";
import Link from "next/link";

import { IconTarget, IconZap, IconWhatsApp, IconUsers } from "../components/icons";

const values = [
  { icon: <IconTarget size={32} color="#6c3bff" />, title: "Honest Pricing", desc: "What we quote is what you pay. No hidden fees, no surprise charges — ever." },
  { icon: <IconZap size={32} color="#6c3bff" />, title: "Fast Delivery", desc: "Your website goes live in 5 days. While other agencies take 45 days." },
  { icon: <IconWhatsApp size={32} color="#25D366" />, title: "Same-Day Reply", desc: "WhatsApp karo — we reply the same day. No ghosting, no excuses." },
  { icon: <IconUsers size={32} color="#6c3bff" />, title: "You See First, Pay Later", desc: "We build your mockup for free. You only pay once you love it." },
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

      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, #0d0e1a 0%, #131525 60%, #1a1b2e 100%)",
        paddingTop: 120, paddingBottom: 80,
        paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)",
        textAlign: "center",
      }}>
        <div style={{ display: "inline-block", padding: "6px 18px", borderRadius: 999, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontSize: "0.95em", fontWeight: 500, marginBottom: 24 }}>
          About Clivik
        </div>
        <h1 style={{ fontSize: "clamp(2.4em,5vw,4em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.1, marginBottom: 20 }}>
          Built by Someone Who<br />Understands Your Business
        </h1>
        <p style={{ fontSize: "1.15em", color: "rgba(255,255,255,0.6)", maxWidth: 540, margin: "0 auto" }}>
          Clivik exists because local businesses deserve to be found online — not just the big brands with big budgets.
        </p>
      </section>

      {/* Founder Section */}
      <section style={{ background: "#0d0e1a", padding: "80px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "center" }}>
          {/* Photo */}
          <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 24, padding: 16, border: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", borderRadius: 16, overflow: "hidden", background: "#1a1b2e", minHeight: 320 }}>
              <Image
                src="/arjit-photo.png"
                alt="Arjit Gupta — Founder of Clivik"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div style={{ position: "absolute", bottom: -10, right: 24, background: "#1a1b2e", padding: "14px 20px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.12)" }}>
              <div style={{ fontWeight: 700, color: "#fff" }}>Arjit Gupta</div>
              <div style={{ color: "#8b5cf6", fontWeight: 500, fontSize: "0.9em" }}>Founder, Clivik</div>
            </div>
          </div>

          {/* Story */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, fontSize: "1.05em", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
            <p style={{ fontWeight: 700, color: "#fff", fontSize: "1.3em" }}>Hi, I'm Arjit Gupta — founder of Clivik.</p>
            <p>I started Clivik because I kept seeing local businesses lose customers to competitors who were simply more visible online.</p>
            <p>Their competitors were not better. They were just easier to find on Google.</p>
            <p>That is the problem Clivik exists to solve — helping every local shop, clinic, restaurant, and gym in M.P. get the online presence they deserve, at a price they can actually afford.</p>
            <p>I personally handle every project — because the person who understands your problem should be the same person solving it.</p>
            <div style={{ background: "rgba(255,255,255,0.04)", padding: "24px", borderRadius: 16, borderLeft: "4px solid #6c3bff", fontWeight: 500, color: "#fff" }}>
              Based in Bhopal.<br />Built for M.P. businesses.
            </div>
            <Link href="/contact" style={{
              display: "inline-block", padding: "15px 32px", borderRadius: 12,
              background: "#6c3bff", color: "#fff", textDecoration: "none",
              fontSize: "1em", fontWeight: 700, width: "fit-content",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "#5a2fe0"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "#6c3bff"}
            >
              Work With Me →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#0d0e1a", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(1.8em,3.5vw,2.8em)", fontWeight: 700, color: "#fff", marginBottom: 40, textAlign: "center" }}>What We Stand For</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {values.map(v => (
              <div key={v.title} style={{
                background: "rgba(255,255,255,0.04)", borderRadius: 20, padding: "36px 28px",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              >
                <div style={{ marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 800, color: "#fff", fontSize: "1.2em", marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{v.desc}</p>
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
