export const brand = 'Analog WakaTime'

export const languages = [
  { code: 'en', html: 'en', label: 'English' },
  { code: 'ru', html: 'ru', label: 'Русский' },
  { code: 'se', html: 'sv', label: 'Svenska' },
  { code: 'uk', html: 'uk', label: 'Українська' },
  { code: 'pl', html: 'pl', label: 'Polski' },
] as const

export type Language = typeof languages[number]['code']

type Translation = {
  language: string
  status: string
  title: string
  description: string
  estimate: string
  duration: string
  note: string
  refresh: string
  thanks: string
  footer: string
}

export const translations: Record<Language, Translation> = {
  en: {
    language: 'Language', status: 'Database migration in progress',
    title: 'A short pause.\nWe’ll be back soon.',
    description: 'Analog WakaTime is temporarily unavailable while we migrate our database. The service will be back once the migration is complete.',
    estimate: 'Estimated downtime', duration: '1–3 days',
    note: 'This is an estimate. The migration may finish sooner or take longer.',
    refresh: 'Refresh page', thanks: 'Thank you for your patience.', footer: 'Service temporarily unavailable',
  },
  ru: {
    language: 'Язык', status: 'Идёт миграция базы данных',
    title: 'Небольшая пауза.\nСкоро вернёмся.',
    description: 'Analog WakaTime временно недоступен: мы переносим базу данных. Сервис возобновит работу после завершения миграции.',
    estimate: 'Ожидаемое время недоступности', duration: '1–3 дня',
    note: 'Это ориентировочный срок. Миграция может завершиться раньше или занять больше времени.',
    refresh: 'Обновить страницу', thanks: 'Спасибо за ваше терпение.', footer: 'Сервис временно недоступен',
  },
  se: {
    language: 'Språk', status: 'Databasmigrering pågår',
    title: 'En kort paus.\nVi är snart tillbaka.',
    description: 'Analog WakaTime är tillfälligt otillgängligt medan vi migrerar vår databas. Tjänsten blir tillgänglig igen när migreringen är klar.',
    estimate: 'Beräknad driftstoppstid', duration: '1–3 dagar',
    note: 'Tiden är en uppskattning. Migreringen kan bli klar tidigare eller ta längre tid.',
    refresh: 'Uppdatera sidan', thanks: 'Tack för ditt tålamod.', footer: 'Tjänsten är tillfälligt otillgänglig',
  },
  uk: {
    language: 'Мова', status: 'Триває міграція бази даних',
    title: 'Невелика пауза.\nСкоро повернемося.',
    description: 'Analog WakaTime тимчасово недоступний: ми переносимо базу даних. Сервіс відновить роботу після завершення міграції.',
    estimate: 'Очікуваний час недоступності', duration: '1–3 дні',
    note: 'Це орієнтовний термін. Міграція може завершитися раніше або тривати довше.',
    refresh: 'Оновити сторінку', thanks: 'Дякуємо за ваше терпіння.', footer: 'Сервіс тимчасово недоступний',
  },
  pl: {
    language: 'Język', status: 'Trwa migracja bazy danych',
    title: 'Krótka przerwa.\nWkrótce wrócimy.',
    description: 'Analog WakaTime jest tymczasowo niedostępny z powodu migracji bazy danych. Usługa zostanie przywrócona po zakończeniu migracji.',
    estimate: 'Przewidywany czas niedostępności', duration: '1–3 dni',
    note: 'To orientacyjny termin. Migracja może zakończyć się wcześniej lub potrwać dłużej.',
    refresh: 'Odśwież stronę', thanks: 'Dziękujemy za cierpliwość.', footer: 'Usługa tymczasowo niedostępna',
  },
}
