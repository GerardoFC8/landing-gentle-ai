# PRD: Landing Page — Gentle AI (AI Gentle Stack)

> **Objetivo**: Crear una landing page de nivel competitivo para el concurso de presentacion de landings, que se destaque por originalidad visual, narrativa potente y experiencia interactiva unica.

---

## 1. Que es Gentle AI

**Gentle AI** (AI Gentle Stack) es un **configurador de ecosistema** para agentes de IA de programacion. NO es un agente de IA ni un instalador. Toma cualquier agente que ya uses (Claude Code, Cursor, Copilot, Windsurf, etc.) y lo **potencia** con:

- **Memoria persistente** (Engram) — entre sesiones
- **Desarrollo dirigido por especificaciones** (SDD) — flujo estructurado de 9 fases
- **Skills curados** — habilidades de coding inyectadas al agente
- **Servidores MCP** — herramientas externas conectadas
- **Persona de ensenanza** — un mentor que empuja a entender, no solo a copiar
- **Sistema de backup y rollback** completo

**Frase clave**: *"Un comando transforma cualquier agente de IA de un chatbot a un partner de desarrollo inteligente con memoria, skills y flujos estructurados."*

### Datos clave del repositorio

| Metrica | Valor |
|---------|-------|
| Stars | 1,676+ |
| Forks | 199+ |
| Version actual | v1.18.3 |
| Edad del proyecto | ~6 semanas |
| Lenguaje | Go 1.24+ |
| Licencia | MIT |
| Agentes soportados | 8 |
| Plataformas | macOS, Linux, Windows |
| Creador | Alan Buscaglia (@Alan-TheGentleman) |

---

## 2. Publico objetivo

1. **Desarrolladores** que usan agentes de IA (Claude Code, Cursor, Copilot, etc.) y quieren ir mas alla del "chatbot que escribe codigo"
2. **Equipos** que buscan flujos estructurados de desarrollo asistido por IA (SDD)
3. **Comunidad Gentleman Programming** (hispanohablante, YouTube, gran presencia)
4. **Jueces del concurso** — buscan originalidad, calidad tecnica y presentacion

---

## 3. Analisis de la landing actual (gentleai.vercel.app)

### Lo que hace bien
- Astro + Tailwind CSS — performance excelente
- SEO solido (JSON-LD, OG, Twitter cards)
- Cursor custom y scroll progress bar
- Animaciones de scroll-reveal y contadores
- Tabs de instalacion por plataforma con copy-to-clipboard

### Lo que falta (oportunidades para ganar)
1. **No hay demo visual** — CERO evidencia del tool en accion (ni video, ni GIF, ni terminal animada)
2. **No hay comparacion before/after** — no muestra "sin Gentle AI" vs "con Gentle AI"
3. **No hay social proof** — solo contadores, falta testimonios, quotes, featured-in
4. **El valor llega tarde** — primero te pide instalar, despues explica QUE ES
5. **No hay "How it works" visual** — pasos 1-2-3-4 con graficos
6. **No hay CTA final** — termina en footer sin call-to-action de cierre
7. **Sin i18n** — comunidad es hispana pero la pagina solo esta en ingles
8. **Estatico y generico** — parece "otra landing de dev tool" generada por IA
9. **Sin animaciones interactivas** — todo es scroll-reveal basico
10. **Sin modo claro** — solo dark mode

---

## 4. Propuesta de diferenciacion (ANTI-GENERICO)

### Concepto visual: "Terminal meets Cosmos"

La narrativa visual es: **tu agente de IA es como un astronauta flotando sin direccion. Gentle AI le da un traje, herramientas, memoria y una mision.**

#### Elementos diferenciadores clave

