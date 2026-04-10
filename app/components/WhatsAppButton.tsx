"use client";
import { IconWhatsApp } from "./icons";

// Replace with your actual WhatsApp number (e.g. 911234567890)
const WHATSAPP_NUMBER = "911234567890";
const WHATSAPP_MESSAGE = encodeURIComponent("Hi, I am interested in your work. Could you please share more details?");
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      title="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "13px 20px",
        borderRadius: 999,
        background: "#25D366",
        color: "#fff",
        textDecoration: "none",
        fontSize: "1em",
        fontWeight: 600,
        boxShadow: "0 6px 32px rgba(37,211,102,0.4)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        fontFamily: "Inter, sans-serif",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-4px) scale(1.03)";
        e.currentTarget.style.boxShadow = "0 12px 48px rgba(37,211,102,0.55)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 32px rgba(37,211,102,0.4)";
      }}
    >
      <IconWhatsApp size={22} color="#fff" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
