import { ADULTS, CHILD } from '../data.js'

export default function Header({ visible, setVisible, showChild, setShowChild }) {
  return (
    <div style={{
      background: 'linear-gradient(90deg, #c8860a, #e8a020, #c8860a)',
      padding: '20px 32px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12,
      boxShadow: '0 4px 24px rgba(200,134,10,0.4)'
    }}>
      <div>
        <div style={{ fontSize: 11, letterSpacing: 4, color: '#0a1628', fontFamily: 'sans-serif', fontWeight: 700, textTransform: 'uppercase' }}>
          Ementa Familiar · Janeiro 2026
        </div>
        <div style={{ fontSize: 22, fontWeight: 700, color: '#0a1628', marginTop: 2 }}>
          🍴 Família Gonçalves
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {ADULTS.map(a => (
          <button
            key={a.key}
            onClick={() => setVisible(v => ({ ...v, [a.key]: !v[a.key] }))}
            style={{
              padding: '8px 14px', borderRadius: 20,
              border: `2px solid ${a.color}`, cursor: 'pointer',
              background: visible[a.key] ? a.color : 'transparent',
              color: visible[a.key] ? '#fff' : a.color,
              fontWeight: 700, fontSize: 13, transition: 'all 0.2s'
            }}
          >
            {a.emoji} {a.label}
          </button>
        ))}
        <button
          onClick={() => setShowChild(v => !v)}
          style={{
            padding: '8px 14px', borderRadius: 20,
            border: `2px solid ${CHILD.color}`, cursor: 'pointer',
            background: showChild ? CHILD.color : 'transparent',
            color: showChild ? '#fff' : CHILD.color,
            fontWeight: 700, fontSize: 13, transition: 'all 0.2s'
          }}
        >
          {CHILD.emoji} {CHILD.label}
        </button>
      </div>
    </div>
  )
}
