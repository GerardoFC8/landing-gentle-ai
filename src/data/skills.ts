export type SkillCategory = 'workflow' | 'coding' | 'review' | 'testing' | 'infra';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  description: {
    en: string;
    es: string;
  };
}

export const skills: Skill[] = [
  {
    id: 'sdd-init',
    name: 'sdd-init',
    category: 'workflow',
    description: {
      en: 'Bootstraps SDD context for a project. Detects stack, conventions, and testing capabilities. Run once per repo — all subsequent SDD phases use this cached context.',
      es: 'Inicializa el contexto SDD para un proyecto. Detecta el stack, las convenciones y las capacidades de testing. Correlo una vez por repo — todas las fases SDD posteriores usan este contexto cacheado.',
    },
  },
  {
    id: 'sdd-explore',
    name: 'sdd-explore',
    category: 'workflow',
    description: {
      en: 'Investigates ideas before committing to a change. Reads the codebase, compares approaches, and surfaces tradeoffs — without creating any artifacts.',
      es: 'Investiga ideas antes de comprometerse con un cambio. Lee el codebase, compara enfoques y expone tradeoffs — sin crear ningún artefacto.',
    },
  },
  {
    id: 'sdd-propose',
    name: 'sdd-propose',
    category: 'workflow',
    description: {
      en: 'Creates a structured change proposal with intent, scope, and high-level approach. The entry point for any substantial change in the SDD pipeline.',
      es: 'Crea una propuesta de cambio estructurada con intención, scope y enfoque de alto nivel. El punto de entrada para cualquier cambio sustancial en el pipeline SDD.',
    },
  },
  {
    id: 'sdd-spec',
    name: 'sdd-spec',
    category: 'workflow',
    description: {
      en: 'Writes delta specifications with requirements and acceptance scenarios. Defines what success looks like before a single line of code is written.',
      es: 'Escribe especificaciones delta con requisitos y escenarios de aceptación. Define cómo se ve el éxito antes de escribir una sola línea de código.',
    },
  },
  {
    id: 'sdd-design',
    name: 'sdd-design',
    category: 'workflow',
    description: {
      en: 'Produces the technical design: architecture decisions, component contracts, data flows, and key risks. The blueprint the apply phase follows.',
      es: 'Produce el diseño técnico: decisiones de arquitectura, contratos de componentes, flujos de datos y riesgos clave. El plano que sigue la fase de apply.',
    },
  },
  {
    id: 'sdd-tasks',
    name: 'sdd-tasks',
    category: 'workflow',
    description: {
      en: 'Breaks the design into an ordered implementation checklist with clear dependencies. Produces the task list the apply phase uses to track progress.',
      es: 'Divide el diseño en un checklist de implementación ordenado con dependencias claras. Produce la lista de tareas que la fase de apply usa para rastrear el progreso.',
    },
  },
  {
    id: 'sdd-apply',
    name: 'sdd-apply',
    category: 'workflow',
    description: {
      en: 'Implements tasks from the checklist in batches, checking off items as it goes. Reads previous apply-progress to support multi-session implementation without losing state.',
      es: 'Implementa tareas del checklist en lotes, marcando ítems a medida que avanza. Lee el progreso previo para soportar implementación en múltiples sesiones sin perder estado.',
    },
  },
  {
    id: 'sdd-verify',
    name: 'sdd-verify',
    category: 'workflow',
    description: {
      en: 'Validates the implementation against spec, design, and task list. Reports CRITICAL, WARNING, and SUGGESTION findings before changes reach production.',
      es: 'Valida la implementación contra el spec, el diseño y la lista de tareas. Reporta hallazgos CRITICAL, WARNING y SUGGESTION antes de que los cambios lleguen a producción.',
    },
  },
  {
    id: 'sdd-archive',
    name: 'sdd-archive',
    category: 'workflow',
    description: {
      en: 'Syncs delta specs to main specs and closes the change. Persists the final state to Engram and optionally commits the openspec artifacts.',
      es: 'Sincroniza los specs delta con los specs principales y cierra el cambio. Persiste el estado final en Engram y opcionalmente commitea los artefactos de openspec.',
    },
  },
  {
    id: 'go-testing',
    name: 'go-testing',
    category: 'testing',
    description: {
      en: 'Go testing patterns for Gentleman.Dots and Bubbletea TUI testing. Includes table-driven tests, teatest patterns, and coverage conventions.',
      es: 'Patrones de testing en Go para Gentleman.Dots y testing de TUIs con Bubbletea. Incluye tests tabla-driven, patrones de teatest y convenciones de coverage.',
    },
  },
  {
    id: 'branch-pr',
    name: 'branch-pr',
    category: 'infra',
    description: {
      en: 'PR creation workflow following the issue-first enforcement system. Creates structured PRs with proper summaries, test plans, and links to the originating issue.',
      es: 'Workflow de creación de PRs siguiendo el sistema issue-first. Crea PRs estructurados con resúmenes, planes de testing y links al issue de origen.',
    },
  },
  {
    id: 'issue-creation',
    name: 'issue-creation',
    category: 'infra',
    description: {
      en: 'GitHub issue creation workflow with structured templates for bugs, features, and improvements. Enforces the issue-first convention before any code is written.',
      es: 'Workflow de creación de issues en GitHub con templates estructurados para bugs, features y mejoras. Aplica la convención issue-first antes de escribir cualquier código.',
    },
  },
  {
    id: 'skill-creator',
    name: 'skill-creator',
    category: 'coding',
    description: {
      en: 'Creates new agent Skills following the Agent Skills spec. Includes SKILL.md template generation, trigger detection, and compact rules authoring.',
      es: 'Crea nuevas Skills de agente siguiendo la especificación de Agent Skills. Incluye generación de templates SKILL.md, detección de triggers y autoría de reglas compactas.',
    },
  },
  {
    id: 'judgment-day',
    name: 'judgment-day',
    category: 'review',
    description: {
      en: 'Parallel adversarial review protocol. Launches two independent blind judge sub-agents simultaneously, synthesizes findings, applies fixes, and re-judges until both pass.',
      es: 'Protocolo de revisión adversarial paralela. Lanza dos sub-agentes jueces ciegos e independientes simultáneamente, sintetiza hallazgos, aplica correcciones y re-juzga hasta que ambos pasen.',
    },
  },
  {
    id: 'engram-memory',
    name: 'engram-memory',
    category: 'workflow',
    description: {
      en: 'Always-active memory protocol. Defines proactive save triggers, search conventions, session close summaries, and post-compaction recovery procedures for Engram.',
      es: 'Protocolo de memoria siempre activo. Define triggers de guardado proactivo, convenciones de búsqueda, resúmenes de cierre de sesión y procedimientos de recuperación post-compactación para Engram.',
    },
  },
];
