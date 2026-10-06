import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { ABOUT_CONFIG } from '../../config/about.config';

/**
 * JourneySection:
 * Horizontal interactive roadmap with reduced scannable cards
 * and an active detail panel containing a responsive milestone visual.
 * 
 * Interaction:
 * - Click/select milestone on track
 * - Text & image crossfade smoothly in the detail panel below
 * - Milestone cards stay light, clean, and scannable
 */
export default function JourneySection() {
  const { journey } = ABOUT_CONFIG;
  const defaultMilestone = journey.milestones.find((m) => m.id === 'where-i-am-now') || journey.milestones[4] || journey.milestones[0];
  const [activeMilestoneId, setActiveMilestoneId] = useState(defaultMilestone.id);
  const scrollContainerRef = useRef(null);

  const activeMilestone = journey.milestones.find((m) => m.id === activeMilestoneId) || journey.milestones[0];

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      aria-labelledby="journey-heading" 
      className="w-full py-16 sm:py-20 border-b border-black/[0.06]"
    >
      {/* Header with Scroll Emergence */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
      >
        <div className="flex flex-col gap-2.5 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="type-eyebrow">
              {journey.eyebrow}
            </span>
          </div>

          <h2
            id="journey-heading"
            className="type-h1 text-[#141416]"
          >
            {journey.title}
          </h2>

          <p className="type-body-lg text-[#55555c] leading-relaxed">
            {journey.supportingLine}
          </p>
        </div>

        {/* Scroll Controls for Desktop */}
        <div className="hidden md:flex items-center gap-2 select-none">
          <button
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            className="w-9 h-9 rounded-full bg-white border border-black/[0.08] hover:border-black/30 flex items-center justify-center text-[#1d1d1f] hover:bg-black/5 transition-colors shadow-2xs"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            className="w-9 h-9 rounded-full bg-white border border-black/[0.08] hover:border-black/30 flex items-center justify-center text-[#1d1d1f] hover:bg-black/5 transition-colors shadow-2xs"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </motion.div>

      {/* ── DESKTOP: Horizontal Milestone Track & Active Detail Panel (>= md) ── */}
      <div className="hidden md:block w-full min-w-0">
        {/* Horizontal Milestone Track */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full"
        >
          {/* Horizontal Track Container: with pt-4 to prevent clipping active card top & badges */}
          <div
            ref={scrollContainerRef}
            className="w-full overflow-x-auto pt-4 pb-4 scrollbar-none snap-x snap-mandatory flex gap-4 sm:gap-5 select-none pointer-events-auto"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {journey.milestones.map((m) => {
              const isActive = m.id === activeMilestoneId;
              return (
                <button
                  key={m.id}
                  onClick={() => setActiveMilestoneId(m.id)}
                  className={`flex-shrink-0 w-[250px] sm:w-[270px] p-5 rounded-2xl text-left transition-all duration-300 snap-start flex flex-col justify-between relative focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 ${
                    isActive
                      ? 'bg-white border-2 border-black shadow-[0_8px_30px_rgba(0,0,0,0.06)] -translate-y-0.5'
                      : 'bg-white/70 hover:bg-white border border-black/[0.06] hover:border-black/[0.15] shadow-xs'
                  }`}
                >
                  {/* Concurrent M.Des badge */}
                  {m.isConcurrent && (
                    <div className="absolute -top-2.5 left-4 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#141416] text-white text-[9px] font-mono font-medium shadow-sm">
                      <GraduationCap size={10} className="text-emerald-400" />
                      <span>Parallel</span>
                    </div>
                  )}

                  {/* Card Top: Phase & Period */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${isActive ? 'text-black font-bold' : 'text-[#86868b]'}`}>
                      {m.phase}
                    </span>
                    <span className="text-[10px] font-mono bg-black/[0.04] px-1.5 py-0.5 rounded text-[#55555c]">
                      {m.period}
                    </span>
                  </div>

                  {/* Milestone Heading & Subtitle */}
                  <div className="flex flex-col gap-0.5 mb-3">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#141416] tracking-tight leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-xs text-[#86868b] font-medium leading-snug">
                      {m.subtitle}
                    </p>
                  </div>

                  {/* Short One-Liner Description */}
                  <p className="text-xs text-[#55555c] line-clamp-2 leading-relaxed mb-3">
                    {m.oneLiner}
                  </p>

                  {/* Footer Tag */}
                  <div className="pt-2.5 border-t border-black/[0.06] flex items-center justify-between">
                    <span className={`text-[10px] font-mono ${isActive ? 'text-black font-bold' : 'text-[#86868b]'}`}>
                      {m.scopeTag}
                    </span>
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-black scale-125' : 'bg-black/20'}`} />
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Selected Milestone Active Detail Panel with Visual Element */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMilestone.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
          >
            {/* Left Textual Detail (Span 7) */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#86868b]">
                <span className="font-bold text-black">{activeMilestone.phase}</span>
                <span>•</span>
                <span>{activeMilestone.period}</span>
                {activeMilestone.isConcurrent && (
                  <>
                    <span>•</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                      {activeMilestone.concurrentBadge}
                    </span>
                  </>
                )}
              </div>

              <h4 className="font-display text-xl sm:text-2xl font-bold text-[#141416] tracking-tight">
                {activeMilestone.title}: <span className="text-[#55555c] font-normal">{activeMilestone.subtitle}</span>
              </h4>

              {/* Structured Story Narrative */}
              {activeMilestone.story ? (
                <div className="flex flex-col gap-3.5 my-1">
                  {/* Context */}
                  {activeMilestone.story.context && (
                    <p className="text-sm sm:text-[15px] text-[#2c2c2e] leading-relaxed">
                      {activeMilestone.story.context}
                    </p>
                  )}

                  {/* What I Did */}
                  {activeMilestone.story.workDone && (
                    <div className="flex flex-col gap-1 pl-3 border-l-2 border-black/10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b]">
                        What I Was Doing
                      </span>
                      <p className="text-xs sm:text-[13.5px] text-[#55555c] leading-relaxed">
                        {activeMilestone.story.workDone}
                      </p>
                    </div>
                  )}

                  {/* Impact Highlight */}
                  {activeMilestone.story.impact && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50/90 border border-emerald-200/70 text-emerald-950 text-xs sm:text-[13px] font-medium self-start shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      <span>{activeMilestone.story.impact}</span>
                    </div>
                  )}

                  {/* The Shift */}
                  {activeMilestone.story.whatChanged && (
                    <div className="flex flex-col gap-1 pl-3 border-l-2 border-black/10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b]">
                        The Shift
                      </span>
                      <p className="text-xs sm:text-[13.5px] text-[#55555c] leading-relaxed">
                        {activeMilestone.story.whatChanged}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <p className="text-sm sm:text-base text-[#55555c] leading-relaxed">
                  {activeMilestone.deepDive}
                </p>
              )}

              <div className="pt-2 flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#86868b]">
                  Scope Focus:
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-black/[0.04] text-[#141416] border border-black/[0.06]">
                  {activeMilestone.scopeTag}
                </span>
              </div>
            </div>

            {/* Right Active Milestone Visual (Span 5) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div 
                className={`relative w-full max-w-[340px] aspect-[16/10] rounded-2xl overflow-hidden border border-black/[0.08] shadow-xs select-none ${
                  activeMilestone.imageBg ? 'flex items-center justify-center' : 'bg-[#e5e5ea]'
                }`}
                style={{ backgroundColor: activeMilestone.imageBg || undefined }}
              >
                {activeMilestone.imageBg ? (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.14)_0%,transparent_70%)] pointer-events-none" />
                    <motion.img
                      key={activeMilestone.image}
                      src={activeMilestone.image}
                      alt={activeMilestone.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="w-auto h-auto max-w-[170px] max-h-[75px] object-contain relative z-10 drop-shadow-[0_4px_20px_rgba(245,158,11,0.25)]"
                    />
                  </>
                ) : (
                  <motion.img
                    key={activeMilestone.image}
                    src={activeMilestone.image}
                    alt={activeMilestone.title}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: activeMilestone.imagePosition || 'center' }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white/90">
                  <span className="text-[11px] font-mono tracking-tight text-white/90 truncate">
                    {activeMilestone.subtitle}
                  </span>
                  <span className="text-[10px] font-mono bg-black/40 px-1.5 py-0.5 rounded text-white/80">
                    {activeMilestone.period}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── MOBILE: Concise Vertical Career Timeline (< md) ── */}
      <div className="flex md:hidden flex-col gap-3.5 pt-2 w-full min-w-0">
        {journey.milestones.map((m) => {
          const isCurrent = m.id === 'where-i-am-now';
          return (
            <div
              key={`mobile-${m.id}`}
              className={`p-4 rounded-2xl border transition-all ${
                isCurrent
                  ? 'bg-white border-black/20 shadow-sm'
                  : 'bg-white/85 border-black/[0.06] shadow-2xs'
              }`}
            >
              {/* Header: Period & Scope Badge */}
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#86868b]">
                  {m.phase} · {m.period}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] text-[#141416] border border-black/[0.06] shrink-0">
                  {m.scopeTag}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="font-display text-base font-bold text-[#141416] leading-snug">
                {m.title}
                <span className="block text-xs font-normal text-[#55555c] mt-0.5">
                  {m.subtitle}
                </span>
              </h3>

              {/* Concise One-Liner Description */}
              <p className="text-xs text-[#55555c] leading-relaxed mt-2 pt-2 border-t border-black/[0.04]">
                {m.oneLiner}
              </p>

              {/* Highlight if impact exists */}
              {m.story?.impact && (
                <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-900 text-[11px] font-medium border border-emerald-200/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span>{m.story.impact}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
