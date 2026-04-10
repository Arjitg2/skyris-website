"use client";
import { IconLightning, IconSparkle, IconRefreshCw, IconCheck, IconCloud, IconBot, IconClock, IconTarget, IconGlobe, IconBarChart } from "./icons";

const rightSteps = [
  { text: "Auto WhatsApp Replies", icon: <IconCheck size={14} color="#fff" /> },
  { text: "Appointment Booking", icon: <IconCheck size={14} color="#fff" /> },
  { text: "Lead Capture 24/7", icon: <IconCheck size={14} color="#fff" /> },
  { text: "Zero Manual Work", icon: <IconCheck size={14} color="#fff" /> },
];

const bottomDarkFeatures = [
  { text: "Mobile-Friendly Website", icon: <IconCheck size={13} color="#fff" /> },
  { text: "Free Google Business Profile", icon: <IconCheck size={13} color="#fff" /> },
  { text: "WhatsApp Button on Website", icon: <IconCheck size={13} color="#fff" /> },
  { text: "Basic SEO — Get Found Locally", icon: <IconCheck size={13} color="#fff" /> },
];

export default function Features() {
  return (
    <section id="features" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "var(--sec-mb)" as any, textAlign: "var(--sec-text-align)" as any }}>
          <div style={{
            display: "inline-block", padding: "5px 14px", borderRadius: 999,
            background: "#fff", fontSize: "1em", fontWeight: 500, color: "#111", /* Subheading size 1em */
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 20,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>Why Choose Clivik</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
            lineHeight: 1.1, letterSpacing: "-0.04em", maxWidth: "100%",
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>
            <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>Everything Your Business Needs</span><br/>
            <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>to Get Found Online</span>
          </h2>
        </div>

        {/* Top grid: 2 col */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", gap: 20, marginBottom: 20 }}>
          {/* Left: Pricing comparison */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column" }}>
            <div style={{
              width: 44, height: 44, borderRadius: 12, background: "rgba(108,59,255,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20,
            }}>
              <IconLightning size={20} color="#6c3bff" />
            </div>
            <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#0d0e1a", marginBottom: 10, lineHeight: 1.2 }}>
              Affordable premium custom websites at a fraction of the cost.
            </h3>
            <p style={{ fontSize: "1em", color: "#666", lineHeight: 1.6, marginBottom: 28 }}>
              Premium Custom Websites — Without the Premium Price<br />
              Get a fully customized website at a fraction of the cost
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: "auto" }}>
              {/* Agency Row */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, width: 85 }}>
                  <div style={{ width: 24, height: 24, borderRadius: "50%", border: "1px solid #ddd", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#666", fontWeight: 600 }}>?</div>
                  <span style={{ fontSize: "0.95em", fontWeight: 500, color: "#111" }}>Agency</span>
                </div>
                <div style={{ flex: 1, background: "#f5f5f5", borderRadius: 8, padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.95em", fontWeight: 600, color: "#111" }}>Rs. 50,000</span>
                </div>
              </div>
              {/* Clivik Row */}
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, width: 85 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 8, background: "linear-gradient(135deg,#8b5cf6,#6c3bff)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconCloud size={12} color="#fff" />
                  </div>
                  <span style={{ fontSize: "0.95em", fontWeight: 500, color: "#111" }}>Clivik</span>
                </div>
                <div style={{ width: "15%", minWidth: "140px", background: "#4e28cc", borderRadius: 8, padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "0.95em", fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>Rs. 3999</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Seamless Process */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "40px 36px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 0 }}>
            <h3 style={{ fontSize: "1.3em", fontWeight: 800, color: "#0d0e1a", marginBottom: 8 }}>&quot;Your Website Works Even While You Sleep.&quot;</h3>
            <p style={{ fontSize: "1em", color: "#666", lineHeight: 1.6, marginBottom: 28 }}>
              AI-powered automation built into every website.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {rightSteps.map((s, i) => (
                <div key={i} style={{ fontSize: "1em", color: "#444", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#6c3bff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {s.icon}
                  </div>
                  {s.text}
                </div>
              ))}
            </div>
            <div style={{
              flex: 1, background: "#0d0e1a", borderRadius: 16, padding: "24px 20px",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, minHeight: 140,
            }}>
              <div style={{ display: "flex", gap: 6 }}>
                {[1,2,3,4,5].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "#6c3bff", opacity: i <= 4 ? 1 : 0.3 }} />)}
              </div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: "1em" }}>Your Website</div>
              <a href="/contact" style={{ padding: "10px 28px", borderRadius: 10, background: "#6c3bff", color: "#fff", fontSize: "1em", fontWeight: 600, textDecoration: "none", display: "inline-block" }}>
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bento: 3 col */}
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", gap: 20 }}>
          {/* Card 1 */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(108,59,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <IconRefreshCw size={18} color="#6c3bff" />
            </div>
            <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#0d0e1a", lineHeight: 1.3, marginBottom: 12 }}>&quot;Live in 5 Days. Guaranteed.&quot;</h3>
            <p style={{ fontSize: "1em", color: "#777", lineHeight: 1.6, marginBottom: 16 }}>While big agencies take 45 days — your website is live in just 5 days.</p>
            <p style={{ fontSize: "1em", color: "#777", lineHeight: 1.6 }}>Fast. Premium.<br/>Zero compromise on quality.</p>
          </div>

          {/* Card 2 */}
          <div style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(108,59,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
              <IconSparkle size={18} color="#6c3bff" />
            </div>
            <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#0d0e1a", lineHeight: 1.3, marginBottom: 12 }}>&quot;Same Day Reply. Every Single Time.&quot;</h3>
            <p style={{ fontSize: "1em", color: "#777", lineHeight: 1.6, marginBottom: 16 }}>WhatsApp karo — same day response. Guaranteed.</p>
            <p style={{ fontSize: "1em", color: "#777", lineHeight: 1.6 }}>No waiting.<br/>No ghosting.<br/>No excuses.</p>
          </div>

          {/* Card 3 Dark */}
          <div style={{ background: "#12131f", borderRadius: 20, padding: "32px 28px", boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }}>
            <h3 style={{ fontSize: "1.4em", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 12 }}>&quot;No Hidden Charges. Ever.&quot;</h3>
            <p style={{ fontSize: "1em", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 20 }}>Jo price bataya — wahi final price hai.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {bottomDarkFeatures.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: "1em", color: "rgba(255,255,255,0.85)" }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: "rgba(108,59,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {f.icon}
                  </div>
                  {f.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
