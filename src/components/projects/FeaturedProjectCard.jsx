import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Trophy, 
  Cpu, 
  Activity, 
  Layers, 
  Sliders, 
  Eye, 
  Lock, 
  Info,
  ChevronRight,
  Search,
  Network,
  Workflow,
  LayoutGrid,
  MessageSquareCode,
  Video,
  Mic,
  Code2,
  PenTool,
  Share2
} from 'lucide-react';

/**
 * FeaturedProjectCard:
 * Redesigned in the Liquid Glass / Frosted Glassmorphism theme from user reference.
 * 
 * 5 Crafted Physical Layers:
 * 1. Outer Glassmorphic Squircle Frame (rounded-[2.8rem] frosted glass with multi-layer ambient shadow)
 * 2. Top Inset Hero Surface (vibrant brand gradient + specular glass shine overlay)
 * 3. Floating Straddle Strip (circular capability avatars overlapping hero & body)
 * 4. Recessed Info Docket (curved glass well with 3D brand badge & key metric)
 * 5. Bottom Tactile Floating Action Bar (squircle icon button + glossy liquid pebble CTA)
 * 
 * Strict Copy Rule: Zero em dashes or en dashes in visible text.
 */
export default function FeaturedProjectCard({ project, index, onSelect }) {
  const [hoveredProcessIndex, setHoveredProcessIndex] = useState(null);
  const isSentinel = project.id === 'sentinel-ai' || project.id === 'sentinel';

  // Bespoke brand gradients and themes for each featured project
  const getTheme = () => {
    switch (project.id) {
      case 'sentinel-ai':
      case 'sentinel':
        return {
          gradient: 'from-[#1e40af] via-[#2563eb] to-[#60a5fa]',
          sphereBg: 'bg-gradient-to-tr from-blue-600 to-cyan-400',
          metricLabel: 'Governed Actions',
          metricValue: '95% Auto',
          metricColor: 'text-blue-700',
          balanceLabel: 'AGENT CONTROL PLANE',
          avatars: [
            { 
              step: '01',
              icon: Search, 
              label: 'Research', 
              stage: 'Research & Discovery',
              detail: 'Mapped operator cognitive load and conducted field interviews across enterprise AI fleets.',
              bg: 'bg-emerald-100 text-emerald-700' 
            },
            { 
              step: '02',
              icon: Network, 
              label: 'Architecture', 
              stage: 'Information Architecture',
              detail: 'Modeled multi-agent relationship graphs and structured the zero-trust governance framework.',
              bg: 'bg-sky-100 text-sky-700' 
            },
            { 
              step: '03',
              icon: Workflow, 
              label: 'Autonomy', 
              stage: 'Autonomy Matrix',
              detail: 'Designed the 4-tier autonomy matrix and 7-phase intercept decision lifecycles.',
              bg: 'bg-amber-100 text-amber-700' 
            },
            { 
              step: '04',
              icon: LayoutGrid, 
              label: 'UI Systems', 
              stage: 'UI & Control Plane',
              detail: 'Crafted high-density control planes, action review dockets, and interactive guardrail studios.',
              bg: 'bg-indigo-100 text-indigo-700' 
            },
            { 
              step: '05',
              icon: ShieldCheck, 
              label: 'Validation', 
              stage: 'Validation & Audit',
              detail: 'Conducted operator usability testing and monitored real-world production telemetry.',
              bg: 'bg-purple-100 text-purple-700' 
            }
          ]
        };

      case 'codash':
      case 'coinvervue':
        return {
          gradient: 'from-[#071228] via-[#1180FF]/30 to-[#37D2E1]/25',
          sphereBg: 'bg-gradient-to-tr from-[#1180FF] to-[#37D2E1]',
          metricLabel: 'PLATFORM ECOSYSTEM',
          metricValue: 'Two-Sided',
          metricColor: 'text-blue-700',
          balanceLabel: 'CANDIDATE AGENCY',
          avatars: [
            { icon: Video, label: 'Video Tiles', bg: 'bg-blue-100 text-blue-700' },
            { icon: Mic, label: 'Spoken AI', bg: 'bg-cyan-100 text-cyan-700' },
            { icon: Code2, label: 'Code Sandbox', bg: 'bg-indigo-100 text-indigo-700' },
            { icon: PenTool, label: 'Whiteboard', bg: 'bg-emerald-100 text-emerald-700' },
            { icon: ShieldCheck, label: 'Ethical Guardrails', bg: 'bg-sky-100 text-sky-700' }
          ]
        };

      case 'registerkaro':
        return {
          gradient: 'from-[#065f46] via-[#059669] to-[#34d399]',
          sphereBg: 'bg-gradient-to-tr from-emerald-600 to-teal-300',
          metricLabel: 'Onboarding Lift',
          metricValue: '+18% Growth',
          metricColor: 'text-emerald-700',
          balanceLabel: 'GOVTECH ONBOARDING',
          avatars: [
            { icon: CheckCircle2, label: 'MCA Sync', bg: 'bg-emerald-100 text-emerald-700' },
            { icon: ShieldCheck, label: 'DIN KYC', bg: 'bg-teal-100 text-teal-700' },
            { icon: Lock, label: 'Digital Sign', bg: 'bg-cyan-100 text-cyan-700' },
            { icon: Activity, label: 'RoC Gateway', bg: 'bg-blue-100 text-blue-700' },
            { icon: Sparkles, label: '100% Paperless', bg: 'bg-amber-100 text-amber-700' }
          ]
        };

      case 'fixora':
      default:
        return {
          gradient: 'from-[#0b1329] via-[#111c38] to-[#1d4ed8]',
          sphereBg: 'bg-gradient-to-tr from-blue-600 to-indigo-500',
          metricLabel: 'MVP CONCEPT',
          metricValue: 'Top 3-5 Fixes',
          metricColor: 'text-blue-700',
          balanceLabel: 'CONVERSION LINTER',
          avatars: [
            { icon: Search, label: 'Audit Scanner', bg: 'bg-blue-100 text-blue-700' },
            { icon: Sliders, label: 'Prioritization', bg: 'bg-amber-100 text-amber-700' },
            { icon: MessageSquareCode, label: 'AI Conversation', bg: 'bg-purple-100 text-purple-700' },
            { icon: ShieldCheck, label: 'Trust Guardrails', bg: 'bg-emerald-100 text-emerald-700' },
            { icon: CheckCircle2, label: 'Decision Action', bg: 'bg-indigo-100 text-indigo-700' }
          ]
        };
    }
  };

  const theme = getTheme();
  // Render bespoke product UI mockups reflecting the actual domain
  const renderVisualMockup = () => {
    switch (project.visualType) {
      case 'sentinel':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#0a0f1d] via-[#0f172a] to-[#090d16] text-white rounded-2xl border border-white/10 shadow-inner overflow-hidden select-none">
            {/* Top Control Plane Header */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2 truncate">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-mono text-slate-200 font-semibold truncate">
                  Sentinel Control Plane
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/20 shrink-0">
                47 Agents Active
              </span>
            </div>

            {/* Middle: 4 Autonomy Levels & Policy Guardrails */}
            <div className="my-2 grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/5 flex flex-col">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Autonomy Matrix</span>
                <span className="text-xs font-semibold text-emerald-400 mt-1">L1 Observe → L4 Auto</span>
                <div className="mt-1.5 flex items-center gap-1">
                  <span className="h-1.5 flex-1 bg-emerald-400 rounded-full" />
                  <span className="h-1.5 flex-1 bg-emerald-400 rounded-full" />
                  <span className="h-1.5 flex-1 bg-amber-400 rounded-full" />
                  <span className="h-1.5 flex-1 bg-blue-400 rounded-full" />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/5 flex flex-col">
                <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Policy Engine</span>
                <span className="text-xs font-semibold text-blue-300 mt-1">Zero-Trust Guardrails</span>
                <span className="text-[9px] font-mono text-slate-400 mt-1">Circuit Breakers Active</span>
              </div>
            </div>

            {/* Bottom: Governed Actions & Risk State */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-2">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck size={12} className="text-emerald-400" />
                95% Governed Actions
              </span>
              <span className="text-[9px] text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                Audit Trail Live
              </span>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white rounded-2xl border border-white/10 shadow-inner overflow-hidden select-none">
            {/* Top Prompt Search Bar */}
            <div className="flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/10">
              <div className="flex items-center gap-2 truncate">
                <Sparkles size={12} className="text-blue-400 shrink-0" />
                <span className="text-[11px] font-mono text-slate-300 truncate">
                  "Forecast Q3 retention by segment"
                </span>
              </div>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 shrink-0">
                AI Auto-ML
              </span>
            </div>

            {/* Metrics & Graph Snapshot */}
            <div className="my-2.5 grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/5 flex flex-col">
                <span className="text-[9px] font-mono text-slate-400">Confidence Score</span>
                <span className="text-sm font-semibold text-emerald-400 mt-0.5">98.4% High</span>
                <div className="mt-1.5 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[98%]" />
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/5 flex flex-col">
                <span className="text-[9px] font-mono text-slate-400">Latency Overhead</span>
                <span className="text-sm font-semibold text-blue-300 mt-0.5">140ms</span>
                <div className="mt-1.5 flex items-center gap-0.5">
                  <span className="h-2.5 w-1 bg-blue-400 rounded-xs" />
                  <span className="h-3.5 w-1 bg-blue-400 rounded-xs" />
                  <span className="h-2 w-1 bg-blue-400/60 rounded-xs" />
                  <span className="h-4 w-1 bg-blue-400 rounded-xs" />
                  <span className="h-3 w-1 bg-blue-400 rounded-xs" />
                </div>
              </div>
            </div>

            {/* Realtime Insight Badge */}
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-t border-white/10 pt-2">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Activity size={11} className="text-blue-400" />
                Petabyte Data Warehouse
              </span>
              <span className="text-[9px] text-emerald-300 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Live Query
              </span>
            </div>
          </div>
        );

      case 'stepper':
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#064e3b]/90 via-[#065f46] to-[#022c22] text-white rounded-2xl border border-white/10 shadow-inner overflow-hidden select-none">
            {/* Header / Step Tracker */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-emerald-300" />
                <span className="text-[11px] font-medium tracking-tight text-emerald-100">
                  Business Incorporation Flow
                </span>
              </div>
              <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200">
                Step 3 of 4
              </span>
            </div>

            {/* Stepper Timeline Visual */}
            <div className="my-2.5 flex flex-col gap-2">
              <div className="flex items-center gap-2.5 text-[11px] text-emerald-100">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span className="truncate">Entity Structure &amp; Name Approval</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-emerald-100">
                <CheckCircle2 size={13} className="text-emerald-400 shrink-0" />
                <span className="truncate">Director KYC &amp; DIN Verification</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] text-white font-medium pl-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping mr-1" />
                <span className="truncate">RoC Digital Signature Verification</span>
              </div>
            </div>

            {/* Bottom Govt MCA sync badge */}
            <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-emerald-200/80">
              <span>MCA Portal API Sync</span>
              <span className="text-emerald-300 font-medium">100% Paperless</span>
            </div>
          </div>
        );

      case 'codash':
      case 'coinvervue':
        return (
          <div className="w-full h-full p-3.5 flex flex-col justify-between bg-gradient-to-br from-[#070e1b] via-[#0c1a30] to-[#081220] text-white rounded-2xl border border-white/10 shadow-inner overflow-hidden select-none">
            {/* Top Bar: Live Session Status & Room Telemetry */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-slate-100 font-mono tracking-tight">
                  Codash Session Live
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/20">
                <span>Progress: Q6 of 12</span>
              </div>
            </div>

            {/* Meet-Inspired Dynamic Participant Layout: AI Tile + Candidate Video Tile */}
            <div className="my-2 grid grid-cols-2 gap-2 flex-1 min-h-0">
              {/* Tile 1: AI Interview Facilitator */}
              <div className="relative rounded-xl bg-white/[0.05] border border-blue-500/30 overflow-hidden flex flex-col justify-between p-2">
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-semibold">
                    AI Interviewer
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                </div>
                {/* Voice waveform animation */}
                <div className="flex items-center justify-center gap-1 py-1">
                  <span className="w-1 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-5 bg-cyan-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="w-1 h-6 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '450ms' }} />
                  <span className="w-1 h-3 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '600ms' }} />
                </div>
                <div className="text-[9px] text-slate-300 font-mono truncate">
                  "Explain your state tree..."
                </div>
              </div>

              {/* Tile 2: Candidate Video & Real-time State */}
              <div className="relative rounded-xl bg-white/[0.05] border border-white/10 overflow-hidden flex flex-col justify-between p-2">
                <div className="flex items-center justify-between text-[9px] font-mono">
                  <span className="text-slate-300 font-medium">Alex (Candidate)</span>
                  <span className="text-emerald-400 font-mono text-[9px]">Mic Active</span>
                </div>
                <div className="flex items-center justify-center py-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-500/30 border border-white/20 flex items-center justify-center text-xs font-semibold text-cyan-200">
                    A
                  </div>
                </div>
                <div className="text-[9px] text-cyan-300 font-mono bg-cyan-500/10 px-1.5 py-0.5 rounded truncate border border-cyan-400/20">
                  State: Candidate Speaking
                </div>
              </div>
            </div>

            {/* Bottom Floating Control Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono">
              <div className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                  <Mic size={10} />
                </span>
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                  <Video size={10} />
                </span>
                <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-slate-300">
                  <Code2 size={10} />
                </span>
              </div>
              <span className="text-[9px] text-slate-400 font-mono">
                No Biometrics · Ethical AI
              </span>
            </div>
          </div>
        );

      case 'audit':
      case 'fixora':
      default:
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-[#0b1329] via-[#111c38] to-[#0f172a] text-white rounded-2xl border border-white/10 shadow-inner overflow-hidden select-none">
            {/* Header: Dual Mode Toggle + Status */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-1 p-0.5 rounded-lg bg-white/[0.08] border border-white/10 text-[10px] font-mono">
                <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-medium">URL Scan</span>
                <span className="px-2 py-0.5 text-slate-300">Screenshot</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono font-semibold text-emerald-300">Score 64/100</span>
              </div>
            </div>

            {/* Diagnostic Issue Card: High Priority Item */}
            <div className="my-2 p-2.5 rounded-xl bg-white/[0.06] border border-white/10 flex flex-col gap-1.5">
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-300 font-semibold border border-rose-400/20">
                  Critical • Von Restorff Law
                </span>
                <span className="text-slate-400">Hero Section</span>
              </div>
              <div className="text-[11px] font-medium text-slate-100 truncate">
                Primary CTA blends into background
              </div>
              <div className="text-[10px] font-mono text-emerald-300 flex items-center justify-between pt-1 border-t border-white/5">
                <span>Fix: Contrast 4.5:1</span>
                <span className="text-slate-400">Est. 2m</span>
              </div>
            </div>

            {/* Conversational Prompt Anchor */}
            <div className="flex items-center justify-between text-[10px] font-mono border-t border-white/10 pt-2 text-slate-300">
              <span className="truncate text-blue-300">Ask Fixora: "Why does this matter?"</span>
              <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-200 border border-blue-400/20 shrink-0">
                AI Discuss
              </span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect && onSelect(project)}
      className="group relative flex flex-col justify-between h-full rounded-[2.6rem] sm:rounded-[2.8rem] bg-white/95 backdrop-blur-2xl border border-white/90 shadow-[0_28px_60px_-15px_rgba(0,0,0,0.08),0_10px_25px_-10px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.04] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_36px_80px_-15px_rgba(0,0,0,0.14)] cursor-pointer select-none"
    >
      <div className="flex flex-col">
        {/* LAYER 1: TOP HERO INSET (Vibrant Gradient + Specular Glass Reflection) */}
        <div className={`relative w-full h-60 sm:h-64 rounded-[2rem] bg-gradient-to-br ${theme.gradient} overflow-hidden shadow-inner`}>
          {/* Glass Specular Top Highlight (Curved liquid glass reflection) */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/10 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/40 rounded-[2rem] pointer-events-none z-10" />

          {/* Top Inset Bar: Pill Avatar + Center Category + Info Icon */}
          <div className="relative z-20 px-4 pt-3.5 flex items-center justify-between">
            {/* Top Left Project Pill */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-xs">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-[11px] font-mono font-semibold tracking-tight">
                {project.number}
              </span>
            </div>

            {/* Center Balance/Scope Pill */}
            <div className="hidden sm:inline-flex items-center px-3 py-0.5 rounded-full bg-white/20 backdrop-blur-md border border-white/25 text-white/95 text-[10px] font-mono font-semibold uppercase tracking-widest shadow-xs">
              {theme.balanceLabel}
            </div>

            {/* Top Right Circular Info Button */}
            <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xs">
              <Info size={14} className="opacity-90" />
            </div>
          </div>

          {/* Core Mockup Display Area */}
          <div className="relative w-full h-[calc(100%-42px)] transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            {project.image ? (
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            ) : (
              renderVisualMockup()
            )}
          </div>
        </div>

        {/* LAYER 2: FLOATING STRADDLE STRIP (Circular Capability Avatars Overlapping Hero & Body) */}
        <div className="-mt-5 relative z-30 flex items-center justify-center px-2">
          {/* Subtle connecting flow line behind icons for Sentinel AI */}
          {isSentinel && (
            <div className="absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-emerald-300 via-sky-300 via-amber-300 via-indigo-300 to-purple-300 -translate-y-1/2 -z-10 rounded-full opacity-60" />
          )}

          <div className="flex items-center gap-2 sm:gap-2.5">
            {theme.avatars.map((av, avIdx) => {
              const IconComponent = av.icon;
              const isHovered = isSentinel && hoveredProcessIndex === avIdx;
              return (
                <div
                  key={avIdx}
                  onMouseEnter={() => isSentinel && setHoveredProcessIndex(avIdx)}
                  onMouseLeave={() => isSentinel && setHoveredProcessIndex(null)}
                  onClick={(e) => {
                    if (isSentinel) {
                      e.stopPropagation();
                      setHoveredProcessIndex(hoveredProcessIndex === avIdx ? null : avIdx);
                    }
                  }}
                  title={av.stage || av.label}
                  className={`relative cursor-pointer w-10 h-10 sm:w-11 sm:h-11 rounded-full ${av.bg} border-2 border-white ring-2 ${isHovered ? 'ring-blue-500 scale-110 shadow-lg' : 'ring-white/60 shadow-md'} flex items-center justify-center transition-all duration-200 hover:scale-110`}
                >
                  <IconComponent size={16} className="stroke-[2.2]" />
                  {/* Micro Step indicator badge for flow-wise visual */}
                  {isSentinel && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#141416] text-[9px] font-mono font-bold text-white flex items-center justify-center border border-white shadow-xs pointer-events-none">
                      {av.step || avIdx + 1}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Floating Glass Tooltip Popover (Zero layout shift / Zero distortion) */}
          <AnimatePresence>
            {isSentinel && hoveredProcessIndex !== null && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.96 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-full mb-3.5 left-0 right-0 mx-auto w-[92%] max-w-[340px] z-50 p-3.5 rounded-2xl bg-[#0f1117]/95 backdrop-blur-xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.35)] pointer-events-none text-left"
              >
                {/* Header row in popover */}
                <div className="flex items-center justify-between pb-1.5 border-b border-white/10 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-400/30">
                      Step {theme.avatars[hoveredProcessIndex].step}
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-white/90">
                      {theme.avatars[hoveredProcessIndex].stage}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-white/50">
                    Design Process
                  </span>
                </div>

                {/* Body: How I designed this project */}
                <p className="text-xs text-white/85 leading-relaxed font-normal">
                  {theme.avatars[hoveredProcessIndex].detail}
                </p>

                {/* Arrow Pointer positioned relative to hovered icon */}
                <div 
                  className="absolute top-full -mt-1 w-2.5 h-2.5 bg-[#0f1117]/95 border-r border-b border-white/20 rotate-45 transition-all duration-200"
                  style={{
                    left: `calc(10% + ${hoveredProcessIndex * 20}%)`
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* LAYER 3: RECESSED INFO DOCKET ("Last Transaction" Pattern) */}
        <div className="mt-5 flex flex-col gap-2">
          {/* Header Row: Label & Micro Link */}
          {isSentinel ? (
            <div className="flex items-center justify-between px-1 text-xs font-mono text-[#86868b]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="uppercase tracking-wider font-semibold text-[#141416]">DESIGN PROCESS FLOW</span>
              </div>
              <span className="text-[11px] font-mono transition-colors text-blue-700 font-medium truncate max-w-[180px] text-right">
                {hoveredProcessIndex !== null 
                  ? `${theme.avatars[hoveredProcessIndex].step} ${theme.avatars[hoveredProcessIndex].stage}`
                  : '5 Steps Flow • Hover Icons'}
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-between px-1 text-xs font-mono text-[#86868b]">
              <span className="uppercase tracking-wider">PROJECT SCOPE</span>
              <span className="font-semibold text-[#141416] group-hover:text-blue-600 transition-colors inline-flex items-center gap-0.5">
                <span>Inspect</span>
                <ChevronRight size={12} />
              </span>
            </div>
          )}

          {/* Recessed Pill Card */}
          <div className="p-4 rounded-2xl sm:rounded-3xl bg-[#f8f9fc] border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-3">
            <div className="flex items-center justify-between gap-3">
              {/* Left Brand Sphere + Title + Metadata */}
              <div className="flex items-center gap-3 min-w-0">
                <div className={`w-11 h-11 rounded-2xl ${theme.sphereBg} shadow-sm border border-white/60 flex items-center justify-center text-white shrink-0`}>
                  <Layers size={20} />
                </div>
                <div className="flex flex-col min-w-0">
                  <h3 className="text-base sm:text-[17px] font-bold tracking-tight text-[#141416] group-hover:text-black transition-colors truncate">
                    {project.title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#86868b] truncate">
                    Role: <strong className="text-[#141416] font-semibold">{project.role}</strong>
                  </span>
                </div>
              </div>

              {/* Right Prominent Outcome Metric */}
              <div className="flex flex-col items-end shrink-0">
                <span className={`text-base sm:text-lg font-extrabold tracking-tight ${theme.metricColor}`}>
                  {theme.metricValue}
                </span>
                <span className="text-[9px] font-mono text-[#86868b] uppercase">
                  {theme.metricLabel}
                </span>
              </div>
            </div>

            {/* Context Narrative */}
            <p className="type-body-sm text-[#55555c] leading-relaxed line-clamp-2 pt-2 border-t border-black/[0.04]">
              {project.context || project.description}
            </p>
          </div>
        </div>
      </div>

      {/* LAYER 4: BOTTOM TACTILE FLOATING ACTION BAR */}
      <div className="mt-5 pt-3 border-t border-black/[0.04] flex items-center justify-between gap-3">
        {/* Left Domain / Scope Tag */}
        <div className="flex items-center px-3.5 py-2 rounded-full bg-white border border-black/[0.06] shadow-xs text-xs font-mono font-medium text-neutral-600 whitespace-nowrap shrink-0">
          {project.badge || 'Case Study'}
        </div>

        {/* Right Primary Glossy Black Pebble CTA Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onSelect) onSelect(project);
          }}
          className="group/btn inline-flex items-center gap-1.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#141416] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-tight shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,0,0,0.22)] hover:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5),0_12px_26px_rgba(0,0,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black whitespace-nowrap shrink-0"
          aria-label={`Explore case study for ${project.title}`}
        >
          <span className="whitespace-nowrap">Explore</span>
          <ArrowUpRight
            size={15}
            className="shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-white/80 group-hover/btn:text-white"
          />
        </button>
      </div>
    </motion.article>
  );
}
