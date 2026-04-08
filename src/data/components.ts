export type ComponentCategory = 'core' | 'enhancement' | 'config';

export interface GentleComponent {
  id: string;
  name: string;
  codeName: string;
  icon: string;
  category: ComponentCategory;
  description: {
    en: string;
    es: string;
  };
}

export const components: GentleComponent[] = [
  {
    id: 'engram',
    name: 'Engram',
    codeName: 'engram',
    icon: 'brain',
    category: 'core',
    description: {
      en: 'Persistent memory that survives across sessions and compaction. Decisions, conventions, bug fixes, and discoveries are stored and recalled automatically — your agent never starts blind.',
      es: 'Memoria persistente que sobrevive entre sesiones y compactaciones. Decisiones, convenciones, bugs resueltos y descubrimientos se guardan y recuerdan automáticamente — tu agente nunca empieza de cero.',
    },
  },
  {
    id: 'sdd',
    name: 'SDD',
    codeName: 'sdd',
    icon: 'map',
    category: 'core',
    description: {
      en: 'Spec-Driven Development pipeline with 9 phases: init, explore, propose, spec, design, tasks, apply, verify, archive. Breaks large changes into structured, hallucination-resistant workflows.',
      es: 'Pipeline SDD con 9 fases: init, explore, propose, spec, design, tasks, apply, verify, archive. Divide los cambios grandes en workflows estructurados y resistentes a las alucinaciones.',
    },
  },
  {
    id: 'skills',
    name: 'Skills',
    codeName: 'skills',
    icon: 'zap',
    category: 'core',
    description: {
      en: 'Reusable agent instructions packaged as Skills. Includes go-testing, branch-pr, issue-creation, skill-creator, and more. Auto-loaded by context — the right skill activates when you need it.',
      es: 'Instrucciones de agente reutilizables empaquetadas como Skills. Incluye go-testing, branch-pr, issue-creation, skill-creator y más. Se cargan automáticamente por contexto — la skill correcta se activa cuando la necesitás.',
    },
  },
  {
    id: 'context7',
    name: 'Context7',
    codeName: 'context7',
    icon: 'book-open',
    category: 'enhancement',
    description: {
      en: 'MCP server integration that pulls up-to-date library documentation at query time. No more hallucinated APIs — your agent reads the actual docs before writing code.',
      es: 'Integración con servidor MCP que trae documentación actualizada de librerías en tiempo de consulta. Sin APIs alucinadas — tu agente lee la documentación real antes de escribir código.',
    },
  },
  {
    id: 'persona',
    name: 'Persona',
    codeName: 'persona',
    icon: 'drama',
    category: 'enhancement',
    description: {
      en: 'Configures your agent\'s personality, tone, language, and expertise level. Defines how your agent communicates — from Rioplatense Spanish to senior architect mindset.',
      es: 'Configura la personalidad, el tono, el idioma y el nivel de expertise de tu agente. Define cómo se comunica — desde el español rioplatense hasta la mentalidad de arquitecto senior.',
    },
  },
  {
    id: 'permissions',
    name: 'Permissions',
    codeName: 'permissions',
    icon: 'lock',
    category: 'config',
    description: {
      en: 'Fine-grained permission rules for what your agent can read, write, execute, and ignore. Prevents accidental writes to sensitive files and keeps the agent in its lane.',
      es: 'Reglas de permisos granulares para lo que tu agente puede leer, escribir, ejecutar e ignorar. Previene escrituras accidentales en archivos sensibles y mantiene al agente en su carril.',
    },
  },
  {
    id: 'gga',
    name: 'GGA',
    codeName: 'gga',
    icon: 'bot',
    category: 'enhancement',
    description: {
      en: 'Gentleman GitHub Agent integration. Adds issue-first enforcement, PR creation with structured templates, and branch management conventions to your agent\'s workflow.',
      es: 'Integración con Gentleman GitHub Agent. Agrega el flujo issue-first, creación de PRs con templates estructurados y convenciones de manejo de branches al workflow de tu agente.',
    },
  },
  {
    id: 'theme',
    name: 'Theme',
    codeName: 'theme',
    icon: 'palette',
    category: 'config',
    description: {
      en: 'Configures your agent\'s code style preferences: indentation, quote style, semicolons, import ordering, and formatting conventions. Keeps generated code consistent with your codebase.',
      es: 'Configura las preferencias de estilo de código de tu agente: indentación, estilo de comillas, punto y coma, orden de imports y convenciones de formato. Mantiene el código generado consistente con tu codebase.',
    },
  },
];
