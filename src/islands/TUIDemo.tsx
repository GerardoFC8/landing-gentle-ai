// xterm CSS is imported dynamically inside init() — not at top level
import { useRef, useEffect, useState, useCallback } from 'react'
import { useReducedMotion } from 'motion/react'

/* ──────────────────────────────────────────────
   Rose Pine palette — exact from gentle-ai TUI
   ────────────────────────────────────────────── */
const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  title: '\x1b[38;2;196;167;231m',       // #c4a7e7 lavender
  heading: '\x1b[38;2;235;188;186m',      // #ebbcba mauve
  text: '\x1b[38;2;224;222;244m',         // #e0def4
  subtext: '\x1b[38;2;144;140;170m',      // #908caa
  success: '\x1b[38;2;156;207;216m',      // #9ccfd8
  error: '\x1b[38;2;235;111;146m',        // #eb6f92
  warning: '\x1b[38;2;241;202;147m',      // #f6c177
  logoMauve: '\x1b[38;2;235;188;186m',
  logoLavender: '\x1b[38;2;196;167;231m',
  logoBlue: '\x1b[38;2;49;116;143m',
  logoTeal: '\x1b[38;2;156;207;216m',
}

const b = (color: string, text: string) => `${C.bold}${color}${text}${C.reset}`
const s = (color: string, text: string) => `${color}${text}${C.reset}`

/* ──────────────────────────────────────────────
   Braille logo — exact from styles/logo.go
   ────────────────────────────────────────────── */
const LOGO_LINES = [
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣾⣿⡽⠟⠛⠻⣶⣄⠀⢀⣐⣒⣒⣶⣴⣾⡿⢷⣶⣽⡢⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⣿⣿⢿⠋⠀⠀⠀⠀⠀⠉⠛⠓⠒⠛⠚⠛⠉⣿⠀⠀⣧⡏⠻⣷⣽⡦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣻⡾⠋⣇⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠉⠀⠀⢸⠙⠻⣿⣷⣶⣄⡀⠀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⠋⠈⠀⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⠀⠀⠉⠀⠀⠈⡿⣷⣽⣇⠀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⢀⣞⡿⠟⣟⠀⠀⠀⠀⠀⠀⠀⠀⠸⡆⠀⠀⠀⣆⠀⠀⡀⢸⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠈⠻⣯⡳⣄⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⢀⣽⠟⠁⠀⠘⠃⠀⠀⠀⠀⢰⡀⠀⠀⢹⡀⠀⠀⢸⡄⢀⣇⡾⣠⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣾⣅⠀⠀⠀⠀',
  '⣀⣀⣠⡴⠿⣅⠐⢦⡀⠀⠀⠀⠲⣄⠀⠀⣙⣦⣶⣾⣻⣶⣶⠾⠿⠾⢿⣿⣿⣻⢷⣢⢤⣀⠀⠀⠀⠀⠀⠀⠀⡀⠀⣴⠛⣿⣷⣄⡀⠀',
  '⠹⠿⢿⣷⣦⣼⣷⣤⣻⣶⣤⣀⣀⣬⣷⡯⠷⠾⢿⣿⣭⣄⣀⣀⣀⣀⣀⣤⣭⡿⠿⢾⣿⣿⣿⣦⣤⣤⣤⣶⢾⡷⣿⣷⣾⣷⣿⡿⠿⠟',
  '⠀⠀⠘⣿⡝⣿⡿⢻⣿⡿⢩⡞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠰⡄⠀⠀⠀⠀⠘⢦⠹⣮⢷⠹⣷⣿⠀⠀⠀',
  '⠀⠀⠀⠙⣷⣿⠁⡞⣾⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⡇⠀⠀⠀⠀⠀⢸⡆⢸⢸⣦⡟⠁⠀⠀⠀',
  '⠀⠀⠀⠀⠈⢻⣄⡏⣿⠀⡇⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⠀⠀⠀⢐⣧⠀⠀⠀⠀⠀⠀⠀⠈⠁⠀⠀⠀⠀⠀⣼⡇⠘⣼⠏⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠙⠻⣧⣧⢣⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠸⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⢹⣠⡾⠃⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⢿⣧⡘⣆⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠀⠀⣴⣷⣿⡋⠀⠀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⠷⣤⣀⣹⣄⠀⠀⠀⠀⠀⠀⡇⠀⠀⢀⠀⡆⠀⠀⣀⣴⣧⣴⣟⠯⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠽⠿⠿⠷⠶⢤⣤⣴⣿⣦⣶⣾⣿⣷⣾⣻⣿⠝⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
  '⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠉⠛⠛⠛⠛⠛⠊⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀',
]

