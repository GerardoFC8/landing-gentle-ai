export type PresetTag = 'recommended' | 'popular' | 'light' | 'flexible';

export interface Preset {
  id: string;
  name: {
    en: string;
    es: string;
  };
  tag: PresetTag;
  components: string[];
  command: string;
  description: {
    en: string;
    es: string;
  };
}

export const presets: Preset[] = [
  {
    id: 'full-gentleman',
    name: {
      en: 'Full Gentleman',
      es: 'Full Gentleman',
    },
    tag: 'recommended',
    components: ['engram', 'sdd', 'skills', 'context7', 'persona', 'permissions', 'gga', 'theme'],
    command: 'gentle-ai --preset full-gentleman',
    description: {
      en: 'The complete Gentleman Programming stack. All 8 components configured and ready to go. Recommended for new projects and teams adopting AI-first workflows.',
      es: 'El stack completo de Gentleman Programming. Los 8 componentes configurados y listos para usar. Recomendado para proyectos nuevos y equipos que adoptan workflows AI-first.',
    },
  },
  {
    id: 'ecosystem-only',
    name: {
      en: 'Ecosystem',
      es: 'Ecosistema',
    },
    tag: 'popular',
    components: ['engram', 'sdd', 'skills', 'context7', 'persona', 'permissions', 'gga'],
    command: 'gentle-ai --preset ecosystem-only',
    description: {
      en: 'Everything except the Theme configurator. Perfect for teams that already have a code style setup or prefer to manage formatting separately.',
      es: 'Todo excepto el configurador de Theme. Perfecto para equipos que ya tienen un setup de estilo de código o prefieren manejar el formato por separado.',
    },
  },
  {
    id: 'minimal',
    name: {
      en: 'Minimal',
      es: 'Mínimo',
    },
    tag: 'light',
    components: ['engram', 'sdd', 'skills'],
    command: 'gentle-ai --preset minimal',
    description: {
      en: 'Just the essentials: persistent memory, structured workflows, and reusable Skills. The lightest configuration — great for experimenting or adding to an existing agent setup.',
      es: 'Solo lo esencial: memoria persistente, workflows estructurados y Skills reutilizables. La configuración más liviana — ideal para experimentar o agregar a un setup de agente existente.',
    },
  },
  {
    id: 'custom',
    name: {
      en: 'Custom',
      es: 'Personalizado',
    },
    tag: 'flexible',
    components: [],
    command: 'gentle-ai --component engram --component sdd --component skills',
    description: {
      en: 'Pick exactly the components you need. Use --component flags to mix and match. The most flexible option for advanced users who know what they want.',
      es: 'Elegí exactamente los componentes que necesitás. Usá los flags --component para combinar. La opción más flexible para usuarios avanzados que saben lo que quieren.',
    },
  },
];
