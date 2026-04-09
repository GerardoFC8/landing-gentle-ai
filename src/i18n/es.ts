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
    ecosystem: 'Ecosistema',
    demo: 'Demo',
    install: 'Instalación',
    community: 'Comunidad',
    buildAgent: 'Crea tu Agente',
    modelIntelligence: 'Config. de modelos',
    toggleTheme: 'Cambiar tema',
    switchLang: 'English',
  },

  hero: {
    badge: 'Open Source · Licencia MIT',
    headline: 'Un comando.\nCualquier agente.\nCualquier OS.',
    subheadline:
      'El ecosistema Gentle AI, configurado y listo.',
    ctaInstall: 'Instala ahora',
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
      '✓ Ready. Happy shipping!',
    ],
  },

  problem: {
    headline: 'Todos los proyectos empiezan igual.',
    intro:
      'Abres un repo nuevo, abres tu agente de IA y pasas la próxima hora configurando las mismas cosas que configuraste la semana pasada.',
    points: [
      {
        title: 'Siempre pegando los mismos prompts',
        description:
          'La memoria no persiste. Cada sesión empieza de cero. Tienes que volver a explicar tus convenciones, tu stack y tus preferencias — una y otra vez.',
      },
      {
        title: 'Cada agente se comporta distinto',
        description:
          'Claude, Gemini, Cursor, Copilot — cada uno necesita configuración diferente. Mantener consistencia entre herramientas es un trabajo de tiempo completo.',
      },
      {
        title: 'Sin estructura para cambios grandes',
        description:
          'Los agentes alucinan cuando el scope es amplio. Sin un workflow claro — Spec, Design, Tasks, Apply — derivan y producen basura.',
      },
    ],
  },

  solution: {
    headline: 'Una config. Todos los agentes. Listo para producción.',
    intro:
      'Gentle AI es la capa que faltaba entre tu codebase y tus agentes de IA. Configuras una vez y compartes en todos lados.',
    pillars: [
      {
        title: 'Engram — Memoria Persistente',
        description:
          'Decisiones, convenciones, bugs resueltos y descubrimientos persisten entre sesiones y compactaciones. Tus agentes recuerdan todo.',
      },
      {
        title: 'SDD — Entrega Estructurada',
        description:
          'Spec-Driven Development divide los cambios grandes en Propose → Spec → Design → Tasks → Apply → Verify. Sin alucinaciones en tareas complejas.',
      },
      {
        title: 'Skills — Expertise Reutilizable',
        description:
          'Instrucciones de agente empaquetadas para testing, creación de PRs, code review y más. Instalas una vez y todos tus agentes se benefician.',
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
          'Un comando vía Homebrew, curl, Scoop o Go. Gentle AI disponible en macOS, Linux y Windows.',
      },
      {
        number: '02',
        title: 'Elige un preset',
        description:
          'Usa full-gentleman para todo, ecosystem-only para el stack principal, o minimal para lo esencial. También puedes combinar componentes a tu gusto.',
      },
      {
        number: '03',
        title: 'Abre tu agente de IA',
        description:
          'Claude Code, Gemini CLI, Cursor — tu agente ya tiene memoria Engram, pipelines SDD, Skills y tus convenciones pre-cargadas.',
      },
      {
        number: '04',
        title: 'Envía más rápido',
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
      'Mira la diferencia que hace Gentle AI en tu workflow de desarrollo con IA.',
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
        whenToUse: 'La primera vez que usas SDD en un proyecto. Detecta stack, convenciones y capacidades de testing. Ejecútalo una vez por repo.',
      },
      {
        id: 'explore',
        label: 'Explore',
        description: 'Investiga el codebase antes de comprometerte con un cambio.',
        whenToUse: 'Cuando necesitas entender el espacio del problema, comparar enfoques o exponer tradeoffs — sin crear artefactos.',
      },
      {
        id: 'propose',
        label: 'Propose',
        description: 'Crea una propuesta de cambio con intención, scope y enfoque.',
        whenToUse: 'El punto de entrada para cualquier cambio sustancial. Define qué quieres hacer y por qué.',
      },
      {
        id: 'spec',
        label: 'Spec',
        description: 'Escribe especificaciones con requisitos y escenarios.',
        whenToUse: 'Después de aprobar Propose. Define cómo se ve el éxito antes de escribir una línea de código.',
      },
      {
        id: 'design',
        label: 'Design',
        description: 'Diseño técnico con decisiones de arquitectura.',
        whenToUse: 'Después de Spec. Produce el plano: contratos de componentes, flujos de datos y riesgos clave.',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        description: 'Divide un cambio en tareas de implementación.',
        whenToUse: 'Después de Design. Crea un checklist ordenado con dependencias claras.',
      },
      {
        id: 'apply',
        label: 'Apply',
        description: 'Implementa tareas siguiendo Spec y Design.',
        whenToUse: 'La fase de ejecución. Trabaja en lotes, soporta implementación multi-sesión sin perder estado.',
      },
      {
        id: 'verify',
        label: 'Verify',
        description: 'Valida que la implementación coincida con Spec.',
        whenToUse: 'Después de Apply. Reporta hallazgos CRITICAL, WARNING y SUGGESTION antes de llegar a producción.',
      },
      {
        id: 'archive',
        label: 'Archive',
        description: 'Sincroniza delta specs con main specs y archiva.',
        whenToUse: 'Después de Verify. Persiste el estado final en Engram y cierra el cambio.',
      },
    ],
    extraSkillsHeadline: 'Skills Independientes',
    extraSkillsIntro: 'Más allá de SDD, Gentle AI incluye skills independientes que se activan por contexto — sin configuración manual.',
    extraSkills: [
      {
        id: 'judgment-day',
        label: 'Judgment Day',
        description: 'Revisión adversarial paralela — dos jueces ciegos independientes revisan el mismo objetivo simultáneamente.',
      },
      {
        id: 'skill-registry',
        label: 'Skill Registry',
        description: 'Escanea las skills instaladas, construye el registro y expone reglas compactas para delegación a sub-agentes.',
      },
      {
        id: 'skill-creator',
        label: 'Skill Creator',
        description: 'Crea nuevas skills de agente siguiendo la spec de Agent Skills — templates SKILL.md, triggers y reglas compactas.',
      },
      {
        id: 'branch-pr',
        label: 'Branch PR',
        description: 'Workflow de creación de PRs con enforcement issue-first, resúmenes estructurados y planes de test.',
      },
      {
        id: 'issue-creation',
        label: 'Issue Creation',
        description: 'Templates de issues en GitHub para bugs, features y mejoras. Aplica la convención issue-first.',
      },
      {
        id: 'go-testing',
        label: 'Go Testing',
        description: 'Patrones de testing en Go incluyendo testing de TUIs con Bubbletea, tests tabla-driven y convenciones de coverage.',
      },
      {
        id: 'sdd-onboard',
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
    headline: 'Combina componentes a tu medida.',
    intro:
      'Gentle AI es modular. Cada componente agrega capacidades específicas. Usa presets para empezar o elige componentes individuales para una configuración personalizada.',
  },

  presets: {
    headline: 'Presets para cada workflow.',
    intro:
      'Empieza con un preset y personalízalo desde ahí. Cada preset es un conjunto curado de componentes optimizado para un caso de uso específico.',
    recommended: 'Recomendado',
    popular: 'Popular',
  },

  demo: {
    headline: 'Míralo en acción.',
    intro:
      'Así se ve Gentle AI. Un TUI real que te guía por la configuración de agentes, selección de persona, presets del ecosistema y configuración de modelos — todo desde tu terminal.',
  },

  install: {
    headline: 'Instala en segundos.',
    anyPlatform: 'Cualquier plataforma (Go 1.24+)',
    nextSteps: 'Próximos pasos',
    postInstall: [
      'Ejecuta `gentle-ai --version` para verificar la instalación',
      'Ejecuta `gentle-ai --preset full-gentleman` para aplicar el preset completo',
      'Abre tu agente de IA y empieza a enviar código',
    ],
  },

  community: {
    headline: 'Construido con la comunidad.',
    intro:
      'Gentle AI es open source y está impulsado por la comunidad. Únete a miles de desarrolladores que envían código más rápido con IA.',
    discord: 'Únete a nuestro Discord',
    contributorsLabel: 'Contribuidores',
    labels: {
      stars: 'GitHub Stars',
      forks: 'Forks',
      contributors: 'Contribuidores',
      version: 'Última Versión',
    },
  },

  ecosystem: {
    headline: 'El Ecosistema.',
    intro:
      'Agentes compatibles, componentes configurables y todo conectado. Esto es lo que se instala cuando ejecutas un solo comando.',
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

  engram: {
    headline: 'Memoria que nunca se pierde.',
    intro:
      'Engram le da a tus agentes memoria persistente entre sesiones, compactaciones y dispositivos. Decisiones, convenciones y bugs resueltos: lo guardas una vez y lo recuerdas siempre.',
    features: {
      crossSession: {
        label: 'Entre sesiones',
        description: 'Decisiones, bugs y convenciones persisten para siempre',
      },
      crossTool: {
        label: 'Entre herramientas',
        description: 'Funciona con Claude Code, OpenCode, Gemini CLI, Cursor y cualquier herramienta MCP-compatible',
      },
      crossMachine: {
        label: 'Entre máquinas',
        description: 'Sincronización vía Git para compartir la memoria entre todos tus dispositivos',
      },
    },
    cta: 'Engram tiene su propia historia →',
  },

  buildAgent: {
    headline: 'Crea tu propio Agente.',
    intro:
      'Gentle AI no es solo un instalador de presets — es una plataforma extensible. Escribes un archivo Markdown y tu agente personalizado se instala en todas tus herramientas de IA automáticamente.',
    format: {
      title: 'Formato del Agente',
      description: '# Mi Agente Personalizado',
      trigger: '## Trigger',
      instructions: '## Instructions',
    },
    features: [
      {
        id: 'file-tools',
        title: 'Un archivo, todas las herramientas',
        description:
          'Escribes una vez y se instala automáticamente en Claude Code, OpenCode, Gemini CLI, Cursor, VS Code Copilot, Codex, Antigravity y Windsurf.',
      },
      {
        id: 'sdd-integration',
        title: 'Integración con SDD',
        description:
          'Los agentes personalizados pueden mejorar fases SDD existentes, agregar nuevas fases al DAG, o correr de forma completamente independiente.',
      },
      {
        id: 'registry',
        title: 'Registry sin colisiones',
        description:
          'El registry integrado evita conflictos de nombres con las skills built-in. Rollback automático ante cualquier falla.',
      },
    ],
    sddModes: {
      headline: 'Modos de integración',
      modes: [
        { badge: 'SDDPhaseSupport', description: 'Mejora una fase existente' },
        { badge: 'SDDNewPhase', description: 'Agrega una nueva fase al pipeline' },
        { badge: 'SDDStandalone', description: 'Skill completamente independiente' },
      ],
    },
  },

  modelIntelligence: {
    headline: 'Claude Model Assignments.',
    intro:
      'Elige cómo se asignan los modelos de Claude a cada fase SDD. Opus para arquitectura. Sonnet para código. Haiku para limpieza. Gentle AI enruta cada tarea al modelo que mejor la maneja.',
    presets: {
      balanced: {
        name: 'Balanceado',
        description: 'Defaults inteligentes. Opus donde importa, Sonnet para el resto, Haiku para archivar.',
      },
      performance: {
        name: 'Performance',
        description: 'Máxima calidad. Opus para arquitectura, planificación y verificación.',
      },
      economy: {
        name: 'Económico',
        description: 'Optimizado por costo. Sonnet para todas las fases, Haiku para archivar.',
      },
      custom: {
        name: 'Personalizado',
        description: 'Control total. Asignas cualquier modelo a cualquier fase por tu cuenta.',
      },
    },
    phaseLabel: 'Asignación de fases',
    profiles: {
      headline: 'Perfiles SDD de OpenCode',
      intro:
        'Configuraciones con nombre que guardan tus asignaciones de modelos y el modo de orquestación. Cambias entre setups sin reconfigurar nada.',
      single: {
        name: 'Modo single',
        description: 'Un agente maneja todo: más simple, menos tokens, ideal para tareas enfocadas.',
      },
      multi: {
        name: 'Modo multi',
        description: 'Sub-agente dedicado por fase SDD — más capaz, ejecución en paralelo, arquitectura Agent Teams Lite.',
      },
    },
  },

  finalCta: {
    headline: 'Deja de configurar.\nEmpieza a enviar.',
    subheadline:
      'Una instalación. Todos los agentes configurados. Memoria persistente. Workflows estructurados. Todo lo que necesitas para enviar más rápido con IA.',
    ctaInstall: 'Instala Gentle AI',
    ctaGithub: 'Deja una estrella en GitHub',
  },

  footer: {
    copyright: '© 2026 Gentleman Programming. Licencia MIT.',
    links: {
      docs: {
        label: 'Secciones',
        items: [
          { label: 'Cómo Funciona', url: '#how-it-works' },
          { label: 'Ecosistema', url: '#ecosystem' },
          { label: 'Instalación', url: '#install' },
          { label: 'Demo', url: '#demo' },
          { label: 'Comunidad', url: '#community' },
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
} as const;
