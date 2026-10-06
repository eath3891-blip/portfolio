import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONFIG } from '../../config/about.config';

/**
 * EvolutionStatement:
 * Important senior-level positioning statement after the Journey section:
 * "UI → UX → Product → Systems"
 * Followed by the three core introspections.
 */
export default function EvolutionStatement() {
  const { evolution } = ABOUT_CONFIG;

  return (
    <section 
      aria-label="Design Evolution Statement" 
      className="w-full py-20 sm:py-28 md:py-32 border-b border-black/[0.06] flex flex-col items-center text-center select-none"
    >
      <div className="max-w-4xl flex flex-col items-center gap-10 sm:gap-12">
        {/* Large Visual Evolution Progression */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-5 md:gap-6 w-full px-2"
        >
          {evolution.tags.map((tag, idx) => (
            <React.Fragment key={tag}>
              <span className="font-display text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#141416]">
                {tag}
              </span>
              {idx < evolution.tags.length - 1 && (
                <span className="text-base sm:text-2xl md:text-4xl text-[#86868b] font-light select-none">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* 3-Step Philosophical Progression */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2.5 sm:gap-3 text-base sm:text-xl md:text-2xl font-medium tracking-tight text-[#71717a] leading-relaxed max-w-2xl px-2"
        >
          {evolution.lines.map((line, idx) => {
            const isLast = idx === evolution.lines.length - 1;
            return (
              <p
                key={idx}
                className={isLast ? 'text-[#141416] font-bold text-lg sm:text-2xl md:text-[28px] mt-1 sm:mt-2' : ''}
              >
                {line}
              </p>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
