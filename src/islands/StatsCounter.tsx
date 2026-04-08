import { useState, useRef, useEffect } from 'react';
import {
  useInView,
  useMotionValue,
  useTransform,
  useMotionValueEvent,
  animate,
  useReducedMotion,
} from 'motion/react';

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  locale?: string;
}

/**
 * Subscribes to a MotionValue<string> and renders its current value.
 * Needed because MotionValue is not directly renderable as JSX.
 */
function MotionText({
  mv,
  className,
  'aria-hidden': ariaHidden,
}: {
  mv: ReturnType<typeof useTransform>;
  className?: string;
  'aria-hidden'?: boolean | 'true';
}) {
  const [display, setDisplay] = useState(() => String(mv.get()));
  useMotionValueEvent(mv, 'change', (v) => setDisplay(String(v)));
  return <span className={className} aria-hidden={ariaHidden}>{display}</span>;
}

export default function StatsCounter({
  value,
  label,
  suffix = '',
  duration = 1.8,
  locale = 'en-US',
}: StatsCounterProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const count = useMotionValue(0);
  const formatted = useTransform(count, (latest) => {
    const n = Math.round(latest);
    return `${new Intl.NumberFormat(locale).format(n)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      // Immediately jump to final value — no animation
      count.set(value);
      return;
    }

    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });

    return () => controls.stop();
  }, [isInView, value, duration, prefersReducedMotion, count]);

  // Announce only the final value once animation completes — not every tick
  const [announced, setAnnounced] = useState('');
  useEffect(() => {
    if (!isInView) return;
    const finalFormatted = `${new Intl.NumberFormat(locale).format(value)}${suffix}`;
    const delay = prefersReducedMotion ? 0 : (duration + 0.1) * 1000;
    const t = setTimeout(() => setAnnounced(finalFormatted), delay);
    return () => clearTimeout(t);
  }, [isInView, value, suffix, duration, locale, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-1 text-center"
    >
      <MotionText
        mv={formatted}
        className="font-heading text-4xl font-bold text-[var(--accent-primary)] tabular-nums"
        aria-hidden="true"
      />
      {/* Screen readers get the final value once, not every animation frame */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">{announced}</span>
      <span className="text-sm text-[var(--text-muted)] font-body">{label}</span>
    </div>
  );
}
