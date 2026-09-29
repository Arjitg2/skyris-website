"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FAQ from "../components/FAQ";
import Link from "next/link";
import { IconGlobe, IconSmartphone, IconBot, IconZap, IconStar, IconCheck, IconWhatsApp, IconArrowRight, IconMessageCircle, IconRefreshCw } from "../components/icons";

interface CoreService {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  whoFor: string;
  problem: string;
  howItWorks: string;
  outcome: string;
  deliverables: string[];
  accent: string;
}

const coreServices: CoreService[] = [
  {
    id: "whatsapp-lead-qualification",
    icon: <IconBot size={28} color="#a78bfa" />,
    title: "1. WhatsApp Lead Qualification",
    tagline: "Instant 24/7 qualification that filters serious buyers from tire-kickers.",
    whoFor: "Clinics, real estate consultants, gyms, salons, and local service providers.",
    problem: "Slow replies cause 50%+ of interested prospects to message your competitors. Meanwhile, business owners waste hours manually answering repetitive questions.",
    howItWorks: "When an inquiry comes in via WhatsApp, an automated assistant greets them in seconds, asks 2-3 qualifying questions (service required, location, budget), and captures their intent.",
    outcome: "100% response rate within 5 seconds, zero missed inquiries, and pre-screened leads delivered ready for consultation or purchase.",
    deliverables: [
      "Custom conversational qualification flow",
      "Instant 24/7 auto-greeting & question sequence",
      "Lead scoring & qualification criteria",
      "Automated calendar booking integration",
      "CRM & Google Sheets live synchronization",
      "Seamless human handover when buyer is ready",
    ],
    accent: "#a78bfa",
  },
  {
    id: "automated-lead-follow-up",
    icon: <IconRefreshCw size={28} color="#a78bfa" />,
    title: "2. Automated Lead Follow-Up",
    tagline: "Multi-touch conversational sequences that prevent interested leads from going cold.",
    whoFor: "Businesses with multi-day buying decisions or busy owners who forget to follow up.",
    problem: "Over 60% of sales happen after the 2nd to 5th contact, yet most local businesses never follow up once after the initial message.",
    howItWorks: "If a qualified prospect doesn't book or purchase right away, smart follow-up sequences automatically check in at optimal intervals with answers to common doubts, case studies, and easy booking links.",
    outcome: "Recover 20% to 40% of abandoned inquiries without spending any extra time on manual texting.",
    deliverables: [
      "Multi-step timed follow-up message sequences",
      "Smart stop-on-reply logic to prevent spamming",
      "Objection-handling & FAQ follow-ups",
      "Personalized lead re-engagement triggers",
      "Integration with your active WhatsApp Business account",
      "Weekly follow-up conversion reporting",
    ],
    accent: "#a78bfa",
  },
  {
    id: "whatsapp-marketing",
    icon: <IconZap size={28} color="#a78bfa" />,
    title: "3. WhatsApp Marketing",
    tagline: "Targeted broadcast campaigns that drive repeat business & high engagement.",
    whoFor: "Restaurants, retail stores, boutiques, fitness centers, and event organizers.",
    problem: "Marketing emails are rarely opened (< 15%), and SMS is dismissed as spam. Businesses struggle to get past customers to re-order.",
    howItWorks: "We create compliant, high-converting WhatsApp broadcast campaigns with interactive buttons, special seasonal offers, and catalog previews sent directly to your opted-in contacts.",
    outcome: "Up to 98% open rates and 30-50% click-through rates, delivering immediate foot traffic, repeat orders, and festival sales.",
    deliverables: [
      "Meta-compliant broadcast template creation",
      "Copywriting & promotional asset design",
      "Interactive CTA buttons (e.g., 'Claim Offer', 'Book Now')",
      "Customer contact list segmentation",
      "Re-engagement sequences for inactive buyers",
      "Deliverability & policy compliance management",
    ],
    accent: "#a78bfa",
  },
  {
    id: "customer-review-automation",
    icon: <IconStar size={28} color="#a78bfa" />,
    title: "4. Customer Review Automation",
    tagline: "Automatically collect authentic 5-star Google reviews on complete autopilot.",
    whoFor: "Any local business relying on Google Maps and local search to attract nearby clients.",
    problem: "Satisfied customers forget to leave reviews unless prompted, while competitors with more reviews dominate Google Maps top rankings.",
    howItWorks: "Immediately following a completed service, appointment, or delivery, an automated WhatsApp message thanks the customer and provides a 1-tap direct link to leave a 5-star Google review.",
    outcome: "A continuous flow of genuine 5-star Google reviews that propels your business to the top of Google Maps local pack.",
    deliverables: [
      "Automated post-purchase review request workflow",
      "1-tap direct link to your Google Business review box",
      "Gentle automated reminder for unsubmitted reviews",
      "Internal feedback capture for service concerns",
      "Google Business Profile optimization guidance",
      "Milestone tracking (e.g. reaching 50, 100, 200 reviews)",
    ],
    accent: "#a78bfa",
  },
  {
    id: "website-development",
    icon: <IconGlobe size={28} color="#a78bfa" />,
    title: "5. Website Development",
    tagline: "High-speed, mobile-first websites built to convert visitors into paying clients.",
    whoFor: "Local businesses needing a modern, professional online identity delivered in 5 days.",
    problem: "Outdated, sluggish websites leak prospects because they load slowly and don't make it effortless to initiate contact.",
    howItWorks: "We engineer custom-designed, lightweight websites equipped with WhatsApp click-to-chat, lead capture forms, local SEO schema, and crisp mobile layouts.",
    outcome: "A high-authority 24/7 digital storefront that ranks locally and converts searchers into immediate WhatsApp inquiries.",
    deliverables: [
      "Custom premium design tailored to your niche",
      "Mobile-first responsive architecture",
      "WhatsApp click-to-chat integration & sticky button",
      "Fast lead capture forms connected to your phone/email",
      "Local SEO optimization & Schema.org markup",
      "5 to 7 day guaranteed delivery + free mockup first",
    ],
    accent: "#a78bfa",
  },
];

