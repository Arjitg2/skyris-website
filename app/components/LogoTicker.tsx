"use client";

const techPlatforms = [
  { name: "WhatsApp Cloud API", icon: "💬" },
  { name: "Meta Lead Ads", icon: "🔗" },
  { name: "Anthropic Claude", icon: "🧠" },
  { name: "Google Gemini", icon: "✨" },
  { name: "n8n Workflow Automation", icon: "⚙️" },
  { name: "Google Meet & Calendar", icon: "📅" },
  { name: "Google Sheets Sync", icon: "📊" },
  { name: "CRM & Custom Webhooks", icon: "💼" },
];

export default function LogoTicker() {
  return (
    <div
      style={{
        background: "transparent",
        padding: "0 0 32px 0",
        marginTop: "-60px",
        position: "relative",
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "#6b7280",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Integrated with Your Sales &amp; Marketing Stack
        </span>
      </div>

      <div
        style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        }}
      >
        <div className="marquee-track">
          {[...techPlatforms, ...techPlatforms].map((item, i) => (
            <div
              key={i}
              style={{
                padding: "8px 24px",
                margin: "0 12px",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#ffffff",
                borderRadius: 999,
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                color: "#1e1b4b",
                fontWeight: 600,
                fontSize: 14,
                whiteSpace: "nowrap",
                userSelect: "none",
              }}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
