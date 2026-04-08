import { useState, useRef, useCallback } from 'react';
import type { ReactNode, MouseEvent } from 'react';
import { useReducedMotion } from 'motion/react';

interface Card3DProps {
  children: ReactNode;
  class?: string;
}

interface Rotation {
  x: number;
  y: number;
}

interface GlarePosition {
  x: number;
  y: number;
}

const MAX_ROTATION = 15; // degrees

export default function Card3D({ children, class: className }: Card3DProps) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState<Rotation>({ x: 0, y: 0 });
  const [glare, setGlare] = useState<GlarePosition>({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;

      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Normalized offset from center: -1 to 1
      const normX = (e.clientX - cx) / (rect.width / 2);
      const normY = (e.clientY - cy) / (rect.height / 2);

      // rotateX: mouse above center → positive (tilt top toward viewer)
      const rotX = -normY * MAX_ROTATION;
      // rotateY: mouse right of center → positive (tilt right toward viewer)
      const rotY = normX * MAX_ROTATION;

      // Glare position in % relative to card
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setRot({ x: rotX, y: rotY });
        setGlare({ x: glareX, y: glareY });
      });
    },
    [prefersReducedMotion]
  );

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!prefersReducedMotion) {
      setIsHovered(false);
      // Spring-like reset: animate back using CSS transition
      setRot({ x: 0, y: 0 });
      setGlare({ x: 50, y: 50 });
    }
  };

  // Reduced motion — render as a plain static div
  if (prefersReducedMotion) {
    return (
      <div className={className}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={['perspective-[1000px]', className].filter(Boolean).join(' ')}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: isHovered
            ? 'transform 0.1s ease-out'
            : 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', // spring-like on leave
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {children}

        {/* Glare overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[inherit] pointer-events-none overflow-hidden"
          style={{
            opacity: isHovered ? 0.15 : 0,
            transition: 'opacity 0.2s ease',
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
          }}
        />
      </div>
    </div>
  );
}
