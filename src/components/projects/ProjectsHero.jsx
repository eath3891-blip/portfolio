import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_CONFIG } from '../../config/projects.config';

/**
 * ProjectsHero:
 * Apple-grade minimal editorial hero section for Manoj Bhatt's Projects page.
 * Eyebrow: SELECTED WORK
 * Heading: Projects
 * Supporting line: A collection of problems I've had fun solving.
 * Subtext: From complex enterprise systems to AI, analytics, gaming and digital experiences...
 */
export default function ProjectsHero() {
  const { hero } = PROJECTS_CONFIG;

  return (
    <section aria-labelledby="projects-hero-heading" className="w-full pt-14 sm:pt-20 md:pt-24 pb-14 sm:pb-18">
      <div className="max-w-4xl flex flex-col gap-5 sm:gap-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5"
        >
          <span className="inline-block h-px w-6 bg-black/30" />
          <span className="type-eyebrow">
            {hero.eyebrow}
          </span>
        </motion.div>

        {/* Large Display Heading */}
        <motion.h1
          id="projects-hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="type-h1 text-[#141416] max-w-3xl"
        >
          {hero.heading}
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="type-body-lg text-[#55555c] leading-relaxed max-w-2xl reading-width"
        >
          {hero.supportingStatement}
        </motion.p>
      </div>
    </section>
  );
}
