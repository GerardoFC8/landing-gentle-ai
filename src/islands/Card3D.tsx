import { useState, useRef, useCallback, useEffect } from 'react';
import type { ReactNode, MouseEvent } from 'react';
import { useReducedMotion } from 'motion/react';

interface Card3DProps {
  children: ReactNode;
  class?: string;
}

interface GlarePosition {
  x: number;
  y: number;
}

export default function Card3D({ children, class: className }: Card3DProps) {
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const [glare, setGlare] = useState<GlarePosition>({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion) return;

      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();

      // Glare position in % relative to card
      const glareX = ((e.clientX - rect.left) / rect.width) * 100;
      const glareY = ((e.clientY - rect.top) / rect.height) * 100;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setGlare({ x: glareX, y: glareY });
      });
    },
    [prefersReducedMotion]
  );

  const handleMouseEnter = () => {
    if (!prefersReducedMotion) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!prefersReducedMotion) {
      setIsHovered(false);
      setGlare({ x: 50, y: 50 });
    }
  };

  // Cancel any pending rAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

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
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={cardRef} className="relative">
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
