# PRD: Ecosystem Features — Custom Agents, SDD Profiles, Model Config & Engram

**Date**: 2026-04-08
**Status**: DRAFT
**Project**: landing-gentle-ai

---

## 1. CONTEXT

The current landing page covers: Hero, Problem, Solution, HowItWorks, SDDPipeline, Agents (supported AI tools), Components (ecosystem pieces), Demo (TUI), Install, Community, FinalCTA.

Three key capabilities are NOT prominently showcased:

1. **Create your own Agent** — custom skill/agent builder
2. **OpenCode SDD Profiles** — multi-model orchestration with per-phase model assignment
3. **Configure Models** — model presets (balanced/performance/economy/custom)

Additionally, **Engram** (persistent memory) is listed as a component card but deserves more prominent treatment as the **backbone** of the entire ecosystem — it's what makes everything persistent across sessions.

---

## 2. WHAT TO ADD

### 2.1 — New Section: "Build Your Own Agent"

**Position**: After Components, before Install.

**Purpose**: Show that gentle-ai is not just a preset installer — it's an extensible platform where you can create custom AI agents with a simple Markdown file.

**Content**:

- **Headline**: "Create your own Agent" / "Creá tu propio Agente"
- **Subheadline**: "A Markdown file. Four sections. Installed across all your AI tools." / "Un archivo Markdown. Cuatro secciones. Instalado en todas tus herramientas de IA."
- **Visual**: A code block showing the agent file format:
  ```markdown
  # My Custom Agent

  ## Description
  What the agent does.

  ## Trigger
  When it should activate.

  ## Instructions
  The actual behavior/prompt content.
  ```
- **Key points** (3 cards or bullet highlights):
  1. **One file, all tools** — Write once, auto-installed in Claude Code, OpenCode, Gemini CLI, Cursor, VS Code Copilot, Codex, Antigravity, Windsurf
  2. **SDD integration** — Custom agents can enhance existing SDD phases, add new phases to the DAG, or run standalone
  3. **Collision-safe registry** — Built-in registry prevents naming conflicts with built-in skills, with automatic rollback on failure
- **SDD modes** (subtle badges or icons):
  - `SDDPhaseSupport` — enhances an existing phase
  - `SDDNewPhase` — adds a new phase to the pipeline
  - `SDDStandalone` — pure standalone skill

---

### 2.2 — New Section: "Model Intelligence"

**Position**: After "Build Your Own Agent", before Install.

**Purpose**: Showcase the model configuration and SDD profile system — the fact that gentle-ai intelligently assigns different AI models to different tasks.

**Content**:

- **Headline**: "Smart model assignment" / "Asignación inteligente de modelos"
- **Subheadline**: "The right model for every phase. Opus for architecture. Sonnet for code. Haiku for cleanup." / "El modelo correcto para cada fase. Opus para arquitectura. Sonnet para código. Haiku para limpieza."

#### Sub-section A: Model Presets

A visual table or 3 preset cards:

| Phase | Balanced | Performance | Economy |
|---|---|---|---|
| orchestrator | Opus | Opus | Sonnet |
| sdd-propose | Opus | Opus | Sonnet |
| sdd-design | Opus | Opus | Sonnet |
| sdd-verify | Sonnet | Opus | Sonnet |
| sdd-explore | Sonnet | Sonnet | Sonnet |
| sdd-spec | Sonnet | Sonnet | Sonnet |
| sdd-tasks | Sonnet | Sonnet | Sonnet |
| sdd-apply | Sonnet | Sonnet | Sonnet |
| sdd-archive | Haiku | Haiku | Haiku |

Plus a **Custom** option: "Pick the model for each phase yourself."

Display as 4 clickable preset cards (not a raw table) with key differentiators:
- **Balanced** — "Smart defaults. Opus where it counts, Sonnet for the rest, Haiku for archiving."
- **Performance** — "Maximum quality. Opus for architecture, planning & verification."
- **Economy** — "Cost-optimised. Sonnet for all phases, Haiku for archiving."
- **Custom** — "Full control. Assign any model to any phase."

#### Sub-section B: OpenCode SDD Profiles

Below the presets, explain profiles:
- **What**: Named configurations that save your model assignments + orchestration mode
- **Single mode**: One agent handles everything — simpler, fewer tokens
- **Multi mode**: Dedicated sub-agent per SDD phase — more capable, parallel execution, Agent Teams Lite architecture
- Visual showing: Profile name → orchestrator model + phase assignments map

---

