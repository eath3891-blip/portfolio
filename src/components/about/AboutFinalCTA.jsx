import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { ABOUT_CONFIG } from '../../config/about.config';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import Ballpit from '../ui/Ballpit';

/**
 * AboutFinalCTA:
 * Final closing section of the portfolio.
 * 
 * Visually structured into:
 * 1. Interactive 3D Ballpit physics animation in the background
 * 2. Dominant 2-line headline:
 *    Line 1 (Hook): "You can stop scrolling." (refined charcoal, weight 600)
 *    Line 2 (Payoff): "You found the designer." (deep obsidian black, weight 700)
 * 3. Secondary supporting line:
 *    "Have a complicated product problem? Let's talk."
 * 4. Tertiary action pill row:
 *    - Primary: View Selected Projects
 *    - Secondary: Download Resume
 *    - Direct Contact: manojbh476@gmail.com
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
      id="closing-cta"
      aria-label="Closing Call to Action" 
      className="relative w-full min-h-[560px] sm:min-h-[620px] pt-12 sm:pt-16 md:pt-20 pb-28 sm:pb-36 flex flex-col items-center text-center select-none overflow-hidden"
    >
      {/* 3D Ballpit Physics Animation Background: Only rendered on tablets and desktops (>= md) */}
      <div 
        aria-hidden="true" 
        className="hidden md:block absolute inset-0 w-full h-full pointer-events-auto z-0 overflow-hidden"
      >
        <Ballpit
          count={55}
          gravity={0.007}
          friction={0.997}
          wallBounce={0.88}
          followCursor={false}
          colors={[
            0xa3121e,
            0xd41c2c,
            0xdf9b20,
            0xf5c342,
            0xa3121e,
            0xd41c2c,
            0xdf9b20,
            0xf5c342,
            0xa3121e,
            0xd41c2c,
            0xdf9b20,
            0xf5c342
          ]}
          materialParams={{
            metalness: 0.7,
            roughness: 0.22,
            clearcoat: 1,
            clearcoatRoughness: 0.1
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-8 md:px-12 flex flex-col items-center pointer-events-none">
        
        {/* Dominant Final Headline */}
        <h2 className="w-full flex flex-col items-center font-display leading-[1.02] sm:leading-[0.98] drop-shadow-[0_4px_30px_rgba(255,255,255,0.95)]">
          {/* Line 1: Hook */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="block sm:whitespace-nowrap font-semibold text-[#3a3a3c] text-[clamp(1.55rem,6.8vw,6.65rem)] tracking-[-0.032em]"
          >
            You can stop scrolling.
          </motion.span>

          {/* Line 2: Payoff, Increased visual & emotional weight */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="block sm:whitespace-nowrap font-bold text-[#111113] text-[clamp(1.55rem,6.8vw,6.65rem)] tracking-[-0.038em] mt-1 sm:mt-2"
          >
            You found the designer.
          </motion.span>
        </h2>

        {/* Secondary Supporting Line: Calm, Muted Transition */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-[19px] md:text-[21px] font-normal text-[#48484a] tracking-[-0.012em] leading-[1.45] max-w-xl mt-6 sm:mt-10 md:mt-12 bg-white/70 backdrop-blur-[2px] px-4 py-1.5 rounded-full shadow-2xs"
        >
          {finalCta.supportingLine}
        </motion.p>

        {/* Tertiary Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-5 mt-7 sm:mt-10 md:mt-11 w-full max-w-sm sm:max-w-none"
        >
          {/* Primary Action: View Selected Projects */}
          <button
            type="button"
            onClick={onNavigateToProjects}
            className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-11 sm:h-12 px-7 rounded-full bg-[#141416] hover:bg-black text-white text-sm sm:text-[15px] font-semibold tracking-[-0.01em] shadow-sm hover:shadow-md hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 shrink-0 cursor-pointer"
          >
            <span>View Selected Projects</span>
            <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
          </button>

          {/* Secondary Action: Download Resume */}
          <button
            type="button"
            onClick={handleDownloadResume}
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-11 sm:h-12 px-6 rounded-full bg-white/90 backdrop-blur-md hover:bg-black hover:text-white text-[#1d1d1f] text-sm sm:text-[15px] font-semibold tracking-[-0.01em] border border-black/[0.1] hover:border-black shadow-2xs hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 shrink-0 cursor-pointer"
          >
            <Download size={16} strokeWidth={2} />
            <span>Download Resume</span>
          </button>

          {/* Direct Email Action Pill: Opens Gmail compose directly with TO: prefilled */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(finalCta.directEmail)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Email ${finalCta.directEmail} via Gmail (opens in a new tab)`}
            className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 rounded-full bg-white/90 backdrop-blur-md hover:bg-black hover:text-white text-[#1d1d1f] border border-black/[0.1] hover:border-black shadow-2xs hover:scale-[1.015] active:scale-[0.985] transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 shrink-0 group cursor-pointer"
          >
            <Mail size={16} strokeWidth={1.8} className="text-[#6e6e73] group-hover:text-white shrink-0 transition-colors duration-200" />
            <span 
              className="text-xs sm:text-[15px] font-normal select-text tracking-[0.038em]"
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
