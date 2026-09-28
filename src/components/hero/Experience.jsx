import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import CompanyMarquee from './CompanyMarquee';

/**
 * Experience:
 * Corresponds to "Companies logo" in the wireframe reference.
 * Displays visually prominent "3+" counter, "YEARS OF EXPERIENCE",
 * and the continuous seamless company logo marquee.
 */
export default function Experience() {
  const { experience } = PORTFOLIO_CONFIG;

  return (
    <div className="flex flex-col items-start md:items-end gap-3 pointer-events-auto">
      {/* Experience Metric */}
      <div className="flex flex-col md:items-end text-left md:text-right">
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1d1d1f]">
            {experience.number}
          </span>
          <span className="text-[11px] md:text-xs font-semibold tracking-wider text-[#86868b] uppercase">
            {experience.label}
          </span>
        </div>
        <p className="text-[11px] text-[#a1a1a6] mt-0.5 max-w-[220px]">
          {experience.caption}
        </p>
      </div>

      {/* Infinite Company Marquee */}
      <div className="mt-1 pt-2 border-t border-black/[0.06] w-full flex md:justify-end">
        <CompanyMarquee />
      </div>
    </div>
  );
}
