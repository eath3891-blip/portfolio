/**
 * Featured Case Studies Configuration
 * Centralized content for the 3 dedicated full-page case studies:
 * 1. TransOrg IQ (Enterprise AI & Analytics)
 * 2. RegisterKaro (GovTech / FinTech Onboarding)
 * 3. Trybl (Web3 Gaming & Esports Economy)
 * 
 * Note: Strictly zero em dashes or en dashes in visible copy.
 */

export const CASE_STUDIES_CONFIG = {
  "sentinel-ai": {
    id: "sentinel-ai",
    number: "01",
    title: "Sentinel AI",
    subtitle: "A control center for AI agents",
    eyebrow: "CASE STUDY 01: AI AGENT GOVERNANCE & OBSERVABILITY",
    badge: "AI Governance",
    year: "2025",
    role: "Product Designer",
    timeline: "Independent Concept (2025)",
    team: "Independent Product Concept",
    platform: "Enterprise Web Control Plane (Desktop & Tablet)",
    deliverables: "Product Strategy, UX Architecture, Interaction Design, Technical Systems",
    accentColor: "#3b82f6",
    visualType: "sentinel",
    nextProjectId: "codash",

    executiveSummary:
      "Sentinel AI is a control center for AI agents. As AI agents move from answering questions to taking actions, enterprises need a clearer way to understand what those agents can access, what they are doing, and when humans need to step in.",

    metadata: [
      { label: "Role", value: "Product Designer" },
      { label: "Project Type", value: "Independent Product Concept" },
      { label: "Platform", value: "Enterprise Web Control Plane" },
      { label: "Core Scope", value: "Product Strategy, UX Design, AI Systems, Enterprise UX" }
    ],

    challenge: {
      headline: "The danger of autonomous agent sprawl without governance guardrails.",
      paragraphs: [
        "As modern enterprises rapidly deploy autonomous LLM agents across customer service, finance, and engineering, teams lose visibility into what agents are doing, what systems they can access, and what decisions they make autonomously.",
        "Without unified governance, organizations face critical security breaches, unauthorized database mutations, high blast radiuses, and severe audit compliance failures."
      ],
      keyFrictions: [
        "Agent sprawl across fragmented cloud infrastructure",
        "Opaque decision chains with zero forensic accountability",
        "Over-privileged tool and API access permissions",
        "Alert fatigue and slow human-in-the-loop intervention latency"
      ]
    },

    solution: {
      headline: "Know what your agents can do. Control what they should do. Understand what they actually do.",
      description:
        "We designed a multi-layer governance architecture combining an autonomy matrix, real-time risk engine, contextual approval dockets, and an immutable forensic timeline.",
      workflowSteps: [
        {
          step: "01",
          title: "Fleet Observability & Discovery",
          description:
            "Instant global inventory of all active enterprise agents, tracking model versions, token burn, and current operating autonomy tiers."
        },
        {
          step: "02",
          title: "Policy & Guardrail Enforcement",
          description:
            "Dynamic runtime evaluation of actions against safety boundaries, halting unauthorized API writes and sensitive data access."
        },
        {
          step: "03",
          title: "Forensic Audit & Rollback",
          description:
            "Granular step-by-step decision trees enabling 1-click state rollback and cryptographic action logs for full SOC2/ISO compliance."
        }
      ]
    },

    designDecisions: [
      {
        title: "4-Tier Autonomy Governance Framework",
        description:
          "Categorizing agent capability into Observe, Advise, Act with Approval, and Act Autonomously to ensure human supervision where risk is highest."
      },
      {
        title: "Contextual Human-in-the-Loop Dockets",
        description:
          "Providing reviewers with blast radius visualizers, dry-run diffs, and confidence breakdowns to eliminate blind sign-offs."
      },
      {
        title: "Progressive Disclosure Forensics",
        description:
          "Enabling operators to seamlessly zoom from high-level fleet health down to raw LLM prompt tokens and execution traces."
      }
    ],

    impact: {
      metrics: [
        { value: "~57%", label: "Target Reduction in Investigation Time" },
        { value: "90%+", label: "Target Active Policy Coverage" },
        { value: "95%+", label: "Target Governed Production Actions" }
      ],
      quote:
        "AI agents will transform enterprise velocity, but velocity without governance is vulnerability. Sentinel AI proves that rigorous security and frictionless design can coexist seamlessly."
    }
  },
  "transorg-iq": {
    id: "transorg-iq",
    number: "01",
    title: "TransOrg IQ",
    subtitle: "Conversational Analytics and Enterprise AI Decision Platform",
    eyebrow: "CASE STUDY 01: ENTERPRISE AI",
    badge: "Enterprise AI",
    year: "2024",
    role: "Lead Product Designer",
    timeline: "6 Months (2024)",
    team: "1 Product Designer, 2 Product Managers, 6 ML & Full-Stack Engineers",
    platform: "Web Application (Desktop & Tablet)",
    deliverables: "Design System, 40+ Enterprise Screens, Interaction Specs, Prototyping",
    accentColor: "#2563eb",
    visualType: "analytics",
    nextProjectId: "codash",

    executiveSummary:
      "TransOrg IQ is an enterprise intelligence layer that translates complex data models and machine learning pipelines into conversational insights. Instead of submitting ad-hoc SQL requests or deciphering dense dashboards, business executives and analysts query their petabyte data warehouse in plain English, receiving verifiable answers with confidence scores and automated drill-down paths.",

    metadata: [
      { label: "Role & Ownership", value: "Lead Product Designer" },
      { label: "Timeline", value: "6 Months (2024)" },
      { label: "Platform", value: "Enterprise Web Application" },
      { label: "Core Scope", value: "Complex Workflows, AI Interaction, Design Systems" }
    ],

    challenge: {
      headline: "The bottleneck between raw data and business decisions.",
      paragraphs: [
        "In large enterprises, decision-makers rely on data intelligence teams to write custom SQL scripts and generate reports. This turnaround loop frequently took between 3 to 7 days, leaving operational decisions delayed or intuition-driven.",
        "Existing BI dashboards were overloaded with static charts that failed to answer specific 'why' questions. When machine learning forecasts were introduced, users distrusted the predictions because the models offered zero explainability or transparent confidence indicators."
      ],
      keyFrictions: [
        "Multi-day lag between question and data answer",
        "Overcrowded dashboards with high cognitive overhead",
        "Opaque AI predictions with zero explainability",
        "Inability for non-technical executives to self-serve data queries"
      ]
    },

    solution: {
      headline: "Turning algorithmic complexity into intuitive conversations.",
      description:
        "We designed a dual-interaction paradigm: a natural language command center paired with an interactive data canvas that gives users instant answers and transparent reasoning paths.",
      workflowSteps: [
        {
          step: "01",
          title: "Natural Language Intent Parsing",
          description:
            "Users type or speak business questions. The interface provides real-time semantic token suggestions and parameter chips before query execution."
        },
        {
          step: "02",
          title: "Explainable Confidence Scoring",
          description:
            "Every output renders an explainability breakdown, displaying model confidence percentage, source database tables, and latency overhead."
        },
        {
          step: "03",
          title: "Interactive Canvas & Deep Dives",
          description:
            "Outputs transition from concise conversational summaries into interactive charts, pivot matrices, and 1-click cohort exports."
        }
      ]
    },

    designDecisions: [
      {
        title: "Transparent AI Confidence Indicators",
        description:
          "Rather than presenting AI outputs as absolute truth, we created a clear tripartite confidence gauge (High, Moderate, Exploratory) so users immediately understand risk before acting on recommendations."
      },
      {
        title: "Granular Query Inspector",
        description:
          "For technical analysts who wanted verification, a side drawer exposed the compiled SQL and underlying mathematical weights without cluttering the primary executive view."
      },
      {
        title: "Component Tokenization for 40+ Screens",
        description:
          "Standardized typography, dark-mode data density tokens, and semantic state indicators across 40+ production screens to accelerate engineering handoff."
      }
    ],

    impact: {
      metrics: [
        { value: "70%", label: "Reduction in Ad-Hoc Query Turnaround Time" },
        { value: "40+", label: "Enterprise AI Screens Designed and Shipped" },
        { value: "5", label: "Enterprise Client Divisions Onboarded" }
      ],
      quote:
        "The interface bridges deep data science with executive clarity, turning what used to be a weekly backlog into real-time business decisions."
    }
  },

  "registerkaro": {
    id: "registerkaro",
    number: "02",
    title: "RegisterKaro",
    subtitle: "Business Compliance and Legal Registration Infrastructure",
    eyebrow: "CASE STUDY 02: GOVTECH & FINTECH",
    badge: "GovTech / FinTech",
    year: "2024 to 2025",
    role: "Product Designer",
    timeline: "8 Months (2024 to 2025)",
    team: "1 Product Designer, 1 Design Lead, 2 Legal Advisors, 4 Engineers",
    platform: "Responsive Web Portal and Mobile Web",
    deliverables: "Onboarding Systems, Form Architecture, 40+ Component Design System",
    accentColor: "#059669",
    visualType: "stepper",
    nextProjectId: "fixora",

    executiveSummary:
      "RegisterKaro is India's leading online business registration and compliance platform. The mission was to transform an opaque, paper-heavy legal process involving dozens of statutory documents into a seamless, guided digital onboarding experience with verified identity checks and real-time ministry sync.",

    metadata: [
      { label: "Role & Ownership", value: "Product Designer" },
      { label: "Timeline", value: "8 Months (2024 to 2025)" },
      { label: "Platform", value: "Responsive Web and Mobile App" },
      { label: "Core Scope", value: "Onboarding Systems, Form Architecture, Design System" }
    ],

    challenge: {
      headline: "Complex legal bureaucracy meets first-time entrepreneurs.",
      paragraphs: [
        "Registering a business or filing corporate compliance in India involves strict Ministry of Corporate Affairs (MCA) guidelines, digital signatures, director identification numbers, and multi-tier verification steps.",
        "The legacy flow was suffering from an overwhelming 7-step form structure packed with confusing legal jargon. Users consistently dropped out during document uploads and payment phases due to lack of transparent progress tracking and unclear file requirements."
      ],
      keyFrictions: [
        "Intimidating legal terminology with zero contextual guidance",
        "Sudden form validation errors after submitting 15+ fields",
        "Unclear documentation requirements causing repeated customer support tickets",
        "High drop-off during statutory fee payment steps"
      ]
    },

    solution: {
      headline: "Restructuring 7 fragmented steps into 5 guided milestones.",
      description:
        "We redesigned the entire customer onboarding flow from the ground up, replacing monolithic forms with a progressive disclosure stepper, contextual micro-guidance, and automated OCR document scanning.",
      workflowSteps: [
        {
          step: "01",
          title: "Entity Structure & Smart Name Search",
          description:
            "Interactive name availability checker directly querying MCA registry with instant trademark conflict alerts."
        },
        {
          step: "02",
          title: "Director KYC & Automated OCR",
          description:
            "Instant document upload with real-time field auto-fill from national identity cards, eliminating manual typo errors."
        },
        {
          step: "03",
          title: "Statutory Approval & Real-Time Tracking",
          description:
            "Visual milestone timeline showing exact status: Ministry Review, RoC Digital Signature, and Certificate Issuance."
        }
      ]
    },

    designDecisions: [
      {
        title: "Progressive Form Disclosure",
        description:
          "Instead of asking for 25 inputs at once, we grouped related statutory requirements into 5 digestible milestones, showing estimated completion times for each."
      },
      {
        title: "Contextual Legal Micro-Copy",
        description:
          "Replaced complex statutory clauses with plain-English tooltips explaining exactly why each document is required by government authorities."
      },
      {
        title: "Unified 40+ Tokenized Component System",
        description:
          "Created modular form inputs, sticky status bars, document drop zones, and price breakdowns, standardizing visual consistency across 20+ service verticals."
      }
    ],

    impact: {
      metrics: [
        { value: "18%", label: "Reduction in Customer Onboarding Drop-off" },
        { value: "20+", label: "Service Vertical Pages Restructured" },
        { value: "40+", label: "Reusable Components Standardized in Design System" }
      ],
      quote:
        "By treating legal compliance as a guided journey rather than a government form, we drastically reduced user anxiety and cut onboarding abandonment by 18%."
    }
  },

  "codash": {
    id: "codash",
    number: "02",
    title: "Codash",
    subtitle: "AI-Powered Interview Platform",
    eyebrow: "CASE STUDY 02: PRODUCT DESIGN & CONVERSATIONAL AI",
    badge: "Product Design",
    year: "2025",
    role: "Product Designer",
    timeline: "Product Design Engagement",
    team: "Cross-functional collaboration",
    platform: "Web Application (Desktop 1440px, Tablet & Mobile)",
    deliverables: "End-to-End Product Architecture, Interaction Design, Conversational UX, Design System",
    accentColor: "#1180FF",
    visualType: "codash",
    nextProjectId: "fixora",

    executiveSummary:
      "Codash is an AI-powered interview platform designed to help hiring teams evaluate candidates consistently while creating a transparent, supportive and low-friction experience for candidates. Designed as a two-sided product ecosystem connecting candidate psychological safety with hiring-team structured evaluation.",

    metadata: [
      { label: "Role", value: "Product Designer" },
      { label: "Product", value: "Codash / Coinvervue" },
      { label: "Domain", value: "B2B SaaS · Recruitment · AI" },
      { label: "Platform", value: "Responsive Web" },
      { label: "Core Scope", value: "End-to-End Product Design, AI UX, Systems" }
    ],

    challenge: {
      headline: "The challenge was not designing an AI interviewer. It was designing trust around one.",
      paragraphs: [
        "Traditional interview workflows create friction for both hiring teams and candidates. Recruiters need structured evaluation and scalable screening, while candidates need clarity, fairness, transparency and an experience that does not feel like an automated test.",
        "How might we design an AI-led interview experience that feels structured and intelligent without making candidates feel like they are interacting with surveillance software?"
      ],
      keyFrictions: [
        "Opaque AI evaluation creating extreme candidate anxiety",
        "Rigid automated tests that penalize natural pauses and thinking time",
        "Disjointed tooling between video, technical sandboxes, and transcripts",
        "Recruiter fatigue from unstructured and uncalibrated screening signals"
      ]
    },

    solution: {
      headline: "Turning an automated assessment into a structured, human-centered conversation.",
      description:
        "We designed a two-sided interview ecosystem featuring Meet-inspired dynamic participant tiles, an explicit 7-state conversational machine, contextual coding and whiteboard tools, and an auditable hiring team evaluation dashboard.",
      workflowSteps: [
        {
          step: "01",
          title: "Emotional & Technical Onboarding",
          description:
            "Separating context and psychological reassurance from hardware checks, followed by explicit consent and candidate rights."
        },
        {
          step: "02",
          title: "State-Driven Conversational Interview",
          description:
            "Dynamic participant video tiles (AI + Candidate + Screen Share + Human Co-interviewer) with explicit waiting, thinking, and recovery states."
        },
        {
          step: "03",
          title: "Structured Hiring Team Evaluation",
          description:
            "Synchronized response review, contextual code playback, and structured signal rubrics ensuring objective human decisions."
        }
      ]
    },

    designDecisions: [
      {
        title: "Separate Welcome from Device Check",
        description:
          "The first screen establishes context, pacing reassurance, and role clarity before requesting camera and microphone permissions."
      },
      {
        title: "Meet-Inspired Dynamic Participant Layout",
        description:
          "Rather than a chatbot drawer, AI and candidate exist as equal participant tiles that smoothly adapt when screen sharing or co-interviewers join."
      },
      {
        title: "Explicit State Machine with Thinking Agency",
        description:
          "Candidates can toggle 'I am thinking' or pause without silent penalty, removing the existential dread of dead air."
      },
      {
        title: "Strict Responsible AI Boundaries",
        description:
          "Zero facial recognition, zero emotion detection, and zero biometric scoring. AI facilitates the conversation while humans retain all hiring evaluation."
      }
    ],

    impact: {
      metrics: [
        { value: "Two-Sided", label: "Ecosystem (Candidate + Recruiter)" },
        { value: "7 States", label: "Explicit Conversational State Machine" },
        { value: "0 Biometrics", label: "Strict Responsible AI Policy" }
      ],
      quote:
        "AI interviewing is not just a conversation problem. It is a systems-design problem involving trust, communication, technical reliability, candidate psychology, and enterprise requirements."
    }
  },

  "fixora": {
    id: "fixora",
    number: "03",
    title: "Fixora",
    subtitle: "Turning UX expertise into actionable product decisions.",
    eyebrow: "INDEPENDENT PRODUCT CONCEPT",
    badge: "Product Design",
    year: "2024",
    role: "Product Designer",
    timeline: "Product Concept (2024)",
    team: "Independent Product Concept and MVP by Manoj",
    platform: "Responsive Web Application and Browser Tool",
    deliverables: "Product Strategy, UX Architecture, Heuristics Engine, AI Conversation",
    accentColor: "#2563eb",
    visualType: "audit",
    nextProjectId: "sentinel-ai",

    executiveSummary:
      "Fixora explores how AI can help teams identify UX problems in websites and understand what to fix, why it matters, and what they can do next. Rather than generating long, unprioritized lists of issues, Fixora turns website audits into clear, prioritized, decision-support conversations.",

    metadata: [
      { label: "Role & Ownership", value: "Product Designer" },
      { label: "Scope", value: "Product Strategy, UX, UI, AI Interaction Design" },
      { label: "Status", value: "MVP Concept" },
      { label: "Focus", value: "AI powered UX Auditing" }
    ],

    challenge: {
      headline: "The problem wasn't finding UX problems. It was knowing what to do next.",
      paragraphs: [
        "Designers can identify usability issues relatively quickly, but many teams and website owners do not have access to that expertise. Existing website audit experiences can easily become generic scores, long lists of 30+ issues, vague recommendations, accessibility checklists without context, and AI-generated advice without prioritization.",
        "The opportunity behind Fixora was to explore a different model: what if a UX audit behaved less like a report and more like a product conversation that prioritizes only the top 3 to 5 critical issues?"
      ],
      keyFrictions: [
        "Generic numeric scores that provide zero actionable next steps",
        "Overwhelming issue lists causing analysis paralysis and drop-off",
        "Vague recommendations disconnected from behavioral consequences",
        "AI output that hallucinates or pretends to replace human design judgement"
      ]
    },

    solution: {
      headline: "From audit report to decision support.",
      description:
        "Fixora structures audits around a simple three-question framework: What is wrong? Why does it matter? What should I do next? AI provides structured UX guidance and prioritization, while the human designer or product team remains the decision maker.",
      workflowSteps: [
        {
          step: "01",
          title: "Dual Ingestion Scanner",
          description:
            "Enter a live website URL for behavioral and structural flow analysis, or drop a UI screenshot for visual clarity and hierarchy auditing."
        },
        {
          step: "02",
          title: "Structured Heuristic Engine",
          description:
            "Evaluates interfaces against universal UX laws (Fitts's Law, Miller's Law, Von Restorff Effect) combined with conversion copywriting formulas."
        },
        {
          step: "03",
          title: "Conversational Follow-up",
          description:
            "Users can question findings, request alternative layout solutions, and generate rewritten copy options in real time."
        }
      ]
    },

    designDecisions: [
      {
        title: "From Score to Explanation",
        description:
          "Instead of making an arbitrary numeric score the primary output, Fixora highlights clear findings, behavioral reasoning, and concrete actions."
      },
      {
        title: "From Issue List to Priority",
        description:
          "Surfacing only the top 3 to 5 critical issues reduces cognitive load and prevents audit fatigue."
      },
      {
        title: "From Report to Conversation",
        description:
          "A conversational layer allows users to explore why an issue matters and evaluate remediation options without leaving their workflow."
      },
      {
        title: "From AI Authority to AI Assistant",
        description:
          "Fixora supports human judgement rather than presenting AI suggestions as absolute truth, designing explicitly for AI uncertainty."
      }
    ],

    impact: {
      metrics: [
        { value: "3 to 5", label: "Prioritized Fixes Per Audit" },
        { value: "3 Steps", label: "Decision Framework (What, Why, Next)" },
        { value: "Human-in-Loop", label: "Final Decision Control Retained" }
      ],
      quote:
        "Good AI UX isn't about making the model more visible. It's about making its output more understandable, useful, and actionable."
    }
  }
};