const LOGO_COLORS = [
  C.logoMauve, C.logoMauve, C.logoMauve, C.logoMauve,
  C.logoLavender, C.logoLavender, C.logoLavender,
  C.logoBlue, C.logoBlue, C.logoBlue,
  C.logoTeal, C.logoTeal, C.logoTeal, C.logoTeal,
  C.logoTeal, C.logoTeal, C.logoTeal,
]

/* ──────────────────────────────────────────────
   Screen builders — each returns string[]
   ────────────────────────────────────────────── */

function welcomeScreen(): string[] {
  const lines: string[] = []
  // Logo with gradient
  LOGO_LINES.forEach((line, i) => {
    lines.push(s(LOGO_COLORS[i] ?? C.logoTeal, line))
  })
  lines.push('')
  lines.push(s(C.subtext, 'AI Gentle Stack 1.18.3 \u2014 One command. Any agent. Any OS.'))
  lines.push('')
  lines.push(b(C.heading, 'Menu'))
  lines.push(`  ${b(C.title, '\u25b8 ')}${b(C.title, 'Start installation')}`)
  lines.push(`    ${s(C.text, 'Upgrade tools (up to date)')}`)
  lines.push(`    ${s(C.text, 'Sync configs')}`)
  lines.push(`    ${s(C.text, 'Upgrade + Sync')}`)
  lines.push(`    ${s(C.text, 'Configure models')}`)
  lines.push(`    ${s(C.text, 'Create your own Agent')}`)
  lines.push(`    ${s(C.text, 'OpenCode SDD Profiles')}`)
  lines.push(`    ${s(C.text, 'Manage backups')}`)
  lines.push(`    ${s(C.text, 'Quit')}`)
  lines.push('')
  lines.push(s(C.subtext, 'j/k: navigate \u2022 enter: select \u2022 q: quit'))
  return lines
}

function detectionScreen(): string[] {
  return [
    b(C.title, 'System Detection'),
    '',
    `  ${b(C.heading, 'OS')}    ${s(C.text, 'linux (amd64)')}`,
    `  ${b(C.heading, 'Shell')}  ${s(C.text, 'zsh')}`,
    `  ${b(C.heading, 'Supported')} ${s(C.success, 'Yes')}`,
    '',
    b(C.heading, 'Tools'),
    `    brew: ${s(C.success, 'found')}`,
    `    curl: ${s(C.success, 'found')}`,
    `    git:  ${s(C.success, 'found')}`,
    `    node: ${s(C.success, 'found')}`,
    '',
    b(C.heading, 'Dependencies'),
    `    git:  ${s(C.success, '2.51.0')}`,
    `    curl: ${s(C.success, '8.14.1')}`,
    `    node: ${s(C.success, '24.14.0')}`,
    `    npm:  ${s(C.success, '11.9.0')}`,
    `    go:   ${s(C.success, '1.24.4')} ${s(C.subtext, '(optional)')}`,
    '',
    b(C.heading, 'Detected Configs'),
    `    claude-code:    ${s(C.success, 'present')}`,
    `    opencode:       ${s(C.success, 'present')}`,
    `    gemini-cli:     ${s(C.error, 'missing')}`,
    `    cursor:         ${s(C.error, 'missing')}`,
    `    vscode-copilot: ${s(C.success, 'present')}`,
    `    codex:          ${s(C.error, 'missing')}`,
    `    antigravity:    ${s(C.error, 'missing')}`,
    `    windsurf:       ${s(C.error, 'missing')}`,
    '',
    `  ${b(C.title, '\u25b8 ')}${b(C.title, 'Continue')}`,
    `    ${s(C.text, 'Back')}`,
    '',
    s(C.subtext, 'j/k: navigate \u2022 enter: select \u2022 esc: back'),
  ]
}

