import { en } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';
export type I18nStrings = typeof en;

const translations: Record<Locale, I18nStrings> = { en, es };

export function t(locale: Locale): I18nStrings {
  return translations[locale];
}

export function isLocale(s: string): s is Locale {
  return s === 'en' || s === 'es';
}
