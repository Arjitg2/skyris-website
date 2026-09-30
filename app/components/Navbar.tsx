"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconCloud } from "./icons";

const navLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Industries", href: "/#industries" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

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

  const alwaysDark = !isHome;
  const navBg = isMobile
    ? "#fff"
    : alwaysDark || scrolled
    ? "rgba(13,14,26,0.94)"
    : "transparent";
  const navBorder = isMobile
    ? "1px solid rgba(0,0,0,0.08)"
    : alwaysDark || scrolled
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid transparent";

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          padding: "0 var(--nav-px)",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease",
          backdropFilter: isMobile ? "none" : "blur(24px)",
          backgroundColor: navBg,
          borderBottom: navBorder,
          boxShadow: isMobile ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
        }}
      >
        {/* Brand Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", minHeight: 44 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "linear-gradient(135deg, #8b5cf6, #6c3bff)",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 2px 10px rgba(108,59,255,0.3)",
            }}
          >
            <IconCloud size={18} color="#fff" />
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontWeight: 800, fontSize: "1.1rem", color: isMobile ? "#0d0e1a" : "#fff", letterSpacing: "-0.02em" }}>
              Clivik
            </span>
            {!isMobile && (
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8125rem", fontWeight: 500 }}>
                · WhatsApp AI
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Nav links */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 28,
              alignItems: "center",
            }}
          >
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                    textDecoration: "none",
                    fontSize: "0.9375rem",
                    fontWeight: isActive ? 600 : 500,
                    transition: "color 0.2s",
                    borderBottom: isActive ? "2px solid #6c3bff" : "2px solid transparent",
                    paddingBottom: 4,
                    minHeight: 44,
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#fff")}
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLElement).style.color = isActive ? "#fff" : "rgba(255,255,255,0.85)")
                  }
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
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              minWidth: 44,
              minHeight: 44,
              padding: "8px",
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                borderRadius: 2,
                background: "#0d0e1a",
                transform: menuOpen ? "rotate(45deg) translate(6px, 6px)" : "none",
                transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                borderRadius: 2,
                background: "#0d0e1a",
                opacity: menuOpen ? 0 : 1,
                transition: "opacity 0.3s ease",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                borderRadius: 2,
                background: "#0d0e1a",
                transform: menuOpen ? "rotate(-45deg) translate(6px, -6px)" : "none",
                transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </button>
        ) : (
          <Link
            href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20audit%20my%20lead%20automation."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "10px 22px",
              borderRadius: 999,
              background: "#6c3bff",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 700,
              transition: "all 0.2s",
              fontFamily: "inherit",
              minHeight: 42,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 4px 16px rgba(108,59,255,0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "#5a2fe0";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "#6c3bff";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <span>Get Free Audit</span>
            <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
          </Link>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div
          style={{
            position: "fixed",
            top: 68,
            left: 0,
            right: 0,
            zIndex: 998,
            background: "#fff",
            maxHeight: menuOpen ? "480px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
            borderBottom: menuOpen ? "1px solid rgba(0,0,0,0.08)" : "none",
            boxShadow: menuOpen ? "0 8px 32px rgba(0,0,0,0.12)" : "none",
          }}
        >
          <div style={{ padding: "16px 24px 24px" }}>
            {navLinks.map((link, i) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  display: "flex",
                  alignItems: "center",
                  minHeight: 48,
                  padding: "10px 0",
                  color: "#0d0e1a",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderBottom: i < navLinks.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20to%20audit%20my%20lead%20automation."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                width: "100%",
                marginTop: 16,
                padding: "12px 24px",
                minHeight: 48,
                textAlign: "center",
                borderRadius: 12,
                background: "#6c3bff",
                color: "#fff",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 700,
                fontFamily: "inherit",
              }}
            >
              <span>Get Free Audit</span>
              <span className="optical-arrow" style={{ fontSize: "1.1em" }}>&rarr;</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
