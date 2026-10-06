import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  Sliders, 
  Search, 
  Sparkles, 
  Workflow, 
  LayoutGrid, 
  MessageSquareCode, 
  ExternalLink,
  ChevronRight,
  Eye,
  AlertTriangle,
  Info,
  Clock,
  Terminal,
  Cpu,
  Lock,
  Code2,
  FileText,
  User,
  Check,
  Send,
  HelpCircle,
  Laptop,
  Smartphone,
  Database,
  Server,
  Key,
  Copy,
  Download,
  Share2,
  Compass,
  Zap,
  Gauge,
  FileCode,
  CheckSquare,
  Globe,
  Camera,
  RefreshCw,
  Scale
} from 'lucide-react';

/**
 * FixoraCaseStudy:
 * Senior Product Designer case study for Fixora (Independent Product Concept / MVP).
 * Features a crystal-clear, human-friendly explanation of the technical architecture,
 * REST APIs, browser automation, deterministic algorithms, and security constraints.
 * 
 * Strict Copy Rule: Zero em dashes or en dashes in visible text.
 */
export default function FixoraCaseStudy({ onBackToProjects, onNavigateCaseStudy }) {
  const [activeNav, setActiveNav] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeInputMode, setActiveInputMode] = useState('url'); // 'url' | 'screenshot'
  const [activeScreenTab, setActiveScreenTab] = useState('results'); // 'create' | 'analysis' | 'results'
  const [activeChatPrompt, setActiveChatPrompt] = useState(0);
  const [showCodeContext, setShowCodeContext] = useState(false);
  const [activeTechTab, setActiveTechTab] = useState('apis'); // 'apis' | 'algorithms' | 'ingestion' | 'weighting'
  const [copiedLink, setCopiedLink] = useState(false);

  // 10 Chapter anchors for the sticky sub-navigation
  const chapters = [
    { id: 'overview', label: '01 Overview' },
    { id: 'problem', label: '02 The Problem' },
    { id: 'opportunity', label: '03 Opportunity' },
    { id: 'model', label: '04 Product Model' },
    { id: 'principles', label: '05 UX Principles' },
    { id: 'experience', label: '06 Core Experience' },
    { id: 'conversation', label: '07 AI Conversation' },
    { id: 'architecture', label: '08 Tech Specs' },
    { id: 'decisions', label: '09 Decisions' },
    { id: 'validation', label: '10 Validation' }
  ];

  // Dynamic scroll spy and reading progress listener
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      const scrollPosition = window.scrollY + 140;
      for (let i = chapters.length - 1; i >= 0; i--) {
        const el = document.getElementById(chapters[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveNav(chapters[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveNav(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCopyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Conversational prompts and responses
  const chatScenarios = [
    {
      question: "Why is this a problem?",
      fixoraReply: "The primary call to action button uses the same blue tone as the background container. According to the Von Restorff isolation principle, conversion elements must visually separate from their surroundings. Right now, visitors need conscious effort to locate the next step, which increases drop-off.",
      ruleBadge: "Von Restorff Isolation Principle",
      remediation: "Shift button fill to high-contrast amber #d97706 with white text."
    },
    {
      question: "How would you fix it?",
      fixoraReply: "Establish one dominant primary call to action button, reduce the visual weight of secondary links into subtle ghost pills, and strengthen the headline so the value proposition is understood in under 5 seconds before the user reaches the button.",
      ruleBadge: "Visual Hierarchy and Fitts's Law",
      remediation: "Single primary CTA with 48px touch height and 16px padding."
    },
    {
      question: "What should I prioritize first?",
      fixoraReply: "Fix the Hero section first. Our diagnostic shows that 70% of initial visitor drop-off happens before scroll. Addressing the headline clarity and button contrast will deliver the highest immediate improvement compared to lower-page footer tweaks.",
      ruleBadge: "Serial Position and First Fold Priority",
      remediation: "Focus effort on top 600px viewport before adjusting sub-pages."
    },
    {
      question: "Can you rewrite this headline?",
      fixoraReply: "Your current headline scored 34 on the Flesch-Kincaid scale: 'Leveraging hyper-synchronized cloud architectures to optimize enterprise workflows.' Here are two plain language, high-conversion alternatives: 'Run your business workflows faster on a secure cloud' or 'The fastest way to manage company data without complexity.'",
      ruleBadge: "Flesch-Kincaid Plain Language Rule",
      remediation: "Shorten to under 10 words and replace buzzwords with active verbs."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-blue-600 selection:text-white pb-32">
      {/* Sticky Dual-Row Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#fbfbfd]/90 border-b border-black/[0.06] transition-all">
        {/* Row 1: Global Navigation */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between w-full">
          <button
            onClick={onBackToProjects}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#55555c] hover:text-[#141416] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-full px-3 py-1.5 bg-black/[0.03] hover:bg-black/[0.06]"
            aria-label="Back to all projects"
          >
            <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1 text-[#86868b] group-hover:text-[#141416]" />
            <span>Back to Projects</span>
          </button>

          <div className="hidden md:flex items-center gap-2.5 text-xs font-mono text-[#86868b]">
            <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-700 font-semibold border border-blue-500/20">
              INDEPENDENT PRODUCT CONCEPT / MVP
            </span>
            <span className="font-semibold text-[#141416]">Fixora</span>
            <span className="text-black/30">/</span>
            <span>AI Powered UX Auditing</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider">Role</div>
              <div className="text-xs font-semibold text-[#141416]">Product Designer</div>
            </div>
            <div className="h-6 w-px bg-black/[0.08] hidden sm:block" />
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider">Timeline</div>
              <div className="text-xs font-semibold text-[#141416]">2026 · Concept</div>
            </div>
          </div>
        </div>

        {/* Row 2: Horizontal Chapter Sub-Navigation (Aligned Edge-to-Edge with 10 Steps) */}
        <nav className="w-full border-t border-black/[0.06] bg-[#fbfbfd]/90 py-2 relative">
          <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
            <div className="flex items-center justify-between gap-1 overflow-x-auto no-scrollbar scrollbar-none w-full">
              {chapters.map((ch) => {
                const isActive = activeNav === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => scrollToSection(ch.id)}
                    className={`px-2 py-1 xl:px-2.5 rounded-full text-[11px] xl:text-[11.5px] font-mono transition-all duration-200 whitespace-nowrap shrink-0 lg:shrink-0 focus:outline-none ${
                      isActive
                        ? 'bg-black text-white shadow-xs font-semibold'
                        : 'text-[#66666e] hover:text-[#141416] hover:bg-black/[0.04]'
                    }`}
                  >
                    {ch.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Reading Scroll Progress Bar */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-150 pointer-events-none"
            style={{ width: `${scrollProgress}%` }}
          />
        </nav>
      </header>

      {/* Main Content Stage */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 flex flex-col gap-32 md:gap-40">

        {/* CHAPTER 01: OVERVIEW & HERO */}
        <section id="overview" className="flex flex-col gap-8 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 text-blue-700 border border-blue-200/60">
                PRODUCT CONCEPT & MVP SPECIFICATION
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-neutral-100 text-neutral-600 border border-black/[0.06]">
                3 TO 5 MINUTE READ
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#141416] leading-[1.08]">
              Turning website UX problems into clear, prioritized, actionable improvements.
            </h1>

            <p className="text-lg sm:text-xl text-[#55555c] leading-relaxed font-normal pt-2">
              Fixora is an AI-powered UX audit and conversion optimization system for landing pages, product screens, and digital interfaces. Instead of generating generic aesthetic checklists, it diagnoses conversion leaks and provides context-aware, engineer-ready solutions that directly improve business outcomes.
            </p>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs">
            <div>
              <span className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider block mb-1">Role</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">Product Designer</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider block mb-1">Project Type</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">Independent Concept / MVP</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider block mb-1">Focus</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">UX Strategy · Heuristics · AI UX</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider block mb-1">Platform</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">Web App & Diagnostic HUD</span>
            </div>
          </div>

          {/* Concept Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/[0.08] border border-amber-500/20 text-amber-900 flex items-start gap-3.5 text-xs sm:text-sm leading-relaxed">
            <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">Product Concept Disclosure:</strong> Fixora is an independent product design concept and MVP specification created by Manoj to explore how AI can diagnose conversion barriers, combine deterministic heuristic laws with multimodal LLMs, and give product teams actionable clarity rather than static 80-page audit reports.
            </div>
          </div>

          {/* Interactive Diagnostic HUD Preview */}
          <div className="p-6 sm:p-8 rounded-[2.5rem] bg-[#0b1329] text-white border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-xs font-mono font-semibold tracking-wider uppercase text-blue-400">
                    Live Diagnostic HUD Simulator
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">
                  Automated Conversion & Heuristic Scanner
                </h3>
              </div>

              {/* Dual Input Mode Toggle */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.08] border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setActiveInputMode('url')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeInputMode === 'url'
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Live URL Mode
                </button>
                <button
                  onClick={() => setActiveInputMode('screenshot')}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    activeInputMode === 'screenshot'
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Screenshot Mode
                </button>
              </div>
            </div>

            {/* Diagnostic Metrics Display */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-6 border-b border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Conversion Score
                </span>
                <span className="text-3xl font-extrabold text-blue-400">64 / 100</span>
                <span className="text-[11px] text-slate-400 block mt-1">Moderate Risk Index</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Critical Friction Points
                </span>
                <span className="text-3xl font-extrabold text-rose-400">3 Found</span>
                <span className="text-[11px] text-slate-400 block mt-1">Hero & Action Buttons</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Heuristics Evaluated
                </span>
                <span className="text-3xl font-extrabold text-emerald-400">18 Rules</span>
                <span className="text-[11px] text-slate-400 block mt-1">UX · Copy · Accessibility</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Est. Implementation
                </span>
                <span className="text-3xl font-extrabold text-amber-400">15 Mins</span>
                <span className="text-[11px] text-slate-400 block mt-1">Quick Wins First</span>
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <span>Active Target: https://myproduct-landing.com</span>
              <span className="text-blue-400">Deterministic Rule Engine Active</span>
            </div>
          </div>
        </section>

        {/* CHAPTER 02: THE PROBLEM */}
        <section id="problem" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 02</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              Why traditional UX audits gather digital dust
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              Most UX audits fail not because the advice is incorrect, but because of how that advice is structured, presented, and prioritized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-[#141416]">Information Overload</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                Audits are delivered as massive 40-page PDFs or 60-row spreadsheets. Teams face decision paralysis and struggle to identify what matters today.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h3 className="text-base font-bold text-[#141416]">Flawed Prioritization</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                A minor footer spacing inconsistency is presented alongside a broken sign-up button. When everything is labeled urgent, nothing gets fixed.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-[#141416]">Missing Rationale</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                Critiques say 'change this button color' without explaining the cognitive psychology or behavioral friction behind the recommendation.
              </p>
            </div>
          </div>

          {/* Interactive Progression Diagram */}
          <div className="p-8 rounded-3xl bg-[#f8f9fc] border border-black/[0.05] flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
              The Reality of Traditional UX Feedback
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] flex flex-col gap-2">
                <span className="text-xs font-mono text-rose-600 font-semibold">Step 01: The Audit</span>
                <span className="text-sm font-bold text-[#141416]">80-Page PDF Report</span>
                <span className="text-xs text-[#737378]">Too dense for developers and founders to unpack.</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] flex flex-col gap-2">
                <span className="text-xs font-mono text-amber-600 font-semibold">Step 02: Decision Paralysis</span>
                <span className="text-sm font-bold text-[#141416]">What do we fix first?</span>
                <span className="text-xs text-[#737378]">Engineers and marketers disagree on priority.</span>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] flex flex-col gap-2">
                <span className="text-xs font-mono text-neutral-600 font-semibold">Step 03: Inaction</span>
                <span className="text-sm font-bold text-[#141416]">Report Shelved</span>
                <span className="text-xs text-[#737378]">Zero conversion improvements made.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 03: OPPORTUNITY */}
        <section id="opportunity" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 03</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              The opportunity: A conversion linter for websites
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              Software engineers have code linters that catch syntax bugs instantly before running code. Product designers and marketers need the exact same capability for conversion friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-4">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">
                The Product Vision
              </span>
              <h3 className="text-xl font-bold text-[#141416]">
                From subjective critique to objective diagnostic
              </h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                Instead of arguing about aesthetics, Fixora grounds every observation in established cognitive principles: Fitts's Law for button targets, Miller's Law for navigation density, and the Von Restorff effect for visual contrast.
              </p>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-4">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">
                The Interaction Model
              </span>
              <h3 className="text-xl font-bold text-[#141416]">
                Dual Ingestion: Live URL or Screenshot
              </h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                Live URLs allow behavioral flow analysis across the scrolling journey. Screenshot mode enables pre-launch Figma exports and mobile UI designs to be audited before a single line of code is shipped.
              </p>
            </div>
          </div>

          {/* Decision Framework Card */}
          <div className="p-8 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-6">
            <h3 className="text-lg font-bold text-[#141416]">
              The 3-Question Decision Framework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-blue-600 font-semibold">01. What is broken?</span>
                <p className="text-xs text-[#55555c] leading-relaxed">
                  Pinpoint the exact UI element, touch target, or headline causing friction.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-blue-600 font-semibold">02. Why does it matter?</span>
                <p className="text-xs text-[#55555c] leading-relaxed">
                  Tie the issue directly to visitor psychology, drop-off risk, and bounce probability.
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-mono text-blue-600 font-semibold">03. How do I fix it now?</span>
                <p className="text-xs text-[#55555c] leading-relaxed">
                  Provide concrete CSS adjustments, contrast ratios, and rewritten high-converting copy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 04: PRODUCT MODEL */}
        <section id="model" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 04</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              The 7-step analysis pipeline
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              How Fixora converts an unformatted website link or image upload into a structured, prioritized conversion roadmap using a hybrid deterministic and multimodal architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                step: '01',
                title: 'Dual Sensor Ingestion',
                desc: 'Spins up a headless Playwright browser for live websites with automatic cookie dismissal, or runs OpenCV edge detection and OCR for design screenshots.'
              },
              {
                step: '02',
                title: 'DOM AST & Coordinate Mapping',
                desc: 'Traverses the structural layout tree to extract computed pixel coordinates using getBoundingClientRect() and serializes semantic hierarchies.'
              },
              {
                step: '03',
                title: 'Core Web Vitals Bridging',
                desc: 'Queries the Google PageSpeed Insights REST API to measure real-world speed (FCP, LCP, INP), correlating loading delays directly with bounce rates.'
              },
              {
                step: '04',
                title: 'Deterministic Heuristic Check',
                desc: 'Executes programmatic algorithmic checks for Fitts\'s Law (<44px), Miller\'s Law (>7 nav links), WCAG 2.2 Relative Luminance, and Flesch-Kincaid readability.'
              },
              {
                step: '05',
                title: 'Context Weighting Matrix',
                desc: 'Applies dynamic multipliers based on business type (SaaS, Agency, E-Commerce) and strictness mode (Conversion First vs Brand Lenient).'
              },
              {
                step: '06',
                title: 'Multimodal LLM Synthesis',
                desc: 'Feeds visual bounding box crops and DOM snippets into GPT-4o and Claude 3.5 Sonnet to draft psychological consequence framing and rewritten copy.'
              },
              {
                step: '07',
                title: 'JSON Schema Serialization',
                desc: 'Enforces a strict typed data contract before rendering, outputting concrete CSS patches, estimated time-to-fix, and score deduction impacts.'
              }
            ].map((p, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2.5">
                <span className="text-xs font-mono text-blue-600 font-semibold">Step {p.step}</span>
                <h3 className="text-base font-bold text-[#141416]">{p.title}</h3>
                <p className="text-xs text-[#55555c] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CHAPTER 05: UX PRINCIPLES */}
        <section id="principles" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 05</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              The product principles
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              Four foundational design principles govern how Fixora synthesizes information, communicates findings, and protects the authority of human decision makers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">Principle 01</span>
              <h3 className="text-lg font-bold text-[#141416]">Explain, don't just flag</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                A finding must explain why something creates friction instead of simply labeling it as wrong. Context and consequence transform critique into education.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">Principle 02</span>
              <h3 className="text-lg font-bold text-[#141416]">Prioritize, don't overwhelm</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                A long checklist of 30 problems causes analysis paralysis. Surfacing only the top 3 to 5 highest-impact issues ensures teams actually take action.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">Principle 03</span>
              <h3 className="text-lg font-bold text-[#141416]">Make recommendations actionable</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                Recommendations must provide concrete changes that teams can make immediately, such as specific hex values, padding adjustments, and rewritten headlines.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">Principle 04</span>
              <h3 className="text-lg font-bold text-[#141416]">Keep humans in control</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                AI suggestions should support UX decision making rather than pretend to replace a designer. Human intent, brand context, and business constraints always lead.
              </p>
            </div>
          </div>
        </section>

        {/* CHAPTER 06: CORE EXPERIENCE */}
        <section id="experience" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 06</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              The audit experience
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              The interface is broken down into three sequential moments: friction-free creation, transparent progressive analysis, and the prioritized developer-ready audit dashboard.
            </p>
          </div>

          {/* Interactive Screen Switcher */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-black/[0.04] border border-black/[0.05] w-fit">
            {[
              { id: 'create', label: 'Screen 01: Create Audit' },
              { id: 'analysis', label: 'Screen 02: Analysis' },
              { id: 'results', label: 'Screen 03: Audit Results' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveScreenTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  activeScreenTab === tab.id
                    ? 'bg-white text-black shadow-xs font-semibold'
                    : 'text-[#66666e] hover:text-black'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Screen Display */}
          <div className="p-6 sm:p-8 rounded-[2.5rem] bg-white border border-black/[0.06] shadow-sm">
            {activeScreenTab === 'create' && (
              <div className="flex flex-col gap-6 max-w-2xl mx-auto py-8">
                <div className="text-center flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-[#141416]">Start a New Audit</h3>
                  <p className="text-xs sm:text-sm text-[#737378]">
                    Enter a public website link or upload a UI design screenshot to begin.
                  </p>
                </div>

                <div className="flex items-center gap-2 p-1 rounded-2xl bg-[#f8f9fc] border border-black/[0.06]">
                  <input
                    type="text"
                    readOnly
                    value="https://myproduct-landing.com"
                    className="w-full bg-transparent px-4 py-3 text-xs sm:text-sm font-mono text-[#141416] focus:outline-none"
                  />
                  <button className="px-5 py-3 rounded-xl bg-[#141416] text-white text-xs sm:text-sm font-semibold shrink-0">
                    Start audit
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-[#86868b] px-2">
                  <span>Context: B2B SaaS</span>
                  <span>Strictness: Conversion First</span>
                </div>
              </div>
            )}

            {activeScreenTab === 'analysis' && (
              <div className="flex flex-col gap-6 max-w-xl mx-auto py-8">
                <div className="text-center flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2">
                    <Sparkles size={22} className="animate-spin" />
                  </div>
                  <h3 className="text-xl font-bold text-[#141416]">Analyzing Interface</h3>
                  <p className="text-xs text-[#737378]">
                    Progressive telemetry communicates live cloud browser & heuristic checks.
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 font-mono text-xs">
                  {[
                    { label: 'Initializing Playwright virtual viewport (1280x800)', done: true },
                    { label: 'Awaiting networkidle state & dismissing cookie banners', done: true },
                    { label: 'Extracting DOM layout rectangles & computing contrast math', done: true },
                    { label: 'Querying Google PageSpeed Insights Core Web Vitals', done: true },
                    { label: 'Running deterministic UX laws (Fitts, Miller, Hick, Von Restorff)', done: true },
                    { label: 'Synthesizing consequence framing via multimodal LLM', done: false }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#f8f9fc] border border-black/[0.04]">
                      <span className={item.done ? 'text-[#141416]' : 'text-blue-600 font-semibold'}>
                        {item.label}
                      </span>
                      {item.done ? (
                        <Check size={14} className="text-emerald-600 shrink-0" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeScreenTab === 'results' && (
              <div className="flex flex-col gap-6">
                {/* Global Report Top Action Bar */}
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-black/[0.06] gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/60">
                      AUDIT ACTIVE
                    </span>
                    <span className="text-[#141416] font-semibold">myproduct-landing.com</span>
                    <span className="text-[#86868b]">• 1280x800 Desktop Viewport</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyLink}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-black/[0.08] hover:bg-black/[0.03] text-[#141416] font-medium transition-all shadow-2xs"
                    >
                      {copiedLink ? <Check size={12} className="text-emerald-600" /> : <Share2 size={12} className="text-blue-600" />}
                      <span>{copiedLink ? 'Copied Link' : 'Share: fixora.app/share/fx_89a2'}</span>
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-black/[0.08] hover:bg-black/[0.03] text-[#141416] font-medium transition-all shadow-2xs">
                      <FileCode size={12} className="text-purple-600" />
                      <span>Export JSON</span>
                    </button>
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-black/[0.08] hover:bg-black/[0.03] text-[#141416] font-medium transition-all shadow-2xs">
                      <Download size={12} className="text-neutral-700" />
                      <span>PDF</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Visual Evidence Canvas */}
                  <div className="lg:col-span-6 p-5 rounded-2xl bg-[#0e121e] text-white border border-white/10 flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                      <span className="text-slate-400">Visual Evidence Board</span>
                      <span className="text-emerald-400 font-semibold">1080p Viewport</span>
                    </div>

                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-900 aspect-[16/10] p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <div className="w-16 h-3 rounded bg-white/20" />
                        <div className="flex gap-2">
                          <div className="w-8 h-2 rounded bg-white/10" />
                          <div className="w-8 h-2 rounded bg-white/10" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 my-auto">
                        <div className="w-3/4 h-5 rounded bg-white/30" />
                        <div className="w-1/2 h-3 rounded bg-white/15" />
                        
                        {/* Highlighted Bounding Box on Error */}
                        <div className="mt-2 w-36 p-2 rounded-lg bg-blue-900/60 border-2 border-rose-400 relative">
                          <span className="text-[9px] font-mono text-rose-300 block">Flagged Primary CTA</span>
                          <div className="w-full h-3 rounded bg-blue-500/40 mt-1" />
                          <span className="absolute -top-2.5 -right-2 px-1.5 py-0.5 rounded bg-rose-500 text-[8px] font-bold text-white">
                            #1
                          </span>
                        </div>
                      </div>

                      <div className="text-[10px] font-mono text-slate-400 pt-2 border-t border-white/10 flex justify-between">
                        <span>Bounding Coordinates: [x: 140, y: 310, w: 144, h: 32]</span>
                        <span className="text-rose-400 font-semibold">Contrast: 2.1:1 (Fails AA)</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: Prioritized Findings Accordion */}
                  <div className="lg:col-span-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-black/[0.06]">
                      <span className="text-[#86868b] uppercase">Prioritized Findings</span>
                      <span className="text-blue-700 font-semibold">Top 3 Issues (Out of 14)</span>
                    </div>

                    {/* Finding 1 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f9fc] border border-black/[0.05] flex flex-col gap-3">
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-semibold">
                            Critical Severity
                          </span>
                          <span className="px-2 py-0.5 rounded bg-neutral-200/80 text-neutral-800 font-medium">
                            -14 Pts
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-[#86868b]">
                          <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                            <Clock size={11} /> Est: 2m
                          </span>
                          <span>Hero Section</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-[#141416]">
                          Primary CTA blends into background canvas
                        </h4>
                        <p className="text-xs text-[#55555c] leading-relaxed mt-1">
                          The primary CTA button uses a muted blue fill (#2563eb) that produces a 2.1:1 contrast ratio against the dark container, directly violating the Von Restorff isolation effect.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-black/[0.04] text-[11px]">
                        <span className="font-semibold text-[#141416] block mb-0.5">Business Consequence:</span>
                        <span className="text-[#66666e]">Visitors require conscious scanning effort to locate the next step, inflating mobile bounce rates by an estimated 18%.</span>
                      </div>

                      {/* Collapsible Developer Code Drawer */}
                      <div className="pt-2 border-t border-black/[0.04]">
                        <button
                          onClick={() => setShowCodeContext(!showCodeContext)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Code2 size={13} />
                          <span>{showCodeContext ? 'Hide Developer Code' : 'View Developer Code & CSS Patch'}</span>
                        </button>

                        <AnimatePresence>
                          {showCodeContext && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 flex flex-col gap-2 overflow-hidden"
                            >
                              <div className="p-3 rounded-xl bg-[#0e121e] text-slate-300 font-mono text-[11px] flex flex-col gap-1.5">
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Target Node Selector:</div>
                                <code className="text-emerald-400">header &gt; div.hero &gt; button.btn-cta</code>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Offending HTML:</div>
                                <code className="text-rose-300">&lt;button class="btn-primary" style="height: 32px; background: #2563eb;"&gt;Get Started&lt;/button&gt;</code>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Recommended Tailwind Patch:</div>
                                <code className="text-blue-300">h-12 px-6 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-md</code>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Finding 2 */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#f8f9fc] border border-black/[0.05] flex flex-col gap-2">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold">
                            Warning Severity
                          </span>
                          <span className="px-2 py-0.5 rounded bg-neutral-200/80 text-neutral-800 font-medium">
                            -8 Pts
                          </span>
                        </div>
                        <span className="text-[#86868b]">Navigation</span>
                      </div>
                      <h4 className="text-sm font-bold text-[#141416]">Header density exceeds Miller's Law threshold</h4>
                      <p className="text-xs text-[#55555c] leading-relaxed">
                        Global header contains 9 active top-level routes. Miller's Law specifies working memory saturation at 7 items. Recommended fix: consolidate sub-links into dropdown chunking groups.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CHAPTER 07: AI CONVERSATION */}
        <section id="conversation" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 07</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              What if the audit could answer back?
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              A static report identifies problems, but teams naturally have follow-up questions. Fixora introduces a conversational layer that allows users to move from finding to understanding to action without leaving their workspace.
            </p>
          </div>

          {/* Interactive Chat Simulation */}
          <div className="p-6 sm:p-8 rounded-[2.5rem] bg-[#0c101b] text-white border border-white/10 shadow-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MessageSquareCode size={18} className="text-blue-400" />
                <span className="text-sm font-semibold">Interactive Audit Discussion</span>
              </div>
              <span className="text-xs font-mono text-slate-400">Context: Active Finding 01</span>
            </div>

            {/* Suggested Question Chips */}
            <div className="flex flex-wrap gap-2">
              {chatScenarios.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveChatPrompt(idx)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeChatPrompt === idx
                      ? 'bg-blue-600 text-white font-semibold shadow-xs'
                      : 'bg-white/[0.06] text-slate-300 hover:bg-white/[0.1] hover:text-white'
                  }`}
                >
                  {sc.question}
                </button>
              ))}
            </div>

            {/* Chat Transcript Container */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-4">
              {/* User Bubble */}
              <div className="flex justify-end">
                <div className="max-w-md p-3.5 rounded-2xl rounded-tr-xs bg-blue-600 text-white text-xs sm:text-sm font-medium">
                  {chatScenarios[activeChatPrompt].question}
                </div>
              </div>

              {/* Fixora Bubble */}
              <div className="flex justify-start">
                <div className="max-w-lg p-4 rounded-2xl rounded-tl-xs bg-white/[0.08] border border-white/10 text-slate-200 text-xs sm:text-sm leading-relaxed flex flex-col gap-3">
                  <div className="flex items-center justify-between text-[10px] font-mono text-blue-400 pb-2 border-b border-white/10">
                    <span>Fixora Senior Advisor</span>
                    <span>{chatScenarios[activeChatPrompt].ruleBadge}</span>
                  </div>
                  <p>{chatScenarios[activeChatPrompt].fixoraReply}</p>
                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/5 text-[11px] text-emerald-300 font-mono">
                    <strong>Suggested Action:</strong> {chatScenarios[activeChatPrompt].remediation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 08: ARCHITECTURE & APIS (EASY TO UNDERSTAND FOR EVERYONE) */}
        <section id="architecture" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 08</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              How the technology works, explained simply
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              Fixora is not a black-box AI tool that makes random guesses. It combines real browser automation, web performance APIs, mathematical design rules, and AI synthesis. Here is how each piece works under the hood.
            </p>
          </div>

          {/* Core Stance Banner */}
          <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200 text-blue-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-700 font-semibold block mb-1">
                The Core Engineering Rule
              </span>
              <p className="text-base sm:text-lg font-bold">
                Math and code check the design first. AI only writes the explanation.
              </p>
            </div>
            <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-blue-100 text-blue-800 shrink-0">
              Zero Guesswork
            </span>
          </div>

          {/* Interactive Human-Friendly Tech Studio */}
          <div className="p-6 sm:p-8 rounded-[2.5rem] bg-[#0c101b] text-white border border-white/10 shadow-2xl flex flex-col gap-6">
            {/* Interactive Tab Switcher */}
            <div className="flex flex-wrap items-center justify-between pb-4 border-b border-white/10 gap-3">
              <div className="flex items-center gap-2">
                <Cpu size={18} className="text-blue-400" />
                <span className="text-sm font-semibold">Interactive Tech Breakdown</span>
              </div>

              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.08] border border-white/10 text-xs font-medium">
                {[
                  { id: 'apis', label: '1. The 3 APIs Used' },
                  { id: 'algorithms', label: '2. The 4 Math Rules' },
                  { id: 'ingestion', label: '3. Why Iframes Fail & How We Solved It' },
                  { id: 'weighting', label: '4. Context Weighting' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTechTab(tab.id)}
                    className={`px-3 py-1.5 rounded-lg transition-all ${
                      activeTechTab === tab.id
                        ? 'bg-blue-600 text-white font-semibold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB 1: THE 3 APIS USED */}
            {activeTechTab === 'apis' && (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-base font-bold text-white">The Three APIs Powering Fixora</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    Instead of trying to reinvent the wheel, Fixora orchestrates three specialized web services to deliver an audit in under 15 seconds.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* API 1 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold">
                      <Zap size={15} />
                      <span>Google PageSpeed API</span>
                    </div>
                    <div className="text-sm font-bold text-white">The Speed & SEO Sensor</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Measures how many seconds the site takes to load on real mobile phones. If the page takes longer than 2.5 seconds, it translates that delay into projected lost revenue.
                    </p>
                    <div className="p-2.5 rounded-xl bg-black/40 text-[11px] font-mono text-slate-400 mt-auto">
                      Checks: LCP, FCP, and mobile bounce curves.
                    </div>
                  </div>

                  {/* API 2 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-semibold">
                      <Server size={15} />
                      <span>Fixora Ingestion API</span>
                    </div>
                    <div className="text-sm font-bold text-white">The Dispatcher (POST /audit)</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Takes your URL or uploaded picture, reads your business type (like B2B SaaS), and starts a hidden browser robot in the cloud to snapshot your page.
                    </p>
                    <div className="p-2.5 rounded-xl bg-black/40 text-[11px] font-mono text-slate-400 mt-auto">
                      Checks: 1280x800 desktop and 390x844 mobile views.
                    </div>
                  </div>

                  {/* API 3 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold">
                      <Sparkles size={15} />
                      <span>Vision LLM API</span>
                    </div>
                    <div className="text-sm font-bold text-white">The AI Copy & Code Writer</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Uses GPT-4o and Claude 3.5 Sonnet to turn the mathematical errors into friendly, plain-English explanations and ready-to-copy code snippets.
                    </p>
                    <div className="p-2.5 rounded-xl bg-black/40 text-[11px] font-mono text-slate-400 mt-auto">
                      Delivers: Rewritten headlines and Tailwind CSS patches.
                    </div>
                  </div>
                </div>

                {/* Plain-English Input/Output Contract */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3">
                  <div className="text-xs font-mono text-blue-400 uppercase tracking-wider font-semibold">
                    What Goes In vs What Comes Out (The Data Contract)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
                      <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">What the User Inputs:</span>
                      <ul className="space-y-1 text-slate-200">
                        <li>• <strong>Target:</strong> Website URL or Figma Screenshot</li>
                        <li>• <strong>Industry:</strong> SaaS, Creative Agency, or E-Commerce</li>
                        <li>• <strong>Audience:</strong> B2B (logic-focused) or B2C (emotion-focused)</li>
                        <li>• <strong>Strictness:</strong> Conversion-First or Brand-Lenient</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-col gap-2">
                      <span className="text-emerald-400 font-bold uppercase tracking-wider text-[10px]">What Fixora Generates:</span>
                      <ul className="space-y-1 text-slate-200">
                        <li>• <strong>Conversion Score:</strong> 0 to 100 Health Rating</li>
                        <li>• <strong>Top 3-5 Fixes:</strong> Capped to prevent overwhelm</li>
                        <li>• <strong>Visual Pins:</strong> Exact pixel box on the image</li>
                        <li>• <strong>Ready-to-Use Fix:</strong> Ready CSS and rewritten headlines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: THE 4 MATHEMATICAL RULES */}
            {activeTechTab === 'algorithms' && (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-base font-bold text-white">The 4 Mathematical Design Rules (No Hallucinations)</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    Fixora does not ask AI if a button is too small or if text is hard to read. It uses real code and mathematical formulas to measure every element objectively.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Rule 1 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-rose-400 font-bold">Rule 01: Fitts's Law</span>
                      <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px]">Critical</span>
                    </div>
                    <div className="text-sm font-bold text-white">Is the button big enough for human thumbs?</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>The Rule:</strong> On mobile devices, buttons must be at least 44 by 44 pixels.
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      <strong>How Fixora checks it:</strong> A virtual ruler measures the button dimensions directly in the browser code. If width or height is under 44px, it automatically triggers a critical warning.
                    </p>
                  </div>

                  {/* Rule 2 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-amber-400 font-bold">Rule 02: Color Contrast (WCAG 2.2)</span>
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]">Accessibility</span>
                    </div>
                    <div className="text-sm font-bold text-white">Can visitors actually read the text?</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>The Rule:</strong> Normal text must have a contrast ratio of at least 4.5 to 1 against its background.
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      <strong>How Fixora checks it:</strong> Uses the international relative luminance formula (measuring light reflection) to mathematically compare the font color to the background.
                    </p>
                  </div>

                  {/* Rule 3 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-blue-400 font-bold">Rule 03: Miller's Law</span>
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px]">Clarity</span>
                    </div>
                    <div className="text-sm font-bold text-white">Is the menu overwhelming the visitor?</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>The Rule:</strong> The human brain can comfortably hold only 7 items in short-term memory.
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      <strong>How Fixora checks it:</strong> Counts how many links exist in the top navigation bar. If there are more than 7, it advises organizing them into clean dropdown categories.
                    </p>
                  </div>

                  {/* Rule 4 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-emerald-400 font-bold">Rule 04: Plain Language Readability</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Copywriting</span>
                    </div>
                    <div className="text-sm font-bold text-white">Does the headline make sense in 5 seconds?</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>The Rule:</strong> Value propositions should be easy to understand, not stuffed with buzzwords.
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      <strong>How Fixora checks it:</strong> Runs the Flesch-Kincaid math test on sentence length and syllables. If a headline sounds like corporate fluff, it rewrites it in plain English.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: WHY IFRAMES FAIL & HOW WE SOLVED IT */}
            {activeTechTab === 'ingestion' && (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-base font-bold text-white">Why Iframes Fail and How Fixora Solved It</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    A classic trap in product design is assuming you can simply embed a live website inside an audit screen. Here is why that fails and how Fixora engineered around it.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* The Problem */}
                  <div className="p-5 rounded-2xl bg-rose-500/[0.08] border border-rose-500/20 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold">
                      <AlertTriangle size={15} />
                      <span>The Trap: Browser Security Blocks Iframes</span>
                    </div>
                    <div className="text-sm font-bold text-white">Why normal embeds don't work</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Almost all modern websites use security headers called <code>X-Frame-Options</code> and Content Security Policies. These prevent other websites from putting them in an iframe (to stop clickjacking attacks).
                    </p>
                    <p className="text-xs text-rose-300 leading-relaxed font-mono">
                      Result: If Fixora tried to use an iframe, 95% of websites would show a blank grey error box.
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="p-5 rounded-2xl bg-emerald-500/[0.08] border border-emerald-500/20 flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold">
                      <CheckCircle2 size={15} />
                      <span>The Fix: Headless Snapshot + Coordinate Pins</span>
                    </div>
                    <div className="text-sm font-bold text-white">How Fixora solved it cleanly</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Instead of an iframe, Fixora runs a headless Playwright browser in the cloud. It loads the URL, closes cookie popups, captures a high-resolution snapshot, and records the exact pixel coordinates of every button and headline.
                    </p>
                    <p className="text-xs text-emerald-300 leading-relaxed font-mono">
                      Result: The user gets an interactive image with clickable red bounding boxes that never breaks.
                    </p>
                  </div>
                </div>

                {/* Screenshot Mode */}
                <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Camera size={20} className="text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-bold text-white block">What if the site is not live yet? (Screenshot Mode)</span>
                      <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                        Designers can upload a flat Figma export or mobile screenshot. Fixora uses computer vision to find button shapes and OCR text recognition to read words without needing any HTML code.
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/20 text-blue-300 shrink-0">
                    Pre-Launch Ready
                  </span>
                </div>
              </div>
            )}

            {/* TAB 4: CONTEXT WEIGHTING */}
            {activeTechTab === 'weighting' && (
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="text-base font-bold text-white">Context Weighting: One Size Does Not Fit All</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    A creative design portfolio should not be judged by the same rules as an e-commerce checkout. Fixora dynamically adjusts its scoring rules based on who the website is for.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Mode 1 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider">Mode 01</span>
                    <h5 className="text-sm font-bold text-white">Strict Conversion (SaaS)</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Prioritizes rapid clarity and prominent call-to-action buttons. Heavy score penalties if the primary benefit is not clear within 5 seconds.
                    </p>
                    <div className="mt-auto pt-2 border-t border-white/10 text-[11px] font-mono text-rose-300">
                      UX Penalty: 1.2x Harsher
                    </div>
                  </div>

                  {/* Mode 2 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">Mode 02</span>
                    <h5 className="text-sm font-bold text-white">Brand & Creative First</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Accommodates generous whitespace, artistic navigation, and unconventional layouts without docking points unfairly.
                    </p>
                    <div className="mt-auto pt-2 border-t border-white/10 text-[11px] font-mono text-emerald-300">
                      UX Penalty: 0.6x Lenient
                    </div>
                  </div>

                  {/* Mode 3 */}
                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
                    <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">Mode 03</span>
                    <h5 className="text-sm font-bold text-white">E-Commerce Funnel</h5>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Zero tolerance for checkout friction, confusing multi-step forms, or slow page loading speeds on mobile devices.
                    </p>
                    <div className="mt-auto pt-2 border-t border-white/10 text-[11px] font-mono text-rose-300">
                      Friction Penalty: 1.4x Critical
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CHAPTER 09: DESIGN DECISIONS */}
        <section id="decisions" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 09</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              A few decisions that shaped the product
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              Every major interface choice was driven by product trade-offs between speed, cognitive load, and actionable utility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-3">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">Decision 01</span>
              <h3 className="text-lg font-bold text-[#141416]">From score to explanation</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                A numeric score tells users where they stand, but an explanation tells them what to do. Fixora de-emphasizes the score in favor of concrete findings, visual bounding boxes, and behavioral reasoning.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-3">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">Decision 02</span>
              <h3 className="text-lg font-bold text-[#141416]">From issue list to priority</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                Not every issue deserves equal weight. Grouping findings into High, Medium, and Low severity and capping initial findings to the top 3 to 5 issues dramatically reduces decision fatigue.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-3">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">Decision 03</span>
              <h3 className="text-lg font-bold text-[#141416]">From report to conversation</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                Users naturally have follow-up questions about recommendations. The conversational layer lets teams investigate alternatives and copy rewrites seamlessly without switching tools.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-3">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase tracking-wider">Decision 04</span>
              <h3 className="text-lg font-bold text-[#141416]">From AI authority to AI assistant</h3>
              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                Design decisions depend on customer context and business goals that automated tools cannot fully see. Fixora frames outputs as suggestions, keeping human teams in charge.
              </p>
            </div>
          </div>
        </section>

        {/* CHAPTER 10: VALIDATION & REFLECTION */}
        <section id="validation" className="flex flex-col gap-10 scroll-mt-32">
          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#86868b]">Chapter 10</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]">
              What I would validate next
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] leading-relaxed">
              Because Fixora is an MVP concept, the next question isn't whether it looks polished. It is whether the recommendations actually help people make better product decisions.
            </p>
          </div>

          {/* 3 Core Validation Hypotheses */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase">Hypothesis 01</span>
              <h4 className="text-base font-bold text-[#141416]">Comprehension</h4>
              <p className="text-xs text-[#55555c] leading-relaxed">
                Do non-designers clearly understand why a finding was generated without getting confused by technical UX laws?
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase">Hypothesis 02</span>
              <h4 className="text-base font-bold text-[#141416]">Prioritization</h4>
              <p className="text-xs text-[#55555c] leading-relaxed">
                Does limiting the output to the top 3 to 5 issues reduce decision time and increase implementation speed?
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2.5">
              <span className="text-xs font-mono text-blue-600 font-semibold uppercase">Hypothesis 03</span>
              <h4 className="text-base font-bold text-[#141416]">Trust and Action</h4>
              <p className="text-xs text-[#55555c] leading-relaxed">
                Do founders and engineers trust the recommendation enough to commit changes to their live code or Figma files?
              </p>
            </div>
          </div>

          {/* Senior Takeaway Card */}
          <div className="p-8 rounded-3xl bg-[#141416] text-white flex flex-col gap-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              The Biggest Product Takeaway
            </span>
            <p className="text-xl sm:text-2xl font-bold tracking-tight leading-snug">
              Good AI UX isn't about making the model more visible. It's about making its output more understandable, useful, and actionable.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs font-mono text-slate-400">
              <span>Product Thinking</span>
              <span>•</span>
              <span>AI Product Design</span>
              <span>•</span>
              <span>Systems Thinking</span>
            </div>
          </div>
        </section>

        {/* FINAL CTA & TRANSITION TO REGISTERKARO */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1120] text-white border border-white/10 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-semibold uppercase">
              <span>Next Case Study 04</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              RegisterKaro: Customer Onboarding Portal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Transforming business compliance and statutory incorporation from a fragmented 7-step ordeal into a guided 5-milestone digital onboarding experience with automated KYC.
            </p>
          </div>

          <button
            onClick={() => onNavigateCaseStudy && onNavigateCaseStudy('registerkaro')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shrink-0"
          >
            <span>Explore RegisterKaro</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="flex items-center justify-center pt-2">
          <button
            onClick={onBackToProjects}
            className="text-xs font-mono text-[#86868b] hover:text-[#141416] transition-colors underline underline-offset-4"
          >
            Back to all projects
          </button>
        </div>

      </div>
    </div>
  );
}