| Elemento | Descripcion | Por que destaca |
|----------|-------------|-----------------|
| **Terminal interactiva real** | Un emulador de terminal en el hero donde el usuario puede tipear comandos y ver la TUI de Gentle AI animada | Inmersion total, nadie mas lo hace |
| **Particulas reactivas** | Fondo con particulas que reaccionan al scroll y mouse, formando constelaciones entre los componentes | Vida y movimiento organico, no el tipico gradient blur |
| **Diagrama de flujo SDD animado** | Los 9 pasos del SDD como un pipeline visual interactivo — click en cada fase para ver que hace | Hace tangible el feature mas complejo |
| **Before/After interactivo** | Slider deslizable: izquierda "agente vanilla" (triste, sin contexto), derecha "agente con Gentle AI" (con memoria, skills, etc) | Valor proposicional visceral |
| **Cards 3D con depth** | Componentes mostrados como cards con efecto parallax 3D al mover el mouse | Premium feel, no flat generico |
| **Typing effect real** | Hero con efecto de tipeo que muestra diferentes comandos y outputs | Dinamismo vs texto estatico |
| **Micro-interacciones** | Cada hover, click y transicion tiene feedback tactil (scale, glow, sound opcional) | Pulido de competicion |
| **Easter egg terminal** | Si tipeas `gentle-ai --help` en la terminal interactiva del hero, responde con ASCII art | Engagement y viralidad |

---

## 5. Arquitectura de secciones (flujo narrativo)

El flujo sigue la estructura **Problema → Solucion → Evidencia → Accion**:

### 5.1. HERO — "El Impacto"
- **Headline**: "One command. Your AI agent evolves." (con gradient animado)
- **Subheadline**: "Stop using AI chatbots. Start working with an intelligent development partner."
- **Terminal interactiva** animada mostrando la instalacion y la TUI Rose Pine
- **Badges**: version actual (v1.18.3), stars de GitHub (API en build), MIT license
- **CTA dual**: "Install Now" (scroll a seccion) + "Watch Demo" (modal con video/GIF)
- **Stats animados**: Stars, Forks, Agentes soportados, Releases

### 5.2. PROBLEMA — "The Reality Check"
- **Titulo**: "Your AI agent is flying blind"
- Visual de un agente sin memoria (olvida todo), sin estructura (codigo spaghetti), sin skills (respuestas genericas)
- 3 pain points con iconos animados:
  1. "Forgets everything between sessions"
  2. "No structured workflow for complex features"
  3. "Generic responses without project context"

### 5.3. SOLUCION — "What Gentle AI Does"
- **Titulo**: "One command. Three superpowers."
- Los 3 pilares como cards 3D interactivas:
  1. **Engram** — Memoria persistente (icono de cerebro/neurona)
  2. **SDD** — Desarrollo por especificaciones (icono de blueprint)
  3. **Skills** — Habilidades curadas (icono de toolkit)
- Cada card se expande al hacer click para mostrar detalle

### 5.4. HOW IT WORKS — "3 Steps to Superpowers"
- Timeline visual horizontal (o vertical en mobile):
  1. **Install** — `curl -fsSL ... | bash` (animacion de terminal)
  2. **Choose** — Selecciona agente + preset (mockup de la TUI)
  3. **Code** — Tu agente ahora tiene memoria, skills y SDD (antes/despues)
- Animacion que progresa con el scroll (scroll-driven)

### 5.5. BEFORE/AFTER — "See the Difference"
- Slider interactivo deslizable
- **Izquierda (Before)**: terminal opaca, agente respondiendo generico, sin memoria
- **Derecha (After)**: terminal vibrante, agente con contexto, memoria, SDD activo
- Tambien puede ser un comparador de features en tabla

### 5.6. SDD DEEP DIVE — "Spec-Driven Development"
- Pipeline visual interactivo de las 9 fases:
  ```
  Explore → Propose → Spec → Design → Tasks → Apply → Verify → Archive → Judgment Day
  ```
- Cada nodo es clickeable y muestra: que hace, cuando se usa, ejemplo de output
- Animacion de flujo de datos entre nodos
- Este es el **killer feature** — merece su propia seccion prominente

### 5.7. AGENTES SOPORTADOS — "Works with your favorite agent"
- Grid de 8 agentes con logos:
  - Claude Code, OpenCode, Gemini CLI, Cursor, VS Code Copilot, Codex, Windsurf, Antigravity
- Cada uno con badge de capacidad: "Full Delegation" / "Solo Agent"
- Hover muestra detalle del soporte

### 5.8. COMPONENTES — "The Ecosystem"
- Los 8 componentes como un "sistema solar" o grid interactivo:
  - Engram, SDD, Skills, Context7, Persona, Permissions, GGA, Theme
- Cada uno con icono unico, nombre de codigo y descripcion corta
- Animacion de conexiones entre componentes

