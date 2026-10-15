import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Laptop } from 'lucide-react';
import FlipClockCounter from './FlipClockCounter';

/**
 * Opening Experience:
 * 1. "Welcome" fades in first onto a pristine minimal canvas.
 * 2. As it transitions into "Hello", "नमस्ते", "Bonjour", "Hola", etc.,
 *    a retro 3D split-flap mechanical flip clock counter appears underneath,
 *    counting up in rhythmic Solari mechanical ticks (0% -> 100%).
 * 3. When progress completes at 100%, seamlessly dissolves into the main hero.
 */
// Memoized greeting display to ensure progress ticks do not trigger typography re-renders
const GreetingDisplay = React.memo(function GreetingDisplay({ text }) {
  return (
    <div className="min-h-[120px] sm:min-h-[150px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.h1
          key={text}
          initial={{ opacity: 0, y: 12, scale: 0.98 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }}
          exit={{
            opacity: 0,
            y: -10,
            scale: 1.01,
            transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] }
          }}
          style={{ willChange: 'transform, opacity', transform: 'translate3d(0, 0, 0)' }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-semibold tracking-[-0.035em] text-[#141416]"
        >
          {text}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
});

export default function IntroAnimation({ onComplete, forceReplay = false }) {
  const greetings = [
    { text: "Welcome" },
    { text: "Hello" },
    { text: "नमस्ते" },
    { text: "Bonjour" },
    { text: "Hola" },
    { text: "こんにちは" },
    { text: "안녕하세요" },
    { text: "مرحباً" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!forceReplay) {
      const hasSeenIntro = sessionStorage.getItem('manoj_intro_viewed');
      if (hasSeenIntro || prefersReducedMotion) {
        setIsFinished(true);
        if (onComplete) onComplete();
        return;
      }
    }

    const totalSteps = greetings.length;
    let tickTimer = null;
    let startTime = null;

    // Greeting step interval: 1350ms per word
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < totalSteps - 1) {
          const nextIndex = prev + 1;
          
          // Start the fluid mechanical counter on the first greeting transition (Hello)
          if (nextIndex === 1 && !startTime) {
            startTime = Date.now();
            const counterDuration = (totalSteps - 1) * 1350;
            tickTimer = setInterval(() => {
              const elapsed = Date.now() - startTime;
              const pct = Math.min(100, Math.round((elapsed / counterDuration) * 100));
              setProgress(pct);
              if (pct >= 100) {
                clearInterval(tickTimer);
              }
            }, 85);
          }
          
          return nextIndex;
        } else {
          clearInterval(interval);
          if (tickTimer) clearInterval(tickTimer);
          setProgress(100);
          setTimeout(() => {
            sessionStorage.setItem('manoj_intro_viewed', 'true');
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 850);
          return prev;
        }
      });
    }, 1350);

    return () => {
      clearInterval(interval);
      if (tickTimer) clearInterval(tickTimer);
    };
  }, [forceReplay, greetings.length, onComplete]);

  // Click anywhere to skip directly into hero
  const handleSkip = () => {
    sessionStorage.setItem('manoj_intro_viewed', 'true');
    setIsFinished(true);
    if (onComplete) onComplete();
  };

  if (isFinished) return null;

  const currentGreeting = greetings[currentIndex];
  const isAfterWelcome = currentIndex > 0;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-curtain"
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
        }}
        style={{ willChange: 'opacity', transform: 'translate3d(0, 0, 0)' }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fbfbfd] text-[#1d1d1f] select-none cursor-pointer"
        onClick={handleSkip}
      >
        {/* Center Container */}
        <div className="relative flex flex-col items-center justify-center px-6 text-center">
          {/* Greeting Typography (Memoized against counter ticks) */}
          <GreetingDisplay text={currentGreeting.text} />

          {/* 
            Retro 3D Split-Flap Mechanical Flip Clock Counter:
            Appears after "Welcome", ticking in rhythm with greetings (Hello, Namaste, etc.)
          */}
          <AnimatePresence>
            {isAfterWelcome && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 14 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 sm:mt-8"
              >
                <FlipClockCounter progress={progress} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Device Experience Recommendation Pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/[0.04] border border-black/[0.08] backdrop-blur-md text-[#515154] text-[11px] sm:text-xs font-medium tracking-tight mt-7 sm:mt-8 shadow-xs"
          >
            <Laptop className="w-3.5 h-3.5 text-[#1d1d1f] shrink-0" />
            <span>For the best experience, please use desktop or laptop</span>
          </motion.div>
        </div>

        {/* Subtle Bottom Tap-to-Skip Helper */}
        <div className="absolute bottom-6 sm:bottom-8 inset-x-0 flex justify-center text-center pointer-events-none">
          <span className="text-[10px] sm:text-[11px] font-mono text-[#86868b] tracking-wider uppercase">
            Tap anywhere to skip
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
