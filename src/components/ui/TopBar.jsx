import React from 'react';
import ResumeButton from './ResumeButton';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * TopBar:
 * Perfectly balanced top bar where both the left ("Open to Work") and right ("Resume")
 * components share identical height, width, and rounded corner geometry.
 */
export default function TopBar({ onReplayIntro }) {
  const { designer } = PORTFOLIO_CONFIG;

  return (
    <header className="relative w-full pt-6 md:pt-8 px-6 md:px-12 flex items-center justify-between z-40 pointer-events-auto">
      {/* Top Left: Open to Work Pill - Symmetrically matched in height & width */}
      <div className="flex items-center">
        <button
          onClick={onReplayIntro}
          title="Open to Work • Click to replay welcome intro"
          className="group flex items-center justify-start gap-2.5 w-[155px] sm:w-[168px] h-[40px] sm:h-[42px] pl-1.5 pr-3.5 py-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-emerald-500/40 hover:border-emerald-500/70 shadow-[0_0_12px_rgba(16,185,129,0.06)] transition-all duration-300 ease-out hover:scale-102 active:scale-95 text-left select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30"
        >
          {/* Circular container holding the Happy Cat GIF with green border */}
          <div className="relative w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full overflow-hidden border border-emerald-500/30 bg-[#fafafa] flex-shrink-0 flex items-center justify-center">
            <img
              src="/images/billu-badmosh.gif"
              onError={(e) => {
                e.currentTarget.src = "https://media.tenor.com/lfDATg4Bhc0AAAAC/happy-cat.gif";
              }}
              alt="Happy Cat"
              className="w-full h-full object-cover select-none pointer-events-none group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Little Blinking Live Green Dot */}
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          {/* Text: Open to Work */}
          <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-[#1d1d1f] font-sans group-hover:text-emerald-700 transition-colors whitespace-nowrap">
            {designer.statusBadge || "Open to Work"}
          </span>
        </button>
      </div>

      {/* Top Right: Resume Button - Equal height and width */}
      <div className="flex items-center">
        <ResumeButton />
      </div>
    </header>
  );
}
