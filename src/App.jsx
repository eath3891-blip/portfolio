import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroAnimation from './components/intro/IntroAnimation';
import Hero from './components/hero/Hero';
import BottomNavigation from './components/navigation/BottomNavigation';
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
  const [activeSection, setActiveSection] = useState('home'); // 'home' | 'projects' | 'about' | 'play'

  // Ensure browser does not perform automatic scroll jumping on hash navigation
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // Scroll to top whenever user switches sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeSection]);

  // Sync hash routing so external deep-links (e.g. #/projects/sentinel-ai) open directly
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (hash.startsWith('#/projects')) {
        setActiveSection('projects');
      } else if (hash.startsWith('#/about')) {
        setActiveSection('about');
      } else if (hash.startsWith('#/play')) {
        setActiveSection('play');
      } else if (!hash || hash === '#/' || hash === '#') {
        setActiveSection('home');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleSelectSection = (sectionId) => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.location.hash = '';
    } else {
      window.location.hash = `#/${sectionId}`;
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
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
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
    </main>
  );
}