### 5.9. PRESETS — "Choose Your Setup"
- 4 presets como "planes" con visual tipo pricing table pero para configuracion:
  - **Full Gentleman** (recomendado) — TODO incluido
  - **Ecosystem Only** (popular) — core sin tema
  - **Minimal** (ligero) — solo engram + SDD
  - **Custom** (flexible) — elige lo tuyo
- Cada preset muestra el comando de instalacion

### 5.10. INSTALACION — "One Command Away"
- Tabs por plataforma: macOS (Homebrew / curl), Linux (curl), Windows (Scoop / PowerShell), Go
- Terminal animada con copy-to-clipboard
- Post-install steps: `gentle-ai sync`, `/sdd-init`

### 5.11. COMUNIDAD / SOCIAL PROOF — "Built by the Community"
- Contador de stars/forks en tiempo real (GitHub API at build)
- Testimonios (si existen)
- Link al YouTube de Gentleman Programming
- Logos/badges de la comunidad
- Contributors grid (GitHub API)

### 5.12. ECOSISTEMA — "The Gentleman Stack"
- Links a proyectos relacionados:
  - Engram (memoria), Gentleman Skills (skills), Gentleman.Dots (entorno dev), GGA (provider switcher)
- Posicionamiento: Gentle AI como el centro del ecosistema

### 5.13. CTA FINAL — "Ready to evolve?"
- **Headline**: "Your AI agent deserves better."
- **Subheadline**: "One command. That's all it takes."
- Terminal con el comando de instalacion
- Botones: "Install Now" + "Star on GitHub"

### 5.14. FOOTER
- Links de documentacion, comunidad, ecosistema
- Social links (GitHub, YouTube, Discord si existe)
- MIT License badge
- "Made with love by Gentleman Programming"

---

## 6. Stack tecnologico: **Astro 5 + React Islands + Tailwind v4 + Motion**

Stack definitivo. Sin alternativas — este es el que maximiza performance, interactividad y velocidad de desarrollo para el concurso.

| Tech | Version | Rol | Por que |
|------|---------|-----|---------|
| **Astro** | 5.x | Framework base | SSG, 0 JS por defecto, View Transitions, Content Collections, i18n nativo |
| **React** | 19.x | Islands interactivos | Solo donde hay interactividad real (terminal, slider, SDD pipeline, theme toggle) |
| **Tailwind CSS** | v4.x | Estilos | `@theme` nativo para dark/light tokens, utility-first, purge automatico |
| **Motion** | 12.x (ex Framer Motion) | Animaciones | Scroll-driven, layout animations, gestures — la mas completa del ecosistema React |
| **@xterm/xterm** | latest | Terminal interactiva | Emulador de terminal real en el browser — lazy loaded |
| **Shiki** | latest | Syntax highlighting | Integrado en Astro, code blocks con tema custom, 0 JS en cliente |
| **Vercel** | — | Hosting | Deploy inmediato, Edge Network, Analytics, env variables para GitHub token |

### Dependencias del proyecto

```json
{
  "dependencies": {
    "astro": "^5.0.0",
    "@astrojs/react": "^4.0.0",
    "@astrojs/tailwind": "^6.0.0",
    "@astrojs/sitemap": "^3.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "motion": "^12.0.0",
    "@xterm/xterm": "^5.0.0",
    "@xterm/addon-fit": "^0.10.0"
  },
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "typescript": "^5.0.0"
  }
}
```

### Por que este stack gana en el concurso

- **Performance**: Astro SSG = HTML puro. 0 JS enviado excepto en islands. Lighthouse 95+ garantizado.
- **Islands pattern**: React solo donde importa (terminal, slider, pipeline). El resto es `.astro` estatico.
- **Shiki built-in**: Code blocks con highlighting perfecto sin JS en el cliente.
- **View Transitions API**: Transiciones entre secciones nativas del browser, sin libreria extra.
- **Tailwind v4 `@theme`**: Sistema de tokens CSS nativo. Dark/light con una sola variable `color-scheme`.
- **Motion**: La unica libreria que hace scroll-driven, layout animations y gestures con API limpia.

---

## 7. Elementos anti-generico (diferenciacion visual)

### 7.1. Paleta de colores: "Neon Void" (Dark + Light)

Alejarse del tipico "dark mode con gradient azul-morado" que usa TODO el mundo.

