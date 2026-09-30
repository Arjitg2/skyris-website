export interface TeamMember {
  name: string;
  role: string;
  categoryIcon: string;
  bio: string;
  skills: string[];
  imageSrc: string;
  objectPosition?: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Mr. Sudipto Sarkar",
    role: "AI Automation Engineer",
    categoryIcon: "👨‍💻",
    bio: "Designs and builds the AI-powered automation systems that handle lead qualification, follow-ups, appointment booking and customer conversations.",
    skills: ["AI Agents", "n8n Workflows", "APIs", "Sales Automations"],
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790762880/WhatsApp_Image_2026-09-30_at_3.29.53_PM_em1teo.jpg",
    objectPosition: "top",
  },
  {
    name: "Miss. Prachi Tirole",
    role: "Meta & WhatsApp Integration Specialist",
    categoryIcon: "🔗",
    bio: "Handles Meta, WhatsApp Business and API integrations to connect your ads, conversations and business workflows into one seamless system.",
    skills: ["Meta API", "WhatsApp Cloud", "Webhooks", "Ad Routing"],
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790762667/WhatsApp_Image_2026-09-30_at_3.30.57_PM_cirjqh.jpg",
    objectPosition: "top",
  },
  {
    name: "Mr. Aryan Chandrawanshi",
    role: "AI Automation Strategist",
    categoryIcon: "🧠",
    bio: "Turns business problems into practical AI workflows designed to reduce manual work, respond faster and capture more opportunities.",
    skills: ["AI Strategy", "Workflow Architecture", "Process Optimization"],
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790762574/WhatsApp_Image_2026-09-30_at_3.29.19_PM_n46i0l.jpg",
    objectPosition: "top",
  },
  {
    name: "Mr. Pravesh Baghel",
    role: "Growth & Sales Lead",
    categoryIcon: "📈",
    bio: "Focuses on customer acquisition, sales systems and growth strategies that turn automation into measurable business outcomes.",
    skills: ["B2B Acquisition", "Funnel Strategy", "Lead Economics", "Growth"],
    imageSrc: "https://res.cloudinary.com/dxvsqh2jw/image/upload/v1790762560/Screenshot_2026-09-30_152512_qqqj5k.png",
    objectPosition: "top",
  },
];
