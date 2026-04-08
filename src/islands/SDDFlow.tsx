import { useState, useRef, useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

interface Phase {
  id: string;
  label: string;
  description: string;
  whenToUse: string;
  icon: string;
}

interface SDDFlowProps {
  phases: Phase[];
  locale: 'en' | 'es';
}

export default function SDDFlow({ phases, locale }: SDDFlowProps) {
  const prefersReducedMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const selectedPhase = phases.find((p) => p.id === selectedId) ?? null;
  const selectedIndex = phases.findIndex((p) => p.id === selectedId);

  const selectPhase = useCallback(
    (id: string) => {
      setSelectedId(id);
    },
    []
  );

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (index + 1) % phases.length;
      pillRefs.current[next]?.focus();
      setSelectedId(phases[next]!.id);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (index - 1 + phases.length) % phases.length;
      pillRefs.current[prev]?.focus();
      setSelectedId(phases[prev]!.id);
    }
  };

  const panelVariants = {
    initial: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 12 },
    animate: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 1, y: 0 },
    exit: prefersReducedMotion
      ? { opacity: 0 }
      : { opacity: 0, y: -8 },
  };

  const panelTransition = prefersReducedMotion
    ? { duration: 0.1 }
    : { duration: 0.25, ease: [0.16, 1, 0.3, 1] };

  return (
    <div className="w-full space-y-6">
      {/* Phase pills — tablist */}
      <div
        role="tablist"
        aria-label={locale === 'es' ? 'Fases del pipeline SDD' : 'SDD pipeline phases'}
        className="flex flex-wrap gap-2 justify-center"
      >
        {phases.map((phase, index) => {
          const isSelected = phase.id === selectedId;

          return (
            <button
              key={phase.id}
              ref={(el) => { pillRefs.current[index] = el; }}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`sdd-panel-${phase.id}`}
              id={`sdd-tab-${phase.id}`}
              tabIndex={isSelected || (!selectedId && index === 0) ? 0 : -1}
              onClick={() => selectPhase(phase.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={[
                'inline-flex items-center gap-2 px-4 py-2 rounded-full border font-mono text-sm',
                'transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2',
                'focus-visible:outline-[var(--accent-primary)]',
                isSelected
                  ? 'border-[var(--accent-primary)] text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 shadow-[0_0_12px_var(--accent-primary)]'
                  : 'border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent-primary)]/50 hover:text-[var(--text-primary)]',
              ].join(' ')}
            >
              <span aria-hidden="true">{phase.icon}</span>
              <span>{phase.label}</span>
            </button>
          );
        })}
      </div>

      {/* Connecting lines SVG — skip if reducedMotion */}
      {!prefersReducedMotion && phases.length > 1 && (
        <div className="flex items-center justify-center px-4" aria-hidden="true">
          <svg
            width="100%"
            height="2"
            className="max-w-2xl overflow-visible"
            preserveAspectRatio="none"
          >
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              stroke="var(--border)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            {selectedIndex >= 0 && (
              <motion.line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="var(--accent-primary)"
                strokeWidth="1.5"
                strokeOpacity={0.6}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: (selectedIndex + 1) / phases.length }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            )}
          </svg>
        </div>
      )}

      {/* Detail panel — AnimatePresence for enter/exit */}
      <AnimatePresence mode="wait">
        {selectedPhase && (
          <motion.div
            key={selectedPhase.id}
            role="tabpanel"
            id={`sdd-panel-${selectedPhase.id}`}
            aria-labelledby={`sdd-tab-${selectedPhase.id}`}
            variants={panelVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={panelTransition}
            className="rounded-xl border border-[var(--border)] bg-[var(--bg-surface)] p-6 space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">
                {selectedPhase.icon}
              </span>
              <h3 className="font-heading text-lg font-semibold text-[var(--text-primary)]">
                {selectedPhase.label}
              </h3>
            </div>

            <p className="text-[var(--text-muted)] text-sm leading-relaxed">
              {selectedPhase.description}
            </p>

            <div className="pt-2 border-t border-[var(--border)]">
              <p className="text-xs font-mono text-[var(--accent-primary)] uppercase tracking-wider mb-1">
                {locale === 'es' ? 'Cuándo usar' : 'When to use'}
              </p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {selectedPhase.whenToUse}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Empty state — no phase selected */}
      {!selectedPhase && (
        <p className="text-center text-sm text-[var(--text-muted)] py-4" aria-live="polite">
          {locale === 'es'
            ? 'Seleccioná una fase para ver los detalles'
            : 'Select a phase to see details'}
        </p>
      )}
    </div>
  );
}
