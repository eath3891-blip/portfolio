import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TicTacToeGame from '../components/games/TicTacToeGame';
import SnakeGame from '../components/games/SnakeGame';

/**
 * PlayPage ("Play with Manoj"):
 * Hosts both interactive games:
 * 1. Tic Tac Toe vs Manoj (Unbeatable Guaranteed-Draw Strategy Engine)
 * 2. Traditional Classic Snake Game (20x20 Grid with Keyboard & Touch Controls)
 */
export default function PlayPage() {
  const [activeTab, setActiveTab] = useState('both'); // 'both' | 'tictactoe' | 'snake'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="w-full min-h-screen bg-[#fbfbfd] text-[#1d1d1f] pt-24 sm:pt-28 pb-36 px-6 md:px-12 select-none"
    >
      <div className="max-w-[1080px] mx-auto flex flex-col gap-10 sm:gap-12">
        {/* Page Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-6 border-b border-black/[0.06]">
          <div className="flex flex-col gap-2 max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#86868b]">
              <span className="h-px w-6 bg-[#86868b]/40" />
              <span>Play with Manoj · Interactive Arcade</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141416]">
              Tactical Games &amp; Arcade.
            </h1>

            <p className="text-xs sm:text-sm text-[#737378] leading-relaxed">
              Challenge Manoj in Tic-Tac-Toe (where every game strictly ends in a draw), or test your reflexes with the traditional Snake game.
            </p>
          </div>

          {/* Quick Filter Controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-full bg-black/[0.04] border border-black/[0.04]">
            <button
              onClick={() => setActiveTab('both')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'both' ? 'bg-white text-black shadow-xs' : 'text-[#86868b] hover:text-black'
              }`}
            >
              All Games
            </button>
            <button
              onClick={() => setActiveTab('tictactoe')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'tictactoe' ? 'bg-white text-black shadow-xs' : 'text-[#86868b] hover:text-black'
              }`}
            >
              Tic Tac Toe
            </button>
            <button
              onClick={() => setActiveTab('snake')}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'snake' ? 'bg-white text-black shadow-xs' : 'text-[#86868b] hover:text-black'
              }`}
            >
              Snake
            </button>
          </div>
        </header>

        {/* Games Showcase Grid */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10">
          {/* Game 1: Tic Tac Toe (Top / Left) */}
          {(activeTab === 'both' || activeTab === 'tictactoe') && (
            <div className="w-full max-w-md flex flex-col gap-2">
              <TicTacToeGame />
            </div>
          )}

          {/* Game 2: Traditional Snake Game (Bottom / Right) */}
          {(activeTab === 'both' || activeTab === 'snake') && (
            <div className="w-full max-w-md flex flex-col gap-2">
              <SnakeGame />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
