import PropTypes from 'prop-types'
import { ADULTS, CHILD, MEAL_TYPES, MEAL_LABELS, MEAL_ICONS } from '../data.js'

const CALORIE_SNACK_ADULT = 400
const CALORIE_SNACK_CHILD = 300

function MealCard({ meal, mealType, visible, showChild }) {
  const visibleAdults = ADULTS.filter(a => visible[a.key])
  const cols = visibleAdults.length + (showChild ? 1 : 0)
  if (!meal || (meal.adults === '—' && meal.child === '—')) return null

  return (
    <div className="meal-card">
      <div className="meal-card-header">
        <span className="meal-card-icon">{MEAL_ICONS[mealType]}</span>
        <span className="meal-card-title">
          {MEAL_LABELS[mealType].toUpperCase()}
        </span>
        {meal.note && (
          <span className="meal-card-note">
            {meal.note}
          </span>
        )}
      </div>

      <div className="meal-card-body" style={{
        gridTemplateColumns: `repeat(${cols || 1}, 1fr)`
      }}>
        {visibleAdults.map(a => (
          <div 
            key={a.key} 
            className="person-card"
            style={{ background: a.bg, borderLeftColor: a.border }}
          >
            <div className="person-header" style={{ color: a.color }}>
              {a.emoji} {a.label.toUpperCase()} · {a.role}
            </div>
            <div className="person-meal">{meal.adults}</div>
            {meal.cal_adults && meal.cal_adults !== '—' && (
              <div className="person-cal" style={{ color: a.color }}>
                ⚡ {meal.cal_adults}
              </div>
            )}
          </div>
        ))}

        {showChild && (
          <div 
            className="person-card"
            style={{ background: CHILD.bg, borderLeftColor: CHILD.border }}
          >
            <div className="person-header" style={{ color: CHILD.color }}>
              {CHILD.emoji} {CHILD.label.toUpperCase()} · {CHILD.role}
            </div>
            <div className="person-meal" style={{ color: '#f0d0a0' }}>{meal.child}</div>
            {meal.cal_child && meal.cal_child !== '—' && (
              <div className="person-cal" style={{ color: CHILD.color }}>
                ⚡ {meal.cal_child}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

MealCard.propTypes = {
  meal: PropTypes.shape({
    adults: PropTypes.string,
    child: PropTypes.string,
    cal_adults: PropTypes.string,
    cal_child: PropTypes.string,
    note: PropTypes.string,
  }),
  mealType: PropTypes.string.isRequired,
  visible: PropTypes.shape({}).isRequired,
  showChild: PropTypes.bool.isRequired,
}

function DailySummary({ day, visible, showChild }) {
  const getNum = (str) => parseInt((str || '0').replace(/[^0-9]/g, '')) || 0
  const adultTotal = getNum(day.lunch?.cal_adults) + getNum(day.dinner?.cal_adults) + CALORIE_SNACK_ADULT
  const childTotal = getNum(day.lunch?.cal_child) + getNum(day.dinner?.cal_child) + CALORIE_SNACK_CHILD

  return (
    <div className="daily-summary">
      {ADULTS.filter(a => visible[a.key]).map(a => (
        <div key={a.key} className="summary-person">
          <div className="summary-label" style={{ color: a.color }}>
            {a.emoji} {a.label.toUpperCase()}
          </div>
          <div className="summary-value" style={{ color: a.color }}>{adultTotal} kcal/dia</div>
          <div className="summary-note">est. com lanches e sopas</div>
        </div>
      ))}
      {showChild && (
        <div className="summary-person">
          <div className="summary-label" style={{ color: CHILD.color }}>
            {CHILD.emoji} {CHILD.label.toUpperCase()}
          </div>
          <div className="summary-value" style={{ color: CHILD.color }}>{childTotal} kcal/dia</div>
          <div className="summary-note">est. com lanches e sopas</div>
        </div>
      )}
      <div className="summary-goals">
        <div className="goals-title">OBJETIVO DIÁRIO</div>
        <div className="goals-text">
          👩🏾 Mavita: 1500–1800 kcal<br />
          👨🏾 Cláudio: 1800–2100 kcal<br />
          🧒🏾 Nayane: 1400–1600 kcal
        </div>
      </div>
    </div>
  )
}

DailySummary.propTypes = {
  day: PropTypes.shape({
    lunch: PropTypes.shape({
      cal_adults: PropTypes.string,
      cal_child: PropTypes.string,
    }),
    dinner: PropTypes.shape({
      cal_adults: PropTypes.string,
      cal_child: PropTypes.string,
    }),
  }).isRequired,
  visible: PropTypes.shape({}).isRequired,
  showChild: PropTypes.bool.isRequired,
}

export default function DailyView({ week, dayIndex, setDayIndex, visible, showChild }) {
  const day = week.days[dayIndex]

  return (
    <div className="daily-container" role="region" aria-label="Vista Diária">
      <h2 className="daily-title">
        {day.day} — Semana {week.id}
      </h2>

      <div className="day-tabs" role="tablist" aria-label="Dias da semana">
        {week.days.map((d, i) => (
          <button 
            key={d.short} 
            onClick={() => setDayIndex(i)} 
            className={`day-tab ${dayIndex === i ? 'active' : ''}`}
            role="tab"
            aria-selected={dayIndex === i}
            aria-label={`Ver ${d.day}`}
          >
            {d.short}
          </button>
        ))}
      </div>

      <div className="meal-cards" role="tabpanel">
        {MEAL_TYPES.map(m => (
          <MealCard key={m} meal={day[m]} mealType={m} visible={visible} showChild={showChild} />
        ))}
      </div>

      <DailySummary day={day} visible={visible} showChild={showChild} />
    </div>
  )
}

DailyView.propTypes = {
  week: PropTypes.shape({
    id: PropTypes.number,
    days: PropTypes.array,
  }).isRequired,
  dayIndex: PropTypes.number.isRequired,
  setDayIndex: PropTypes.func.isRequired,
  visible: PropTypes.shape({}).isRequired,
  showChild: PropTypes.bool.isRequired,
}
