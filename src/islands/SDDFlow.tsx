import { useState, useRef, useCallback } from 'react';
import type { KeyboardEvent } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

// Inline SVG paths — avoids lucide-react dependency in this island
const phaseIconPaths: Record<string, string> = {
  init: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0 M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3',
  explore: 'M11 3a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm10 18-3.5-3.5',
  propose: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5 M9 18h6 M10 22h4',
  spec: 'M8 2v4 M16 2v4 M3 10h18 M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z M8 14h.01 M12 14h.01 M16 14h.01 M8 18h.01 M12 18h.01',
  design: 'M12 3 2 7l10 6 10-6-10-4z M2 17l10 6 10-6 M2 12l10 6 10-6',
  tasks: 'M9 11l3 3L22 4 M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11',
  apply: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  verify: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  archive: 'M21 8V21H3V8 M1 3h22v5H1z M10 12h4',
};

interface Phase {
  id: string;
  label: string;
  description: string;
  whenToUse: string;
  icon: string;
}

function PhaseIcon({ id, size }: { id: string; size: number }) {
  const d = phaseIconPaths[id];
  if (!d) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {d.split(' M').map((segment, i) => (
        <path key={i} d={i === 0 ? segment : `M${segment}`} />
      ))}
    </svg>
  );
}

interface SDDFlowProps {
  phases: Phase[];
  locale: 'en' | 'es';
}

export default function SDDFlow({ phases, locale }: SDDFlowProps) {
  const prefersReducedMotion = useReducedMotion();
  const [selectedId, setSelectedId] = useState<string | null>(phases[0]?.id ?? null);
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
            <div key={phase.id} className="inline-flex items-center gap-2">
              <button
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
                <PhaseIcon id={phase.id} size={16} />
                <span>{phase.label}</span>
              </button>
              {index < phases.length - 1 && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="opacity-40 shrink-0">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              )}
            </div>
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
              <PhaseIcon id={selectedPhase.id} size={24} />
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

    </div>
  );
}
