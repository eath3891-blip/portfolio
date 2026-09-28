import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * HeroInfoText:
 * Editorial positioning block ("UI/UX & Product Designer").
 * Positioned on the right side of the frame, directly above "Selected Collaborations".
 */
export default function HeroInfoText({ align = 'right' }) {
  const { designer } = PORTFOLIO_CONFIG;
  const isRight = align === 'right';

  return (
    <div
      className={`max-w-xs md:max-w-sm flex flex-col gap-2 pointer-events-auto select-none ${
        isRight ? 'items-start md:items-end text-left md:text-right' : 'items-start text-left'
      }`}
    >
      {/* Role Title with subtle rule */}
      <div className={`flex items-center gap-2 ${isRight ? 'md:flex-row-reverse' : ''}`}>
        <span className="h-px w-5 bg-[#1d1d1f]/40" />
        <p className="text-xs md:text-sm font-semibold tracking-tight text-[#1d1d1f] uppercase font-sans">
          {designer.role}
        </p>
      </div>

      {/* Craft Statement */}
      <p className="text-xs md:text-[13px] leading-relaxed text-[#737378] font-normal">
        {designer.statement}
      </p>

      {/* Design Pillars */}
      <div
        className={`flex flex-wrap gap-x-2.5 gap-y-1 pt-0.5 text-[11px] font-mono text-[#86868b]/80 ${
          isRight ? 'md:justify-end' : ''
        }`}
      >
        <span>Design Systems</span>
        <span>•</span>
        <span>Spatial UI</span>
        <span>•</span>
        <span>Interactive Polish</span>
      </div>
    </div>
  );
}
