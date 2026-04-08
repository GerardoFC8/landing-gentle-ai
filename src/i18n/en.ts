export const en = {
  meta: {
    title: 'Gentle AI — AI Coding Agents for the Gentleman Programming Ecosystem',
    description:
      'Gentle AI ships production-ready AI coding agents, Skills, SDD pipelines, and Engram memory — so you spend less time configuring and more time shipping.',
  },

  nav: {
    problem: 'Problem',
    solution: 'Solution',
    howItWorks: 'How It Works',
    ecosystem: 'Ecosystem',
    demo: 'Demo',
    install: 'Install',
    community: 'Community',
    buildAgent: 'Build Agent',
    modelIntelligence: 'Model Config',
    toggleTheme: 'Toggle theme',
    switchLang: 'Español',
  },

  hero: {
    badge: 'Open Source · MIT License',
    headline: 'One command.\nAny agent.\nAny OS.',
    subheadline:
      'The Gentleman AI ecosystem configured and ready.',
    ctaInstall: 'Install Now',
    ctaGithub: 'View on GitHub',
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
    headline: 'Every project starts the same way.',
    intro:
      'You open a new repo, you open your AI agent, and you spend the next hour configuring the same things you configured last week.',
    points: [
      {
        title: 'You paste the same prompts over and over',
        description:
          'Memory doesn\'t persist. Every session starts blind. You re-explain your conventions, your stack, your preferences — every. single. time.',
      },
      {
        title: 'Every agent behaves differently',
        description:
          'Claude, Gemini, Cursor, Copilot — they each need different configuration. Maintaining consistency across tools is a full-time job.',
      },
      {
        title: 'No structure for complex changes',
        description:
          'AI agents hallucinate when the scope is large. Without a proper workflow — spec, design, tasks, apply — they drift and produce garbage.',
      },
    ],
  },

  solution: {
    headline: 'One config. All agents. Production-ready.',
    intro:
      'Gentle AI is the missing layer between your codebase and your AI agents. Configure once, share everywhere.',
    pillars: [
      {
        title: 'Engram — Persistent Memory',
        description:
          'Decisions, conventions, bug fixes, and discoveries persist across sessions and compaction. Your agents remember everything.',
      },
      {
        title: 'SDD — Structured Delivery',
        description:
          'Spec-Driven Development breaks large changes into proposal → spec → design → tasks → apply → verify. No more hallucinations on complex tasks.',
      },
      {
        title: 'Skills — Reusable Expertise',
        description:
          'Packaged agent instructions for testing, PR creation, review, and more. One install, every agent benefits.',
      },
    ],
  },

  howItWorks: {
    headline: 'From install to shipping in minutes.',
    steps: [
      {
        number: '01',
        title: 'Install Gentle AI',
        description:
          'One command via Homebrew, curl, Scoop, or Go. Gentle AI is available on macOS, Linux, and Windows.',
      },
      {
        number: '02',
        title: 'Pick a preset',
        description:
          'Choose full-gentleman for everything, ecosystem-only for the core stack, or minimal for just the essentials. Or mix and match components.',
      },
      {
        number: '03',
        title: 'Open your AI agent',
        description:
          'Claude Code, Gemini CLI, Cursor — your agent now has Engram memory, SDD pipelines, Skills, and your conventions pre-loaded.',
      },
      {
        number: '04',
        title: 'Ship faster',
        description:
          'No more repeating context. No more hallucinations on large tasks. Just clean, structured, AI-powered development.',
      },
    ],
  },

  beforeAfter: {
    headline: 'Before Gentle AI vs. After',
    beforeLabel: 'Before',
    afterLabel: 'After',
    description:
      'See the difference Gentle AI makes in your daily AI development workflow.',
  },

  sddPipeline: {
    headline: 'The SDD Pipeline',
    intro:
      'Spec-Driven Development is the structured planning layer for substantial changes. Each phase has a clear input, output, and responsibility.',
    phases: [
      {
        id: 'init',
        label: 'Init',
        description: 'Bootstrap SDD context in a project.',
        whenToUse: 'First time SDD is used in a project. Detects stack, conventions, and testing capabilities. Run once per repo.',
      },
      {
        id: 'explore',
        label: 'Explore',
        description: 'Investigate codebase before committing to a change.',
        whenToUse: 'When you need to understand the problem space, compare approaches, or surface tradeoffs — without creating artifacts.',
      },
      {
        id: 'propose',
        label: 'Propose',
        description: 'Create change proposal with intent, scope, approach.',
        whenToUse: 'The entry point for any substantial change. Defines what you want to do and why.',
      },
      {
        id: 'spec',
        label: 'Spec',
        description: 'Write specifications with requirements and scenarios.',
        whenToUse: 'After proposal is approved. Defines what success looks like before any code is written.',
      },
      {
        id: 'design',
        label: 'Design',
        description: 'Technical design with architecture decisions.',
        whenToUse: 'After spec. Produces the blueprint: component contracts, data flows, and key risks.',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        description: 'Break down a change into implementation tasks.',
        whenToUse: 'After design. Creates an ordered checklist with clear dependencies.',
      },
      {
        id: 'apply',
        label: 'Apply',
        description: 'Implement tasks following specs and design.',
        whenToUse: 'The execution phase. Works in batches, supports multi-session implementation without losing state.',
      },
      {
        id: 'verify',
        label: 'Verify',
        description: 'Validate implementation matches specs.',
        whenToUse: 'After apply. Reports CRITICAL, WARNING, and SUGGESTION findings before changes reach production.',
      },
      {
        id: 'archive',
        label: 'Archive',
        description: 'Sync delta specs to main specs and archive.',
        whenToUse: 'After verify passes. Persists final state to Engram and closes the change.',
      },
    ],
    extraSkillsHeadline: 'Standalone Skills',
    extraSkillsIntro: 'Beyond SDD, Gentle AI ships standalone skills that activate by context — no manual setup needed.',
    extraSkills: [
      {
        id: 'judgment-day',
        label: 'Judgment Day',
        description: 'Parallel adversarial review — two independent blind judges review the same target simultaneously.',
      },
      {
        id: 'skill-registry',
        label: 'Skill Registry',
        description: 'Scans installed skills, builds the registry, and exposes compact rules for sub-agent delegation.',
      },
      {
        id: 'skill-creator',
        label: 'Skill Creator',
        description: 'Creates new agent skills following the Agent Skills spec — SKILL.md templates, triggers, and compact rules.',
      },
      {
        id: 'branch-pr',
        label: 'Branch PR',
        description: 'PR creation workflow with issue-first enforcement, structured summaries, and test plans.',
      },
      {
        id: 'issue-creation',
        label: 'Issue Creation',
        description: 'GitHub issue templates for bugs, features, and improvements. Enforces issue-first convention.',
      },
      {
        id: 'go-testing',
        label: 'Go Testing',
        description: 'Go testing patterns including Bubbletea TUI testing, table-driven tests, and coverage conventions.',
      },
      {
        id: 'sdd-onboard',
        label: 'SDD Onboard',
        description: 'Guided end-to-end walkthrough of the SDD workflow using your real codebase.',
      },
    ],
  },

  agents: {
    headline: 'Works with your agent.',
    intro:
      'Gentle AI supports every major AI coding agent. Full delegation means the agent can run the entire SDD pipeline autonomously.',
    badges: {
      full: 'Full Delegation',
      solo: 'Solo Agent',
    },
  },

  components: {
    headline: 'Mix and match components.',
    intro:
      'Gentle AI is modular. Each component adds specific capabilities. Use presets to get started or pick individual components for a custom setup.',
  },

  presets: {
    headline: 'Presets for every workflow.',
    intro:
      'Start with a preset and customize from there. Each preset is a curated set of components tuned for a specific use case.',
    recommended: 'Recommended',
    popular: 'Popular',
  },

  demo: {
    headline: 'See it in action.',
    intro:
      'This is what Gentle AI looks like. A real TUI that guides you through agent setup, persona selection, ecosystem presets, and model configuration — all from your terminal.',
  },

  install: {
    headline: 'Install in seconds.',
    anyPlatform: 'Any platform (Go 1.24+)',
    nextSteps: 'Next steps',
    postInstall: [
      'Run `gentle-ai --version` to verify the installation',
      'Run `gentle-ai --preset full-gentleman` to apply the full preset',
      'Open your AI agent and start shipping',
    ],
  },

  community: {
    headline: 'Built with the community.',
    intro:
      'Gentle AI is open source and community-driven. Join thousands of developers shipping faster with AI.',
    discord: 'Join our Discord',
    contributorsLabel: 'Contributors',
    labels: {
      stars: 'GitHub Stars',
      forks: 'Forks',
      contributors: 'Contributors',
      version: 'Latest Version',
    },
  },

  ecosystem: {
    headline: 'The Ecosystem.',
    intro:
      'Compatible agents, configurable components, and everything wired together. This is what ships when you run one command.',
    projects: [
      {
        name: 'Gentleman.Dots',
        description: 'Full terminal setup: Neovim, Tmux, Zellij, and a curated dotfiles collection.',
        url: 'https://github.com/Gentleman-Programming/Gentleman.Dots',
      },
      {
        name: 'GGA — Gentleman GitHub Agent',
        description: 'AI-powered GitHub workflows: issue creation, PR reviews, and branch management.',
        url: 'https://github.com/Gentleman-Programming/GGA',
      },
      {
        name: 'Gentleman Academy',
        description: 'Courses on architecture, Clean Code, DDD, and modern frontend development.',
        url: 'https://gentleman-programming.com',
      },
      {
        name: 'Gentleman.YouTube',
        description: 'Weekly videos on software architecture, AI tooling, and developer productivity.',
        url: 'https://www.youtube.com/@GentlemanProgramming',
      },
    ],
  },

  engram: {
    headline: 'Memory that never forgets.',
    intro:
      'Engram gives your agents persistent memory across sessions, compactions, and machines. Decisions, conventions, and bug fixes — stored once, recalled forever.',
    features: {
      crossSession: {
        label: 'Cross-session',
        description: 'Decisions, bugs, conventions survive forever',
      },
      crossTool: {
        label: 'Cross-tool',
        description: 'Works with Claude Code, OpenCode, Gemini CLI, Cursor, and any MCP-compatible tool',
      },
      crossMachine: {
        label: 'Cross-machine',
        description: 'Git sync enables memory sharing across all your devices',
      },
    },
    cta: 'Engram has its own story →',
  },

  buildAgent: {
    headline: 'Create your own Agent.',
    intro:
      'Gentle AI is not just a preset installer — it\'s an extensible platform. Write one Markdown file and your custom agent is installed across all your AI tools automatically.',
    format: {
      title: 'Agent Format',
      description: '# My Custom Agent',
      trigger: '## Trigger',
      instructions: '## Instructions',
    },
    features: [
      {
        id: 'file-tools',
        title: 'One file, all tools',
        description:
          'Write once, auto-installed in Claude Code, OpenCode, Gemini CLI, Cursor, VS Code Copilot, Codex, Antigravity, and Windsurf.',
      },
      {
        id: 'sdd-integration',
        title: 'SDD integration',
        description:
          'Custom agents can enhance existing SDD phases, add new phases to the DAG, or run completely standalone.',
      },
      {
        id: 'registry',
        title: 'Collision-safe registry',
        description:
          'Built-in registry prevents naming conflicts with built-in skills. Automatic rollback on failure keeps you safe.',
      },
    ],
    sddModes: {
      headline: 'Integration modes',
      modes: [
        { badge: 'SDDPhaseSupport', description: 'Enhances an existing phase' },
        { badge: 'SDDNewPhase', description: 'Adds a new phase to the pipeline' },
        { badge: 'SDDStandalone', description: 'Pure standalone skill' },
      ],
    },
  },

  modelIntelligence: {
    headline: 'Claude Model Assignments.',
    intro:
      'Choose how Claude models are assigned to each SDD phase. Opus for architecture. Sonnet for code. Haiku for cleanup. Gentle AI routes each task to the model that handles it best.',
    presets: {
      balanced: {
        name: 'Balanced',
        description: 'Smart defaults. Opus where it counts, Sonnet for the rest, Haiku for archiving.',
      },
      performance: {
        name: 'Performance',
        description: 'Maximum quality. Opus for architecture, planning, and verification.',
      },
      economy: {
        name: 'Economy',
        description: 'Cost-optimised. Sonnet for all phases, Haiku for archiving.',
      },
      custom: {
        name: 'Custom',
        description: 'Full control. Assign any model to any phase yourself.',
      },
    },
    phaseLabel: 'Phase assignments',
    profiles: {
      headline: 'OpenCode SDD Profiles',
      intro:
        'Named configurations that save your model assignments and orchestration mode. Switch between setups without reconfiguring anything.',
      single: {
        name: 'Single mode',
        description: 'One agent handles everything — simpler, fewer tokens, great for focused tasks.',
      },
      multi: {
        name: 'Multi mode',
        description: 'Dedicated sub-agent per SDD phase — more capable, parallel execution, Agent Teams Lite architecture.',
      },
    },
  },

  finalCta: {
    headline: 'Stop configuring.\nStart shipping.',
    subheadline:
      'One command. Any agent. Any OS. The Gentleman AI ecosystem configured and ready.',
    ctaInstall: 'Install Gentle AI',
    ctaGithub: 'Star on GitHub',
  },

  footer: {
    copyright: '© 2026 Gentleman Programming. MIT License.',
    links: {
      docs: {
        label: 'Sections',
        items: [
          { label: 'How It Works', url: '#how-it-works' },
          { label: 'Ecosystem', url: '#ecosystem' },
          { label: 'Install', url: '#install' },
          { label: 'Demo', url: '#demo' },
          { label: 'Community', url: '#community' },
        ],
      },
      community: {
        label: 'Community',
        items: [
          { label: 'GitHub', url: 'https://github.com/Gentleman-Programming/gentle-ai' },
          { label: 'Discord', url: 'https://discord.com/invite/3QVhF5vRsR' },
          { label: 'YouTube', url: 'https://www.youtube.com/@GentlemanProgramming' },
          { label: 'Twitter / X', url: 'https://x.com/G_Programming' },
        ],
      },
      ecosystem: {
        label: 'Ecosystem',
        items: [
          { label: 'Gentleman.Dots', url: 'https://github.com/Gentleman-Programming/Gentleman.Dots' },
        ],
      },
    },
  },
} as const;
