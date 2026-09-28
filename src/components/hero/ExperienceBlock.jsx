import React from 'react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * ExperienceBlock:
 * Faithful reproduction of the exact layout and typography from the user's reference image:
 * - Prominent bold "3+"
 * - "YEARS OF EXPERIENCE" in clean uppercase gray
 * - Indented two-line copy: "Collaborating with fast-paced teams & forward-thinking founders."
 * Positioned on the left side of the hero, directly above the UI/UX & Product Designer text.
 */
export default function ExperienceBlock({ className = '' }) {
  const { experience } = PORTFOLIO_CONFIG;

  return (
    <div className={`flex items-start gap-3.5 select-none pointer-events-auto ${className}`}>
      {/* Large Bold Display Number "3+" */}
      <div className="font-display text-4xl sm:text-5xl font-extrabold text-[#1a1a1c] tracking-tight leading-none">
        {experience.number}
      </div>

      {/* Label and Subtext Indented to the Right of 3+ */}
      <div className="flex flex-col justify-start pt-0.5">
        <span className="text-xs sm:text-[13px] font-semibold tracking-wider text-[#737378] uppercase font-sans">
          {experience.label}
        </span>
        <p className="text-xs sm:text-[12.5px] leading-snug text-[#737378] mt-1 font-normal max-w-[260px]">
          Collaborating with fast-paced teams &amp; forward-thinking founders.
        </p>
      </div>
    </div>
  );
}
