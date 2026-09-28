/**
 * Projects Page Configuration for Manoj Bhatt
 * Centralized, structured data driving all three sections of the Projects page:
 * 1. Featured Projects (3 horizontal editorial cards)
 * 2. Live & Shipped (6 compact website cards in a 3x2 grid)
 * 3. More of My Work (Behance & Figma destination cards)
 */

export const PROJECTS_CONFIG = {
  hero: {
    eyebrow: "PROJECTS",
    heading: "Selected work across products, workflows, and digital experiences.",
    supportingStatement:
      "From enterprise platforms and complex workflows to gaming, mobile, and digital experiences: here's some of the work I've designed and shipped."
  },

  featuredSection: {
    number: "01",
    eyebrow: "01: FEATURED WORK",
    title: "Featured Projects",
    subtitle: "Selected case studies where I worked through the problem, not just the interface."
  },

  featuredProjects: [
    {
      id: "sentinel-ai",
      number: "01",
      title: "Sentinel AI",
      badge: "AI Governance",
      category: "In-house Project · TransOrg Analytics",
      context:
        "A control center for AI agents: helping enterprises understand what agents can access, what they are doing, and when humans need to step in.",
      role: "Product Designer",
      focus: "Product Strategy, AI Systems, Enterprise UX",
      year: "2025",
      tags: ["AI Governance", "Agent Observability", "Enterprise UX"],
      accentColor: "#2563eb",
      visualType: "sentinel",
      ctaText: "Explore case study",
      url: "/projects/sentinel-ai"
    },
    {
      id: "codash",
      number: "02",
      title: "Codash",
      badge: "Product Design",
      category: "Product Design · Case Study",
      context:
        "A B2B AI interview platform designed to help hiring teams conduct structured interviews while giving candidates a transparent, supportive and human-centered interview experience.",
      role: "Product Designer",
      focus: "Two-Sided Platform · AI Systems · Conversational UX",
      year: "2025",
      tags: ["Product Design", "UX Research", "AI UX", "B2B SaaS", "Conversational UX", "Enterprise UX"],
      accentColor: "#1180FF",
      visualType: "codash",
      ctaText: "Explore case study",
      url: "/projects/codash"
    },
    {
      id: "fixora",
      number: "03",
      title: "Fixora",
      badge: "Product Design",
      category: "Product Design · Case Study",
      context:
        "AI powered UX auditing for websites. A product concept that turns website UX problems into clear, prioritized, actionable improvements.",
      role: "Product Designer",
      focus: "Product Strategy · UX · AI Interaction Design",
      year: "2024",
      tags: ["Product Design", "AI UX", "UX Audit", "SaaS"],
      accentColor: "#2563eb",
      visualType: "audit",
      ctaText: "Explore case study",
      url: "/projects/fixora"
    }
  ],

  liveSection: {
    number: "02",
    eyebrow: "02: REAL-WORLD DELIVERABLES",
    title: "Live & Shipped",
    subtitle: "Design that made it out of Figma.",
    badge: "Designed → Built → Shipped → Live"
  },

  liveShippedProjects: [
    {
      id: "registerkaro",
      title: "RegisterKaro Customer Portal",
      tags: ["Business Compliance", "FinTech"],
      description:
        "Redesigned business onboarding from 7 → 5 steps, reducing friction across registration and compliance journeys while restructuring information across 20+ offerings.",
      role: "UI/UX Designer",
      platform: "Web",
      cta: "View Live Website",
      url: "https://www.registerkaro.in/",
      status: "Live",
      accentColor: "#eab308",
      image: "/images/projects/registerkaro.png?v=2"
    },
    {
      id: "registerkaro-app",
      title: "RegisterKaro App",
      tags: ["FinTech", "Mobile"],
      description:
        "Extended the RegisterKaro experience to mobile, translating complex business compliance workflows into a more accessible iOS + Android product experience.",
      role: "UI/UX Designer",
      platform: "iOS, Android",
      cta: "View Live App",
      url: "https://apps.apple.com/in/app/registerkaro/id6749670919",
      status: "Live",
      accentColor: "#3b82f6",
      image: "/images/projects/registerkaro-app.png?v=2"
    },
    {
      id: "team-blue-rising",
      title: "Team Blue Rising",
      tags: ["Sports Tech", "Esports / Racing"],
      description:
        "Designed digital experiences for an E1 electric racing ecosystem, translating sports, technology and team identity into a high-energy web experience.",
      role: "UI/UX Designer",
      platform: "Web",
      cta: "View Live Website",
      url: "https://www.teambluerising.com/",
      status: "Live",
      accentColor: "#0284c7",
      image: "/images/projects/team-blue-rising.png?v=2"
    },
    {
      id: "gyan-therapy",
      title: "Gyan Therapy",
      tags: ["Creator Economy", "Media"],
      description:
        "Designed a creator-led digital experience that turns a personal content brand into a structured, credible and engaging web presence.",
      role: "UI/UX Designer",
      platform: "Web",
      cta: "View Live Website",
      url: "https://gyantherapy.in/",
      status: "Live",
      accentColor: "#ef4444",
      image: "/images/projects/gyan-therapy.png?v=2"
    },
    {
      id: "zone-game",
      title: "Zone.Game",
      tags: ["Web3 Gaming", "GameFi"],
      description:
        "Redesigned experiences across 5+ gaming categories, simplifying complex Web3 mechanics, discovery and competition into clearer player journeys.",
      role: "UI/UX Designer",
      platform: "Web",
      cta: "View Live Website",
      url: "https://zone.game/",
      status: "Live",
      accentColor: "#8b5cf6",
      image: "/images/projects/zone-game.png?v=2"
    },
    {
      id: "arena-animation-sonipat",
      title: "Arena Animation Sonipat",
      tags: ["Education", "Creative Tech"],
      description:
        "Redesigned an education platform experience to make course discovery, admissions and creative-tech offerings easier for prospective students to explore.",
      role: "UI/UX Designer",
      platform: "Web",
      cta: "View Live Website",
      url: "https://arenasonipat.com/",
      status: "Live",
      accentColor: "#10b981",
      image: "/images/projects/arena-animation.png?v=2"
    }
  ],

  moreWorkSection: {
    number: "03",
    eyebrow: "03: EXTERNAL DESTINATIONS",
    title: "More of My Work",
    subtitle: "More explorations, visual work, and design files.",
    destinations: [
      {
        id: "behance",
        name: "Behance",
        tagline: "Visual case studies, explorations, and selected design work.",
        description: "Browse more of my visual and case-study work.",
        ctaText: "Explore Behance",
        url: "https://www.behance.net/manojbhatt30",
        accentColor: "#0057ff",
        pillText: "Visual Case Studies"
      },
      {
        id: "figma",
        name: "Figma",
        tagline: "Selected design files, explorations, systems, and interface work.",
        description: "Explore design systems, UI explorations, component libraries, and product files.",
        ctaText: "View on Figma",
        url: "https://www.figma.com/design/Lp9x8EfcJ41gvV2hJg9tSK/Figma-Portfolio?node-id=0-1&t=WWqjtRjhthuAJq1q-1",
        accentColor: "#f24e1e",
        pillText: "Design Systems & Files"
      }
    ]
  }
};
