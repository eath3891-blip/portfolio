import React, { useState } from 'react';
import SketchfabModel from '../three/SketchfabModel';
import CharacterScene from '../three/CharacterScene';
import { Box, User } from 'lucide-react';

/**
 * Hero3DContainer:
 * Central 3D visual anchor overlapping the "Manoj Bhatt" typography.
 * Supports both:
 * 1. The interactive 3D model (Ironman Helmet via Sketchfab embed)
 * 2. The procedural 3D designer character with cursor eye & head tracking
 */
export default function Hero3DContainer({ className = '' }) {
  const [modelType, setModelType] = useState('sketchfab'); // 'sketchfab' | 'character'

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center pointer-events-none ${className}`}>
      {/* 3D Mode Switcher (Apple-style segmented control) */}
      <div className="absolute top-2 sm:top-4 z-30 pointer-events-auto flex items-center p-1 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.08] shadow-2xs">
        <button
          onClick={() => setModelType('sketchfab')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
            modelType === 'sketchfab'
              ? 'bg-black text-white shadow-xs'
              : 'text-[#86868b] hover:text-[#1d1d1f]'
          }`}
        >
          <Box size={12} />
          <span>3D Model</span>
        </button>

        <button
          onClick={() => setModelType('character')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium transition-all ${
            modelType === 'character'
              ? 'bg-black text-white shadow-xs'
              : 'text-[#86868b] hover:text-[#1d1d1f]'
          }`}
        >
          <User size={12} />
          <span>Eye-Tracking Avatar</span>
        </button>
      </div>

      {/* Render Selected 3D Experience */}
      <div className="relative w-full h-full flex items-center justify-center">
        {modelType === 'sketchfab' ? (
          <SketchfabModel className="w-full h-full max-w-[850px] max-h-[640px]" />
        ) : (
          <CharacterScene className="w-full h-full max-w-[900px] max-h-[850px]" />
        )}
      </div>
    </div>
  );
}
