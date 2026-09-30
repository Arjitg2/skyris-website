"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FAQ from "../components/FAQ";
import Link from "next/link";
import { IconGlobe, IconBot, IconZap, IconStar, IconCheck, IconWhatsApp, IconArrowRight, IconRefreshCw, IconCalendar } from "../components/icons";

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
    id: "whatsapp-ai-automation",
    icon: <IconBot size={28} color="#a78bfa" />,
    title: "1. WhatsApp AI Automation (Flagship)",
    tagline: "Autonomous lead intake, qualification, and appointment booking 24/7 on WhatsApp.",
    whoFor: "Coaching institutes, clinics, dentists, real estate firms, and high-intent local businesses.",
    problem: "When leads enquire from Meta ads or Google, delayed responses cause 70% of potential buyers to lose interest or message a competitor. Sales reps waste hours answering repetitive FAQs instead of closing.",
    howItWorks: "Clivik AI responds in under 10 seconds directly on WhatsApp. It screens customer intent, answers service questions, nurtures non-responsive leads with gentle follow-ups, and books Google Meet demos or visits straight onto your calendar.",
    outcome: "Response time in under 10 seconds 24/7, zero missed inquiries, and pre-screened leads delivered ready for your counsellors and sales closers.",
    deliverables: [
      "Custom conversational AI trained on your exact business knowledge",
      "Under 10-second 24/7 auto-greeting & qualification sequence",
      "Lead scoring (filters tire-kickers by budget, timeline & intent)",
      "Automated calendar booking & Google Meet generation",
      "Persistent multi-touch follow-up sequence for quiet leads",
      "Live synchronization with Google Sheets or internal CRM",
    ],
    accent: "#a78bfa",
  },
  {
    id: "automated-lead-follow-up",
    icon: <IconRefreshCw size={28} color="#a78bfa" />,
    title: "2. 30-Day WhatsApp Follow-up Autopilot",
    tagline: "Multi-touch sequences that bring cold and unanswered leads back into conversation.",
    whoFor: "Businesses where customers take 2 to 7 days to decide, or busy sales teams that forget to follow up.",
    problem: "Most digital sales are made after the 3rd to 5th touchpoint, yet typical sales reps call once, get no answer, and permanently abandon the lead.",
    howItWorks: "If a qualified prospect stops replying or misses an appointment, smart follow-up sequences automatically check in at optimal intervals with answers to common doubts, social proof, and simple re-booking options.",
    outcome: "Automated follow-ups that bring cold and unanswered leads back into the conversation without any manual texting overhead.",
    deliverables: [
      "Multi-step timed conversational follow-up triggers",
      "Smart stop-on-reply logic to prevent annoying active customers",
      "Objection-handling & doubt-clearing messages",
      "Personalized lead re-activation sequences",
      "Direct integration with WhatsApp Business Cloud API",
      "Weekly follow-up recovery & status dashboard",
    ],
    accent: "#a78bfa",
  },
  {
    id: "whatsapp-marketing",
    icon: <IconZap size={28} color="#a78bfa" />,
    title: "3. WhatsApp Marketing & Broadcasts",
    tagline: "High-engagement Meta-verified broadcast campaigns that keep your brand top-of-mind.",
    whoFor: "Retail brands, academies, clinics, gyms, and seasonal service businesses with customer contact lists.",
    problem: "Marketing emails are buried in spam folders (< 15% open rates) and SMS is ignored. Businesses struggle to get past customers to re-order or re-enroll.",
    howItWorks: "We configure compliant WhatsApp broadcast campaigns with interactive buttons, exclusive seasonal offers, and catalog previews sent directly to your opted-in contacts.",
    outcome: "Unmatched engagement rates compared to ignored emails, generating immediate inquiries, repeat bookings, and festival sales.",
    deliverables: [
      "Meta-verified official template design & approval",
      "High-converting copy & promotional asset curation",
      "Interactive CTA buttons (e.g. 'Claim Offer', 'Book My Slot')",
      "Contact list segmentation by customer interest",
      "Re-engagement sequences for inactive buyers",
      "Deliverability and Meta compliance assurance",
    ],
    accent: "#a78bfa",
  },
  {
    id: "customer-review-automation",
    icon: <IconStar size={28} color="#a78bfa" />,
    title: "4. Customer Review Automation",
    tagline: "Systematic review collection that builds undeniable local reputation on Google.",
    whoFor: "Any local business relying on Google Maps and local search to attract nearby clients.",
    problem: "Happy customers rarely leave reviews unless prompted, while competitors with more reviews dominate Google Maps top rankings.",
    howItWorks: "Following a completed demo, service, or consultation, an automated WhatsApp prompt thanks the customer and provides a 1-tap direct link to open the 5-star Google review box.",
    outcome: "A consistent flow of authentic 5-star Google reviews that improves Google Maps local pack rankings and trust.",
    deliverables: [
      "Automated post-service review request trigger",
      "1-tap direct link to your Google Business review box",
      "Gentle automated reminder for unsubmitted reviews",
      "Internal feedback capture for service concerns",
      "Google Business Profile optimization guidance",
      "Review milestone tracking",
    ],
    accent: "#a78bfa",
  },
  {
    id: "website-development",
    icon: <IconGlobe size={28} color="#a78bfa" />,
    title: "5. High-Converting Business Websites",
    tagline: "Fast, mobile-first websites engineered to turn search traffic into WhatsApp conversations.",
    whoFor: "Businesses that need a clean, high-authority digital presence that captures leads 24/7.",
    problem: "Outdated, slow websites leak visitors because they don't guide prospects to take action or contact the sales team immediately.",
    howItWorks: "We build bespoke, lightning-fast Next.js websites equipped with WhatsApp click-to-chat, smart lead capture forms, local SEO schema, and crisp mobile responsive layouts.",
    outcome: "A professional digital storefront that establishes authority and funnels high-intent visitors directly into your WhatsApp AI sales pipeline.",
    deliverables: [
      "Custom premium design tailored to your specific niche",
      "Mobile-first responsive architecture",
      "WhatsApp click-to-chat integration & sticky action button",
      "Fast lead capture forms connected to your notification channels",
      "Local SEO optimization & Schema.org markup",
      "Rapid deployment in days with complete testing",
    ],
    accent: "#a78bfa",
  },
];

