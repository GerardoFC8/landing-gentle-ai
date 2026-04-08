import '@xterm/xterm/css/xterm.css';
import { useRef, useEffect, useReducer } from 'react';
import { useReducedMotion } from 'motion/react';

interface TerminalProps {
  commands: string[];
  locale: 'en' | 'es';
}

type TerminalState = 'idle' | 'typing' | 'complete';

type Action =
  | { type: 'START' }
  | { type: 'COMPLETE' };

function reducer(state: TerminalState, action: Action): TerminalState {
  switch (action.type) {
    case 'START':
      return 'typing';
    case 'COMPLETE':
      return 'complete';
    default:
      return state;
  }
}

const XTERM_THEME = {
  background: '#0a0a0f',
  foreground: '#E91E8C',
  cursor: '#E91E8C',
  cursorAccent: '#0a0a0f',
  selectionBackground: '#E91E8C33',
  black: '#0a0a0f',
  red: '#ff3366',
  green: '#E91E8C',
  yellow: '#ffcc00',
  blue: '#22d3ee',
  magenta: '#a855f7',
  cyan: '#22d3ee',
  white: '#e4e4ef',
  brightBlack: '#3a3a5c',
  brightRed: '#ff3366',
  brightGreen: '#f472b6',
  brightYellow: '#ffdd44',
  brightBlue: '#67e8f9',
  brightMagenta: '#c084fc',
  brightCyan: '#67e8f9',
  brightWhite: '#ffffff',
};

const TYPING_SPEED_MS = 40;
const BETWEEN_COMMAND_PAUSE_MS = 600;

export default function Terminal({ commands, locale }: TerminalProps) {
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const [state, dispatch] = useReducer(reducer, 'idle');

  // We store cleanup refs imperatively — not in state (avoids re-renders)
  const terminalRef = useRef<import('@xterm/xterm').Terminal | null>(null);
  const fitAddonRef = useRef<import('@xterm/addon-fit').FitAddon | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);
  const isDisposedRef = useRef(false);

  const ariaLabel =
    locale === 'es'
      ? 'Demostración de instalación de Gentleman.Dots en terminal'
      : 'Gentleman.Dots installation demonstration in terminal';

  useEffect(() => {
    if (!containerRef.current) return;

    isDisposedRef.current = false;

    let term: import('@xterm/xterm').Terminal;
    let fitAddon: import('@xterm/addon-fit').FitAddon;

    async function initTerminal() {
      // Dynamic import — xterm is heavy, load only client-side
      const { Terminal: XTerm } = await import('@xterm/xterm');
      const { FitAddon } = await import('@xterm/addon-fit');

      if (isDisposedRef.current || !containerRef.current) return;

      term = new XTerm({
        theme: XTERM_THEME,
        fontFamily: '"JetBrains Mono", ui-monospace, monospace',
        fontSize: 13,
        lineHeight: 1.5,
        cursorBlink: true,
        cursorStyle: 'block',
        scrollback: 0,
        disableStdin: true,
        allowTransparency: false,
        convertEol: true,
      });

      fitAddon = new FitAddon();
      term.loadAddon(fitAddon);
      term.open(containerRef.current);
      fitAddon.fit();

      terminalRef.current = term;
      fitAddonRef.current = fitAddon;

      // Resize observer — refit on container size change
      const ro = new ResizeObserver(() => {
        try {
          fitAddon.fit();
        } catch {
          // Ignore — terminal may have been disposed
        }
      });
      if (containerRef.current) {
        ro.observe(containerRef.current);
      }
      resizeObserverRef.current = ro;

      dispatch({ type: 'START' });

      if (prefersReducedMotion) {
        // Show all commands instantly — no typing animation
        commands.forEach((cmd, i) => {
          const line = cmd === '' ? cmd : `\x1b[32m❯\x1b[0m ${cmd}`;
          term.writeln(line);
          if (i < commands.length - 1) {
            term.writeln('');
          }
        });
        dispatch({ type: 'COMPLETE' });
        return;
      }

      // Animated typing — one char at a time with pauses between commands
      let cmdIndex = 0;
      let charIndex = 0;
      let isPausing = false;
      let pauseEndTime = 0;

      // Write prompt prefix for first command
      term.write('\x1b[32m❯\x1b[0m ');

      const tick = setInterval(() => {
        if (isDisposedRef.current) {
          clearInterval(tick);
          return;
        }

        const now = Date.now();

        // In inter-command pause
        if (isPausing) {
          if (now >= pauseEndTime) {
            isPausing = false;
            // Start next command — write prompt
            term.write('\x1b[32m❯\x1b[0m ');
          }
          return;
        }

        const currentCmd = commands[cmdIndex];
        if (currentCmd === undefined) {
          clearInterval(tick);
          dispatch({ type: 'COMPLETE' });
          return;
        }

        if (charIndex < currentCmd.length) {
          term.write(currentCmd[charIndex]!);
          charIndex++;
        } else {
          // Finished current command — newline + pause
          term.writeln('');
          cmdIndex++;
          charIndex = 0;

          if (cmdIndex >= commands.length) {
            clearInterval(tick);
            dispatch({ type: 'COMPLETE' });
          } else {
            // Pause between commands
            isPausing = true;
            pauseEndTime = Date.now() + BETWEEN_COMMAND_PAUSE_MS;
          }
        }
      }, TYPING_SPEED_MS);

      intervalRef.current = tick;
    }

    initTerminal().catch(console.error);

    return () => {
      isDisposedRef.current = true;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      if (terminalRef.current) {
        terminalRef.current.dispose();
        terminalRef.current = null;
      }
    };
  }, [commands, locale, prefersReducedMotion]);

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-[#0a0a0f]"
    >
      {/* macOS-style traffic lights */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1e1e2e]">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" aria-hidden="true" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" aria-hidden="true" />
        <span className="ml-2 text-[#3a3a5c] font-mono text-xs">bash</span>
      </div>

      {/* Placeholder shown while xterm loads */}
      {state === 'idle' && (
        <div
          aria-hidden="true"
          className="flex items-center gap-2 px-4 py-4 font-mono text-sm text-[#E91E8C]"
        >
          <span className="text-[#E91E8C]">❯</span>
          {/* Blinking CSS cursor */}
          <span
            className="inline-block w-2 h-4 bg-[#E91E8C] align-middle"
            style={{ animation: 'blink 1s step-end infinite' }}
          />
          <style>{`@keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }`}</style>
        </div>
      )}

      {/* xterm mounts here */}
      <div
        ref={containerRef}
        className="h-56"
        style={{ visibility: state === 'idle' ? 'hidden' : 'visible' }}
      />
    </div>
  );
}
