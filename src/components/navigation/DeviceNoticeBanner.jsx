import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop, X } from 'lucide-react';

/**
 * DeviceNoticeBanner:
 * Recommends viewing on desktop or laptop for optimal interactive experience.
 * Only shown on mobile/tablet viewports (< 1024px) when not previously dismissed.
 */
export default function DeviceNoticeBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkShouldShow = () => {
      const isMobileOrTablet = window.innerWidth < 1024;
      const isDismissed = sessionStorage.getItem('manoj_device_notice_dismissed') === 'true';
      if (isMobileOrTablet && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    checkShouldShow();
    window.addEventListener('resize', checkShouldShow);
    return () => window.removeEventListener('resize', checkShouldShow);
  }, []);

  const handleDismiss = (e) => {
    e.stopPropagation();
    sessionStorage.setItem('manoj_device_notice_dismissed', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-20 sm:bottom-24 inset-x-0 z-40 flex justify-center px-4 pointer-events-none select-none"
          aria-label="Device experience recommendation"
        >
          <div className="pointer-events-auto flex items-center gap-2 sm:gap-2.5 max-w-[94vw] sm:max-w-md px-3.5 py-2 rounded-full bg-[#1d1d1f]/95 text-white backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.18)] border border-white/15 text-[11px] sm:text-xs font-medium tracking-tight">
            <span className="p-1 rounded-full bg-white/10 shrink-0">
              <Laptop className="w-3.5 h-3.5 text-white" />
            </span>
            <span className="leading-tight text-white/95">
              For the best experience, please use desktop or laptop
            </span>
            <button
              type="button"
              onClick={handleDismiss}
              className="ml-0.5 p-1 rounded-full text-white/60 hover:text-white hover:bg-white/15 transition-colors touch-manipulation cursor-pointer shrink-0"
              aria-label="Dismiss notice"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
