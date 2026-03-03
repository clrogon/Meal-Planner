import { MEAL_ICONS } from '../data.js'

export default function WeeklyView({ week, onDayClick }) {
  return (
    <div style={{
      padding: '20px 32px 40px',
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 1fr)',
      gap: 10
    }}>
      {week.days.map((d, i) => (
        <div
          key={i}
          onClick={() => onDayClick(i)}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(200,134,10,0.2)',
            borderRadius: 12, padding: '14px 10px',
            cursor: 'pointer', transition: 'all 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,134,10,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
        >
          <div style={{
            fontSize: 11, letterSpacing: 2, color: '#c8860a',
            fontFamily: 'sans-serif', fontWeight: 700, textTransform: 'uppercase', marginBottom: 8
          }}>
            {d.short}
          </div>
          {['snack', 'soup', 'lunch', 'dinner'].map(m => d[m].adults !== '—' && (
            <div key={m} style={{ marginBottom: 4 }}>
              <span style={{ color: '#c8860a' }}>{MEAL_ICONS[m]}</span>{' '}
              <span style={{ fontSize: 11, color: '#b0c0d0', fontFamily: 'sans-serif', lineHeight: 1.4 }}>
                {d[m].adults.length > 38 ? d[m].adults.slice(0, 38) + '…' : d[m].adults}
              </span>
            </div>
          ))}
          <div style={{
            fontSize: 10, color: '#5a7a9a', fontFamily: 'sans-serif',
            borderTop: '1px solid rgba(200,134,10,0.15)', paddingTop: 6, marginTop: 6
          }}>
            Ver detalhes →
          </div>
        </div>
      ))}
    </div>
  )
}
