import { useState, useRef, useCallback } from 'react';
import type { ReactNode, KeyboardEvent, PointerEvent } from 'react';

interface BeforeAfterSliderProps {
  beforeLabel: string;
  afterLabel: string;
  beforeContent: ReactNode;
  afterContent: ReactNode;
}

const CLAMP_MIN = 5;
const CLAMP_MAX = 95;

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export default function BeforeAfterSlider({
  beforeLabel,
  afterLabel,
  beforeContent,
  afterContent,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Calculate position from pointer event
  const positionFromPointer = useCallback((clientX: number): number => {
    const container = containerRef.current;
    if (!container) return 50;
    const rect = container.getBoundingClientRect();
    const raw = ((clientX - rect.left) / rect.width) * 100;
    return clamp(raw, CLAMP_MIN, CLAMP_MAX);
  }, []);

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDragging.current = true;
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    setPosition(positionFromPointer(e.clientX));
  };

  const handlePointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    setPosition(positionFromPointer(e.clientX));
  };

  const handlePointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    (e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPosition((p) => clamp(p - 5, CLAMP_MIN, CLAMP_MAX));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPosition((p) => clamp(p + 5, CLAMP_MIN, CLAMP_MAX));
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl border border-[var(--border)] select-none touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{ cursor: isDragging.current ? 'grabbing' : 'col-resize' }}
    >
      {/* AFTER pane (full width, sits behind) */}
      <div className="relative w-full">
        {afterContent}
      </div>

      {/* BEFORE pane (clipped to position%) — sits on top */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
        aria-hidden="true"
      >
        {beforeContent}
      </div>

      {/* Label: After (right side) */}
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <span className="px-2 py-1 rounded bg-[var(--bg-elevated)]/90 text-xs font-mono text-[var(--text-muted)] border border-[var(--border)]">
          {afterLabel}
        </span>
      </div>

      {/* Label: Before (left side) */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <span className="px-2 py-1 rounded bg-[var(--bg-elevated)]/90 text-xs font-mono text-[var(--text-muted)] border border-[var(--border)]">
          {beforeLabel}
        </span>
      </div>

      {/* Drag handle — the vertical divider */}
      <div
        className="absolute top-0 bottom-0 z-30 flex items-center justify-center"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        {/* Vertical divider line */}
        <div className="absolute top-0 bottom-0 w-[2px] bg-[var(--accent-primary)]" />

        {/* Grab handle circle */}
        <div
          role="slider"
          tabIndex={0}
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Comparison slider"
          onKeyDown={handleKeyDown}
          className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--accent-primary)] border-2 border-[var(--bg-base)] shadow-lg cursor-grab active:cursor-grabbing focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
        >
          {/* Left/right arrows */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="text-[var(--bg-base)]"
          >
            <path d="M18 8L22 12L18 16" />
            <path d="M6 8L2 12L6 16" />
          </svg>
        </div>
      </div>
    </div>
  );
}
