import Image from "next/image";

export default function About() {
  return (
    <section id="about" style={{ background: "#f2f2f7", padding: "var(--sec-py) var(--sec-px)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "var(--sec-mb)" as any, textAlign: "var(--sec-text-align)" as any }}>
          <div style={{
            display: "inline-block", padding: "5px 14px", borderRadius: 999,
            background: "#fff", fontSize: "1em", fontWeight: 500, color: "#111",
            border: "1px solid rgba(0,0,0,0.08)", marginBottom: 20,
            fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>About Clivik</div>
          <h2 style={{
            fontSize: "var(--title-size)", fontWeight: 600, color: "#0d0e1a",
            lineHeight: 1.1, letterSpacing: "-0.04em",
            maxWidth: "100%", fontFamily: "'FullerSansDT', 'Inter', sans-serif"
          }}>Built by Someone Who<br />Understands Your Business.</h2>
        </div>

        {/* Content Grid */}
        <div style={{ display: "flex", flexDirection: "var(--about-flex, row)" as any, gap: 40, alignItems: "center" }}>
          {/* Left/Top Image Content */}
          <div style={{ 
            background: "#ffffff", borderRadius: 24, padding: 12, flex: "1 1 50%",
            boxShadow: "0 12px 40px rgba(0,0,0,0.06)", position: "relative"
          }}>
            <div style={{ 
              position: "relative", width: "100%", aspectRatio: "3/4", 
              borderRadius: 16, overflow: "hidden", background: "#e0e0e0", minHeight: "350px" 
            }}>
              {/* Note: Save your attached image as 'arjit-photo.png' in the /public folder */}
              <Image 
                src="/arjit-photo.png" 
                alt="Arjit Gupta - Founder of Clivik"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            <div style={{ 
              position: "absolute", bottom: -15, right: 20, 
              background: "#ffffff", padding: "16px 24px", borderRadius: 16, zIndex: 10,
              boxShadow: "0 8px 30px rgba(0,0,0,0.12)", display: "flex", flexDirection: "column"
            }}>
              <span style={{ fontWeight: 700, color: "#0d0e1a", fontSize: "1.05em" }}>Arjit Gupta</span>
              <span style={{ color: "#6c3bff", fontWeight: 500, fontSize: "0.9em" }}>Founder, Clivik</span>
            </div>
          </div>

          {/* Right/Bottom Text Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, fontSize: "1.15em", color: "#444", lineHeight: 1.8, flex: "1 1 50%" }}>
            <p style={{ fontWeight: 600, color: "#0d0e1a", fontSize: "1.25em" }}>
              Hi, I am Arjit Gupta — founder of Clivik.
            </p>
            <p>
              I started Clivik because I kept seeing local businesses lose customers to competitors who were simply more visible online.
            </p>
            <p>
              Their competitors were not better. They were just easier to find on Google.
            </p>
            <p>
              That is the problem Clivik exists to solve.
            </p>
            <p>
              I personally handle every project — because the person who understands your problem should be the same person solving it.
            </p>
            <div style={{
              background: "#ffffff", padding: "24px", borderRadius: 16, 
              borderLeft: "4px solid #6c3bff", marginTop: 12,
              fontWeight: 500, color: "#0d0e1a"
            }}>
              Based in Bhopal.<br/>Built for M.P. businesses.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
