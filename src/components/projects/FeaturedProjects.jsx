import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_CONFIG } from '../../config/projects.config';
import FeaturedProjectCard from './FeaturedProjectCard';
import FeaturedParticlesBackground from './FeaturedParticlesBackground';

/**
 * FeaturedProjects:
 * Section 01 of the Projects page.
 * Arranges 3 prominent editorial case-study cards horizontally across desktop view.
 * Features an interactive particle canvas with mouse deflection and proximity connections.
 */
export default function FeaturedProjects({ onSelectProject }) {
  const { featuredSection, featuredProjects } = PROJECTS_CONFIG;
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-projects-heading"
      className="w-full bg-[#0b0b0e] text-white py-16 sm:py-20 md:py-28 border-y border-black/10 relative overflow-hidden"
    >
      {/* Interactive Canvas Particles Background with Mouse Deflection */}
      <FeaturedParticlesBackground containerRef={sectionRef} />

      {/* Ambient lighting pools for liquid glass refraction */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle top ambient sheen */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none z-[1]" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header with Scroll Emergence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3 mb-12 sm:mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-2">
            <span className="type-eyebrow text-neutral-400 font-semibold">
              {featuredSection.eyebrow || '01: FEATURED WORK'}
            </span>
          </div>

          <h2
            id="featured-projects-heading"
            className="type-h1 text-white"
          >
            {featuredSection.title}
          </h2>

          <p className="type-body text-[#a1a1aa] leading-relaxed max-w-xl">
            {featuredSection.subtitle}
          </p>
        </motion.div>

        {/* 3 Prominent Case Study Cards on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8 items-stretch">
          {featuredProjects.map((project, idx) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelect={onSelectProject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
