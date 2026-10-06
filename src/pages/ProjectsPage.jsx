import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TopBar from '../components/ui/TopBar';
import ProjectsHero from '../components/projects/ProjectsHero';
import FeaturedProjects from '../components/projects/FeaturedProjects';
import LiveAndShipped from '../components/projects/LiveAndShipped';
import MoreOfMyWork from '../components/projects/MoreOfMyWork';
import CaseStudyPage from './CaseStudyPage';

/**
 * ProjectsPage:
 * Editorial showcase for Manoj Bhatt's product design work.
 * Supports viewing the main Projects index OR drilling into dedicated
 * full-page Case Studies (TransOrg IQ, RegisterKaro, Trybl).
 */
export default function ProjectsPage({ onBackToHome, onReplayIntro }) {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);

  // Sync hash routing so browser Back/Forward and deep-links work cleanly
  useEffect(() => {
    const syncWithHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/projects/')) {
        const id = hash.replace('#/projects/', '');
        if (['sentinel-ai', 'transorg-iq', 'codash', 'fixora', 'registerkaro'].includes(id)) {
          setActiveCaseStudyId(id);
          return;
        } else {
          // If accessing invalid or non-existent case study ID, redirect to main projects
          window.location.hash = '#/projects';
          setActiveCaseStudyId(null);
          return;
        }
      }
      if (!hash.startsWith('#/projects/')) {
        setActiveCaseStudyId(null);
      }
    };

    syncWithHash();
    window.addEventListener('hashchange', syncWithHash);
    return () => window.removeEventListener('hashchange', syncWithHash);
  }, []);

  const handleSelectCaseStudy = (id) => {
    setActiveCaseStudyId(id);
    window.location.hash = `#/projects/${id}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToProjects = () => {
    setActiveCaseStudyId(null);
    window.location.hash = '#/projects';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // If a case study is actively selected, render its dedicated full-page view
  if (activeCaseStudyId) {
    return (
      <CaseStudyPage
        projectId={activeCaseStudyId}
        onBackToProjects={handleBackToProjects}
        onNavigateCaseStudy={handleSelectCaseStudy}
      />
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#fbfbfd] text-[#1d1d1f] pb-36">
      {/* Top Bar for status and resume action */}
      <TopBar onReplayIntro={onReplayIntro || onBackToHome} />

      {/* Main Editorial Content Container */}
      <main className="w-full flex flex-col">
        {/* Page Hero */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full">
          <ProjectsHero />
        </div>

        {/* Section 01: Featured Projects (Full-width Dark Theme Showcase) */}
        <FeaturedProjects onSelectProject={(p) => handleSelectCaseStudy(p.id)} />

        {/* Sections 02 & 03: Light Theme Container */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 w-full flex flex-col">
          {/* Section 02: Live & Shipped (6 Cards in 3x2 Desktop Grid) */}
          <LiveAndShipped />

          {/* Section 03: More of My Work (2 Balanced Behance & Figma Destination Cards) */}
          <MoreOfMyWork />
        </div>
      </main>
    </div>
  );
}

