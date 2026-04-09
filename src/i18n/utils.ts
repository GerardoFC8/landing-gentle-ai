import { en } from './en';
import { es } from './es';

export type Locale = 'en' | 'es';

type DeepWiden<T> =
  T extends string ? string
  : T extends number ? number
  : T extends boolean ? boolean
  : T extends readonly (infer U)[] ? readonly DeepWiden<U>[]
  : T extends object ? { [K in keyof T]: DeepWiden<T[K]> }
  : T;

export type I18nStrings = DeepWiden<typeof en>;

const translations: Record<Locale, I18nStrings> = { en, es };

export function t(locale: Locale): I18nStrings {
  return translations[locale];
}

export function isLocale(s: string): s is Locale {
  return s === 'en' || s === 'es';
}
