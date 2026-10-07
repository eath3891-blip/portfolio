import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroAnimation from './components/intro/IntroAnimation';
import Hero from './components/hero/Hero';
import BottomNavigation from './components/navigation/BottomNavigation';
import DeviceNoticeBanner from './components/navigation/DeviceNoticeBanner';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import PlayPage from './pages/PlayPage';

/**
 * App Root:
 * Coordinates view state across Hero (Home), Projects, About Manoj, and Play with Manoj.
 * - Navbar is STRICTLY HIDDEN during the opening greeting sequence (Welcome, Hello, etc.)
 *   and only fades in smoothly once the intro completes.
 */
export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [forceReplayIntro, setForceReplayIntro] = useState(false);
  // Helper to resolve active section from clean URL pathname
  const getSectionFromPath = () => {
    // Migrate legacy hash URLs (e.g. #/projects -> /projects)
    if (typeof window !== 'undefined' && window.location.hash.startsWith('#/')) {
      const cleanPath = window.location.hash.replace(/^#/, '');
      window.history.replaceState(null, '', cleanPath);
    }

    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    if (path.startsWith('/projects')) {
      return 'projects';
    } else if (path.startsWith('/about')) {
      return 'about';
    } else if (path.startsWith('/play')) {
      return 'play';
    }
    return 'home';
  };

  const [activeSection, setActiveSection] = useState(getSectionFromPath);

  // Ensure browser does not perform automatic scroll jumping on navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to top whenever user switches sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  // Sync clean HTML5 path routing for browser Back/Forward and direct deep-links
  useEffect(() => {
    const syncRoute = () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setActiveSection(getSectionFromPath());
    };

    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  const handleSelectSection = (sectionId) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveSection(sectionId);
    const targetUrl = sectionId === 'home' ? '/' : `/${sectionId}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState(null, '', targetUrl);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    setForceReplayIntro(false);
  };

  const handleReplayIntro = () => {
    setForceReplayIntro(true);
    setShowIntro(true);
  };

  const renderActiveView = () => {
    switch (activeSection) {
      case 'projects':
        return (
          <ProjectsPage
            key="projects-page"
            onBackToHome={() => setActiveSection('home')}
            onReplayIntro={handleReplayIntro}
          />
        );
      case 'about':
        return (
          <AboutPage
            key="about-page"
            onBackToHome={() => setActiveSection('home')}
            onReplayIntro={handleReplayIntro}
            onNavigateToProjects={() => setActiveSection('projects')}
          />
        );
      case 'play':
        return <PlayPage key="play-page" onBackToHome={() => setActiveSection('home')} />;
      case 'home':
      default:
        return <Hero key="hero-landing" onReplayIntro={handleReplayIntro} />;
    }
  };

  return (
    <main
      className={`relative w-full bg-[#fbfbfd] text-[#1d1d1f] font-sans antialiased select-none ${
        activeSection === 'home'
          ? 'h-[100dvh] overflow-hidden'
          : 'min-h-screen overflow-x-clip'
      }`}
    >
      {/* Cinematic Multilingual Greeting Intro */}
      {showIntro && (
        <IntroAnimation
          onComplete={handleIntroComplete}
          forceReplay={forceReplayIntro}
        />
      )}

      {/* Dynamic View Container with Smooth, Instant Apple-Style Transition */}
      <motion.div
        key={activeSection}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ willChange: 'opacity', transform: 'translate3d(0, 0, 0)' }}
        className="w-full"
      >
        {renderActiveView()}
      </motion.div>

      {/* 
        Persistent Floating Apple-Style Navigation Dock:
        Rendered ONLY AFTER the intro animation sequence finishes.
      */}
      {!showIntro && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <BottomNavigation
            activeSection={activeSection}
            onSelectSection={handleSelectSection}
          />
        </motion.div>
      )}

      {/* Floating Device Recommendation Notice for Mobile/Tablet Screens */}
      {!showIntro && <DeviceNoticeBanner />}
    </main>
  );
}