**Dark mode (por defecto):**
```
--bg-base:       #0a0a0f   (near-black con tinte purpura frio)
--bg-surface:    #12121a   (cards, elementos)
--bg-elevated:   #1a1a26   (modales, dropdowns)
--border:        #1e1e2e   (bordes sutiles)
--text-primary:  #e4e4ef   (blanco suave, no puro)
--text-muted:    #6b6b8a   (texto secundario)
--accent-green:  #00ffaa   (el color FIRMA — unico en el mercado)
--accent-pink:   #ff3366   (contraste caliente)
--accent-blue:   #4488ff   (links, estados activos)
--gradient-hero: linear-gradient(135deg, #00ffaa, #4488ff, #ff3366)
```

**Light mode (variante):**
```
--bg-base:       #f4f4f8   (blanco frio, no puro — evita el blanco abrasivo)
--bg-surface:    #ffffff   (cards)
--bg-elevated:   #f0f0f5   (hover states)
--border:        #dddde8   (bordes)
--text-primary:  #0a0a1a   (casi negro)
--text-muted:    #6b6b8a   (mismo que dark — funciona en ambos)
--accent-green:  #00cc88   (verde levemente saturado para fondo claro — legible)
--accent-pink:   #e02255   (rosa mas saturado — contraste WCAG AA en claro)
--accent-blue:   #2266dd   (azul mas oscuro para legibilidad en claro)
--gradient-hero: linear-gradient(135deg, #00cc88, #2266dd, #e02255)
```

**Implementacion con Tailwind v4 `@theme`:**

```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  /* Tokens que Tailwind genera como utilities: bg-surface, text-primary, etc. */
  --color-bg-base: var(--bg-base);
  --color-bg-surface: var(--bg-surface);
  --color-bg-elevated: var(--bg-elevated);
  --color-border: var(--border);
  --color-text-primary: var(--text-primary);
  --color-text-muted: var(--text-muted);
  --color-accent-green: var(--accent-green);
  --color-accent-pink: var(--accent-pink);
  --color-accent-blue: var(--accent-blue);
}

/* Dark mode por defecto */
:root {
  color-scheme: dark;
  --bg-base: #0a0a0f;
  --bg-surface: #12121a;
  --bg-elevated: #1a1a26;
  --border: #1e1e2e;
  --text-primary: #e4e4ef;
  --text-muted: #6b6b8a;
  --accent-green: #00ffaa;
  --accent-pink: #ff3366;
  --accent-blue: #4488ff;
}

/* Light mode — activado por clase .light en <html> */
:root.light {
  color-scheme: light;
  --bg-base: #f4f4f8;
  --bg-surface: #ffffff;
  --bg-elevated: #f0f0f5;
  --border: #dddde8;
  --text-primary: #0a0a1a;
  --text-muted: #6b6b8a;
  --accent-green: #00cc88;
  --accent-pink: #e02255;
  --accent-blue: #2266dd;
}
```

**Estrategia de theme toggle:**
- Default: `dark` (sin JS, solo `:root` con los tokens oscuros)
- Toggle: React island (`ThemeToggle.tsx`) que agrega/quita clase `.light` en `<html>`
- Persistencia: `localStorage.setItem('theme', 'light'|'dark')`
- Sin flash: script inline en `<head>` (antes del render) lee localStorage y aplica la clase
- `prefers-color-scheme`: respetado como inicial si no hay valor en localStorage

**Script anti-flash (en `<head>` del BaseLayout.astro):**

```html
<script is:inline>
  const saved = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (saved === 'light' || (!saved && !prefersDark)) {
    document.documentElement.classList.add('light')
  }
</script>
```