function agentsScreen(): string[] {
  return [
    b(C.title, 'Select AI Agents'),
    '',
    s(C.subtext, 'Use j/k to move, space to toggle, enter to continue.'),
    '',
    `    ${s(C.success, '[x]')} ${b(C.title, 'claude-code')}`,
    `    ${s(C.success, '[x]')} ${s(C.text, 'opencode')}`,
    `    ${s(C.text, '[ ]')} ${s(C.text, 'gemini-cli')}`,
    `    ${s(C.text, '[ ]')} ${s(C.text, 'codex')}`,
    `    ${s(C.text, '[ ]')} ${s(C.text, 'cursor')}`,
    `    ${s(C.success, '[x]')} ${s(C.text, 'vscode-copilot')}`,
    `    ${s(C.text, '[ ]')} ${s(C.text, 'antigravity')}`,
    `    ${s(C.text, '[ ]')} ${s(C.text, 'windsurf')}`,
    '',
    `  ${b(C.title, '\u25b8 ')}${b(C.title, 'Continue')}`,
    `    ${s(C.text, 'Back')}`,
    '',
    s(C.subtext, 'space: toggle \u2022 enter: confirm \u2022 esc: back'),
  ]
}

function personaScreen(): string[] {
  return [
    b(C.title, 'Choose your Persona'),
    '',
    s(C.subtext, 'Your own Gentleman! teaches before it solves.'),
    '',
    `  ${b(C.title, '\u25b8 ')}${b(C.title, '(*)')} ${b(C.title, 'gentleman')}`,
    `    ${s(C.text, '( )')} ${s(C.text, 'neutral')}`,
    `    ${s(C.text, '( )')} ${s(C.text, 'custom')}`,
    '',
    `    ${s(C.text, 'Back')}`,
    '',
    s(C.subtext, 'j/k: navigate \u2022 enter: select \u2022 esc: back'),
  ]
}

function presetScreen(): string[] {
  return [
    b(C.title, 'Select Ecosystem Preset'),
    '',
    `  ${b(C.title, '\u25b8 ')}${b(C.title, '(*)')} ${b(C.title, 'full-gentleman')}`,
    `      ${s(C.subtext, 'Everything: memory, SDD, skills, docs, persona & security')}`,
    '',
    `    ${s(C.text, '( )')} ${s(C.text, 'ecosystem-only')}`,
    `      ${s(C.subtext, 'Core tools only: memory, SDD, skills & docs (no persona/security)')}`,
    '',
    `    ${s(C.text, '( )')} ${s(C.text, 'minimal')}`,
    `      ${s(C.subtext, 'Just Engram persistent memory')}`,
    '',
    `    ${s(C.text, '( )')} ${s(C.text, 'custom')}`,
    `      ${s(C.subtext, 'Pick individual components yourself')}`,
    '',
    `    ${s(C.text, 'Back')}`,
    '',
    s(C.subtext, 'j/k: navigate \u2022 enter: select \u2022 esc: back'),
  ]
}

function modelScreen(): string[] {
  return [
    b(C.title, 'Claude Model Assignments'),
    '',
    s(C.subtext, 'Choose how Claude models are assigned to each SDD phase:'),
    '',
    `  ${b(C.title, '\u25b8 ')}${b(C.title, '(*)')} ${b(C.title, 'balanced')}`,
    `      ${s(C.subtext, 'Smart defaults: opus for architecture, sonnet for most phases, haiku for archiving')}`,
    '',
    `    ${s(C.text, '( )')} ${s(C.text, 'performance')}`,
    `      ${s(C.subtext, 'Maximum quality: opus for architecture, planning & verification phases')}`,
    '',
    `    ${s(C.text, '( )')} ${s(C.text, 'economy')}`,
    `      ${s(C.subtext, 'Cost-optimised: sonnet for all phases, haiku for archiving')}`,
    '',
    `    ${s(C.text, '( )')} ${s(C.text, 'custom')}`,
    `      ${s(C.subtext, 'Pick the model alias for each SDD phase individually')}`,
    '',
    `    ${s(C.text, '\u2190 Back')}`,
    '',
    s(C.subtext, 'j/k: navigate \u2022 enter: select \u2022 esc: back'),
  ]
}

