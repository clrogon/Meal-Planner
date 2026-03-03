import { ADULTS, CHILD, MEAL_TYPES, MEAL_LABELS, MEAL_ICONS } from '../data.js'

function MealCard({ meal, mealType, visible, showChild }) {
  const visibleAdults = ADULTS.filter(a => visible[a.key])
  const cols = visibleAdults.length + (showChild ? 1 : 0)
  if (!meal || (meal.adults === '—' && meal.child === '—')) return null

  return (
    <div style={{
      background: 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(200,134,10,0.2)',
      borderRadius: 16, overflow: 'hidden'
    }}>
      <div style={{
        background: 'rgba(200,134,10,0.15)',
        padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 12
      }}>
        <span style={{ fontSize: 20 }}>{MEAL_ICONS[mealType]}</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#e8a020', fontFamily: 'sans-serif', letterSpacing: 1 }}>
          {MEAL_LABELS[mealType].toUpperCase()}
        </span>
        {meal.note && (
          <span style={{ marginLeft: 'auto', fontSize: 11, color: '#6a9ab5', fontFamily: 'sans-serif', fontStyle: 'italic' }}>
            {meal.note}
          </span>
        )}
      </div>

      <div style={{
        padding: '16px 20px',
        display: 'grid',
        gridTemplateColumns: `repeat(${cols || 1}, 1fr)`,
        gap: 14
      }}>
        {visibleAdults.map(a => (
          <div key={a.key} style={{
            background: a.bg, borderRadius: 10,
            padding: '14px 16px', borderLeft: `3px solid ${a.border}`
          }}>
            <div style={{ fontSize: 11, color: a.color, fontFamily: 'sans-serif', letterSpacing: 2, marginBottom: 8 }}>
              {a.emoji} {a.label.toUpperCase()} · {a.role}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: '#d0e0f0' }}>{meal.adults}</div>
            {meal.cal_adults && meal.cal_adults !== '—' && (
              <div style={{ marginTop: 10, fontSize: 12, color: a.color, fontFamily: 'sans-serif' }}>
                ⚡ {meal.cal_adults}
              </div>
            )}
          </div>
        ))}

        {showChild && (
          <div style={{
            background: CHILD.bg, borderRadius: 10,
            padding: '14px 16px', borderLeft: `3px solid ${CHILD.border}`
          }}>
            <div style={{ fontSize: 11, color: CHILD.color, fontFamily: 'sans-serif', letterSpacing: 2, marginBottom: 8 }}>
              {CHILD.emoji} {CHILD.label.toUpperCase()} · {CHILD.role}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: '#f0d0a0' }}>{meal.child}</div>
            {meal.cal_child && meal.cal_child !== '—' && (
              <div style={{ marginTop: 10, fontSize: 12, color: CHILD.color, fontFamily: 'sans-serif' }}>
                ⚡ {meal.cal_child}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function DailySummary({ day, visible, showChild }) {
  const getNum = (str) => parseInt((str || '0').replace(/[^0-9]/g, '')) || 0
  const adultTotal = getNum(day.lunch?.cal_adults) + getNum(day.dinner?.cal_adults) + 400
  const childTotal = getNum(day.lunch?.cal_child) + getNum(day.dinner?.cal_child) + 300

  return (
    <div style={{
      marginTop: 20,
      background: 'rgba(200,134,10,0.08)',
      border: '1px solid rgba(200,134,10,0.2)',
      borderRadius: 12, padding: '16px 20px',
      display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start'
    }}>
      {ADULTS.filter(a => visible[a.key]).map(a => (
        <div key={a.key}>
          <div style={{ fontSize: 11, color: a.color, fontFamily: 'sans-serif', letterSpacing: 2, marginBottom: 4 }}>
            {a.emoji} {a.label.toUpperCase()}
          </div>
          <div style={{ fontSize: 20, color: a.color, fontWeight: 700 }}>{adultTotal} kcal/dia</div>
          <div style={{ fontSize: 11, color: '#6a8090', fontFamily: 'sans-serif' }}>est. com lanches e sopas</div>
        </div>
      ))}
      {showChild && (
        <div>
          <div style={{ fontSize: 11, color: CHILD.color, fontFamily: 'sans-serif', letterSpacing: 2, marginBottom: 4 }}>
            {CHILD.emoji} {CHILD.label.toUpperCase()}
          </div>
          <div style={{ fontSize: 20, color: CHILD.color, fontWeight: 700 }}>{childTotal} kcal/dia</div>
          <div style={{ fontSize: 11, color: '#6a8090', fontFamily: 'sans-serif' }}>est. com lanches e sopas</div>
        </div>
      )}
      <div style={{ marginLeft: 'auto' }}>
        <div style={{ fontSize: 11, color: '#8aabb0', fontFamily: 'sans-serif', letterSpacing: 2, marginBottom: 6 }}>OBJETIVO DIÁRIO</div>
        <div style={{ fontSize: 12, color: '#6a9ab5', fontFamily: 'sans-serif', lineHeight: 2 }}>
          👩🏾 Mavita: 1500–1800 kcal<br />
          👨🏾 Cláudio: 1800–2100 kcal<br />
          🧒🏾 Nayane: 1400–1600 kcal
        </div>
      </div>
    </div>
  )
}

export default function DailyView({ week, dayIndex, setDayIndex, visible, showChild }) {
  const day = week.days[dayIndex]

  return (
    <div style={{ padding: '24px 32px 40px' }}>
      <h2 style={{ fontSize: 26, color: '#c8860a', marginBottom: 20, fontWeight: 400 }}>
        {day.day} — Semana {week.id}
      </h2>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
        {week.days.map((d, i) => (
          <button key={i} onClick={() => setDayIndex(i)} style={{
            padding: '6px 14px', borderRadius: 20, border: '1px solid',
            borderColor: dayIndex === i ? '#c8860a' : 'rgba(200,134,10,0.25)',
            background: dayIndex === i ? 'rgba(200,134,10,0.2)' : 'transparent',
            color: dayIndex === i ? '#e8a020' : '#7a9ab0',
            cursor: 'pointer', fontFamily: 'sans-serif', fontSize: 12
          }}>
            {d.short}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        {MEAL_TYPES.map(m => (
          <MealCard key={m} meal={day[m]} mealType={m} visible={visible} showChild={showChild} />
        ))}
      </div>

      <DailySummary day={day} visible={visible} showChild={showChild} />
    </div>
  )
}
