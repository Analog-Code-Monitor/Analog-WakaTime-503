import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import { brand, languages, translations } from './translations'
import { getLanguage, saveLanguage } from './language'
import './App.css'

function App() {
  const [language, setLanguage] = useState(getLanguage)
  const text = translations[language]

  useEffect(() => {
    document.documentElement.lang = languages.find((item) => item.code === language)!.html
    document.title = `${text.status} | ${brand}`
  }, [language, text.status])

  function changeLanguage(event: ChangeEvent<HTMLSelectElement>) {
    const selected = languages.find((item) => item.code === event.target.value)
    if (!selected) return
    setLanguage(selected.code)
    saveLanguage(selected.code)
  }

  function refreshPage() {
    window.location.reload()
  }

  return (
    <div className="maintenance-page">
      <header className="header">
        <span className="brand"><img src="/favicon.ico" width="28" height="28" alt="" />{brand}</span>
        <label className="language-picker">
          <span>{text.language}</span>
          <select value={language} onChange={changeLanguage}>
            {languages.map((item) => <option key={item.code} value={item.code} lang={item.html}>{item.label}</option>)}
          </select>
        </label>
      </header>
      <main className="maintenance" id="main">
        <div className="visual" aria-hidden="true">
          <span className="error-code">503</span>
          <svg className="database" viewBox="0 0 100 110" fill="none">
            <ellipse cx="50" cy="22" rx="32" ry="13" />
            <path d="M18 22v56c0 7 14 13 32 13s32-6 32-13V22M18 49c0 7 14 13 32 13s32-6 32-13" />
            <path d="m41 75 9 9 9-9M50 66v18" />
          </svg>
        </div>
        <div className="status"><span className="status-dot" />{text.status}</div>
        <h1>{text.title}</h1>
        <p className="description">{text.description}</p>
        <section className="downtime" aria-label={text.estimate}>
          <div className="downtime-heading"><span>{text.estimate}</span><strong>{text.duration}</strong></div>
          <p>{text.note}</p>
        </section>
        <button className="refresh" type="button" onClick={refreshPage}>
          <span aria-hidden="true">↻</span>{text.refresh}
        </button>
        <p className="thanks">{text.thanks}</p>
      </main>
      <footer><span>{brand}</span><span>{text.footer} · 503</span></footer>
    </div>
  )
}

export default App
