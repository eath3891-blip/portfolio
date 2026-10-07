import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_CONFIG } from '../../config/portfolio.config';
import { Sparkles, Briefcase, User, Home } from 'lucide-react';

/**
 * BottomNavigation:
 * Apple-inspired floating dock navigation with persistent visibility across views.
 * Tabs: Home, Projects, About Manoj, Play with Manoj.
 */
export default function BottomNavigation({ activeSection = 'home', onSelectSection }) {
  const [hoveredTab, setHoveredTab] = useState(null);
  const items = PORTFOLIO_CONFIG.navigation;

  const getIcon = (id, isActive) => {
    switch (id) {
      case 'home':
        return (
          <Home
            size={14}
            className={isActive ? 'text-[#121216]' : 'text-white/80 group-hover:text-white transition-colors'}
          />
        );
      case 'projects':
        return (
          <Briefcase
            size={14}
            className={isActive ? 'text-[#121216]' : 'text-white/80 group-hover:text-white transition-colors'}
          />
        );
      case 'about':
        return (
          <User
            size={14}
            className={isActive ? 'text-[#121216]' : 'text-white/80 group-hover:text-white transition-colors'}
          />
        );
      case 'play':
        return (
          <Sparkles
            size={14}
            className={isActive ? 'text-amber-600' : 'text-amber-400 group-hover:rotate-12 transition-transform duration-300'}
          />
        );
      default:
        return null;
    }
  };

  const handleTabClick = (id) => {
    setHoveredTab(null);
    if (onSelectSection) {
      onSelectSection(id);
    }
  };

  return (
    <nav
      aria-label="Primary Navigation"
      className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto max-w-[calc(100vw-20px)] sm:max-w-none"
    >
      <div className="dock-glass flex items-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 rounded-full">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`relative group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 select-none whitespace-nowrap cursor-pointer shrink-0 ${
                isActive ? 'text-[#121216] font-semibold' : 'text-white/80 hover:text-white'
              }`}
            >
              {/* Solid white sliding pill for active tab */}
              {isActive && (
                <motion.div
                  layoutId="activeDockIndicator"
                  className="absolute inset-0 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.18)]"
                  style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)', backfaceVisibility: 'hidden' }}
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 32,
                    mass: 0.8
                  }}
                />
              )}

              {/* Gentle hover state for unselected tabs */}
              {isHovered && !isActive && (
                <div
                  className="absolute inset-0 rounded-full bg-white/[0.08] transition-opacity duration-150 pointer-events-none"
                />
              )}

              {/* Icon and Label */}
              <span className="relative z-10 flex items-center gap-1.5">
                {getIcon(item.id, isActive)}
                <span className="transition-colors">
                  <span className="sm:hidden">{item.shortLabel || item.label}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              </span>

              {/* Play with Manoj subtle pulse badge */}
              {item.id === 'play' && (
                <span className="relative z-10 inline-block w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.9)]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
