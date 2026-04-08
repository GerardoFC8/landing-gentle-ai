interface LanguageToggleProps {
  currentLocale: 'en' | 'es';
  alternateHref: string;
}

/**
 * Stateless language switcher — pure anchor tag.
 * Works without JS (progressive enhancement).
 * No useState, no useEffect — just an <a> that navigates.
 */
export default function LanguageToggle({ currentLocale, alternateHref }: LanguageToggleProps) {
  const targetLocale = currentLocale === 'en' ? 'es' : 'en';

  return (
    <a
      href={alternateHref}
      aria-label={
        currentLocale === 'en'
          ? 'Cambiar a español'
          : 'Switch to English'
      }
      lang={targetLocale}
      className="inline-flex items-center justify-center px-3 h-9 rounded-lg font-mono text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
    >
      {targetLocale.toUpperCase()}
    </a>
  );
}
