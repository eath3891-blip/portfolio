import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Trophy, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * TicTacToeGame:
 * Tactical Tic-Tac-Toe AI where:
 * - If there is any chance of Manoj Bot ('O') winning, Manoj takes it and WINS!
 * - If the user ('X') has a chance to win, Manoj blocks it.
 * - Shows natural turn indicators ("Your Turn (X)" vs "Now Manoj's Turn (O)...").
 * - Highlights winning line if someone wins.
 */

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Cols
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

export default function TicTacToeGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true); // User is 'X', Manoj is 'O'
  const [isThinking, setIsThinking] = useState(false);
  const [gameResult, setGameResult] = useState(null); // 'user' | 'bot' | 'draw' | null
  const [winningLine, setWinningLine] = useState(null);
  const [scores, setScores] = useState({ user: 0, bot: 0, draw: 0 });

  // Check if someone has won
  const checkWinner = (squares) => {
    for (const line of WINNING_LINES) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line };
      }
    }
    return null;
  };

  // Check if board is full
  const isBoardFull = (squares) => {
    return squares.every((cell) => cell !== null);
  };

  /**
   * Manoj Tactical AI Move:
   * 1. WIN PRIORITY: If Manoj has a chance to win this turn, TAKE IT!
   * 2. BLOCK PRIORITY: If User has a chance to win this turn, BLOCK IT!
   * 3. STRATEGIC POSITIONING: Center > Corners > Edges
   */
  const getManojMove = (currentBoard) => {
    const available = [];
    for (let i = 0; i < 9; i++) {
      if (currentBoard[i] === null) available.push(i);
    }

    if (available.length === 0) return null;

    // 1. CHANCE TO WIN: Check if Manoj ('O') can win immediately
    for (const [a, b, c] of WINNING_LINES) {
      const line = [currentBoard[a], currentBoard[b], currentBoard[c]];
      const oCount = line.filter((v) => v === 'O').length;
      const emptyCount = line.filter((v) => v === null).length;

      if (oCount === 2 && emptyCount === 1) {
        if (currentBoard[a] === null) return a;
        if (currentBoard[b] === null) return b;
        if (currentBoard[c] === null) return c;
      }
    }

    // 2. BLOCK USER: Check if User ('X') is about to win
    for (const [a, b, c] of WINNING_LINES) {
      const line = [currentBoard[a], currentBoard[b], currentBoard[c]];
      const xCount = line.filter((v) => v === 'X').length;
      const emptyCount = line.filter((v) => v === null).length;

      if (xCount === 2 && emptyCount === 1) {
        if (currentBoard[a] === null) return a;
        if (currentBoard[b] === null) return b;
        if (currentBoard[c] === null) return c;
      }
    }

    // 3. Center Control
    if (currentBoard[4] === null) return 4;

    // 4. Strategic Corners
    const corners = [0, 2, 6, 8].filter((idx) => currentBoard[idx] === null);
    if (corners.length > 0) {
      return corners[Math.floor(Math.random() * corners.length)];
    }

    // 5. Remaining Edges
    const edges = [1, 3, 5, 7].filter((idx) => currentBoard[idx] === null);
    if (edges.length > 0) {
      return edges[0];
    }

    return available[0];
  };

  // Bot Turn Effect
  useEffect(() => {
    if (!isUserTurn && !gameResult) {
      setIsThinking(true);

      const timer = setTimeout(() => {
        const move = getManojMove(board);

        if (move !== null) {
          const newBoard = [...board];
          newBoard[move] = 'O';
          setBoard(newBoard);

          const winResult = checkWinner(newBoard);
          if (winResult) {
            setGameResult(winResult.winner === 'O' ? 'bot' : 'user');
            setWinningLine(winResult.line);
            setScores((prev) => ({
              ...prev,
              [winResult.winner === 'O' ? 'bot' : 'user']: prev[winResult.winner === 'O' ? 'bot' : 'user'] + 1
            }));
          } else if (isBoardFull(newBoard)) {
            setGameResult('draw');
            setScores((prev) => ({ ...prev, draw: prev.draw + 1 }));
          } else {
            setIsUserTurn(true);
          }
        }
        setIsThinking(false);
      }, 420); // Natural thinking delay

      return () => clearTimeout(timer);
    }
  }, [isUserTurn, board, gameResult]);

  // Handle User Move
  const handleCellClick = (idx) => {
    if (board[idx] !== null || !isUserTurn || isThinking || gameResult) return;

    const newBoard = [...board];
    newBoard[idx] = 'X';
    setBoard(newBoard);

    const winResult = checkWinner(newBoard);
    if (winResult) {
      setGameResult('user');
      setWinningLine(winResult.line);
      setScores((prev) => ({ ...prev, user: prev.user + 1 }));
    } else if (isBoardFull(newBoard)) {
      setGameResult('draw');
      setScores((prev) => ({ ...prev, draw: prev.draw + 1 }));
    } else {
      setIsUserTurn(false);
    }
  };

  // Reset Game
  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsUserTurn(true);
    setIsThinking(false);
    setGameResult(null);
    setWinningLine(null);
  };

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center gap-5 p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] shadow-sm select-none">
      {/* Game Header */}
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#86868b]">
          <span className="h-px w-5 bg-[#86868b]/40" />
          <span>Game 01 · Tic Tac Toe</span>
        </div>

        {/* Live Score Counter */}
        <div className="flex items-center gap-2 text-[11px] font-mono">
          <span className="px-2 py-0.5 rounded bg-black/[0.03] text-[#1d1d1f]">You: {scores.user}</span>
          <span className="px-2 py-0.5 rounded bg-black/[0.03] text-[#86868b]">Draw: {scores.draw}</span>
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-700 font-bold">Manoj: {scores.bot}</span>
        </div>
      </div>

      {/* Turn & Status Indicator */}
      <div className="w-full flex items-center justify-center">
        <div
          className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-tight transition-all duration-300 ${
            gameResult === 'bot'
              ? 'bg-rose-500/10 text-rose-700 border border-rose-500/20'
              : gameResult === 'user'
              ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20'
              : gameResult === 'draw'
              ? 'bg-amber-500/10 text-amber-700 border border-amber-500/20'
              : isThinking
              ? 'bg-blue-500/10 text-blue-700 border border-blue-500/20'
              : 'bg-black/[0.04] text-[#1d1d1f]'
          }`}
        >
          {gameResult === 'bot' ? (
            <>
              <AlertCircle size={13} className="text-rose-600" />
              <span>Manoj Won! Better luck next time.</span>
            </>
          ) : gameResult === 'user' ? (
            <>
              <CheckCircle2 size={13} className="text-emerald-600" />
              <span>You Won! Outstanding moves!</span>
            </>
          ) : gameResult === 'draw' ? (
            <>
              <CheckCircle2 size={13} className="text-amber-600" />
              <span>It's a Draw! Both minds matched.</span>
            </>
          ) : isThinking ? (
            <>
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              <span>Now Manoj's Turn (O)...</span>
            </>
          ) : (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Your Turn (X)</span>
            </>
          )}
        </div>
      </div>

      {/* 3x3 Tic Tac Toe Grid */}
      <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-[#f8f8fa] border border-black/[0.06] w-full max-w-[300px] aspect-square">
        {board.map((cell, idx) => {
          const isWinningCell = winningLine && winningLine.includes(idx);

          return (
            <button
              key={idx}
              onClick={() => handleCellClick(idx)}
              disabled={cell !== null || !isUserTurn || isThinking || gameResult !== null}
              aria-label={`Cell ${idx + 1}, ${cell || 'empty'}`}
              className={`relative flex items-center justify-center rounded-xl border text-3xl font-extrabold font-display transition-all duration-200 ${
                isWinningCell
                  ? 'bg-blue-50 border-blue-400 shadow-sm scale-102'
                  : 'bg-white border-black/[0.05] shadow-2xs'
              } ${
                cell === null && isUserTurn && !isThinking && !gameResult
                  ? 'hover:bg-black/[0.02] hover:border-black/20 active:scale-95 cursor-pointer'
                  : 'cursor-default'
              }`}
            >
              <AnimatePresence>
                {cell === 'X' && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    className="text-[#141416]"
                  >
                    ✕
                  </motion.span>
                )}
                {cell === 'O' && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                    className="text-blue-600"
                  >
                    ◯
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          );
        })}
      </div>

      {/* Celebratory Dancing Cat Mascot Card on Match Completion */}
      <AnimatePresence>
        {gameResult && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl bg-[#141416] text-white shadow-md border border-white/10"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0 border border-white/20 bg-black shadow-inner">
              <img
                src="/cat-dance.gif"
                alt="Dancing Cat Mascot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                  Arcade Mascot
                </span>
                <span className="text-xs">🐱🕺</span>
              </div>
              <span className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                {gameResult === 'user'
                  ? 'Victory Groove!'
                  : gameResult === 'draw'
                  ? 'Stalemate Vibe!'
                  : 'Manoj Won This Round!'}
              </span>
              <p className="text-[11px] text-neutral-300 leading-snug mt-0.5">
                {gameResult === 'user'
                  ? 'You outsmarted the bot! The mascot is celebrating your win.'
                  : gameResult === 'draw'
                  ? 'Two sharp minds locked in balance. Cat grooves in respect.'
                  : 'Tactical play by Manoj! Cat dances regardless.'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Controls */}
      <div className="w-full flex items-center justify-between text-xs text-[#86868b] pt-2 border-t border-black/[0.06]">
        <span className="font-mono text-[11px]">Tactical Strategy Engine</span>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-black text-white hover:bg-black/85 transition-colors active:scale-95 shadow-xs"
        >
          <RotateCcw size={12} />
          <span>Play Again</span>
        </button>
      </div>
    </div>
  );
}