export default function ServicesContent() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(160deg, #1a1040 0%, #261565 28%, #3730a3 52%, #9ca3e0 78%, #c4b5fd 92%, #ede9ff 100%)",
          paddingTop: "var(--subpage-hero-pt, 180px)",
          paddingBottom: 40,
          paddingLeft: "clamp(20px, 6vw, 120px)",
          paddingRight: "clamp(20px, 6vw, 120px)",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Ambient glows */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.28) 0%, transparent 70%)",
            top: "-80px",
            left: "-80px",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            <span>AI Sales &amp; Lead Infrastructure</span>
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5em, 5.5vw, 4.2em)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-0.04em",
              lineHeight: 1.15,
              marginBottom: 20,
              fontFamily: "'FullerSansDT', 'Inter', sans-serif",
            }}
          >
            Autonomous Lead Systems Built for Conversion
          </h1>

          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.92)",
              maxWidth: 680,
              margin: "0 auto 32px",
              lineHeight: 1.6,
            }}
          >
            From instant qualification on WhatsApp to automated appointment scheduling, we engineer systems that turn advertising traffic into paying customers.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <Link
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 32px",
                minHeight: 48,
                borderRadius: 12,
                background: "#fff",
                color: "#3730a3",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 700,
                boxShadow: "0 4px 24px rgba(255,255,255,0.3)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              <span>Build My AI System</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </Link>

            <Link
              href="/pricing"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                padding: "14px 32px",
                minHeight: 48,
                borderRadius: 12,
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.25)",
                transition: "transform 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.03)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              <span>View Packages</span>
            </Link>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 80,
            background: "linear-gradient(to bottom, transparent 0%, #f2f2f7 100%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      </section>

      {/* Services List */}
      <section style={{ background: "#f2f2f7", padding: "40px clamp(20px, 6vw, 120px) 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
          {coreServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              style={{
                background: index === 0 ? "linear-gradient(165deg, #0d0e1a 0%, #15172b 100%)" : "#ffffff",
                borderRadius: 28,
                padding: "clamp(28px, 5vw, 48px)",
                boxShadow: index === 0 ? "0 20px 60px rgba(108,59,255,0.16)" : "0 4px 30px rgba(0,0,0,0.06)",
                border: index === 0 ? "1px solid rgba(108,59,255,0.35)" : "1px solid rgba(0,0,0,0.06)",
                color: index === 0 ? "#ffffff" : "#0d0e1a",
                position: "relative",
              }}
            >
              {index === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 24,
                    right: 28,
                    background: "rgba(108,59,255,0.3)",
                    border: "1px solid rgba(108,59,255,0.5)",
                    color: "#c4b5fd",
                    padding: "4px 12px",
                    borderRadius: 999,
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Most Popular
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: index === 0 ? "rgba(108,59,255,0.25)" : "rgba(108,59,255,0.1)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {service.icon}
                </div>
                <div>
                  <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>
                    {service.title}
                  </h2>
                  <p style={{ color: index === 0 ? "#a78bfa" : "#6c3bff", fontWeight: 600, fontSize: "0.9375rem", margin: "4px 0 0" }}>
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* Grid of details */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 24,
                  marginTop: 28,
                  borderTop: index === 0 ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
                  paddingTop: 24,
                }}
              >
                <div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: index === 0 ? "#c4b5fd" : "#4b5563", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                    Who It&apos;s For
                  </div>
                  <p style={{ fontSize: "0.9375rem", color: index === 0 ? "rgba(255,255,255,0.85)" : "#374151", lineHeight: 1.6, margin: 0 }}>
                    {service.whoFor}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: index === 0 ? "#c4b5fd" : "#4b5563", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                    The Problem It Solves
                  </div>
                  <p style={{ fontSize: "0.9375rem", color: index === 0 ? "rgba(255,255,255,0.85)" : "#374151", lineHeight: 1.6, margin: 0 }}>
                    {service.problem}
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: index === 0 ? "#c4b5fd" : "#4b5563", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                  How It Works
                </div>
                <p style={{ fontSize: "0.9375rem", color: index === 0 ? "rgba(255,255,255,0.85)" : "#374151", lineHeight: 1.6, margin: 0 }}>
                  {service.howItWorks}
                </p>
              </div>

              {/* Deliverables */}
              <div style={{ marginTop: 24 }}>
                <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: index === 0 ? "#c4b5fd" : "#4b5563", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>
                  What You Get
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 10 }}>
                  {service.deliverables.map((deliv, di) => (
                    <div key={di} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: index === 0 ? "#34d399" : "#10b981", fontSize: "0.9375rem", flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: "0.875rem", color: index === 0 ? "rgba(255,255,255,0.9)" : "#4b5563", lineHeight: 1.5 }}>
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA for card */}
              <div
                style={{
                  marginTop: 28,
                  paddingTop: 20,
                  borderTop: index === 0 ? "1px solid rgba(255,255,255,0.08)" : "1px solid rgba(0,0,0,0.06)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: index === 0 ? "#c4b5fd" : "#6c3bff" }}>
                  Outcome: {service.outcome}
                </div>
                <Link
                  href={`https://wa.me/916265022474?text=Hi%20Clivik!%20I%20am%20interested%20in%20your%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 20px",
                    borderRadius: 10,
                    background: index === 0 ? "#6c3bff" : "#0d0e1a",
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <span>Enquire Now</span>
                  <span className="optical-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FAQ />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