**El verde neon (#00ffaa) como color firma** hace que se distinga INMEDIATAMENTE de cualquier otra landing de dev tool. Es el color de las terminales retro, de la Matrix, de "hacker pero sofisticado". En light mode baja a #00cc88 para mantener contraste WCAG AA.

### 7.2. Tipografia

| Uso | Font | Por que |
|-----|------|---------|
| Headlines | **Space Grotesk** | Geometrica, moderna, personalidad fuerte — NO es Inter/Satoshi/Geist como todos |
| Body | **Inter** | Legibilidad probada, no reinventar la rueda en body |
| Code / Terminal | **JetBrains Mono** | Ligatures, diseñada para codigo |

### 7.3. Animaciones clave

| Animacion | Donde | Implementacion |
|-----------|-------|----------------|
| **Typing effect** | Hero terminal | Custom con Motion + delay stagger |
| **Scroll-driven timeline** | How it works | `animation-timeline: scroll()` + Motion ScrollProgress |
| **3D card tilt** | Componentes | `onMouseMove` + CSS `perspective` + `rotateX/Y` |
| **Particle constellation** | Background global | Canvas 2D (no Three.js — mas liviano) + conectar puntos cercanos |
| **Slider before/after** | Comparacion | React component con drag handle |
| **Pipeline flow** | SDD deep dive | SVG animado con path drawing + Motion |
| **Counter scroll-triggered** | Stats | IntersectionObserver + easeOutCubic |
| **Magnetic buttons** | CTAs | Mouse position tracking + transform translate |
| **Page transitions** | Entre secciones | Astro View Transitions API |
| **Glow cursor** | Global | CSS custom property + `pointermove` |

### 7.4. Texturas y patrones

- **Dot grid sutil** en el background (CSS `radial-gradient` repetido) — da profundidad sin ser invasivo
- **Noise overlay** muy sutil (SVG filter `feTurbulence`) — rompe la "limpieza digital" generica
- **Glow blobs** en seccion transitions — no el tipico radial gradient, sino formas organicas con `filter: blur()`
- **Scanlines sutiles** en la terminal interactiva — refuerza la estetica terminal/retro

---

## 8. Consideraciones tecnicas

### Performance (critico para concurso)
- Target: **Lighthouse 95+** en todas las metricas
- Astro SSG = 0 JS por defecto
- Islands solo para interactividad real
- Imagenes: WebP/AVIF con `<picture>`, lazy loading
- Fonts: preload critical, `font-display: swap`
- CSS: Tailwind purge, inline critical CSS (Astro lo hace automatico)
- Terminal interactiva: lazy load (solo cuando entra en viewport)

### SEO
- JSON-LD (SoftwareApplication + Organization)
- Open Graph y Twitter Cards completos
- Canonical URL
- Sitemap.xml auto-generado por Astro
- Meta descriptions por seccion (si se hace multi-page)

### Accesibilidad
- `prefers-reduced-motion` respetado en TODAS las animaciones
- `prefers-color-scheme` para modo claro (bonus)
- Semantic HTML (nav, main, section, article, footer)
- Focus visible en todos los elementos interactivos
- aria-labels en iconos y elementos decorativos
- Contraste WCAG AA minimo

### i18n — Ingles por defecto + Espanol

**Principios:**
- Default: ingles (`/`) — la landing carga en ingles sin redirect
- Espanol: `/es/` — URL separada para SEO (no solo toggle JS)
- Selector visible en el navbar (EN | ES) — no escondido
- Las traducciones deben ser REVISADAS por humano — NO usar Google Translate crudo
- La comunidad de Gentleman Programming es hispanohablante — el espanol tiene que sonar NATURAL, no machine-translated

**Implementacion con Astro i18n nativo (v4+):**

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false  // "/" = ingles, "/es/" = espanol
    }
  }
})
```

**Estructura de paginas:**
```
src/pages/
├── index.astro          # / (ingles)
└── es/
    └── index.astro      # /es/ (espanol)
```

**Traducciones como Content Collections:**
```
src/i18n/
├── en.ts    # Textos en ingles (fuente de verdad)
└── es.ts    # Traducciones al espanol
```

```ts
// src/i18n/en.ts
export const en = {
  nav: {
    whatItDoes: 'What it does',
    components: 'Components',
    agents: 'Agents',
    install: 'Install',
    toggleTheme: 'Toggle theme',
  },
  hero: {
    headline: 'One command. Your AI agent evolves.',
    subheadline: 'Transform any AI coding agent into an intelligent development partner with persistent memory, structured workflows, and battle-tested skills.',
    ctaInstall: 'Install Now',
    ctaGithub: 'View on GitHub',
    badge: 'Latest release',
  },
  problem: {
    headline: 'Your AI agent is flying blind',
    p1Title: 'Forgets everything',
    p1Desc: 'No memory between sessions. Every conversation starts from zero.',
    p2Title: 'No structure',
    p2Desc: 'Complex features turn into spaghetti without a proper workflow.',
    p3Title: 'Generic responses',
    p3Desc: 'Without project context, your agent gives answers that fit nobody.',
  },
  // ... resto de secciones
} as const