function sddModeScreen(): string[] {
  return [
    b(C.title, 'Select SDD Mode'),
    '',
    s(C.subtext, 'How should the SDD orchestrator be configured for OpenCode?'),
    '',
    `    ${s(C.text, '( )')} ${s(C.text, 'single')}`,
    `      ${s(C.subtext, 'Single orchestrator \u2014 one agent handles all SDD phases')}`,
    '',
    `  ${b(C.title, '\u25b8 ')}${b(C.title, '( )')} ${b(C.title, 'multi')}`,
    `      ${s(C.subtext, 'Multi-agent \u2014 dedicated sub-agent per SDD phase (9 hidden agents)')}`,
    '',
    `    ${s(C.text, 'Back')}`,
    '',
    s(C.subtext, 'j/k: navigate \u2022 enter: select \u2022 esc: back'),
  ]
}

function assignModelsScreen(): string[] {
  const model = 'GitHub Copilot / Claude Sonnet 4.6'
  return [
    b(C.title, 'Assign Models to SDD Phases'),
    '',
    s(C.subtext, 'Current assignments:'),
    '',
    `  ${b(C.title, '\u25b8 ')}${b(C.title, 'sdd-orchestrator')} ${s(C.subtext, '(coordinator)')} ${s(C.text, 'GitHub Copilot / Claude Opus 4.6')}`,
    `    Set all phases         ${s(C.subtext, '(GitHub Copilot / Claude Sonnet 4.6)')}`,
    `    sdd-init               ${s(C.text, model)}`,
    `    sdd-explore            ${s(C.text, model)}`,
    `    sdd-propose            ${s(C.text, model)}`,
    `    sdd-spec               ${s(C.text, model)}`,
    `    sdd-design             ${s(C.text, model)}`,
    `    sdd-tasks              ${s(C.text, model)}`,
    `    sdd-apply              ${s(C.text, model)}`,
    `    sdd-verify             ${s(C.text, model)}`,
    `    sdd-archive            ${s(C.text, model)}`,
    '',
    `  ${b(C.title, 'Continue')}`,
    `    ${s(C.text, '\u2190 Back')}`,
    '',
    s(C.subtext, 'j/k: navigate \u2022 enter: change model / confirm \u2022 esc: back'),
  ]
}

/* ──────────────────────────────────────────────
   Screens & timing
   ────────────────────────────────────────────── */
const SCREENS = [
  { build: welcomeScreen, dwell: 4000 },
  { build: detectionScreen, dwell: 3500 },
  { build: agentsScreen, dwell: 3000 },
  { build: personaScreen, dwell: 2500 },
  { build: presetScreen, dwell: 3000 },
  { build: modelScreen, dwell: 3000 },
  { build: sddModeScreen, dwell: 2500 },
  { build: assignModelsScreen, dwell: 3500 },
]

const LINE_DRAW_MS = 12      // delay between drawing each line
const TRANSITION_PAUSE = 300  // pause after clearing before new screen

/* ──────────────────────────────────────────────
   XTERM theme — Rose Pine base
   ────────────────────────────────────────────── */
const ROSE_PINE_THEME = {
  background: '#191724',
  foreground: '#e0def4',
  cursor: '#c4a7e7',
  cursorAccent: '#191724',
  selectionBackground: '#c4a7e733',
  black: '#191724',
  red: '#eb6f92',
  green: '#9ccfd8',
  yellow: '#f6c177',
  blue: '#31748f',
  magenta: '#c4a7e7',
  cyan: '#9ccfd8',
  white: '#e0def4',
  brightBlack: '#6e6a86',
  brightRed: '#eb6f92',
  brightGreen: '#9ccfd8',
  brightYellow: '#f6c177',
  brightBlue: '#31748f',
  brightMagenta: '#c4a7e7',
  brightCyan: '#9ccfd8',
  brightWhite: '#e0def4',
}

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
interface TUIDemoProps {
  locale: 'en' | 'es'
}

