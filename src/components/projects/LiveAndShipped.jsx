import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_CONFIG } from '../../config/projects.config';
import LiveProjectCard from './LiveProjectCard';

/**
 * LiveAndShipped:
 * Section 02 of the Projects page.
 * Displays 6 real-world shipped websites in a balanced 3x2 desktop grid.
 * Emphasizes: Designed → Built → Shipped → Live
 */
export default function LiveAndShipped() {
  const { liveSection, liveShippedProjects } = PROJECTS_CONFIG;

  return (
    <section
      aria-labelledby="live-shipped-heading"
      className="w-full py-12 sm:py-16 md:py-20 border-b border-black/[0.06]"
    >
      {/* Section Header with Scroll Emergence */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12"
      >
        <div className="flex flex-col gap-2.5 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="type-eyebrow text-[#86868b]">{liveSection.eyebrow || '02: REAL-WORLD DELIVERABLES'}</span>
          </div>

          <h2
            id="live-shipped-heading"
            className="type-h2 text-[#141416]"
          >
            {liveSection.title}
          </h2>

          <p className="type-body-sm text-[#737378] leading-relaxed">
            {liveSection.subtitle}
          </p>
        </div>

        {/* Process Cadence Pill */}
        <div className="shrink-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.05] text-[11px] font-mono text-[#55555c]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{liveSection.badge}</span>
          </div>
        </div>
      </motion.div>

      {/* 6 Cards Grid: 3x2 on desktop, 2x3 on tablet, 1-col on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {liveShippedProjects.map((project, idx) => (
          <LiveProjectCard
            key={project.id}
            project={project}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
