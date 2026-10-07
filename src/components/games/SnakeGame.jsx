import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, Trophy, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Gauge } from 'lucide-react';

/**
 * SnakeGame:
 * Traditional 20x20 Classic Retro Snake with Apple-level polish.
 * Features:
 * - Immediate auto-start on ANY arrow key / WASD / D-pad press.
 * - Direction buffer queue eliminating rapid-turn self-collisions.
 * - Reduced classic speed (~185ms) with speed mode controls.
 * - Zero-latency touch D-Pad for mobile and tablet devices.
 * - Score & High Score persisted in localStorage.
 */

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 }
];
const INITIAL_DIR = { x: 0, y: -1 }; // Moving Up

const SPEED_PRESETS = {
  slow: 220,
  normal: 180,
  fast: 135
};

export default function SnakeGame() {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 10, y: 5 });
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    return parseInt(localStorage.getItem('snake_high_score') || '0', 10);
  });
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'running' | 'paused' | 'gameover'
  const [speedMode, setSpeedMode] = useState('normal'); // 'slow' | 'normal' | 'fast'

  // Direction tracking with buffered turn queue to prevent rapid double-tap suicide
  const currentDirRef = useRef(INITIAL_DIR);
  const dirQueueRef = useRef([]);

  // Generate random food not on snake
  const spawnFood = useCallback((currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
      const onSnake = currentSnake.some((seg) => seg.x === newFood.x && seg.y === newFood.y);
      if (!onSnake) break;
    }
    return newFood;
  }, []);

  // Safe direction change with input buffering and auto-start
  const handleInputDirection = useCallback((newDir) => {
    // If game is idle or paused, auto-start!
    setGameState((prev) => {
      if (prev === 'idle' || prev === 'paused') {
        return 'running';
      }
      return prev;
    });

    // Reference the last planned direction (either in queue or current)
    const lastPlanned =
      dirQueueRef.current.length > 0
        ? dirQueueRef.current[dirQueueRef.current.length - 1]
        : currentDirRef.current;

    // Disallow exact reverse
    if (newDir.x + lastPlanned.x === 0 && newDir.y + lastPlanned.y === 0) {
      return;
    }

    // Limit queue size to 2 to keep controls ultra-responsive
    if (dirQueueRef.current.length < 2) {
      dirQueueRef.current.push(newDir);
    }
  }, []);

  // Global Keyboard Listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't hijack if user is typing in an input
      if (['input', 'textarea'].includes(e.target.tagName?.toLowerCase())) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          e.preventDefault();
          handleInputDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          e.preventDefault();
          handleInputDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          e.preventDefault();
          handleInputDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          e.preventDefault();
          handleInputDirection({ x: 1, y: 0 });
          break;
        case ' ':
          e.preventDefault();
          setGameState((prev) => {
            if (prev === 'running') return 'paused';
            if (prev === 'paused' || prev === 'idle') return 'running';
            return prev;
          });
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleInputDirection]);

  // Main Movement Tick Loop
  useEffect(() => {
    if (gameState !== 'running') return;

    const tickMs = SPEED_PRESETS[speedMode] || 180;

    const interval = setInterval(() => {
      setSnake((prevSnake) => {
        // Pop next direction from queue if available
        if (dirQueueRef.current.length > 0) {
          currentDirRef.current = dirQueueRef.current.shift();
        }

        const dir = currentDirRef.current;
        const head = prevSnake[0];
        const newHead = {
          x: head.x + dir.x,
          y: head.y + dir.y
        };

        // 1. Wall Collision Check
        if (
          newHead.x < 0 ||
          newHead.x >= GRID_SIZE ||
          newHead.y < 0 ||
          newHead.y >= GRID_SIZE
        ) {
          setGameState('gameover');
          return prevSnake;
        }

        // 2. Self Collision Check
        for (let i = 0; i < prevSnake.length - 1; i++) {
          if (prevSnake[i].x === newHead.x && prevSnake[i].y === newHead.y) {
            setGameState('gameover');
            return prevSnake;
          }
        }

        const newSnake = [newHead, ...prevSnake];

        // 3. Food Collision Check
        if (newHead.x === food.x && newHead.y === food.y) {
          const nextScore = score + 10;
          setScore(nextScore);
          if (nextScore > highScore) {
            setHighScore(nextScore);
            localStorage.setItem('snake_high_score', nextScore.toString());
          }
          setFood(spawnFood(newSnake));
        } else {
          newSnake.pop(); // Remove tail
        }

        return newSnake;
      });
    }, tickMs);

    return () => clearInterval(interval);
  }, [gameState, food, score, highScore, speedMode, spawnFood]);

  // Restart Game
  const handleRestart = () => {
    setSnake(INITIAL_SNAKE);
    currentDirRef.current = INITIAL_DIR;
    dirQueueRef.current = [];
    setFood({ x: 10, y: 5 });
    setScore(0);
    setGameState('running');
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-sm select-none">
      {/* Header Bar with Speed Selector */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#86868b]">
          <span className="h-px w-5 bg-[#86868b]/40" />
          <span>Game 02 · Classic Snake</span>
        </div>

        {/* Speed Toggle */}
        <div className="flex items-center gap-1 p-0.5 rounded-full bg-black/[0.03] text-[10px] font-mono">
          <button
            onClick={() => setSpeedMode('slow')}
            className={`px-2 py-0.5 rounded-full transition-all ${
              speedMode === 'slow' ? 'bg-white text-black font-bold shadow-2xs' : 'text-[#86868b]'
            }`}
          >
            Slow
          </button>
          <button
            onClick={() => setSpeedMode('normal')}
            className={`px-2 py-0.5 rounded-full transition-all ${
              speedMode === 'normal' ? 'bg-white text-black font-bold shadow-2xs' : 'text-[#86868b]'
            }`}
          >
            Normal
          </button>
          <button
            onClick={() => setSpeedMode('fast')}
            className={`px-2 py-0.5 rounded-full transition-all ${
              speedMode === 'fast' ? 'bg-white text-black font-bold shadow-2xs' : 'text-[#86868b]'
            }`}
          >
            Fast
          </button>
        </div>
      </div>

      {/* Score & Trophy Bar */}
      <div className="w-full flex items-center justify-between px-1">
        <span className="text-xs font-mono text-[#1d1d1f] font-bold">
          Score: {score}
        </span>
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#86868b]">
          <Trophy size={13} className="text-amber-500" />
          <span>Best: {highScore}</span>
        </div>
      </div>

      {/* Snake Canvas Grid Container */}
      <div className="relative w-full max-w-[320px] aspect-square rounded-2xl bg-[#141416] p-2 overflow-hidden border border-black/10 shadow-md">
        {/* 20x20 Grid Display */}
        <div className="w-full h-full relative grid grid-cols-20 grid-rows-20">
          {/* Render Food with pulsing glow */}
          <div
            className="absolute rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.95)] flex items-center justify-center"
            style={{
              left: `${(food.x / GRID_SIZE) * 100}%`,
              top: `${(food.y / GRID_SIZE) * 100}%`,
              width: `${100 / GRID_SIZE}%`,
              height: `${100 / GRID_SIZE}%`,
              transform: 'scale(0.85)'
            }}
          />

          {/* Render Snake Segments */}
          {snake.map((segment, idx) => {
            const isHead = idx === 0;
            return (
              <div
                key={`${segment.x}-${segment.y}-${idx}`}
                className={`absolute rounded-sm ${
                  isHead
                    ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] z-10'
                    : 'bg-emerald-600/90'
                }`}
                style={{
                  left: `${(segment.x / GRID_SIZE) * 100}%`,
                  top: `${(segment.y / GRID_SIZE) * 100}%`,
                  width: `${100 / GRID_SIZE}%`,
                  height: `${100 / GRID_SIZE}%`,
                  transform: 'scale(0.92)'
                }}
              />
            );
          })}
        </div>

        {/* Start / Pause / GameOver Overlay */}
        {gameState !== 'running' && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xs flex flex-col items-center justify-center p-6 text-center text-white z-20">
            {gameState === 'idle' && (
              <div className="flex flex-col items-center gap-2.5">
                <span className="text-sm font-semibold tracking-tight">Classic Snake</span>
                <p className="text-[11px] text-[#a1a1a6] max-w-[200px]">
                  Press any Arrow Key or WASD to start moving.
                </p>
                <button
                  onClick={() => setGameState('running')}
                  className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-white/90 active:scale-95 transition-all shadow-sm"
                >
                  <Play size={12} />
                  <span>Start Game</span>
                </button>
              </div>
            )}

            {gameState === 'paused' && (
              <div className="flex flex-col items-center gap-3">
                <span className="text-sm font-semibold tracking-tight">Game Paused</span>
                <button
                  onClick={() => setGameState('running')}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-white/90 active:scale-95 transition-all shadow-sm"
                >
                  <Play size={12} />
                  <span>Resume</span>
                </button>
              </div>
            )}

            {gameState === 'gameover' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center gap-2 max-w-[220px]"
              >
                {/* Mascot Dancing Cat Celebrating the Run */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_0_24px_rgba(255,255,255,0.18)] bg-black shrink-0">
                  <img
                    src="/cat-dance.gif"
                    alt="Dancing Cat Mascot"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                    {score > 0 && score === highScore ? 'New High Score!' : 'Game Over'}
                  </span>
                  <span className="text-sm sm:text-base font-bold tracking-tight text-white">
                    {score} Points
                  </span>
                  <p className="text-[10.5px] text-neutral-300 leading-tight">
                    {score > 0 && score === highScore
                      ? 'Legendary run! Mascot is grooving for you!'
                      : 'Reflex run complete! Cat is still dancing.'}
                  </p>
                </div>

                <button
                  onClick={handleRestart}
                  className="mt-1 inline-flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-full bg-white text-black font-semibold text-xs hover:bg-neutral-100 active:scale-95 transition-all shadow-sm cursor-pointer"
                >
                  <RotateCcw size={12} />
                  <span>Play Again</span>
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>

      {/* Zero-Latency Mobile & Tablet Touch D-Pad */}
      <div className="flex flex-col items-center gap-1 sm:hidden pt-1">
        <button
          onPointerDown={(e) => {
            e.preventDefault();
            handleInputDirection({ x: 0, y: -1 });
          }}
          aria-label="Move Up"
          className="w-11 h-11 rounded-full bg-black/[0.05] active:bg-black/20 flex items-center justify-center text-black shadow-2xs"
        >
          <ArrowUp size={18} />
        </button>
        <div className="flex items-center gap-5">
          <button
            onPointerDown={(e) => {
              e.preventDefault();
              handleInputDirection({ x: -1, y: 0 });
            }}
            aria-label="Move Left"
            className="w-11 h-11 rounded-full bg-black/[0.05] active:bg-black/20 flex items-center justify-center text-black shadow-2xs"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onPointerDown={(e) => {
              e.preventDefault();
              handleInputDirection({ x: 0, y: 1 });
            }}
            aria-label="Move Down"
            className="w-11 h-11 rounded-full bg-black/[0.05] active:bg-black/20 flex items-center justify-center text-black shadow-2xs"
          >
            <ArrowDown size={18} />
          </button>
          <button
            onPointerDown={(e) => {
              e.preventDefault();
              handleInputDirection({ x: 1, y: 0 });
            }}
            aria-label="Move Right"
            className="w-11 h-11 rounded-full bg-black/[0.05] active:bg-black/20 flex items-center justify-center text-black shadow-2xs"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Controls Bar & Tips */}
      <div className="w-full flex items-center justify-between text-xs text-[#86868b] pt-2 border-t border-black/[0.06]">
        <span className="font-mono text-[11px]">Arrows / WASD / Space</span>

        <div className="flex items-center gap-2">
          {gameState === 'running' && (
            <button
              onClick={() => setGameState('paused')}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/[0.04] hover:bg-black/[0.08] text-black transition-colors"
            >
              <Pause size={11} />
              <span>Pause</span>
            </button>
          )}

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black text-white hover:bg-black/85 transition-colors shadow-xs"
          >
            <RotateCcw size={11} />
            <span>Restart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
