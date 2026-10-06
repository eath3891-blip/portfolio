/**
 * Central Portfolio Configuration for Manoj Bhatt
 * All content, strings, URLs, and greetings are strictly data-driven.
 */

export const PORTFOLIO_CONFIG = {
  designer: {
    firstName: "Manoj",
    lastName: "Bhatt",
    fullName: "Manoj Bhatt",
    role: "Product Designer",
    statusBadge: "Open to Work",
    tagline: "Product Designer · 3+ years · Enterprise UX · AI, Analytics & Complex Workflows",
    location: "Global / Remote",
    statement: "Crafting intentional digital products, spatial interfaces, and high-fidelity interactive experiences.",
    shortBio: "Product designer specializing in systematic design architecture, consumer products, and delightful micro-interactions. Dedicated to reducing complexity to functional elegance.",
    email: "manojbhatt.design@gmail.com",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/manoj-bhatt" },
      { name: "Behance", url: "https://www.behance.net/manojbhatt30" },
      { name: "Twitter / X", url: "https://x.com" },
      { name: "Dribbble", url: "https://dribbble.com" },
      { name: "GitHub", url: "https://github.com" }
    ]
  },

  experience: {
    number: "3+",
    label: "YEARS OF EXPERIENCE",
    caption: "Collaborating with fast-paced teams & forward-thinking founders."
  },

  resume: {
    buttonLabel: "Resume",
    buttonAriaLabel: "Download Manoj Bhatt's Resume",
    url: "/resume/Manoj-Bhatt-Resume.pdf",
    filename: "Manoj_Bhatt_Resume.pdf",
    target: "_blank"
  },

  navigation: [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About Manoj" },
    { id: "play", label: "Play with Manoj", icon: "✦" }
  ],

  projects: [
    {
      id: "nexus-os",
      title: "Nexus OS",
      subtitle: "Next-Generation Spatial Design System",
      category: "Design Systems",
      year: "2025",
      impact: "Adopted by 14 product squads",
      description: "A foundational token pipeline and spatial component ecosystem crafted for multi-platform canvas interactions with zero-latency visual feedback.",
      tags: ["Design System", "Tokens", "Spatial UI", "Multiplatform"],
      accentColor: "#1d1d1f"
    },
    {
      id: "kinetics-health",
      title: "Kinetics Health",
      subtitle: "Proactive Bio-Tracking & Habit Engine",
      category: "Product Design",
      year: "2024",
      impact: "4.9★ on App Store • 350k MAU",
      description: "An Apple Health-integrated mobile experience that turns continuous sensor data into actionable daily energy rhythms and cognitive clarity.",
      tags: ["iOS Design", "Data Visualization", "HealthTech", "Habits"],
      accentColor: "#059669"
    },
    {
      id: "linear-vault",
      title: "Linear Vault",
      subtitle: "Autonomous Cloud Cryptographic Tool",
      category: "Product Design",
      year: "2024",
      impact: "42% reduction in onboarding drop-off",
      description: "Re-architecting cryptographic key management and multi-sig security into an effortless, human-centered web application.",
      tags: ["Web App", "Security UX", "Complex Workflows"],
      accentColor: "#2563eb"
    },
    {
      id: "aura-canvas",
      title: "Aura Creative Studio",
      subtitle: "Generative Canvas & Vector Engine",
      category: "Spatial / Web3",
      year: "2023",
      impact: "Featured on Product Hunt #1 of the Day",
      description: "An infinite collaborative whiteboard built for generative design workflows, fluid gesture control, and spatial asset generation.",
      tags: ["Desktop App", "Infinite Canvas", "Micro-Interactions"],
      accentColor: "#7c3aed"
    }
  ],

  philosophy: [
    {
      number: "01",
      title: "Simplicity Through Reduction",
      description: "Paring away unnecessary decorative layers until only the essential structure, typography, and functional utility remain."
    },
    {
      number: "02",
      title: "Motion With Intent",
      description: "Animations should communicate spatial state, causality, and continuity, never serving as mere ornamentation."
    },
    {
      number: "03",
      title: "Engineering Empathy",
      description: "Great design is born from deep understanding of technical constraints, rendering pipelines, 60fps budgets, and accessibility."
    }
  ],

  timeline: [
    {
      period: "2024 to Present",
      role: "Lead Product Designer",
      company: "Consumer Product Labs",
      description: "Directing product design for high-scale consumer applications with a focus on conversion and interaction polish."
    },
    {
      period: "2023 to 2024",
      role: "Senior UI/UX Designer",
      company: "Spatial Systems",
      description: "Led the design system team, bridging Figma components with code tokens across web and mobile platforms."
    },
    {
      period: "2022 to 2023",
      role: "Product & Interaction Designer",
      company: "Studio Alpha",
      description: "Crafted early-stage prototypes, mobile UX architectures, and brand digital touchpoints for high-growth tech startups."
    }
  ],

  skills: {
    design: [
      "Product Strategy",
      "Design Systems Architecture",
      "Figma Tokens",
      "Micro-Interactions",
      "Spatial & 3D UI",
      "Rapid Prototyping",
      "User Research & Testing"
    ],
    technical: [
      "Three.js & WebGL Intuition",
      "CSS Architecture",
      "Component Pipelines",
      "Framer Motion",
      "Responsive Optimization",
      "Accessibility (WCAG AA)"
    ]
  },

  greetings: [
    { text: "Welcome" },
    { text: "Hello" },
    { text: "नमस्ते" },
    { text: "Bonjour" },
    { text: "Hola" },
    { text: "こんにちは" },
    { text: "안녕하세요" },
    { text: "مرحباً" }
  ]
};