export default function TUIDemo({ locale }: TUIDemoProps) {
  const prefersReducedMotion = useReducedMotion()
  const containerRef = useRef<HTMLDivElement>(null)
  const termRef = useRef<import('@xterm/xterm').Terminal | null>(null)
  const isDisposedRef = useRef(false)
  const isReadyRef = useRef(false)
  const drawingRef = useRef(false)

  // Playback state
  const [currentScreen, setCurrentScreen] = useState(0)
  // autoPlay is never read in JSX — use a ref to avoid re-renders (rerender-use-ref-transient-values)
  const autoPlayRef = useRef(true)
  const currentScreenRef = useRef(0)

  // Keep currentScreen ref in sync with state (written during render — safe, no side-effects)
  currentScreenRef.current = currentScreen

  // Animation tracking — separate refs for dwell timer and transition timer
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  // Store scheduler fn in ref so recursive call always gets latest version (advanced-event-handler-refs)
  const scheduleNextScreenRef = useRef<() => void>(() => {})
  // Store drawScreen in ref so init effect always calls latest closure without re-running
  const drawScreenRef = useRef<(screenIndex: number) => Promise<void>>(async () => {})

  const ariaLabel =
    locale === 'es'
      ? 'Demostración interactiva del TUI de Gentle AI'
      : 'Gentle AI TUI interactive demonstration'

  /* ── Draw a screen to the terminal ── */
  const drawScreen = useCallback(async (screenIndex: number) => {
    const term = termRef.current
    if (!term || isDisposedRef.current) return

    drawingRef.current = true
    const lines = SCREENS[screenIndex]!.build()

    term.clear()
    term.write('\x1b[H') // cursor home

    if (prefersReducedMotion) {
      lines.forEach((line) => term.writeln(line))
      drawingRef.current = false
      return
    }

    for (const line of lines) {
      if (isDisposedRef.current) { drawingRef.current = false; return }
      term.writeln(line)
      await new Promise<void>((resolve) => {
        animationTimeoutRef.current = setTimeout(resolve, LINE_DRAW_MS)
      })
    }
    drawingRef.current = false
  }, [prefersReducedMotion])

  // Keep drawScreenRef in sync so the init effect always calls the latest closure
  drawScreenRef.current = drawScreen

  /* ── Navigate to a specific screen ── */
  const goToScreen = useCallback(async (index: number, resumeAutoPlay = false) => {
    if (!isReadyRef.current || isDisposedRef.current) return
    const clamped = Math.max(0, Math.min(SCREENS.length - 1, index))

    // Cancel any pending auto-advance and transition timers
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current)
      animationTimeoutRef.current = null
    }
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current)
      transitionTimeoutRef.current = null
    }

    setCurrentScreen(clamped)
    currentScreenRef.current = clamped

    if (resumeAutoPlay) {
      autoPlayRef.current = true
    }

    await new Promise<void>((resolve) => {
      animationTimeoutRef.current = setTimeout(resolve, TRANSITION_PAUSE)
    })

    await drawScreen(clamped)
  }, [drawScreen])

  /* ── Auto-advance loop ──
     Uses a ref to hold the scheduler so recursive calls always reach
     the latest closure — prevents stale-closure bugs (advanced-event-handler-refs).
  ── */
  const scheduleNextScreen = useCallback(() => {
    scheduleNextScreenRef.current()
  }, [])

  useEffect(() => {
    scheduleNextScreenRef.current = () => {
      if (!autoPlayRef.current || isDisposedRef.current) return
      const current = currentScreenRef.current
      const dwell = SCREENS[current]!.dwell

      animationTimeoutRef.current = setTimeout(async () => {
        if (!autoPlayRef.current || isDisposedRef.current) return
        const next = (currentScreenRef.current + 1) % SCREENS.length
        setCurrentScreen(next)
        currentScreenRef.current = next

        await new Promise<void>((resolve) => {
          transitionTimeoutRef.current = setTimeout(resolve, TRANSITION_PAUSE)
        })

        if (!isDisposedRef.current) {
          await drawScreen(next)
          scheduleNextScreenRef.current()
        }
      }, dwell)
    }
  }, [drawScreen])

  /* ── xterm init ── */
  useEffect(() => {
    if (!containerRef.current) return
    isDisposedRef.current = false
    isReadyRef.current = false

    let ro: ResizeObserver | null = null

    async function init() {
      await import('@xterm/xterm/css/xterm.css')
      const { Terminal: XTerm } = await import('@xterm/xterm')
      const { FitAddon } = await import('@xterm/addon-fit')

      if (isDisposedRef.current || !containerRef.current) return

      // Scale font to fit 40-char braille logo on small screens
      const containerWidth = containerRef.current.clientWidth
      const fontSize = containerWidth < 400 ? 8 : containerWidth < 500 ? 10 : 12

      const term = new XTerm({
        theme: ROSE_PINE_THEME,
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize,
        lineHeight: 1,
        cursorBlink: false,
        cursorStyle: 'block',
        cursorInactiveStyle: 'none',
        scrollback: 0,
        disableStdin: true,
        allowTransparency: false,
        convertEol: true,
      })

      const fitAddon = new FitAddon()
      term.loadAddon(fitAddon)
      term.open(containerRef.current)
      fitAddon.fit()

      termRef.current = term

      ro = new ResizeObserver(() => {
        try { fitAddon.fit() } catch { /* noop */ }
      })
      ro.observe(containerRef.current!)

      isReadyRef.current = true

      // Draw first screen then start auto-play loop
      await drawScreenRef.current(0)
      scheduleNextScreenRef.current()
    }

    init().catch(console.error)

    return () => {
      isDisposedRef.current = true
      isReadyRef.current = false
      if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
      if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
      if (ro) ro.disconnect()
      if (termRef.current) {
        termRef.current.dispose()
        termRef.current = null
      }
    }
  }, [locale])

  /* ── Button handlers ── */
  const handleBack = useCallback(() => {
    autoPlayRef.current = false
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
    const prev = (currentScreenRef.current - 1 + SCREENS.length) % SCREENS.length
    goToScreen(prev)
  }, [goToScreen])

  const handleForward = useCallback(() => {
    autoPlayRef.current = false
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
    if (transitionTimeoutRef.current) clearTimeout(transitionTimeoutRef.current)
    const next = (currentScreenRef.current + 1) % SCREENS.length
    goToScreen(next)
  }, [goToScreen])

  const handleRestart = useCallback(() => {
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
    goToScreen(0, true).then(() => scheduleNextScreen())
  }, [goToScreen, scheduleNextScreen])

  // Stable dot-button handler — avoids new function per dot per render (rerender-no-inline-components)
  const handleDotClick = useCallback((index: number) => {
    autoPlayRef.current = false
    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current)
    goToScreen(index)
  }, [goToScreen])

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="relative rounded-xl overflow-hidden border border-[#c4a7e7]/30 bg-[#191724] shadow-2xl shadow-[#c4a7e7]/5"
    >
      {/* Terminal title bar */}
      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#6e6a86]/30 bg-[#1f1d2e]">
        <span className="w-2 h-2 rounded-full bg-[#eb6f92]" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-[#f6c177]" aria-hidden="true" />
        <span className="w-2 h-2 rounded-full bg-[#9ccfd8]" aria-hidden="true" />
        <span className="ml-2 text-[#6e6a86] font-mono text-xs">gentle-ai</span>
        {/* Screen indicator */}
        <span className="ml-auto text-[#6e6a86] font-mono text-xs">
          {currentScreen + 1}/{SCREENS.length}
        </span>
      </div>

      {/* xterm container */}
      <div
        ref={containerRef}
        className="h-[650px] p-2"
      />

      {/* Playback controls */}
      <div className="flex items-center justify-center gap-3 px-4 py-3 border-t border-[#6e6a86]/30 bg-[#1f1d2e]">
        {/* Back */}
        <button
          onClick={handleBack}
          aria-label="Previous screen"
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#6e6a86]/40 bg-[#191724] text-[#908caa] hover:border-[#E91E8C]/60 hover:text-[#E91E8C] hover:bg-[#E91E8C]/10 transition-all duration-200 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Restart */}
        <button
          onClick={handleRestart}
          aria-label="Restart demo"
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#6e6a86]/40 bg-[#191724] text-[#908caa] hover:border-[#22d3ee]/60 hover:text-[#22d3ee] hover:bg-[#22d3ee]/10 transition-all duration-200 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7a5 5 0 1 0 1-3M2 4V1M2 4H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Progress dots */}
        <div className="flex items-center gap-1.5 px-2">
          {SCREENS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Go to screen ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                i === currentScreen
                  ? 'bg-[#E91E8C] scale-125'
                  : 'bg-[#6e6a86]/50 hover:bg-[#6e6a86]'
              }`}
            />
          ))}
        </div>

        {/* Forward */}
        <button
          onClick={handleForward}
          aria-label="Next screen"
          className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#6e6a86]/40 bg-[#191724] text-[#908caa] hover:border-[#E91E8C]/60 hover:text-[#E91E8C] hover:bg-[#E91E8C]/10 transition-all duration-200 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
