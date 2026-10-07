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
    <header className="relative w-full pt-3 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-12 flex items-center justify-between z-40 pointer-events-auto">
      {/* Top Left: Open to Work Pill - Non-clickable status badge matching Resume button dimensions */}
      <div className="flex items-center">
        <div
          title="Open to Work"
          className="group flex items-center justify-start gap-1.5 sm:gap-2.5 w-auto sm:w-[168px] h-[36px] sm:h-[42px] pl-1.5 pr-3 sm:pr-3.5 py-1 sm:py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.06)] text-left select-none cursor-default"
        >
          {/* Circular container holding the Happy Cat GIF with green border */}
          <div className="relative w-6 h-6 sm:w-7.5 sm:h-7.5 rounded-full overflow-hidden border border-emerald-500/30 bg-[#fafafa] flex-shrink-0 flex items-center justify-center">
            <img
              src="/images/billu-badmosh.gif"
              onError={(e) => {
                e.currentTarget.src = "https://media.tenor.com/lfDATg4Bhc0AAAAC/happy-cat.gif";
              }}
              alt="Happy Cat"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>

          {/* Little Blinking Live Green Dot */}
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>

          {/* Text: Open to Work */}
          <span className="text-[11.5px] sm:text-[13px] font-semibold tracking-tight text-[#1d1d1f] font-sans whitespace-nowrap">
            {designer.statusBadge || "Open to Work"}
          </span>
        </div>
      </div>

      {/* Top Right: Resume Button - Equal height and width */}
      <div className="flex items-center">
        <ResumeButton />
      </div>
    </header>
  );
}
