import React, { useEffect, useRef } from 'react';

/**
 * FeaturedParticlesBackground:
 * High-performance HTML5 Canvas interactive particle system.
 * Features:
 * - Ambient floating celestial stardust with delicate connecting lines.
 * - Dynamic cursor repulsion and interactive proximity lines when hovering over the section.
 * - Smooth cursor glow aura that follows the mouse.
 * - Auto-pauses via IntersectionObserver when offscreen for zero CPU/GPU overhead.
 * - Capped DPR (max 2) for crisp retina rendering without lag.
 * - Strictly pointer-events-none and z-0 so cards and all UI remain 100% interactive and legible.
 */
export default function FeaturedParticlesBackground({ containerRef }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const container = containerRef?.current || canvas.parentElement;
    if (!container) return;

    let animationFrameId = null;
    let isVisible = true;
    let width = 0;
    let height = 0;
    let particles = [];

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Palette: soft cool white, subtle electric blue, gentle violet, sky
    const colors = [
      'rgba(255, 255, 255, ',
      'rgba(96, 165, 250, ',   // blue-400
      'rgba(167, 139, 250, ',  // violet-400
      'rgba(56, 189, 248, '    // sky-400
    ];

    class Particle {
      constructor(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.baseRadius = Math.random() * 1.3 + 0.9; // 0.9 - 2.2px
        this.radius = this.baseRadius;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.colorBase = colors[Math.floor(Math.random() * colors.length)];
        this.baseAlpha = Math.random() * 0.35 + 0.15; // 0.15 - 0.50
        this.alpha = this.baseAlpha;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update(w, h, mouse) {
        if (!prefersReducedMotion) {
          this.pulseAngle += this.pulseSpeed;
          this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.1;

          if (mouse.active) {
            const dx = this.x - mouse.x;
            const dy = this.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 140;

            if (dist < maxDist && dist > 0.1) {
              const force = (maxDist - dist) / maxDist;
              const angle = Math.atan2(dy, dx);
              this.x += Math.cos(angle) * force * 3.2;
              this.y += Math.sin(angle) * force * 3.2;
              this.radius = this.baseRadius + force * 0.8;
            } else {
              this.radius = this.baseRadius;
            }
          } else {
            this.radius = this.baseRadius;
          }

          this.x += this.vx;
          this.y += this.vy;

          if (this.x < -10) this.x = w + 10;
          if (this.x > w + 10) this.x = -10;
          if (this.y < -10) this.y = h + 10;
          if (this.y > h + 10) this.y = -10;
        }
      }

      draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, Math.max(0.5, this.radius), 0, Math.PI * 2);
        context.fillStyle = this.colorBase + Math.max(0.05, Math.min(1, this.alpha)) + ')';
        context.fill();
      }
    }

    const initParticles = () => {
      const density = width < 768 ? 35 : 65;
      particles = [];
      for (let i = 0; i < density; i++) {
        particles.push(new Particle(width, height));
      }
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);

      initParticles();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
    });
    resizeObserver.observe(container);
    resize();

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left;
      mouseRef.current.targetY = e.clientY - rect.top;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;

        const gradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          260
        );
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.08)');
        gradient.addColorStop(0.5, 'rgba(147, 51, 234, 0.03)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      const particleCount = particles.length;
      for (let i = 0; i < particleCount; i++) {
        const p1 = particles[i];

        if (mouse.active) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mDist < 120) {
            const lineAlpha = (1 - mDist / 120) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = 'rgba(147, 197, 253, ' + lineAlpha + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const lineAlpha = (1 - dist / 85) * 0.08;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = 'rgba(255, 255, 255, ' + lineAlpha + ')';
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < particleCount; i++) {
        particles[i].update(width, height, mouse);
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-0 select-none"
    />
  );
}
