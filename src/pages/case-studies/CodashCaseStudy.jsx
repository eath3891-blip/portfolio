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
  Scale,
  Video,
  Mic,
  MicOff,
  VideoOff,
  PenTool,
  PhoneOff,
  Maximize2,
  Play,
  RotateCcw,
  Volume2,
  Pause,
  Users,
  ChevronDown,
  ChevronUp,
  Radio,
  FileCheck
} from 'lucide-react';

/**
 * CodashCaseStudy:
 * Flagship Senior Product Designer case study for Codash (Coinvervue).
 * Demonstrates two-sided product strategy (Candidate vs Hiring Team), candidate psychological safety,
 * Meet-inspired dynamic participant tiles, 7-state conversational AI machine, contextual sandboxes,
 * and responsible AI governance (zero biometrics, strictly no emotion detection).
 * 
 * Strict Copy Rule: Zero em dashes or en dashes in visible text.
 */
export default function CodashCaseStudy({ onBackToProjects, onNavigateCaseStudy }) {
  const [activeNav, setActiveNav] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Chapter 05: Lobby state
  const [micTested, setMicTested] = useState(true);
  const [audioTested, setAudioTested] = useState(true);
  const [networkTested, setNetworkTested] = useState(true);
  const [cameraTested, setCameraTested] = useState(true);
  const [consentChecked, setConsentChecked] = useState(true);
  const [termsChecked, setTermsChecked] = useState(true);
  const [expandedFaq, setExpandedFaq] = useState(0);

  // Chapter 06: Live layout simulator (2, 3, or 4 participants)
  const [participantMode, setParticipantMode] = useState(2); // 2 | 3 | 4
  const [isMicMuted, setIsMicMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  // Chapter 07: State machine active state
  const [activeStateTab, setActiveStateTab] = useState('speaking'); // 'speaking' | 'listening' | 'waiting' | 'thinking' | 'captured' | 'paused' | 'reconnecting'

  // Chapter 08: Contextual tool active tab
  const [activeToolTab, setActiveToolTab] = useState('code'); // 'code' | 'whiteboard' | 'screenshare'
  const [codeLanguage, setCodeLanguage] = useState('typescript');
  const [isCodeRunning, setIsCodeRunning] = useState(false);
  const [codeOutput, setCodeOutput] = useState('Tests passed: 3/3 | Execution time: 42ms');

  // Chapter 09: Recruiter workflow active tab
  const [activeRecruiterTab, setActiveRecruiterTab] = useState('evaluation');
  const [activeHrTab, setActiveHrTab] = useState('dashboard'); // 'dashboard' | 'interview-structure' | 'pipeline' | 'job-creation'

  // Chapter 10: Iteration evolution stage
  const [activeIterationVersion, setActiveIterationVersion] = useState('v3'); // 'v1' | 'v2' | 'v3'

  // 10 Chapter anchors for the sticky sub-navigation
  const chapters = [
    { id: 'overview', label: '01 Overview' },
    { id: 'problem', label: '02 The Problem' },
    { id: 'research', label: '03 Research & Discovery' },
    { id: 'strategy', label: '04 Strategy & IA' },
    { id: 'onboarding', label: '05 Candidate Onboarding' },
    { id: 'interview', label: '06 Live Interview UX' },
    { id: 'conversation', label: '07 Conversational AI' },
    { id: 'tools', label: '08 Contextual Tools' },
    { id: 'recruiter', label: '09 Recruiter Workflow' },
    { id: 'trust', label: '10 Trust & Iteration' }
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

  const handleRunCode = () => {
    setIsCodeRunning(true);
    setCodeOutput('Compiling AST and executing in isolated V8 sandbox...');
    setTimeout(() => {
      setIsCodeRunning(false);
      setCodeOutput('Output: [2, 7] | Target sum 9 found at indices [0, 1]. All 4 unit assertions passed (0 regressions).');
    }, 700);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased selection:bg-[#1180FF]/15 selection:text-[#1180FF]">
      {/* ========================================================================= */}
      {/* 00: STICKY SUB-NAVIGATION & READING PROGRESS                             */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/[0.06] transition-all">
        {/* Dynamic reading progress bar */}
        <div 
          className="h-[2.5px] bg-gradient-to-r from-[#1180FF] via-[#37D2E1] to-[#1180FF] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-3">
            {/* Left: Back to Projects button */}
            <button
              onClick={onBackToProjects}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600 hover:text-black transition-colors px-2.5 py-1.5 rounded-lg hover:bg-black/5"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Projects</span>
            </button>

            {/* Middle: Project title pill */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.03] border border-black/[0.05]">
              <span className="w-2 h-2 rounded-full bg-[#1180FF] animate-pulse" />
              <span className="text-xs font-semibold text-[#141416] tracking-tight">
                Codash
              </span>
              <span className="text-neutral-400 text-xs hidden md:inline">|</span>
              <span className="text-neutral-500 text-xs hidden md:inline truncate max-w-[240px]">
                AI-Powered Interview Platform
              </span>
            </div>

            {/* Right: Quick Next Project Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-black/10 text-xs font-medium text-neutral-600 hover:text-black hover:bg-black/5 transition-all"
                title="Copy share link"
              >
                {copiedLink ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copiedLink ? 'Copied' : 'Share'}</span>
              </button>

              <button
                onClick={() => onNavigateCaseStudy && onNavigateCaseStudy('fixora')}
                className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#141416] hover:bg-black text-white text-xs font-medium tracking-tight shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Next: Fixora</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Sticky horizontal chapter anchor track */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2 scrollbar-none border-t border-black/[0.04]">
            {chapters.map((ch) => {
              const isActive = activeNav === ch.id;
              return (
                <button
                  key={ch.id}
                  onClick={() => scrollToSection(ch.id)}
                  className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#1180FF] text-white shadow-xs font-semibold'
                      : 'text-neutral-500 hover:text-neutral-900 hover:bg-black/5'
                  }`}
                >
                  {ch.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24 sm:space-y-32">

        {/* ========================================================================= */}
        {/* CHAPTER 01: HERO / PROJECT OVERVIEW & ECOSYSTEM                           */}
        {/* ========================================================================= */}
        <section id="overview" className="scroll-mt-32 space-y-10">
          {/* Eyebrow & Hero Header */}
          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1180FF]/10 text-[#1180FF] border border-[#1180FF]/20 text-xs font-mono font-semibold uppercase tracking-wider">
              <span>CASE STUDY 02 · PRODUCT DESIGN · AI INTERVIEWING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#141416] leading-[1.1]">
              Designing a more human way to interview with AI.
            </h1>

            <p className="text-lg sm:text-xl text-[#515154] leading-relaxed max-w-3xl font-normal">
              Codash is an AI-powered interview platform designed to help hiring teams evaluate candidates consistently while creating a transparent, supportive and low-friction experience for candidates.
            </p>
          </div>

          {/* Project Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 p-5 sm:p-6 rounded-3xl bg-white border border-black/[0.06] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Role</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">Product Designer</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Product</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">Codash / Coinvervue</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Domain</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">B2B SaaS · HR Tech · AI</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Platforms</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">Web (Desktop & Tablet)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Team</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">Cross-functional</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Timeline</span>
              <span className="text-xs sm:text-sm font-semibold text-[#141416]">Client Engagement</span>
            </div>
          </div>

          {/* At a Glance Executive Summary */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white to-[#F0F5FF]/40 border border-[#1180FF]/15 shadow-sm space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1180FF]" />
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1180FF]">
                Executive Summary: At A Glance
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-mono">The Problem</span>
                <p className="text-[#333336] leading-relaxed">
                  Traditional interview screening forces a brutal tradeoff: recruiters are overwhelmed by repetitive calls with inconsistent grading, while candidates face opaque, high-anxiety automated tests that feel like surveillance software.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-mono">My Approach</span>
                <p className="text-[#333336] leading-relaxed">
                  I architected Codash as a two-sided product ecosystem connecting candidate psychological safety with hiring-team evaluation rigor. Instead of a chatbot, the interview takes place in familiar Meet-inspired participant video tiles with explicit conversational state design.
                </p>
              </div>
              <div className="space-y-2">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider font-mono">The Outcome</span>
                <p className="text-[#333336] leading-relaxed">
                  A structured, auditable B2B platform featuring transparent consent, live multi-modal task sandboxes, explicit candidate agency controls (pause, think, clarify), and zero biometric scoring or emotion surveillance.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Two-Sided Ecosystem Architecture Diagram */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Systems Architecture</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#141416] tracking-tight">
                  Two-Sided Product Ecosystem
                </h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#1180FF] border border-blue-200">
                End-to-End Interplay
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-[#070e1b] text-white border border-white/10 shadow-xl space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
                {/* Left: Candidate Journey */}
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 flex flex-col justify-between space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                    <User size={16} className="text-[#37D2E1]" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Candidate Experience</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>01 Invitation & Context</span>
                      <span className="text-[10px] text-emerald-400">Reassurance</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>02 Device Readiness Lobby</span>
                      <span className="text-[10px] text-cyan-400">Diagnostics</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>03 Explicit Privacy Consent</span>
                      <span className="text-[10px] text-purple-400">Candidate Rights</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>04 AI Conversational Session</span>
                      <span className="text-[10px] text-blue-400">State Machine</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>05 Contextual Sandboxes</span>
                      <span className="text-[10px] text-amber-400">Code & Board</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>06 Session Recovery</span>
                      <span className="text-[10px] text-emerald-400">Zero Progress Loss</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 italic">Pacing control, transparency & psychological safety.</span>
                </div>

                {/* Center: Codash Core Platform Engine */}
                <div className="p-4 rounded-2xl bg-gradient-to-b from-[#1180FF]/20 to-[#37D2E1]/10 border border-[#1180FF]/30 flex flex-col justify-between space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                    <Sparkles size={16} className="text-[#1180FF]" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Codash Platform Core</span>
                  </div>
                  <div className="space-y-3 text-xs text-slate-200">
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                      <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Video size={13} className="text-cyan-300" />
                        <span>Meet-Inspired Video Grid</span>
                      </div>
                      <p className="text-[11px] text-slate-300">Dynamic participant tiles for AI, candidate, screen shares, and human co-interviewers.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                      <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                        <Radio size={13} className="text-blue-300" />
                        <span>7-State Conversational AI</span>
                      </div>
                      <p className="text-[11px] text-slate-300">Facilitator state machine providing clear cues for listening, thinking, and response capture.</p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-white/10">
                      <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-emerald-300" />
                        <span>Responsible AI Guardrail</span>
                      </div>
                      <p className="text-[11px] text-slate-300">Strictly zero facial analysis, zero emotion tracking, and zero automated hiring rejections.</p>
                    </div>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-300 text-center">Dual WebRTC & WebSocket Orchestration</div>
                </div>

                {/* Right: Hiring Team Experience */}
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 flex flex-col justify-between space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2.5">
                    <Users size={16} className="text-blue-400" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Hiring Team Experience</span>
                  </div>
                  <div className="space-y-2 text-xs font-mono text-slate-300">
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>01 Role & Rubric Definition</span>
                      <span className="text-[10px] text-blue-400">Config</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>02 Structured Question Matrix</span>
                      <span className="text-[10px] text-indigo-400">Standardized</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>03 Automated Invite Distribution</span>
                      <span className="text-[10px] text-cyan-400">Scale</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>04 Dual Video & Transcript Review</span>
                      <span className="text-[10px] text-purple-400">Synchronized</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>05 Code Playback Inspector</span>
                      <span className="text-[10px] text-amber-400">Execution Traces</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
                      <span>06 Objective Human Evaluation</span>
                      <span className="text-[10px] text-emerald-400">Final Decision</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-slate-400 italic">High signal consistency, reduced recruiter fatigue & auditability.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 02: THE PROBLEM & DESIGN TENSIONS                                 */}
        {/* ========================================================================= */}
        <section id="problem" className="scroll-mt-32 space-y-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">02 · The Problem</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              The challenge was not designing an AI interviewer. It was designing trust around one.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              When organizations introduce AI into hiring, the psychological dynamic shifts drastically. Candidates arrive guarded, fearing they are speaking into a black-box surveillance engine where an awkward pause or network flicker could cost them an opportunity.
            </p>
          </div>

          {/* Two-Sided Friction Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Candidate Dilemma */}
            <div className="p-6 rounded-3xl bg-white border border-rose-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs">
                    C
                  </div>
                  <span className="text-sm font-bold text-[#141416]">Candidate Vulnerability</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200">
                  Surveillance Anxiety
                </span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">•</span>
                  <span><strong>Opaque Evaluation:</strong> Complete lack of transparency regarding how speech and actions are graded.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">•</span>
                  <span><strong>Punitive Silence:</strong> Extreme panic when needing cognitive pause, fearing dead air is scored as ignorance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">•</span>
                  <span><strong>Catastrophic Disconnection:</strong> Dread that an unstable Wi-Fi packet will terminate their candidacy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold shrink-0">•</span>
                  <span><strong>Robotic Dehumanization:</strong> Feeling judged by an emotionless test rather than engaging in a dialogue.</span>
                </li>
              </ul>
            </div>

            {/* Recruiter Dilemma */}
            <div className="p-6 rounded-3xl bg-white border border-blue-100 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#1180FF] flex items-center justify-center font-bold text-xs">
                    R
                  </div>
                  <span className="text-sm font-bold text-[#141416]">Hiring Team Bottleneck</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#1180FF] border border-blue-200">
                  Screening Fatigue
                </span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600">
                <li className="flex items-start gap-2">
                  <span className="text-[#1180FF] font-bold shrink-0">•</span>
                  <span><strong>Severe Recruiter Fatigue:</strong> Senior engineers spending 20+ hours a week repeating intro questions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1180FF] font-bold shrink-0">•</span>
                  <span><strong>Uncalibrated Subjectivity:</strong> Different interviewers grading the same role with completely mismatched rubrics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1180FF] font-bold shrink-0">•</span>
                  <span><strong>Scheduling Latency:</strong> 7 to 14 days lost just trying to coordinate calendar availability for 30-minute calls.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1180FF] font-bold shrink-0">•</span>
                  <span><strong>Incomplete Technical Signals:</strong> Video calls failing to capture real-time code thinking and problem solving.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 5 Core Design Tensions Matrix */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Product Strategy</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#141416] tracking-tight">
                The 5 Fundamental Design Tensions
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-2">
                <span className="text-xs font-bold text-[#1180FF] font-mono">01. Efficiency vs Human Experience</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Scaling screening volume without turning the interview into an assembly line where candidates feel like interchangeable numbers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-2">
                <span className="text-xs font-bold text-[#1180FF] font-mono">02. Automation vs Candidate Agency</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Replacing rigid auto-submitting timers with explicit candidate controls to pause, request clarification, and declare thinking time.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-2">
                <span className="text-xs font-bold text-[#1180FF] font-mono">03. Monitoring vs Psychological Safety</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Verifying test integrity through transparent environmental cues without resorting to invasive biometric scoring or facial tracking.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-2">
                <span className="text-xs font-bold text-[#1180FF] font-mono">04. Standardization vs Expression</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Maintaining calibrated evaluation standards while giving candidates natural freeform coding, whiteboarding, and verbal response canvases.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-2">
                <span className="text-xs font-bold text-[#1180FF] font-mono">05. AI Autonomy vs Human Oversight</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Allowing AI to smoothly facilitate the dynamic interview dialogue while ensuring all hiring decisions remain strictly in human hands.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1180FF]/5 border border-[#1180FF]/20 flex flex-col justify-center space-y-2">
                <span className="text-xs font-bold text-[#1180FF] font-mono">Core Design Objective</span>
                <p className="text-xs text-[#1180FF] leading-relaxed font-medium">
                  "Build an interview experience that feels structured and intelligent without making candidates feel surveilled."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 03: RESEARCH & DISCOVERY                                          */}
        {/* ========================================================================= */}
        <section id="research" className="scroll-mt-32 space-y-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">03 · Research & Discovery</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              Discovery across user vulnerability and recruiter friction.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              Discovery focused on stakeholder requirements, competitive analysis, workflow mapping, UX audits, and iterative feedback across both sides of the hiring equation.
            </p>
          </div>

          {/* Research Insights Matrix */}
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#141416] tracking-tight">
              Discovery Matrix: Key Questions and UX Responses
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-black/[0.06] text-neutral-400 font-mono text-[11px] uppercase">
                    <th className="pb-3 pr-4">Research Question</th>
                    <th className="pb-3 pr-4">Behavioral Insight</th>
                    <th className="pb-3">Design Response in Codash</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/[0.04] text-neutral-700">
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-[#141416]">What makes an AI interview feel trustworthy?</td>
                    <td className="py-3.5 pr-4">Candidates need absolute clarity on what the AI is doing and who reviews their data.</td>
                    <td className="py-3.5 text-[#1180FF] font-medium">Transparent AI disclosure, zero biometric analysis, and explicit human review statements.</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-[#141416]">What happens when a candidate needs time to think?</td>
                    <td className="py-3.5 pr-4">Silence should never feel like failure. Dead air causes intense cognitive anxiety.</td>
                    <td className="py-3.5 text-[#1180FF] font-medium">Explicit "I'm thinking" toggle, AI waiting state cue, and clear pause/resume buttons.</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-[#141416]">What happens when the network fails mid-session?</td>
                    <td className="py-3.5 pr-4">Network blips in automated tests feel terminal to applicants, triggering drop-off.</td>
                    <td className="py-3.5 text-[#1180FF] font-medium">Non-blocking reconnection banner: "Your progress is safe. We will continue where you left off."</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 pr-4 font-semibold text-[#141416]">How should technical questions be presented?</td>
                    <td className="py-3.5 pr-4">Forcing coding problems into a chat input frustrates engineers and destroys signal quality.</td>
                    <td className="py-3.5 text-[#1180FF] font-medium">Contextual tool transitions: Monaco coding sandbox and collaborative architectural whiteboard.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Competitive Experience Landscape */}
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#141416] tracking-tight">
              Competitive Experience Analysis
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500">
              Examining common industry experience patterns across technical, conversational, and video assessment tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/60 space-y-2">
                <span className="text-xs font-mono font-bold text-neutral-700">Traditional Video Screen</span>
                <p className="text-xs text-neutral-600">e.g. Asynchronous one-way video prompts. High candidate drop-off due to unnatural talking into a camera lens with zero conversational feedback.</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/60 space-y-2">
                <span className="text-xs font-mono font-bold text-neutral-700">Generic AI Chatbots</span>
                <p className="text-xs text-neutral-600">Text-only chat boxes. Incapable of evaluating live verbal explanations, architecture diagrams, or spoken nuances in real time.</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/60 space-y-2">
                <span className="text-xs font-mono font-bold text-neutral-700">Technical Test Sandboxes</span>
                <p className="text-xs text-neutral-600">Rigid automated testing portals. Evaluates raw algorithmic output but fails completely to assess human communication and reasoning.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#1180FF]/10 border border-[#1180FF]/30 space-y-2">
                <span className="text-xs font-mono font-bold text-[#1180FF]">Codash Experience</span>
                <p className="text-xs text-[#1180FF] font-medium">Combines conversational video tiles, contextual coding sandboxes, dynamic AI facilitation, and candidate psychological safety.</p>
              </div>
            </div>
          </div>

          {/* Personas & Jobs to be Done */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Candidate Persona */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center font-bold text-sm">
                  AC
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#141416]">Alex Chen</h4>
                  <span className="text-xs text-neutral-500 font-mono">Candidate · Senior Frontend Developer</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 border border-black/[0.04] text-xs font-mono text-neutral-700">
                <strong>JTBD:</strong> "When I am invited to an AI interview, I want to understand what will happen and feel in control of the pacing so that I can focus on demonstrating my actual skills."
              </div>

              <div className="space-y-1 text-xs text-neutral-600">
                <p>• Needs clear cues for when the AI is listening versus processing.</p>
                <p>• Requires the ability to think without being rushed by silent timers.</p>
                <p>• Expects reliable recovery if browser permissions or network drops.</p>
              </div>
            </div>

            {/* Recruiter Persona */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-[#1180FF] flex items-center justify-center font-bold text-sm">
                  SJ
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#141416]">Sarah Jenkins</h4>
                  <span className="text-xs text-neutral-500 font-mono">Hiring Team · Engineering Lead</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-50 border border-black/[0.04] text-xs font-mono text-neutral-700">
                <strong>JTBD:</strong> "When I need to evaluate multiple engineering candidates, I want structured and comparable interview signals so that I can make informed hiring decisions efficiently."
              </div>

              <div className="space-y-1 text-xs text-neutral-600">
                <p>• Needs synchronized video, code diffs, and timestamped transcripts.</p>
                <p>• Requires standardized evaluation rubrics across all applicants.</p>
                <p>• Retains 100% human accountability for final advancement decisions.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 04: STRATEGY & INFORMATION ARCHITECTURE                           */}
        {/* ========================================================================= */}
        <section id="strategy" className="scroll-mt-32 space-y-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">04 · Strategy & IA</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              End-to-end information architecture and candidate journey.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              We mapped the candidate journey across 9 distinct milestones, deliberately separating emotional reassurance from hardware readiness and maintaining session persistence throughout.
            </p>
          </div>

          {/* Horizontal 9-Stage Candidate Journey Map */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Candidate Journey Map</span>
              <span className="text-[11px] font-mono text-neutral-500">9 Core Milestones</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-2">
              {[
                { step: '01', title: 'Invite', goal: 'Receive context', response: 'Clear role description' },
                { step: '02', title: 'Welcome', goal: 'Emotional safety', response: 'No camera popups yet' },
                { step: '03', title: 'Readiness', goal: 'Hardware check', response: 'Mic, Audio, Net check' },
                { step: '04', title: 'Consent', goal: 'Understand rights', response: 'No biometrics notice' },
                { step: '05', title: 'Warm-up', goal: 'Voice check', response: 'Safe practice prompt' },
                { step: '06', title: 'Interview', goal: 'Engage with AI', response: 'Dynamic video tiles' },
                { step: '07', title: 'Sandboxes', goal: 'Solve tasks', response: 'Contextual Code/Board' },
                { step: '08', title: 'Recovery', goal: 'Handle blips', response: 'Zero progress loss' },
                { step: '09', title: 'Complete', goal: 'Clear next steps', response: 'Recruiter timeline' }
              ].map((stage, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white border border-black/[0.06] shadow-xs flex flex-col justify-between space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#1180FF]">{stage.step}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#141416]">{stage.title}</h5>
                    <p className="text-[10px] text-neutral-400 font-mono mt-0.5">{stage.goal}</p>
                  </div>
                  <div className="pt-1.5 border-t border-black/[0.04]">
                    <span className="text-[9px] font-mono text-[#1180FF] bg-blue-50 px-1.5 py-0.5 rounded block truncate">
                      {stage.response}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hiring Team IA Architecture */}
          <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
            <h3 className="text-base font-bold text-[#141416] tracking-tight">
              Recruiter & Hiring Team Information Architecture
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-black/[0.04] space-y-1.5">
                <span className="text-[#1180FF] font-bold">1. Job Definition</span>
                <p className="text-neutral-600 font-sans text-xs">Role metadata, seniority benchmarks, competency tags, and hiring team assignment.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-black/[0.04] space-y-1.5">
                <span className="text-[#1180FF] font-bold">2. Rubric Studio</span>
                <p className="text-neutral-600 font-sans text-xs">Question bank mapping, contextual task triggers (Code sandbox vs Whiteboard), and evaluation criteria.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-black/[0.04] space-y-1.5">
                <span className="text-[#1180FF] font-bold">3. Pipeline Radar</span>
                <p className="text-neutral-600 font-sans text-xs">Real-time candidate telemetry: invited, in-progress, completed, and pending review.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-black/[0.04] space-y-1.5">
                <span className="text-[#1180FF] font-bold">4. Evaluation Docket</span>
                <p className="text-neutral-600 font-sans text-xs">Synchronized video scrubber, code execution history, AI structured signals, and human sign-off.</p>
              </div>
            </div>

            {/* Visual Recruiter Preview Strip */}
            <div className="pt-4 border-t border-black/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-16 h-10 rounded-lg overflow-hidden border border-black/10 shrink-0 shadow-xs">
                  <img src="/images/projects/codash/codash-hr-dashboard.png" alt="Recruiter dashboard preview" className="w-full h-full object-cover" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#141416] block">Coinvervue HR Portal In Action</span>
                  <span className="text-neutral-500">Dashboard, AI Interview Structure, Pipeline Stepper, and Role Builder.</span>
                </div>
              </div>
              <button
                onClick={() => scrollToSection('recruiter')}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#1180FF] hover:text-blue-700 transition-colors shrink-0"
              >
                <span>Jump to Recruiter Screens (Chapter 09)</span>
                <ChevronRight size={13} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 05: CANDIDATE ONBOARDING & EMOTIONAL SAFETY                       */}
        {/* ========================================================================= */}
        <section id="onboarding" className="scroll-mt-32 space-y-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">05 · Candidate Onboarding</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              Separating emotional onboarding from technical readiness.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              A major UX breakdown in early interview tools was bombarding users with browser permission dialogs the instant they opened the link. We decoupled onboarding into two distinct phases: First, establish role context, pacing reassurance, and psychological safety; Second, verify hardware diagnostics in a dedicated lobby.
            </p>
          </div>

          {/* Interactive Screen 01 vs Screen 02 Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Screen 01: Welcome & Reassurance */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-black/[0.05] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1180FF]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141416]">
                    Screen 01: Welcome & Context
                  </span>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">Zero Hardware Popups</span>
              </div>

              {/* Production Welcome UI Card */}
              <div className="rounded-2xl border border-black/10 overflow-hidden shadow-md bg-[#fafafa]">
                <img
                  src="/images/projects/codash/codash-candidate-welcome.jpg"
                  alt="Codash Candidate Welcome Screen setting role expectations and non-coercive ethical policies"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="text-xs text-neutral-500 leading-relaxed space-y-2">
                <p>
                  <strong>Design Principle:</strong> Establishes human context, role clarity, time commitment (45-60 mins), and explicit AI ethical boundaries before requesting any device hardware permissions.
                </p>
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-mono">
                    Zero Camera/Mic Popups
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-[#1180FF] border border-blue-200 text-[10px] font-mono">
                    Ethical Disclaimer Visible
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 text-[10px] font-mono">
                    Pacing Reassurance
                  </span>
                </div>
              </div>
            </div>

            {/* Screen 02: Pre-Interview Lobby & Diagnostics */}
            <div className="p-6 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-5">
              <div className="flex items-center justify-between border-b border-black/[0.05] pb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#37D2E1]" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141416]">
                    Screen 02: Readiness Lobby
                  </span>
                </div>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  All Systems Ready
                </span>
              </div>

              {/* Hardware Diagnostics UI */}
              <div className="p-5 rounded-2xl bg-neutral-900 text-white space-y-4 border border-white/10 shadow-inner">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-300">Device Diagnostics</span>
                  <span className="text-[10px] font-mono text-cyan-300">Automated Ping</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Mic size={14} className="text-emerald-400" />
                      <span>Microphone</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">Active</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Volume2 size={14} className="text-emerald-400" />
                      <span>Audio Output</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">Working</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Zap size={14} className="text-emerald-400" />
                      <span>Network Ping</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">24ms Stable</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Video size={14} className="text-emerald-400" />
                      <span>HD Camera</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">Connected</span>
                  </div>
                </div>

                {/* Explicit Privacy & Consent Checkboxes */}
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 space-y-2 text-[11px] text-slate-300">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={consentChecked} 
                      onChange={(e) => setConsentChecked(e.target.checked)}
                      className="mt-0.5 rounded text-[#1180FF] focus:ring-0" 
                    />
                    <span>I understand how my interview responses will be used and reviewed by the hiring team.</span>
                  </label>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={termsChecked} 
                      onChange={(e) => setTermsChecked(e.target.checked)}
                      className="mt-0.5 rounded text-[#1180FF] focus:ring-0" 
                    />
                    <span>I agree to the interview terms and data privacy policy.</span>
                  </label>
                </div>

                {/* Reassurance Banner */}
                <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-[11px] text-blue-300 flex items-center gap-2">
                  <ShieldCheck size={14} className="shrink-0" />
                  <span>If you disconnect at any point, you will be able to rejoin and continue from where you left off.</span>
                </div>
              </div>

              <div className="text-xs text-neutral-500 leading-relaxed">
                <strong>Why this decision:</strong> Isolates hardware troubleshooting away from the actual interview, ensuring the candidate enters calm and verified.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 06: LIVE INTERVIEW UX & DYNAMIC PARTICIPANT TILES                 */}
        {/* ========================================================================= */}
        <section id="interview" className="scroll-mt-32 space-y-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">06 · Live Interview UX</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              Turning an interview into a familiar, adaptive conversation.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              We rejected the conventional chatbot drawer. Candidates already have deeply ingrained mental models for video conferencing tools like Google Meet and Zoom. Codash adopts dynamic participant video tiles that smoothly adapt as the interview evolves.
            </p>
          </div>

          {/* Production Candidate Live Interview Showcase */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.05] pb-4">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Production UI Showcase</span>
                <h3 className="text-lg font-bold text-[#141416]">Live AI Conversational Interview Experience</h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#1180FF] border border-blue-200 shrink-0">
                app.coinvervue.com/interview/session-live
              </span>
            </div>

            {/* macOS Browser Frame */}
            <div className="rounded-2xl border border-black/10 shadow-lg overflow-hidden bg-[#fafafa]">
              <div className="px-4 py-2.5 bg-neutral-100 border-b border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-neutral-400">Stage 3: Technical Question Round · Live AI Interview</span>
                <span className="text-[11px] font-mono text-neutral-400">1440 × 900</span>
              </div>
              <img
                src="/images/projects/codash/codash-candidate-live-interview.jpg"
                alt="Codash Candidate Live Interview Interface with dual Meet-style video tiles, real-time transcript, and thinking mode banner"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            {/* 3 Key UX Insights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#1180FF]">Dual Meet Video Tiles</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Replaces intimidating chat columns with familiar video-conferencing participant tiles, featuring real-time AI speaking waveforms and candidate video feed.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#1180FF]">Empathic Thinking Mode</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Notice the active banner ("You're in thinking mode - The AI is waiting for you.") and dedicated pills to pause, clarify, repeat, or formulate thoughts.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                <span className="text-xs font-mono font-bold text-[#1180FF]">Transparent Audio & Ethics</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Real-time turn transcript rail on the right, spoken response prompts, and persistent footer notice confirming no emotion detection or biometric scoring.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Dynamic Layout Simulator */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1120] text-white border border-white/10 shadow-2xl space-y-6">
            {/* Controls Bar for Case Study Reader */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-wider">Interactive Layout Simulator</span>
                <h3 className="text-base font-bold text-white">Dynamic Participant Grid</h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-mono mr-1">Simulate Grid:</span>
                {[
                  { mode: 2, label: '2 Tiles: AI + Candidate' },
                  { mode: 3, label: '3 Tiles: + Screen Share' },
                  { mode: 4, label: '4 Tiles: + Co-Interviewer' }
                ].map((item) => (
                  <button
                    key={item.mode}
                    onClick={() => setParticipantMode(item.mode)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                      participantMode === item.mode
                        ? 'bg-[#1180FF] text-white font-bold shadow-xs'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Live Interview Canvas */}
            <div className="space-y-4">
              {/* Top Room Telemetry */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-semibold">Codash Enterprise Session</span>
                  <span className="text-slate-500">|</span>
                  <span className="text-cyan-300">Role: Senior Frontend Developer</span>
                </div>
                {/* Non-punitive progress reassurance */}
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <span className="text-slate-300">Interview Progress:</span>
                  <span className="text-cyan-300 font-bold">Question 6 of 12</span>
                  <div className="w-16 h-1.5 bg-white/10 rounded-full overflow-hidden ml-1">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 w-1/2" />
                  </div>
                </div>
              </div>

              {/* Dynamic Grid Layout */}
              <div className={`grid gap-4 transition-all duration-300 ${
                participantMode === 2 
                  ? 'grid-cols-1 md:grid-cols-2 min-h-[340px]' 
                  : participantMode === 3 
                  ? 'grid-cols-1 md:grid-cols-3 min-h-[340px]' 
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-h-[340px]'
              }`}>
                {/* Tile 1: AI Interviewer */}
                <div className="relative rounded-2xl bg-white/[0.04] border border-[#1180FF]/30 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#1180FF]/20 text-[#37D2E1] border border-[#1180FF]/30 font-semibold">
                      AI Interviewer
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                  </div>

                  <div className="flex flex-col items-center justify-center py-6 space-y-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#1180FF] to-[#37D2E1] flex items-center justify-center text-white shadow-lg">
                      <Sparkles size={24} />
                    </div>
                    {/* Audio Waveform */}
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse" />
                      <span className="w-1 h-6 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
                      <span className="w-1 h-8 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
                      <span className="w-1 h-4 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      <span className="w-1 h-7 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '400ms' }} />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-200">
                    <p className="line-clamp-2">"Could you walk me through how you optimize web vitals on high-traffic landing pages?"</p>
                  </div>
                </div>

                {/* Tile 2: Candidate (Alex) */}
                <div className="relative rounded-2xl bg-white/[0.04] border border-white/10 p-4 flex flex-col justify-between overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-200 font-semibold">Alex Chen (You)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                      {isMicMuted ? 'Mic Muted' : 'Mic Active'}
                    </span>
                  </div>

                  <div className="flex flex-col items-center justify-center py-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 border border-white/20 flex items-center justify-center text-lg font-bold text-cyan-200">
                      AC
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 mt-2">Video Feed Active</span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-400/20">
                    <span>State: Candidate Speaking</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                </div>

                {/* Tile 3: Screen Share (if mode >= 3) */}
                {participantMode >= 3 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-2xl bg-white/[0.04] border border-cyan-500/30 p-4 flex flex-col justify-between overflow-hidden shadow-inner"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold flex items-center gap-1">
                        <Share2 size={11} />
                        Screen Share
                      </span>
                      <span className="text-[10px] text-slate-400">1080p 30fps</span>
                    </div>

                    <div className="p-3 my-auto rounded-xl bg-black/50 border border-white/10 font-mono text-[10px] text-slate-300 space-y-1">
                      <div className="text-blue-400">// Architecture Diagram Preview</div>
                      <div className="text-slate-400">Browser Screen Capture API active</div>
                      <div className="text-emerald-400">getDisplayMedia() stream OK</div>
                    </div>

                    <div className="text-[10px] font-mono text-slate-400 text-center">
                      Sharing: Chrome · Performance Tab
                    </div>
                  </motion.div>
                )}

                {/* Tile 4: Human Co-Interviewer (if mode === 4) */}
                {participantMode === 4 && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-2xl bg-white/[0.04] border border-purple-500/30 p-4 flex flex-col justify-between overflow-hidden shadow-inner"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-semibold flex items-center gap-1">
                        <User size={11} />
                        Co-Interviewer
                      </span>
                      <span className="text-[10px] text-purple-300">Observer</span>
                    </div>

                    <div className="flex flex-col items-center justify-center py-6">
                      <div className="w-16 h-16 rounded-full bg-purple-900/40 border border-purple-400/30 flex items-center justify-center text-lg font-bold text-purple-200">
                        SJ
                      </div>
                      <span className="text-[11px] font-mono text-slate-300 mt-2">Sarah (Lead Eng)</span>
                    </div>

                    <div className="text-[10px] font-mono text-purple-300 text-center bg-purple-500/10 py-1 rounded-lg border border-purple-400/20">
                      Silent Co-Pilot Mode
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Bottom Floating Control Bar */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setIsMicMuted(!isMicMuted)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isMicMuted ? 'bg-rose-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    title="Toggle Microphone"
                  >
                    {isMicMuted ? <MicOff size={16} /> : <Mic size={16} />}
                  </button>

                  <button 
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                      isVideoOff ? 'bg-rose-500 text-white' : 'bg-white/10 hover:bg-white/20 text-white'
                    }`}
                    title="Toggle Camera"
                  >
                    {isVideoOff ? <VideoOff size={16} /> : <Video size={16} />}
                  </button>

                  <button 
                    onClick={() => setParticipantMode(participantMode === 3 ? 2 : 3)}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                    title="Share Screen"
                  >
                    <Share2 size={16} />
                  </button>

                  <button 
                    onClick={() => scrollToSection('tools')}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
                    title="Code Sandbox"
                  >
                    <Code2 size={16} />
                  </button>
                </div>

                {/* Candidate Agency Control */}
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-xs font-mono text-slate-400">Candidate Agency:</span>
                  <button className="px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-medium hover:bg-amber-500/30 transition-all">
                    I'm Thinking
                  </button>
                  <button className="px-3.5 py-1.5 rounded-full bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-semibold transition-all">
                    Leave
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 07: CONVERSATIONAL AI & CRITICAL STATE DESIGN                     */}
        {/* ========================================================================= */}
        <section id="conversation" className="scroll-mt-32 space-y-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">07 · Conversational AI</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              Designing the 7 critical conversational states.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              Real-time AI systems fail when state changes are invisible. In an interview, unexplained silence feels catastrophic. We engineered an explicit 7-state interaction model where every transition is visually reinforced with non-punitive microcopy.
            </p>
          </div>

          {/* Interactive State Machine Explorer */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
            <div className="flex flex-wrap items-center gap-2 border-b border-black/[0.05] pb-4">
              {[
                { id: 'speaking', label: '1. AI Speaking' },
                { id: 'listening', label: '2. Listening' },
                { id: 'waiting', label: '3. AI Waiting' },
                { id: 'thinking', label: '4. Candidate Thinking' },
                { id: 'captured', label: '5. Response Captured' },
                { id: 'paused', label: '6. Paused' },
                { id: 'reconnecting', label: '7. Reconnecting' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStateTab(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    activeStateTab === tab.id
                      ? 'bg-[#1180FF] text-white font-bold shadow-xs'
                      : 'bg-black/[0.03] text-neutral-600 hover:bg-black/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* State Inspector Card */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {/* Visual State Mockup Box */}
              <div className="p-6 rounded-2xl bg-[#0b1120] text-white border border-white/10 flex flex-col justify-between min-h-[220px]">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Simulated Interface State</span>
                  <span className="text-cyan-300">Live Feedback</span>
                </div>

                <div className="my-auto flex flex-col items-center justify-center text-center space-y-3 py-4">
                  {activeStateTab === 'speaking' && (
                    <>
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 text-[#37D2E1] flex items-center justify-center animate-pulse">
                        <Volume2 size={24} />
                      </div>
                      <div className="text-sm font-semibold text-white">AI Interviewer is speaking...</div>
                      <span className="text-xs text-slate-300 font-mono">Microphone gently attenuated to prevent feedback echo</span>
                    </>
                  )}

                  {activeStateTab === 'listening' && (
                    <>
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center animate-pulse">
                        <Mic size={24} />
                      </div>
                      <div className="text-sm font-semibold text-white">Listening to your response...</div>
                      <span className="text-xs text-slate-300 font-mono">Real-time voice stream active</span>
                    </>
                  )}

                  {activeStateTab === 'waiting' && (
                    <>
                      <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                        <Clock size={24} />
                      </div>
                      <div className="text-sm font-semibold text-white">AI is waiting for you.</div>
                      <span className="text-xs text-slate-300 font-mono">Take your time. Silence does not penalize you.</span>
                    </>
                  )}

                  {activeStateTab === 'thinking' && (
                    <>
                      <div className="w-12 h-12 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
                        <Pause size={24} />
                      </div>
                      <div className="text-sm font-semibold text-white">Candidate is thinking.</div>
                      <span className="text-xs text-slate-300 font-mono">AI prompts paused. Press 'Resume' when ready.</span>
                    </>
                  )}

                  {activeStateTab === 'captured' && (
                    <>
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <CheckCircle2 size={24} />
                      </div>
                      <div className="text-sm font-semibold text-emerald-300">Response captured.</div>
                      <span className="text-xs text-slate-300 font-mono">Synthesizing context before formulating next question</span>
                    </>
                  )}

                  {activeStateTab === 'paused' && (
                    <>
                      <div className="w-12 h-12 rounded-full bg-neutral-700 text-white flex items-center justify-center">
                        <Pause size={24} />
                      </div>
                      <div className="text-sm font-semibold text-white">Interview paused.</div>
                      <button className="px-4 py-1.5 rounded-full bg-[#1180FF] text-white text-xs font-semibold">
                        Resume Interview
                      </button>
                    </>
                  )}

                  {activeStateTab === 'reconnecting' && (
                    <>
                      <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center animate-spin">
                        <RefreshCw size={24} />
                      </div>
                      <div className="text-sm font-semibold text-white">Reconnecting... your interview progress is safe.</div>
                      <span className="text-xs text-slate-300 font-mono">Attempting socket recovery on backup channel</span>
                    </>
                  )}
                </div>

                <div className="text-[10px] font-mono text-slate-400 text-center border-t border-white/10 pt-2">
                  UX Writing Rule: Calm Reassurance Over Opaque Silence
                </div>
              </div>

              {/* Rationale & Microcopy Details */}
              <div className="space-y-4 text-xs sm:text-sm text-neutral-600">
                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-[#1180FF] uppercase">UX Writing Transformation</span>
                  <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800">
                      <span className="font-bold block">Instead of:</span>
                      <span>"Wait" or "Silence detected"</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                      <span className="font-bold block">Codash Uses:</span>
                      <span>"AI is waiting for you."</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold font-mono text-[#1180FF] uppercase">Interaction State Architecture</span>
                  <p className="leading-relaxed">
                    By making the system state visible at all times, we eliminate the candidate's fear that the microphone has frozen or that their pauses are being penalized as hesitation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 08: CONTEXTUAL TOOLS & TECHNICAL FEASIBILITY                      */}
        {/* ========================================================================= */}
        <section id="tools" className="scroll-mt-32 space-y-10">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">08 · Contextual Tools</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              Task-specific workspaces: Code, Whiteboard, and Screen Sharing.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              When an interview shifts to technical problem solving, forcing candidates to describe code verbally destroys signal quality. Codash dynamically morphs to provide context-appropriate workspaces while keeping the conversational audio and video tiles visible.
            </p>
          </div>

          {/* Interactive Contextual Tools Explorer */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
            {/* Tool Selector Tabs */}
            <div className="flex items-center gap-2 border-b border-black/[0.05] pb-4">
              {[
                { id: 'code', label: '1. Monaco Code Sandbox', icon: Code2 },
                { id: 'whiteboard', label: '2. Architecture Whiteboard', icon: PenTool },
                { id: 'screenshare', label: '3. Screen Sharing Integration', icon: Share2 }
              ].map((tool) => {
                const IconC = tool.icon;
                return (
                  <button
                    key={tool.id}
                    onClick={() => setActiveToolTab(tool.id)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                      activeToolTab === tool.id
                        ? 'bg-[#1180FF] text-white font-bold shadow-xs'
                        : 'bg-black/[0.03] text-neutral-600 hover:bg-black/5'
                    }`}
                  >
                    <IconC size={13} />
                    <span>{tool.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tool Canvas Body */}
            {activeToolTab === 'code' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-neutral-700">Language:</span>
                    <select 
                      value={codeLanguage} 
                      onChange={(e) => setCodeLanguage(e.target.value)}
                      className="px-2 py-1 rounded-lg bg-neutral-100 border border-neutral-300 text-xs font-mono"
                    >
                      <option value="typescript">TypeScript</option>
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="go">Go</option>
                    </select>
                  </div>
                  <button
                    onClick={handleRunCode}
                    disabled={isCodeRunning}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-xs font-semibold transition-all shadow-xs"
                  >
                    <Play size={12} />
                    <span>{isCodeRunning ? 'Executing...' : 'Run Solution'}</span>
                  </button>
                </div>

                {/* Monaco style Code Editor Window */}
                <div className="rounded-2xl bg-[#0f172a] text-slate-100 font-mono text-xs p-4 border border-white/10 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 text-[11px] text-slate-400">
                    <span>twoSum.ts</span>
                    <span>UTF-8 · Tab Size: 2</span>
                  </div>
                  <pre className="text-slate-300 leading-relaxed overflow-x-auto">
{`// Problem: Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}`}
                  </pre>

                  {/* Terminal Execution Output Drawer */}
                  <div className="pt-3 border-t border-white/10 text-[11px] text-emerald-400 flex items-center justify-between">
                    <span>Console: {codeOutput}</span>
                    <span className="text-[10px] text-slate-500 font-mono">Sandbox Sandbox-V8-Isolated</span>
                  </div>
                </div>
              </div>
            )}

            {activeToolTab === 'whiteboard' && (
              <div className="rounded-2xl bg-[#f8f9fc] border border-black/[0.08] p-6 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Architecture & System Design Canvas</span>
                  <span>Vector Shapes & Connectors</span>
                </div>
                {/* Visual System Architecture Diagram Mockup */}
                <div className="h-64 rounded-xl bg-white border border-black/[0.06] p-4 flex flex-col justify-center items-center space-y-4">
                  <div className="flex items-center gap-6">
                    <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-center font-mono text-xs text-[#1180FF]">
                      <span className="font-bold block">Next.js Edge</span>
                      <span className="text-[10px] text-neutral-500">SSR / Client App</span>
                    </div>
                    <span className="text-neutral-400 font-mono">⇄</span>
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-center font-mono text-xs text-emerald-700">
                      <span className="font-bold block">GraphQL API Gateway</span>
                      <span className="text-[10px] text-neutral-500">Federated Subgraphs</span>
                    </div>
                    <span className="text-neutral-400 font-mono">⇄</span>
                    <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-center font-mono text-xs text-purple-700">
                      <span className="font-bold block">Redis Cluster</span>
                      <span className="text-[10px] text-neutral-500">L1 Cache / PubSub</span>
                    </div>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">Candidate drawing synced in real time to the hiring team session review</span>
                </div>
              </div>
            )}

            {activeToolTab === 'screenshare' && (
              <div className="rounded-2xl bg-[#f8f9fc] border border-black/[0.08] p-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>Browser Screen Capture Protocol</span>
                  <span>getDisplayMedia()</span>
                </div>
                <div className="p-4 rounded-xl bg-white border border-black/[0.06] text-xs space-y-2 text-neutral-700">
                  <p>• Candidate receives an explicit browser permissions prompt with visual preview before sharing begins.</p>
                  <p>• The active screen stream dynamically spawns a 3rd video participant tile in the live Meet grid.</p>
                  <p>• Candidate retains persistent 1-click "Stop Sharing" floating control on their bottom action bar.</p>
                </div>
              </div>
            )}

            {/* Technical Feasibility Considerations Callout */}
            <div className="p-4 rounded-2xl bg-neutral-900 text-white border border-white/10 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-cyan-300 font-mono font-bold uppercase tracking-wider">
                <Cpu size={14} />
                <span>Technical Architecture Considerations</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Presented as architectural feasibility touchpoints: WebRTC peer connections handle low-latency video and audio streaming; MediaDevices API manages hardware switching; WebSocket event streams synchronize the conversational state machine; and code executions are isolated in secure sandboxed runtimes.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 09: RECRUITER WORKFLOW & TWO-SIDED VALUE                          */}
        {/* ========================================================================= */}
        <section id="recruiter" className="scroll-mt-32 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">09 · Recruiter & Hiring Team Portal</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              Designing for both sides of the hiring equation.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              Every candidate-facing design decision directly shapes the quality of evaluation data available to the hiring team. Below are the actual production screens I designed for the HR and recruiter management platform (Coinvervue / Codash), spanning active job telemetry, AI question flow distribution, candidate pipeline radar, and granular skill weighting.
            </p>
          </div>

          {/* Interactive Production HR Portal Showcase */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-black/[0.05] pb-4">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Production UI Showcase</span>
                <h3 className="text-lg font-bold text-[#141416]">Coinvervue HR & Recruiter Portal</h3>
              </div>

              {/* Tab Selector */}
              <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
                {[
                  { id: 'dashboard', label: '01. Dashboard & Jobs' },
                  { id: 'interview-structure', label: '02. AI Interview Structure' },
                  { id: 'pipeline', label: '03. Candidate Pipeline' },
                  { id: 'job-creation', label: '04. Job Creation Studio' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveHrTab(tab.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                      activeHrTab === tab.id
                        ? 'bg-[#1180FF] text-white font-semibold shadow-xs'
                        : 'bg-black/[0.04] text-neutral-600 hover:bg-black/8 hover:text-black'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* TAB 01: DASHBOARD & ACTIVE JOBS */}
            {activeHrTab === 'dashboard' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-[#141416]">Active Job Roles & Telemetry Dashboard</h4>
                    <p className="text-xs text-neutral-500">Live operational overview with key metrics, active role postings, and weighted skill breakdown.</p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#1180FF] border border-blue-200 shrink-0">
                    app.coinvervue.com/dashboard
                  </span>
                </div>

                {/* macOS / Browser Frame */}
                <div className="rounded-2xl border border-black/10 shadow-lg overflow-hidden bg-[#fafafa]">
                  <div className="px-4 py-2.5 bg-neutral-100 border-b border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">Dashboard · Senior React Developer Active</span>
                    <span className="text-[11px] font-mono text-neutral-400">1440 × 900</span>
                  </div>
                  <img
                    src="/images/projects/codash/codash-hr-dashboard.png"
                    alt="Codash Recruiter Dashboard showing Active Job Roles and Weighted Skill Criteria"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 3 Key UX Insights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">High-Level Telemetry</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Instant tracking of 12 Active Jobs, 247 Applicants, 21 Shortlisted, and 16 Scheduled Interviews to eliminate spreadsheet tracking.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">Quick Role Actions</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      1-click access to Edit job parameters, View Applicants, and preview the published JD directly from the active cards feed.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">Transparent Skill Weighting</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Right panel displays weighted criteria (React 40%, TypeScript 35%, HTML/CSS 20%, Node.js 25%) ensuring calibrated candidate matching.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 02: AI INTERVIEW STRUCTURE & QUESTION DISTRIBUTION */}
            {activeHrTab === 'interview-structure' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-[#141416]">AI Interview Structure & Question Distribution Engine</h4>
                    <p className="text-xs text-neutral-500">Configuring the conversational journey, technical assessment slider, and question bank.</p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#1180FF] border border-blue-200 shrink-0">
                    app.coinvervue.com/jobs/structure
                  </span>
                </div>

                {/* Browser Frame */}
                <div className="rounded-2xl border border-black/10 shadow-lg overflow-hidden bg-[#fafafa]">
                  <div className="px-4 py-2.5 bg-neutral-100 border-b border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">Interview Structure · Question Distribution</span>
                    <span className="text-[11px] font-mono text-neutral-400">1440 × 900</span>
                  </div>
                  <img
                    src="/images/projects/codash/codash-hr-interview-structure.png"
                    alt="Codash Interview Structure showing 6-phase flow and technical questions"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 3 Key UX Insights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">6-Phase Conversational Flow</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Structured progression through Introduction, Technical Assessment, Problem-Solving, Soft Skills, Culture Fit, and Final Summary.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">Hardcore Technical Slider</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Interactive percentage slider (40% default) allowing engineering leads to calibrate theoretical depth vs practical discussion.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">Standardized Topic Banks</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Curated questions covering let/const/var, React Hooks, Web Vitals performance, closures, and TypeScript interfaces.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 03: CANDIDATE PIPELINE RADAR */}
            {activeHrTab === 'pipeline' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-[#141416]">Candidate Pipeline Radar & Milestone Stepper</h4>
                    <p className="text-xs text-neutral-500">Applicant status table with matching scores, 4-milestone stepper, and review actions.</p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#1180FF] border border-blue-200 shrink-0">
                    app.coinvervue.com/jobs/candidates
                  </span>
                </div>

                {/* Browser Frame */}
                <div className="rounded-2xl border border-black/10 shadow-lg overflow-hidden bg-[#fafafa]">
                  <div className="px-4 py-2.5 bg-neutral-100 border-b border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">Candidate Pipeline · Senior React Developer</span>
                    <span className="text-[11px] font-mono text-neutral-400">1440 × 900</span>
                  </div>
                  <img
                    src="/images/projects/codash/codash-hr-candidate-pipeline.png"
                    alt="Codash Candidate Pipeline table showing applicant status stepper and match scores"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 3 Key UX Insights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">4-Milestone Status Stepper</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Color-coded progress tracks: Document Upload → Assessment Completed → Interview Scheduled → Final Decision (Accepted/Rejected).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">Matching Score Radar</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Objective algorithmic matching percentage (e.g. 69%) calculated from weighted skill requirements without opaque black-box bias.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">1-Click Review Actions</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Direct buttons for launching synchronized interview video playback, rescheduling sessions, editing candidate notes, and audit logs.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 04: JOB CREATION STUDIO */}
            {activeHrTab === 'job-creation' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="text-base font-bold text-[#141416]">Job Creation & Skill Weighting Studio</h4>
                    <p className="text-xs text-neutral-500">Tailored role builder with interactive skill sliders, DSA question toggles, and cultural prompts.</p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-50 text-[#1180FF] border border-blue-200 shrink-0">
                    app.coinvervue.com/jobs/create
                  </span>
                </div>

                {/* Browser Frame */}
                <div className="rounded-2xl border border-black/10 shadow-lg overflow-hidden bg-[#fafafa]">
                  <div className="px-4 py-2.5 bg-neutral-100 border-b border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">Create a Job · Tailored Role Builder & Skill Sliders</span>
                    <span className="text-[11px] font-mono text-neutral-400">1440 × 900</span>
                  </div>
                  <img
                    src="/images/projects/codash/codash-hr-create-job.png"
                    alt="Codash Job Creation and Skill Weighting Studio"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 3 Key UX Insights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">Granular Experience Bounds</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Recruiters configure both minimum and maximum experience levels alongside interview duration windows (Min/Max duration).
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">Interactive Skill Criteria</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Custom percentage sliders for each required skill (e.g. React 40%, TypeScript 40%) that dynamically calibrate scoring weights.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                    <span className="text-xs font-mono font-bold text-[#1180FF]">DSA & Culture Toggles</span>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Dedicated switches to include data structures challenges, customizable coding prompts, soft skills, and company culture fit questions.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Two-Sided Marketplace Value Matrix */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0b1120] text-white border border-white/10 shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">Systems Thinking</span>
                <h3 className="text-lg font-bold text-white">The Two-Sided Marketplace Balance</h3>
              </div>
              <span className="text-xs font-mono text-slate-400">Recruiter vs Candidate Interplay</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <span className="font-bold text-[#37D2E1] block uppercase font-mono">Candidate Experience</span>
                <p className="text-slate-300">
                  When candidates feel psychologically safe with clear AI cues, thinking pauses, and robust reconnection guarantees, they perform naturally without anxiety.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                <span className="font-bold text-[#1180FF] block uppercase font-mono">Hiring Team Signal Quality</span>
                <p className="text-slate-300">
                  Because candidates perform at their authentic best, recruiters receive genuine, uncorrupted competency signals, drastically reducing bad hires and second-round churn.
                </p>
              </div>
            </div>
          </div>
        </section>{/* ========================================================================= */}
        {/* CHAPTER 10: TRUST, ITERATION, IMPACT & REFLECTIONS                        */}
        {/* ========================================================================= */}
        <section id="trust" className="scroll-mt-32 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">10 · Trust & Iteration</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#141416]">
              Responsible AI, stakeholder evolution, and design impact.
            </h2>
            <p className="text-base sm:text-lg text-[#515154] leading-relaxed">
              Designing Codash required navigating enterprise compliance, candidate ethics, and rapid stakeholder iteration to balance cutting-edge capability with uncompromising trust.
            </p>
          </div>

          {/* Responsible AI Framework Callout */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-sky-500/5 to-white border border-emerald-500/20 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-emerald-600" />
              <h3 className="text-base sm:text-lg font-bold text-[#141416]">
                Responsible AI & Ethical Boundaries
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Codash is designed with explicit ethical boundaries: <strong>We do not use facial recognition, biometric scoring, or emotion-detection technologies.</strong> The AI acts strictly as an interview facilitator, while all evaluation rubrics and hiring decisions remain completely auditable by human hiring teams.
            </p>
          </div>

          {/* Post-Interview Closure & Transparency Showcase */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/[0.05] pb-4">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Candidate Journey Closure</span>
                <h3 className="text-lg font-bold text-[#141416]">Post-Interview Psychological Closure & Feedback</h3>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                Transparent Next Steps
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 rounded-2xl border border-black/10 overflow-hidden shadow-md bg-[#fafafa]">
                <img
                  src="/images/projects/codash/codash-candidate-complete.jpg"
                  alt="Codash Candidate Interview Complete Screen with Next Steps and 5-Star Feedback"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#1180FF]">Eliminating the Algorithmic Black Hole</span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Most automated tools terminate abruptly without explaining what happens next. Codash establishes transparent milestones: AI response analysis, human hiring team review within 2 to 3 business days, and explicit email follow-up.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#1180FF]">Candidate Voice & Accountability</span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    A 5-star sentiment rating collects instant candidate feedback on interview fairness and question relevance, holding the AI system continuously accountable.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#1180FF]">Clean Hardware Release</span>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    The explicit "Close Window" action guarantees all active browser camera and microphone streams are severed immediately, giving candidates peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stakeholder Iteration: V1 → V2 → V3 Evolution */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Design Evolution</span>
                <h3 className="text-lg sm:text-xl font-bold text-[#141416]">
                  Iterative Design Based on Stakeholder Feedback
                </h3>
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs">
                {['v1', 'v2', 'v3'].map((v) => (
                  <button
                    key={v}
                    onClick={() => setActiveIterationVersion(v)}
                    className={`px-3 py-1 rounded-full uppercase transition-all ${
                      activeIterationVersion === v
                        ? 'bg-[#1180FF] text-white font-bold'
                        : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`p-4 rounded-2xl border transition-all ${
                activeIterationVersion === 'v1' ? 'border-[#1180FF] bg-blue-50/30 ring-1 ring-[#1180FF]' : 'border-black/[0.06] bg-[#f8f9fc]'
              }`}>
                <span className="text-xs font-mono font-bold text-neutral-500">Version 01</span>
                <h4 className="text-sm font-bold text-[#141416] mt-1">Traditional Interface</h4>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Basic chat column beside static video window. Feedback: "Interview screen feels too basic and disconnected from real video calls."
                </p>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${
                activeIterationVersion === 'v2' ? 'border-[#1180FF] bg-blue-50/30 ring-1 ring-[#1180FF]' : 'border-black/[0.06] bg-[#f8f9fc]'
              }`}>
                <span className="text-xs font-mono font-bold text-neutral-500">Version 02</span>
                <h4 className="text-sm font-bold text-[#141416] mt-1">Floating Interaction Model</h4>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Overlaid floating controls and popover dialogue. Feedback: "Need more natural video-conferencing behavior without overlaying candidate faces."
                </p>
              </div>

              <div className={`p-4 rounded-2xl border transition-all ${
                activeIterationVersion === 'v3' ? 'border-[#1180FF] bg-blue-50/30 ring-1 ring-[#1180FF]' : 'border-black/[0.06] bg-[#f8f9fc]'
              }`}>
                <span className="text-xs font-mono font-bold text-[#1180FF]">Version 03 (Final Direction)</span>
                <h4 className="text-sm font-bold text-[#141416] mt-1">Dynamic Meet Participant Grid</h4>
                <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                  Meet-inspired participant tiles, explicit 7-state conversational machine, contextual sandboxes, and candidate thinking agency.
                </p>
              </div>
            </div>
          </div>

          {/* Key UX Decision Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-[#1180FF]">DECISION: Separate Welcome from Device Check</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                The first screen establishes context and psychological reassurance rather than immediately requesting camera and microphone permissions.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-[#1180FF]">DECISION: Use Familiar Video-Call Patterns</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Candidates already understand participant tiles and floating bottom controls, drastically lowering cognitive load.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-[#1180FF]">DECISION: Explicit State Machine with Thinking Agency</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Allowing candidates to toggle "I'm thinking" or pause without penalty removes the dread of dead air.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs space-y-2">
              <span className="text-xs font-mono font-bold text-[#1180FF]">DECISION: Contextual Code & Whiteboard Sandboxes</span>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Technical tasks surface native code editors and diagrams without forcing candidates to type syntax into a chat box.
              </p>
            </div>
          </div>

          {/* Design System & Raleway Typography Scale */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-6">
            <div>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Design System</span>
              <h3 className="text-lg sm:text-xl font-bold text-[#141416]">
                Raleway Typography & Color Architecture
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-[#1180FF] text-white flex flex-col justify-between h-20">
                <span className="text-[10px] uppercase font-bold">Primary Blue</span>
                <span>#1180FF</span>
              </div>
              <div className="p-3 rounded-xl bg-[#37D2E1] text-[#070e1b] flex flex-col justify-between h-20">
                <span className="text-[10px] uppercase font-bold">Supporting Cyan</span>
                <span>#37D2E1</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F0F5FF] text-[#1180FF] border border-[#1180FF]/20 flex flex-col justify-between h-20">
                <span className="text-[10px] uppercase font-bold">Light Blue Surface</span>
                <span>#F0F5FF</span>
              </div>
              <div className="p-3 rounded-xl bg-[#0b1120] text-white flex flex-col justify-between h-20">
                <span className="text-[10px] uppercase font-bold">Canvas Dark</span>
                <span>#0B1120</span>
              </div>
            </div>
          </div>

          {/* Qualitative Outcomes & Editable Metrics */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white to-[#F0F5FF]/50 border border-[#1180FF]/15 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-mono text-[#1180FF] uppercase tracking-wider font-bold">Outcomes & Impact</span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141416]">
                From an AI assessment tool to a complete interview ecosystem.
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#1180FF]">XX%</span>
                <span className="text-xs text-neutral-500 font-mono block mt-1">Reduction in Screening Overhead</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">XX%</span>
                <span className="text-xs text-neutral-500 font-mono block mt-1">Candidate Completion Rate</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-purple-600">2-Sided</span>
                <span className="text-xs text-neutral-500 font-mono block mt-1">Ecosystem Architecture</span>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-black/[0.04] shadow-xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan-600">0</span>
                <span className="text-xs text-neutral-500 font-mono block mt-1">Biometric Surveillance</span>
              </div>
            </div>
          </div>

          {/* Senior Product Designer Reflections */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.06] shadow-sm space-y-4">
            <h3 className="text-lg font-bold text-[#141416]">
              Senior Product Designer Learnings & Reflections
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed">
              <p>
                <strong>1. AI UX is fundamentally state design:</strong> When machine reasoning is invisible, users fill the void with anxiety. Explicit visual indicators for listening, waiting, thinking, and recovery transform an automated test into a trusted dialogue.
              </p>
              <p>
                <strong>2. Trust is an interaction problem, not just a legal disclaimer:</strong> Reassurance cannot simply be buried in a terms modal. Trust is earned through candidate agency, pause controls, and guaranteed session recovery.
              </p>
              <p>
                <strong>3. Familiar interaction patterns reduce cognitive load:</strong> Leveraging established video conferencing conventions allowed candidates to focus 100% of their mental bandwidth on the interview questions rather than navigating a novel UI.
              </p>
            </div>
          </div>

          {/* Next Project Destination Banner (Fixora) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1120] text-white border border-white/10 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#37D2E1] border border-blue-400/30 text-xs font-mono font-semibold uppercase">
                <span>Next Case Study 03</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Fixora: AI-Powered UX Auditing
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Explore how AI can turn complex website usability issues into clear, prioritized, actionable improvements with deep REST API contracts and deterministic heuristics.
              </p>
            </div>

            <button
              onClick={() => onNavigateCaseStudy && onNavigateCaseStudy('fixora')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1180FF] hover:bg-blue-600 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shrink-0"
            >
              <span>Explore Fixora</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
