import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Monitor, 
  Layout, 
  ShieldCheck, 
  ShieldAlert, 
  FileText, 
  CheckCircle2, 
  ChevronRight, 
  Maximize2, 
  X, 
  Eye, 
  ExternalLink, 
  Sliders, 
  Database, 
  Cpu, 
  Activity, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  Search,
  Check,
  AlertTriangle,
  History,
  Code
} from 'lucide-react';

/**
 * UI_SCREENS_CONFIG
 * 4 Key Enterprise UI Screens for Sentinel AI.
 * When you are ready to place real screen images, simply update imageSrc:
 * e.g., imageSrc: '/images/projects/sentinel-fleet.png'
 * 
 * Strict Copy Rule: Zero em dashes or en dashes in visible text.
 */
export const UI_SCREENS_CONFIG = [
  {
    id: 'fleet-control',
    screenNumber: '01',
    title: 'Fleet Control Plane',
    subtitle: 'Real-Time Observability & Fleet Directory',
    tag: 'Fleet Observability',
    imageSrc: null, // Set to your image path when ready
    designFocus: 'Information Architecture & Status Hierarchy',
    description: 'Centralized operational cockpit providing real-time visibility across all 47 autonomous production agents, active tool scopes, model versions, and real-time policy alerts.'
  },
  {
    id: 'review-docket',
    screenNumber: '02',
    title: 'Action Review Docket',
    subtitle: 'Context-Rich Human Intervention Center',
    tag: 'Human in the Loop',
    imageSrc: null, // Set to your image path when ready
    designFocus: 'Decision Confidence & Progressive Context',
    description: 'Decision surface organizing complex technical payloads into five human-readable answers: Who, Why, Target Data, Policy Rule, and Past Precedents.'
  },
  {
    id: 'policy-studio',
    screenNumber: '03',
    title: 'Policy Guardrail Studio',
    subtitle: 'Zero-Trust Boundaries & Threshold Management',
    tag: 'Policy Engine',
    imageSrc: null, // Set to your image path when ready
    designFocus: 'Visual Rule Engineering & Simulation',
    description: 'Fine-grained policy builder enabling security leads and product managers to define transactional caps, forbidden SQL mutations, and emergency kill switches.'
  },
  {
    id: 'audit-explorer',
    screenNumber: '04',
    title: 'Forensic Audit Explorer',
    subtitle: 'Cryptographically Signed Evidence Ledger',
    tag: 'Compliance & Audit',
    imageSrc: null, // Set to your image path when ready
    designFocus: 'Explainability & Compliance Verification',
    description: 'Immutable turn-by-turn verification trail recording prompt tokens, internal agent reasoning steps, reviewer signatures, and SHA-256 cryptographic hashes.'
  }
];

