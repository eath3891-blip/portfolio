import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { ABOUT_CONFIG } from '../../config/about.config';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';

/**
 * AboutFinalCTA:
 * Final closing section of the portfolio.
 * 
 * Visually structured into:
 * 1. Dominant 2-line headline:
 *    Line 1 (Hook): "You can stop scrolling." (refined charcoal, weight 600)
 *    Line 2 (Payoff): "You found the designer." (deep obsidian black, weight 700)
 * 2. Secondary supporting line:
 *    "Have a complicated product problem? Let's talk."
 * 3. Tertiary action pill row:
 *    - Primary: View Selected Projects
 *    - Secondary: Download Resume
 *    - Direct Contact: manojbh476@gmail.com (with natural letter-spacing: 0, 12px gap & aligned 48px height)
 */
export default function AboutFinalCTA({ onNavigateToProjects }) {
  const { finalCta } = ABOUT_CONFIG;
  const { resume } = PORTFOLIO_CONFIG;

  const handleDownloadResume = async (e) => {
    e.preventDefault();
    const filename = resume.filename || 'Manoj_Bhatt_Resume.pdf';
    try {
      const response = await fetch(resume.url);
      if (!response.ok) throw new Error('Download failed');
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch {
      const fallbackLink = document.createElement('a');
      fallbackLink.href = resume.url;
      fallbackLink.download = filename;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    }
  };

  return (
    <section 
      aria-label="Closing Call to Action" 
      className="w-full pt-20 sm:pt-28 md:pt-36 pb-24 sm:pb-32 md:pb-40 flex flex-col items-center text-center select-none"
    >
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col items-center">
        
        {/* Dominant Final Headline — Guaranteed Exactly Two Visual Lines on Desktop */}
        <h2 className="w-full flex flex-col items-center font-display leading-[0.96] sm:leading-[0.98]">
          {/* Line 1: Hook */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block sm:whitespace-nowrap font-semibold text-[#48484a] text-[clamp(1.95rem,6.8vw,6.65rem)] tracking-[-0.032em]"
          >
            You can stop scrolling.
          </motion.span>

          {/* Line 2: Payoff — Increased visual & emotional weight */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block sm:whitespace-nowrap font-bold text-[#111113] text-[clamp(1.95rem,6.8vw,6.65rem)] tracking-[-0.038em] mt-1 sm:mt-2"
          >
            You found the designer.
          </motion.span>
        </h2>

        {/* Secondary Supporting Line — Calm, Muted Transition */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="text-[17px] sm:text-[19px] md:text-[21px] font-normal text-[#6e6e73] tracking-[-0.012em] leading-[1.45] max-w-xl mt-8 sm:mt-10 md:mt-12"
        >
          {finalCta.supportingLine}
        </motion.p>

        {/* Tertiary Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-10 md:mt-11"
        >
          {/* Primary Action: View Selected Projects */}
          <button
            type="button"
            onClick={onNavigateToProjects}
            className="group inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-full bg-[#141416] hover:bg-black text-white text-[15px] font-semibold tracking-[-0.01em] shadow-sm hover:shadow-md hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 shrink-0"
          >
            <span>View Selected Projects</span>
            <ArrowRight size={17} strokeWidth={2} className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </button>

          {/* Secondary Action: Download Resume */}
          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-full bg-white hover:bg-black hover:text-white text-[#1d1d1f] text-[15px] font-semibold tracking-[-0.01em] border border-black/[0.1] hover:border-black shadow-2xs hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 shrink-0"
          >
            <Download size={17} strokeWidth={2} />
            <span>Download Resume</span>
          </button>

          {/* Direct Email Action Pill — Opens Gmail compose directly with TO: prefilled */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(finalCta.directEmail)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Email ${finalCta.directEmail} via Gmail (opens in a new tab)`}
            className="inline-flex items-center justify-center gap-3 h-12 px-6 rounded-full bg-black/[0.035] hover:bg-black/[0.07] text-[#1d1d1f] border border-black/[0.08] hover:border-black/20 shadow-2xs hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 shrink-0"
          >
            <Mail size={17} strokeWidth={1.8} className="text-[#6e6e73] shrink-0" />
            <span 
              className="text-[15px] font-normal text-[#1d1d1f] select-text tracking-[0.038em]"
              style={{ letterSpacing: '0.038em', fontVariantNumeric: 'tabular-nums' }}
            >
              {finalCta.directEmail}
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
