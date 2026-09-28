import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import CharacterController from './CharacterController';

/**
 * CharacterScene:
 * Renders the 3D Character with an Apple-style studio lighting setup.
 * Uses a persistent mutable cursorRef to capture cursor coordinates
 * without causing React state re-renders.
 */
export default function CharacterScene({ className = '' }) {
  const cursorRef = useRef({ x: 0, y: 0, lastMoved: Date.now() });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      // Normalize cursor coordinates from -1 (left / bottom) to 1 (right / top)
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;

      cursorRef.current.x = normX;
      cursorRef.current.y = normY;
      cursorRef.current.lastMoved = Date.now();
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = -(touch.clientY / window.innerHeight) * 2 + 1;

        cursorRef.current.x = normX;
        cursorRef.current.y = normY;
        cursorRef.current.lastMoved = Date.now();
      }
    };

    // Subtle natural gaze drift when user is idle
    const ambientGazeLoop = () => {
      const now = Date.now();
      // If no mouse interaction for 2 seconds, gently drift gaze
      if (now - cursorRef.current.lastMoved > 2000) {
        const t = now * 0.0008;
        cursorRef.current.x = Math.sin(t * 0.7) * 0.25;
        cursorRef.current.y = Math.cos(t * 0.5) * 0.15;
      }
      animationFrameId = requestAnimationFrame(ambientGazeLoop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    animationFrameId = requestAnimationFrame(ambientGazeLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`relative w-full h-full pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0.35, 3.8], fov: 38 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        dpr={[1, 2]} // Crisp rendering across Retina/High-DPI screens
      >
        {/* Studio Lighting Environment */}
        {/* Ambient base fill */}
        <ambientLight intensity={0.8} />

        {/* Soft Key Light (Front-Right, warm) */}
        <directionalLight
          position={[3.5, 4, 3]}
          intensity={1.4}
          color="#ffffff"
          castShadow={false}
        />

        {/* Soft Fill Light (Front-Left, neutral) */}
        <directionalLight
          position={[-3.5, 2.5, 2.5]}
          intensity={0.7}
          color="#f2f5fa"
        />

        {/* Rim / Silhouette Light (Back-Top, highlights hair and shoulders) */}
        <directionalLight
          position={[0, 4.5, -3.5]}
          intensity={1.1}
          color="#ffffff"
        />

        {/* Subtle Ground Bounce Fill */}
        <directionalLight
          position={[0, -3, 2]}
          intensity={0.35}
          color="#fbf4ed"
        />

        {/* 3D Character Controller */}
        <CharacterController cursorRef={cursorRef} />
      </Canvas>
    </div>
  );
}