export default function SentinelUIScreensShowcase() {
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  const [viewMode, setViewMode] = useState('featured'); // 'featured' | 'grid'
  const [fullscreenScreen, setFullscreenScreen] = useState(null);

  const activeScreen = UI_SCREENS_CONFIG[activeScreenIdx];

  // Render high-fidelity demo interface for each screen when no image is provided
  const renderDemoInterface = (screenId, isCompact = false) => {
    switch (screenId) {
      case 'fleet-control':
        return (
          <div className="w-full h-full bg-[#0d111d] text-white flex flex-col font-mono select-none overflow-hidden text-xs">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-neutral-400 font-sans font-medium">
                  Sentinel Studio / Fleet Control Plane
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">
                  Fleet Status: 99.98% Operational
                </span>
              </div>
            </div>

            {/* Sub-Header Toolbar */}
            <div className="p-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.06] border border-white/10 text-neutral-300">
                  <Search size={13} className="text-neutral-400" />
                  <span className="text-[11px]">Filter agents by name, team, tier...</span>
                </div>
                <span className="text-[11px] text-neutral-400 hidden sm:inline">Showing 47 of 47 Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-blue-600/30 text-blue-300 border border-blue-500/30 text-[10px] font-semibold">
                  Cluster: US-East-1 Production
                </span>
              </div>
            </div>

            {/* Metrics Overview Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-4 border-b border-white/5 bg-black/20">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase">ACTIVE AGENTS</span>
                <span className="text-base font-bold text-white mt-0.5">47 Fleets</span>
                <span className="text-[9px] text-emerald-400 mt-0.5">+4 deployed this week</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase">GOVERNED ACTIONS</span>
                <span className="text-base font-bold text-blue-400 mt-0.5">1,420 / hr</span>
                <span className="text-[9px] text-neutral-400 mt-0.5">100% Policy Inspected</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase">ACTIVE INTERCEPTS</span>
                <span className="text-base font-bold text-amber-400 mt-0.5">3 Pending</span>
                <span className="text-[9px] text-amber-300 mt-0.5">Avg response: 4.2 mins</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                <span className="text-[10px] text-neutral-400 uppercase">UNAUTHORIZED MUTATIONS</span>
                <span className="text-base font-bold text-emerald-400 mt-0.5">0 Breaches</span>
                <span className="text-[9px] text-emerald-400 mt-0.5">Zero-trust active</span>
              </div>
            </div>

            {/* Live Fleet Roster Table */}
            <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto">
              <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider font-sans">
                Production Agent Roster
              </span>
              <div className="flex flex-col gap-1.5">
                {[
                  { name: 'Finance Analysis Agent', model: 'Claude 3.5 Sonnet', team: 'Finance Ops', tier: 'T3 Approval', status: 'Action Pending', color: 'text-amber-300 bg-amber-400/10 border-amber-400/30' },
                  { name: 'SecOps Remediation Bot', model: 'Llama 3 70B', team: 'InfoSec', tier: 'T4 Autonomous', status: 'Running Normal', color: 'text-emerald-300 bg-emerald-400/10 border-emerald-400/30' },
                  { name: 'Customer Support Co-pilot', model: 'GPT-4o', team: 'Support', tier: 'T2 Advise', status: 'Running Normal', color: 'text-blue-300 bg-blue-400/10 border-blue-400/30' },
                  { name: 'Catalog Sync Engine', model: 'Gemini 1.5 Pro', team: 'Product Ops', tier: 'T1 Observe', status: 'Telemetry Only', color: 'text-neutral-300 bg-neutral-400/10 border-neutral-400/30' }
                ].map((row) => (
                  <div key={row.name} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-2 hover:bg-white/[0.06] transition-colors">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                      <div className="flex flex-col min-w-0">
                        <span className="font-sans font-semibold text-white text-xs truncate">{row.name}</span>
                        <span className="text-[10px] text-neutral-400">{row.model} · {row.team}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-300 hidden sm:inline">
                        {row.tier}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${row.color}`}>
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'review-docket':
        return (
          <div className="w-full h-full bg-[#0e1220] text-white flex flex-col font-mono select-none overflow-hidden text-xs">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-neutral-400 font-sans font-medium">
                  Review Docket #DKT-8912-FIN
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] border border-amber-500/30">
                Action Pending Review
              </span>
            </div>

            {/* Review Context Card Header */}
            <div className="p-4 border-b border-white/5 bg-amber-500/[0.04] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                  <ShieldAlert size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">Sensitive Database Mutation Intercepted</h4>
                  <p className="text-[10px] text-neutral-400">Initiated by Financial Analysis Agent v2.4 at 10:37:04 UTC</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-xl bg-red-500/20 text-red-300 border border-red-500/30 font-bold">
                Risk Score: 80 (High)
              </span>
            </div>

            {/* 5-Column Decision Framework */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-4 border-b border-white/5 bg-black/20">
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[9px] text-neutral-400 uppercase block">1. AGENT WHY</span>
                <span className="font-sans font-bold text-white text-[11px] block mt-0.5">Reconcile Anomaly</span>
                <span className="text-[9px] text-neutral-400">Invoice #8912</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[9px] text-neutral-400 uppercase block">2. TARGET DATA</span>
                <span className="font-sans font-bold text-white text-[11px] block mt-0.5">Ledger DB</span>
                <span className="text-[9px] text-neutral-400">Customer Balances</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[9px] text-neutral-400 uppercase block">3. POLICY GATE</span>
                <span className="font-sans font-bold text-amber-300 text-[11px] block mt-0.5">POL-FIN-04</span>
                <span className="text-[9px] text-neutral-400">Cap above $10,000</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-[9px] text-neutral-400 uppercase block">4. EXPOSURE</span>
                <span className="font-sans font-bold text-white text-[11px] block mt-0.5">$18,450.00</span>
                <span className="text-[9px] text-neutral-400">Direct transfer wire</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 col-span-2 sm:col-span-1">
                <span className="text-[9px] text-neutral-400 uppercase block">5. PRECEDENTS</span>
                <span className="font-sans font-bold text-emerald-400 text-[11px] block mt-0.5">12 Approved</span>
                <span className="text-[9px] text-neutral-400">Reviewer: Maya Sharma</span>
              </div>
            </div>

            {/* Code / Query Payload Inspection */}
            <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-neutral-300 font-sans">
                  Proposed SQL Execution Payload
                </span>
                <span className="text-[10px] text-blue-300 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  Read Only Lock Engaged
                </span>
              </div>
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 font-mono text-[11px] text-emerald-300 leading-relaxed overflow-x-auto">
                <code>
                  UPDATE customer_ledger SET status = 'reconciled', verified_by = 'sentinel_agent_fin_02'<br />
                  WHERE transaction_id = 'TX-8912-US' AND amount = 18450.00;
                </code>
              </div>

              {/* Action Buttons Bar */}
              <div className="mt-2 pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <button className="px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/10 text-neutral-300 font-sans font-semibold text-xs border border-white/10">
                  Reject & Revoke Token
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-neutral-400 hidden sm:inline">Cryptographic token will be signed on approval</span>
                  <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-sans font-bold text-xs shadow-lg shadow-blue-600/30">
                    Approve with Token
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'policy-studio':
        return (
          <div className="w-full h-full bg-[#0b1219] text-white flex flex-col font-mono select-none overflow-hidden text-xs">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-neutral-400 font-sans font-medium">
                  Policy Guardrail Studio / Active Rulebase
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px]">
                24 Active Guardrails Enforced
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="p-3 border-b border-white/5 flex items-center gap-2 bg-white/[0.02] overflow-x-auto">
              {['All Policies (24)', 'Financial Bounds (8)', 'Data Privacy PII (6)', 'Rate Limits (5)', 'Kill Switches (5)'].map((tab, i) => (
                <span key={tab} className={`px-2.5 py-1 rounded-lg text-[10px] font-sans whitespace-nowrap ${i === 1 ? 'bg-blue-600 text-white font-bold' : 'bg-white/[0.04] text-neutral-400'}`}>
                  {tab}
                </span>
              ))}
            </div>

            {/* Policy Rule Cards */}
            <div className="p-4 flex-1 flex flex-col gap-3 overflow-y-auto">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-blue-500/30 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold">POL-FIN-04</span>
                    <span className="font-sans font-bold text-white text-xs">High Value Transaction Intercept</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">Active Enforced</span>
                </div>
                <p className="text-[11px] text-neutral-300 font-sans">
                  Any agent attempting to write or authorize transactions greater than $10,000 USD is instantly halted and routed to human approval queue.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-white/10 text-[10px]">
                  <div>
                    <span className="text-neutral-500 block">THRESHOLD</span>
                    <span className="text-white font-bold mt-0.5 block">&gt; $10,000 USD</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">ENFORCEMENT</span>
                    <span className="text-amber-300 font-bold mt-0.5 block">Halt & Docket</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">APPROVER ROLE</span>
                    <span className="text-white font-bold mt-0.5 block">Finance Lead</span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block">INTERCEPT RATE</span>
                    <span className="text-blue-300 font-bold mt-0.5 block">14 / 24h</span>
                  </div>
                </div>
              </div>

              {/* Second Rule */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-white/10 text-neutral-300 text-[10px] font-bold">POL-SEC-01</span>
                    <span className="font-sans font-bold text-neutral-200 text-xs">Zero Direct DB Mutation Gate</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">Active Enforced</span>
                </div>
                <p className="text-[11px] text-neutral-400 font-sans">
                  Autonomous agents cannot execute direct DDL commands or table drop schemas across production database clusters.
                </p>
              </div>
            </div>
          </div>
        );

      case 'audit-explorer':
        return (
          <div className="w-full h-full bg-[#0a0f18] text-white flex flex-col font-mono select-none overflow-hidden text-xs">
            {/* Window Top Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-[11px] text-neutral-400 font-sans font-medium">
                  Forensic Audit Trail / Immutable Cryptographic Ledger
                </span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px]">
                SOC2 / ISO 27001 Verified
              </span>
            </div>

            {/* Search and Export Bar */}
            <div className="p-3.5 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 bg-white/[0.02]">
              <div className="flex items-center gap-2">
                <span className="text-neutral-400 text-[11px]">Audit Range: Last 24 Hours</span>
                <span className="text-neutral-600">·</span>
                <span className="text-blue-400 text-[11px]">18,940 Cryptographic Entries</span>
              </div>
              <button className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-white font-sans font-semibold text-[10px] border border-white/10">
                Export Compliance Bundle
              </button>
            </div>

            {/* Audit Log Table */}
            <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto">
              <div className="grid grid-cols-5 text-[10px] text-neutral-400 font-bold uppercase pb-1 border-b border-white/5">
                <span>TIME (UTC)</span>
                <span>AGENT</span>
                <span>ACTION & TARGET</span>
                <span>STATUS</span>
                <span className="text-right">SHA-256 HASH</span>
              </div>

              {[
                { time: '10:37:04', agent: 'Finance Agent', action: 'Ledger Mutation (TX-8912)', status: 'Approved (Maya S.)', hash: '0x7f8a...c442', statusColor: 'text-emerald-300' },
                { time: '10:36:12', agent: 'Finance Agent', action: 'Policy Gate POL-FIN-04', status: 'Halted to Docket', hash: '0x992b...18aa', statusColor: 'text-amber-300' },
                { time: '10:35:48', agent: 'SecOps Bot', action: 'IP Quarantined (192.168.1.4)', status: 'Auto Executed', hash: '0x12ef...89cc', statusColor: 'text-blue-300' },
                { time: '10:33:20', agent: 'Catalog Sync', action: 'Read Replica Inventory', status: 'Normal Read', hash: '0x44ab...e911', statusColor: 'text-neutral-400' }
              ].map((row) => (
                <div key={row.hash} className="grid grid-cols-5 items-center text-[11px] py-2 border-b border-white/5 hover:bg-white/[0.02]">
                  <span className="text-neutral-400">{row.time}</span>
                  <span className="font-sans font-semibold text-white truncate">{row.agent}</span>
                  <span className="text-neutral-300 truncate">{row.action}</span>
                  <span className={`font-semibold ${row.statusColor}`}>{row.status}</span>
                  <span className="font-mono text-neutral-500 text-[10px] text-right truncate">{row.hash}</span>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 select-none">
      {/* Editorial Header with Section Eyebrow & View Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black/[0.08] pb-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-blue-600">
              PRODUCT SURFACES SHOWCASE
            </span>
            <span className="text-xs font-mono text-[#86868b]">/</span>
            <span className="text-xs font-mono text-[#86868b]">4 CORE SCREENS</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-semibold text-[#111113] tracking-tight">
            Key product interfaces in practice.
          </h3>
          <p className="text-base text-[#55555c] max-w-2xl leading-relaxed">
            Four signature interfaces designed to give enterprise operators total observability, fine-grained policy control, and human intervention capabilities.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-black/[0.04] border border-black/[0.06] shrink-0 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('featured')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              viewMode === 'featured'
                ? 'bg-white text-[#111115] font-bold shadow-xs'
                : 'text-[#66666e] hover:text-[#111115]'
            }`}
          >
            Featured View
          </button>
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
              viewMode === 'grid'
                ? 'bg-white text-[#111115] font-bold shadow-xs'
                : 'text-[#66666e] hover:text-[#111115]'
            }`}
          >
            View All 4 Screens
          </button>
        </div>
      </div>

      {/* FEATURED VIEW: Tabbed Screen Switcher & Big Display Frame */}
      {viewMode === 'featured' ? (
        <div className="flex flex-col gap-6">
          {/* Horizontal Screen Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {UI_SCREENS_CONFIG.map((screen, idx) => {
              const isSelected = activeScreenIdx === idx;
              return (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreenIdx(idx)}
                  className={`group cursor-pointer p-4 rounded-2xl text-left flex flex-col justify-between gap-2.5 transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#111115] text-white border-[#111115] shadow-lg ring-2 ring-blue-500/40 -translate-y-0.5'
                      : 'bg-white text-[#222226] border-black/[0.08] hover:border-blue-400 hover:shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-blue-400' : 'text-blue-600'}`}>
                      SCREEN {screen.screenNumber}
                    </span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-white/10 text-neutral-200' : 'bg-black/[0.04] text-[#55555c]'}`}>
                      {screen.tag}
                    </span>
                  </div>
                  <span className="font-display font-semibold text-sm tracking-tight leading-snug">
                    {screen.title}
                  </span>
                  <div className={`pt-2 border-t flex items-center justify-between w-full text-[10px] font-mono ${
                    isSelected ? 'border-white/15 text-blue-300' : 'border-black/[0.06] text-[#86868b] group-hover:text-blue-600'
                  }`}>
                    <span>{isSelected ? 'Active Preview' : 'Click to preview'}</span>
                    <ChevronRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Screen Large Studio Frame */}
          <div className="w-full rounded-[2.5rem] bg-[#0d111d] border border-white/15 shadow-2xl overflow-hidden flex flex-col">
            {/* Top Frame Bar with metadata and Fullscreen action */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-black/60 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full bg-blue-600/30 text-blue-300 border border-blue-400/30 text-xs font-mono font-bold">
                  SCREEN {activeScreen.screenNumber}
                </span>
                <div>
                  <h4 className="text-white font-semibold text-base font-sans tracking-tight">
                    {activeScreen.title}
                  </h4>
                  <p className="text-neutral-400 text-xs font-mono">
                    Focus: {activeScreen.designFocus}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-mono text-neutral-400 hidden md:inline">
                  Interactive Demo Preview
                </span>
                <button
                  onClick={() => setFullscreenScreen(activeScreen)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-mono text-white transition-colors border border-white/10"
                  title="Expand to Fullscreen"
                >
                  <Maximize2 size={13} />
                  <span>Expand</span>
                </button>
              </div>
            </div>

            {/* Screen Content Viewport: Renders Image if supplied, otherwise renders bespoke Demo UI */}
            <div className="w-full h-[480px] sm:h-[560px] md:h-[620px] bg-[#070a12] relative overflow-hidden">
              {activeScreen.imageSrc ? (
                <img
                  src={activeScreen.imageSrc}
                  alt={activeScreen.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                renderDemoInterface(activeScreen.id)
              )}
            </div>

            {/* Bottom Screen Narrative & Design Details */}
            <div className="p-6 sm:p-8 bg-[#111728] border-t border-white/10 flex flex-col md:flex-row justify-between items-start gap-6">
              <div className="flex flex-col gap-1.5 max-w-xl">
                <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                  DESIGN RATIONALE & UX DECISION
                </span>
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-sans">
                  {activeScreen.description}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs font-mono text-neutral-300 max-w-sm shrink-0 flex flex-col gap-1">
                <span className="text-[10px] text-blue-400 uppercase font-semibold">CUSTOM IMAGE SLOT</span>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  To place your screenshot, set <code className="text-blue-300">imageSrc</code> in <code className="text-neutral-200">UI_SCREENS_CONFIG</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* GRID VIEW: All 4 Screens side-by-side */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {UI_SCREENS_CONFIG.map((screen, idx) => (
            <div
              key={screen.id}
              className="rounded-3xl bg-[#0d111d] border border-white/15 shadow-xl overflow-hidden flex flex-col"
            >
              {/* Card Header */}
              <div className="p-4 bg-black/60 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded bg-blue-600/30 text-blue-300 border border-blue-400/30 text-[10px] font-mono font-bold">
                    SCREEN {screen.screenNumber}
                  </span>
                  <span className="font-semibold text-white text-sm font-sans">
                    {screen.title}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setActiveScreenIdx(idx);
                    setViewMode('featured');
                  }}
                  className="text-xs font-mono text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  <span>Open</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              {/* Viewport Frame */}
              <div className="w-full h-80 bg-[#070a12] relative overflow-hidden">
                {screen.imageSrc ? (
                  <img
                    src={screen.imageSrc}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  renderDemoInterface(screen.id, true)
                )}
              </div>

              {/* Card Description */}
              <div className="p-5 bg-[#111728] border-t border-white/10 flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-blue-400 uppercase font-semibold">
                  {screen.tag} · {screen.designFocus}
                </span>
                <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-2">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FULLSCREEN PREVIEW MODAL */}
      <AnimatePresence>
        {fullscreenScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setFullscreenScreen(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-5xl max-h-[90vh] rounded-3xl bg-[#0d111d] border border-white/20 shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 sm:p-5 bg-black/60 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded bg-blue-600/30 text-blue-300 border border-blue-400/30 text-xs font-mono font-bold">
                    SCREEN {fullscreenScreen.screenNumber}
                  </span>
                  <span className="text-white font-bold text-base sm:text-lg">
                    {fullscreenScreen.title}
                  </span>
                </div>
                <button
                  onClick={() => setFullscreenScreen(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="w-full h-[600px] bg-[#070a12] relative overflow-hidden">
                {fullscreenScreen.imageSrc ? (
                  <img
                    src={fullscreenScreen.imageSrc}
                    alt={fullscreenScreen.title}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  renderDemoInterface(fullscreenScreen.id)
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
