import { useState } from 'react'
import { ALL_MONTHS } from './data/index.js'
import { ADULTS, CHILD, NUTRITION_TIPS } from './data.js'
import Header from './components/Header.jsx'
import WeeklyView from './components/WeeklyView.jsx'
import DailyView from './components/DailyView.jsx'

export default function App() {
  const [activeMonth, setActiveMonth] = useState(0)
  const [activeWeek, setActiveWeek]   = useState(0)
  const [dayIndex, setDayIndex]       = useState(null)
  const [visible, setVisible]         = useState({ mavita: true, claudio: true })
  const [showChild, setShowChild]     = useState(true)

  const month   = ALL_MONTHS[activeMonth]
  const week    = month.weeks[activeWeek]
  const isDaily = dayIndex !== null

  function selectMonth(i) { setActiveMonth(i); setActiveWeek(0); setDayIndex(null) }
  function selectWeek(i)  { setActiveWeek(i); setDayIndex(null) }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1628 0%, #1a2d4a 50%, #0d2238 100%)',
      fontFamily: "'Georgia', serif",
      color: '#e8d5b0'
    }}>
      <Header visible={visible} setVisible={setVisible} showChild={showChild} setShowChild={setShowChild} />

      {/* Nutrition Tips */}
      <div style={{
        background: 'rgba(200,134,10,0.10)',
        borderBottom: '1px solid rgba(200,134,10,0.25)',
        padding: '9px 32px',
        fontSize: 12, color: '#c8a060', fontFamily: 'sans-serif',
        overflowX: 'auto', whiteSpace: 'nowrap'
      }}>
        {NUTRITION_TIPS.map((tip, i) => <span key={i} style={{ marginRight: 48 }}>{tip}</span>)}
      </div>

      {/* Month Selector */}
      <div style={{
        padding: '14px 32px 12px',
        display: 'flex', gap: 7, flexWrap: 'wrap', alignItems: 'center',
        borderBottom: '1px solid rgba(200,134,10,0.12)'
      }}>
        <span style={{ fontSize: 11, color: '#8a9bb0', fontFamily: 'sans-serif', letterSpacing: 3, marginRight: 6 }}>
          MES
        </span>
        {ALL_MONTHS.map((m, i) => (
          <button key={m.id} onClick={() => selectMonth(i)} style={{
            padding: '5px 13px', borderRadius: 20,
            border: `1px solid ${activeMonth === i ? '#c8860a' : 'rgba(200,134,10,0.25)'}`,
            background: activeMonth === i ? '#c8860a' : 'transparent',
            color: activeMonth === i ? '#0a1628' : '#c8a060',
            fontWeight: activeMonth === i ? 700 : 400,
            fontSize: 12, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'sans-serif'
          }}>{m.short}</button>
        ))}
      </div>

      {/* Week Selector + Month title */}
      <div style={{ padding: '14px 32px 0', display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, color: '#8a9bb0', fontFamily: 'sans-serif', letterSpacing: 3, marginRight: 4 }}>SEMANA</span>
        {month.weeks.map((w, i) => (
          <button key={w.id} onClick={() => selectWeek(i)} style={{
            width: 40, height: 40, borderRadius: '50%',
            border: `2px solid ${activeWeek === i ? '#c8860a' : 'rgba(200,134,10,0.3)'}`,
            background: activeWeek === i ? '#c8860a' : 'transparent',
            color: activeWeek === i ? '#0a1628' : '#c8a060',
            fontWeight: 700, fontSize: 15, cursor: 'pointer', transition: 'all 0.2s'
          }}>{w.id}</button>
        ))}
        <span style={{ marginLeft: 14, fontSize: 20, color: '#c8860a', fontWeight: 400 }}>
          {month.name} 2026
        </span>
        {isDaily && (
          <button onClick={() => setDayIndex(null)} style={{
            marginLeft: 'auto', padding: '8px 20px', borderRadius: 20,
            border: '1px solid rgba(200,134,10,0.5)', background: 'transparent',
            color: '#c8a060', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: 13
          }}>
            Vista Semanal
          </button>
        )}
      </div>

      {/* Views */}
      {!isDaily
        ? <WeeklyView week={week} onDayClick={setDayIndex} />
        : <DailyView  week={week} dayIndex={dayIndex} setDayIndex={setDayIndex} visible={visible} showChild={showChild} />
      }

      {/* Footer */}
      <div style={{
        borderTop: '1px solid rgba(200,134,10,0.2)', padding: '14px 32px',
        display: 'flex', gap: 24, flexWrap: 'wrap',
        fontSize: 12, color: '#5a7a90', fontFamily: 'sans-serif'
      }}>
        <span>Mavita · Claudio — porcoes de adulto, temperos completos</span>
        <span>Nayane (8 anos) — porcoes adaptadas, menos sal/pimenta/fritura</span>
        <span>Calorias estimadas · Nutrientes-chave · 12 meses · 48 semanas</span>
      </div>
    </div>
  )
}
