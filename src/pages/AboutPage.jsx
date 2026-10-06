import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TopBar from '../components/ui/TopBar';
import AboutHero from '../components/about/AboutHero';
import OriginStory from '../components/about/OriginStory';
import JourneySection from '../components/about/JourneySection';
import EvolutionStatement from '../components/about/EvolutionStatement';
import HowIThinkSection from '../components/about/HowIThinkSection';
import BeyondDesignSection from '../components/about/BeyondDesignSection';
import ExploringSection from '../components/about/ExploringSection';
import AboutFinalCTA from '../components/about/AboutFinalCTA';

/**
 * AboutPage:
 * Premium, Apple-inspired editorial narrative experience for Manoj Bhatt.
 * 
 * Narrative Structure:
 * 1. TopBar (Open to Work badge + Resume Download button)
 * 2. AboutHero (PERSON - Positioning, role across AI, analytics, enterprise)
 * 3. OriginStory (ORIGIN - Designing keypad phone interfaces on paper as a kid)
 * 4. JourneySection (JOURNEY - Interactive horizontal evolution: UI → UX → Product → Systems + M.Des concurrent track)
 * 5. EvolutionStatement (Core senior introspection: Look → Why → Whole Product)
 * 6. HowIThinkSection (THINKING - Core 6 principles + earned observations)
 * 7. BeyondDesignSection (PERSONALITY - Asymmetric Bento Grid: Bike Riding, Trekking, Gaming, Anime)
 * 8. ExploringSection (FUTURE - AI × DESIGN × BUILDING builder curiosity)
 * 9. AboutFinalCTA (CLOSING - "You can stop scrolling. You found the designer.")
 */
export default function AboutPage({ onBackToHome, onReplayIntro, onNavigateToProjects }) {
  // Ensure smooth scroll to top when entering the About page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#fbfbfd] text-[#1d1d1f] flex flex-col">
      {/* Top Bar with Open to Work & Download Resume pills */}
      <TopBar onReplayIntro={onReplayIntro || onBackToHome} />

      {/* Main Editorial Content Container */}
      <main className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col">
        {/* 1. Who I Am: Opening Section */}
        <AboutHero />

        {/* 2. Personal Hook: Paper UI Origin Story */}
        <OriginStory />

        {/* 3. My Journey: Horizontal Evolving Roadmap */}
        <JourneySection />

        {/* 4. Evolution Statement: Senior Design Positioning */}
        <EvolutionStatement />

        {/* 5. How I Think: Core 6 Principles & Practical Philosophy */}
        <HowIThinkSection />

        {/* 6. Beyond Design: Asymmetric Bento Grid */}
        <BeyondDesignSection />

        {/* 7. What's Next: "And now, I'm building." */}
        <ExploringSection />
      </main>

      {/* 8. Final CTA: Full viewport width & reaching the bottom of the page */}
      <AboutFinalCTA onNavigateToProjects={onNavigateToProjects} />
    </div>
  );
}
