import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ABOUT_CONFIG } from '../../config/about.config';

/**
 * BeyondDesignSection:
 * Visually rich asymmetric Bento Grid with staggered scroll emergence.
 * Strict visual storytelling: Title + One-line personality quote over high-res imagery.
 */
export default function BeyondDesignSection() {
  const { beyondDesign } = ABOUT_CONFIG;

  return (
    <section 
      aria-labelledby="beyond-design-heading" 
      className="w-full py-16 sm:py-24 border-b border-black/[0.06]"
    >
      {/* Section Header with Scroll Emergence */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-2.5 max-w-xl mb-10 sm:mb-12"
      >
        <div className="flex items-center gap-2">
          <span className="type-eyebrow">
            {beyondDesign.eyebrow}
          </span>
        </div>

        <h2
          id="beyond-design-heading"
          className="type-h1 text-[#141416]"
        >
          {beyondDesign.title}
        </h2>

        <p className="type-body text-[#55555c] leading-relaxed">
          {beyondDesign.supportingLine}
        </p>
      </motion.div>

      {/* Balanced 6-Card Bento Grid with Staggered Scroll Emergence */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
        {beyondDesign.items.map((item, idx) => (
          <BentoTile key={item.id} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}

function BentoTile({ item, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-3xl sm:rounded-[2.4rem] overflow-hidden border border-white/80 ring-1 ring-black/[0.04] shadow-[0_20px_45px_-12px_rgba(0,0,0,0.06)] flex flex-col justify-end p-4 sm:p-6 select-none !min-h-[190px] sm:!min-h-[300px] ${item.spanClass}`}
      style={{ backgroundColor: item.fallbackColor }}
    >
      {/* Background Image with subtle scale on hover (1.00 -> 1.03) */}
      {!imgError && (
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={() => setImgError(true)}
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-103 filter contrast-[1.02]"
        />
      )}

      {/* Specular Top Sheen (Liquid Glass Reflection) */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-transparent to-transparent pointer-events-none z-10" />

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

      {/* Top Floating Glass Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-white/95 bg-white/20 backdrop-blur-md border border-white/30 shadow-xs">
          {item.badge}
        </span>
      </div>

      {/* Bottom Content: Frosted Glass Caption Well */}
      <div className="relative z-20 flex flex-col gap-1 p-3.5 sm:p-4 rounded-2xl bg-black/30 backdrop-blur-md border border-white/15 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 shadow-sm">
        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white leading-tight">
          {item.title}
        </h3>

        <p className="text-xs sm:text-sm font-medium text-white/85 leading-snug">
          "{item.personalityLine}"
        </p>
      </div>
    </motion.div>
  );
}
