import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * FeaturedProjectCard:
 * Minimal, modern case-study card showcasing real project imagery.
 * Designed with clean typography, clear visual hierarchy, and smooth hover elevation.
 *
 * Strict Copy Rule: Zero em dashes or en dashes in code, copy, or comments.
 */
export default function FeaturedProjectCard({ project, index, onSelect }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: 'transform, opacity', transform: 'translate3d(0, 0, 0)' }}
      onClick={() => onSelect && onSelect(project)}
      className="group relative flex flex-col justify-between h-full rounded-[2rem] sm:rounded-[2.4rem] bg-white border border-black/[0.08] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_24px_50px_-12px_rgba(0,0,0,0.18)] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer select-none will-change-transform"
    >
      <div className="flex flex-col">
        {/* Real Project Image Viewport */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-100 border border-black/[0.06] mb-5 sm:mb-6">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />

          {/* Floating Pill: Project Number and Domain */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono font-medium text-white/90 border border-white/10 shadow-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>{project.number}</span>
            <span className="text-white/40">/</span>
            <span>{project.badge || 'Case Study'}</span>
          </div>

          {/* Floating Pill: Year */}
          {project.year && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/80 border border-white/10 shadow-xs">
              {project.year}
            </div>
          )}
        </div>

        {/* Category Eyebrow & Role */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold truncate">
            {project.category}
          </span>
          <span className="text-xs font-mono text-neutral-400 shrink-0">
            {project.role}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-black transition-colors mb-2.5">
          {project.title}
        </h3>

        {/* Problem and Outcome Summary */}
        <p className="text-sm sm:text-[14.5px] text-neutral-600 leading-relaxed line-clamp-2 mb-6">
          {project.context || project.description}
        </p>
      </div>

      {/* Bottom Row: Highlight Pill and Explore CTA */}
      <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between gap-3">
        {project.highlight ? (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 text-xs font-mono text-neutral-700 font-medium truncate max-w-[200px] sm:max-w-none">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0" />
            <span className="truncate">{project.highlight}</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5 flex-wrap">
            {project.tags?.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200/60 text-[11px] font-mono text-neutral-600 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onSelect) onSelect(project);
          }}
          className="group/btn inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#141416] hover:bg-black text-white text-xs sm:text-sm font-semibold tracking-tight shadow-sm hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
          aria-label={`Explore case study for ${project.title}`}
        >
          <span className="whitespace-nowrap">Explore</span>
          <ArrowUpRight
            size={15}
            className="shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-white/80 group-hover/btn:text-white"
          />
        </button>
      </div>
    </motion.article>
  );
}