export type I18nKey = typeof en
```

```ts
// src/i18n/es.ts — REVISAR CON HUMANO, no copiar de traductor
export const es = {
  nav: {
    whatItDoes: 'Qué hace',
    components: 'Componentes',
    agents: 'Agentes',
    install: 'Instalacion',
    toggleTheme: 'Cambiar tema',
  },
  hero: {
    headline: 'Un comando. Tu agente de IA evoluciona.',
    subheadline: 'Transforma cualquier agente de IA en un partner de desarrollo inteligente con memoria persistente, flujos estructurados y skills probados.',
    ctaInstall: 'Instalar ahora',
    ctaGithub: 'Ver en GitHub',
    badge: 'Ultima version',
  },
  problem: {
    headline: 'Tu agente de IA vuela a ciegas',
    p1Title: 'Olvida todo',
    p1Desc: 'Sin memoria entre sesiones. Cada conversacion empieza de cero.',
    p2Title: 'Sin estructura',
    p2Desc: 'Las features complejas se convierten en spaghetti sin un flujo de trabajo.',
    p3Title: 'Respuestas genericas',
    p3Desc: 'Sin contexto del proyecto, tu agente da respuestas que no le sirven a nadie.',
  },
  // ... resto de secciones
} as const
```

**Helper de traduccion:**
```ts
// src/i18n/utils.ts
import { en } from './en'
import { es } from './es'

const translations = { en, es }

export function t(locale: 'en' | 'es') {
  return translations[locale]
}
```

**Uso en componentes Astro:**
```astro
---
// src/sections/Hero.astro
import { t } from '../i18n/utils'
const { locale = 'en' } = Astro.props
const i18n = t(locale)
---
<h1>{i18n.hero.headline}</h1>
```

**Selector de idioma en nav (React island para persistencia):**
```tsx
// src/components/ui/LanguageToggle.tsx
'use client'
export function LanguageToggle({ currentLocale }: { currentLocale: 'en' | 'es' }) {
  const otherLocale = currentLocale === 'en' ? 'es' : 'en'
  const otherPath = currentLocale === 'en' ? '/es/' : '/'
  return (
    <a href={otherPath} aria-label="Switch language">
      {otherLocale.toUpperCase()}
    </a>
  )
}
```

**Checklist de revision de traducciones (OBLIGATORIO antes del concurso):**
- [ ] Textos del hero revisados por hablante nativo
- [ ] Textos tecnicos (SDD, Engram, Skills) — mantener en ingles donde corresponde, no forzar traduccion
- [ ] Comandos de instalacion — NO traducir (son codigo)
- [ ] Nombres propios (Gentle AI, Engram, SDD, GGA) — NO traducir
- [ ] Mensajes de error y UI pequeños (badges, labels) — traducir con cuidado
- [ ] SEO: meta descriptions unicas por idioma
- [ ] OG images: si incluyen texto, necesitan version en cada idioma

### Datos dinamicos — GitHub API en build-time

**Principio**: todos los datos de GitHub se fetchean en build time en el frontmatter de Astro. El HTML queda con los numeros bakeados. 0 requests al cliente, maxima performance.

**`src/lib/github.ts`:**
```ts
const REPO = 'Gentleman-Programming/gentle-ai'
const HEADERS = {
  Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
  Accept: 'application/vnd.github.v3+json',
}

export async function getRepoStats() {
  const res = await fetch(`https://api.github.com/repos/${REPO}`, { headers: HEADERS })
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  const data = await res.json()
  return {
    stars: data.stargazers_count as number,
    forks: data.forks_count as number,
    openIssues: data.open_issues_count as number,
    watchers: data.watchers_count as number,
  }
}

export async function getLatestRelease() {
  const res = await fetch(`https://api.github.com/repos/${REPO}/releases/latest`, { headers: HEADERS })
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  const data = await res.json()
  return {
    version: data.tag_name as string,        // "v1.18.3"
    publishedAt: data.published_at as string,
    url: data.html_url as string,
  }
}

