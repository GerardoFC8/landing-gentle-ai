export type ModelName = 'opus' | 'sonnet' | 'haiku';
export type PresetId = 'balanced' | 'performance' | 'economy' | 'custom';

export interface PhaseAssignment {
  phase: string;
  model: ModelName;
}

export interface ModelPreset {
  id: PresetId;
  icon: string;
  phases: PhaseAssignment[];
}

const PHASES = [
  'orchestrator',
  'sdd-propose',
  'sdd-design',
  'sdd-verify',
  'sdd-explore',
  'sdd-spec',
  'sdd-tasks',
  'sdd-apply',
  'sdd-archive',
] as const;

export type PhaseName = (typeof PHASES)[number];

export const modelPresets: ModelPreset[] = [
  {
    id: 'balanced',
    icon: 'scale',
    phases: [
      { phase: 'orchestrator', model: 'opus' },
      { phase: 'sdd-propose', model: 'opus' },
      { phase: 'sdd-design', model: 'opus' },
      { phase: 'sdd-verify', model: 'sonnet' },
      { phase: 'sdd-explore', model: 'sonnet' },
      { phase: 'sdd-spec', model: 'sonnet' },
      { phase: 'sdd-tasks', model: 'sonnet' },
      { phase: 'sdd-apply', model: 'sonnet' },
      { phase: 'sdd-archive', model: 'haiku' },
    ],
  },
  {
    id: 'performance',
    icon: 'rocket',
    phases: [
      { phase: 'orchestrator', model: 'opus' },
      { phase: 'sdd-propose', model: 'opus' },
      { phase: 'sdd-design', model: 'opus' },
      { phase: 'sdd-verify', model: 'opus' },
      { phase: 'sdd-explore', model: 'sonnet' },
      { phase: 'sdd-spec', model: 'sonnet' },
      { phase: 'sdd-tasks', model: 'sonnet' },
      { phase: 'sdd-apply', model: 'sonnet' },
      { phase: 'sdd-archive', model: 'haiku' },
    ],
  },
  {
    id: 'economy',
    icon: 'circle-dollar-sign',
    phases: [
      { phase: 'orchestrator', model: 'sonnet' },
      { phase: 'sdd-propose', model: 'sonnet' },
      { phase: 'sdd-design', model: 'sonnet' },
      { phase: 'sdd-verify', model: 'sonnet' },
      { phase: 'sdd-explore', model: 'sonnet' },
      { phase: 'sdd-spec', model: 'sonnet' },
      { phase: 'sdd-tasks', model: 'sonnet' },
      { phase: 'sdd-apply', model: 'sonnet' },
      { phase: 'sdd-archive', model: 'haiku' },
    ],
  },
  {
    id: 'custom',
    icon: 'settings',
    phases: [
      { phase: 'orchestrator', model: 'sonnet' },
      { phase: 'sdd-propose', model: 'sonnet' },
      { phase: 'sdd-design', model: 'sonnet' },
      { phase: 'sdd-verify', model: 'sonnet' },
      { phase: 'sdd-explore', model: 'sonnet' },
      { phase: 'sdd-spec', model: 'sonnet' },
      { phase: 'sdd-tasks', model: 'sonnet' },
      { phase: 'sdd-apply', model: 'sonnet' },
      { phase: 'sdd-archive', model: 'haiku' },
    ],
  },
];
