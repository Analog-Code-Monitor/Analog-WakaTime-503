import { languages } from './translations'
import type { Language } from './translations'

export function getLanguage(): Language {
  try {
    const cookie = document.cookie.split('; ').find((item) => item.startsWith('lang='))
    const saved = cookie ? decodeURIComponent(cookie.slice(5)) : undefined
    const match = languages.find((item) => item.code === saved || item.html === saved)
    if (match) return match.code
  } catch {
    // Restricted or malformed cookies must not prevent the maintenance notice from rendering.
  }
  for (const locale of navigator.languages) {
    const code = locale.toLowerCase().split('-')[0]
    const match = languages.find((item) => item.html === code || item.code === code)
    if (match) return match.code
  }
  return 'en'
}

export function saveLanguage(language: Language): void {
  try {
    document.cookie = `lang=${language}; max-age=31536000; path=/; SameSite=Lax`
  } catch {
    // The language still changes for this visit when cookies are disabled.
  }
}