export async function getReleaseCount() {
  // GitHub paginates releases — page 1 con per_page=1 + header Link nos da el total
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/releases?per_page=1`,
    { headers: HEADERS }
  )
  const link = res.headers.get('Link') ?? ''
  const match = link.match(/page=(\d+)>; rel="last"/)
  return match ? parseInt(match[1]) : 1
}

export async function getContributors(limit = 12) {
  const res = await fetch(
    `https://api.github.com/repos/${REPO}/contributors?per_page=${limit}`,
    { headers: HEADERS }
  )
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
  const data = await res.json()
  return data.map((c: any) => ({
    login: c.login as string,
    avatar: c.avatar_url as string,
    url: c.html_url as string,
    contributions: c.contributions as number,
  }))
}
```

**Uso en `src/pages/index.astro`:**
```astro
---
import { getRepoStats, getLatestRelease, getReleaseCount, getContributors } from '../lib/github'

const [stats, release, releaseCount, contributors] = await Promise.all([
  getRepoStats(),
  getLatestRelease(),
  getReleaseCount(),
  getContributors(12),
])
---
<!-- stats.stars, release.version, etc. disponibles en toda la pagina -->
```

**Env variable en Vercel:**
- Nombre: `GITHUB_TOKEN`
- Valor: Personal Access Token con scope `public_repo`
- Sin token: rate limit de 60 req/hora (puede fallar en builds frecuentes)
- Con token: 5,000 req/hora (mas que suficiente)

**Fallback si la API falla:**
```ts
export async function getRepoStats() {
  try {
    // ... fetch normal
  } catch {
    // Fallback hardcodeado — se actualiza manualmente en releases
    return { stars: 1676, forks: 199, openIssues: 55, watchers: 21 }
  }
}
```

---

## 9. Instalacion del proyecto (estructura propuesta)

```
landing-gentle-ai/
├── astro.config.mjs          # i18n config, integrations (react, tailwind, sitemap)
├── tsconfig.json
├── package.json
├── .env                      # GITHUB_TOKEN (NO commitear)
├── .env.example              # Template sin valores
├── public/
│   ├── fonts/                # Space Grotesk, Inter, JetBrains Mono (self-hosted)
│   ├── images/
│   │   ├── agents/           # Logos SVG de los 8 agentes
│   │   ├── og-image-en.png   # Open Graph ingles
│   │   ├── og-image-es.png   # Open Graph espanol
│   │   └── favicon.svg
│   └── robots.txt
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro  # Head, nav, footer, theme script, font preloads
│   ├── pages/
│   │   ├── index.astro       # / — ingles (fetches GitHub API, pasa props a secciones)
│   │   └── es/
│   │       └── index.astro   # /es/ — espanol (mismo fetch, locale='es')
│   ├── sections/             # Secciones como .astro (reciben locale + data como props)
│   │   ├── Hero.astro
│   │   ├── Problem.astro
│   │   ├── Solution.astro
│   │   ├── HowItWorks.astro
│   │   ├── BeforeAfter.astro
│   │   ├── SDDPipeline.astro
│   │   ├── Agents.astro
│   │   ├── Components.astro
│   │   ├── Presets.astro
│   │   ├── Install.astro
│   │   ├── Community.astro
│   │   ├── Ecosystem.astro
│   │   └── FinalCTA.astro
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Badge.astro
│   │   │   └── Card.astro
│   │   ├── ThemeToggle.tsx        # React island — dark/light toggle con localStorage
│   │   ├── LanguageToggle.astro   # Link a /es/ o / segun locale actual
│   │   ├── Terminal.tsx           # React island — terminal interactiva (lazy)
│   │   ├── BeforeAfterSlider.tsx  # React island — slider drag
│   │   ├── SDDFlow.tsx            # React island — pipeline SDD interactivo
│   │   ├── Card3D.tsx             # React island — card con tilt 3D
│   │   ├── ParticleBackground.tsx # React island — canvas 2D particulas (lazy)
│   │   └── StatsCounter.tsx       # React island — contadores animados
│   ├── i18n/
│   │   ├── en.ts              # Textos en ingles (fuente de verdad)
│   │   ├── es.ts              # Traducciones al espanol (REVISAR con humano)
│   │   └── utils.ts           # Helper t(locale)
│   ├── data/
│   │   ├── agents.ts          # Los 8 agentes con nombre, logo, badge, url
│   │   ├── components.ts      # Los 8 componentes con icono, code name, descripcion
│   │   ├── presets.ts         # Los 4 presets con componentes incluidos
│   │   ├── skills.ts          # Los 14+ skills categorizados
│   │   └── navigation.ts      # Links del nav y footer
│   ├── lib/
│   │   ├── github.ts          # getRepoStats, getLatestRelease, getReleaseCount, getContributors
│   │   └── animations.ts      # Variantes Motion reutilizables (fadeUp, stagger, etc.)
│   └── styles/
│       └── global.css         # @import tailwindcss + @theme tokens + dark/light vars + texturas
├── PRD.md
└── CLAUDE.md
```

---

## 10. Contenido clave para la landing

### Copy del Hero
```
Headline:     "One command. Your AI agent evolves."
Subheadline:  "Transform any AI coding agent into an intelligent development 
               partner with persistent memory, structured workflows, and 
               battle-tested skills."
