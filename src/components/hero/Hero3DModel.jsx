import React, { useState, useRef, useCallback } from 'react';

/**
 * Hero3DModel: Truly frameless, chrome-free 3D float.
 *
 * Sketchfab chrome layout inside the iframe:
 *   * Title bar   -> top ~44px
 *   * Bottom bar  -> bottom ~44px  <- what the user was seeing
 *   * Corner logo -> bottom-left ~40x40px, bottom-right ~40x40px
 *
 * Two-layer strategy to permanently hide all chrome:
 *
 *   LAYER 1: iframe oversized and pushed far off viewport:
 *     top: -15vh  -> title bar pushed 15vh above screen top
 *     height: 135vh -> bottom edge at 120vh (20vh below screen bottom)
 *     right: -8vw  -> right badge pushed off right edge
 *     width: 64vw  -> left edge at ~44vw (left badge is inside viewport here,
 *                     which is why shield divs are needed)
 *
 *   LAYER 2: fixed same-color shield divs placed exactly where Sketchfab
 *     chrome can bleed through. They are the same color as the page (#fbfbfd),
 *     invisible to the eye, pointer-events: none so they don't block interaction.
 *     Shields cover: bottom strip of right half, top strip of right half.
 *
 * Zoom limiter: wheel event accumulator prevents extreme zoom-out.
 */

const MAX_ZOOM_DELTA = 900;
const DECAY_RATE     = 0.90;
const PAGE_BG        = '#fbfbfd';

export default function Hero3DModel({ className = '' }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const zoomAcc = useRef(0);
  const rafRef  = useRef(null);

  const embedUrl =
    'https://sketchfab.com/models/a00246e1ab3140c6822a22df1a98d43c/embed' +
    '?autostart=1&transparent=1' +
    '&ui_controls=0&ui_infos=0&ui_watermark=0' +
    '&ui_stop=0&ui_help=0&ui_settings=0' +
    '&ui_inspector=0&ui_annotations=0' +
    '&ui_ar=0&ui_vr=0&ui_fullscreen=0&ui_hint=0&dnt=1';

  const handleWheel = useCallback((e) => {
    zoomAcc.current += e.deltaY;
    if (!rafRef.current) {
      const decay = () => {
        zoomAcc.current *= DECAY_RATE;
        if (Math.abs(zoomAcc.current) > 1) {
          rafRef.current = requestAnimationFrame(decay);
        } else {
          zoomAcc.current = 0;
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(decay);
    }
    if (Math.abs(zoomAcc.current) > MAX_ZOOM_DELTA) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, []);

  // Shared style for all shield divs
  const shieldBase = {
    position: 'fixed',
    background: PAGE_BG,
    pointerEvents: 'none',
    zIndex: 18, // above iframe (15), below all text (30+)
  };

  return (
    <div
      className={`relative w-full h-full pointer-events-none select-none ${className}`}
    >
      {/* Loading spinner */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-7 h-7 rounded-full border-2 border-black/10 border-t-black/60 animate-spin" />
        </div>
      )}

      {/* ── 3D iframe: fixed, oversized, pushed far off all viewport edges ── */}
      <iframe
        title="3D Ironman Helmet"
        src={embedUrl}
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        onLoad={() => setIsLoaded(true)}
        onWheel={handleWheel}
        className={`border-0 transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          position: 'fixed',
          top:    '-15vh',   // title bar hidden (15vh above screen)
          right:  '-8vw',    // right badge off screen
          width:  '64vw',
          height: '135vh',   // bottom edge at 120vh, 20vh below screen
          background: 'transparent',
          pointerEvents: 'auto',
          zIndex: 15,
        }}
      />

      {/*
        ── SHIELDS: same color as page bg, cover Sketchfab chrome bleed ──
        These are invisible to the eye. They permanently mask any Sketchfab
        UI element that survives the oversized-iframe approach.
      */}

      {/* Bottom shield: covers any bottom chrome above the viewport bottom */}
      <div style={{ ...shieldBase, bottom: 0, right: 0, width: '66vw', height: '72px' }} />

      {/* Top shield: covers title bar that could show near the TopBar */}
      <div style={{ ...shieldBase, top: 0, right: 0, width: '66vw', height: '68px' }} />

      {/* Right edge shield: covers right badge bleeding off right edge */}
      <div style={{ ...shieldBase, top: 0, right: 0, width: '10vw', height: '100vh' }} />
    </div>
  );
}
