import { teamMembers } from "./teamData";

export const siteConfig = {
  name: "Clivik Digital Solutions",
  shortName: "Clivik",
  title: "Clivik — AI-Powered WhatsApp Automation for Businesses That Can't Afford to Lose Leads",
  description:
    "Capture, qualify, follow up and convert leads automatically — 24/7 on WhatsApp. Clivik engineers AI sales automation for lead-driven businesses.",
  url: "https://clivik.netlify.app",
  ogImage: "https://clivik.netlify.app/images/clivik-og.png",
  responseTime: "under 10 seconds",
  responseTimeBadge: "<10s",
  founder: {
    name: "Arjit Gupta",
    role: "Founder",
    image: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790584426/ChatGPT_Image_Sep_28_2026_02_02_51_PM_n7nhui.png",
  },
  team: teamMembers.map(m => ({ name: m.name, role: m.role, image: m.imageSrc })),
  contact: {
    phone: "+91 62650 22474",
    phoneClean: "+916265022474",
    email: "helloclivik@gmail.com",
    city: "Bhopal",
    region: "Madhya Pradesh",
    country: "India",
    addressLocality: "Bhopal",
    addressRegion: "Madhya Pradesh",
    postalCode: "462001",
    countryCode: "IN",
    whatsappUrl: "https://wa.me/916265022474",
    whatsappMockupUrl:
      "https://wa.me/916265022474?text=Hi%20Clivik!%20I%20want%20a%20free%20lead%20audit%20/%20live%20WhatsApp%20AI%20demo.",
  },
  // Social profile links - centralized for easy future updates
  socials: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM || "",
    facebook: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK || "",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN || "",
    x: process.env.NEXT_PUBLIC_SOCIAL_X || "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE || "",
  },
  coreServices: [
    {
      id: "whatsapp-lead-qualification",
      title: "WhatsApp Lead Qualification",
      shortDesc: "Qualify inbound prospects instantly 24/7 without manual back-and-forth.",
      desc: "Instant automated qualification that filters serious buyers from tire-kickers, collects project details, and books appointments straight into your calendar.",
      targetAudience: "Clinics, real estate consultants, coaching institutes, gyms, and local businesses.",
      outcome: "Zero missed inquiries, automated response in under 10 seconds, and pre-qualified leads ready to close.",
    },
    {
      id: "automated-lead-follow-up",
      title: "30-Day WhatsApp Follow-up Autopilot",
      shortDesc: "Never let an interested prospect slip through the cracks again.",
      desc: "Timed, multi-step conversational WhatsApp messages that gently follow up with prospects who didn't book or purchase on first contact.",
      targetAudience: "Businesses with multi-day sales cycles or busy teams that forget to follow up.",
      outcome: "Recover 20% to 40% of leads that would otherwise go cold without any manual effort.",
    },
    {
      id: "customer-review-automation",
      title: "Customer Review Automation",
      shortDesc: "Automatically gather 5-star Google reviews while filtering bad feedback privately.",
      desc: "Automated post-purchase or post-visit review requests sent over WhatsApp that privately route negative feedback to management and guide happy clients directly to your Google Business Profile.",
      targetAudience: "Any local business looking to rank higher on Google Maps and win local searches.",
      outcome: "A steady stream of authentic 5-star reviews that boosts Google Maps rankings and local trust.",
    },
    {
      id: "rto-prevention",
      title: "RTO Prevention & COD Confirmation",
      shortDesc: "Automated WhatsApp order verification to slash return-to-origin losses.",
      desc: "Instant WhatsApp confirmation and address validation for Cash-on-Delivery orders, reducing fake orders and cutting shipping losses.",
      targetAudience: "E-commerce and D2C brands taking cash-on-delivery orders.",
      outcome: "30% to 45% reduction in RTO returns and higher order delivery rates.",
    },
    {
      id: "whatsapp-marketing",
      title: "WhatsApp Marketing & Broadcasts",
      shortDesc: "Broadcast high-converting promotions and seasonal offers to your contact list.",
      desc: "Permission-based broadcast campaigns and customer re-engagement workflows that drive repeat visits, repeat orders, and festival sales.",
      targetAudience: "Retail shops, restaurants, salons, clinics, and local ecommerce brands.",
      outcome: "Up to 98% open rates and 45% response rates compared to ignored emails or costly SMS.",
    },
  ],
};
