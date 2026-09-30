"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { IconCheck, IconZap, IconCalendar, IconBot } from "./icons";

interface DemoScenario {
  id: string;
  name: string;
  industry: string;
  badge: string;
  messages: Array<{
    sender: "lead" | "ai";
    text: string;
    time: string;
    meta?: string;
  }>;
  stages: Array<{
    label: string;
    state: string;
    active: boolean;
  }>;
}

const scenarios: DemoScenario[] = [
  {
    id: "coaching",
    name: "Coaching & Education",
    industry: "NEET / JEE / IELTS Academy",
    badge: "15-min Online Demo Flow",
    messages: [
      {
        sender: "lead",
        text: "Hi, I saw your ad. Want to know about your NEET batch.",
        time: "10:14 AM",
      },
      {
        sender: "ai",
        text: "Absolutely! 👋 Thanks for reaching out to Apex Academy. Are you looking for NEET 2027 preparation or the current dropper batch?",
        time: "10:14 AM",
        meta: "⚡ Replied in 6s",
      },
      {
        sender: "lead",
        text: "2027 batch",
        time: "10:15 AM",
      },
      {
        sender: "ai",
        text: "Perfect! We offer intensive 2-year live online batches with daily practice sheets and 1-on-1 mentorship. Would you like to book a free counselling session and live demo class?",
        time: "10:15 AM",
      },
      {
        sender: "lead",
        text: "Yes, tomorrow 4 PM works.",
        time: "10:16 AM",
      },
      {
        sender: "ai",
        text: "Done! 🎉 Your free demo class is confirmed for Tomorrow at 4:00 PM IST.\n\n📅 Google Meet Link:\nmeet.google.com/pex-neet-2027\n\nOur senior academic counsellor will meet you live. Calendar invite has also been sent to your email!",
        time: "10:16 AM",
        meta: "✓ Event Created & Sync'd",
      },
    ],
    stages: [
      { label: "Lead Captured", state: "Meta Ad Inbound", active: true },
      { label: "Qualified", state: "Target: NEET 2027", active: true },
      { label: "Slot Confirmed", state: "Tomorrow 4:00 PM", active: true },
      { label: "Google Meet Booked", state: "Link Generated & Sync'd", active: true },
    ],
  },
  {
    id: "clinic",
    name: "Clinics & Healthcare",
    industry: "Dental / Skin / Ortho Care",
    badge: "Appointment Scheduling",
    messages: [
      {
        sender: "lead",
        text: "Hello, do you have appointments available for root canal treatment this week?",
        time: "07:42 PM",
      },
      {
        sender: "ai",
        text: "Hello! 👋 Welcome to Dr. Smiles Dental Care. Yes, Dr. Sharma has slots open for root canal consultations this week. Are you currently in pain?",
        time: "07:42 PM",
        meta: "⚡ After-hours instant reply",
      },
      {
        sender: "lead",
        text: "Yes, since yesterday night.",
        time: "07:43 PM",
      },
      {
        sender: "ai",
        text: "Understood. For urgent tooth pain, we can prioritize you tomorrow at 11:30 AM or 5:00 PM at our Kolar Road clinic. Which slot should I lock in for you?",
        time: "07:43 PM",
      },
      {
        sender: "lead",
        text: "11:30 AM please.",
        time: "07:44 PM",
      },
      {
        sender: "ai",
        text: "Your priority consultation is confirmed for Tomorrow at 11:30 AM with Dr. Sharma! 🦷\n\n📍 Clinic Address: Dr. Smiles, 2nd Floor, Kolar Main Rd.\n\nPlease arrive 10 mins early. We look forward to relieving your pain!",
        time: "07:44 PM",
        meta: "✓ Added to Clinic Calendar",
      },
    ],
    stages: [
      { label: "Inquiry Captured", state: "WhatsApp Inbound", active: true },
      { label: "Urgency Screened", state: "Active Pain / Priority", active: true },
      { label: "Slot Locked", state: "Tomorrow 11:30 AM", active: true },
      { label: "Clinic Notified", state: "SMS & Sheet Updated", active: true },
    ],
  },
  {
    id: "realestate",
    name: "Real Estate",
    industry: "Property & High-Ticket Sales",
    badge: "Site Visit Coordination",
    messages: [
      {
        sender: "lead",
        text: "Saw your luxury 3BHK ad in Arera Colony. What is the price range?",
        time: "02:18 PM",
      },
      {
        sender: "ai",
        text: "Hello! 👋 Thank you for inquiring about Shree Greens Arera Colony. Our premium 3BHK residences start at ₹85 Lakhs with private terrace options.",
        time: "02:18 PM",
        meta: "⚡ Instant price qualification",
      },
      {
        sender: "lead",
        text: "Are sample flats ready to view?",
        time: "02:19 PM",
      },
      {
        sender: "ai",
        text: "Yes, our designer sample flat is fully ready! We conduct guided site walkthroughs every day. Would you like to schedule a private visit this Saturday or Sunday?",
        time: "02:19 PM",
      },
      {
        sender: "lead",
        text: "Saturday around 11:00 AM.",
        time: "02:20 PM",
      },
      {
        sender: "ai",
        text: "Splendid! Your private walkthrough is scheduled for Saturday at 11:00 AM. 🏡\n\nOur senior property advisor, Mr. Verma, will host you at the site gate. Location pin sent to your WhatsApp!",
        time: "02:20 PM",
        meta: "✓ Broker Handoff Triggered",
      },
    ],
    stages: [
      { label: "Ad Lead Captured", state: "Instagram Click-to-Chat", active: true },
      { label: "Budget Screened", state: "₹85L+ Budget Verified", active: true },
      { label: "Walkthrough Booked", state: "Saturday 11:00 AM", active: true },
      { label: "Advisor Assigned", state: "Sales Rep Notified", active: true },
    ],
  },
];

