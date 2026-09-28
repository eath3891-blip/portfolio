import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * HeroMonoTagline:
 * Reproduces the exact aesthetic from the user's reference image:
 * "Product Designer · 3+ years · Consumer Products · Growth & Conversion"
 * Positioned on the left side of the lower hero tier, perfectly parallel
 * with the Selected Collaborations marquee on the right.
 */
export default function HeroMonoTagline({ className = '' }) {
  const { designer } = PORTFOLIO_CONFIG;

  return (
    <div className={`select-none pointer-events-auto ${className}`}>
      <p className="font-mono text-xs sm:text-[13px] tracking-tight text-[#5a5a62] font-normal leading-normal whitespace-normal sm:whitespace-nowrap">
        {designer.tagline || "Product Designer · 3+ years · Consumer Products · Growth & Conversion"}
      </p>
    </div>
  );
}
