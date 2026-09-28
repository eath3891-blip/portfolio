import React, { useState } from 'react';

/**
 * SketchfabModel:
 * Renders the interactive 3D Ironman Helmet model embedded via Sketchfab.
 * Uses transparent mode, auto-start, and minimal UI flags for an Apple-level polish.
 */
export default function SketchfabModel({ className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Sketchfab embed URL configured with transparent background and minimal chrome
  const embedUrl =
    "https://sketchfab.com/models/a00246e1ab3140c6822a22df1a98d43c/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1";

  return (
    <div className={`relative w-full h-full flex flex-col items-center justify-center pointer-events-auto ${className}`}>
      {/* Loading Skeleton */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="flex flex-col items-center gap-2 text-xs text-[#86868b]">
            <div className="w-8 h-8 rounded-full border-2 border-black/10 border-t-black animate-spin" />
            <span>Loading 3D Model...</span>
          </div>
        </div>
      )}

      {/* Interactive 3D Iframe */}
      <div className="relative w-full h-full max-w-[700px] max-h-[620px] aspect-square flex items-center justify-center">
        <iframe
          title="Ironman Helmet"
          src={embedUrl}
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="true"
          execution-while-not-rendered="true"
          web-share="true"
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full border-0 bg-transparent transition-opacity duration-700 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'transparent',
            filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.08))'
          }}
        />
      </div>

      {/* Discreet Apple-Style Model Info & Attribution */}
      <div className="absolute bottom-2 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-black/[0.06] text-[11px] text-[#86868b] shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>3D Interactive • Drag to Rotate</span>
        <span className="text-black/20">•</span>
        <a
          href="https://sketchfab.com/3d-models/ironman-helmet-a00246e1ab3140c6822a22df1a98d43c"
          target="_blank"
          rel="noreferrer nofollow"
          className="hover:text-black transition-colors font-medium underline underline-offset-2"
        >
          Model by Javi_DaviYT
        </a>
      </div>
    </div>
  );
}
