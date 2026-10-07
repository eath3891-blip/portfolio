import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_CONFIG } from '../../config/projects.config';
import { ArrowUpRight, Layers, Sparkles } from 'lucide-react';

/**
 * MoreOfMyWork:
 * Section 03 of the Projects page.
 * Two large, balanced destination cards for Behance and Figma.
 * Distinct portal styling encouraging deeper exploration of Manoj's design craft.
 */
export default function MoreOfMyWork() {
  const { moreWorkSection } = PROJECTS_CONFIG;

  return (
    <section
      aria-labelledby="more-work-heading"
      className="w-full py-12 sm:py-16 md:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-2.5 mb-10 sm:mb-12 max-w-2xl"
      >
        <div className="flex items-center gap-2">
          <span className="type-eyebrow text-[#86868b]">{moreWorkSection.eyebrow || '03: EXTERNAL DESTINATIONS'}</span>
        </div>

        <h2
          id="more-work-heading"
          className="type-h2 text-[#141416]"
        >
          {moreWorkSection.title}
        </h2>

        <p className="type-body-sm text-[#737378] leading-relaxed">
          {moreWorkSection.subtitle}
        </p>
      </motion.div>

      {/* Two Balanced External Destination Cards (Liquid Glass Theme) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Behance Card */}
        <motion.a
          href={moreWorkSection.destinations[0].url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore Behance visual case studies and design work (opens in a new tab)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity', transform: 'translate3d(0, 0, 0)' }}
          className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-[2.2rem] sm:rounded-[2.8rem] bg-white border border-black/[0.08] shadow-[0_24px_55px_-12px_rgba(0,0,0,0.06),0_8px_16px_-8px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.04] hover:border-[#0057ff]/40 hover:shadow-[0_32px_70px_-15px_rgba(0,87,255,0.14)] hover:-translate-y-1.5 transition-all duration-300 select-none will-change-transform"
        >
          <div className="flex flex-col gap-5">
            {/* Top Bar: 3D App Icon Well + Frosted Category Pill */}
            <div className="flex items-center justify-between gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#004cd8] to-[#2b7fff] text-white flex items-center justify-center shadow-md border border-white/40 group-hover:scale-105 transition-transform duration-200">
                <span className="font-extrabold text-xl tracking-tighter">Bē</span>
              </div>

              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold text-[#0057ff] bg-blue-50/80 backdrop-blur-md border border-blue-200/60 shadow-xs">
                {moreWorkSection.destinations[0].pillText}
              </span>
            </div>

            {/* Recessed Content Docket */}
            <div className="p-5 rounded-2xl sm:rounded-3xl bg-[#f8f9fc] border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-2.5">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#141416] group-hover:text-[#0057ff] transition-colors">
                {moreWorkSection.destinations[0].name}
              </h3>

              <p className="text-sm font-semibold text-[#1d1d1f] leading-snug">
                {moreWorkSection.destinations[0].tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed pt-2 border-t border-black/[0.04]">
                {moreWorkSection.destinations[0].description}
              </p>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-6 pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="self-start px-3 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono text-[#86868b] shadow-2xs whitespace-nowrap">
              behance.net/manojbhatt30
            </span>

            <div className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#141416] group-hover:bg-[#0057ff] text-white text-xs sm:text-sm font-semibold shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),0_6px_16px_rgba(0,0,0,0.2)] group-hover:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(0,87,255,0.3)] hover:scale-102 active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0">
              <span className="whitespace-nowrap">{moreWorkSection.destinations[0].ctaText}</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </motion.a>

        {/* Figma Card */}
        <motion.a
          href={moreWorkSection.destinations[1].url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Figma community templates and design files (opens in a new tab)"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity', transform: 'translate3d(0, 0, 0)' }}
          className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-[2.2rem] sm:rounded-[2.8rem] bg-white border border-black/[0.08] shadow-[0_24px_55px_-12px_rgba(0,0,0,0.06),0_8px_16px_-8px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.04] hover:border-[#f24e1e]/40 hover:shadow-[0_32px_70px_-15px_rgba(242,78,30,0.14)] hover:-translate-y-1.5 transition-all duration-300 select-none will-change-transform"
        >
          <div className="flex flex-col gap-5">
            {/* Top Bar: 3D App Icon Well + Frosted Category Pill */}
            <div className="flex items-center justify-between gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1e1e1e] text-white flex items-center justify-center shadow-md border border-white/20 group-hover:scale-105 transition-transform duration-200">
                <svg className="w-5 h-5" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                </svg>
              </div>

              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold text-[#f24e1e] bg-orange-50/80 backdrop-blur-md border border-orange-200/60 shadow-xs">
                {moreWorkSection.destinations[1].pillText}
              </span>
            </div>

            {/* Recessed Content Docket */}
            <div className="p-5 rounded-2xl sm:rounded-3xl bg-[#f8f9fc] border border-black/[0.04] shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col gap-2.5">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#141416] group-hover:text-[#f24e1e] transition-colors">
                {moreWorkSection.destinations[1].name}
              </h3>

              <p className="text-sm font-semibold text-[#1d1d1f] leading-snug">
                {moreWorkSection.destinations[1].tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#55555c] leading-relaxed pt-2 border-t border-black/[0.04]">
                {moreWorkSection.destinations[1].description}
              </p>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="mt-6 pt-4 border-t border-black/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="self-start px-3 py-1.5 rounded-full bg-white border border-black/[0.06] text-xs font-mono text-[#86868b] shadow-2xs whitespace-nowrap">
              figma.com/@manojbhatt
            </span>

            <div className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#141416] group-hover:bg-[#f24e1e] text-white text-xs sm:text-sm font-semibold shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),0_6px_16px_rgba(0,0,0,0.2)] group-hover:shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.4),0_8px_20px_rgba(242,78,30,0.3)] hover:scale-102 active:scale-95 transition-all duration-200 whitespace-nowrap shrink-0">
              <span className="whitespace-nowrap">{moreWorkSection.destinations[1].ctaText}</span>
              <ArrowUpRight
                size={14}
                className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
