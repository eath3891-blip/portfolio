import React from 'react';

/**
 * SolariDrumDigit
 * High-performance hardware-accelerated rolling mechanical drum digit.
 * Features:
 * - GPU translate3d compositing with zero layout thrashing
 * - Split faceplate with 2px center seam and Solari spindle hinge notches
 * - Cylindrical 3D lighting vignette (top and bottom curved surface shadows)
 * - Condensed Anton typography
 */
const SolariDrumDigit = React.memo(function SolariDrumDigit({ digit }) {
  const num = parseInt(digit, 10);
  const safeNum = isNaN(num) ? 0 : num;

  // Digits 0 through 9
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div
      className="relative w-[58px] sm:w-[78px] md:w-[88px] h-[84px] sm:h-[114px] md:h-[126px] select-none rounded-[6px] sm:rounded-[8px] md:rounded-[10px] overflow-hidden bg-[#141416] border-t border-white/[0.18] border-b border-black/90 border-x border-white/[0.06] shadow-[0_12px_28px_-4px_rgba(0,0,0,0.35),0_4px_12px_rgba(0,0,0,0.2)]"
      style={{ perspective: '1000px' }}
    >
      {/* Rolling Digit Reel */}
      <div
        className="w-full h-full will-change-transform"
        style={{
          transform: `translate3d(0, -${safeNum * 100}%, 0)`,
          transition: 'transform 0.18s cubic-bezier(0.2, 0.9, 0.3, 1)',
        }}
      >
        {digits.map((d) => (
          <div
            key={d}
            className="w-full h-[84px] sm:h-[114px] md:h-[126px] flex items-center justify-center font-['Anton',sans-serif] text-[60px] sm:text-[82px] md:text-[92px] leading-none text-[#f6f6f8] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Mechanical Split Seam across center */}
      <div className="absolute top-1/2 inset-x-0 h-[2px] -translate-y-1/2 bg-[#09090b] shadow-[0_1px_0_rgba(255,255,255,0.1)] z-20 pointer-events-none" />

      {/* 3D Cylindrical Surface Vignette Overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.06) 24%, rgba(0,0,0,0) 44%, rgba(0,0,0,0) 56%, rgba(0,0,0,0.06) 76%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Left and Right Solari Hinge Notches */}
      <div className="absolute top-1/2 -left-[2px] w-[5px] h-[10px] -translate-y-1/2 bg-[#121215] border border-white/[0.12] rounded-r-[3px] z-30 pointer-events-none" />
      <div className="absolute top-1/2 -right-[2px] w-[5px] h-[10px] -translate-y-1/2 bg-[#121215] border border-white/[0.12] rounded-l-[3px] z-30 pointer-events-none" />
    </div>
  );
});

/**
 * FlipClockCounter
 * Retro Solari mechanical counter with 60fps smooth progression.
 * Displays 2 digit cards (00-99) and dynamically slides in the third card at 100%.
 */
export default function FlipClockCounter({ progress = 0, className = "" }) {
  const safeProgress = Math.min(100, Math.max(0, Math.round(progress)));

  const digits =
    safeProgress >= 100
      ? ['1', '0', '0']
      : [String(Math.floor(safeProgress / 10)), String(safeProgress % 10)];

  return (
    <div className={`flex flex-col items-center gap-3 sm:gap-4 ${className}`}>
      {/* Digit Cards Row */}
      <div className="flex items-center gap-2 sm:gap-3">
        {digits.map((d, idx) => (
          <SolariDrumDigit key={`slot-${idx}-${digits.length}`} digit={d} />
        ))}
      </div>

      {/* Status Caption */}
      <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.16em] uppercase text-[#86868b] font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3] shadow-[0_0_8px_rgba(0,113,227,0.8)] animate-pulse" />
        <span>{safeProgress >= 100 ? "Ready" : "Loading"}</span>
        <span className="opacity-40">&bull;</span>
        <span className="font-semibold text-[#1d1d1f]">{safeProgress}%</span>
      </div>
    </div>
  );
}
