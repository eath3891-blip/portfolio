import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

/**
 * CaseStudyModal:
 * Apple-style slide-over modal drawer previewing project routing architecture
 * and detailed problem framing without leaving the page flow.
 */
export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
        />

        {/* Modal Dialog Card */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-black/10 overflow-hidden flex flex-col z-10 select-none"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-black/[0.06] bg-[#fbfbfd]">
            <div className="flex items-center gap-2 text-xs font-mono text-[#86868b]">
              <span className="px-2 py-0.5 rounded bg-black/[0.05] text-[#1d1d1f] font-semibold">
                {project.number}
              </span>
              <span>{project.slug}</span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-[#1d1d1f] flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
              aria-label="Close case study preview"
            >
              <X size={16} />
            </button>
          </div>

          {/* Content Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
            {/* Title & Badge */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium text-white bg-black">
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-[#86868b]">
                  {project.year}
                </span>
              </div>

              <h2
                id="modal-project-title"
                className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#141416]"
              >
                {project.title}
              </h2>

              <p className="text-sm sm:text-base font-semibold text-[#55555c]">
                {project.context || project.subtitle}
              </p>
            </div>

            {/* Impact Metric Banner (Only if available) */}
            {project.metrics && (
              <div className="p-4 rounded-2xl bg-emerald-500/[0.07] border border-emerald-500/20 flex items-center gap-3 text-emerald-900">
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">
                  {project.metrics}
                </span>
              </div>
            )}

            {/* Detailed Problem & Design Overview */}
            <div className="flex flex-col gap-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#86868b]">
                Problem &amp; Design Focus
              </h4>
              <p className="text-sm text-[#333336] leading-relaxed">
                {project.overview || project.context || project.description}
              </p>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#f5f5f7] border border-black/[0.04]">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono text-[#86868b]">Role &amp; Ownership</span>
                <span className="text-xs sm:text-sm font-semibold text-[#1d1d1f]">{project.role}</span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono text-[#86868b]">Domain Focus</span>
                <span className="text-xs sm:text-sm font-semibold text-[#1d1d1f]">{project.focus || project.domain}</span>
              </div>
            </div>

            {/* Tags */}
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs font-mono text-[#737378] bg-black/[0.03]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Under Development Advisory Banner */}
            <div className="p-4 rounded-2xl bg-black/[0.03] border border-black/[0.06] flex items-center justify-between gap-3 text-xs text-[#737378]">
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-[#86868b] shrink-0" />
                <span>Full case study narrative is being formatted for production.</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 text-[#55555c] shrink-0">
                Index Ready
              </span>
            </div>
          </div>

          {/* Footer Action */}
          <div className="px-6 sm:px-8 py-4 bg-[#fbfbfd] border-t border-black/[0.06] flex items-center justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-full text-xs font-semibold bg-black text-white hover:bg-black/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
            >
              Back to Projects
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