export default function WhatsAppDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const activeScenario = scenarios[activeTab];

  return (
    <section id="demo" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <ScrollReveal>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "var(--sec-mb)" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "8px 16px",
                borderRadius: 999,
                background: "#fff",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#6c3bff",
                border: "1px solid rgba(108,59,255,0.2)",
                marginBottom: 20,
                boxShadow: "0 2px 8px rgba(108,59,255,0.06)",
                fontFamily: "'FullerSansDT', 'Inter', sans-serif",
              }}
            >
              Live Automation Demo
            </div>
            <h2
              style={{
                fontSize: "var(--title-size)",
                fontWeight: 700,
                color: "#0d0e1a",
                lineHeight: 1.15,
                letterSpacing: "-0.04em",
                maxWidth: 900,
                margin: "0 auto 16px",
                fontFamily: "'FullerSansDT', 'Inter', sans-serif",
              }}
            >
              See the WhatsApp AI in Action
            </h2>
            <p style={{ color: "#4b5563", fontSize: "1.0625rem", maxWidth: 660, margin: "0 auto", lineHeight: 1.6 }}>
              No long forms or delayed phone calls. The AI responds in under 10 seconds, qualifies the prospect, and schedules appointments automatically.
            </p>
          </div>

          {/* Scenario Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            {scenarios.map((sc, i) => {
              const isSelected = activeTab === i;
              return (
                <button
                  key={sc.id}
                  onClick={() => setActiveTab(i)}
                  style={{
                    padding: "10px 20px",
                    borderRadius: 999,
                    background: isSelected ? "#0d0e1a" : "#ffffff",
                    color: isSelected ? "#ffffff" : "#4b5563",
                    border: isSelected ? "1px solid #0d0e1a" : "1px solid rgba(0,0,0,0.08)",
                    fontSize: "0.875rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    boxShadow: isSelected ? "0 4px 16px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.04)",
                    transition: "all 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <span>{sc.name}</span>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      padding: "2px 8px",
                      borderRadius: 999,
                      background: isSelected ? "rgba(108,59,255,0.4)" : "rgba(0,0,0,0.05)",
                      color: isSelected ? "#c4b5fd" : "#6b7280",
                    }}
                  >
                    {sc.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Demo Container */}
          <div
            style={{
              maxWidth: 880,
              margin: "0 auto",
              background: "#ffffff",
              borderRadius: 28,
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              border: "1px solid rgba(0,0,0,0.08)",
              overflow: "hidden",
            }}
          >
            {/* WhatsApp Header */}
            <div
              style={{
                background: "#075e54",
                padding: "14px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#ffffff",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "#128c7e",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#fff",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                  }}
                >
                  ⚡
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ fontWeight: 700, fontSize: "1rem" }}>Clivik AI Sales Agent</span>
                    <span
                      style={{
                        background: "#25d366",
                        color: "#fff",
                        borderRadius: "50%",
                        width: 14,
                        height: 14,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 9,
                        fontWeight: 900,
                      }}
                    >
                      ✓
                    </span>
                  </div>
                  <div style={{ fontSize: "0.75rem", opacity: 0.9 }}>
                    Online · Average response time: under 10 seconds
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.15)",
                  padding: "6px 12px",
                  borderRadius: 999,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                }}
              >
                {activeScenario.industry}
              </div>
            </div>

            {/* Chat Body */}
            <div
              style={{
                background: "#ece5dd",
                backgroundImage: "radial-gradient(#dfd7cd 1px, transparent 1px)",
                backgroundSize: "16px 16px",
                padding: "24px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                minHeight: 380,
              }}
            >
              {activeScenario.messages.map((msg, i) => {
                const isLead = msg.sender === "lead";
                return (
                  <div
                    key={i}
                    style={{
                      alignSelf: isLead ? "flex-end" : "flex-start",
                      maxWidth: "85%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        background: isLead ? "#dcf8c6" : "#ffffff",
                        color: "#0d0e1a",
                        padding: "12px 16px",
                        borderRadius: isLead ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                        fontSize: "0.9375rem",
                        lineHeight: 1.5,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {msg.text}
                      <div
                        style={{
                          textAlign: "right",
                          fontSize: "0.6875rem",
                          color: "#6b7280",
                          marginTop: 4,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          gap: 4,
                        }}
                      >
                        <span>{msg.time}</span>
                        {isLead && <span style={{ color: "#34b7f1" }}>✓✓</span>}
                      </div>
                    </div>

                    {msg.meta && (
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#4b5563",
                          fontWeight: 600,
                          marginTop: 4,
                          alignSelf: isLead ? "flex-end" : "flex-start",
                          background: "rgba(255,255,255,0.75)",
                          padding: "2px 8px",
                          borderRadius: 999,
                        }}
                      >
                        {msg.meta}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Stages Bar Underneath */}
            <div
              style={{
                background: "#161726",
                padding: "20px 24px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 16,
              }}
            >
              {activeScenario.stages.map((st, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 14,
                    padding: "12px 14px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#22c55e",
                      color: "#fff",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <div>
                    <div style={{ color: "#ffffff", fontSize: "0.8125rem", fontWeight: 700 }}>
                      {st.label}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem" }}>
                      {st.state}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