```

### Copy del Problema
```
"Your AI agent forgets everything between sessions.
 It writes code without a plan.
 It gives generic answers without project context.
 
 Sound familiar?"
```

### Copy de la Solucion
```
"Gentle AI doesn't replace your agent. It upgrades it.
 
 Memory that persists. Workflows that scale. Skills that matter."
```

### Copy del CTA final
```
"Your AI agent deserves better. One command. That's it."
```

### Datos para mostrar
- 1,676+ GitHub Stars (API dinamico)
- 199+ Forks
- 8 Agentes soportados
- 137+ Releases
- 14 Skills curados
- 8 Componentes
- 3 plataformas (macOS, Linux, Windows)
- 6 metodos de instalacion

### Comandos de instalacion
```bash
# macOS / Linux
curl -fsSL https://raw.githubusercontent.com/Gentleman-Programming/gentle-ai/main/scripts/install.sh | bash

# Homebrew
brew tap Gentleman-Programming/homebrew-tap && brew install gentle-ai

# Windows (Scoop)
scoop bucket add gentleman https://github.com/Gentleman-Programming/scoop-bucket && scoop install gentle-ai

# Windows (PowerShell)
irm https://raw.githubusercontent.com/Gentleman-Programming/gentle-ai/main/scripts/install.ps1 | iex

# Go
go install github.com/gentleman-programming/gentle-ai/cmd/gentle-ai@latest
```

---

## 11. Metricas de exito (para el concurso)

| Metrica | Target |
|---------|--------|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse Best Practices | 95+ |
| Lighthouse SEO | 100 |
| First Contentful Paint | < 1.0s |
| Largest Contentful Paint | < 2.0s |
| Total Blocking Time | < 100ms |
| Cumulative Layout Shift | < 0.05 |
| Tiempo en pagina (engagement) | > 2 min |
| Scroll depth promedio | > 70% |

---

## 12. Timeline sugerido

| Fase | Entregable | Duracion estimada |
|------|------------|-------------------|
| Setup | Proyecto Astro + Tailwind + estructura base | Sesion 1 |
| Layout | BaseLayout + nav + footer + responsive grid | Sesion 2 |
| Hero | Terminal interactiva + typing + stats | Sesion 3 |
| Secciones core | Problem + Solution + How it works | Sesion 4 |
| Interactividad | Before/After slider + SDD pipeline + 3D cards | Sesion 5 |
| Secciones info | Agents + Components + Presets + Install | Sesion 6 |
| Polish | Particulas + animaciones + micro-interacciones + CTA final | Sesion 7 |
| QA | Performance, a11y, responsive, cross-browser | Sesion 8 |
| Deploy | Vercel + dominio + OG image | Sesion 9 |

---

## 13. Resumen ejecutivo

**Gentle AI** es un configurador de ecosistema para agentes de IA que necesita una landing que:

1. **MUESTRE, no cuente** — terminal interactiva, demos visuales, before/after
2. **Flujo narrativo** — Problema → Solucion → Evidencia → Accion (no empezar con instalacion)
3. **Estetica unica** — "Neon Void" con verde terminal como color firma, alejado del generico azul/morado
4. **Interactividad premium** — 3D cards, pipeline SDD animado, slider, particulas
5. **Performance impecable** — Astro SSG, Lighthouse 95+
6. **Bilingue** — Ingles + Espanol para la comunidad
7. **Datos vivos** — GitHub API en build time para stats actualizados

La landing actual es tecnicamente solida pero visualmente generica. La nueva version debe ser una **experiencia**, no una pagina informativa.
