import React from 'react';
import { COMPANIES_DATA } from '../../config/companies';

/**
 * CompanyMarquee:
 * Continuous, smooth, infinite marquee for company logos.
 * Data-driven and easily updated with real client/company logos.
 */
export default function CompanyMarquee({ className = '' }) {
  // Duplicate array to enable seamless infinite scroll loop
  const duplicatedCompanies = [...COMPANIES_DATA, ...COMPANIES_DATA];

  return (
    <div className={`relative w-full max-w-[280px] sm:max-w-[320px] overflow-hidden py-1 ${className}`}>
      {/* Left and right subtle fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#fbfbfd] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#fbfbfd] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee-infinite flex items-center gap-6">
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company.id}-${index}`}
            className="group flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-opacity hover:opacity-100 opacity-60 flex-shrink-0 cursor-default"
            title={company.name}
          >
            {/* Minimal SVG Mark */}
            <svg
              className="w-4 h-4 text-[#1d1d1f] group-hover:text-black transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={company.svgPath} />
            </svg>
            <span className="text-[11px] font-medium tracking-tight text-[#1d1d1f] whitespace-nowrap">
              {company.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
