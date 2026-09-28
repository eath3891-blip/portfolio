import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT_CONFIG } from '../../config/about.config';

/**
 * HowIThinkSection:
 * Refined editorial layout with reduced text, strong visual anchor,
 * and fluid scroll emergence animations as elements enter the viewport.
 */
export default function HowIThinkSection() {
  const { howIThink } = ABOUT_CONFIG;
  const [selectedNumber, setSelectedNumber] = useState('01');

  const activePrinciple = howIThink.principles.find((p) => p.number === selectedNumber) || howIThink.principles[0];

  return (
    <section 
      aria-labelledby="how-i-think-heading" 
      className="w-full py-16 sm:py-24 border-b border-black/[0.06]"
    >
      {/* Header with Scroll Emergence */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
      >
        <div className="flex flex-col gap-3 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="type-eyebrow">
              {howIThink.eyebrow}
            </span>
          </div>

          <h2
            id="how-i-think-heading"
            className="type-h1 text-[#141416]"
          >
            {howIThink.title}
          </h2>

          <p className="text-lg sm:text-xl font-medium text-[#55555c] tracking-tight leading-snug">
            “{howIThink.supportingStatement}”
          </p>
        </div>

        {/* The One Strong Earned Observation */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.03] border border-black/[0.06] max-w-md self-start md:self-auto">
          <span className="type-eyebrow block mb-1 text-[10px]">
            Core Philosophy
          </span>
          <p className="text-base sm:text-lg font-semibold text-[#141416] tracking-tight leading-snug">
            “{howIThink.coreObservation}”
          </p>
        </div>
      </motion.div>

      {/* Main Grid: Left Visual Anchor + Right 6 Interactive Principles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Design Artifact Visual Anchor + Active Principle Deep Dive (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 45, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28"
        >
          {/* Design Artifact Visual Frame */}
          <div className="relative w-full aspect-[4/3] rounded-[2.2rem] overflow-hidden bg-[#e5e5ea] border border-white/80 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.06)] select-none">
            <img
              src={howIThink.visual.url}
              alt={howIThink.visual.alt}
              className="w-full h-full object-cover object-center"
            />
            {/* Specular Top Sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between text-white/90">
              <span className="text-xs font-mono tracking-tight text-white/90">
                {howIThink.visual.caption}
              </span>
              <span className="text-[10px] font-mono bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white border border-white/30">
                Artifact
              </span>
            </div>
          </div>

          {/* Active Principle Progressive Disclosure Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePrinciple.number}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-[2rem] bg-white/95 backdrop-blur-xl border border-white/90 shadow-[0_16px_36px_-10px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] flex flex-col gap-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-black">
                  Principle {activePrinciple.number}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-black" />
              </div>

              <h4 className="font-display text-lg font-bold text-[#141416] tracking-tight">
                {activePrinciple.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed">
                {activePrinciple.deepDive}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right Column: 6 Scannable Interactive Principles (Span 7) */}
        <div className="lg:col-span-7 flex flex-col divide-y divide-black/[0.06] border-t border-b border-black/[0.06]">
          {howIThink.principles.map((p, idx) => {
            const isSelected = p.number === selectedNumber;

            return (
              <motion.div
                key={p.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedNumber(p.number)}
                onMouseEnter={() => setSelectedNumber(p.number)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedNumber(p.number);
                  }
                }}
                className={`py-5 sm:py-6 px-4 sm:px-6 transition-all duration-200 flex flex-col gap-1.5 cursor-pointer rounded-2xl select-none ${
                  isSelected ? 'bg-white shadow-xs' : 'hover:bg-white/60'
                }`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span
                      className={`font-mono text-sm sm:text-base transition-colors ${
                        isSelected ? 'font-bold text-black' : 'text-[#86868b]'
                      }`}
                    >
                      {p.number}
                    </span>

                    <h3
                      className={`font-display text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isSelected ? 'text-[#141416]' : 'text-[#333]'
                      }`}
                    >
                      {p.title}
                    </h3>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full transition-transform duration-200 ${
                      isSelected ? 'bg-black scale-125' : 'bg-transparent border border-black/20'
                    }`}
                  />
                </div>

                {/* Scannable One Short Sentence */}
                <p className="text-xs sm:text-[13px] text-[#55555c] leading-relaxed pl-7 sm:pl-9">
                  {p.oneLiner}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
