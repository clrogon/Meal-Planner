import { useState } from 'react'
import PropTypes from 'prop-types'
import { ALL_MONTHS } from './data/index.js'
import { NUTRITION_TIPS } from './data.js'
import Header from './components/Header.jsx'
import WeeklyView from './components/WeeklyView.jsx'
import DailyView from './components/DailyView.jsx'

export default function App() {
  const [activeMonth, setActiveMonth] = useState(0)
  const [activeWeek, setActiveWeek]   = useState(0)
  const [dayIndex, setDayIndex]       = useState(null)
  const [visible, setVisible]         = useState({ mavita: true, claudio: true })
  const [showChild, setShowChild]     = useState(true)

  const month   = ALL_MONTHS[activeMonth] || ALL_MONTHS[0]
  const week    = month?.weeks[activeWeek] || month?.weeks[0]
  const isDaily = dayIndex !== null

  function selectMonth(i) { 
    const newMonth = ALL_MONTHS[i] || ALL_MONTHS[0]
    setActiveMonth(i); 
    setActiveWeek(0); 
    setDayIndex(null) 
  }
  function selectWeek(i)  { 
    setActiveWeek(i); 
    setDayIndex(null) 
  }

  return (
    <div className="app-container" role="main" aria-label="Planeador de Refeições">
      <Header visible={visible} setVisible={setVisible} showChild={showChild} setShowChild={setShowChild} />

      <nav className="nutrition-tips" aria-label="Dicas de Nutrição">
        {NUTRITION_TIPS.map((tip) => <span key={tip} className="nutrition-tip">{tip}</span>)}
      </nav>

      <nav className="month-selector" aria-label="Selecionar Mês">
        <span className="month-label">MES</span>
        {ALL_MONTHS.map((m, i) => (
          <button 
            key={m.id} 
            onClick={() => selectMonth(i)} 
            className={`month-btn ${activeMonth === i ? 'active' : ''}`}
            aria-pressed={activeMonth === i}
            aria-label={`Ver ${m.name}`}
          >
            {m.short}
          </button>
        ))}
      </nav>

      <nav className="week-selector" aria-label="Selecionar Semana">
        <span className="week-label">SEMANA</span>
        {month?.weeks.map((w, i) => (
          <button 
            key={w.id} 
            onClick={() => selectWeek(i)} 
            className={`week-btn ${activeWeek === i ? 'active' : ''}`}
            aria-pressed={activeWeek === i}
            aria-label={`Semana ${w.id}`}
          >
            {w.id}
          </button>
        ))}
        <span className="month-title">{month?.name} 2026</span>
        {isDaily && (
          <button 
            onClick={() => setDayIndex(null)} 
            className="back-btn"
            aria-label="Voltar para vista semanal"
          >
            Vista Semanal
          </button>
        )}
      </nav>

      {week && (
        !isDaily
          ? <WeeklyView week={week} onDayClick={setDayIndex} />
          : <DailyView week={week} dayIndex={dayIndex} setDayIndex={setDayIndex} visible={visible} showChild={showChild} />
      )}

      <footer className="footer" role="contentinfo">
        <span>Mavita · Claudio — porcoes de adulto, temperos completos</span>
        <span>Nayane (8 anos) — porcoes adaptadas, menos sal/pimenta/fritura</span>
        <span>Calorias estimadas · Nutrientes-chave · 12 meses · 48 semanas</span>
      </footer>
    </div>
  )
}

App.propTypes = {
  activeMonth: PropTypes.number,
  activeWeek: PropTypes.number,
}
