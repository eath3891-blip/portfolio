import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Activity, 
  Sparkles, 
  FileText, 
  UploadCloud, 
  Clock, 
  Users, 
  Building2, 
  Layers, 
  Search, 
  AlertCircle, 
  Check, 
  ChevronRight, 
  HelpCircle, 
  ExternalLink, 
  Laptop, 
  Smartphone, 
  MessageSquare, 
  RefreshCw, 
  Sliders, 
  Database, 
  Server, 
  GitBranch, 
  Eye, 
  Scale, 
  Target, 
  Zap, 
  Workflow, 
  TrendingUp, 
  Compass, 
  ShieldAlert, 
  AlertTriangle,
  Send,
  CreditCard,
  FileCheck2,
  Share2,
  Cpu,
  ZoomIn,
  X,
  Maximize2,
  Copy
} from 'lucide-react';

/**
 * Editorial Image Placeholder Component
 * Built specifically for senior product design portfolios:
 * Features architectural gridlines, clear technical labeling, 
 * metadata, aspect-ratio enforcement, and interactive callout annotations.
 */
function ImagePlaceholder({ 
  title, 
  caption, 
  description, 
  aspect = 'aspect-[16/9]', 
  badge = 'WEB EXPERIENCE',
  annotations = [],
  imageSrc = null,
  onImageClick = null,
  objectFit = 'object-contain',
  imgAspect = null
}) {
  const [activeAnnotation, setActiveAnnotation] = useState(null);

  return (
    <div className="w-full flex flex-col gap-2.5 sm:gap-3 my-4 sm:my-6">
      <div className={`relative w-full ${imageSrc && !aspect ? '' : aspect} rounded-xl sm:rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden group shadow-lg flex flex-col justify-between ${imageSrc ? 'p-0' : 'p-4 sm:p-6 md:p-8 select-none'}`}>
        
        {/* Subtle geometric blueprint grid for placeholder */}
        {!imageSrc && (
          <div 
            className="absolute inset-0 opacity-[0.07] pointer-events-none" 
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
              backgroundSize: '24px 24px'
            }}
          />
        )}
        
        {/* Corner framing indicators */}
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t border-l border-emerald-500/50 z-20 pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-2.5 sm:w-3 h-2.5 sm:h-3 border-t border-r border-emerald-500/50 z-20 pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 sm:bottom-3 sm:left-3 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b border-l border-emerald-500/50 z-20 pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 w-2.5 sm:w-3 h-2.5 sm:h-3 border-b border-r border-emerald-500/50 z-20 pointer-events-none" />

        {/* Top Header of Frame */}
        <div className={`relative z-20 flex items-center justify-between w-full gap-2 ${imageSrc ? 'px-3 sm:px-4 py-2 sm:py-3 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800/80' : ''}`}>
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-[9px] sm:text-[10px] md:text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full shrink-0 truncate max-w-[170px] xs:max-w-none">
              {badge}
            </span>
            {imageSrc && (
              <span className="text-xs font-medium text-neutral-300 hidden md:inline ml-1 font-mono truncate max-w-sm">
                {title}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-1.5 shrink-0">
            {imageSrc ? (
              <button
                type="button"
                onClick={() => onImageClick && onImageClick({ src: imageSrc, title, caption, badge })}
                className="inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-[11px] font-mono text-neutral-300 hover:text-white bg-neutral-800/90 hover:bg-neutral-700/90 border border-neutral-700 px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg transition-colors cursor-pointer touch-manipulation"
                title="Expand screenshot"
              >
                <Maximize2 size={12} className="text-emerald-400 shrink-0" />
                <span className="hidden xs:inline sm:inline">Expand</span>
              </button>
            ) : (
              <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 tracking-tight">
                IMAGE PLACEHOLDER
              </span>
            )}
          </div>
        </div>

        {/* Center Title or Real Image */}
        {imageSrc ? (
          <div 
            className="relative w-full overflow-hidden bg-neutral-950/50 flex items-center justify-center p-2 sm:p-4 cursor-pointer group/img"
            onClick={() => onImageClick && onImageClick({ src: imageSrc, title, caption, badge })}
          >
            <img 
              src={imageSrc} 
              alt={title} 
              className={`w-full ${imgAspect || 'max-h-[340px] sm:max-h-[460px] md:max-h-[540px]'} ${objectFit} rounded-lg transition-transform duration-300 group-hover/img:scale-[1.008]`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
              <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-neutral-900/95 text-white border border-neutral-700 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono flex items-center gap-1.5 shadow-xl">
                <ZoomIn size={13} className="text-emerald-400" />
                Click to view full size
              </span>
            </div>
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-4 px-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-neutral-800/80 border border-neutral-700/80 flex items-center justify-center text-emerald-400 mb-2.5 sm:mb-3 shadow-inner">
              <Laptop size={20} className="sm:w-[22px] sm:h-[22px]" />
            </div>
            <h4 className="text-sm sm:text-base md:text-lg font-semibold text-neutral-100 tracking-tight mb-1">
              [{title}]
            </h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-neutral-400 max-w-md leading-relaxed">
              {description}
            </p>
          </div>
        )}

        {/* Annotations overlay (if supplied) */}
        {annotations.length > 0 && (
          <div className={`relative z-10 ${imageSrc ? 'px-3 sm:px-4 py-2 sm:py-3 bg-neutral-950/90 border-t border-neutral-800/80' : 'pt-3 sm:pt-4 border-t border-neutral-800/80'} flex flex-wrap gap-1.5 sm:gap-2 items-center`}>
            <span className="text-[9px] sm:text-[10px] font-mono text-neutral-400 uppercase tracking-wider mr-1 shrink-0">
              Key Decisions:
            </span>
            {annotations.map((ann, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveAnnotation(activeAnnotation === idx ? null : idx);
                }}
                className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border transition-all text-left flex items-start sm:items-center gap-1.5 leading-tight ${
                  activeAnnotation === idx 
                    ? 'bg-emerald-500 text-black border-emerald-400 font-medium' 
                    : 'bg-neutral-800/90 text-neutral-300 border-neutral-700 hover:border-neutral-600'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1 sm:mt-0" />
                <span>{ann}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Caption beneath placeholder */}
      {caption && (
        <p className="text-[11px] sm:text-xs text-neutral-500 font-mono tracking-tight px-1 flex items-start gap-1.5 leading-snug">
          <span className="text-emerald-600 font-semibold shrink-0">FIG:</span>
          <span>{caption}</span>
        </p>
      )}
    </div>
  );
}

/**
 * RegisterKaroCaseStudy
 * Complete Senior Product Design Case Study
 * 
 * Strict Constraint: Zero em dashes and zero en dashes anywhere across copy or code.
 */
export default function RegisterKaroCaseStudy({ onBackToProjects, onNavigateCaseStudy }) {
  const [activeNav, setActiveNav] = useState('context');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Interactive state for Journey Map
  const [selectedJourneyStage, setSelectedJourneyStage] = useState(4); // Default: Upload Documents

  // Interactive state for Edge Cases
  const [selectedEdgeCase, setSelectedEdgeCase] = useState(0);

  // Interactive state for Friction Vectors
  const [selectedFrictionVector, setSelectedFrictionVector] = useState(0);

  const [modalImage, setModalImage] = useState(null);

  // 10 Chapter anchors for the sticky sub-navigation
  const chapters = [
    { id: 'context', label: '01 Context' },
    { id: 'discovery', label: '02 Discovery' },
    { id: 'problem', label: '03 Problem' },
    { id: 'product-direction', label: '04 Direction' },
    { id: 'web-mobile', label: '05 Onboarding' },
    { id: 'system-thinking', label: '06 Systems' },
    { id: 'technical-collaboration', label: '07 Collaboration' },
    { id: 'future-opportunity', label: '08 Future Scope' },
    { id: 'business-impact', label: '09 Impact' },
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

      const scrollPosition = window.scrollY + 160;
      for (let i = chapters.length - 1; i >= 0; i--) {
        const element = document.getElementById(chapters[i].id);
        if (element) {
          const top = element.offsetTop;
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
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 4 Friction Vectors Mapped from Discovery Research
  const frictionVectors = [
    {
      id: 'docs',
      tag: 'INPUT FRICTION',
      title: 'Unclear Document Prerequisites',
      hesitation: 'Customers were asked to upload documents without knowing format, file size, or acceptable proofs (e.g. voter ID vs utility bill).',
      bottleneck: 'Internal legal team spent 40% of their time chasing rejected or blurry document re-uploads through manual calls and emails.',
      solution: 'Visual preview checklist with specimen examples, multi-format validation, and instant legible quality feedback.',
      metric: '42% faster initial document verification'
    },
    {
      id: 'pricing',
      tag: 'FINANCIAL ANXIETY',
      title: 'Statutory Fee Sticker Shock',
      hesitation: 'Users feared hidden costs after seeing flat marketing slogans clashed with government stamp duties and variable RoC fees.',
      bottleneck: 'High checkout cart abandonment when unannounced statutory taxes and DSC token fees appeared on the final payment screen.',
      solution: 'Transparent real-time calculator separating government fees from professional retainers upfront before payment.',
      metric: '28% reduction in checkout drop-off'
    },
    {
      id: 'blackhole',
      tag: 'PROCESS UNCERTAINTY',
      title: 'The Asynchronous "Black Hole"',
      hesitation: 'After payment and submission, founders waited in complete silence for 4 to 7 business days with zero status feedback.',
      bottleneck: 'Customer support queues flooded with repetitive "What is my status?" inquiries, distracting CAs from actual filings.',
      solution: 'Live 5-stage milestone tracker with transparent SLA expectations and multi-channel notification webhooks.',
      metric: '65% drop in routine status support calls'
    },
    {
      id: 'query',
      tag: 'REGULATORY RISK',
      title: 'MCA Resubmission Time Clock',
      hesitation: 'Government resubmission queries (e.g. name similarity or NOC defects) sounded like legal rejections, causing founder panic.',
      bottleneck: 'Strict 15-day statutory clock: missed deadlines forfeited government challan fees and forced restart from scratch.',
      solution: 'Actionable emergency alert banner with plain-language explanation of the MCA query and one-click replacement upload.',
      metric: 'Zero client filings forfeited to MCA timeout'
    }
  ];

  // 9-Stage User Journey Data
  const journeyStages = [
    {
      num: '01',
      name: 'Discover',
      customer: 'Find legal registration services tailored to business scale without confusing legalese.',
      business: 'Capture high-intent traffic and clarify service scope early.',
      system: 'Service catalog indexing, metadata categorization, entry channel attribution.'
    },
    {
      num: '02',
      name: 'Select Service',
      customer: 'Choose between Private Limited, LLP, OPC, or Trademark with transparent pricing.',
      business: 'Guide users toward the correct legal entity structure to minimize cancellations.',
      system: 'Dynamic package rules, jurisdictional requirement matrix, price breakdown engine.'
    },
    {
      num: '03',
      name: 'Understand Requirements',
      customer: 'Know exactly which papers, signatures, and timeline milestones will be needed upfront.',
      business: 'Set clear turnaround expectations and reduce mid-flight drop-offs.',
      system: 'Pre-requisite checklist API, compliance checklist template generator.'
    },
    {
      num: '04',
      name: 'Submit Details',
      customer: 'Input company name suggestions, director info, and capital details in bite-sized chunks.',
      business: 'Capture structured application data to accelerate government MCA filings.',
      system: 'Multi-step draft preservation, schema validation, MCA name search integration.'
    },
    {
      num: '05',
      name: 'Upload Documents',
      customer: 'Submit PAN, Aadhaar, bank statements, and address proof with instant quality feedback.',
      business: 'Reduce manual follow-ups and eliminate invalid or illegible document rejections.',
      system: 'Multi-file bucket storage, optical verification hooks, rejection tag taxonomy.'
    },
    {
      num: '06',
      name: 'Payment',
      customer: 'Pay professional fees and government challan costs with clear milestone breakdown.',
      business: 'Secure commitment before kicking off government registration work.',
      system: 'Payment gateway integration, split-escrow support, invoice generation.'
    },
    {
      num: '07',
      name: 'Processing',
      customer: 'Have confidence that legal specialists and MCA officers are working on the filing.',
      business: 'Balance team workload and track SLA performance per application.',
      system: 'Operations queue dispatcher, case allocation, government API webhook sync.'
    },
    {
      num: '08',
      name: 'Status Updates',
      customer: 'Get proactive alerts when DIN is generated, Name is approved, or certificate is ready.',
      business: 'Dramatically reduce inbound status calls and repetitive support tickets.',
      system: 'Cross-channel event triggers (Web, Mobile, WhatsApp), milestone state machine.'
    },
    {
      num: '09',
      name: 'Completion',
      customer: 'Download Certificate of Incorporation, PAN, TAN, and corporate documents in one vault.',
      business: 'Transition customer into ongoing compliance, GST, and annual filing retention.',
      system: 'Encrypted document vault, annual compliance calendar triggers, review hooks.'
    }
  ];

  // 6 Edge Cases Data
  const edgeCases = [
    {
      title: 'Document Rejected',
      badge: 'COMPLIANCE',
      flow: ['Notify user with specific defect reason', 'Request instant replacement upload', 'Update application state to Pending Action'],
      rationale: 'Generic "verification failed" notices cause panic. Specifying the exact defect (e.g. "Signature on PAN blurred") prevents repeat rejections.'
    },
    {
      title: 'Payment Failed',
      badge: 'FINANCIAL',
      flow: ['Preserve full draft application data', 'Allow instant retry with alternative method', 'Prevent restarting multi-step onboarding'],
      rationale: 'Never force a user to re-enter director information because a bank OTP timed out. The draft state must persist safely.'
    },
    {
      title: 'User Drops Off',
      badge: 'ABANDONMENT',
      flow: ['Auto-save progress at field level', 'Send contextual resumption alert', 'Resume from exact step on any device'],
      rationale: 'Users often stop to locate a utility bill. The system should pick up on mobile or web seamlessly without data loss.'
    },
    {
      title: 'Govt Requests More Info',
      badge: 'MCA RESUBMISSION',
      flow: ['Notify customer within 15 minutes', 'Explain official MCA query in plain words', 'Set clear resubmission deadline'],
      rationale: 'Government MCA queries carry strict 15-day statutory clocks. Turning legal jargon into clear guidance protects the incorporation.'
    },
    {
      title: 'Status Delayed',
      badge: 'TIMELINE',
      flow: ['Proactively display revised timeline', 'Explain external government bottleneck', 'Avoid inbound panic support calls'],
      rationale: 'When the Ministry portal slows down, silence breeds frustration. Proactive transparency eliminates redundant support volume.'
    },
    {
      title: 'Human Help Required',
      badge: 'ESCALATION',
      flow: ['Escalate directly to specialized CA or legal counsel', 'Preserve all past interaction context', 'Continue seamlessly in thread'],
      rationale: 'When high-touch intervention is needed, the customer should never have to repeat their story from scratch.'
    }
  ];

  // WhatsApp Future Concept Steps
  const waSteps = [
    {
      step: '01',
      title: 'Service Discovery',
      msg: 'Hi Manoj! Welcome to RegisterKaro. Which service can we help you register today?',
      options: ['Company Incorporation', 'Trademark Filing', 'GST Registration', 'MSME Certificate']
    },
    {
      step: '02',
      title: 'Package Selection',
      msg: 'Great choice! Here are our transparent packages for Private Limited Incorporation:',
      options: ['Basic (Name + Incorporation)', 'Standard (Name + Inc + GST)', 'Premium (Complete Compliance Suite)']
    },
    {
      step: '03',
      title: 'Detail & Document Capture',
      msg: 'Please share your proposed company name and snap a photo of your PAN card directly here:',
      options: ['[Attach PAN Photo]', '[Attach Aadhaar PDF]', '[Submit 2 Name Choices]']
    },
    {
      step: '04',
      title: 'Real-Time State Telemetry',
      msg: 'MCA Update: Your company name "Apex Technologies Pvt Ltd" has been approved! RoC filing initiated.',
      options: ['View Milestone Tracker', 'Chat with Legal Specialist', 'Download Challan Receipt']
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbfbfd] text-[#1d1d1f] font-sans selection:bg-emerald-500 selection:text-white pb-36 overflow-x-hidden">
      
      {/* ========================================================================= */}
      {/* 00: STICKY SUB-NAVIGATION & READING PROGRESS                             */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#fbfbfd]/90 border-b border-black/[0.06] transition-all">
        {/* Row 1: Global Navigation & Case Study Identity */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between w-full">
          {/* Left: Back to Projects button */}
          <button
            onClick={onBackToProjects}
            className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#55555c] hover:text-[#141416] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-full px-3 py-1.5 bg-black/[0.03] hover:bg-black/[0.06] cursor-pointer"
            aria-label="Back to all projects"
          >
            <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1 text-[#86868b] group-hover:text-[#141416]" />
            <span>Back to Projects</span>
          </button>

          {/* Middle: Project title metadata */}
          <div className="hidden md:flex items-center gap-2.5 text-xs font-mono text-[#86868b]">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-700 font-semibold border border-emerald-500/20">
              PRODUCT DESIGN / CASE STUDY
            </span>
            <span className="font-semibold text-[#141416]">RegisterKaro</span>
            <span className="text-black/30">/</span>
            <span>Customer Onboarding Ecosystem</span>
          </div>

          {/* Right: Role, Timeline & Share Action */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider">Role</div>
              <div className="text-xs font-semibold text-[#141416]">Product Designer</div>
            </div>
            <div className="h-6 w-px bg-black/[0.08] hidden sm:block" />
            <div className="text-right hidden sm:block">
              <div className="text-[11px] font-mono text-[#86868b] uppercase tracking-wider">Timeline</div>
              <div className="text-xs font-semibold text-[#141416]">2025 · Case Study</div>
            </div>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-black/10 text-xs font-medium text-neutral-600 hover:text-black hover:bg-black/5 transition-all ml-1 cursor-pointer"
              title="Copy share link"
            >
              {copiedLink ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>
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
                    className={`px-2 py-1 xl:px-2.5 rounded-full text-[11px] xl:text-[11.5px] font-mono transition-all duration-200 whitespace-nowrap shrink-0 lg:shrink-0 focus:outline-none cursor-pointer ${
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
            className="absolute bottom-0 left-0 h-[2px] bg-emerald-600 transition-all duration-150 pointer-events-none"
            style={{ width: `${scrollProgress}%` }}
          />
        </nav>
      </header>

      {/* Main Editorial Case Study Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-14 md:pt-20 flex flex-col gap-14 sm:gap-20 md:gap-28">

        {/* ========================================================================= */}
        {/* CHAPTER 01: CONTEXT (Hero + Opening Hook + Where It Started)              */}
        {/* ========================================================================= */}
        <section id="context" className="flex flex-col gap-16 scroll-mt-28">
          
          {/* Hero Section */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold text-emerald-700 tracking-wider uppercase bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                CASE STUDY / PRODUCT DESIGN
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-semibold tracking-tight text-[#111827] leading-[1.1]">
              RegisterKaro
              <span className="block text-neutral-700 mt-1 sm:mt-2 font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Customer Onboarding Transformation
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-neutral-800 leading-relaxed max-w-3xl border-l-2 border-emerald-500 pl-4 sm:pl-5 my-2">
              "From fragmented WhatsApp conversations to a structured digital onboarding ecosystem."
            </p>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl font-sans">
              RegisterKaro helps customers navigate business registrations, compliance, and related corporate services. When I started looking at the onboarding experience, the challenge wasn't simply how the interface looked: it was how the entire customer journey worked across people, channels, and internal operations.
            </p>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-black/[0.08] text-xs font-mono">
              <div>
                <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">ROLE</span>
                <span className="font-semibold text-neutral-900">Product Designer</span>
              </div>
              <div className="md:col-span-1">
                <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">FOCUS</span>
                <span className="font-semibold text-neutral-900 leading-tight block">
                  UX / Product Design / Systems Thinking / Product Strategy
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">DOMAIN</span>
                <span className="font-semibold text-neutral-900">LegalTech / SaaS / B2C Services</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">PLATFORM</span>
                <span className="font-semibold text-neutral-900">Web + Mobile + Conversational Experience</span>
              </div>
              <div>
                <span className="text-neutral-400 block mb-1 uppercase tracking-wider text-[10px]">STATUS</span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 inline-block">
                  Concept / Product Evolution
                </span>
              </div>
            </div>

            {/* Hero Visual: Timeline / Evolution Graphic */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-neutral-950 text-white border border-neutral-800 shadow-xl overflow-hidden relative">
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                  <span className="text-xs font-mono font-semibold text-emerald-400 tracking-wider uppercase">
                    PRODUCT ARCHITECTURE EVOLUTION
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500">
                    Systemic Progression
                  </span>
                </div>

                {/* 5 Milestone Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 relative">
                  {[
                    { title: 'WHATSAPP GROUPS', stage: 'Where It Started', note: 'High friction manual chats', tag: 'Legacy' },
                    { title: 'WEB EXPERIENCE', stage: 'First Milestone', note: 'Structured complex forms', tag: 'Shipped' },
                    { title: 'MOBILE EXPERIENCE', stage: 'Second Milestone', note: 'Continuous status tracking', tag: 'Shipped' },
                    { title: 'CONNECTED ECOSYSTEM', stage: 'Core Architecture', note: 'Shared customer state', tag: 'System' },
                    { title: 'FUTURE: AUTOMATED CONVERSATIONAL', stage: 'Next Horizon', note: 'WhatsApp-first bot flow', tag: 'Vision' }
                  ].map((step, idx) => (
                    <div 
                      key={idx} 
                      className={`p-4 rounded-2xl border flex flex-col justify-between transition-all ${
                        idx === 4 
                          ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200' 
                          : 'bg-neutral-900/60 border-neutral-800 text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                        <span className="text-neutral-500 font-bold">0{idx + 1}</span>
                        <span className={`px-2 py-0.5 rounded-full ${
                          idx === 4 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-neutral-800 text-neutral-400'
                        }`}>
                          {step.tag}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold tracking-tight text-white mb-1">
                        {step.title}
                      </h4>
                      <p className="text-[11px] text-neutral-400 leading-snug">
                        {step.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* The Opening Hook */}
          <div className="flex flex-col gap-8 pt-8 border-t border-black/[0.06]">
            <span className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
              01.1 THE OPENING HOOK
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              "The problem wasn't that customers didn't want to onboard.
              The problem was how much work onboarding required from them: and from the team."
            </h2>

            {/* Visual 5-Node Representation of Old Experience */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col gap-6">
              <span className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
                FORMER WORKFLOW FRICTION MAP
              </span>

              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
                {[
                  { label: 'CUSTOMER', desc: 'Starts with high intent' },
                  { label: 'WhatsApp Group', desc: 'Unstructured text thread' },
                  { label: 'Manual Conversations', desc: 'Repetitive explanations' },
                  { label: 'Documents', desc: 'Loose PDFs and photos' },
                  { label: 'Internal Follow-ups', desc: 'Chasing missing details' },
                  { label: 'Service Completion', desc: 'Delayed incorporation' }
                ].map((node, i) => (
                  <React.Fragment key={i}>
                    <div className="w-full md:w-auto flex-1 p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-xs flex flex-col items-center">
                      <span className="text-xs font-bold font-mono text-neutral-900">{node.label}</span>
                      <span className="text-[10px] text-neutral-500 mt-1">{node.desc}</span>
                    </div>
                    {i < 5 && (
                      <span className="text-neutral-300 md:rotate-0 rotate-90 font-mono text-sm">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Small Annotations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-4 border-t border-neutral-200 text-xs text-neutral-600 font-sans">
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>Information was spread across fragmented chat threads.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>Documents were exchanged manually without real-time validation.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>Status depended heavily on time-consuming human follow-ups.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>Customer context could get fragmented between shifts.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>Scaling customer volume strictly required scaling operational headcount.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Where it started */}
          <div className="flex flex-col gap-8 pt-8 border-t border-black/[0.06]">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-200 text-neutral-700 font-semibold uppercase">
                EXISTING
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
                Where it started
              </h3>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              Before the digital onboarding experience evolved, customers were often onboarded through WhatsApp groups and manual conversations. While WhatsApp provided immediate access, it placed an immense cognitive burden on the operational team to keep customer records organized.
            </p>

            {/* Human-centered conversational fragments around old workflow */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white border border-neutral-800 relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-6">
                <span className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
                  REAL-WORLD CONVERSATIONAL FRICTION
                </span>

                {/* Floating Quotes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Which document do I need?",
                    "Did you receive my document?",
                    "What happens next?",
                    "When will this be completed?",
                    "Can I get an update?"
                  ].map((quote, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700 text-xs font-mono text-emerald-300 flex items-center gap-2.5">
                      <MessageSquare size={14} className="shrink-0 text-emerald-400" />
                      <span>"{quote}"</span>
                    </div>
                  ))}
                </div>

                {/* Highlighted Observation Box */}
                <div className="mt-4 p-5 rounded-2xl bg-neutral-800/60 border-l-4 border-emerald-400 flex flex-col gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    MY OBSERVATION
                  </span>
                  <p className="text-base sm:text-lg font-serif italic text-neutral-100 leading-relaxed">
                    "The channel wasn't necessarily the problem. The problem was that the process depended too heavily on people to keep the channel organised."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 02: DISCOVERY (Research / Discovery Process + Visual Board)        */}
        {/* ========================================================================= */}
        <section id="discovery" className="flex flex-col gap-12 scroll-mt-28 border-t border-black/[0.08] pt-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                RESEARCH
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                02 DISCOVERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              Before designing screens, I wanted to understand the workflow.
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
              I did not immediately jump into UI or Figma components. I framed the investigation around workflow analysis, stakeholder discussions, existing product analysis, and user journey mapping across 5 distinct lenses.
            </p>
          </div>

          {/* Horizontal Discovery Process */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
            {[
              { step: '01', title: 'OBSERVE', desc: 'Listen to customer calls and review chat logs' },
              { step: '02', title: 'MAP', desc: 'Diagram the end-to-end human and legal steps' },
              { step: '03', title: 'IDENTIFY FRICTION', desc: 'Pinpoint where customers hesitate or stall' },
              { step: '04', title: 'DEFINE OPPORTUNITY', desc: 'Structure self-serve vs assisted boundaries' },
              { step: '05', title: 'DESIGN', desc: 'Translate architecture into web and mobile flows' }
            ].map((p, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col justify-between">
                <span className="text-xs font-mono text-emerald-600 font-semibold mb-2">{p.step}</span>
                <h4 className="text-xs font-bold font-mono tracking-tight text-neutral-900">{p.title}</h4>
                <p className="text-[11px] text-neutral-500 mt-1 leading-snug">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual Research Board with 5 Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              {
                category: 'CUSTOMER',
                icon: Users,
                questions: [
                  'How do customers discover services?',
                  'Where do they ask questions?',
                  'What creates hesitation?',
                  'Where do they drop off?'
                ]
              },
              {
                category: 'OPERATIONS',
                icon: Activity,
                questions: [
                  'How are documents collected?',
                  'How are follow-ups handled?',
                  'Where does manual work happen?',
                  'How is status communicated?'
                ]
              },
              {
                category: 'PRODUCT',
                icon: Layers,
                questions: [
                  'Which parts should be self-serve?',
                  'Which parts need human assistance?',
                  'What information needs to persist?'
                ]
              },
              {
                category: 'BUSINESS',
                icon: TrendingUp,
                questions: [
                  'Where is operational cost created?',
                  'Where can conversion improve?',
                  'What prevents the process from scaling?'
                ]
              },
              {
                category: 'TECHNOLOGY',
                icon: Server,
                questions: [
                  'What existing systems can support this?',
                  'What needs to integrate?',
                  'What should remain the source of truth?'
                ]
              }
            ].map((col, idx) => {
              const Icon = col.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Icon size={14} className="text-emerald-700" />
                      <h4 className="text-xs font-mono font-bold tracking-wider text-neutral-900 uppercase">
                        {col.category}
                      </h4>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {col.questions.map((q, qidx) => (
                        <li key={qidx} className="text-xs text-neutral-600 leading-relaxed flex items-start gap-1.5">
                          <span className="text-neutral-400 font-mono text-[10px] mt-0.5">•</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Discovery Artifact & Synthesis Board */}
          <div className="flex flex-col gap-6 pt-6 border-t border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                SYNTHESIS ARTIFACT
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                02.2 WORKFLOW & FRICTION MAPPING BOARD
              </span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 leading-tight">
                Connecting User Hesitation to Operational Bottlenecks
              </h3>
              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl mt-2">
                Before drafting wireframes, I led on-site whiteboard sessions with legal ops and charted an end-to-end friction board. Every design decision in the customer portal directly originated from a documented breakdown between customer expectation and government filing workflows.
              </p>
            </div>

            {/* 2-Column Responsive Grid: Authentic Whiteboard Exploration + Interactive Friction Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch my-2">
              {/* Left Column: Whiteboard Mapping Photo Artifact (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-discovery-whiteboard-session.png"
                  title="WHITEBOARD ARCHITECTURE & JOURNEY MAPPING SESSION"
                  badge="DISCOVERY ARTIFACT [OFFICE WORKSHOP]"
                  caption="Whiteboard session at RegisterKaro: mapping customer friction points, human legal handoffs, and digital intake touchpoints."
                  objectFit="object-cover"
                  aspect=""
                  imgAspect="h-[460px] sm:h-[500px] w-full"
                  onImageClick={setModalImage}
                  annotations={[
                    "Identified lack of upfront document clarity as primary stalling factor",
                    "Mapped human touchpoints across legal review and payment confirmation",
                    "Defined boundaries between self-serve digital inputs and high-touch CA intervention"
                  ]}
                />
              </div>

              {/* Right Column: Interactive Friction & Workflow Matrix (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-neutral-900 text-white border border-neutral-800 shadow-xl my-4 sm:my-6">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                        RESEARCH SYNTHESIS MATRIX
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-neutral-400">
                      4 Core Breakdown Vectors
                    </span>
                  </div>

                  {/* Horizontal Vector Selectors */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 my-4">
                    {frictionVectors.map((vec, idx) => {
                      const isSelected = selectedFrictionVector === idx;
                      return (
                        <button
                          key={vec.id}
                          type="button"
                          onClick={() => setSelectedFrictionVector(idx)}
                          className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-xs'
                              : 'bg-neutral-800/60 border-neutral-700/70 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800'
                          }`}
                        >
                          <span className="text-[9px] font-mono block uppercase tracking-wider mb-1 text-emerald-400">
                            0{idx + 1} · {vec.tag}
                          </span>
                          <span className="text-xs font-medium line-clamp-1">
                            {vec.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Vector Deep-Dive Cards */}
                  <div className="flex flex-col gap-3.5 mt-5">
                    {/* User Hesitation */}
                    <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80">
                      <div className="flex items-center gap-2 mb-1.5">
                        <AlertCircle size={14} className="text-amber-400 shrink-0" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-amber-400">
                          Customer Hesitation Point
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {frictionVectors[selectedFrictionVector].hesitation}
                      </p>
                    </div>

                    {/* Operational Bottleneck */}
                    <div className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Activity size={14} className="text-rose-400 shrink-0" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-400">
                          Internal Operational Bottleneck
                        </span>
                      </div>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {frictionVectors[selectedFrictionVector].bottleneck}
                      </p>
                    </div>

                    {/* Product & UX Solution */}
                    <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60">
                      <div className="flex items-center gap-2 mb-1.5">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                          Product & UX Design Solution
                        </span>
                      </div>
                      <p className="text-xs text-emerald-100 leading-relaxed font-sans">
                        {frictionVectors[selectedFrictionVector].solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Metric Impact */}
                <div className="mt-5 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400">Measured Outcome:</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60">
                    {frictionVectors[selectedFrictionVector].metric}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 03: PROBLEM (The Core Insight + Design Challenges)                */}
        {/* ========================================================================= */}
        <section id="problem" className="flex flex-col gap-12 scroll-mt-28 border-t border-black/[0.08] pt-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold uppercase">
                INSIGHT
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                03 PROBLEM & CORE INSIGHT
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              "I realised we weren't designing an onboarding screen. We were designing an onboarding system."
            </h2>
          </div>

          {/* Visual System Hierarchy Stack */}
          <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                SYSTEM DEPTH STACK
              </span>
              <span className="text-xs font-serif italic text-neutral-400">
                "The interface was only one layer of the problem."
              </span>
            </div>

            <div className="flex flex-col gap-2 max-w-2xl mx-auto w-full">
              {[
                { layer: 'CUSTOMER EXPERIENCE', sub: 'Perceived clarity, trust, and frictionless momentum', color: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
                { layer: 'WEB / MOBILE / WHATSAPP', sub: 'Multi-touchpoint access channels', color: 'bg-neutral-800/80 text-white border-neutral-700' },
                { layer: 'ONBOARDING FLOW', sub: 'Milestone sequencing and step logic', color: 'bg-neutral-800/80 text-white border-neutral-700' },
                { layer: 'DOCUMENTS + PAYMENTS + STATUS', sub: 'Transactional data assets and verification states', color: 'bg-neutral-800/80 text-white border-neutral-700' },
                { layer: 'OPERATIONS', sub: 'Internal legal vetting and government MCA processing', color: 'bg-neutral-800/80 text-white border-neutral-700' },
                { layer: 'CORE SYSTEM', sub: 'Single source of truth data architecture', color: 'bg-neutral-900 text-neutral-300 border-neutral-700' }
              ].map((item, idx) => (
                <div key={idx} className={`p-3 sm:p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3 ${item.color}`}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-xs font-mono text-neutral-500 font-bold shrink-0">L{idx + 1}</span>
                    <span className="text-xs sm:text-sm font-bold font-mono tracking-tight">{item.layer}</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-neutral-400 pl-5 sm:pl-0">{item.sub}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-neutral-400 text-center max-w-xl mx-auto pt-2 border-t border-neutral-800/80">
              This shifted my thinking from screen-level UX to system-level product design.
            </p>
          </div>

          {/* The 5 Design Challenges */}
          <div className="flex flex-col gap-6 pt-8">
            <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
              The design challenges weren't only visual.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
              {[
                {
                  num: '01',
                  title: 'Reducing onboarding friction',
                  desc: 'Eliminating repetitive questions and breaking multi-hour incorporation forms into digestible, progressive milestones.'
                },
                {
                  num: '02',
                  title: 'Making complex services understandable',
                  desc: 'Explaining statutory MCA requirements, DIN, DSC, and MOA in plain terms without legal ambiguity.'
                },
                {
                  num: '03',
                  title: 'Handling document-heavy workflows',
                  desc: 'Designing robust validation pipelines for ID proofs, utility bills, and digital signatures with instant format verification.'
                },
                {
                  num: '04',
                  title: 'Keeping customers informed throughout processing',
                  desc: 'Replacing anxious "What is happening with my company?" support calls with real-time statutory milestone trackers.'
                },
                {
                  num: '05',
                  title: 'Designing for operational support',
                  desc: 'Structuring customer inputs so operations personnel could verify data in seconds rather than cross-checking emails.'
                }
              ].map((card, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-neutral-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-emerald-600 font-bold mb-2 block">{card.num}</span>
                    <h4 className="text-xs sm:text-sm font-bold text-neutral-900 mb-2 leading-tight">{card.title}</h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 04: PRODUCT DIRECTION (Why Web + Mobile? + Channel Jobs)           */}
        {/* ========================================================================= */}
        <section id="product-direction" className="flex flex-col gap-12 scroll-mt-28 border-t border-black/[0.08] pt-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                STRATEGY
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                04 PRODUCT DIRECTION
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              Why did we need a proper digital product?
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              WhatsApp was convenient, but it wasn't enough to support a structured onboarding ecosystem. I didn't want to dismiss WhatsApp: I wanted to understand its exact boundaries.
            </p>
          </div>

          {/* Comparison Table: WhatsApp vs Web vs Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* WhatsApp / Manual Flow */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-200">
                  <MessageSquare size={16} className="text-emerald-600" />
                  <h4 className="text-sm font-mono font-bold text-neutral-900">WHATSAPP / MANUAL</h4>
                </div>

                <div className="mb-4">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1.5">
                    STRENGTHS:
                  </span>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• Familiar to all users</li>
                    <li>• Zero entry friction</li>
                    <li>• High communication speed</li>
                    <li>• Universal accessibility</li>
                  </ul>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-wider block mb-1.5">
                    LIMITATIONS:
                  </span>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    <li>• Difficult to structure complex workflows</li>
                    <li>• Information easily becomes fragmented</li>
                    <li>• Harder to provide rich account views</li>
                    <li>• Limited end-to-end journey visibility</li>
                    <li>• Heavy dependency on manual operations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Web */}
            <div className="p-6 rounded-2xl bg-white border-2 border-emerald-500/40 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100">
                  <Laptop size={16} className="text-blue-600" />
                  <h4 className="text-sm font-mono font-bold text-neutral-900">WEB EXPERIENCE</h4>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-700 uppercase tracking-wider block mb-2">
                    BEST FOR:
                  </span>
                  <ul className="text-xs text-neutral-700 space-y-2 leading-relaxed">
                    <li>• Detailed multi-field entity forms</li>
                    <li>• Comprehensive service discovery</li>
                    <li>• Multi-document file upload and management</li>
                    <li>• Complex compliance workflows</li>
                    <li>• Account-level dashboards and document vaults</li>
                    <li>• Larger information architecture</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-200">
                  <Smartphone size={16} className="text-purple-600" />
                  <h4 className="text-sm font-mono font-bold text-neutral-900">MOBILE APP</h4>
                </div>

                <div>
                  <span className="text-[10px] font-mono font-bold text-purple-700 uppercase tracking-wider block mb-2">
                    BEST FOR:
                  </span>
                  <ul className="text-xs text-neutral-700 space-y-2 leading-relaxed">
                    <li>• Repeat access and mobile camera scans</li>
                    <li>• Push notifications on statutory progress</li>
                    <li>• On-the-go milestone status tracking</li>
                    <li>• Rapid approvals and PIN confirmations</li>
                    <li>• Ongoing customer relationship maintenance</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Visual Conclusion: Channel Jobs */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-neutral-900 text-white border border-neutral-800 text-center flex flex-col gap-4 sm:gap-6 items-center">
            <h3 className="text-xl sm:text-2xl font-display font-medium text-neutral-100 max-w-2xl">
              "The decision wasn't Web vs Mobile vs WhatsApp. It was about giving each channel the job it does best."
            </h3>

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl">
              {[
                { channel: 'WhatsApp', job: 'CONVERSATION', desc: 'Direct outreach & quick questions' },
                { channel: 'Web', job: 'COMPLEX TASKS', desc: 'Deep filing, uploads & data reviews' },
                { channel: 'Mobile', job: 'CONTINUOUS ACCESS', desc: 'Alerts, quick status & ongoing check-ins' },
                { channel: 'Backend', job: 'SOURCE OF TRUTH', desc: 'Centralized state & API verification' }
              ].map((c, i) => (
                <div key={i} className="p-4 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex flex-col items-center">
                  <span className="text-xs text-neutral-400 font-mono mb-1">{c.channel} =</span>
                  <span className="text-xs sm:text-sm font-bold font-mono text-emerald-400 tracking-wider mb-1">{c.job}</span>
                  <span className="text-[10px] text-neutral-400">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 05: WEB + MOBILE (Designing the Web & Mobile Experiences)          */}
        {/* ========================================================================= */}
        <section id="web-mobile" className="flex flex-col gap-16 scroll-mt-28 border-t border-black/[0.08] pt-16">
          
          {/* Chapter Header */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold uppercase">
                DESIGNED & ARCHITECTED
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                05 THE TWO-PART ONBOARDING SYSTEM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              Decoupling the journey: Pre-Onboarding vs Post-Onboarding
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              Legal compliance cannot be treated as a single monolith form. Demanding confidential government identity documents before establishing trust causes immediate drop-off, while collecting too little information creates severe operational backlog later.
            </p>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              I structured the experience into two distinct operational chapters:
            </p>

            {/* Dual Phase Comparison Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
              
              {/* Pillar 1: Pre-Onboarding */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/40 border-2 border-blue-500/30 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                      <span className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider">PART 1: PRE-ONBOARDING</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                      INTENT & PAYMENT
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2">Basic Details & Transparent Payment Hand-off</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Focused on low friction, high trust, and intent validation before asking for sensitive government documents.
                  </p>

                  <div className="space-y-2 text-xs text-neutral-700">
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Basic Information:</strong> Founder name, phone number, email, and proposed entity type.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Entity Selection:</strong> Choosing between Pvt Ltd, LLP, OPC, or Trademark.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Transparent Pricing:</strong> Clear itemized split between statutory government fees and professional dues.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-blue-600 shrink-0 mt-0.5" />
                      <span><strong>Payment Commitment:</strong> Seamless payment gateway authorization with instant account provisioning.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-blue-100 flex items-center justify-between text-[11px] font-mono text-blue-800">
                  <span>Customer State: Prospect / Intent</span>
                  <span className="font-bold">Images 01 to 05</span>
                </div>
              </div>

              {/* Pillar 2: Post-Onboarding */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white to-emerald-50/40 border-2 border-emerald-500/30 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono font-bold text-emerald-900 uppercase tracking-wider">PART 2: POST-ONBOARDING</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                      COMPLIANCE & MCA FILING
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2">In-Depth Statutory Details & Central Services Hub</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    Once paid, the customer enters the authenticated portal where complex statutory requirements are handled calmly with progressive disclosure.
                  </p>

                  <div className="space-y-2 text-xs text-neutral-700">
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>In-Depth KYC:</strong> Director DIN applications, PAN validation, and address proofs.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>3-Way Statutory OTP:</strong> Synchronized Mobile, Email, and Aadhaar OTP for official DSC generation.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Central Services Dashboard:</strong> Real-time milestone progress tracking, action items drawer, and document vaults.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Exception Management:</strong> In-portal ticket escalation and contextual chat for upload issues.</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-emerald-100 flex items-center justify-between text-[11px] font-mono text-emerald-800">
                  <span>Customer State: Authenticated Partner</span>
                  <span className="font-bold">Images 01a to 05a</span>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================================= */}
          {/* 05.1 PART 1: PRE-ONBOARDING EXPERIENCE                                     */}
          {/* ========================================================================= */}
          <div className="flex flex-col gap-6 pt-8 border-t border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold uppercase">
                PART 1
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                05.1 PRE-ONBOARDING: BASIC DETAILS & PAYMENT
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 leading-tight">
              Pre-Onboarding: Converting intent into structured action
            </h3>

            <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
              On pre-onboarding, our objective was to prevent early drop-off caused by bureaucratic anxiety. Instead of confronting customers with a 50-field legal form immediately, we capture high-level business intent, explain the incorporation steps transparently, and collect payment before diving into sensitive compliance filings.
            </p>

            {/* Pre-Onboarding 5-Step Milestone Stepper */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {[
                { num: '01', title: 'Basic Lead Intake', desc: 'Name, phone, email & legal entity preference' },
                { num: '02', title: 'Location & Capital', desc: 'State jurisdiction & capital slider calculation' },
                { num: '03', title: 'Package & DSC Details', desc: 'Director count, DSC status & business activities' },
                { num: '04', title: 'Order Checkout', desc: 'Multi-rail gateway: Card, UPI, and Net Banking' },
                { num: '05', title: 'Payment & Provision', desc: 'Itemized fee transparency & portal provisioning' }
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs flex flex-col justify-between">
                  <span className="text-xs font-mono font-bold text-blue-600 mb-1.5">{step.num}</span>
                  <h4 className="text-xs font-bold text-neutral-900 mb-1">{step.title}</h4>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Pre-Onboarding Stage 1: Public Acquisition Portal */}
            <div className="pt-4">
              <ImagePlaceholder
                imageSrc="/images/projects/registerkaro/rk-pre-onboarding-landing.png"
                title="PRE-ONBOARDING HERO & CONSULTATION INTAKE"
                badge="PRE-ONBOARDING [HERO & INTAKE]"
                caption="Desktop acquisition hero and service intake portal featuring transparent 7-day registration promise, trust ratings (Google & Trustpilot 4.7/5), and friction-free lead capture."
                objectFit="object-contain"
                aspect=""
                imgAspect="max-h-[580px]"
                onImageClick={setModalImage}
                annotations={[
                  "High-Trust Value Proposition: Promotes transparent 7-day registration timeline and verified social proof (Google & Trustpilot 4.7/5)",
                  "Friction-Free Service Intake: Collects essential contact parameters (Name, Mobile, Email, Service) before requesting legal documentation",
                  "Credibility Metric Strip: Reassures first-time founders with network scale (500+ professionals, 50,000+ pan-India clients)"
                ]}
              />
            </div>

            {/* Pre-Onboarding Steps 1, 2 & 3: The 3-Step Instant Quotation Engine */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold uppercase">
                  PROGRESSIVE QUOTATION
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  STEPS 01 TO 03: DYNAMIC PARAMETER CONFIGURATION
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-display font-medium text-neutral-900 mb-2">
                The 3-Step Quotation Engine: Transforming Legal Pricing into a Self-Serve Calculator
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl mb-4">
                Rather than forcing prospective founders through opaque phone consultations, we designed a transparent 3-step quotation funnel that instantly reveals statutory government costs, package inclusions, and capital thresholds.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Step 1: Service Type, Company Name & Package Selection */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-pre-onboarding-step1-package.png"
                  title="STEP 1: SERVICE TYPE & PACKAGE COMPARISON"
                  badge="PRE-ONBOARDING [STEP 01]"
                  caption="Initial quotation step capturing legal entity type (Private Limited Company), proposed brand name alternatives, and transparent package comparison (Starter vs Complete)."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[520px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Side-by-side package cards highlight premium additions (GST, bank account) without fine print",
                    "Advisory prompt recommends having 2-3 company name alternatives ready for MCA clearance",
                    "Security encryption badges and authentic founder testimonials reassure top-of-funnel visitors"
                  ]}
                />

                {/* Step 2: Location & Authorized Capital */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-pre-onboarding-location-capital.png"
                  title="STEP 2: LOCATION & AUTHORIZED CAPITAL CALCULATION"
                  badge="PRE-ONBOARDING [STEP 02]"
                  caption="Interactive state selection and dynamic capital slider with immediate fee estimation and statutory stamp duty explanation."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[520px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "State dropdown dynamically updates jurisdiction-specific government stamp duty fees",
                    "Visual slider (Rs 1L to Rs 1Cr+) prevents input formatting errors and explains fee tiers",
                    "Sticky fee breakdown updates in real-time as capital parameters shift"
                  ]}
                />

                {/* Step 3: Registration Package & Service Details */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-pre-onboarding-package-details.png"
                  title="STEP 3: PACKAGE CONFIGURATION & SERVICE QUOTE"
                  badge="PRE-ONBOARDING [STEP 03]"
                  caption="Director count selection, DSC requirement verification, and planned business activity intake with itemized commercial quote."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[520px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Conditional DSC toggle determines whether the user needs new digital signature tokens",
                    "Director count selector enforces statutory minimums (minimum 2 for Private Limited)",
                    "Comprehensive quote summary distinguishes statutory government dues from professional fees"
                  ]}
                />
              </div>
            </div>

            {/* Pre-Onboarding Stage 4 & 5 Grid: Order Checkout & Payment Confirmation */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold uppercase">
                  CONVERSION CLOSURE
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  STEPS 04 & 05: SECURE CHECKOUT & PROVISIONING
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-display font-medium text-neutral-900 mb-2">
                Frictionless Multi-Rail Checkout and Immediate Workspace Provisioning
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl mb-4">
                The checkout experience anchors confidence with multi-rail payment alternatives (Cards, UPI, Net Banking), explicit tax transparency, and instant transition from prospect to authenticated customer.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Step 4: Complete Your Order / Checkout */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-pre-onboarding-checkout.png"
                  title="STEP 4: COMPLETE ORDER & PAYMENT METHOD SELECTOR"
                  badge="PRE-ONBOARDING [STEP 04]"
                  caption="Secure checkout combining founder contact information with multi-rail payment options (Cards, UPI, Net Banking) and pinned order summary."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[540px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Multi-rail payment selector accommodates corporate cards, founder personal cards, and UPI",
                    "256-bit SSL encrypted checkout container reassures security before financial commitment",
                    "Direct order summary preview eliminates hidden surcharge doubts"
                  ]}
                />

                {/* Step 5: Payment Successful & Order Summary */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-pre-onboarding-payment-success.png"
                  title="STEP 5: PAYMENT CONFIRMATION & PORTAL PROVISIONING"
                  badge="PRE-ONBOARDING [STEP 05]"
                  caption="Payment success screen with complete statutory fee breakdown (Govt fee Rs 2,000, Professional fee Rs 7,999, DSC fee Rs 1,880) and seamless 'Go to Dashboard' bridge into Post-Onboarding."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[540px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Transparent itemized receipt eliminates customer confusion regarding legal disbursements",
                    "Download and email receipt options provide immediate operational documentation",
                    "Primary 'Go to Dashboard' CTA automatically provisions and authenticates user workspace"
                  ]}
                />
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 05.2 PART 2: POST-ONBOARDING EXPERIENCE                                    */}
          {/* ========================================================================= */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                PART 2
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                05.2 POST-ONBOARDING: IN-DEPTH DETAILS & CENTRAL SERVICES HUB
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 leading-tight">
              Post-Onboarding: In-depth statutory compliance & ongoing control
            </h3>

            <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
              Once payment is completed, the customer is authenticated into the dedicated customer portal. Here, the experience shifts to thorough statutory execution: collecting in-depth director KYC, verifying identity through official government OTP gateways, generating statutory Digital Signature Certificates (DSC), and providing a living control center for all business entities.
            </p>

            {/* Post-Onboarding In-Depth Milestone Stepper (1a to 5a) */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-3">
              {[
                { num: '1a', title: 'RUN Name Approval', desc: 'MCA SPICe+ Part A company name reservation' },
                { num: '2a', title: 'Director KYC & DIN', desc: 'PAN, passport/voter ID, and DIN allotment' },
                { num: '3a', title: 'DSC Generation (OTP)', desc: '3-way Mobile, Email, and Aadhaar OTP verification' },
                { num: '4a', title: 'Charter Signatures', desc: 'Digital execution of MOA and AOA charter docs' },
                { num: '5a', title: 'Certificate Issued', desc: 'Official RoC incorporation certificate & PAN/TAN' }
              ].map((step, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-emerald-200/80 shadow-2xs flex flex-col justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 mb-1.5">{step.num}</span>
                  <h4 className="text-xs font-bold text-neutral-900 mb-1">{step.title}</h4>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* Post-Onboarding Control Centers Grid: Main Dashboard & My Services Hub */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              
              {/* Screen 1: Home Dashboard & Services Catalog */}
              <ImagePlaceholder
                imageSrc="/images/projects/registerkaro/rk-portal-main-dashboard.png"
                title="PORTAL DASHBOARD & STATUTORY SERVICE CATALOG"
                badge="POST-ONBOARDING [PORTAL HOME]"
                caption="Authenticated customer home dashboard surfacing active company registration offers, popular compliance services, and quick action drawer."
                objectFit="object-contain"
                aspect=""
                imgAspect="max-h-[580px]"
                onImageClick={setModalImage}
                annotations={[
                  "Allows founders to explore adjacent corporate extensions (ROC Filing, Trademark, GST, Accounting)",
                  "Action Needed drawer highlights pending regulatory tasks to maintain legal compliance",
                  "Expert callback and chat integration connects founders with experienced CAs"
                ]}
              />

              {/* Screen 2: My Services Active Tracking */}
              <ImagePlaceholder
                imageSrc="/images/projects/registerkaro/rk-post-onboarding-dashboard.png"
                title="MY SERVICES: ENTITY ONBOARDING & ACTIVE PROGRESS HUB"
                badge="POST-ONBOARDING [SERVICES HUB]"
                caption="Entity-level control center showing ABC Technologies Pvt Ltd at 60% incorporation progress with pending DSC alert and instant quick links."
                objectFit="object-contain"
                aspect=""
                imgAspect="max-h-[580px]"
                onImageClick={setModalImage}
                annotations={[
                  "Persistent 60% progress bar gives customers psychological reassurance and momentum",
                  "Prominent Action Needed drawer isolates critical blockers like pending director DSC",
                  "Direct quick links to government portals, compliance calendar, and payment history"
                ]}
              />

            </div>

            {/* Stages 1 & 2: In-Depth Entity Intake & Government Name Reservation */}
            <div className="pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                  IN-DEPTH STATUTORY INTAKE
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  STAGES 1 & 2: ENTITY KYC & NAME RESERVATION
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-medium text-neutral-900 mb-2">
                Entity Details Intake and Government Name Reservation (RUN)
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl mb-6">
                Once authenticated, founders enter the structured statutory intake pipeline. Stage 1 captures registered office documentation and entity parameters, while Stage 2 provides live transparency into MCA name reservation filings.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Stage 1: Entity & Director Details */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-post-onboarding-stage1-entity-details.png"
                  title="STAGE 1: ENTITY INFORMATION & ADDRESS PROOFS"
                  badge="POST-ONBOARDING [STAGE 01]"
                  caption="Structured company information intake and registered office document upload vault (address proofs, utility bills, entity PAN)."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[580px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Modular tabs separate entity address verification from individual director KYC",
                    "Standardized upload dropzones enforce size and format boundaries (PDF, JPG, PNG under 5MB)",
                    "Request Edit triggers let founders adjust business descriptions without restarting the workflow"
                  ]}
                />

                {/* Stage 2: Name Reservation */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-post-onboarding-stage2-name-reservation.png"
                  title="STAGE 2: MCA NAME RESERVATION & SRN TRACKING"
                  badge="POST-ONBOARDING [STAGE 02]"
                  caption="MCA SPICe+ Part A name approval interface showing official Service Request Number (SRN-123456789), 60-day reservation validity, and official certificate download."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[580px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Transparent SRN tracking eliminates the black-box opacity of government name approvals",
                    "Milestone timeline details admin verification, MCA filing, and receipt generation",
                    "Official Name Reservation Certificate download gives founders immediate legal evidence"
                  ]}
                />
              </div>
            </div>

            {/* The 3-Step Statutory DSC Generation Sequence */}
            <div className="pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                  IN-DEPTH KYC WORKFLOW
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  STATUTORY DSC GENERATION (STEPS 1 TO 3)
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-medium text-neutral-900 mb-2">
                Designing the 3-Step Digital Signature Certificate (DSC) Flow
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl mb-6">
                Under Indian statutory guidelines, directors must authenticate with certifying authorities before documents can be submitted to the Ministry of Corporate Affairs. We designed an airtight 3-stage sequence:
              </p>

              {/* 3-Column DSC Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* DSC Step 1: Choose Director */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-post-onboarding-dsc-choose-director.png"
                  title="STEP 1: CHOOSE DIRECTOR FOR DSC ALLOTMENT"
                  badge="DSC FLOW [01: DIRECTORS]"
                  caption="Director selection interface indicating current legal status (Not Started, Active, Expired) across all entity officers."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[440px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Multi-director entity support allows independent tracking per board member",
                    "Visual status tags prevent accidental duplicate DSC applications to the certifying authority"
                  ]}
                />

                {/* DSC Step 2: 3-Way OTP Verification */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-post-onboarding-dsc-otp.png"
                  title="STEP 2: 3-WAY STATUTORY OTP VERIFICATION"
                  badge="DSC FLOW [02: 3-WAY OTP]"
                  caption="Multi-factor government authentication interface capturing Mobile, Email, and Aadhaar OTPs for Director Digital Signature Certificate generation."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[440px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Dedicated per-factor OTP inputs prevent confusion between Aadhaar UIDAI and mobile SMS codes",
                    "Inline 'Send OTP' triggers eliminate dead ends if government SMS gateway delays"
                  ]}
                />

                {/* DSC Step 3: Submission Confirmation */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-post-onboarding-dsc-success.png"
                  title="STEP 3: DSC REQUEST SUBMISSION CONFIRMATION"
                  badge="DSC FLOW [03: CONFIRMED]"
                  caption="Immediate post-verification confirmation reassuring the founder that their legal application is submitted to government authorities."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[440px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Explicit confirmation message explains the exact next step in the government review process",
                    "1-click 'Go to Dashboard' button seamlessly returns customer to active pipeline"
                  ]}
                />

              </div>
            </div>

            {/* Stages 3 & 4: Statutory Document Preparation & Government Filing Pipeline */}
            <div className="pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                  STATUTORY FILING PIPELINE
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  STAGES 3 & 4: DOCUMENT PREPARATION & MCA FORMS AUDIT
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-medium text-neutral-900 mb-2">
                Automating NOC Generation and Pre-Filing Statutory Form Review
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl mb-6">
                Statutory incorporation requires legal documents to be pre-vetted before transmission to the Registrar of Companies. We designed automated document synthesis (auto-generated NOCs) and transparency tools for dense MCA filings so founders can understand and approve their legal charters.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Stage 3: Document Preparation (NOC) */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-post-onboarding-stage3-noc.png"
                  title="STAGE 3: AUTO-GENERATED NOC & DOCUMENT VERIFICATION"
                  badge="POST-ONBOARDING [STAGE 03]"
                  caption="Automated No Objection Certificate (NOC) generation with pre-filled company parameters, 1-click download, signed re-upload, and audit verification status."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[580px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Auto-generated standard NOC eliminates need for external drafting attorneys",
                    "End-to-end processing tracker (Shared -> Uploaded -> Verified) keeps founders informed",
                    "Contextual FAQ drawer resolves common document formatting anxieties in-place"
                  ]}
                />

                {/* Stage 4: Filing & Government Review */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-post-onboarding-stage4-filing.png"
                  title="STAGE 4: MCA STATUTORY FORMS AUDIT & BULK APPROVAL"
                  badge="POST-ONBOARDING [STAGE 04]"
                  caption="Comprehensive government forms review interface presenting SPICe B (INC-32), e-MOA (INC-33), e-AOA (INC-34), and AGILE PRO (INC-35) with bulk customer approval."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[580px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Translates dense legal forms into clear modular inspection cards with status chips",
                    "Individual 'Request Edit' buttons empower founders to catch typos before government submission",
                    "One-click 'Approve All Documents' CTA reduces legal sign-off friction from days to minutes"
                  ]}
                />
              </div>
            </div>

            {/* The Ultimate Post-Onboarding Milestone: Incorporation Complete & COI Vault */}
            <div className="pt-8 border-t border-neutral-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                  MILESTONE 5 OF 5
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  INCORPORATION COMPLETE & OFFICIAL COI VAULT
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-medium text-neutral-900 mb-2">
                The Milestone 5 Finale: Official Certificate of Incorporation (COI) Vault
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl mb-6">
                When the Registrar of Companies approves the incorporation, the portal transitions into a celebration and permanent document vault, issuing the Corporate Identity Number (CIN) and enabling instant access to all charter certificates.
              </p>

              <ImagePlaceholder
                imageSrc="/images/projects/registerkaro/rk-post-onboarding-incorporation-complete.png"
                title="STAGE 5: INCORPORATION COMPLETE & OFFICIAL CERTIFICATE VAULT"
                badge="POST-ONBOARDING [MILESTONE COMPLETE]"
                caption="The final incorporation milestone celebrating official company birth with official CIN (U72900KA2024PTC123456), Certificate of Incorporation download, PAN/TAN certificates, and live MCA status timeline."
                objectFit="object-contain"
                aspect=""
                imgAspect="max-h-[640px]"
                onImageClick={setModalImage}
                annotations={[
                  "Celebration card provides emotional payoff after weeks of legal compliance",
                  "Official company details (CIN, Registration Number, State Jurisdiction) permanently pinned",
                  "Encrypted single-click document download vault (COI, PAN, TAN, or complete ZIP package)",
                  "Transparent audit timeline displays government approvals (AGILE PRO INC-35, e-MOA/e-AOA)",
                  "Integrated post-incorporation setup (Bank Account Opening, GST, Annual Compliance)"
                ]}
              />
            </div>

          </div>

          {/* ========================================================================= */}
          {/* 05.3 MOBILE COMPANION LAYER                                                */}
          {/* ========================================================================= */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold uppercase">
                DESIGNED
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                05.3 MOBILE COMPANION LAYER
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900 leading-tight">
              Why mobile became another important layer
            </h3>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              Once onboarding became an ongoing relationship rather than a one-time transaction, mobile started making more sense for repeat access, updates, and notifications.
            </p>

            {/* Web vs Mobile Visual Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="p-4 rounded-xl bg-white border border-neutral-200">
                <span className="text-xs font-mono font-bold text-blue-700 block mb-1">WEB ORIENTATION</span>
                <h4 className="text-sm font-semibold text-neutral-900 mb-1">Detailed Onboarding</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Optimized for multi-tab document reviews, keyboard data entry, and detailed charter document previews.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200">
                <span className="text-xs font-mono font-bold text-purple-700 block mb-1">MOBILE ORIENTATION</span>
                <h4 className="text-sm font-semibold text-neutral-900 mb-1">Ongoing Relationship</h4>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Optimized for push updates on government filing status, quick camera document uploads, and biometric authentication.
                </p>
              </div>
            </div>

            {/* Native Mobile App Screens Showcase */}
            <div className="pt-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-semibold uppercase">
                  NATIVE MOBILE INTERFACES
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  ACTIVE SERVICES & COMPLIANCE VAULT
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-display font-medium text-neutral-900 mb-2">
                On-The-Go Compliance Oversight: Active Services & Document Vault
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl mb-6">
                While desktop handles heavy charter reviews and complex data entry, founders rely on the mobile app for time-critical compliance tasks: tracking director KYC status, monitoring DSC token validities, and downloading government certificates on demand.
              </p>

              {/* 2-Column Responsive Grid for the Two Real Mobile App Screens */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
                {/* Screen 1: Active Services & KYC Tracking */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-mobile-app-active-services.png"
                  title="MOBILE ACTIVE SERVICES & DIRECTOR KYC STATUS"
                  badge="MOBILE APP [SERVICES & KYC]"
                  caption="Active Services overview featuring multi-entity switching (ABC Technologies Pvt Ltd), high-priority Director KYC alerts for DSC tokens, and completed MSME status."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[580px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Actionable Director KYC Banner: Highlights John Doe's pending DSC verification to prevent RoC filing bottlenecks",
                    "Multi-Entity Selector: Allows founders with multiple ventures to switch entities seamlessly without re-logging in",
                    "Lifecycle Telemetry: Displays DSC validity window (15 Jan 2024 to 15 Jan 2027) and MSME completion status"
                  ]}
                />

                {/* Screen 2: Entity Detail & Document Vault */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-mobile-app-entity-vault.png"
                  title="MOBILE ENTITY DETAIL & SECURE DOCUMENT VAULT"
                  badge="MOBILE APP [DOCUMENT VAULT]"
                  caption="Entity Detail screen featuring real-time incorporation milestone progress (60% overall progress) and 1-click downloads for statutory PDF certificates (Certificate of Incorporation, PAN, TAN)."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[580px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Incorporation Progress Bar: Clear 60% progress indicator provides transparent reassurance during government review",
                    "One-Tap Vault Downloads: Instant access to Certificate of Incorporation, PAN, and TAN certificates (3.2 MB PDFs)",
                    "Quick Links Navigation: Contextual shortcuts provide instant access to essential compliance tools and filing history"
                  ]}
                />
              </div>

              {/* Mobile Design Architecture Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <h5 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                      Proactive KYC Nudges
                    </h5>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Time-sensitive compliance blockers (like Director KYC verification for DSC tokens) surface as immediate top-level action cards rather than getting buried in email threads.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <h5 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                      Instant Document Vault
                    </h5>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Founders frequently need their Certificate of Incorporation, PAN, and TAN on the go for vendor KYC or bank accounts. All certificates are stored with 1-click verified PDF downloads.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500" />
                    <h5 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider">
                      Multi-Entity Switcher
                    </h5>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Serial entrepreneurs managing multiple entities can switch corporate contexts instantly, reviewing filings and active legal services across ventures from a single interface.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 06: SYSTEM THINKING (Product Ecosystem + Journey Mapping)          */}
        {/* ========================================================================= */}
        <section id="system-thinking" className="flex flex-col gap-16 scroll-mt-28 border-t border-black/[0.08] pt-16">
          
          {/* Product Ecosystem */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                SYSTEM THINKING
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                06.1 PRODUCT ECOSYSTEM
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              One customer journey. Multiple touchpoints.
            </h2>

            {/* System Map Graphic */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col items-center gap-4">
                
                {/* Node: Customer */}
                <div className="px-6 py-2.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400 font-mono text-xs font-bold tracking-wider">
                  CUSTOMER
                </div>

                <div className="h-6 w-px bg-neutral-700" />

                {/* Touchpoint Tier */}
                <div className="grid grid-cols-3 gap-4 w-full max-w-lg text-center">
                  {['WHATSAPP', 'WEB', 'MOBILE'].map((ch, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-neutral-900 border border-neutral-700 text-xs font-mono font-semibold text-neutral-200">
                      {ch}
                    </div>
                  ))}
                </div>

                <div className="h-6 w-px bg-neutral-700" />

                {/* Core Platform Box */}
                <div className="w-full max-w-2xl p-5 rounded-2xl bg-neutral-900/90 border border-neutral-700 text-center flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-emerald-400 tracking-wider">
                    CORE PLATFORM
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] sm:text-xs font-mono text-neutral-300">
                    <span className="p-2 bg-neutral-800 rounded-lg">USERS</span>
                    <span className="p-2 bg-neutral-800 rounded-lg">SERVICES</span>
                    <span className="p-2 bg-neutral-800 rounded-lg">DOCUMENTS</span>
                    <span className="p-2 bg-neutral-800 rounded-lg">PAYMENTS</span>
                  </div>
                </div>

                <div className="h-6 w-px bg-neutral-700" />

                {/* Operations & Admin */}
                <div className="w-full max-w-md p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center flex flex-col gap-2">
                  <span className="text-xs font-mono text-neutral-400">OPERATIONS LAYER</span>
                  <span className="text-xs font-mono font-bold text-white bg-neutral-800 px-3 py-1.5 rounded-lg border border-neutral-700">
                    ADMIN & LEGAL CASE MANAGEMENT DASHBOARD
                  </span>
                </div>

              </div>

              <p className="text-xs sm:text-sm text-neutral-400 text-center max-w-xl mx-auto pt-4 border-t border-neutral-800/80">
                "The goal was not to create disconnected experiences. Every touchpoint needed to connect to the same underlying customer and service state."
              </p>
            </div>
          </div>

          {/* User Journey Map across 9 Stages */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  06.2 ONBOARDING JOURNEY MAP
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
                  Mapping the onboarding journey
                </h3>
              </div>
              <span className="hidden sm:inline text-xs font-mono text-neutral-500">
                Click any stage to inspect thinking
              </span>
            </div>

            {/* Horizontal Timeline Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              {journeyStages.map((stage, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedJourneyStage(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    selectedJourneyStage === idx
                      ? 'bg-neutral-900 text-white font-semibold shadow-xs'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  <span className={selectedJourneyStage === idx ? 'text-emerald-400' : 'text-neutral-400'}>
                    {stage.num}
                  </span>
                  <span>{stage.name}</span>
                </button>
              ))}
            </div>

            {/* Deep Stage Inspector */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white border border-neutral-200 shadow-sm flex flex-col gap-4 sm:gap-6">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    STAGE {journeyStages[selectedJourneyStage].num}
                  </span>
                  <h4 className="text-lg font-bold text-neutral-900">
                    {journeyStages[selectedJourneyStage].name}
                  </h4>
                </div>
                <span className="text-xs font-mono text-neutral-400">
                  User + Business + Technology Triad
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <span className="text-[10px] font-mono font-bold text-blue-700 uppercase tracking-wider block mb-1.5">
                    CUSTOMER NEED
                  </span>
                  <p className="text-sm text-neutral-800 leading-relaxed font-serif italic">
                    "{journeyStages[selectedJourneyStage].customer}"
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <span className="text-[10px] font-mono font-bold text-emerald-700 uppercase tracking-wider block mb-1.5">
                    BUSINESS NEED
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    {journeyStages[selectedJourneyStage].business}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200/80">
                  <span className="text-[10px] font-mono font-bold text-purple-700 uppercase tracking-wider block mb-1.5">
                    SYSTEM REQUIREMENT
                  </span>
                  <p className="text-sm text-neutral-700 leading-relaxed font-mono text-xs">
                    {journeyStages[selectedJourneyStage].system}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 07: TECHNICAL COLLABORATION (Data Dependencies + Edge Cases)       */}
        {/* ========================================================================= */}
        <section id="technical-collaboration" className="flex flex-col gap-16 scroll-mt-28 border-t border-black/[0.08] pt-16">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold uppercase">
                ENGINEERING ALIGNMENT
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                07.1 TECHNICAL COLLABORATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              Design decisions had to survive implementation.
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              I worked closely with engineering to map data requirements before finalizing layouts. A design that looks clean in Figma quickly breaks down if the API cannot support intermediate validation states.
            </p>

            {/* Pipeline Flow Graphic */}
            <div className="p-6 rounded-2xl bg-neutral-900 text-white border border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-center text-xs font-mono">
              {['DESIGN', 'PRODUCT LOGIC', 'API / DATA', 'FRONTEND', 'BACKEND', 'USER EXPERIENCE'].map((item, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-3 py-1.5 rounded-lg bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold">
                    {item}
                  </span>
                  {idx < 5 && <span className="text-neutral-500 hidden sm:inline">→</span>}
                </React.Fragment>
              ))}
            </div>

            {/* API / Data Discussion Topics & Example Mapping */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono font-bold text-neutral-900 uppercase tracking-wider mb-4 pb-2 border-b border-neutral-200">
                    CROSS-FUNCTIONAL API QUESTIONS I MAPPED:
                  </h4>
                  <ul className="text-xs text-neutral-700 space-y-2.5">
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>What data fields are available at each onboarding step?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>Which fields are strictly required vs optional for MCA submission?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>How is application status represented across internal microservices?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>How are documents stored, encrypted, and tagged with validation states?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>What event triggers a status update across Web, Mobile, and WhatsApp?</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Concrete UI vs Backend Mapping Example */}
              <div className="p-6 rounded-2xl bg-neutral-950 text-white border border-neutral-800 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block mb-2">
                    UI VS DATA MODEL SYNCHRONIZATION
                  </span>
                  
                  {/* UI representation */}
                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-700 mb-4">
                    <span className="text-[10px] font-mono text-neutral-400 block mb-1">CUSTOMER-FACING UI</span>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white">Application Status: Documents Pending</span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    </div>
                  </div>

                  {/* Behind the scenes state */}
                  <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 font-mono text-xs text-neutral-300">
                    <span className="text-[10px] text-emerald-400 block mb-1 font-bold">SYSTEM BACKEND STATE:</span>
                    <p>Application ID: <span className="text-emerald-300">RK-2025-08942</span></p>
                    <p>Status: <span className="text-amber-300">DOCS_DEFECTIVE</span></p>
                    <p>Required Documents: <span className="text-neutral-400">['PAN_CARD', 'ADDRESS_PROOF']</span></p>
                    <p>Verification State: <span className="text-rose-300">BLURRED_SIGNATURE</span></p>
                    <p>Last Updated: <span className="text-neutral-400">2025-03-24T14:22:00Z</span></p>
                    <p>Next Action: <span className="text-blue-300">TRIGGER_REUPLOAD_PROMPT</span></p>
                  </div>
                </div>

                <p className="text-xs font-serif italic text-neutral-400 mt-4 border-t border-neutral-800 pt-3">
                  "I learned to design with the system behind the screen in mind: not just the pixels in front of it."
                </p>
              </div>

            </div>
          </div>

          {/* Section 15: Edge Cases */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  07.2 REAL-WORLD EDGE CASES
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
                  The happy path is easy. Real users aren't.
                </h3>
              </div>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed max-w-2xl">
              Most onboarding designs assume clean documents, stable bank connections, and uninterrupted user attention. In reality, statutory compliance workflows encounter frequent real-world edge cases.
            </p>

            {/* Edge Cases Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {edgeCases.map((ec, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedEdgeCase(idx)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    selectedEdgeCase === idx
                      ? 'bg-neutral-900 text-white border-neutral-900 shadow-xs'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <span className="text-[10px] font-mono text-emerald-500 font-bold mb-1">0{idx + 1}</span>
                  <span className="text-xs font-bold leading-tight truncate">{ec.title}</span>
                </button>
              ))}
            </div>

            {/* Active Edge Case Detail Docket */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-neutral-50 border border-neutral-200/90 flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-neutral-900 uppercase">
                    SCENARIO: {edgeCases[selectedEdgeCase].title}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">
                    {edgeCases[selectedEdgeCase].badge}
                  </span>
                </div>
                <span className="text-xs font-mono text-neutral-400">Defensive UX Logic</span>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 my-2">
                {edgeCases[selectedEdgeCase].flow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="p-2.5 sm:p-3 bg-white rounded-xl border border-neutral-200 text-xs font-mono text-neutral-800 flex-1 text-center w-full">
                      {step}
                    </div>
                    {idx < edgeCases[selectedEdgeCase].flow.length - 1 && (
                      <span className="text-neutral-400 font-mono text-xs sm:text-sm rotate-90 sm:rotate-0 my-0.5 sm:my-0">↓</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-700 leading-relaxed font-sans">
                <span className="font-semibold text-neutral-900 block mb-1">Design Rationale:</span>
                {edgeCases[selectedEdgeCase].rationale}
              </div>
            </div>

            {/* Real-World Evidence: Two-Tier Defensive Support UX */}
            <div className="pt-8 border-t border-neutral-200 flex flex-col gap-6">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-semibold uppercase">
                  DEFENSIVE UX IN ACTION
                </span>
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                  TWO-TIER STATUTORY EXCEPTION HANDLING
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-display font-medium text-neutral-900">
                Resolving real-world friction: In-App Chat vs Ticket Escalation
              </h4>
              <p className="text-sm text-neutral-600 leading-relaxed max-w-3xl">
                Statutory friction falls into two distinct operational tiers: immediate document format misunderstandings (which need fast in-app clarification) and government portal outages (which require asynchronous ticket logging).
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Tier 1: In-App Live Chat */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-support-live-chat.png"
                  title="TIER 1: IN-APP LIVE CHAT RESOLVING DOCUMENT UPLOAD ERROR"
                  badge="DEFENSIVE UX [LIVE CHAT]"
                  caption="Real-time contextual support chat resolving customer friction during document uploads (scanned PAN card PDF format validation) with human-in-the-loop assistance."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[480px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Contextual routing detects the active service (Incorporation) so agents know customer context instantly",
                    "Direct file upload guidance prevents drop-off during rigid format rejections",
                    "Thread-based chat preserves customer dignity and eliminates cold phone transfers"
                  ]}
                />

                {/* Tier 2: Formal Ticket Escalation */}
                <ImagePlaceholder
                  imageSrc="/images/projects/registerkaro/rk-post-onboarding-ticket-support.png"
                  title="TIER 2: FORMAL TICKET RESOLVING GOVT PORTAL DOWNTIME"
                  badge="DEFENSIVE UX [SUPPORT TICKETING]"
                  caption="In-portal ticket resolution management handling external MCA/GST government portal outages (TKT-2024001: Unable to access GST registration portal) with asynchronous customer history."
                  objectFit="object-contain"
                  aspect=""
                  imgAspect="max-h-[480px]"
                  onImageClick={setModalImage}
                  annotations={[
                    "Categorized ticket tagging (Status, Priority, Category) connects customer with technical support",
                    "Direct thread history prevents repeat explanations during government server outages",
                    "Reduces anxious phone inquiries by validating that downtime is known and actively tracked"
                  ]}
                />

              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 08: FUTURE OPPORTUNITY (WhatsApp Automation & Operations Model)     */}
        {/* ========================================================================= */}
        <section id="future-opportunity" className="flex flex-col gap-16 scroll-mt-28 border-t border-black/[0.08] pt-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                FUTURE OPPORTUNITY
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                08 FUTURE SCOPE & AUTOMATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              "If customers are already comfortable starting conversations on WhatsApp, why make them leave that environment for every step?"
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-3xl">
              The future was not about replacing the web or mobile product: it was about introducing an automated conversational entry point directly connected to the existing backend ecosystem.
            </p>
          </div>

          {/* 08.1 EVOLUTIONARY OPERATIONS MODEL (The Graphical Diagram) */}
          <div className="flex flex-col gap-6 pt-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                08.1 OPERATIONS MODEL: PAST, PRESENT & FUTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
                WhatsApp automation is an evolution, not a replacement.
              </h3>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
              Many digital transformations fail by forcing every customer into web portals before they are ready. While web and app platforms established structured milestones, Tier 2 and Tier 3 founders often lack dedicated laptop access and encounter app installation drop-offs. We conceptualized an evolutionary model where WhatsApp becomes a frictionless front door backed by the exact same central operational database.
            </p>

            <ImagePlaceholder
              imageSrc="/images/projects/registerkaro/rk-future-evolution-model.png"
              title="CUSTOMER ONBOARDING & OPERATIONS EVOLUTION MODEL"
              badge="STRATEGIC ROADMAP [PAST -> PRESENT -> FUTURE]"
              caption="Three-stage operational evolution mapping how automated WhatsApp intake scales business reach without replacing existing web infrastructure."
              aspect="aspect-[16/9]"
              onImageClick={setModalImage}
              annotations={[
                "Past Model: Manual WhatsApp groups suffered from disjointed threads, offline CA bottlenecks, and limited scalability",
                "Present Model: Web and mobile apps introduced structured workflows, yet observed laptop barriers and portal friction among Tier 2/3 founders",
                "Proposed Future: Automated WhatsApp conversational intake routes seamlessly into the existing RegisterKaro dashboard with zero operational re-work"
              ]}
            />

            {/* Strategic Callout Banner */}
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 flex items-center gap-3 text-emerald-950 text-xs sm:text-sm font-medium">
              <Sparkles size={18} className="text-emerald-700 shrink-0" />
              <span>
                <strong>Strategic Principle:</strong> WhatsApp automation is an evolution, not a replacement. It preserves 100% of core backend engineering while drastically expanding customer acquisition reach.
              </span>
            </div>
          </div>

          {/* 08.2 CONVERSATIONAL ONBOARDING JOURNEY (The 3 WhatsApp Screens in Chats) */}
          <div className="flex flex-col gap-8 pt-10 border-t border-neutral-200">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                08.2 CONVERSATIONAL ONBOARDING IN ACTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
                From initial intent to statutory document intake inside chat.
              </h3>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
              Statutory legal processes involve multi-step decisions: legal service identification, package comparison, and KYC document uploads. We translated each step of the web application into native, interactive conversational UI components directly inside WhatsApp chat threads.
            </p>

            {/* 3 WhatsApp Production Screens Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Screen 1: Service Selection */}
              <ImagePlaceholder
                imageSrc="/images/projects/registerkaro/rk-future-whatsapp-service-selection.png"
                title="STAGE 01: SERVICE SELECTION & GREETING"
                badge="WHATSAPP CHAT [STAGE 01]"
                caption="Verified business bot greets customer with instant conversational intent capture across Trademark, Incorporation, MSME, and GST."
                aspect=""
                imgAspect="max-h-[580px]"
                onImageClick={setModalImage}
                annotations={[
                  "Verified business badge establishes immediate institutional trust with first-time founders",
                  "Interactive quick-reply chips eliminate typing fatigue and eradicate spelling ambiguity",
                  "Contextual service confirmation branches straight into tailored statutory workflows"
                ]}
              />

              {/* Screen 2: Interactive Pricing Packages */}
              <ImagePlaceholder
                imageSrc="/images/projects/registerkaro/rk-future-whatsapp-package-selection.png"
                title="STAGE 02: IN-CHAT PRICING & SELECTION"
                badge="WHATSAPP CHAT [STAGE 02]"
                caption="Interactive pricing cards surfaced inside WhatsApp chat allowing founders to compare Standard (Rs 7,999) vs Premium tiers."
                aspect=""
                imgAspect="max-h-[580px]"
                onImageClick={setModalImage}
                annotations={[
                  "Structured in-chat cards display class counts, search depth, and government filing inclusions with zero fine print",
                  "Popular badge on the Standard tier (Rs 7,999) anchors decision-making and reduces decision paralysis",
                  "One-tap selection message locks package choice into the unified backend session"
                ]}
              />

              {/* Screen 3: Statutory Document Uploads */}
              <ImagePlaceholder
                imageSrc="/images/projects/registerkaro/rk-future-whatsapp-doc-upload.png"
                title="STAGE 03: STATUTORY DOCUMENT INTAKE"
                badge="WHATSAPP CHAT [STAGE 03]"
                caption="Structured document upload cards for PAN, Aadhaar, and Brand Name directly within the conversational interface."
                aspect=""
                imgAspect="max-h-[580px]"
                onImageClick={setModalImage}
                annotations={[
                  "Pre-payment statutory intake ensures documents are validated before collecting fees",
                  "Native upload cards allow customers to snap camera photos or attach PDFs without leaving WhatsApp",
                  "Upload status feedback prevents defective submissions before legal CA review"
                ]}
              />

            </div>
          </div>

          {/* 08.3 TECHNICAL SYSTEM ARCHITECTURE (The Technical Blueprint Image) */}
          <div className="flex flex-col gap-8 pt-10 border-t border-neutral-200">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                08.3 TECHNICAL SYSTEM ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
                5-Level architecture: WhatsApp automation integration overview.
              </h3>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed max-w-3xl">
              A common pitfall with conversational bots is creating an isolated database that fails to sync with core operations. In this proposed architecture, WhatsApp is purely a client-tier touchpoint. All state, verification, and payments live inside the existing core backend.
            </p>

            <ImagePlaceholder
              imageSrc="/images/projects/registerkaro/rk-future-system-architecture.png"
              title="SYSTEM ARCHITECTURE: WHATSAPP AUTOMATION INTEGRATION"
              badge="INTEGRATION BLUEPRINT [LEVELS 1 TO 5]"
              caption="Comprehensive 5-level architectural blueprint detailing how WhatsApp touchpoints connect into the existing backend and admin dashboard."
              aspect="aspect-[16/9]"
              onImageClick={setModalImage}
              annotations={[
                "Level 1: Unified Touchpoints (WhatsApp, Web App, Mobile App) all route to the identical ingestion pipeline",
                "Level 2: Existing RegisterKaro core backend (User, Service, Case, Document, Payment, Notification) requires zero changes",
                "Level 3: Operations Admin Dashboard remains the single control center, managing WhatsApp via configuration only",
                "Level 4: Case Detail view acts as the immutable single source of truth with real-time read-only WhatsApp audit logs",
                "Level 5: 7-step automation logic governs entry, document collection, payment, MCA filings, and optional human handoff"
              ]}
            />

            {/* 4 Key Architectural Takeaways Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  num: '01',
                  title: 'WhatsApp Replaces Nothing',
                  desc: 'All entry points flow into the same system. Web, mobile, and assisted channels remain fully operational.'
                },
                {
                  num: '02',
                  title: 'Core Backend Logic',
                  desc: 'All business logic, document verification rules, and payment pipelines live in the existing backend.'
                },
                {
                  num: '03',
                  title: 'Admin Control Center',
                  desc: 'Admin dashboard remains the central operational cockpit. WhatsApp automation is configuration only.'
                },
                {
                  num: '04',
                  title: 'Scalable Operations',
                  desc: 'Automation reduces repetitive manual document follow-up while scaling caseload throughput.'
                }
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col justify-between">
                  <span className="text-xs font-mono text-emerald-600 font-bold mb-2">{item.num}</span>
                  <h4 className="text-sm font-bold text-neutral-900 mb-1.5">{item.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs text-neutral-500 font-mono text-center max-w-xl mx-auto pt-2">
              Note: Presented as my future product vision and architectural proposal, not as an already shipped RegisterKaro feature.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 09: BUSINESS IMPACT (Economics + Validation Metrics + Arch)        */}
        {/* ========================================================================= */}
        <section id="business-impact" className="flex flex-col gap-16 scroll-mt-28 border-t border-black/[0.08] pt-16">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                BUSINESS IMPACT
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                09.1 ECONOMIC OPPORTUNITY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              "The opportunity wasn't just better UX. It was better economics."
            </h2>

            {/* 4 Large Economic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  num: '01',
                  title: 'LOWER FRICTION',
                  desc: 'Fewer steps between customer intent and legal registration action.'
                },
                {
                  num: '02',
                  title: 'HIGHER THROUGHPUT',
                  desc: 'More customers can potentially be handled without increasing manual work at the same rate.'
                },
                {
                  num: '03',
                  title: 'LOWER OPERATIONAL LOAD',
                  desc: 'Less repetitive document chasing, status updates, and basic follow-ups.'
                },
                {
                  num: '04',
                  title: 'MORE ACCESSIBLE ACQUISITION',
                  desc: 'Customers who are more comfortable with WhatsApp don\'t need to learn a new product before starting.'
                }
              ].map((card, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col justify-between">
                  <span className="text-xs font-mono text-emerald-600 font-bold mb-3">{card.num}</span>
                  <h4 className="text-sm font-bold text-neutral-900 mb-2">{card.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Hypothesis & Validation Plan Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider">
                  HYPOTHESIS
                </span>
                <p className="text-lg sm:text-xl font-serif italic text-neutral-900 leading-relaxed">
                  "Automating repetitive onboarding interactions could allow the same operations team to support more customers."
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-200">
                <span className="text-xs font-mono font-bold text-neutral-800 uppercase tracking-wider">
                  HOW I WOULD VALIDATE IT:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono text-neutral-700">
                  <span className="p-2.5 bg-white rounded-lg border border-neutral-200">• Conversion rate</span>
                  <span className="p-2.5 bg-white rounded-lg border border-neutral-200">• Time to complete onboarding</span>
                  <span className="p-2.5 bg-white rounded-lg border border-neutral-200">• Manual touches per case</span>
                  <span className="p-2.5 bg-white rounded-lg border border-neutral-200">• Document resubmission rate</span>
                  <span className="p-2.5 bg-white rounded-lg border border-neutral-200">• Support queries per case</span>
                  <span className="p-2.5 bg-white rounded-lg border border-neutral-200">• Completion rate</span>
                  <span className="p-2.5 bg-white rounded-lg border border-neutral-200">• Cost per completed case</span>
                  <span className="p-2.5 bg-white rounded-lg border border-neutral-200">• Revenue per operations FTE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 19: Business + Product + Technology Triad */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              09.2 SYSTEM HARMONY
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white border border-neutral-200">
                <h4 className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider mb-3">CUSTOMER</h4>
                <ul className="text-xs text-neutral-700 space-y-2">
                  <li>• Lower friction entry</li>
                  <li>• Familiar, comfortable channel</li>
                  <li>• Better visibility into progress</li>
                  <li>• Effortless document submission</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200">
                <h4 className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider mb-3">BUSINESS</h4>
                <ul className="text-xs text-neutral-700 space-y-2">
                  <li>• Higher throughput velocity</li>
                  <li>• Better conversion opportunity</li>
                  <li>• Lower operational effort per filing</li>
                  <li>• Scalable legal service delivery</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-neutral-200">
                <h4 className="text-xs font-mono font-bold text-purple-700 uppercase tracking-wider mb-3">TECHNOLOGY</h4>
                <ul className="text-xs text-neutral-700 space-y-2">
                  <li>• Reusable workflow engine</li>
                  <li>• Shared customer and application state</li>
                  <li>• API-driven integrations</li>
                  <li>• Centralised source of truth</li>
                  <li>• Channel-agnostic architecture</li>
                </ul>
              </div>

            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 text-white text-center">
              <p className="text-base sm:text-lg font-serif italic text-emerald-300">
                "One workflow. Multiple channels. One source of truth."
              </p>
            </div>
          </div>

          {/* Section 20: System Architecture */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              09.3 SYSTEM ARCHITECTURE
            </span>

            <div className="p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col gap-6">
              <div className="text-center flex flex-col items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  HIGH-LEVEL ARCHITECTURAL TOPOLOGY
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif italic text-white max-w-xl">
                  "WhatsApp is the remote control, not the machine."
                </h3>
              </div>

              {/* Architectural Tiers */}
              <div className="flex flex-col gap-3 max-w-2xl mx-auto w-full text-xs font-mono">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                  <span className="text-neutral-400 block mb-1 text-[10px]">TIER 1: TOUCHPOINTS</span>
                  <span className="font-bold text-white">WhatsApp API · Web Client · Mobile App</span>
                </div>

                <div className="text-center text-neutral-600 font-mono text-xs">↓</div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                  <span className="text-neutral-400 block mb-1 text-[10px]">TIER 2: EXPERIENCE LAYER</span>
                  <span className="font-bold text-neutral-200">Authentication · Channel Adapter · Session Orchestrator</span>
                </div>

                <div className="text-center text-neutral-600 font-mono text-xs">↓</div>

                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-600/40 text-center">
                  <span className="text-emerald-400 block mb-1 text-[10px] font-bold">TIER 3: CORE PLATFORM (SOURCE OF TRUTH)</span>
                  <span className="font-bold text-white">Customer Profile · Service State · Document Store · Ledger</span>
                </div>

                <div className="text-center text-neutral-600 font-mono text-xs">↓</div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                  <span className="text-neutral-400 block mb-1 text-[10px]">TIER 4: INTEGRATION SERVICES</span>
                  <span className="font-bold text-neutral-300">Payment Gateway · MCA Registry API · Notification Gateway</span>
                </div>

                <div className="text-center text-neutral-600 font-mono text-xs">↓</div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                  <span className="text-neutral-400 block mb-1 text-[10px]">TIER 5: OPERATIONS & LEGAL VETTING</span>
                  <span className="font-bold text-neutral-200">Admin Console · Vetting Queue · Case Management</span>
                </div>
              </div>

              <p className="text-xs text-neutral-400 text-center max-w-xl mx-auto pt-2">
                "The important architectural idea is that WhatsApp should not become a second system. It should act as another interface into the same underlying customer and application state."
              </p>
            </div>
          </div>

          {/* Section 21: Future Scalability */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              09.4 FUTURE SCALABILITY
            </span>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
              Designing beyond one service
            </h3>

            <div className="flex flex-wrap items-center justify-between gap-2 p-4 rounded-xl bg-neutral-100 text-xs font-mono text-neutral-800 text-center">
              {['Trademark', 'MSME', 'GST', 'Company Registration', 'Compliance', 'Other Legal Services'].map((srv, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-3 py-1.5 bg-white rounded-lg border border-neutral-200 font-semibold">{srv}</span>
                  {idx < 5 && <span className="text-neutral-400">→</span>}
                </React.Fragment>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs font-mono text-neutral-700 flex flex-wrap gap-2 items-center justify-center text-center">
              <span className="px-3 py-1 bg-white rounded border">SERVICE CONFIGURATION</span>
              <span>+</span>
              <span className="px-3 py-1 bg-white rounded border">DOCUMENT REQUIREMENTS</span>
              <span>+</span>
              <span className="px-3 py-1 bg-white rounded border">WORKFLOW ENGINE</span>
              <span>+</span>
              <span className="px-3 py-1 bg-white rounded border">PAYMENT LOGIC</span>
              <span>+</span>
              <span className="px-3 py-1 bg-white rounded border">STATUS STATES</span>
              <span>+</span>
              <span className="px-3 py-1 bg-white rounded border">NOTIFICATIONS</span>
            </div>

            <p className="text-base text-neutral-600 leading-relaxed">
              "If the underlying workflow is configurable, the same onboarding model can be reused across multiple services instead of building every journey from scratch."
            </p>
          </div>

          {/* Section 22: What I Would Measure */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              09.5 METRICS & VALIDATION FRAMEWORK
            </span>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
              How I would know if this actually worked
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {[
                { title: 'ACQUISITION', items: ['WhatsApp to application conversion', 'Service discovery to package selection'] },
                { title: 'ACTIVATION', items: ['Application started to payment completed', 'First milestone completion speed'] },
                { title: 'OPERATIONS', items: ['Manual touches per application', 'Average processing time', 'Document follow-up count'] },
                { title: 'ENGAGEMENT', items: ['Status message open & click rates', 'Resume rate after temporary drop-off'] },
                { title: 'BUSINESS', items: ['Completed applications per month', 'Cost per completed case', 'Operations capacity per FTE'] },
                { title: 'CUSTOMER', items: ['Completion satisfaction score', 'Drop-off rate at KYC', 'Inbound support contact rate'] }
              ].map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-neutral-200 shadow-2xs">
                  <span className="text-xs font-mono font-bold text-emerald-700 uppercase block mb-2">{m.title}</span>
                  <ul className="text-xs text-neutral-600 space-y-1">
                    {m.items.map((it, iidx) => (
                      <li key={iidx} className="flex items-start gap-1.5">
                        <span className="text-neutral-400">•</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="text-xs font-mono text-neutral-500 italic text-center">
              "I would treat these as validation metrics, not assumptions."
            </p>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* CHAPTER 10: REFLECTION (My Role + Key Learnings + Final Editorial Note)    */}
        {/* ========================================================================= */}
        <section id="reflection" className="flex flex-col gap-16 scroll-mt-28 border-t border-black/[0.08] pt-16">
          
          {/* Section 23: My Role */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold uppercase">
                OWNERSHIP
              </span>
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                10.1 MY ROLE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-medium text-neutral-900 leading-tight max-w-3xl">
              What I brought to the project
            </h2>

            {/* Visual Skill Map */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'PRODUCT THINKING',
                'UX RESEARCH',
                'USER JOURNEY MAPPING',
                'INFORMATION ARCHITECTURE',
                'UI DESIGN',
                'ECOSYSTEM ARCHITECTURE',
                'SYSTEM THINKING',
                'TECH COLLABORATION',
                'BUSINESS THINKING',
                'FUTURE VISION'
              ].map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-4 py-2 rounded-xl bg-white border border-neutral-200 text-xs font-mono font-semibold text-neutral-800 shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
              "My role went beyond designing individual screens. I was thinking about how the customer journey, internal operations, product architecture, and business goals fit together."
            </p>
          </div>

          {/* Section 24: Key Learnings */}
          <div className="flex flex-col gap-6 pt-12 border-t border-neutral-200">
            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
              10.2 SENIOR LEARNINGS
            </span>

            <h3 className="text-2xl sm:text-3xl font-display font-medium text-neutral-900">
              Key takeaways from transforming onboarding
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '01', text: 'A customer journey doesn\'t end at the UI.' },
                { num: '02', text: 'Operational complexity eventually becomes UX complexity.' },
                { num: '03', text: 'Every new channel creates a systems problem if the underlying state isn\'t shared.' },
                { num: '04', text: 'Good product design balances customer convenience with operational feasibility.' },
                { num: '05', text: 'The best automation doesn\'t remove humans everywhere: it removes repetitive work and gives humans the right moments to intervene.' },
                { num: '06', text: 'A scalable product is designed around reusable workflows, not isolated screens.' }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-2xs flex flex-col justify-between">
                  <span className="text-xs font-mono font-bold text-emerald-600 mb-3">{item.num}</span>
                  <p className="text-base sm:text-lg font-serif italic text-neutral-900 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 25: Final Reflection */}
          <div className="flex flex-col gap-8 pt-12 border-t border-neutral-200 pb-16">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-neutral-900 leading-tight">
              "From designing the onboarding experience to designing what onboarding could become."
            </h3>

            <div className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl space-y-4">
              <p>
                This project changed the way I think about product design.
              </p>
              <p>
                I started by looking at customer onboarding as a collection of screens. The deeper I went, the more I realised it was actually a connected system involving customers, operations, technology, documents, payments, and business constraints.
              </p>
              <p className="font-semibold text-neutral-900">
                That shift: from designing interfaces to designing systems: is probably the most valuable part of this project for me.
              </p>
            </div>

            {/* Final Visual Triad */}
            <div className="p-8 rounded-3xl bg-neutral-950 text-white border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
              <div className="flex-1">
                <span className="text-xs font-mono text-neutral-500 block mb-1">PAST</span>
                <span className="text-sm font-bold text-neutral-300">Manual conversations</span>
              </div>
              <span className="text-neutral-600 font-mono text-lg">→</span>
              <div className="flex-1">
                <span className="text-xs font-mono text-emerald-400 block mb-1">PRESENT</span>
                <span className="text-sm font-bold text-white">Digital onboarding</span>
              </div>
              <span className="text-neutral-600 font-mono text-lg">→</span>
              <div className="flex-1">
                <span className="text-xs font-mono text-teal-400 block mb-1">FUTURE</span>
                <span className="text-sm font-bold text-emerald-200">Connected, conversational onboarding</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-center">
              <p className="text-lg sm:text-xl font-serif italic text-emerald-900">
                "Good product design doesn't only solve today's friction. It creates room for tomorrow's scale."
              </p>
            </div>

            {/* Case Study Footer Navigation */}
            <div className="pt-12 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={onBackToProjects}
                className="flex items-center gap-2 text-sm font-mono font-medium text-neutral-600 hover:text-black transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Return to Featured Projects</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onNavigateCaseStudy && onNavigateCaseStudy('codash')}
                  className="px-4 py-2 rounded-xl bg-neutral-900 text-white font-mono text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-2"
                >
                  <span>Next Case Study: Codash</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Lightbox Fullscreen Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-8"
          onClick={() => setModalImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[94vh] bg-neutral-900 border border-neutral-700 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3.5 sm:px-6 py-2.5 sm:py-4 border-b border-neutral-800 bg-neutral-950 gap-2">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 font-bold uppercase shrink-0">
                  {modalImage.badge || 'SCREENSHOT'}
                </span>
                <h3 className="text-xs sm:text-base font-bold text-white truncate">
                  {modalImage.title}
                </h3>
              </div>
              <button 
                type="button"
                onClick={() => setModalImage(null)}
                className="p-1.5 sm:p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer shrink-0 touch-manipulation"
                title="Close (Esc)"
              >
                <X size={18} />
              </button>
            </div>
            
            <div className="overflow-auto p-2 sm:p-4 md:p-6 flex items-center justify-center bg-black/60 max-h-[calc(94vh-120px)]">
              <img 
                src={modalImage.src} 
                alt={modalImage.title} 
                className="max-w-full max-h-[78vh] object-contain rounded-lg shadow-2xl" 
              />
            </div>
            
            {modalImage.caption && (
              <div className="px-3.5 sm:px-6 py-2.5 sm:py-3.5 border-t border-neutral-800 bg-neutral-950 text-[11px] sm:text-xs font-mono text-neutral-400 flex items-start sm:items-center gap-1.5 sm:gap-2 leading-tight">
                <span className="text-emerald-500 font-semibold shrink-0">FIG:</span>
                <span>{modalImage.caption}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}