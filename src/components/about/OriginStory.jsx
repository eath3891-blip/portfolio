import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONFIG } from '../../config/about.config';

/**
 * OriginStory:
 * Reduced text + visual storytelling.
 * Statement: "I've been designing interfaces since before I knew it was called UX."
 * Accompanied by 2 concise sentences and an editorial demo visual of paper UI sketches.
 */
export default function OriginStory() {
  const { origin } = ABOUT_CONFIG;

  return (
    <section 
      aria-labelledby="origin-heading" 
      className="w-full py-16 sm:py-20 border-b border-black/[0.06]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Bold Headline & Concise narrative (Span 7) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col gap-4 sm:gap-5"
        >
          <div className="flex items-center gap-2">
            <span className="type-eyebrow">
              {origin.eyebrow}
            </span>
          </div>

          <h2
            id="origin-heading"
            className="type-h2 text-[#141416] max-w-2xl"
          >
            {origin.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#55555c] leading-relaxed max-w-xl pt-1 reading-width">
            {origin.body || origin.conciseStory}
          </p>

          {/* Deliberate narrative beat / bridge into Career Journey */}
          {origin.transition && (
            <p className="text-sm sm:text-base text-[#141416]/85 font-medium leading-relaxed max-w-xl pt-2 sm:pt-3">
              {origin.transition}
            </p>
          )}
        </motion.div>

        {/* Right Column: Editorial UI on Paper Visual (Span 5) */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end w-full"
        >
          <div className="group relative w-full max-w-[320px] sm:max-w-[380px] aspect-[4/3] rounded-3xl overflow-hidden border border-black/[0.08] shadow-[0_6px_24px_rgba(0,0,0,0.03)] bg-[#e5e5ea] select-none">
            <img
              src={origin.image.url}
              alt={origin.image.alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103"
            />
            {/* Subtle Gradient & Caption */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between text-white/90">
              <span className="text-xs font-mono tracking-tight text-white/80">
                {origin.image.caption}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-white/70 bg-black/40 px-2 py-0.5 rounded">
                {origin.image.badge || "ORIGIN"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
