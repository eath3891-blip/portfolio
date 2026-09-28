import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONFIG } from '../../config/about.config';

/**
 * ExploringSection (What's Next):
 * Focuses on Manoj's evolution into building:
 * "And now, I'm building."
 * 
 * Clean, grounded editorial layout:
 * Left: Eyebrow + Primary headline + Single honest paragraph + "Experimenting with" tag row.
 * Right: Designer workbench / product prototype experiment visual.
 */
export default function ExploringSection() {
  const { currentlyExploring } = ABOUT_CONFIG;

  return (
    <section 
      aria-labelledby="exploring-heading" 
      className="w-full py-16 sm:py-20 md:py-24 border-b border-black/[0.06]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Headline & Editorial Narrative (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-5 sm:gap-6"
        >
          {/* Eyebrow */}
          <span className="text-[11px] sm:text-xs font-mono uppercase font-semibold tracking-[0.14em] text-[#86868b]">
            {currentlyExploring.eyebrow}
          </span>

          {/* Primary Section Heading — Harmonized with other .type-h1 section headings */}
          <h2
            id="exploring-heading"
            className="type-h1 text-[#141416]"
          >
            <span className="block sm:inline">And now, </span>
            <span className="block sm:inline">I'm building.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-[17px] sm:text-[19px] md:text-[20px] font-normal text-[#55555c] leading-[1.55] max-w-2xl">
            {currentlyExploring.supportingCopy}
          </p>

          {/* Experimenting With Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <span className="text-xs sm:text-[13px] font-mono text-[#86868b] mr-1">
              {currentlyExploring.experimentLabel}:
            </span>
            {currentlyExploring.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium text-[#1d1d1f] bg-black/[0.04] border border-black/[0.06] shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Personal Building / Experiment Visual (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="group relative w-full max-w-[420px] aspect-[16/11] rounded-[2.2rem] sm:rounded-[2.4rem] overflow-hidden border border-white/80 ring-1 ring-black/[0.06] shadow-[0_16px_36px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.04)] bg-[#18181b] select-none">
            {/* Top Specular Sheen */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none z-10 rounded-t-[2.2rem] sm:rounded-t-[2.4rem]" />

            {/* Workbench / Prototype Screenshot Image */}
            <img
              src={currentlyExploring.visual.url}
              alt={currentlyExploring.visual.alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
            />

            {/* Subtle Gradient for Label Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

            {/* Micro Label (Bottom Left) */}
            {currentlyExploring.visual.label && (
              <div className="absolute bottom-3.5 left-4 z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium text-white/95 bg-white/20 backdrop-blur-md border border-white/30 shadow-xs">
                  {currentlyExploring.visual.label}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
