import React from 'react';
import { motion } from 'framer-motion';
import TopBar from '../ui/TopBar';
import Hero3DModel from './Hero3DModel';
import CompanyLogoScroller from './CompanyLogoScroller';

/**
 * Hero Section — Fluid Full-Viewport Layout
 *
 * Issues fixed:
 *  1. Large screen: content was capped at max-w-[1360px] and centered,
 *     leaving dead space on edges. Now uses full viewport width with
 *     proportional side padding that scales with viewport width.
 *  2. Small screens (laptops ~900-1200px): fixed font sizes + fixed 3D
 *     container heights caused vertical overflow. Now uses clamp() sizing
 *     and a single CSS grid that distributes remaining vertical space via
 *     flex so nothing overflows or requires scroll on any desktop size.
 *
 * Layout reference: media_1788864477332.png
 * - TopBar   → full-width, absolute top
 * - Upper    → Quote left / 3D model right (flex-1, takes remaining space)
 * - Lower    → Manoj intro left / Companies right (auto height, bottom-aligned)
 * - Dock nav → floating, outside this section
 */
export default function Hero({ onReplayIntro }) {
  return (
    <section
      className="
        relative w-full h-[100dvh] min-h-0
        flex flex-col
        overflow-hidden
        bg-[#fbfbfd] text-[#1d1d1f]
        select-none
      "
    >
      {/* ── 1. Top Bar ─────────────────────────────────────────────────── */}
      <TopBar onReplayIntro={onReplayIntro} />

      {/* ── 2. Full-Bleed Content (fills remaining height under TopBar) ── */}
      <div
        className="
          flex-1 min-h-0
          w-full
          px-[5vw]
          flex flex-col justify-between
          py-[2vh]
          z-20
        "
      >

        {/* ── UPPER TIER: Quote ↔ 3D Model ─────────────────────────────── */}
        <div className="grid grid-cols-2 items-center gap-[4vw] flex-1 min-h-0">

          {/* Quote — left, raised above fixed iframe (z-30 > iframe z-15) */}
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
              — Tony Stark
            </p>
          </motion.div>

          {/* 3D Ironman Helmet — right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full min-h-0 flex items-center justify-end"
          >
            {/*
              The 3D iframe needs a concrete height.
              We use a ratio-based trick: aspect-[4/3] would scroll.
              Instead, we cap it to 80% of the flex parent height via
              a tall inner div that still respects the flex container.
            */}
            <div
              className="relative w-full"
              style={{ height: 'clamp(180px, 38vh, 460px)' }}
            >
              <Hero3DModel className="w-full h-full" />
            </div>
          </motion.div>

        </div>

        {/* ── LOWER TIER: Manoj intro ↔ Companies ──────────────────────── */}
        <div
          className="grid grid-cols-2 items-end gap-[4vw] pb-[72px] relative z-30"
        /* 72px gap for the bottom dock nav */
        >

          {/* Introducing Manoj Bhatt — left */}
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

            {/* Vertical-border callout — shifted down */}
            <div
              className="border-l-2 border-black/70 pl-3 py-0.5 mt-[3.5vh] text-[#55555c] leading-snug"
              style={{ fontSize: 'clamp(10px, 0.9vw, 14px)' }}
            >
              Turning <strong className="font-semibold text-[#141416]">"Wait, how does this work?"</strong><br />
              into <strong className="font-semibold text-[#141416]">"Oh, got it."</strong>
            </div>
          </motion.div>

          {/* Companies I've Worked With — pushed to right edge */}
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