export default function ServicesContent() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section style={{
        background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
        paddingTop: "var(--subpage-hero-pt, 208px)",
        paddingBottom: 24,
        paddingLeft: "clamp(20px, 6vw, 120px)",
        paddingRight: "clamp(20px, 6vw, 120px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Ambient glows */}
        <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)", top: "-80px", left: "-80px", pointerEvents: "none" }} />
        <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)", bottom: "0px", right: "10%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "10%", left: "10%", width: 420, height: 420, border: "1px solid rgba(255,255,255,0.07)", borderRadius: "50%", pointerEvents: "none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 999, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(139,92,246,0.4)", color: "#fff", fontSize: "0.875rem", fontWeight: 500, marginBottom: 24 }}>
            <span>Core Digital Solutions</span>
          </div>

          <h1 style={{ fontSize: "clamp(2.8em, 6vw, 4.4em)", fontWeight: 700, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.15, marginBottom: 20 }}>
            Five Core Services.<br />One Outcome — More Customers on Autopilot.
          </h1>

          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)", maxWidth: 640, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Everything a local business needs to capture, qualify, follow up with, and convert leads — without extra staff or wasted hours.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 64 }}>
            <Link href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20learn%20more%20about%20your%20services." target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "14px 32px", minHeight: 48, borderRadius: 12,
              background: "#fff", color: "#3730a3", textDecoration: "none",
              fontSize: "1rem", fontWeight: 700,
              boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(255,255,255,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(255,255,255,0.3)"; }}
            >
              <span>Get Free Consultation</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </Link>

            <Link href="/pricing" style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              padding: "14px 32px", minHeight: 48, borderRadius: 12,
              background: "rgba(255,255,255,0.12)", color: "#fff", textDecoration: "none",
              fontSize: "1rem", fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)",
              transition: "transform 0.2s, background 0.2s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
            >
              <span>View Packages</span>
            </Link>
          </div>

          {/* Trust points bar */}
          <div style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: 16,
            background: "#0d0e1a",
            padding: "16px 28px",
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
            fontSize: "0.9375rem",
            color: "#fff",
            marginBottom: 32,
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#c4b5fd", fontWeight: 700 }}>100%</span> Free Mockup First</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#c4b5fd", fontWeight: 700 }}>5 Days</span> Delivery</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}><span style={{ color: "#c4b5fd", fontWeight: 700 }}>24/7</span> WhatsApp AI</span>
            <span style={{ color: "rgba(255,255,255,0.4)" }}>•</span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>Same-Day WhatsApp Reply</span>
          </div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 140, background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)", pointerEvents: "none", zIndex: 0 }} />
      </section>

      {/* Services Detail List */}
      <section style={{ background: "#f2f2f7", padding: "64px clamp(20px,6vw,120px)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
          {coreServices.map((service, idx) => (
            <article
              key={service.id}
              id={service.id}
              style={{
                background: "#161726",
                borderRadius: 24,
                padding: "clamp(28px, 4vw, 48px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.16)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: 40,
                alignItems: "start",
                transition: "border-color 0.25s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = service.accent; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}
            >
              {/* Left Column: Core explanation */}
              <div>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: `${service.accent}20`, display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {service.icon}
                </div>

                <h2 style={{ fontSize: "clamp(1.5em, 2.5vw, 1.9em)", fontWeight: 700, color: "#fff", marginBottom: 12, lineHeight: 1.25 }}>
                  {service.title}
                </h2>

                <p style={{ color: service.accent, fontSize: "1.05rem", fontWeight: 600, marginBottom: 24, lineHeight: 1.5 }}>
                  {service.tagline}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "rgba(255,255,255,0.88)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                  <div>
                    <strong style={{ color: "#fff", display: "block", marginBottom: 4 }}>🎯 Who It Is For:</strong>
                    <span>{service.whoFor}</span>
                  </div>

                  <div>
                    <strong style={{ color: "#fff", display: "block", marginBottom: 4 }}>⚠️ The Problem:</strong>
                    <span>{service.problem}</span>
                  </div>

                  <div>
                    <strong style={{ color: "#fff", display: "block", marginBottom: 4 }}>⚙️ How It Works:</strong>
                    <span>{service.howItWorks}</span>
                  </div>

                  <div>
                    <strong style={{ color: "#fff", display: "block", marginBottom: 4 }}>📈 Expected Outcome:</strong>
                    <span>{service.outcome}</span>
                  </div>
                </div>

                <div style={{ marginTop: 32 }}>
                  <Link
                    href={`https://wa.me/916265022474?text=${encodeURIComponent(`Hi Clivik! I want to know more about ${service.title} for my business.`)}`}
                    target="_blank" rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      background: "#6c3bff", color: "#fff", padding: "12px 24px", minHeight: 48,
                      borderRadius: 12, textDecoration: "none", fontSize: "0.9375rem", fontWeight: 700,
                      transition: "background 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#5a2fe0"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#6c3bff"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
                  >
                    <span>Inquire About This Service</span>
                    <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Deliverables Box */}
              <div style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                padding: "28px 24px",
              }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                  <IconCheck size={20} color={service.accent} />
                  <span>What Clivik Provides</span>
                </h3>

                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "0.925rem", color: "rgba(255,255,255,0.92)", lineHeight: 1.5 }}>
                      <span style={{ color: service.accent, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ background: "#f2f2f7", paddingBottom: 80, paddingLeft: "clamp(20px,6vw,120px)", paddingRight: "clamp(20px,6vw,120px)", textAlign: "center" }}>
        <div style={{ background: "#0d0e1a", borderRadius: 32, padding: "64px 32px", maxWidth: 860, margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(2em, 3.8vw, 3.1em)", fontWeight: 700, color: "#fff", marginBottom: 16 }}>
            Not sure which service fits your business?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.1em", marginBottom: 32, maxWidth: 560, margin: "0 auto 32px", lineHeight: 1.6 }}>
            WhatsApp us directly. Tell us about your business and we&apos;ll recommend the exact setup you need. Free guidance, zero sales pressure.
          </p>
          <a
            href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20know%20more%20about%20your%20services."
            target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "14px 32px", minHeight: 48, borderRadius: 12, background: "#25D366", color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: 700, transition: "transform 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            <IconWhatsApp size={20} color="#fff" />
            <span>Chat with Us on WhatsApp</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </a>
        </div>
      </section>

      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
