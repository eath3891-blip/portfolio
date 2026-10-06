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

  const getIcon = (id) => {
    switch (id) {
      case 'home':
        return <Home size={13} className="opacity-70 group-hover:opacity-100 transition-opacity" />;
      case 'projects':
        return <Briefcase size={13} className="opacity-70 group-hover:opacity-100 transition-opacity" />;
      case 'about':
        return <User size={13} className="opacity-70 group-hover:opacity-100 transition-opacity" />;
      case 'play':
        return <Sparkles size={13} className="text-amber-500 group-hover:rotate-12 transition-transform duration-300" />;
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
      className="fixed bottom-5 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <div className="dock-glass flex items-center gap-1 p-1.5 rounded-full shadow-lg">
        {items.map((item) => {
          const isActive = activeSection === item.id;
          const isHovered = hoveredTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              onMouseEnter={() => setHoveredTab(item.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className="relative group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full text-xs font-medium tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 select-none whitespace-nowrap"
              style={{
                color: isActive ? '#1d1d1f' : '#86868b'
              }}
            >
              {/* Single authoritative sliding pill for active tab */}
              {isActive && (
                <motion.div
                  layoutId="activeDockIndicator"
                  className="absolute inset-0 rounded-full bg-black/[0.08] border border-black/[0.05] shadow-xs"
                  transition={{
                    type: 'spring',
                    stiffness: 380,
                    damping: 32,
                    mass: 0.8
                  }}
                />
              )}

              {/* Gentle hover state for unselected tabs (local opacity, zero layout collision) */}
              {isHovered && !isActive && (
                <div
                  className="absolute inset-0 rounded-full bg-black/[0.04] transition-opacity duration-150 pointer-events-none"
                />
              )}

              {/* Icon and Label */}
              <span className="relative z-10 flex items-center gap-1.5">
                {getIcon(item.id)}
                <span className="group-hover:text-[#1d1d1f] transition-colors">
                  {item.label}
                </span>
              </span>

              {/* Play with Manoj subtle pulse badge */}
              {item.id === 'play' && (
                <span className="relative z-10 inline-block w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.8)]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
