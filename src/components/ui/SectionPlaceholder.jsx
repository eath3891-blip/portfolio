import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Briefcase, User } from 'lucide-react';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * SectionPlaceholder:
 * Architectural container for future sections (Projects, About Manoj, Game).
 * Opens with an Apple-style continuous motion transition and allows closing smoothly.
 */
export default function SectionPlaceholder({ activeSection, onClose }) {
  if (!activeSection) return null;

  const item = PORTFOLIO_CONFIG.navigation.find((nav) => nav.id === activeSection);
  if (!item) return null;

  const getSectionDetails = () => {
    switch (activeSection) {
      case 'projects':
        return {
          title: 'Selected Projects',
          icon: <Briefcase className="text-black" size={24} />,
          tagline: 'System Architecture • Design Systems • Product Craft',
          description:
            'A curated collection of product design case studies, design systems, and interaction models. Detailed case studies will be connected here in Phase 2.'
        };
      case 'about':
        return {
          title: 'About Manoj Bhatt',
          icon: <User className="text-black" size={24} />,
          tagline: 'Design Philosophy • Experience • Craft',
          description:
            'UI/UX & Product Designer dedicated to building minimalist, high-impact digital experiences. Detailed background, philosophy, and journey will be connected here in Phase 2.'
        };
      case 'game':
        return {
          title: 'Interactive Game Experience',
          icon: <Sparkles className="text-amber-500" size={24} />,
          tagline: 'Experimental WebGL • Micro-Interactions',
          description:
            'An interactive canvas mini-game exploring physics, delight, and WebGL feedback loops. The interactive game will be integrated here in Phase 2.'
        };
      default:
        return {
          title: item.label,
          icon: null,
          tagline: 'Section Architecture',
          description: 'Ready for integration in Phase 2.'
        };
    }
  };

  const details = getSectionDetails();

  return (
    <AnimatePresence>
      <motion.div
        key="section-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/20 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          key="section-card"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg bg-white/95 rounded-3xl p-8 sm:p-10 border border-black/[0.08] shadow-2xl overflow-hidden"
        >
          {/* Subtle top indicator bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-black/[0.04] text-[#86868b]">
              <span>PHASE 2 ARCHITECTURE</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-[#86868b] hover:text-black hover:bg-black/[0.05] transition-colors focus:outline-none"
              aria-label="Close section"
            >
              <X size={18} />
            </button>
          </div>

          {/* Icon & Title */}
          <div className="flex items-center gap-3.5 mb-2">
            <div className="p-3 rounded-2xl bg-black/[0.03] border border-black/[0.04]">
              {details.icon}
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1d1d1f] font-sans">
                {details.title}
              </h2>
              <p className="text-xs text-[#86868b] font-medium mt-0.5">
                {details.tagline}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed text-[#515154] mt-5">
            {details.description}
          </p>

          {/* Architectural Slot Placeholder */}
          <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#86868b]">
            <span className="font-mono text-[11px]">Ready for content injection</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold bg-black text-white hover:bg-black/90 transition-all shadow-xs"
            >
              Back to Hero
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
