import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'motion/react';

interface ParticleBackgroundProps {
  color?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

const TARGET_FPS = 30;
const FRAME_INTERVAL = 1000 / TARGET_FPS;
const MOUSE_REPEL_RADIUS = 150;
const MOUSE_REPEL_STRENGTH = 1.5;
const CONNECT_MAX_DISTANCE = 120;
const CONNECT_NEIGHBORS = 3;
// FPS watchdog: if measured fps < 20 for 3 consecutive seconds, stop
const FPS_WATCHDOG_THRESHOLD = 20;
const FPS_WATCHDOG_SECONDS = 3;

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function createParticle(width: number, height: number): Particle {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: randomBetween(-0.4, 0.4),
    vy: randomBetween(-0.4, 0.4),
    radius: randomBetween(1, 3),
    opacity: randomBetween(0.2, 0.6),
  };
}

export default function ParticleBackground({ color: colorProp }: ParticleBackgroundProps) {
  // All hooks MUST be called unconditionally — early returns come after
  const prefersReducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // All mutable state is in refs — no re-renders
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);

  // FPS watchdog
  const fpsFramesRef = useRef<number>(0);
  const fpsWindowStartRef = useRef<number>(0);
  const fpsBadSecondsRef = useRef<number>(0);

  useEffect(() => {
    // Bail inside the effect — hooks still called in consistent order
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let stopped = false;

    function getParticleCount(): number {
      return window.innerWidth > 768 ? 80 : 40;
    }

    function initParticles() {
      const count = getParticleCount();
      // Use canvas CSS dimensions — avoids scrollbar width issues on Windows/Linux
      particlesRef.current = Array.from({ length: count }, () =>
        createParticle(canvas!.clientWidth || window.innerWidth, canvas!.clientHeight || window.innerHeight)
      );
    }

    // Resolve color from CSS variable or prop
    const resolveColor = () =>
      colorProp ?? (getComputedStyle(document.documentElement).getPropertyValue('--accent-primary').trim() || '#E91E8C');
    let color = resolveColor();

    // Observe theme changes to update particle color
    const themeObserver = new MutationObserver(() => {
      color = resolveColor();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    function resizeCanvas() {
      if (stopped) return;
      const dpr = window.devicePixelRatio || 1;
      const logicalW = window.innerWidth;
      const logicalH = window.innerHeight;
      canvas!.width = logicalW * dpr;
      canvas!.height = logicalH * dpr;
      canvas!.style.width = `${logicalW}px`;
      canvas!.style.height = `${logicalH}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }

    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    function handleResize() {
      if (resizeTimer !== null) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 150);
    }

    resizeCanvas();

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const handleMouseLeave = () => {
      mouseRef.current = null;
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    fpsWindowStartRef.current = performance.now();
    fpsFramesRef.current = 0;
    fpsBadSecondsRef.current = 0;

    function drawFrame(timestamp: number) {
      if (stopped) return;

      const delta = timestamp - lastTimeRef.current;

      // 30fps cap — skip frame if delta < interval
      if (delta < FRAME_INTERVAL) {
        rafRef.current = requestAnimationFrame(drawFrame);
        return;
      }

      lastTimeRef.current = timestamp;
      fpsFramesRef.current++;

      // FPS watchdog — check every second
      const windowElapsed = timestamp - fpsWindowStartRef.current;
      if (windowElapsed >= 1000) {
        const measuredFps = (fpsFramesRef.current / windowElapsed) * 1000;
        fpsFramesRef.current = 0;
        fpsWindowStartRef.current = timestamp;

        if (measuredFps < FPS_WATCHDOG_THRESHOLD) {
          fpsBadSecondsRef.current++;
          if (fpsBadSecondsRef.current >= FPS_WATCHDOG_SECONDS) {
            // Auto-disable: consistently below threshold
            stopped = true;
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
            return;
          }
        } else {
          fpsBadSecondsRef.current = 0;
        }
      }

      // Use canvas CSS dimensions — matches initParticles, avoids scrollbar offset
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, w, h);

      // Move + bounce + mouse repel
      for (const p of particles) {
        // Mouse repel
        if (mouse) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_REPEL_RADIUS && dist > 0) {
            const force = (MOUSE_REPEL_RADIUS - dist) / MOUSE_REPEL_RADIUS;
            p.vx += (dx / dist) * force * MOUSE_REPEL_STRENGTH * 0.05;
            p.vy += (dy / dist) * force * MOUSE_REPEL_STRENGTH * 0.05;
          }
        }

        // Velocity cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1.5) {
          p.vx = (p.vx / speed) * 1.5;
          p.vy = (p.vy / speed) * 1.5;
        }

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0) { p.x = 0; p.vx = Math.abs(p.vx); }
        else if (p.x > w) { p.x = w; p.vx = -Math.abs(p.vx); }
        if (p.y < 0) { p.y = 0; p.vy = Math.abs(p.vy); }
        else if (p.y > h) { p.y = h; p.vy = -Math.abs(p.vy); }

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      // Connect nearest CONNECT_NEIGHBORS neighbors per particle
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]!;

        // Compute distances to all other particles within range
        const distances: Array<{ j: number; dist: number }> = [];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_MAX_DISTANCE) {
            distances.push({ j, dist });
          }
        }

        // Sort by distance, take nearest CONNECT_NEIGHBORS
        distances.sort((x, y) => x.dist - y.dist);
        const nearest = distances.slice(0, CONNECT_NEIGHBORS);

        for (const { j, dist } of nearest) {
          const b = particles[j]!;
          const lineOpacity = (1 - dist / CONNECT_MAX_DISTANCE) * 0.3;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = color;
          ctx.globalAlpha = lineOpacity;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(drawFrame);
    }

    rafRef.current = requestAnimationFrame(drawFrame);

    return () => {
      stopped = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeTimer !== null) clearTimeout(resizeTimer);
      themeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [colorProp, prefersReducedMotion]);

  // Reduced motion — render nothing (canvas won't be used)
  if (prefersReducedMotion) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
}
