import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle, 
  Activity, 
  CheckCircle2, 
  Cpu, 
  Lock, 
  Layers, 
  Sliders, 
  Users, 
  Database, 
  Terminal, 
  Eye, 
  Zap, 
  Check, 
  X, 
  ChevronRight, 
  ChevronDown,
  FileText, 
  GitBranch, 
  Search, 
  Server, 
  Key, 
  Clock, 
  Sparkles, 
  Target, 
  Compass, 
  ArrowDown, 
  Workflow, 
  BarChart3, 
  HelpCircle,
  Radio,
  ExternalLink,
  Shield,
  Layers3,
  Network
} from 'lucide-react';
import AgentEcosystemGraph3D from '../../components/case-studies/AgentEcosystemGraph3D';
import SentinelUIScreensShowcase from '../../components/case-studies/SentinelUIScreensShowcase';

class GraphErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.warn('GraphErrorBoundary caught error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-[520px] rounded-[2.5rem] bg-[#0b0d14] flex flex-col items-center justify-center text-white p-8 text-center border border-white/10 select-none">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
            <Cpu size={24} />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Connected Agent Ecosystem</h3>
          <p className="text-sm text-neutral-400 max-w-md mb-6 leading-relaxed">
            An AI agent connects to Identity, Permissions, Policies, Data Sources, Applications, Activity, Risk, Approvals, and Audit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl">
            {['Identity', 'Permissions', 'Policies', 'Data Sources', 'Applications', 'Activity Stream', 'Risk Engine', 'Human Approvals', 'Audit Trail'].map((item) => (
              <span key={item} className="px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono text-neutral-200 border border-white/10">
                {item}
              </span>
            ))}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

/**
 * SentinelAICaseStudy
 * Complete Editorial Redesign:
 * Apple editorial storytelling + premium product design portfolio + sophisticated enterprise product thinking.
 * 
 * Strict Copy Rule: Zero em dashes or en dashes in visible text.
 */
export default function SentinelAICaseStudy({ onBackToProjects, onNavigateCaseStudy }) {
  const [activeNav, setActiveNav] = useState('context');
  const [activeJourneyStep, setActiveJourneyStep] = useState(0);
  const [activeAutonomyTier, setActiveAutonomyTier] = useState(2); // Default to Approval level
  const [techDepthExpanded, setTechDepthExpanded] = useState(false);
  const [hoveredArchLayer, setHoveredArchLayer] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [docketStatus, setDocketStatus] = useState('pending'); // 'pending' | 'approved' | 'rejected'

  // 10 Story chapters for sticky sub-navigation
  const chapters = [
    { id: 'context', label: '01 The Shift' },
    { id: 'problem', label: '02 The Problem' },
    { id: 'research', label: '03 User Research' },
    { id: 'model', label: '04 Product Model' },
    { id: 'autonomy', label: '05 Autonomy' },
    { id: 'journey', label: '06 User Journey' },
    { id: 'decisions', label: '07 Decisions UX' },
    { id: 'architecture', label: '08 Architecture' },
    { id: 'validation', label: '09 Validation' },
    { id: 'reflection', label: '10 Reflection' }
  ];

  // Dynamic scroll spy & reading progress listener
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
      const offset = 105;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Journey steps data for interactive walkthrough
  const journeySteps = [
    {
      step: '01',
      title: 'Agent Requests Action',
      system: 'Financial Analysis Agent',
      action: 'Requesting access to customer transaction records in Salesforce.',
      detail: 'The agent initiates a database query to reconcile suspicious transaction #8912.'
    },
    {
      step: '02',
      title: 'Identity Check',
      system: 'Identity Service',
      action: 'Verifying agent cryptographic signature and team ownership.',
      detail: 'Confirmed: Owned by Finance Team, deployed in production cluster v2.4.'
    },
    {
      step: '03',
      title: 'Permission Check',
      system: 'Capability Engine',
      action: 'Auditing tool capabilities against database access scopes.',
      detail: 'Agent has read privileges on analytics, but writes require elevated credentials.'
    },
    {
      step: '04',
      title: 'Policy Evaluation',
      system: 'Policy Gateway',
      action: 'Evaluating transaction payload against company security rules.',
      detail: 'Rule POL-FIN-04 triggered: Any transaction access above $10,000 mandates human review.'
    },
    {
      step: '05',
      title: 'Risk Assessment',
      system: 'Risk Engine',
      action: 'Computing dynamic risk based on impact, exposure, and autonomy.',
      detail: 'Calculated Risk: High. High customer financial exposure triggers human intercept.'
    },
    {
      step: '06',
      title: 'Human Review Decision',
      system: 'Approval Docket',
      action: 'Presenting reviewer with complete decision context instead of a binary popup.',
      detail: 'Reviewer inspects What, Why, Target Data, Policy Rule, and 12 past precedents before approving.'
    },
    {
      step: '07',
      title: 'Execution & Signed Audit',
      system: 'Event Store',
      action: 'Issuing single-use token and logging immutable cryptographic hash.',
      detail: 'Action successfully committed to target API. Trace stored for SOC2 compliance.'
    }
  ];

  // 4 Autonomy tiers
  const autonomyTiers = [
    {
      tier: '01',
      name: 'OBSERVE',
      summary: 'AI can see but cannot act.',
      badge: 'Read Only',
      desc: 'Passive read-only telemetry. The agent gathers context and builds internal representations with zero risk of unauthorized external mutation.',
      scope: 'Telemetry and metrics only',
      riskProfile: 'Zero risk of mutation'
    },
    {
      tier: '02',
      name: 'ADVISE',
      summary: 'AI recommends an action.',
      badge: 'Recommend',
      desc: 'Action proposals generated for human review. The agent drafts transactions or configuration updates, but a human must manually trigger execution.',
      scope: 'Proposals routed to queue',
      riskProfile: 'Low risk with human gating'
    },
    {
      tier: '03',
      name: 'APPROVAL',
      summary: 'AI prepares the action and asks a human.',
      badge: 'Act with Approval',
      desc: 'Runtime intercept creates a contextual docket. Explicit sign-off with single-use cryptographic token is required prior to database mutation.',
      scope: 'Contextual review docket',
      riskProfile: 'High-risk gatekeeper threshold'
    },
    {
      tier: '04',
      name: 'AUTONOMOUS',
      summary: 'AI performs the action independently.',
      badge: 'Defined Boundaries',
      desc: 'Pre-authorized operational routines bounded by real-time circuit breakers. Any violation of rate limits or anomaly thresholds instantly halts execution.',
      scope: 'Automatic runtime execution',
      riskProfile: 'Bounded autonomy with kill switch'
    }
  ];

  return (
    <article className="w-full min-h-screen bg-[#fbfbfd] text-[#1d1d1f] pb-48 selection:bg-black selection:text-white">
      {/* 1. Unified Sticky Header & Chapter Navigation */}
      <header className="sticky top-0 z-50 w-full bg-[#fbfbfd]/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
        {/* Row 1: Global Navigation & Project Info */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
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
              IN-HOUSE PROJECT / TRANSORG ANALYTICS
            </span>
            <span className="font-semibold text-[#141416]">Sentinel AI</span>
            <span className="text-black/30">/</span>
            <span>A Control Center for AI Agents</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider">Role</div>
              <div className="text-xs font-semibold text-[#141416]">Product Designer</div>
            </div>
            <div className="h-6 w-px bg-black/[0.08] hidden sm:block" />
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider">Timeline</div>
              <div className="text-xs font-semibold text-[#141416]">2025 · Production</div>
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

          {/* Subtle Reading Scroll Progress Bar */}
          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-150 pointer-events-none"
            style={{ width: `${scrollProgress}%` }}
          />
        </nav>
      </header>

      {/* Main Editorial Case Study Container */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-16 md:pt-24 flex flex-col gap-32 md:gap-44">

        {/* CHAPTER 01: HERO & THE SHIFT */}
        <section id="context" className="flex flex-col gap-20 md:gap-28 scroll-mt-32">
          
          {/* Editorial Hero Header */}
          <div className="flex flex-col gap-8 max-w-5xl">
            {/* Step 1: Small metadata */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <span className="px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono font-semibold tracking-wider uppercase">
                IN-HOUSE PROJECT / TRANSORG ANALYTICS
              </span>
              <span className="text-xs font-mono text-[#86868b]">
                Enterprise Governance and Observability
              </span>
            </motion.div>

            {/* Step 2: Hero Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-semibold text-[#111113] tracking-[-0.04em] leading-[0.98]"
            >
              A control center<br className="hidden sm:inline" /> for AI agents.
            </motion.h1>

            {/* Step 3: Supporting Copy */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl md:text-2xl text-[#55555c] font-normal leading-[1.6] max-w-[760px]"
            >
              As AI systems move from answering questions to taking actions, enterprises need a clearer way to understand what those agents can access, what they are doing and when humans need to step in.
            </motion.p>

            {/* Metadata Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-[#55555c]"
            >
              <span className="px-3 py-1 rounded-full bg-black/[0.04] text-[#222226] border border-black/[0.06]">
                Role: Product Designer
              </span>
              <span className="px-3 py-1 rounded-full bg-black/[0.04] text-[#222226] border border-black/[0.06]">
                Focus: Product Strategy, Systems UX, Enterprise AI
              </span>
              <span className="px-3 py-1 rounded-full bg-black/[0.04] text-[#222226] border border-black/[0.06]">
                Timeline: 2025
              </span>
            </motion.div>
          </div>

          {/* HERO VISUAL: Architectural Sentinel Control Plane */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 md:p-16 rounded-[2.5rem] bg-[#0c101b] text-white border border-white/10 shadow-2xl flex flex-col items-center gap-12 relative overflow-hidden"
          >
            {/* Top Subhead */}
            <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-neutral-300 font-mono text-xs tracking-wider uppercase">
              <Cpu size={14} className="text-blue-400" />
              <span>SENTINEL AI CONTROL PLANE</span>
            </div>

            {/* Visual Architecture Tree */}
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              {/* Branch 1: Agents */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-start gap-2.5 transition-colors hover:border-blue-400/40">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">01 AGENTS</span>
                <span className="text-base font-semibold text-white">Permissions and Scopes</span>
                <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                  Tool access boundaries, API keys, and credential scopes managed as distinct entities.
                </p>
              </div>

              {/* Branch 2: Policies */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-start gap-2.5 transition-colors hover:border-emerald-400/40">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">02 POLICIES</span>
                <span className="text-base font-semibold text-white">Rules and Thresholds</span>
                <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                  Operational guardrails, transactional caps, and automatic circuit breakers.
                </p>
              </div>

              {/* Branch 3: Activity */}
              <div className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col items-start gap-2.5 transition-colors hover:border-amber-400/40">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">03 ACTIVITY</span>
                <span className="text-base font-semibold text-white">Actions and Observability</span>
                <p className="text-xs text-neutral-400 font-mono leading-relaxed">
                  Event streams transformed into explainable narratives for incident response.
                </p>
              </div>
            </div>

            {/* Convergence to Human Oversight */}
            <div className="flex flex-col items-center gap-3 w-full max-w-md pt-2">
              <span className="text-xs font-mono text-neutral-400 tracking-wider">
                CONVERGES INTO HUMAN DECISION DOCKETS
              </span>
              <div className="w-full p-4 rounded-2xl bg-blue-600/20 border border-blue-400/30 text-center flex items-center justify-center gap-3 text-white">
                <ShieldCheck size={18} className="text-blue-300 shrink-0" />
                <span className="font-display font-semibold text-sm tracking-wide">
                  HUMAN CONTROL AND INTERVENTION
                </span>
              </div>
            </div>
          </motion.div>

          {/* THE SHIFT: Horizontal Story Progression */}
          <div className="flex flex-col gap-10 pt-8 border-t border-black/[0.06]">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
                01 THE SHIFT
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#111113] tracking-[-0.03em] leading-tight">
                AI is moving from answering to acting.
              </h2>
              <p className="text-base sm:text-lg text-[#55555c] max-w-[720px] leading-relaxed">
                The more independently an AI system can act, the more important it becomes to understand and control those actions.
              </p>
            </div>

            {/* Continuous 4-Step Narrative Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {[
                { stage: '01', title: 'CHATBOT', role: 'Answers questions', desc: 'Passive text generation inside a browser dialog. Zero external side-effects.' },
                { stage: '02', title: 'COPILOT', role: 'Suggests actions', desc: 'Inline code or text recommendations requiring direct human execution.' },
                { stage: '03', title: 'AI AGENT', role: 'Takes actions', desc: 'Autonomous tool execution, database updates, and external API calls.' },
                { stage: '04', title: 'ENTERPRISE CONTROL', role: 'Needs visibility and safety', desc: 'Centralized governance, runtime guardrails, and cryptographic auditability.' }
              ].map((item, idx) => (
                <motion.div 
                  key={item.stage}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col gap-3 pt-4 border-t-2 border-black/[0.08]"
                >
                  <div className="flex items-center justify-between text-xs font-mono text-[#86868b]">
                    <span>STAGE {item.stage}</span>
                    {idx < 3 && <span>→</span>}
                  </div>
                  <h3 className="text-xl font-semibold text-[#141416] tracking-tight">{item.title}</h3>
                  <span className="text-xs font-mono font-semibold text-blue-700">{item.role}</span>
                  <p className="text-sm text-[#55555c] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CHAPTER 02: THE PROBLEM */}
        <section id="problem" className="flex flex-col gap-16 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              02 THE PROBLEM
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
              The problem wasn't AI capability.<br />It was AI accountability.
            </h2>
          </div>

          {/* Visual Anchor: Large Number Graphic */}
          <div className="flex flex-col gap-8">
            <div className="flex items-baseline gap-4">
              <span className="font-display font-bold text-6xl sm:text-7xl md:text-8xl text-black/[0.08] select-none">
                05
              </span>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-semibold text-[#141416] tracking-tight">
                  Connected governance challenges
                </span>
                <span className="text-sm text-[#86868b] font-mono">
                  Why existing IAM and APM dashboards fail for autonomous agents
                </span>
              </div>
            </div>

            {/* Asymmetrical Clean Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 pt-6 border-t border-black/[0.06]">
              {[
                { title: 'IDENTITY', question: 'Who is this agent?', desc: 'Attributing actions to a specific model version, team owner, and business unit.' },
                { title: 'ACCESS', question: 'What can it access?', desc: 'Auditing credentials, sensitive customer tables, and write privileges.' },
                { title: 'POLICY', question: 'What rules apply?', desc: 'Defining operational boundaries, transaction thresholds, and security limits.' },
                { title: 'AUTONOMY', question: 'How independently can it act?', desc: 'Establishing whether the agent observes, recommends, or executes on its own.' },
                { title: 'ACCOUNTABILITY', question: 'Can we understand what happened later?', desc: 'Reconstructing reasoning and tool calls when an unexpected action occurs.' }
              ].map((item) => (
                <div key={item.title} className="flex flex-col gap-2.5">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
                    {item.title}
                  </span>
                  <h3 className="text-base font-semibold text-[#141416] leading-snug">
                    {item.question}
                  </h3>
                  <p className="text-sm text-[#55555c] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Connected Equation Flow */}
          <div className="p-6 sm:p-8 rounded-3xl bg-black/[0.02] border border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono">
            <div className="flex flex-wrap items-center justify-center gap-2.5 text-[#333338]">
              <span className="font-semibold px-2.5 py-1 bg-white rounded-md border border-black/[0.08]">Identity</span>
              <span className="text-blue-600 font-bold">+</span>
              <span className="font-semibold px-2.5 py-1 bg-white rounded-md border border-black/[0.08]">Access</span>
              <span className="text-blue-600 font-bold">+</span>
              <span className="font-semibold px-2.5 py-1 bg-white rounded-md border border-black/[0.08]">Policy</span>
              <span className="text-blue-600 font-bold">+</span>
              <span className="font-semibold px-2.5 py-1 bg-white rounded-md border border-black/[0.08]">Autonomy</span>
              <span className="text-blue-600 font-bold">+</span>
              <span className="font-semibold px-2.5 py-1 bg-white rounded-md border border-black/[0.08]">Activity</span>
            </div>
            <div className="flex items-center gap-3 text-blue-700 font-semibold shrink-0">
              <span className="text-lg">→</span>
              <span className="px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-200">The Governance Problem</span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-[#55555c] max-w-[760px] leading-relaxed">
            When an enterprise operates dozens of agents across customer service, finance, and engineering, these concerns become impossible to manage through static IAM roles or fragmented server logs.
          </p>
        </section>

        {/* CHAPTER 03: USER RESEARCH & OPERATOR INSIGHTS */}
        <section id="research" className="flex flex-col gap-16 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              03 USER & RESEARCH
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
              Designing for the person responsible for safe scaling.
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] max-w-[760px] leading-relaxed">
              Understanding the operator navigating autonomous systems and distilling field insights from enterprise AI infrastructure teams.
            </p>
          </div>

          {/* Editorial Persona Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Maya Sharma Profile */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white font-bold flex items-center justify-center font-display text-2xl shadow-lg shadow-blue-500/20">
                MS
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-[#141416] tracking-tight">Maya Sharma</h3>
                <span className="text-sm font-mono text-blue-700 font-semibold">AI Platform Lead</span>
              </div>
              <p className="text-base text-[#55555c] leading-relaxed pt-2 border-t border-black/[0.06]">
                Responsible for enterprise AI infrastructure and ensuring autonomous agents deploy and operate safely across production.
              </p>
              
              <div className="pt-4 flex flex-col gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">Secondary Stakeholders</span>
                <p className="text-xs text-[#55555c] leading-relaxed">
                  Security & Risk (Zero-trust policy enforcement), Product Managers (Deployment velocity), Engineering Teams (Tool execution).
                </p>
              </div>
            </div>

            {/* Right Column: Her 5 Core Operational Questions */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
                HER CORE OPERATIONAL INQUIRIES
              </span>

              <div className="flex flex-col gap-3 text-sm sm:text-base font-mono">
                {[
                  'What agents are running across our systems?',
                  'What databases and APIs can each agent access?',
                  'Which agents currently require human attention?',
                  'Why did this agent take this specific action?',
                  'Can I trust this system enough to give it more autonomy?'
                ].map((q, idx) => (
                  <div key={q} className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.05] flex items-start gap-3">
                    <span className="text-blue-600 font-bold shrink-0">0{idx + 1}</span>
                    <span className="text-[#141416] font-medium leading-relaxed font-sans">"{q}"</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Architecture Goal: Moving from Uncertainty to Action */}
          <div className="flex flex-col gap-6 pt-8 border-t border-black/[0.06]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
              EXPERIENCE ARCHITECTURE GOAL
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#141416] tracking-tight">
              The user should be able to move from uncertainty to action.
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-2">
              {[
                { stage: 'DISCOVER', prompt: 'What is happening?' },
                { stage: 'UNDERSTAND', prompt: 'Why is it happening?' },
                { stage: 'VERIFY', prompt: 'Is it allowed?' },
                { stage: 'DECIDE', prompt: 'What should I do?' },
                { stage: 'INVESTIGATE', prompt: 'What happened before?' },
                { stage: 'AUDIT', prompt: 'Can I prove what happened?' }
              ].map((item, idx) => (
                <div key={item.stage} className="flex flex-col gap-2 pt-3 border-t-2 border-black/[0.08]">
                  <span className="text-xs font-mono font-bold text-blue-600">0{idx + 1} {item.stage}</span>
                  <span className="text-sm font-medium text-[#141416] leading-snug">"{item.prompt}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Core Research Insights & Field Findings */}
          <div className="flex flex-col gap-8 pt-8 border-t border-black/[0.06]">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
                FIELD RESEARCH FINDINGS
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#141416] tracking-tight">
                Five core insights from platform teams.
              </h3>
            </div>

            {/* 5 Numbered Findings */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { num: '01', title: 'Visibility', desc: 'Teams need a continuous picture of what agents are doing in real time.' },
                { num: '02', title: 'Least Privilege', desc: 'Agents should only receive the minimum API and data access required.' },
                { num: '03', title: 'Explainability', desc: 'People need complete decision context before approving sensitive tool actions.' },
                { num: '04', title: 'Auditability', desc: 'Every high-impact action requires an immutable, traceable history.' },
                { num: '05', title: 'Human Oversight', desc: 'Unusual or high-impact actions mandate reliable human intervention.' }
              ].map((f) => (
                <div key={f.num} className="flex flex-col gap-2 pt-4 border-t-2 border-black/[0.08]">
                  <span className="text-xs font-mono font-bold text-blue-600">{f.num}</span>
                  <h3 className="text-lg font-semibold text-[#141416] tracking-tight">{f.title}</h3>
                  <p className="text-sm text-[#55555c] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Finding to Implication Transitions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-blue-50/50 border border-blue-200/60 font-mono text-xs">
                <span className="text-blue-700 font-bold uppercase">RESEARCH FINDING</span>
                <span className="text-[#141416] font-semibold text-sm font-sans">Agents are becoming more autonomous.</span>
                <span className="text-blue-600 font-bold pt-2">↓ DESIGN IMPLICATION</span>
                <span className="text-blue-950 font-bold text-sm font-sans">Autonomy must become a controllable product dimension.</span>
              </div>

              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-blue-50/50 border border-blue-200/60 font-mono text-xs">
                <span className="text-blue-700 font-bold uppercase">RESEARCH FINDING</span>
                <span className="text-[#141416] font-semibold text-sm font-sans">Scattered logs create operational blind spots.</span>
                <span className="text-blue-600 font-bold pt-2">↓ DESIGN IMPLICATION</span>
                <span className="text-blue-950 font-bold text-sm font-sans">Activity must be structured into chronological narratives.</span>
              </div>

              <div className="flex flex-col gap-2 p-6 rounded-2xl bg-blue-50/50 border border-blue-200/60 font-mono text-xs">
                <span className="text-blue-700 font-bold uppercase">RESEARCH FINDING</span>
                <span className="text-[#141416] font-semibold text-sm font-sans">Over-privileged scopes cause security leaks.</span>
                <span className="text-blue-600 font-bold pt-2">↓ DESIGN IMPLICATION</span>
                <span className="text-blue-950 font-bold text-sm font-sans">Access must be bounded to specific business capabilities.</span>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 04: THE PRODUCT MODEL & KEY DECISION */}
        <section id="model" className="flex flex-col gap-20 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          
          {/* Section 04A: Product Hypothesis Statement */}
          <div className="flex flex-col gap-6 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              04 PRODUCT DIRECTION
            </span>
            <p className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#1d1d1f] leading-[1.3] tracking-[-0.02em] py-6 border-y border-black/[0.08]">
              "If enterprise teams had one place to understand their AI agents, control permissions and policies, monitor activity and intervene when risk increases, they could manage autonomous AI with greater visibility and confidence."
            </p>
          </div>

          {/* Section 05B: The Core Product Decision */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4 max-w-4xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                CORE PRODUCT DECISION
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
                I made the agent the center of the product.
              </h2>
              <p className="text-lg sm:text-xl text-[#55555c] max-w-[760px] leading-relaxed">
                Instead of organizing the product around technical cloud infrastructure or generic tables, I organized it around the entity users actually need to manage: the AI agent.
              </p>
            </div>

            {/* Central Agent Relationship Diagram */}
            <div className="p-10 sm:p-14 rounded-[2.5rem] bg-white border border-black/[0.08] shadow-sm flex flex-col items-center gap-8">
              {/* Identity Node */}
              <div className="px-6 py-2.5 rounded-full bg-black/[0.03] border border-black/[0.08] text-xs font-mono font-bold text-[#141416]">
                IDENTITY (Owner, Team & Model Version)
              </div>
              <ArrowDown size={18} className="text-black/30" />

              {/* Central Agent Node with Left/Right Radiating Connectors */}
              <div className="flex flex-col sm:flex-row items-center gap-6 w-full max-w-3xl justify-center">
                <div className="px-5 py-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 font-mono text-xs font-bold text-center">
                  ← PERMISSIONS<br />
                  <span className="text-[11px] font-normal text-[#55555c]">Capability Scopes</span>
                </div>

                <div className="px-10 py-6 rounded-3xl bg-[#111115] text-white font-display font-semibold text-lg text-center shadow-xl">
                  AI AGENT<br />
                  <span className="text-xs font-mono text-neutral-400 font-normal">Primary Product Entity</span>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-mono text-xs font-bold text-center">
                  POLICIES →<br />
                  <span className="text-[11px] font-normal text-[#55555c]">Rules & Limits</span>
                </div>
              </div>

              <ArrowDown size={18} className="text-black/30" />

              {/* Subordinate Execution Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl text-center text-xs font-mono">
                <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.06] text-[#222226]">
                  ACTIVITY<br />
                  <span className="text-[11px] text-[#86868b]">Event stream</span>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-amber-900 font-semibold">
                  RISK ENGINE<br />
                  <span className="text-[11px] text-amber-700">Sensitivity score</span>
                </div>
                <div className="p-4 rounded-2xl bg-black/[0.02] border border-black/[0.06] text-[#222226]">
                  APPROVALS<br />
                  <span className="text-[11px] text-[#86868b]">Review queue</span>
                </div>
              </div>

              <ArrowDown size={18} className="text-black/30" />

              <div className="px-6 py-2.5 rounded-full bg-black/[0.03] border border-black/[0.08] text-xs font-mono font-bold text-[#141416]">
                AUDIT ARCHIVE (Cryptographically Signed Evidence)
              </div>
            </div>

            {/* Tangible Schema: Financial Analysis Agent in Practice */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#f4f4f7]/70 border border-black/[0.06] flex flex-col md:flex-row justify-between gap-8 items-start">
              <div className="flex flex-col gap-2 max-w-md">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                  PRODUCT MODEL IN PRACTICE
                </span>
                <h3 className="text-2xl font-semibold text-[#141416] tracking-tight">
                  Financial Analysis Agent
                </h3>
                <p className="text-sm text-[#55555c] leading-relaxed">
                  Before designing UI screens, I established the concrete schema for how an autonomous agent is represented and bounded across its entire lifecycle.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs font-mono w-full md:max-w-md">
                <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] flex flex-col">
                  <span className="text-[10px] text-[#86868b] uppercase">PURPOSE</span>
                  <span className="font-semibold text-[#141416] mt-1">Analyze ledger anomalies</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] flex flex-col">
                  <span className="text-[10px] text-[#86868b] uppercase">OWNER</span>
                  <span className="font-semibold text-[#141416] mt-1">Finance Operations</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-black/[0.06] flex flex-col">
                  <span className="text-[10px] text-[#86868b] uppercase">ACCESS</span>
                  <span className="font-semibold text-[#141416] mt-1">Financial DB, Salesforce API</span>
                </div>
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 flex flex-col">
                  <span className="text-[10px] text-amber-800 uppercase">AUTONOMY TIER</span>
                  <span className="font-semibold text-amber-900 mt-1">Act with Approval (High Risk)</span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE AGENT ECOSYSTEM (Signature 3D Experience) */}
            <div className="flex flex-col gap-10 pt-16 border-t border-black/[0.08]">
              <div className="flex flex-col gap-4 max-w-4xl">
                <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
                  05 / AGENT ECOSYSTEM
                </span>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
                  An agent is never just an agent.
                </h2>
                <p className="text-lg sm:text-xl text-[#55555c] max-w-[760px] leading-relaxed">
                  Its identity, permissions, policies, data and actions are connected. Sentinel brings those relationships into one view so teams can understand what an agent can do, what it is doing and where human control is required.
                </p>
              </div>

              {/* Interactive Agent Ecosystem Graph with Fail-Safe Error Boundary */}
              <GraphErrorBoundary>
                <AgentEcosystemGraph3D />
              </GraphErrorBoundary>

              {/* Post-Interaction Storytelling Conclusion */}
              <div className="flex flex-col gap-2 pt-4">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#111113] tracking-tight">
                  Everything is connected.
                </h3>
                <p className="text-base sm:text-lg text-[#55555c] max-w-[760px] leading-relaxed">
                  The agent is the center of the system, but control comes from the relationships around it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 05: AUTONOMY MODEL */}
        <section id="autonomy" className="flex flex-col gap-16 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              05 AUTONOMY GOVERNANCE FRAMEWORK
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
              Not every AI action needs the same level of control.
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] max-w-[760px] leading-relaxed">
              Autonomy cannot be a binary toggle. Organizations need to calibrate independence based on transaction sensitivity, financial exposure, and risk blast radius.
            </p>
          </div>

          {/* Large Interactive Horizontal Progression */}
          <div className="flex flex-col gap-6">
            {/* Informational Interactive Guidance Banner */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-blue-950 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span className="text-xs sm:text-sm font-mono font-semibold">
                  Interactive Framework: Click any tier card below to inspect governance boundaries
                </span>
              </div>
              <span className="text-xs font-mono text-blue-700 bg-blue-100/70 px-2.5 py-1 rounded-full font-semibold">
                Viewing Tier {autonomyTiers[activeAutonomyTier].tier}: {autonomyTiers[activeAutonomyTier].name}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {autonomyTiers.map((tier, idx) => {
                const isSelected = activeAutonomyTier === idx;
                return (
                  <button
                    key={tier.tier}
                    onClick={() => setActiveAutonomyTier(idx)}
                    className={`group cursor-pointer p-5 rounded-2xl text-left flex flex-col justify-between gap-3.5 transition-all duration-200 border ${
                      isSelected
                        ? 'bg-[#111115] text-white border-[#111115] shadow-xl ring-2 ring-blue-500/40 -translate-y-1'
                        : 'bg-white text-[#222226] border-black/[0.08] hover:border-blue-400 hover:shadow-md hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-xs font-mono font-bold ${isSelected ? 'text-blue-400' : 'text-blue-600'}`}>
                        TIER {tier.tier}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/10 text-neutral-200' : 'bg-black/[0.04] text-[#55555c]'}`}>
                        {tier.badge}
                      </span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="font-display font-bold text-lg tracking-tight">
                        {tier.name}
                      </span>
                      <span className={`text-xs leading-snug ${isSelected ? 'text-neutral-300' : 'text-[#66666e]'}`}>
                        {tier.summary}
                      </span>
                    </div>

                    {/* Explicit Interactive Call-to-Action Affordance */}
                    <div className={`pt-2.5 border-t flex items-center justify-between w-full text-[11px] font-mono ${
                      isSelected
                        ? 'border-white/15 text-blue-300'
                        : 'border-black/[0.06] text-[#86868b] group-hover:text-blue-600'
                    }`}>
                      <span className="flex items-center gap-1 font-semibold">
                        {isSelected ? (
                          <>
                            <CheckCircle2 size={12} className="text-blue-400" />
                            <span>Active Selection</span>
                          </>
                        ) : (
                          <>
                            <span>Click to inspect</span>
                            <ArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                      <span className="text-[10px] opacity-80">
                        {isSelected ? 'Selected' : 'Tap card'}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Tier Deep-Dive Scene */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-sm flex flex-col md:flex-row justify-between gap-8 items-start relative overflow-hidden">
              <div className="flex flex-col gap-2 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-600 uppercase">
                    ACTIVE GOVERNANCE TIER: LEVEL {autonomyTiers[activeAutonomyTier].tier}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="text-xs font-mono text-[#86868b]">
                    {autonomyTiers[activeAutonomyTier].badge}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-[#141416] tracking-tight">
                  {autonomyTiers[activeAutonomyTier].name}
                </h3>
                <p className="text-base text-[#55555c] leading-relaxed pt-1">
                  {autonomyTiers[activeAutonomyTier].desc}
                </p>
              </div>

              <div className="flex flex-col gap-3 font-mono text-xs w-full md:max-w-xs shrink-0">
                <div className="p-3.5 rounded-xl bg-black/[0.02] border border-black/[0.06] flex flex-col">
                  <span className="text-[10px] text-[#86868b] uppercase">OPERATIONAL SCOPE</span>
                  <span className="font-semibold text-[#141416] mt-1">{autonomyTiers[activeAutonomyTier].scope}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-950 flex flex-col">
                  <span className="text-[10px] text-blue-700 uppercase">RISK BEHAVIOR</span>
                  <span className="font-semibold mt-1">{autonomyTiers[activeAutonomyTier].riskProfile}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 06: CORE USER JOURNEY */}
        <section id="journey" className="flex flex-col gap-16 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              06 CORE USER JOURNEY
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
              The human-in-the-loop intervention flow.
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] max-w-[760px] leading-relaxed">
              When an autonomous agent initiates a sensitive transaction, Sentinel intercepts and routes the request through a structured verification pipeline.
            </p>
          </div>

          {/* Stepped Interactive Pipeline */}
          <div className="flex flex-col gap-6">
            {/* Informational Interactive Guidance Banner with Prev/Next Controls */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-blue-50/80 border border-blue-200/80 text-blue-950 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
                </span>
                <span className="text-xs sm:text-sm font-mono font-semibold">
                  Interactive Pipeline: Click on any step card below to trace the decision flow
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-blue-800">
                <button
                  onClick={() => setActiveJourneyStep((prev) => Math.max(0, prev - 1))}
                  disabled={activeJourneyStep === 0}
                  className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 hover:bg-blue-100/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Previous step"
                >
                  Prev
                </button>
                <span className="font-semibold px-1">
                  Step {activeJourneyStep + 1} of {journeySteps.length}
                </span>
                <button
                  onClick={() => setActiveJourneyStep((prev) => Math.min(journeySteps.length - 1, prev + 1))}
                  disabled={activeJourneyStep === journeySteps.length - 1}
                  className="px-2.5 py-1 rounded-lg bg-white border border-blue-200 text-blue-700 hover:bg-blue-100/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  aria-label="Next step"
                >
                  Next
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {journeySteps.map((step, idx) => {
                const isSelected = activeJourneyStep === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveJourneyStep(idx)}
                    className={`group cursor-pointer p-4 rounded-2xl text-left flex flex-col justify-between gap-2.5 transition-all duration-200 border ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-400/50 -translate-y-1'
                        : 'bg-white text-[#222226] border-black/[0.08] hover:border-blue-300 hover:shadow-sm hover:-translate-y-0.5'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-blue-100' : 'text-blue-600'}`}>
                        STEP {step.step}
                      </span>
                      {isSelected ? (
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      ) : (
                        <ChevronRight size={12} className="text-neutral-300 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                      )}
                    </div>
                    <span className="font-display font-semibold text-xs leading-snug">
                      {step.title}
                    </span>
                    <span className={`text-[10px] font-mono flex items-center gap-1 pt-1.5 border-t ${
                      isSelected
                        ? 'border-white/20 text-blue-200'
                        : 'border-black/[0.04] text-[#86868b] group-hover:text-blue-600'
                    }`}>
                      {isSelected ? (
                        <>
                          <Check size={10} /> Active
                        </>
                      ) : (
                        'Click to view'
                      )}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Detail Panel */}
            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200/60 flex flex-col md:flex-row items-start justify-between gap-6 relative">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                    STAGE {journeySteps[activeJourneyStep].step}: {journeySteps[activeJourneyStep].title}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-mono text-[#55555c]">
                    System: {journeySteps[activeJourneyStep].system}
                  </span>
                </div>
                <p className="text-base text-[#141416] font-medium leading-relaxed mt-2 font-sans">
                  {journeySteps[activeJourneyStep].action}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-blue-200 text-xs font-mono text-blue-950 max-w-sm shrink-0 shadow-xs flex flex-col gap-2">
                <span className="text-[10px] text-blue-600 uppercase font-semibold">STAGE DETAIL</span>
                <p>{journeySteps[activeJourneyStep].detail}</p>
                <div className="pt-2 border-t border-blue-100 flex items-center justify-between text-[10px] text-[#86868b]">
                  <span>Step {activeJourneyStep + 1} of {journeySteps.length}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setActiveJourneyStep((prev) => Math.max(0, prev - 1))}
                      disabled={activeJourneyStep === 0}
                      className="text-blue-700 font-semibold hover:underline disabled:opacity-30 disabled:no-underline"
                    >
                      Previous
                    </button>
                    <span>/</span>
                    <button
                      onClick={() => setActiveJourneyStep((prev) => Math.min(journeySteps.length - 1, prev + 1))}
                      disabled={activeJourneyStep === journeySteps.length - 1}
                      className="text-blue-700 font-semibold hover:underline disabled:opacity-30 disabled:no-underline"
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 07: THE INTERFACE, APPROVAL UX & DECISIONS */}
        <section id="decisions" className="flex flex-col gap-20 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              07 INTERFACE & DECISION DESIGN
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
              Designing for informed human decisions.
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] max-w-[760px] leading-relaxed">
              Enterprise AI governance requires dedicated surfaces tailored to different operational needs: fleet monitoring, risk-weighted intervention, policy authoring, and forensic accountability.
            </p>
          </div>

          {/* 4 Core UI Product Surfaces Showcase */}
          <SentinelUIScreensShowcase />

          {/* REALISTIC ENTERPRISE ACTION REVIEW DOCKET */}
          <div className="flex flex-col gap-4 pt-10 border-t border-black/[0.06]">
            <div className="flex flex-col gap-2 mb-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600">
                DEEP DIVE: INTERVENTION INTERFACE
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#111113] tracking-tight">
                Simulated Action Review Docket
              </h3>
              <p className="text-base text-[#55555c] max-w-2xl leading-relaxed">
                Experience how human reviewers inspect payload diffs and authorize or reject sensitive actions with a single cryptographic token.
              </p>
            </div>

            <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#111115] text-white border border-white/10 shadow-2xl flex flex-col gap-8">
              {/* Docket Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="font-display font-semibold text-lg sm:text-xl text-white">
                      Action Review Docket: Financial Analysis Agent
                    </span>
                    <span className="text-xs font-mono text-neutral-400">
                      ID: DKT-8912-FIN · Timestamp: 10:37:04 UTC
                    </span>
                  </div>
                </div>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/30">
                  Request: Access Sensitive Ledger Data
                </span>
              </div>

              {/* 5-Column Context Hierarchy */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] text-neutral-400 uppercase">WHY</span>
                  <span className="font-bold text-white mt-1">Investigate Transaction</span>
                  <span className="text-[11px] text-neutral-400">Suspicious anomaly #8912</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] text-neutral-400 uppercase">DATA TARGET</span>
                  <span className="font-bold text-white mt-1">Customer Profile</span>
                  <span className="text-[11px] text-neutral-400">Bank ledger records</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] text-neutral-400 uppercase">RULE TRIGGERED</span>
                  <span className="font-bold text-white mt-1">POL-FIN-04</span>
                  <span className="text-[11px] text-neutral-400">Sensitive financial write gate</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] text-neutral-400 uppercase">DYNAMIC RISK</span>
                  <span className="font-bold text-amber-300 mt-1">High (Score 80)</span>
                  <span className="text-[11px] text-neutral-400">Financial mutation blast radius</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/5 flex flex-col gap-1">
                  <span className="text-[10px] text-neutral-400 uppercase">HISTORY PRECEDENTS</span>
                  <span className="font-bold text-emerald-400 mt-1">12 Precedents</span>
                  <span className="text-[11px] text-neutral-400">Approved by Maya Sharma</span>
                </div>
              </div>

              {/* Action Controls & Confirmation */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-neutral-400">
                  {docketStatus === 'approved' 
                    ? 'Single-use cryptographic token minted. Action committed to target API.'
                    : docketStatus === 'rejected'
                    ? 'Action rejected. Process terminated and incident logged.'
                    : 'Single-use cryptographic execution token will be minted upon sign-off.'}
                </span>
                
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setDocketStatus('rejected')}
                    className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-colors ${
                      docketStatus === 'rejected' 
                        ? 'bg-red-500/20 text-red-300 border border-red-500/40' 
                        : 'bg-white/10 hover:bg-white/15 text-white'
                    }`}
                  >
                    Reject Action
                  </button>
                  <button 
                    onClick={() => setDocketStatus('approved')}
                    className={`px-6 py-2.5 rounded-xl font-mono text-xs font-semibold shadow-lg transition-colors ${
                      docketStatus === 'approved'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
                    }`}
                  >
                    {docketStatus === 'approved' ? 'Action Approved ✓' : 'Approve with Token'}
                  </button>
                </div>
              </div>
            </div>

            {/* Core Principle Quote */}
            <p className="text-base sm:text-lg font-medium text-center text-[#44444a] italic pt-4">
              "Don't ask for a decision without providing the context needed to make it."
            </p>
          </div>

          {/* EDITORIAL ACTIVITY & INVESTIGATION TIMELINE */}
          <div className="flex flex-col gap-8 pt-10 border-t border-black/[0.06]">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
                ACTIVITY & INVESTIGATION TIMELINE
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold text-[#111113] tracking-tight">
                What happened → Why → Policy → Decision
              </h3>
            </div>

            {/* Continuous Vertical Editorial Timeline */}
            <div className="flex flex-col relative pl-6 border-l-2 border-black/[0.08] ml-2 gap-8 pt-2">
              {[
                { time: '10:32', title: 'Agent started investigation', detail: 'Triggered by transaction anomaly webhook on financial cluster', status: 'normal' },
                { time: '10:33', title: 'Accessed transaction database', detail: 'Read query executed on replica read-only pool', status: 'normal' },
                { time: '10:35', title: 'Detected unusual transaction', detail: 'Identified mismatch in ledger reconciliation invoice #8912', status: 'normal' },
                { time: '10:36', title: 'Requested customer financial data', detail: 'Attempted to query sensitive PII customer balance table', status: 'warning' },
                { time: '10:36', title: 'Policy blocked request', detail: 'Rule POL-FIN-04 triggered and halted direct execution', status: 'critical' },
              ].map((item, idx) => (
                <div key={`${item.time}-${idx}`} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 relative">
                  {/* Timeline bullet dot */}
                  <span className={`absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-[#fbfbfd] ${
                    item.status === 'critical' ? 'bg-red-600' : item.status === 'action' ? 'bg-blue-600' : item.status === 'warning' ? 'bg-amber-500' : 'bg-black/30'
                  }`} />
                  
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-mono font-bold text-blue-600">{item.time} UTC</span>
                    <span className="text-base font-semibold text-[#141416]">{item.title}</span>
                  </div>
                  <span className="text-xs font-mono text-[#66666e] max-w-md">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PROGRESSIVE DISCLOSURE & BEFORE/AFTER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10 border-t border-black/[0.06]">
            {/* Progressive Disclosure Hierarchy */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600">
                UX PRINCIPLE: PROGRESSIVE DISCLOSURE
              </span>
              <h3 className="text-2xl font-semibold text-[#141416] tracking-tight">
                Revealing complexity only when needed.
              </h3>
              
              <div className="flex flex-col gap-2 font-mono text-xs pt-2">
                <div className="p-3 rounded-xl bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                  <span className="font-bold text-blue-700">LEVEL 01</span>
                  <span className="text-[#333338]">What needs attention? (Fleet overview)</span>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                  <span className="font-bold text-blue-700">LEVEL 02</span>
                  <span className="text-[#333338]">What happened? (Chronological timeline)</span>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                  <span className="font-bold text-blue-700">LEVEL 03</span>
                  <span className="text-[#333338]">Why did it happen? (Policy and reasoning)</span>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                  <span className="font-bold text-blue-700">LEVEL 04</span>
                  <span className="text-[#333338]">What should I do? (Action review docket)</span>
                </div>
                <div className="p-3 rounded-xl bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                  <span className="font-bold text-blue-700">LEVEL 05</span>
                  <span className="text-[#333338]">Show technical evidence (Signed audit hash)</span>
                </div>
              </div>
            </div>

            {/* Before vs After Design Decisions */}
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
                DESIGN EVOLUTION (BEFORE VS AFTER)
              </span>
              <h3 className="text-2xl font-semibold text-[#141416] tracking-tight">
                From technical logs to human clarity.
              </h3>

              <div className="flex flex-col gap-3 font-mono text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-white border border-black/[0.08] flex items-center justify-between">
                  <span className="text-neutral-500">Raw Console Logs</span>
                  <span className="text-blue-600 font-bold">→</span>
                  <span className="text-[#141416] font-bold font-sans">Activity Timeline</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-black/[0.08] flex items-center justify-between">
                  <span className="text-neutral-500">Technical OAuth Scopes</span>
                  <span className="text-blue-600 font-bold">→</span>
                  <span className="text-[#141416] font-bold font-sans">Business Capability Scopes</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-black/[0.08] flex items-center justify-between">
                  <span className="text-neutral-500">Binary Yes/No Modal</span>
                  <span className="text-blue-600 font-bold">→</span>
                  <span className="text-[#141416] font-bold font-sans">Contextual Review Docket</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white border border-black/[0.08] flex items-center justify-between">
                  <span className="text-neutral-500">20 Telemetry Graphs</span>
                  <span className="text-blue-600 font-bold">→</span>
                  <span className="text-[#141416] font-bold font-sans">Decision Focused Overview</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 08: TECHNICAL ARCHITECTURE & SYSTEMS */}
        <section id="architecture" className="flex flex-col gap-16 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              08 TECHNICAL SYSTEMS
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
              Technical architecture: connecting UX to backend services.
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] max-w-[760px] leading-relaxed">
              Demonstrating how the user experience directly maps to event buses, policy evaluation engines, and zero-trust security infrastructure.
            </p>
          </div>

          {/* Layered System Stack Visualization */}
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#0c101b] text-white border border-white/10 shadow-2xl flex flex-col gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400">
                SYSTEM ARCHITECTURE LAYERS
              </span>
              <span className="text-[11px] font-mono text-neutral-400">
                Hover a layer to view service boundaries
              </span>
            </div>

            <div className="flex flex-col gap-3 font-mono text-xs">
              {/* Layer 1: Client */}
              <div 
                onMouseEnter={() => setHoveredArchLayer('client')}
                onMouseLeave={() => setHoveredArchLayer(null)}
                className="p-4 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-between transition-colors hover:border-blue-400/50"
              >
                <span className="text-neutral-400 uppercase">CLIENT LAYER</span>
                <span className="font-bold text-white">USER & WEB CONSOLE</span>
                <span className="text-neutral-400">React · Tailwind · Dockets UI</span>
              </div>

              <div className="text-center text-blue-400/80 text-[11px]">↓ REST API Gateway & Authentication</div>

              {/* Layer 2: Core Services */}
              <div 
                onMouseEnter={() => setHoveredArchLayer('services')}
                onMouseLeave={() => setHoveredArchLayer(null)}
                className="p-6 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex flex-col gap-3 transition-colors hover:border-blue-400/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-300 font-bold uppercase">APPLICATION SERVICES</span>
                  <span className="text-[10px] text-blue-200">8 Distributed Microservices</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px]">
                  <span className="p-2 rounded bg-white/[0.06] border border-white/10">Agent Registry</span>
                  <span className="p-2 rounded bg-white/[0.06] border border-white/10">Policy Engine</span>
                  <span className="p-2 rounded bg-white/[0.06] border border-white/10">Identity Service</span>
                  <span className="p-2 rounded bg-white/[0.06] border border-white/10">Risk Engine</span>
                  <span className="p-2 rounded bg-white/[0.06] border border-white/10">Observability</span>
                  <span className="p-2 rounded bg-white/[0.06] border border-white/10">Approval Service</span>
                  <span className="p-2 rounded bg-white/[0.06] border border-white/10">Audit Service</span>
                  <span className="p-2 rounded bg-white/[0.06] border border-white/10">Notification</span>
                </div>
              </div>

              <div className="text-center text-blue-400/80 text-[11px]">↓ Kafka Event Streaming (Distributed Queue)</div>

              {/* Layer 3: Data */}
              <div 
                onMouseEnter={() => setHoveredArchLayer('data')}
                onMouseLeave={() => setHoveredArchLayer(null)}
                className="p-4 rounded-xl bg-white/[0.05] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 transition-colors hover:border-blue-400/50"
              >
                <span className="text-neutral-400 uppercase">DATA LAYER</span>
                <div className="flex flex-wrap items-center gap-2 text-[11px]">
                  <span className="px-2.5 py-1 rounded bg-white/10">PostgreSQL (Relational)</span>
                  <span className="px-2.5 py-1 rounded bg-white/10">TimescaleDB (Time-series)</span>
                  <span className="px-2.5 py-1 rounded bg-white/10">Redis (Policy Cache)</span>
                  <span className="px-2.5 py-1 rounded bg-white/10">S3 / Object Store</span>
                </div>
              </div>

              <div className="text-center text-blue-400/80 text-[11px]">↓ Gateway Interceptors & Agent Tool Connectors</div>

              {/* Layer 4: External */}
              <div 
                onMouseEnter={() => setHoveredArchLayer('external')}
                onMouseLeave={() => setHoveredArchLayer(null)}
                className="p-4 rounded-xl bg-white/[0.05] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] transition-colors hover:border-blue-400/50"
              >
                <span className="text-neutral-400 uppercase">EXTERNAL TARGETS</span>
                <span className="text-neutral-200">LLM Providers, Enterprise IAM, SQL Databases, Salesforce, Internal APIs</span>
              </div>
            </div>

            {/* Hover Explainer */}
            <div className="text-xs text-neutral-400 pt-2 border-t border-white/10 font-mono">
              {hoveredArchLayer === 'client' && 'Client Layer: Provides the human reviewer with progressive disclosure and instant token sign-off.'}
              {hoveredArchLayer === 'services' && 'Application Services: Stateless services evaluate rules, compute risks, and generate cryptographic tokens.'}
              {hoveredArchLayer === 'data' && 'Data Layer: Dual-write strategy stores transactional state in SQL and telemetry in append-only time-series tables.'}
              {hoveredArchLayer === 'external' && 'External Targets: Guardrail interceptors sit in front of third-party tools to prevent rogue writes.'}
              {!hoveredArchLayer && 'Separates the user experience from the control services that govern identity, policies, and auditability.'}
            </div>
          </div>

          {/* Expandable Technical Depth Drawer */}
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setTechDepthExpanded(!techDepthExpanded)}
              className="flex items-center justify-between p-6 rounded-2xl bg-white border border-black/[0.08] hover:border-black/20 transition-all font-mono text-xs sm:text-sm font-semibold text-[#141416]"
            >
              <span>{techDepthExpanded ? '[-] Hide Technical Deep Dive' : '[+] Explore Technical Depth: REST API Contracts & Data Model'}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${techDepthExpanded ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {techDepthExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                    {/* REST API Contracts */}
                    <div className="p-6 rounded-2xl bg-white border border-black/[0.08] flex flex-col gap-4 font-mono text-xs">
                      <span className="font-bold text-blue-600 uppercase tracking-wider">REST API CONTRACTS</span>
                      <div className="flex flex-col gap-2">
                        <div className="p-2.5 rounded bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                          <span className="text-emerald-700 font-bold">GET</span>
                          <span className="text-[#141416]">/v1/agents</span>
                          <span className="text-[#86868b] text-[10px]">Fleet list & status</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                          <span className="text-emerald-700 font-bold">GET</span>
                          <span className="text-[#141416]">/v1/agents/:id/activity</span>
                          <span className="text-[#86868b] text-[10px]">Chronological stream</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                          <span className="text-blue-700 font-bold">POST</span>
                          <span className="text-[#141416]">/v1/policies</span>
                          <span className="text-[#86868b] text-[10px]">Deploy rule definition</span>
                        </div>
                        <div className="p-2.5 rounded bg-black/[0.02] border border-black/[0.04] flex items-center justify-between">
                          <span className="text-purple-700 font-bold">POST</span>
                          <span className="text-[#141416]">/v1/approvals/sign</span>
                          <span className="text-[#86868b] text-[10px]">Mint single-use token</span>
                        </div>
                      </div>
                    </div>

                    {/* Conceptual Relational Data Schema */}
                    <div className="p-6 rounded-2xl bg-white border border-black/[0.08] flex flex-col gap-4 font-mono text-xs">
                      <span className="font-bold text-blue-600 uppercase tracking-wider">RELATIONAL SCHEMA ENTITIES</span>
                      <div className="flex flex-col gap-2">
                        <div className="p-2.5 rounded bg-black/[0.02] border border-black/[0.04]">
                          <span className="font-bold text-[#141416]">Entity: Agent</span> (id, model_version, team_id, autonomy_tier, status)
                        </div>
                        <div className="p-2.5 rounded bg-black/[0.02] border border-black/[0.04]">
                          <span className="font-bold text-[#141416]">Entity: Policy</span> (id, rule_logic, target_scope, risk_threshold, action)
                        </div>
                        <div className="p-2.5 rounded bg-black/[0.02] border border-black/[0.04]">
                          <span className="font-bold text-[#141416]">Entity: ActivityTrace</span> (id, agent_id, tool_call, status, audit_hash)
                        </div>
                        <div className="p-2.5 rounded bg-black/[0.02] border border-black/[0.04]">
                          <span className="font-bold text-[#141416]">Entity: ApprovalToken</span> (id, docket_id, reviewer_id, token_hash, expires_at)
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CONCEPTUAL RISK FRAMEWORK & SECURITY */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-black/[0.06]">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
                CONCEPTUAL RISK FRAMEWORK
              </span>
              <h3 className="text-xl font-semibold text-[#141416] tracking-tight">
                Impact × Exposure × Autonomy → Risk Score
              </h3>
              <p className="text-sm text-[#55555c] leading-relaxed">
                Dynamic risk is calculated by multiplying system impact (read vs write), data exposure sensitivity (PII vs telemetry), and autonomy level to determine whether human review is mandated.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
                ZERO-TRUST SECURITY MODEL
              </span>
              <h3 className="text-xl font-semibold text-[#141416] tracking-tight">
                Security as an architectural layer
              </h3>
              <p className="text-sm text-[#55555c] leading-relaxed">
                Every agent request is authenticated via signed tokens, authorized against least-privilege capability boundaries, and immutably stored in the audit archive for SOC2 compliance.
              </p>
            </div>
          </div>
        </section>

        {/* CHAPTER 09: VALIDATION PLAN */}
        <section id="validation" className="flex flex-col gap-16 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              09 VALIDATION PLAN
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
              How I would measure success.
            </h2>
            <p className="text-base sm:text-lg text-[#55555c] max-w-[760px] leading-relaxed">
              Evaluating the design through both pre-launch prototype usability benchmarks and post-launch production telemetry.
            </p>
          </div>

          {/* Two-Stage Validation Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4 pt-4 border-t-2 border-black/[0.08]">
              <span className="text-xs font-mono font-bold text-blue-700 uppercase">
                STAGE 01: PROTOTYPE VALIDATION (PRE-LAUNCH)
              </span>
              <h3 className="text-xl font-semibold text-[#141416] tracking-tight">
                Usability & Decision Comprehension
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-[#55555c] font-sans">
                <li>• Task completion rate across the 5 core investigation workflows</li>
                <li>• Time on task during simulated transaction incident triage</li>
                <li>• Error rate during capability and policy boundary setup</li>
                <li>• Reviewer confidence score when evaluating review dockets</li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 pt-4 border-t-2 border-black/[0.08]">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase">
                STAGE 02: PRODUCTION VALIDATION (POST-LAUNCH)
              </span>
              <h3 className="text-xl font-semibold text-[#141416] tracking-tight">
                Operational Telemetry & Fleet Growth
              </h3>
              <ul className="flex flex-col gap-2 text-sm text-[#55555c] font-sans">
                <li>• Mean time to investigate flagged anomalous tool actions</li>
                <li>• Approval turnaround latency for high-risk write operations</li>
                <li>• Active policy coverage percentage across deployed agent fleet</li>
                <li>• False-positive alert reduction for platform security teams</li>
              </ul>
            </div>
          </div>

          {/* Future Opportunities */}
          <div className="flex flex-col gap-6 pt-8 border-t border-black/[0.06]">
            <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
              FUTURE OPPORTUNITIES
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-base text-[#141416]">Agent Dependency Graph</span>
                <p className="text-sm text-[#55555c] leading-relaxed">Visualizing multi-agent workflows and cascaded dependencies across microservices.</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-base text-[#141416]">AI Policy Assistant</span>
                <p className="text-sm text-[#55555c] leading-relaxed">Allowing administrators to draft and simulate security guardrails using natural language.</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-base text-[#141416]">Agent Simulation Sandbox</span>
                <p className="text-sm text-[#55555c] leading-relaxed">Simulating new agent model versions against synthetic load before production rollout.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CHAPTER 10: REFLECTION & CONCLUSION */}
        <section id="reflection" className="flex flex-col gap-20 scroll-mt-32 pt-16 border-t border-black/[0.08]">
          <div className="flex flex-col gap-4 max-w-4xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#86868b]">
              10 REFLECTION
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#111113] tracking-[-0.035em] leading-[1.05]">
              Key learnings from designing for agency.
            </h2>
          </div>

          {/* 3 Large Numbered Reflections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col gap-3 pt-4 border-t-2 border-black/[0.08]">
              <span className="text-xs font-mono font-bold text-blue-600">01</span>
              <h3 className="text-xl font-semibold text-[#141416] tracking-tight leading-snug">
                Complexity is not solved by hiding information.
              </h3>
              <p className="text-sm text-[#55555c] leading-relaxed">
                It is solved by revealing information at the right moment through progressive disclosure, giving reviewers context when a decision is actually required.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t-2 border-black/[0.08]">
              <span className="text-xs font-mono font-bold text-blue-600">02</span>
              <h3 className="text-xl font-semibold text-[#141416] tracking-tight leading-snug">
                AI systems require action-oriented trust models.
              </h3>
              <p className="text-sm text-[#55555c] leading-relaxed">
                When an AI moves from generating text to committing database transactions, governance must treat tool calls with the same rigor as financial transactions.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t-2 border-black/[0.08]">
              <span className="text-xs font-mono font-bold text-blue-600">03</span>
              <h3 className="text-xl font-semibold text-[#141416] tracking-tight leading-snug">
                Approaching the system as a product problem first.
              </h3>
              <p className="text-sm text-[#55555c] leading-relaxed">
                Establishing the governing entity model, autonomy thresholds, and review dockets before sketching UI screens ensured the design was architecturally grounded.
              </p>
            </div>
          </div>

          {/* Senior Product Design Philosophy Statement */}
          <div className="p-10 sm:p-14 md:p-16 rounded-[2.5rem] bg-[#111115] text-white flex flex-col gap-6 text-center items-center justify-center shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              SENIOR PRODUCT DESIGN PHILOSOPHY
            </span>
            <p className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold max-w-3xl leading-snug">
              "The goal was not to make AI governance feel simple. The goal was to make complex decisions easier to understand."
            </p>
          </div>

          {/* Executive Summary Matrix */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-black/[0.08] shadow-xs flex flex-col gap-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#86868b]">
              CASE STUDY EXECUTIVE SUMMARY
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.05] flex flex-col gap-1">
                <span className="text-[10px] text-[#86868b] uppercase">ROLE</span>
                <span className="font-bold text-[#141416]">Product Designer</span>
              </div>
              <div className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.05] flex flex-col gap-1">
                <span className="text-[10px] text-[#86868b] uppercase">PROJECT</span>
                <span className="font-bold text-[#141416]">Sentinel AI</span>
              </div>
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/60 flex flex-col gap-1">
                <span className="text-[10px] text-blue-700 uppercase">TYPE</span>
                <span className="font-bold text-blue-950">In-House Project</span>
              </div>
              <div className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.05] flex flex-col gap-1">
                <span className="text-[10px] text-[#86868b] uppercase">FOCUS</span>
                <span className="font-bold text-[#141416]">AI Governance & Systems</span>
              </div>
              <div className="p-4 rounded-xl bg-black/[0.02] border border-black/[0.05] flex flex-col gap-1">
                <span className="text-[10px] text-[#86868b] uppercase">CORE SKILLS</span>
                <span className="font-bold text-[#141416]">Strategy & Systems UX</span>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200/60 flex flex-col gap-1">
                <span className="text-[10px] text-emerald-700 uppercase">STATUS</span>
                <span className="font-bold text-emerald-950">Ready to Validate</span>
              </div>
            </div>
          </div>

          {/* Next Case Study Transition Card */}
          <div className="pt-12 border-t border-black/[0.08] flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
              Explore Next Case Study
            </span>

            <div
              onClick={() => onNavigateCaseStudy && onNavigateCaseStudy('codash')}
              className="group p-8 sm:p-12 rounded-3xl bg-[#0b1120] text-white border border-white/10 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 cursor-pointer transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
            >
              <div className="flex flex-col gap-2 max-w-xl">
                <span className="text-xs font-mono text-[#37D2E1]">
                  CASE STUDY 02: AI INTERVIEW PLATFORM
                </span>
                <h3 className="text-3xl font-semibold text-white group-hover:text-neutral-100 transition-colors">
                  Codash (Coinvervue)
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Designing a more human way to interview with AI. Dynamic Meet-inspired video tiles, a 7-state conversational facilitator, and a balanced two-sided hiring ecosystem.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1180FF] hover:bg-blue-600 text-white font-semibold text-xs transition-transform duration-200 group-hover:scale-105 shrink-0">
                <span>View Codash Case Study</span>
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </div>

            <div className="flex items-center justify-center pt-4">
              <button
                onClick={onBackToProjects}
                className="text-xs font-mono text-[#86868b] hover:text-[#141416] transition-colors underline underline-offset-4"
              >
                ← Back to all projects
              </button>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}
