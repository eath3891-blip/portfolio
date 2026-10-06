/**
 * Central Data Configuration for "About Manoj" Page
 * 
 * Refined Visual-First Architecture:
 * - Concise, scannable copy (-35% text reduction)
 * - Centralized demo image placeholders ready for personal photo replacement
 * - Progressive disclosure: essential info visible by default, depth on interaction
 */

export const ABOUT_CONFIG = {
  hero: {
    eyebrow: "About Manoj",
    headline: "Product Designer turning complex problems into clear, usable experiences.",
    supportingLine: "I design products where complexity needs to make sense.",
    // 3 Curated Personal Photos for the Hero Slideshow
    slideshow: [
      {
        id: "portrait-casual",
        url: "/images/about/manoj-casual.jpg",
        alt: "Manoj Bhatt, Product Designer",
        caption: "Manoj Bhatt",
        objectPosition: "center 25%"
      },
      {
        id: "portrait-formal",
        url: "/images/about/manoj-formal.jpg",
        alt: "Manoj Bhatt, Product Designer",
        caption: "Manoj Bhatt",
        objectPosition: "center 22%"
      },
      {
        id: "sofia-cat",
        url: "/images/about/sofia-cat.png",
        alt: 'meet "Sofia- the male billa"',
        caption: 'meet "Sofia- the male billa"',
        objectPosition: "center 45%"
      }
    ]
  },

  origin: {
    eyebrow: "ORIGIN STORY",
    headline: "I was designing interfaces before I knew UX had a name.",
    body: "As a kid, I recreated keypad phone screens in paper notebooks, drawing menus, buttons, and navigation paths to see how the interface worked. I didn't know anything about UX or interaction design then. I just enjoyed figuring out how people would move through a screen.",
    transition: "Years later, I found the discipline behind that curiosity.",
    image: {
      url: "/images/about/paper-sketches.jpg",
      alt: "Hand-drawn keypad phone interface sketches on notebook paper",
      caption: "UI on paper, early interface sketches",
      badge: "ORIGIN"
    }
  },

  journey: {
    eyebrow: "Evolution",
    title: "My Journey",
    supportingLine: "From paper sketches to complex enterprise products.",
    evolutionTrack: ["UI", "UX", "Product", "Systems"],
    milestones: [
      {
        id: "the-beginning",
        phase: "Phase 01",
        title: "The Beginning & Learning the Craft",
        subtitle: "From Paper Sketches to Digital Systems",
        period: "Curiosity to Final Sem",
        oneLiner: "From childhood paper sketches to mastering typography, 8pt grids, and component systems during my undergraduate final semester.",
        deepDive: "Started with childhood curiosity sketching phone screens on paper, then during the final semester of my undergraduate degree, committed to disciplined self-learning across Photoshop, XD, and Figma to master typography, 8pt grids, and scalable components.",
        scopeTag: "UI & Visual Craft",
        story: {
          context: "What began as childhood curiosity sketching keypad phone menus on paper matured into a focused pursuit during the final semester of my undergraduate degree, when I committed to mastering interface design through disciplined self-education.",
          workDone: "I progressed from paper layouts through Photoshop, Adobe XD, and finally Figma, rigorously studying typography, 8pt spacing grids, and component architecture by rebuilding real products daily.",
          whatChanged: "Design stopped feeling like drawing isolated screens. I realized interfaces were scalable systems built to guide human attention through reusable components and structured hierarchy."
        },
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: "first-industry-experience",
        phase: "Phase 02",
        title: "First Industry Experience",
        subtitle: "Learning to Design for Real Products",
        period: "2023 to 2025",
        oneLiner: "Designing for high-pace Web3 ecosystems, Telegram Mini Apps, and competitive gaming communities.",
        deepDive: "Redesigned 20+ core screens for Trybl, shipped Telegram Mini Apps, and built digital touchpoints for Team Blue Rising, co-owned by Virat Kohli.",
        scopeTag: "Product & Interaction Design",
        story: {
          context: "Joining LeagueSpotsCo and XTZ Esports threw me into fast-moving consumer products with active, demanding user bases.",
          workDone: "I redesigned core interfaces for Trybl, shipped lightweight Telegram Mini Apps, and crafted digital experiences for Team Blue Rising, co-owned by Virat Kohli.",
          whatChanged: "Working in production taught me that design lives within tight technical constraints and high user expectations. Speed, clarity, and delight had to coexist."
        },
        image: "/images/about/zone-logo.png",
        imageBg: "#0a0a0c"
      },
      {
        id: "broadening-the-perspective",
        phase: "Phase 03",
        title: "Broadening the Perspective",
        subtitle: "From Interfaces to Outcomes",
        period: "2025",
        oneLiner: "Streamlined customer onboarding, reducing drop-off by 18%, while restructuring 20+ service pages.",
        deepDive: "Streamlined customer onboarding, cutting drop-off by 18%, restructured 20+ service pages, and standardized reusable design patterns across the product.",
        scopeTag: "UX Strategy & Design Systems",
        story: {
          context: "At RegisterKaro, I stepped into a product environment where UX decisions directly moved business needles.",
          workDone: "I streamlined the legal onboarding flow, restructured information architecture across 20+ service offerings, and standardized a reusable 40+ component design system.",
          impact: "Reduced onboarding drop-off by 18% through clearer step pacing and simplified compliance inputs.",
          whatChanged: "I stopped judging work only by how it looked in Figma and started measuring it by user behavior, conversion friction, and measurable business outcomes."
        },
        image: "/images/about/registerkaro-whiteboard.png",
        imagePosition: "center 28%"
      },
      {
        id: "going-deeper",
        phase: "Phase 04",
        title: "Going Deeper",
        subtitle: "Adding Research to Execution",
        period: "2024 to Present",
        isConcurrent: true,
        concurrentBadge: "Concurrently alongside work",
        oneLiner: "Master's degree in UX Design to ground practical execution in behavioral psychology and research rigor.",
        deepDive: "Pursued alongside full-time design work at DIT University to ground practical execution in behavioral psychology and research methodology.",
        scopeTag: "Research & Strategy",
        story: {
          context: "Practical speed is powerful, but long-term design maturity requires a deep understanding of cognitive psychology and research methodology.",
          workDone: "I enrolled in the M.Des in UX Design program at DIT University, pursuing advanced academic study concurrently alongside my full-time industry design roles.",
          whatChanged: "This dual track bridged daily product execution with behavioral research, qualitative user interviews, and cognitive ergonomics, making my design rationale far more rigorous."
        },
        image: "/images/about/mdes-presentation.png",
        imagePosition: "center 35%"
      },
      {
        id: "where-i-am-now",
        phase: "Phase 05",
        title: "Where I Am Now",
        subtitle: "Designing for Complexity",
        period: "2026 to Present",
        oneLiner: "Leading product design across 5+ core workflows and 40+ enterprise AI screens at TransOrg Analytics.",
        deepDive: "Leading product design across 5+ core workflows and 40+ enterprise AI screens, partnering with engineering to bridge technical complexity with business clarity.",
        scopeTag: "Enterprise AI UX",
        story: {
          context: "Today at TransOrg Analytics, I tackle complex enterprise problems where dense analytics and AI models need to feel accessible to business decision-makers.",
          workDone: "I lead product design across 5+ core operational workflows, creating 40+ enterprise AI screens and collaborating closely with data science and engineering teams.",
          impact: "Designed 5+ core workflows and 40+ enterprise AI screens, translating dense data models into intuitive, actionable decision tools.",
          whatChanged: "Designing for enterprise AI requires understanding non-deterministic systems, explainability, and user trust. The challenge is not decorating data, but turning algorithmic complexity into intuitive decisions."
        },
        image: "/images/about/transorg-office.jpg",
        imagePosition: "center 25%"
      },
      {
        id: "whats-next",
        phase: "Phase 06",
        title: "What's Next",
        subtitle: "Beyond Static Screens",
        period: "Continuous",
        oneLiner: "Exploring AI-assisted building and functional software prototyping beyond static Figma files.",
        deepDive: "Active experimentation with tools like Antigravity and Lovable, expanding the boundary from static screens into functional, reactive software.",
        scopeTag: "Modern Prototyping",
        story: {
          context: "The boundary between design and software engineering is dissolving rapidly as agentic AI and modern dev tools mature.",
          workDone: "I actively experiment with modern development tools like Antigravity, Lovable, and direct code workflows to build functional, interactive prototypes rather than static handoffs.",
          whatChanged: "The future of product design belongs to designers who can bridge strategy, interaction, and working code. It allows me to test real software mechanics immediately."
        },
        image: "/images/about/antigravity-setup.png",
        imagePosition: "center 42%"
      }
    ]
  },

  evolution: {
    tags: ["UI", "UX", "Product", "Systems"],
    lines: [
      "I started by asking how interfaces look.",
      "Then I started asking why they work.",
      "Now I care about how the whole product works."
    ]
  },

  howIThink: {
    eyebrow: "Philosophy in Practice",
    title: "How I Think",
    supportingStatement: "I don't follow a fixed process just because it's called a process.",
    coreObservation: "Complexity isn't the enemy. Confusion is.",
    // One Strong Editorial Design Artifact Visual
    visual: {
      url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
      alt: "UX architectural flow diagrams and systematic wireframes",
      caption: "Systematic mapping before pixels"
    },
    principles: [
      {
        number: "01",
        title: "Understand the Problem",
        oneLiner: "Before opening Figma, understand what is actually going wrong.",
        deepDive: "Friction mapping, user mental models, technical feasibility, and business intent before pixels."
      },
      {
        number: "02",
        title: "Reduce the Complexity",
        oneLiner: "Structure information and workflows so users know what to do next.",
        deepDive: "Progressive disclosure and predictable states to transform data-heavy tasks into quiet clarity."
      },
      {
        number: "03",
        title: "Explore Before Committing",
        oneLiner: "Don't fall in love with the first idea. Stress-test divergent interaction models.",
        deepDive: "Comparing architectural alternatives and cognitive loads before settling into refinement."
      },
      {
        number: "04",
        title: "Validate the Thinking",
        oneLiner: "A polished interface does not automatically mean a good solution.",
        deepDive: "Interactive prototypes, engineering feasibility checks, and real user feedback to challenge assumptions early."
      },
      {
        number: "05",
        title: "Design with the System",
        oneLiner: "A screen is rarely an isolated screen. Think components, states, and edge cases.",
        deepDive: "Token architecture, empty/loading/error states, and defensive UX so the system scales across 50+ screens."
      },
      {
        number: "06",
        title: "Collaborate Early",
        oneLiner: "Good collaboration should happen before the final design.",
        deepDive: "Partnering side-by-side with Product and Engineering from day one to turn technical constraints into creative leverage."
      }
    ]
  },

  beyondDesign: {
    eyebrow: "Personal Context",
    title: "Beyond Design",
    supportingLine: "When I'm not designing, I'm usually doing something that has absolutely nothing to do with Figma.",
    items: [
      {
        id: "bike-riding",
        title: "Bike Riding",
        personalityLine: "Long roads > long meetings.",
        image: "/images/about/bike-riding.png",
        objectPosition: "center 38%",
        fallbackColor: "#18181b",
        spanClass: "sm:col-span-2 md:col-span-2 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]",
        badge: "Escape"
      },
      {
        id: "trekking",
        title: "Trekking",
        personalityLine: "Usually somewhere with no Wi-Fi.",
        image: "/images/about/trekking.png",
        objectPosition: "center 65%",
        fallbackColor: "#1f2937",
        spanClass: "sm:col-span-1 md:col-span-1 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]",
        badge: "Outdoors"
      },
      {
        id: "the-mountains",
        title: "The Mountains",
        personalityLine: "Where the air is thin and thoughts are clear.",
        image: "/images/about/mountains.jpg",
        objectPosition: "center 45%",
        fallbackColor: "#1c2430",
        spanClass: "sm:col-span-1 md:col-span-1 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]",
        badge: "Altitude"
      },
      {
        id: "sofia-cat",
        title: "Sofia",
        personalityLine: "Chief Napping Officer & design critic.",
        image: "/images/about/sofia-companion.png",
        objectPosition: "center 48%",
        fallbackColor: "#1d2b3a",
        spanClass: "sm:col-span-1 md:col-span-1 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]",
        badge: "Companion"
      },
      {
        id: "gaming",
        title: "Gaming",
        personalityLine: "Where my obsession with digital experiences started.",
        image: "/images/about/gaming.jpg",
        objectPosition: "center 35%",
        fallbackColor: "#0f172a",
        spanClass: "sm:col-span-1 md:col-span-1 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]",
        badge: "Immersion"
      },
      {
        id: "anime",
        title: "Anime",
        personalityLine: "One more episode. Obviously.",
        image: "/images/about/anime.png",
        objectPosition: "center 45%",
        fallbackColor: "#171717",
        spanClass: "sm:col-span-2 md:col-span-2 min-h-[300px] sm:min-h-[340px] lg:min-h-[360px]",
        badge: "Stories"
      }
    ]
  },

  currentlyExploring: {
    eyebrow: "WHAT'S NEXT",
    title: "And now, I'm building.",
    supportingCopy: "AI is changing how quickly ideas can become working products. I'm exploring that shift by using AI assisted tools to prototype, experiment, and build beyond the traditional design file.",
    experimentLabel: "Playing with",
    tags: ["Antigravity", "Lovable", "Rapid prototyping"],
    visual: {
      url: "/images/about/building-experiments.jpg",
      alt: "AI rapid prototyping experiment with Antigravity and Lovable",
      label: "Recent experiment"
    }
  },

  finalCta: {
    mandatedHeadline: "You can stop scrolling. You found the designer.",
    supportingLine: "Have a complicated product problem? Let's talk.",
    primaryCta: {
      label: "View Selected Projects",
      action: "projects"
    },
    secondaryCta: {
      label: "Download Resume",
      action: "resume"
    },
    directEmail: "manojbh476@gmail.com"
  }
};
