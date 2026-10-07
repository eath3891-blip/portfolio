import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Lock, CheckCircle, Globe } from 'lucide-react';

/**
 * LiveProjectCard:
 * Compact, execution-focused card representing live and shipped websites.
 * Features realistic browser window mockup, live status badge, and accessible external link.
 */
export default function LiveProjectCard({ project, index }) {
  const renderBrowserPreview = () => {
    if (project.image) {
      return (
        <div className="relative w-full h-full overflow-hidden bg-black/[0.02]">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      );
    }

    switch (project.mockType) {
      case 'transorg':
        return (
          <div className="w-full h-full p-3 bg-[#f8fafc] text-slate-800 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-[10px] font-bold tracking-tight text-blue-600">TRANSORG</span>
              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-blue-100 text-blue-700">Enterprise AI</span>
            </div>
            <div className="my-1.5 flex flex-col gap-1">
              <span className="text-[11px] font-semibold tracking-tight text-slate-900 leading-tight">
                AI Solutions for Global Leaders
              </span>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="h-1.5 w-12 bg-blue-500 rounded-full" />
                <div className="h-1.5 w-8 bg-slate-300 rounded-full" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-slate-200 text-[9px] font-mono text-slate-500">
              <div className="bg-white p-1 rounded border border-slate-200">99.8% SLA</div>
              <div className="bg-white p-1 rounded border border-slate-200">200+ Deployments</div>
            </div>
          </div>
        );

      case 'registerkaro':
        return (
          <div className="w-full h-full p-3 bg-[#f0fdf4] text-slate-800 flex flex-col justify-between select-none">
            <div className="flex items-center justify-between pb-2 border-b border-emerald-200">
              <span className="text-[10px] font-bold tracking-tight text-emerald-700">RegisterKaro</span>
              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800">GovTech</span>
            </div>
            <div className="my-1.5 flex flex-col gap-1">
              <span className="text-[11px] font-semibold tracking-tight text-slate-900 leading-tight">
                One-Click Business Registration
              </span>
              <div className="h-4 w-full bg-white rounded border border-emerald-200 flex items-center px-1.5 text-[8px] text-slate-400">
                Search 200+ MCA Filings...
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-emerald-700 pt-1.5 border-t border-emerald-200">
              <span className="flex items-center gap-1">
                <CheckCircle size={9} className="text-emerald-600" /> MCA Verified
              </span>
              <span>10,000+ Startups</span>
            </div>
          </div>
        );

      case 'trybl':
        return (
          <div className="w-full h-full p-3 bg-[#180828] text-white flex flex-col justify-between select-none">
            <div className="flex items-center justify-between pb-2 border-b border-purple-500/20">
              <span className="text-[10px] font-bold tracking-tight text-purple-300">TRYBL</span>
              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-200">Web3</span>
            </div>
            <div className="my-1.5 flex flex-col gap-1">
              <span className="text-[11px] font-semibold tracking-tight text-purple-100 leading-tight">
                Play, Collect &amp; Trade
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[9px] font-mono bg-purple-900/60 border border-purple-500/30 px-1.5 py-0.5 rounded text-purple-200">
                  Arena Active
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-purple-400 pt-1.5 border-t border-purple-500/20">
              <span>Vault Synced</span>
              <span className="text-amber-300">Gasless Pay</span>
            </div>
          </div>
        );

      case 'zone':
        return (
          <div className="w-full h-full p-3 bg-[#171717] text-white flex flex-col justify-between select-none">
            <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
              <span className="text-[10px] font-bold tracking-tight text-amber-400">ZONE.GAME</span>
              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">Tournaments</span>
            </div>
            <div className="my-1.5 flex flex-col gap-1">
              <span className="text-[11px] font-semibold tracking-tight text-neutral-100 leading-tight">
                Competitive Esports Lobbies
              </span>
              <div className="flex items-center gap-1.5 text-[8px] font-mono text-amber-300/90">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>14 Active Matches Live</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-neutral-400 pt-1.5 border-t border-neutral-800">
              <span>Instant Payouts</span>
              <span className="text-neutral-200">Leaderboard #1</span>
            </div>
          </div>
        );

      case 'tbr':
        return (
          <div className="w-full h-full p-3 bg-[#0c192c] text-white flex flex-col justify-between select-none">
            <div className="flex items-center justify-between pb-2 border-b border-sky-500/20">
              <span className="text-[10px] font-bold tracking-tight text-sky-400">TEAM BLUE RISING</span>
              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-sky-500/20 text-sky-300">Esports</span>
            </div>
            <div className="my-1.5 flex flex-col gap-1">
              <span className="text-[11px] font-semibold tracking-tight text-sky-100 leading-tight">
                Championship Roster &amp; Media
              </span>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="h-1.5 w-6 bg-sky-400 rounded-full" />
                <span className="h-1.5 w-10 bg-sky-600 rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-sky-300 pt-1.5 border-t border-sky-500/20">
              <span>Global League</span>
              <span>Official Merch</span>
            </div>
          </div>
        );

      case 'tokensystem':
      default:
        return (
          <div className="w-full h-full p-3 bg-[#0f172a] text-white flex flex-col justify-between select-none">
            <div className="flex items-center justify-between pb-2 border-b border-slate-700">
              <span className="text-[10px] font-bold tracking-tight text-slate-300">DESIGN TOKENS</span>
              <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">v3.4.0</span>
            </div>
            <div className="my-1.5 grid grid-cols-4 gap-1">
              <div className="h-6 rounded bg-blue-500/80 flex items-center justify-center text-[8px] font-mono">primary</div>
              <div className="h-6 rounded bg-emerald-500/80 flex items-center justify-center text-[8px] font-mono">success</div>
              <div className="h-6 rounded bg-amber-500/80 flex items-center justify-center text-[8px] font-mono">warn</div>
              <div className="h-6 rounded bg-purple-500/80 flex items-center justify-center text-[8px] font-mono">accent</div>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono text-slate-400 pt-1.5 border-t border-slate-800">
              <span>WCAG AA Pass</span>
              <span className="text-emerald-400">Figma Synced</span>
            </div>
          </div>
        );
    }
  };

  // Clean display URL string
  const displayUrl = project.url.replace(/^https?:\/\//, '');

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity', transform: 'translate3d(0, 0, 0)' }}
      className="group relative flex flex-col justify-between h-full rounded-[2.2rem] sm:rounded-[2.4rem] bg-white border border-black/[0.08] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.06),0_8px_16px_-8px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.04] p-5 sm:p-5.5 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 select-none will-change-transform"
    >
      <div className="flex flex-col gap-4">
        {/* Browser Top Window Chrome (Liquid Glass Frame) */}
        <div className="rounded-[1.6rem] overflow-hidden border border-black/[0.06] bg-[#f8f9fc] shadow-inner">
          <div className="flex items-center justify-between px-3.5 py-2 bg-black/[0.03] border-b border-black/[0.04]">
            {/* 3 Window Control Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
              <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
              <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
            </div>

            {/* Address Bar Pill with Frosted Blur */}
            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.05] text-[10px] font-mono text-[#737378] max-w-[170px] truncate shadow-2xs">
              <Lock size={9} className="shrink-0 text-[#86868b]" />
              <span className="truncate">{displayUrl}</span>
            </div>

            {/* Live Indicator Dot */}
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-mono font-semibold text-emerald-700">Live</span>
            </div>
          </div>

          {/* Browser Viewport Preview Area */}
          <div className="h-32 sm:h-36 overflow-hidden group-hover:scale-[1.01] transition-transform duration-300 relative">
            {/* Top specular reflection */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none z-10" />
            {renderBrowserPreview()}
          </div>
        </div>

        {/* Project Details / Recessed Info Docket */}
        <div className="p-4 rounded-2xl bg-[#f8f9fc] border border-black/[0.04] shadow-[0_2px_6px_rgba(0,0,0,0.02)] flex flex-col gap-2.5">
          {/* Project Title */}
          <h3
            title={project.title}
            className="text-base sm:text-[17px] font-bold tracking-tight text-[#141416] group-hover:text-black transition-colors whitespace-nowrap overflow-hidden text-ellipsis"
          >
            {project.title}
          </h3>

          {/* Subtle Glass-Morphism Tags */}
          <div className="flex flex-wrap items-center gap-1.5">
            {project.tags && project.tags.length > 0 ? (
              project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white/90 backdrop-blur-md border border-black/[0.06] shadow-xs text-[11px] font-medium text-[#55555c] px-2.5 py-0.5 rounded-full whitespace-nowrap"
                >
                  {tag}
                </span>
              ))
            ) : project.domain ? (
              <span className="bg-white/90 backdrop-blur-md border border-black/[0.06] shadow-xs text-[11px] font-medium text-[#55555c] px-2.5 py-0.5 rounded-full">
                {project.domain}
              </span>
            ) : null}
          </div>

          {/* Senior Product Designer Description */}
          <p className="type-body-sm text-[#55555c] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Footer / Role, Platform & Glossy Black Pebble CTA */}
      <div className="mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between gap-2">
        <div className="flex flex-col type-meta leading-tight text-[#86868b] truncate">
          <span>Role: <strong className="font-semibold text-[#1d1d1f]">{project.role}</strong></span>
          <span className="text-[10px] text-[#86868b] mt-0.5">Platform: <span className="text-[#55555c] font-medium">{project.platform}</span></span>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} (opens in a new tab)`}
          className="group/link inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#141416] hover:bg-black text-white shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),0_6px_16px_rgba(0,0,0,0.2)] hover:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5),0_8px_20px_rgba(0,0,0,0.28)] hover:scale-105 active:scale-95 transition-all duration-200 shrink-0"
        >
          <span>{project.cta || (project.platform?.includes('Android') || project.platform?.includes('iOS') ? 'View App' : 'View Live')}</span>
          <ExternalLink
            size={12}
            className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      </div>
    </motion.article>
  );
}
