import React, { useState, useEffect, useRef } from 'react';
import { COMPANIES_DATA } from '../../config/companies';

/**
 * CompanyLogoScroller:
 * Displays 3 real company logos at a time in clean white card boxes.
 * Continuous, smooth, linear horizontal scroll (marquee).
 * Features:
 * - Real brand logos inside crisp white boxes.
 * - Constant linear movement with zero stepping or hitching.
 * - Exactly 3 logo boxes span the visible viewport width.
 * - Pauses cleanly on hover so any logo can be inspected.
 * - Soft edge fade masks for seamless entry/exit.
 */
export default function CompanyLogoScroller({ className = '' }) {
  const containerRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(0);

  const companies = COMPANIES_DATA;
  // Two duplicate sets enable a mathematically seamless 50% loop
  const duplicatedCompanies = [...companies, ...companies];

  const MARGIN_RIGHT_PX = 8; // 8px margin between items

  // Measure container and calculate exact width so exactly 3 items fit across the visible area
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // Exactly 3 logos fit across the visible container width:
        // containerWidth = 3 * itemWidth + 2 * MARGIN_RIGHT_PX
        // => itemWidth = (containerWidth - 2 * MARGIN_RIGHT_PX) / 3
        const calculatedItemWidth = Math.floor((containerWidth - 2 * MARGIN_RIGHT_PX) / 3);
        setItemWidth(calculatedItemWidth);
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    window.addEventListener('resize', updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] overflow-hidden select-none py-1 group/scroller ${className}`}
      aria-label="Companies I have worked with"
    >
      {/* Subtle edge gradient fade masks for smooth entry and exit */}
      <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-[#fbfbfd] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-l from-[#fbfbfd] to-transparent z-10 pointer-events-none" />

      {/* Continuous Linear Scrolling Track */}
      <div
        className="flex w-max will-change-transform group-hover/scroller:[animation-play-state:paused]"
        style={{
          animation: 'marquee-infinite 15s linear infinite',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {duplicatedCompanies.map((company, index) => (
          <div
            key={`${company.id}-${index}`}
            title={company.name}
            style={{
              width: itemWidth ? `${itemWidth}px` : '115px',
              marginRight: `${MARGIN_RIGHT_PX}px`,
            }}
            className="
              group/item
              bg-white hover:bg-white
              border border-black/[0.08] hover:border-black/20
              rounded-lg
              flex items-center justify-center
              transition-all duration-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-xs
              cursor-default
              h-[38px] sm:h-[44px]
              px-2 sm:px-3
              flex-shrink-0
              overflow-hidden
            "
          >
            <img
              src={company.logoUrl}
              alt={company.name}
              draggable={false}
              loading="eager"
              className={`w-auto object-contain transition-transform duration-200 group-hover/item:scale-105 ${
                company.id === 'registerkaro'
                  ? 'max-h-[27px] sm:max-h-[30px] max-w-[96%] scale-[1.08]'
                  : 'max-h-[22px] sm:max-h-[25px] max-w-[90%]'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
