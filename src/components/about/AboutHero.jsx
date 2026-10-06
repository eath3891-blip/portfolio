import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ABOUT_CONFIG } from '../../config/about.config';

/**
 * AboutHero:
 * Two-column editorial composition balancing concise typography (left)
 * with an automatic crossfading image frame slideshow (right).
 * 
 * Behavior:
 * - Auto crossfade every 4.5s
 * - Subtle scale transition (1.00 -> 1.02)
 * - Minimal active indicator (01 / 03 and dots)
 * - Concise, scannable text
 */
export default function AboutHero() {
  const { hero } = ABOUT_CONFIG;
  const [currentIdx, setCurrentIdx] = useState(0);

  // Automatic interchange every 4.5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % hero.slideshow.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [hero.slideshow.length]);

  return (
    <section 
      aria-labelledby="about-hero-heading" 
      className="w-full pt-10 sm:pt-14 md:pt-16 pb-12 sm:pb-16 border-b border-black/[0.06]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Concise Typography (Span 7) */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5"
          >
            <span className="inline-block h-px w-6 bg-black/25" />
            <span className="text-[11px] sm:text-xs font-mono uppercase font-semibold tracking-[0.14em] text-[#86868b]">
              {hero.eyebrow}
            </span>
          </motion.div>

          {/* Large Display Headline: Intentional Semantic Progression in 3 Lines */}
          <motion.h1
            id="about-hero-heading"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.09 } }
            }}
            className="font-display leading-[0.98] sm:leading-[1.0] tracking-[-0.038em] text-[clamp(2.1rem,3.8vw,3.45rem)] max-w-[780px]"
          >
            {/* Group 1: Primary Identity (Near Black, Full Prominence) */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="block font-bold text-[#111113]"
            >
              Product Designer
            </motion.span>

            {/* Group 2: Secondary Approach (Dark Neutral Gray, Recedes Slightly) */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="block font-semibold text-[#5F6066] mt-0.5 sm:mt-1"
            >
              turning complex problems
            </motion.span>

            {/* Group 3: Tangible Outcome (Near Black, Visual Re-emergence) */}
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="block font-bold text-[#111113] mt-0.5 sm:mt-1"
            >
              into clear, usable experiences.
            </motion.span>
          </motion.h1>

          {/* One Concise Supporting Line: Clearly Secondary */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-[21px] font-normal text-[#66676D] leading-[1.5] max-w-xl mt-1 sm:mt-2"
          >
            {hero.supportingLine}
          </motion.p>
        </div>

        {/* Right Column: Editorial Image Frame Slideshow (Span 5 ~ 38% width) */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="group relative w-full max-w-[420px] aspect-[4/4.8] sm:aspect-[4/4.6] rounded-3xl overflow-hidden bg-[#e5e5ea] border border-black/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] select-none">
            {/* Crossfading Slideshow Container */}
            <AnimatePresence mode="wait">
              <motion.div
                key={hero.slideshow[currentIdx].id}
                initial={{ opacity: 0, scale: 1.0 }}
                animate={{ opacity: 1, scale: 1.02 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={hero.slideshow[currentIdx].url}
                  alt={hero.slideshow[currentIdx].alt}
                  style={hero.slideshow[currentIdx].objectPosition ? { objectPosition: hero.slideshow[currentIdx].objectPosition } : undefined}
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Gradient Scrim at Bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

            {/* Bottom Floating Info Bar: Minimal Indicator + Caption */}
            <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-10 flex items-center justify-between gap-3 text-white select-none">
              <span className="text-xs sm:text-[13px] font-medium tracking-tight text-white/95 font-sans truncate">
                {hero.slideshow[currentIdx].caption}
              </span>

              {/* Minimal Dot / Page Indicator */}
              <div className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/35 backdrop-blur-md border border-white/20">
                {hero.slideshow.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentIdx(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIdx ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/70 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
