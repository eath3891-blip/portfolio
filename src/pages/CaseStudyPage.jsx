import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Activity, 
  Trophy, 
  Cpu, 
  Clock, 
  Layers, 
  Check, 
  Share2 
} from 'lucide-react';
import { CASE_STUDIES_CONFIG } from '../config/caseStudies.config';
import SentinelAICaseStudy from './case-studies/SentinelAICaseStudy';
import FixoraCaseStudy from './case-studies/FixoraCaseStudy';
import CodashCaseStudy from './case-studies/CodashCaseStudy';

/**
 * CaseStudyPage:
 * Dedicated full-page editorial case study template for Manoj Bhatt's Featured Projects.
 * Clean Apple-inspired typography, domain-specific visual UI mockups, structured problem-solving
 * narrative, and intuitive navigation back to Projects or next case study.
 */
export default function CaseStudyPage({ projectId, onBackToProjects, onNavigateCaseStudy }) {
  // If Sentinel AI is selected, render the full bespoke Sentinel AI Senior Case Study
  if (projectId === 'sentinel-ai' || projectId === 'transorg-iq') {
    return (
      <SentinelAICaseStudy
        onBackToProjects={onBackToProjects}
        onNavigateCaseStudy={onNavigateCaseStudy}
      />
    );
  }

  // If Codash is selected, render the full bespoke Codash Senior Case Study
  if (projectId === 'codash') {
    return (
      <CodashCaseStudy
        onBackToProjects={onBackToProjects}
        onNavigateCaseStudy={onNavigateCaseStudy}
      />
    );
  }

  // If Fixora is selected, render the full bespoke Fixora Senior Case Study
  if (projectId === 'fixora') {
    return (
      <FixoraCaseStudy
        onBackToProjects={onBackToProjects}
        onNavigateCaseStudy={onNavigateCaseStudy}
      />
    );
  }

  const project = CASE_STUDIES_CONFIG[projectId] || CASE_STUDIES_CONFIG['transorg-iq'];
  const nextProject = CASE_STUDIES_CONFIG[project.nextProjectId] || CASE_STUDIES_CONFIG['transorg-iq'];

  // Scroll to top whenever the case study changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  // Render bespoke product UI mockups reflecting the actual domain
  const renderHeroMockup = () => {
    switch (project.visualType) {
      case 'analytics':
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#090d16] via-[#111827] to-[#090d16] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden select-none">
            {/* Top Prompt Search Bar */}
            <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15">
              <div className="flex items-center gap-2.5 truncate">
                <Sparkles size={16} className="text-blue-400 shrink-0" />
                <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                  "Forecast Q3 enterprise retention by client tier and churn risk"
                </span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/25 text-blue-300 shrink-0 border border-blue-400/20">
                AI Auto-ML Engine
              </span>
            </div>

            {/* Metrics & Graph Grid */}
            <div className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/5 flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Model Confidence</span>
                <span className="text-xl font-bold text-emerald-400 mt-1">98.4% High</span>
                <div className="mt-2.5 h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 w-[98%]" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/5 flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Query Latency</span>
                <span className="text-xl font-bold text-blue-300 mt-1">140ms</span>
                <div className="mt-2.5 flex items-center gap-1">
                  <span className="h-3 w-1.5 bg-blue-400 rounded-xs" />
                  <span className="h-4.5 w-1.5 bg-blue-400 rounded-xs" />
                  <span className="h-2.5 w-1.5 bg-blue-400/60 rounded-xs" />
                  <span className="h-5 w-1.5 bg-blue-400 rounded-xs" />
                  <span className="h-3.5 w-1.5 bg-blue-400 rounded-xs" />
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/5 flex flex-col">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Data Warehouse</span>
                <span className="text-xl font-bold text-purple-300 mt-1">2.4 PB</span>
                <span className="text-[11px] text-slate-400 mt-1 font-mono">14 Clustered Nodes</span>
              </div>
            </div>

            {/* Bottom Realtime Insight Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400 border-t border-white/10 pt-3">
              <span className="flex items-center gap-2 text-slate-300">
                <Activity size={13} className="text-blue-400" />
                Petabyte Data Pipeline Synced
              </span>
              <span className="text-[10px] text-emerald-300 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-400/20">
                Live Production Query
              </span>
            </div>
          </div>
        );

      case 'stepper':
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#042f24] via-[#064e3b] to-[#022c22] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden select-none">
            {/* Header / Step Tracker */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <ShieldCheck size={18} className="text-emerald-300" />
                <span className="text-xs sm:text-sm font-semibold tracking-tight text-emerald-100">
                  Business Incorporation and Legal Compliance Flow
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-400/25">
                Step 3 of 4 Active
              </span>
            </div>

            {/* Stepper Timeline Visual */}
            <div className="my-6 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-100">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Entity Structure and Name Approval (MCA Verified)</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-emerald-100">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Director Identification (DIN) and Instant Aadhaar KYC</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-white font-medium pl-0.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping mr-1" />
                <span>RoC Digital Signature Certificate Issuance in Progress</span>
              </div>
            </div>

            {/* Bottom Govt MCA sync badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-t border-white/10 pt-3 text-emerald-200/90">
              <span>MCA V3 Portal Direct API Sync</span>
              <span className="text-emerald-300 font-semibold">100% Paperless Digital Flow</span>
            </div>
          </div>
        );

      case 'tokens':
      default:
        return (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-[#240a4e] via-[#3b0764] to-[#170e36] text-white rounded-3xl border border-white/10 shadow-2xl overflow-hidden select-none">
            {/* Tournament Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Trophy size={18} className="text-amber-400" />
                <span className="text-xs sm:text-sm font-semibold tracking-tight text-purple-100">
                  Trybl Championship Finals: Mobile Esports
                </span>
              </div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/25">
                Live Lobbies
              </span>
            </div>

            {/* Matchup & Prize Card */}
            <div className="my-6 flex flex-col gap-3 p-4 rounded-2xl bg-white/[0.06] border border-white/10">
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="font-bold text-purple-200">Team Alpha Esports</span>
                <span className="text-xs font-mono text-purple-400">vs</span>
                <span className="font-bold text-purple-200">Zone Prime Legion</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-white/10">
                <span className="text-purple-300">Prize Pool</span>
                <span className="text-amber-300 font-bold">$25,000 USDT</span>
              </div>
            </div>

            {/* Wallet & Asset Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono border-t border-white/10 pt-3 text-purple-200/90">
              <span className="flex items-center gap-2">
                <Cpu size={14} className="text-purple-400" />
                Custodial Smart Contract Wallet: 0x8F4...b902
              </span>
              <span className="text-purple-300">120k+ Competitive Gamers</span>
            </div>
          </div>
        );
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="w-full min-h-screen bg-[#fbfbfd] text-[#1d1d1f] pb-36"
    >
      {/* 1. Sticky Editorial Navigation Header */}
      <header className="sticky top-0 z-40 w-full bg-[#fbfbfd]/90 backdrop-blur-md border-b border-black/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <button
            onClick={onBackToProjects}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#55555c] hover:text-[#141416] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-full px-3 py-1.5 bg-black/[0.03] hover:bg-black/[0.06]"
            aria-label="Back to all projects"
          >
            <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1 text-[#86868b] group-hover:text-[#141416]" />
            <span>Back to Projects</span>
          </button>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#86868b]">
            <span className="px-2 py-0.5 rounded bg-black/[0.05] text-[#141416] font-semibold">
              {project.number}
            </span>
            <span>{project.title}</span>
          </div>

          <button
            onClick={() => onNavigateCaseStudy && onNavigateCaseStudy(nextProject.id)}
            className="group inline-flex items-center gap-1.5 text-xs font-mono text-[#55555c] hover:text-[#141416] transition-colors"
            aria-label={`Go to next case study: ${nextProject.title}`}
          >
            <span className="hidden md:inline">Next:</span>
            <span className="font-semibold text-[#141416]">{nextProject.title}</span>
            <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 text-[#86868b]" />
          </button>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="w-full pt-12 sm:pt-16 pb-14 border-b border-black/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          {/* Eyebrow & Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="type-eyebrow text-[#86868b]">
              {project.eyebrow}
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-[#141416] bg-black/[0.05] border border-black/[0.06]">
              {project.badge}
            </span>
          </div>

          {/* Display Title & Subtitle */}
          <h1 className="type-display text-[#141416] max-w-4xl">
            {project.title}
          </h1>

          <p className="type-body-lg text-[#55555c] max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Project Metadata Chips Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-black/[0.06]">
            {project.metadata.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b]">
                  {item.label}
                </span>
                <span className="text-xs sm:text-[13px] font-medium text-[#141416] leading-snug">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Primary Visual Showcase */}
          <div className="mt-8 w-full aspect-[16/10] sm:aspect-[16/9] max-h-[540px] rounded-3xl overflow-hidden shadow-xl border border-black/10">
            {renderHeroMockup()}
          </div>
        </div>
      </section>

      {/* 3. Narrative Body Container */}
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16 sm:py-20 flex flex-col gap-20">
        {/* Executive Summary */}
        <section className="max-w-3xl">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#86868b] block mb-3">
            Executive Summary
          </span>
          <p className="text-lg sm:text-xl text-[#2c2c2e] leading-relaxed font-normal">
            {project.executiveSummary}
          </p>
        </section>

        {/* 01 The Challenge */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-black/[0.06]">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-[#86868b]">
              01 / THE CHALLENGE
            </span>
            <h2 className="type-h2 text-[#141416]">
              {project.challenge.headline}
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {project.challenge.paragraphs.map((p, idx) => (
              <p key={idx} className="type-body text-[#55555c] leading-relaxed">
                {p}
              </p>
            ))}

            {/* Friction Points Grid */}
            <div className="mt-2 p-5 sm:p-6 rounded-2xl bg-black/[0.02] border border-black/[0.06] flex flex-col gap-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b]">
                Key Friction Points Identified
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.challenge.keyFrictions.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#2c2c2e]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 02 Design Architecture & Core Workflows */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-black/[0.06]">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-[#86868b]">
              02 / SYSTEM ARCHITECTURE
            </span>
            <h2 className="type-h2 text-[#141416]">
              {project.solution.headline}
            </h2>
            <p className="type-body-sm text-[#55555c] mt-2">
              {project.solution.description}
            </p>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-4">
            {project.solution.workflowSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex flex-col sm:flex-row gap-4 items-start"
              >
                <span className="px-2.5 py-1 rounded-full bg-black text-white text-xs font-mono font-bold shrink-0">
                  {step.step}
                </span>
                <div className="flex flex-col gap-1.5">
                  <h3 className="type-h3 text-[#141416]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 03 Key Design Decisions */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-black/[0.06]">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-[#86868b]">
              03 / KEY DECISIONS
            </span>
            <h2 className="type-h2 text-[#141416]">
              Trade-offs and interface choices.
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.designDecisions.map((decision, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-black/[0.06] shadow-xs flex flex-col gap-2"
              >
                <span className="text-[10px] font-mono text-[#86868b] uppercase tracking-wider">
                  Decision 0{idx + 1}
                </span>
                <h4 className="font-semibold text-sm sm:text-[15px] text-[#141416] leading-snug">
                  {decision.title}
                </h4>
                <p className="text-xs text-[#55555c] leading-relaxed">
                  {decision.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 04 Impact & Outcomes */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-12 border-t border-black/[0.06]">
          <div className="lg:col-span-4 flex flex-col gap-2">
            <span className="text-xs font-mono font-bold text-[#86868b]">
              04 / MEASURABLE IMPACT
            </span>
            <h2 className="type-h2 text-[#141416]">
              Outcomes and business results.
            </h2>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            {/* Stat Cards Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.impact.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-black/[0.08] shadow-xs flex flex-col gap-1"
                >
                  <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#141416]">
                    {metric.value}
                  </span>
                  <span className="text-xs text-[#55555c] leading-snug">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quote Callout */}
            <div className="p-6 rounded-2xl bg-black/[0.03] border-l-4 border-black text-[#2c2c2e] text-sm sm:text-base leading-relaxed italic">
              “{project.impact.quote}”
            </div>
          </div>
        </section>

        {/* 5. Next Case Study Transition Card */}
        <section className="pt-16 border-t border-black/[0.08] flex flex-col gap-6">
          <span className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
            Explore Next Project
          </span>

          <div
            onClick={() => onNavigateCaseStudy && onNavigateCaseStudy(nextProject.id)}
            className="group p-8 sm:p-10 rounded-3xl bg-[#141418] text-white border border-white/10 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 cursor-pointer transition-all duration-300 hover:border-white/25 hover:-translate-y-1"
          >
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-[11px] font-mono text-neutral-400">
                CASE STUDY {nextProject.number}
              </span>
              <h3 className="type-h2 text-white group-hover:text-neutral-100 transition-colors">
                {nextProject.title}
              </h3>
              <p className="type-body-sm text-[#a1a1aa] leading-relaxed">
                {nextProject.subtitle}
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs transition-transform duration-200 group-hover:scale-105 shrink-0">
              <span>View Case Study</span>
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
        </section>
      </div>
    </motion.article>
  );
}
