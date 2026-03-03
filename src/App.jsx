import { useState } from 'react'
import { WEEKS, NUTRITION_TIPS } from './data.js'
import Header from './components/Header.jsx'
import WeeklyView from './components/WeeklyView.jsx'
import DailyView from './components/DailyView.jsx'

export default function App() {
  const [activeWeek, setActiveWeek] = useState(0)
  const [dayIndex, setDayIndex] = useState(null)
  const [visible, setVisible] = useState({ mavita: true, claudio: true })
  const [showChild, setShowChild] = useState(true)

  const week = WEEKS[activeWeek]
  const isDaily = dayIndex !== null

  function openDay(i) { setDayIndex(i) }
  function closeDay() { setDayIndex(null) }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a1628 0%, #1a2d4a 50%, #0d2238 100%)',
      fontFamily: "'Georgia', serif",
      color: '#e8d5b0'
    }}>
      <Header visible={visible} setVisible={setVisible} showChild={showChild} setShowChild={setShowChild} />

      {/* Nutrition Tips Ticker */}
      <div style={{
        background: 'rgba(200,134,10,0.10)',
        borderBottom: '1px solid rgba(200,134,10,0.25)',
        padding: '9px 32px',
        fontSize: 12, color: '#c8a060',
        fontFamily: 'sans-serif',
        overflowX: 'auto', whiteSpace: 'nowrap'
      }}>
        {NUTRITION_TIPS.map((tip, i) => (
          <span key={i} style={{ marginRight: 48 }}>{tip}</span>
        ))}
      </div>

      {/* Week Selector */}
      <div style={{ padding: '18px 32px 0', display: 'flex', gap: 10, alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: '#8a9bb0', fontFamily: 'sans-serif', marginRight: 8, letterSpacing: 3 }}>SEMANA</span>
        {WEEKS.map((w, i) => (
          <button key={w.id} onClick={() => { setActiveWeek(i); setDayIndex(null) }} style={{
            width: 42, height: 42, borderRadius: '50%',
            border: `2px solid ${activeWeek === i ? '#c8860a' : 'rgba(200,134,10,0.3)'}`,
            background: activeWeek === i ? '#c8860a' : 'transparent',
            color: activeWeek === i ? '#0a1628' : '#c8a060',
            fontWeight: 700, fontSize: 16, cursor: 'pointer', transition: 'all 0.2s'
          }}>{w.id}</button>
        ))}
        {isDaily && (
          <button onClick={closeDay} style={{
            marginLeft: 'auto', padding: '8px 20px', borderRadius: 20,
            border: '1px solid rgba(200,134,10,0.5)', background: 'transparent',
            color: '#c8a060', cursor: 'pointer', fontFamily: 'sans-serif', fontSize: 13
          }}>← Vista Semanal</button>
        )}
      </div>

      {/* Views */}
      {!isDaily
        ? <WeeklyView week={week} onDayClick={openDay} />
        : <DailyView week={week} dayIndex={dayIndex} setDayIndex={setDayIndex} visible={visible} showChild={showChild} />
      }

      {/* Footer */}
      <div style={{
        borderTop: '1px solid rgba(200,134,10,0.2)',
        padding: '14px 32px',
        display: 'flex', gap: 24, flexWrap: 'wrap',
        fontSize: 12, color: '#5a7a90', fontFamily: 'sans-serif'
      }}>
        <span>👩🏾 Mavita · 👨🏾 Cláudio — porções de adulto, temperos completos</span>
        <span>🧒🏾 Nayane (8 anos) — porções adaptadas, menos sal/pimenta/fritura</span>
        <span>⚡ Calorias estimadas · ✦ Nutrientes-chave</span>
      </div>
    </div>
  )
}
