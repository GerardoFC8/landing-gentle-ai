import type { en } from './en';

export const es = {
  meta: {
    title: 'Gentle AI — Agentes de IA para el Ecosistema Gentleman Programming',
    description:
      'Gentle AI te da agentes de IA listos para producción, Skills, pipelines SDD y memoria Engram — para que gastes menos tiempo configurando y más tiempo enviando código.',
  },

  nav: {
    problem: 'El Problema',
    solution: 'La Solución',
    howItWorks: 'Cómo Funciona',
    agents: 'Agentes',
    components: 'Componentes',
    demo: 'Demo',
    install: 'Instalación',
    community: 'Comunidad',
    toggleTheme: 'Cambiar tema',
    switchLang: 'English',
  },

  hero: {
    badge: 'Open Source · Licencia MIT',
    headline: 'Un comando.\nCualquier agente.\nCualquier sistema.',
    subheadline:
      'El ecosistema de Gentleman AI: configurado y listo.',
    ctaInstall: 'Instala Ahora',
    ctaGithub: 'Ver en GitHub',
    terminalCommands: [
      '$ brew install gentle-ai',
      '✓ Downloading gentle-ai@1.18.3...',
      '✓ Installing dependencies...',
      '✓ Setting up Engram memory...',
      '✓ Configuring SDD pipeline...',
      '✓ Done! Run: gentle-ai --help',
      '',
      '$ gentle-ai --preset full-gentleman',
      '✓ Applied 8 components',
      '✓ Agents configured: Claude Code, Gemini CLI...',
      '✓ Ready. Happy shipping! 🚀',
    ],
  },

  problem: {
    headline: 'Todos los proyectos empiezan igual.',
    intro:
      'Abrís un repo nuevo, abrís tu agente de IA y pasás la próxima hora configurando las mismas cosas que configuraste la semana pasada.',
    points: [
      {
        title: 'Siempre pegando los mismos prompts',
        description:
          'La memoria no persiste. Cada sesión empieza de cero. Tenés que re-explicar tus convenciones, tu stack, tus preferencias — siempre, siempre, siempre.',
      },
      {
        title: 'Cada agente se comporta distinto',
        description:
          'Claude, Gemini, Cursor, Copilot — cada uno necesita configuración diferente. Mantener consistencia entre herramientas es un trabajo de tiempo completo.',
      },
      {
        title: 'Sin estructura para cambios grandes',
        description:
          'Los agentes alucinan cuando el scope es amplio. Sin un workflow claro — spec, diseño, tareas, implementación — derivan y producen basura.',
      },
    ],
  },

  solution: {
    headline: 'Una config. Todos los agentes. Listo para producción.',
    intro:
      'Gentle AI es la capa que faltaba entre tu codebase y tus agentes de IA. Configurás una vez, compartís en todos lados.',
    pillars: [
      {
        title: 'Engram — Memoria Persistente',
        description:
          'Decisiones, convenciones, bugs resueltos y descubrimientos persisten entre sesiones y compactaciones. Tus agentes recuerdan todo.',
      },
      {
        title: 'SDD — Entrega Estructurada',
        description:
          'Spec-Driven Development divide los cambios grandes en propuesta → spec → diseño → tareas → aplicar → verificar. Sin alucinaciones en tareas complejas.',
      },
      {
        title: 'Skills — Expertise Reutilizable',
        description:
          'Instrucciones de agente empaquetadas para testing, creación de PRs, code review y más. Instalás una vez y todos tus agentes se benefician.',
      },
    ],
  },

  howItWorks: {
    headline: 'De la instalación al deploy en minutos.',
    steps: [
      {
        number: '01',
        title: 'Instala Gentle AI',
        description:
          'Un comando via Homebrew, curl, Scoop o Go. Gentle AI disponible en macOS, Linux y Windows.',
      },
      {
        number: '02',
        title: 'Elegí un preset',
        description:
          'Usá full-gentleman para todo, ecosystem-only para el stack principal, o minimal para lo esencial. O combiná componentes a tu gusto.',
      },
      {
        number: '03',
        title: 'Abrí tu agente de IA',
        description:
          'Claude Code, Gemini CLI, Cursor — tu agente ya tiene memoria Engram, pipelines SDD, Skills y tus convenciones pre-cargadas.',
      },
      {
        number: '04',
        title: 'Enviá más rápido',
        description:
          'Sin repetir contexto. Sin alucinaciones en tareas grandes. Solo desarrollo limpio, estructurado y potenciado por IA.',
      },
    ],
  },

  beforeAfter: {
    headline: 'Antes de Gentle AI vs. Después',
    beforeLabel: 'Antes',
    afterLabel: 'Después',
    description:
      'Mirá la diferencia que hace Gentle AI en tu workflow de desarrollo con IA.',
  },

  sddPipeline: {
    headline: 'El Pipeline SDD',
    intro:
      'Spec-Driven Development es la capa de planificación estructurada para cambios sustanciales. Cada fase tiene una entrada, salida y responsabilidad claras.',
    phases: [
      {
        id: 'init',
        label: 'Init',
        description: 'Inicializa el contexto SDD en un proyecto.',
        whenToUse: 'La primera vez que usás SDD en un proyecto. Detecta stack, convenciones y capacidades de testing. Correlo una vez por repo.',
      },
      {
        id: 'explore',
        label: 'Explore',
        description: 'Investiga el codebase antes de comprometerte con un cambio.',
        whenToUse: 'Cuando necesitás entender el espacio del problema, comparar enfoques o exponer tradeoffs — sin crear artefactos.',
      },
      {
        id: 'propose',
        label: 'Propose',
        description: 'Crea una propuesta de cambio con intención, scope y enfoque.',
        whenToUse: 'El punto de entrada para cualquier cambio sustancial. Define qué querés hacer y por qué.',
      },
      {
        id: 'spec',
        label: 'Spec',
        description: 'Escribe especificaciones con requisitos y escenarios.',
        whenToUse: 'Después de aprobar la propuesta. Define cómo se ve el éxito antes de escribir una línea de código.',
      },
      {
        id: 'design',
        label: 'Design',
        description: 'Diseño técnico con decisiones de arquitectura.',
        whenToUse: 'Después del spec. Produce el plano: contratos de componentes, flujos de datos y riesgos clave.',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        description: 'Divide un cambio en tareas de implementación.',
        whenToUse: 'Después del diseño. Crea un checklist ordenado con dependencias claras.',
      },
      {
        id: 'apply',
        label: 'Apply',
        description: 'Implementa tareas siguiendo specs y diseño.',
        whenToUse: 'La fase de ejecución. Trabaja en lotes, soporta implementación multi-sesión sin perder estado.',
      },
      {
        id: 'verify',
        label: 'Verify',
        description: 'Valida que la implementación coincida con los specs.',
        whenToUse: 'Después de aplicar. Reporta hallazgos CRITICAL, WARNING y SUGGESTION antes de llegar a producción.',
      },
      {
        id: 'archive',
        label: 'Archive',
        description: 'Sincroniza specs delta con los principales y archiva.',
        whenToUse: 'Después de verificar. Persiste el estado final en Engram y cierra el cambio.',
      },
    ],
    extraSkillsHeadline: 'Skills Independientes',
    extraSkillsIntro: 'Más allá de SDD, Gentle AI incluye skills independientes que se activan por contexto — sin configuración manual.',
    extraSkills: [
      {
        id: 'judgment-day',
        icon: '⚖️',
        label: 'Judgment Day',
        description: 'Revisión adversarial paralela — dos jueces ciegos independientes revisan el mismo objetivo simultáneamente.',
      },
      {
        id: 'skill-registry',
        icon: '📦',
        label: 'Skill Registry',
        description: 'Escanea las skills instaladas, construye el registro y expone reglas compactas para delegación a sub-agentes.',
      },
      {
        id: 'skill-creator',
        icon: '🛠️',
        label: 'Skill Creator',
        description: 'Crea nuevas skills de agente siguiendo la spec de Agent Skills — templates SKILL.md, triggers y reglas compactas.',
      },
      {
        id: 'branch-pr',
        icon: '🔀',
        label: 'Branch PR',
        description: 'Workflow de creación de PRs con enforcement issue-first, resúmenes estructurados y planes de test.',
      },
      {
        id: 'issue-creation',
        icon: '🎫',
        label: 'Issue Creation',
        description: 'Templates de issues en GitHub para bugs, features y mejoras. Aplica la convención issue-first.',
      },
      {
        id: 'go-testing',
        icon: '🧪',
        label: 'Go Testing',
        description: 'Patrones de testing en Go incluyendo testing de TUIs con Bubbletea, tests tabla-driven y convenciones de coverage.',
      },
      {
        id: 'sdd-onboard',
        icon: '🎓',
        label: 'SDD Onboard',
        description: 'Walkthrough guiado de punta a punta del workflow SDD usando tu codebase real.',
      },
    ],
  },

  agents: {
    headline: 'Funciona con tu agente.',
    intro:
      'Gentle AI soporta todos los agentes de IA principales. Delegación completa significa que el agente puede correr el pipeline SDD de forma autónoma.',
    badges: {
      full: 'Delegación Completa',
      solo: 'Agente Solo',
    },
  },

  components: {
    headline: 'Combiná componentes a tu medida.',
    intro:
      'Gentle AI es modular. Cada componente agrega capacidades específicas. Usá presets para arrancar o elegí componentes individuales para una configuración personalizada.',
  },

  presets: {
    headline: 'Presets para cada workflow.',
    intro:
      'Arrancá con un preset y personalizá desde ahí. Cada preset es un conjunto curado de componentes optimizado para un caso de uso específico.',
    recommended: 'Recomendado',
    popular: 'Popular',
  },

  demo: {
    headline: 'Miralo en acción.',
    intro:
      'Así se ve Gentle AI. Un TUI real que te guía por la configuración de agentes, selección de persona, presets del ecosistema y configuración de modelos — todo desde tu terminal.',
  },

  install: {
    headline: 'Instala en segundos.',
    postInstall: [
      'Ejecuta `gentle-ai --version` para verificar la instalación',
      'Ejecuta `gentle-ai --preset full-gentleman` para aplicar el preset completo',
      'Abrí tu agente de IA y empezá a enviar código',
    ],
  },

  community: {
    headline: 'Construido con la comunidad.',
    intro:
      'Gentle AI es open source y dirigido por la comunidad. Unite a miles de desarrolladores que envían código más rápido con IA.',
    discord: 'Uníte a nuestro Discord',
    labels: {
      stars: 'GitHub Stars',
      forks: 'Forks',
      contributors: 'Contribuidores',
      version: 'Última Versión',
    },
  },

  ecosystem: {
    headline: 'Parte de un ecosistema más grande.',
    intro:
      'Gentle AI es la base del ecosistema Gentleman Programming — una suite de herramientas, cursos y comunidades para desarrolladores modernos.',
    projects: [
      {
        name: 'Gentleman.Dots',
        description: 'Setup completo de terminal: Neovim, Tmux, Zellij y una colección curada de dotfiles.',
        url: 'https://github.com/Gentleman-Programming/Gentleman.Dots',
      },
      {
        name: 'GGA — Gentleman GitHub Agent',
        description: 'Workflows de GitHub potenciados por IA: creación de issues, revisión de PRs y manejo de branches.',
        url: 'https://github.com/Gentleman-Programming/GGA',
      },
      {
        name: 'Gentleman Academy',
        description: 'Cursos de arquitectura, Clean Code, DDD y desarrollo frontend moderno.',
        url: 'https://gentleman-programming.com',
      },
      {
        name: 'Gentleman.YouTube',
        description: 'Videos semanales sobre arquitectura de software, herramientas de IA y productividad del desarrollador.',
        url: 'https://www.youtube.com/@GentlemanProgramming',
      },
    ],
  },

  finalCta: {
    headline: 'Dejá de configurar.\nEmpezá a enviar.',
    subheadline:
      'Una instalación. Todos los agentes configurados. Memoria persistente. Workflows estructurados. Todo lo que necesitás para enviar más rápido con IA.',
    ctaInstall: 'Instala Gentle AI',
    ctaGithub: 'Dale una estrella en GitHub',
  },

  footer: {
    copyright: '© 2026 Gentleman Programming. Licencia MIT.',
    links: {
      docs: {
        label: 'Secciones',
        items: [
          { label: 'Cómo Funciona', url: '#how-it-works' },
          { label: 'Agentes', url: '#agents' },
          { label: 'Componentes', url: '#components' },
          { label: 'Instalación', url: '#install' },
          { label: 'Demo', url: '#demo' },
        ],
      },
      community: {
        label: 'Comunidad',
        items: [
          { label: 'GitHub', url: 'https://github.com/Gentleman-Programming/gentle-ai' },
          { label: 'Discord', url: 'https://discord.com/invite/3QVhF5vRsR' },
          { label: 'YouTube', url: 'https://www.youtube.com/@GentlemanProgramming' },
          { label: 'Twitter / X', url: 'https://x.com/G_Programming' },
        ],
      },
      ecosystem: {
        label: 'Ecosistema',
        items: [
          { label: 'Gentleman.Dots', url: 'https://github.com/Gentleman-Programming/Gentleman.Dots' },
        ],
      },
    },
  },
} satisfies typeof en;