### 2.3 — Enhanced Engram Showcase

**Current state**: Engram is a small card in the Components grid. For the ecosystem's persistence backbone, this is insufficient.

**Option A — Dedicated mini-section** (recommended):

Add a focused callout/banner between Components and the new "Build Your Own Agent" section. NOT a full section — more like a highlighted feature band.

- **Headline**: "Memory that never forgets" / "Memoria que nunca se pierde"
- **Subheadline**: "Engram gives your agents persistent memory across sessions, compactions, and machines."
- **3 feature pills**:
  1. **Cross-session** — Decisions, bugs, conventions survive forever
  2. **Cross-tool** — Works with Claude Code, OpenCode, Gemini CLI, Cursor, and any MCP-compatible tool
  3. **Cross-machine** — Git sync enables memory sharing across devices
- **Visual**: A small terminal-like block showing:
  ```
  mem_save  → "Fixed N+1 query in UserList"
  mem_search → "how did we solve auth?"
  mem_context → recent session history
  ```
- **Link**: "Engram has its own story →" pointing to future engram landing (or GitHub repo for now)
- **Keep the component card** in the grid as-is — the mini-section adds context, the card maintains the grid's completeness.

**Option B — Just enhance the card**: Make the Engram card visually distinct (larger, different border, "core" badge more prominent). Lower effort, lower impact.

---

## 3. SECTION ORDER (proposed)

```
Hero
Problem
Solution
HowItWorks
SDDPipeline
Agents (supported AI tools)
Components (ecosystem pieces)
  └─ Engram callout band (NEW — 2.3)
BuildYourAgent (NEW — 2.1)
ModelIntelligence (NEW — 2.2)
Demo (TUI)
Install
Community
FinalCTA
```

**Rationale**: The narrative flow goes:
1. Problem → Solution → How it works (concept)
2. SDD pipeline → Agents → Components (what's inside)
3. Engram callout → Build agents → Model config (power user features)
4. Demo → Install → Community → CTA (try it / join)

---

## 4. i18n KEYS TO ADD

```typescript
// en.ts / es.ts
buildAgent: {
  headline: string
  intro: string
  format: { title, description, trigger, instructions } // labels for the code block
  features: { oneFile, sddIntegration, registry } // card titles + descriptions
}
modelIntelligence: {
  headline: string
  intro: string
  presets: {
    balanced: { name, description }
    performance: { name, description }
    economy: { name, description }
    custom: { name, description }
  }
  profiles: {
    headline: string
    intro: string
    single: { name, description }
    multi: { name, description }
  }
}
engram: {
  headline: string
  intro: string
  features: { crossSession, crossTool, crossMachine }
  cta: string // link text
}
```

---

## 5. NEW FILES

| File | Purpose |
|------|---------|
| `src/sections/BuildAgent.astro` | Custom agent builder section |
| `src/sections/ModelIntelligence.astro` | Model presets + SDD profiles section |
| `src/sections/EngramCallout.astro` | Engram highlight band |
| `src/data/model-presets.ts` | Model preset data (balanced/performance/economy/custom) |

---

## 6. DESIGN NOTES

- **BuildAgent**: Use a `CodeBlock` component (already exists) for the Markdown format example. Feature cards should use the existing `Card3D` island.
- **ModelIntelligence**: Preset cards as a 4-column grid (lg). The phase table should be interactive — click a preset card to see its assignments. Consider a simple React island for this.
- **EngramCallout**: NOT a full `<Section>` — use a `<div>` with a gradient border or subtle background to differentiate from the components grid above. Keep it compact — 2-3 lines max with the 3 feature pills inline.
- **All new sections** must follow existing patterns: `data-animate`, `data-stagger`, `GlowBlob`, responsive grid breakpoints.

---

## 7. OUT OF SCOPE

- Engram dedicated landing page (separate project, mentioned by user)
- Interactive agent builder (just showcase the format)
- Live model pricing or token counts
- Provider configuration UI (just show what's supported)

---

## 8. ACCEPTANCE CRITERIA

- [ ] "Build Your Own Agent" section visible on both EN and ES pages
- [ ] Model Intelligence section with 4 preset cards and profile explanation
- [ ] Engram callout band between Components and BuildAgent
- [ ] All text in i18n files (no hardcoded strings)
- [ ] Nav links updated for new sections
- [ ] Mobile responsive (single column on mobile, grid on desktop)
- [ ] Dark/light mode works for all new sections
- [ ] All sections use existing component patterns (Section, Card3D, Badge, GlowBlob)
