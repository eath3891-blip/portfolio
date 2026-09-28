import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * HeroName:
 * Monumental editorial typography layer behind the central 3D model.
 * Positioned in close vertical proximity above the lower tagline and collaborations row
 * (pt-[22vh] - pt-[25vh]) for a unified, cohesive Apple-level composition.
 */
export default function HeroName() {
  const { designer } = PORTFOLIO_CONFIG;

  return (
    <div className="absolute inset-0 flex items-start justify-center pointer-events-none select-none z-10 overflow-hidden px-4 md:px-8 pt-[20vh] sm:pt-[22vh] md:pt-[24vh]">
      <div className="w-full flex items-center justify-between max-w-[1440px] mx-auto">
        <h1 className="w-full flex justify-between items-baseline font-display text-[14vw] md:text-[13vw] lg:text-[12.5vw] font-extrabold text-[#141416] tracking-[-0.045em] leading-[0.85] whitespace-nowrap">
          <span className="inline-block">
            {designer.firstName}
          </span>
          <span className="inline-block">
            {designer.lastName}
          </span>
        </h1>
      </div>
    </div>
  );
}
