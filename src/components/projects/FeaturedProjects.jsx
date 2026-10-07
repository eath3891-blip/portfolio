import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Medusae } from 'antigravity-particle';
import 'antigravity-particle/medusae.css';
import { PROJECTS_CONFIG } from '../../config/projects.config';
import FeaturedProjectCard from './FeaturedProjectCard';

const medusaeConfig = {
  particles: {
    colorBase: '#12070a',
    colorOne: '#d91e2b',
    colorTwo: '#df9b20',
    colorThree: '#f6c445',
    baseSize: 0.011,
    activeSize: 0.024,
    blobScaleX: 0.85,
    blobScaleY: 0.55,
  },
  cursor: {
    strength: 4,
    dragFactor: 0.02,
  },
  background: {
    color: '#0b0b0e',
  }
};

/**
 * FeaturedProjects:
 * Section 01 of the Projects page.
 * Arranges 4 prominent editorial case-study cards across desktop view.
 * Features an interactive Google Antigravity Medusae particle swarm background.
 */
export default function FeaturedProjects({ onSelectProject }) {
  const { featuredSection, featuredProjects } = PROJECTS_CONFIG;
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDesktop(window.innerWidth >= 768);
      const handleResize = () => setIsDesktop(window.innerWidth >= 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  React.useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '200px' }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-projects-heading"
      className="w-full bg-[#0b0b0e] text-white py-16 sm:py-20 md:py-28 border-y border-black/10 relative overflow-hidden"
    >
      {/* Interactive Google Antigravity Medusae Particles Background: Desktop only & only when near viewport */}
      {isDesktop && isInView && (
        <div 
          aria-hidden="true" 
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        >
          <Medusae config={medusaeConfig} style={{ width: '100%', height: '100%' }} />
        </div>
      )}

      {/* Zero-cost ambient radial lighting pools for warm red and gold refraction */}
      <div
        className="absolute top-1/4 left-1/6 w-96 h-96 rounded-full pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/6 w-96 h-96 rounded-full pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(234, 179, 8, 0.08) 0%, transparent 70%)' }}
      />

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

        {/* 4 Prominent Case Study Cards in a 2x2 Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
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
