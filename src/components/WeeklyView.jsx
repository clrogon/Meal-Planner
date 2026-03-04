import PropTypes from 'prop-types'
import { MEAL_ICONS } from '../data.js'

export default function WeeklyView({ week, onDayClick }) {
  const handleKeyDown = (e, i) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onDayClick(i)
    }
  }

  return (
    <div className="weekly-grid" role="grid" aria-label="Vista Semanal">
      {week.days.map((d, i) => (
        <div
          key={d.short}
          className="day-card"
          onClick={() => onDayClick(i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          role="gridcell"
          tabIndex={0}
          aria-label={`${d.day}, clique para ver detalhes`}
        >
          <div className="day-card-header">
            {d.short}
          </div>
          {['snack', 'soup', 'lunch', 'dinner'].map(m => d[m]?.adults !== '—' && (
            <div key={m} className="meal-item">
              <span className="meal-icon">{MEAL_ICONS[m]}</span>{' '}
              <span className="meal-text">
                {d[m].adults.length > 38 ? d[m].adults.slice(0, 38) + '…' : d[m].adults}
              </span>
            </div>
          ))}
          <div className="view-details">
            Ver detalhes →
          </div>
        </div>
      ))}
    </div>
  )
}

WeeklyView.propTypes = {
  week: PropTypes.shape({
    id: PropTypes.number,
    days: PropTypes.arrayOf(PropTypes.shape({
      day: PropTypes.string,
      short: PropTypes.string,
    }))
  }).isRequired,
  onDayClick: PropTypes.func.isRequired,
}
