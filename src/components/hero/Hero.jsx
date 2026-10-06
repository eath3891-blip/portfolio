import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TopBar from '../ui/TopBar';
import Hero3DModel from './Hero3DModel';
import CompanyLogoScroller from './CompanyLogoScroller';

/**
 * Hero Section: Fluid & Adaptive Viewport Layout
 *
 * Mobile (< 768px):
 *  - 3D helmet is completely omitted (no iframe, no shields, zero distortion)
 *  - Content is organized in a clean, perfectly aligned single-column layout
 *  - Ample bottom padding to clear the floating bottom navigation dock
 *
 * Desktop & Tablet (>= 768px):
 *  - Fluid full-viewport 2-tier dual-column layout with interactive 3D helmet
 */
export default function Hero({ onReplayIntro }) {
  const [isLargeDevice, setIsLargeDevice] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true;
  });

  useEffect(() => {
    const checkDevice = () => {
      setIsLargeDevice(window.innerWidth >= 768);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <section
      className="
        relative w-full min-h-[100dvh] md:h-[100dvh] min-h-0
        flex flex-col
        overflow-x-hidden overflow-y-auto md:overflow-hidden
        bg-[#fbfbfd] text-[#1d1d1f]
        select-none
      "
    >
      {/* ── 1. Top Bar ─────────────────────────────────────────────────── */}
      <TopBar onReplayIntro={onReplayIntro} />

      {/* ── 2A. Mobile Viewport Content (< md: 768px) ─────────────────── */}
      <div className="flex md:hidden flex-1 flex-col justify-between px-5 sm:px-8 pt-3 pb-28 gap-6 z-20">
        
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2 pt-1"
        >
          <span className="type-meta text-[#86868b] tracking-wider uppercase text-[11px]">
            Introducing
          </span>

          <h1 className="font-display font-bold text-[#141416] tracking-display text-4xl leading-none">
            Manoj Bhatt
          </h1>

          <p className="font-normal text-[#55555c] text-sm leading-snug pt-1">
            Product Designer · 3+ years · Enterprise UX · AI, Analytics &amp; Complex Workflows
          </p>

          {/* Signature Philosophy Callout */}
          <div className="border-l-2 border-black/70 pl-3.5 py-1 mt-2 text-xs sm:text-sm text-[#55555c] leading-snug">
            Turning <strong className="font-semibold text-[#141416]">"Wait, how does this work?"</strong><br />
            into <strong className="font-semibold text-[#141416]">"Oh, got it."</strong>
          </div>
        </motion.div>

        {/* Tony Stark Quote Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-4 sm:p-5 rounded-2xl bg-white/80 border border-black/[0.06] shadow-xs backdrop-blur-xs flex flex-col gap-2"
        >
          <h2 className="font-display font-bold text-[#141416] text-lg sm:text-xl leading-snug tracking-heading">
            "Sometimes you have to build it before you can make it better."
          </h2>
          <p className="text-xs sm:text-sm text-[#86868b] font-medium tracking-tight">
            - Tony Stark
          </p>
        </motion.div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2 w-full pt-1"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-xs sm:text-sm text-[#141416] tracking-tight">
              Companies I've Worked With
            </h3>
            <span className="text-[11px] text-[#86868b] font-medium">Enterprise &amp; Startups</span>
          </div>
          <div className="w-full">
            <CompanyLogoScroller />
          </div>
        </motion.div>

      </div>

      {/* ── 2B. Desktop & Tablet Content (>= md: 768px) ───────────────── */}
      <div
        className="
          hidden md:flex
          flex-1 min-h-0
          w-full
          px-[5vw]
          flex-col justify-between
          py-[2vh]
          z-20
        "
      >

        {/* ── UPPER TIER: Quote <-> 3D Model ─────────────────────────────── */}
        <div className="grid grid-cols-2 items-center gap-[4vw] flex-1 min-h-0">

          {/* Quote: left, raised above fixed iframe (z-30 > iframe z-15) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-[1.2vh] relative z-30"
          >
            <h2
              className="font-display font-bold tracking-heading text-[#141416] leading-[1.12]"
              style={{ fontSize: 'clamp(22px, 3.6vw, 56px)' }}
            >
              "Sometimes you have to build it
              before you can make it better."
            </h2>
            <p
              className="text-[#55555c] font-normal"
              style={{ fontSize: 'clamp(12px, 1.1vw, 17px)' }}
            >
              - Tony Stark
            </p>
          </motion.div>

          {/* 3D Ironman Helmet: right, only rendered when on large devices */}
          {isLargeDevice && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-full min-h-0 flex items-center justify-end"
            >
              <div
                className="relative w-full"
                style={{ height: 'clamp(180px, 38vh, 460px)' }}
              >
                <Hero3DModel className="w-full h-full" />
              </div>
            </motion.div>
          )}

        </div>

        {/* ── LOWER TIER: Manoj intro <-> Companies ──────────────────────── */}
        <div
          className="grid grid-cols-2 items-end gap-[4vw] pb-[72px] relative z-30"
        >

          {/* Introducing Manoj Bhatt: left */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-[0.6vh]"
          >
            <span
              className="type-meta text-[#86868b]"
              style={{ fontSize: 'clamp(11px, 0.95vw, 14px)' }}
            >
              Introducing
            </span>

            <h1
              className="font-display font-bold text-[#141416] tracking-display leading-none"
              style={{ fontSize: 'clamp(28px, 4.2vw, 62px)' }}
            >
              Manoj Bhatt
            </h1>

            <p
              className="font-normal text-[#55555c] leading-snug mt-[0.4vh]"
              style={{ fontSize: 'clamp(11px, 0.9vw, 14px)' }}
            >
              Product Designer · 3+ years · Enterprise UX · AI, Analytics &amp; Complex Workflows
            </p>

            {/* Vertical-border callout: shifted down */}
            <div
              className="border-l-2 border-black/70 pl-3 py-0.5 mt-[3.5vh] text-[#55555c] leading-snug"
              style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}
            >
              Turning <strong className="font-semibold text-[#141416]">"Wait, how does this work?"</strong><br />
              into <strong className="font-semibold text-[#141416]">"Oh, got it."</strong>
            </div>
          </motion.div>

          {/* Companies I've Worked With: pushed to right edge */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-[1vh] ml-auto items-end w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px]"
          >
            <h3
              className="font-display font-semibold text-[#141416] tracking-tight text-right w-full"
              style={{ fontSize: 'clamp(12px, 1.1vw, 18px)' }}
            >
              Companies I've Worked With
            </h3>

            {/* 3-Logo horizontal auto-scroller with delay between transitions */}
            <CompanyLogoScroller />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
