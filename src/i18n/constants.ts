export const supportedLanguages = ["en", "es", "pt"] as const;

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";
export const LANGUAGE_STORAGE_KEY = "jon_language";
export const LEGACY_PRESSKIT_LANGUAGE_STORAGE_KEY = "presskit_language";

export const isSupportedLanguage = (language: string): language is SupportedLanguage =>
  (supportedLanguages as readonly string[]).includes(language);
