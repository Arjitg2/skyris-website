"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconCloud } from "./icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  // Determine if we are on the home page (dark gradient hero)
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  // On non-home pages, the nav sits over a dark header — always show the dark frosted style
  const alwaysDark = !isHome;
  const navBg = isMobile
    ? "#fff"
    : (alwaysDark || scrolled)
      ? "rgba(13,14,26,0.92)"
      : "transparent";
  const navBorder = isMobile
    ? "1px solid rgba(0,0,0,0.08)"
    : (alwaysDark || scrolled)
      ? "1px solid rgba(255,255,255,0.07)"
      : "1px solid transparent";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
        padding: "0 var(--nav-px)", height: "68px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
        backdropFilter: isMobile ? "none" : "blur(24px)",
        backgroundColor: navBg,
        borderBottom: navBorder,
        boxShadow: isMobile ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", minHeight: 44 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "linear-gradient(135deg, #8b5cf6, #6c3bff)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 2px 10px rgba(108,59,255,0.3)"
          }}>
            <IconCloud size={18} color="#fff" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "16px", color: isMobile ? "#0d0e1a" : "#fff" }}>Clivik</span>
          {!isMobile && <>
            <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px" }}>·</span>
            <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", fontWeight: 500 }}>Digital Solutions</span>
          </>}
        </Link>

        {/* Desktop Nav links */}
        {!isMobile && (
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", display: "flex", gap: 32, alignItems: "center" }}>
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link key={link.href} href={link.href}
                  style={{
                    color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                    textDecoration: "none", fontSize: "15px", fontWeight: isActive ? 600 : 500,
                    transition: "color 0.2s ease",
                    borderBottom: isActive ? "2px solid #8b5cf6" : "2px solid transparent",
                    minHeight: 44,
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0 4px",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#fff"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = isActive ? "#fff" : "rgba(255,255,255,0.85)"}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}

        {/* Desktop CTA / Mobile Hamburger */}
        {isMobile ? (
          <button
            suppressHydrationWarning
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: 6,
              padding: "10px", minWidth: 44, minHeight: 44,
              alignItems: "center", justifyContent: "center",
            }}
            aria-label="Toggle menu"
          >
            <span style={{
              display: "block", width: 24, height: 2, borderRadius: 2,
              background: "#0d0e1a",
              transform: menuOpen ? "rotate(45deg) translate(5px, 6px)" : "none",
              transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            }} />
            <span style={{
              display: "block", width: 24, height: 2, borderRadius: 2,
              background: "#0d0e1a",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.3s ease",
            }} />
            <span style={{
              display: "block", width: 24, height: 2, borderRadius: 2,
              background: "#0d0e1a",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -6px)" : "none",
              transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
            }} />
          </button>
        ) : (
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
            style={{
              padding: "12px 24px", minHeight: 44, borderRadius: 999,
              background: "#6c3bff", color: "#fff",
              border: "none", cursor: "pointer",
              fontSize: "14px", fontWeight: 600, transition: "all 0.2s ease",
              fontFamily: "inherit",
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
              boxShadow: "0 4px 16px rgba(108,59,255,0.25)",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#5a2fe0"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#6c3bff"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
          >
            <span>Get Free Consultation</span>
            <span style={{ transform: "translateY(0.5px)" }}>&rarr;</span>
          </button>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 998,
          background: "#fff",
          maxHeight: menuOpen ? "480px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          borderBottom: menuOpen ? "1px solid rgba(0,0,0,0.08)" : "none",
          boxShadow: menuOpen ? "0 8px 32px rgba(0,0,0,0.12)" : "none",
        }}>
          <div style={{ padding: "12px 24px 24px" }}>
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    display: "flex", alignItems: "center", minHeight: 44, padding: "12px 0",
                    color: isActive ? "#6c3bff" : "#0d0e1a", textDecoration: "none",
                    fontSize: "16px", fontWeight: isActive ? 600 : 500,
                    borderBottom: i < navLinks.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "#6c3bff"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = isActive ? "#6c3bff" : "#0d0e1a"}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={() => { handleLinkClick(); window.dispatchEvent(new CustomEvent('open-contact-modal')); }}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: 16, minHeight: 48, padding: "14px 20px",
                textAlign: "center", borderRadius: 12,
                background: "#6c3bff", color: "#fff",
                border: "none", cursor: "pointer",
                fontSize: "16px", fontWeight: 700, gap: 8,
                fontFamily: "inherit",
                boxShadow: "0 4px 16px rgba(108,59,255,0.25)"
              }}
            >
              <span>Get Free Consultation</span>
              <span style={{ transform: "translateY(0.5px)" }}>&rarr;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
