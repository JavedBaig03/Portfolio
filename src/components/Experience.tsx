import { HiLightningBolt } from 'react-icons/hi'

const Experience = () => {
  return (
    <div className="container" style={{ margin: '4rem auto' }}>
      <div className="features">
        <h2 className="section-title features__title">Experience / Learning Journey</h2>
        
        <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '800px', margin: '2rem auto 0' }}>
          
          <div className="feature-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem 2rem', width: '100%' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-bg-primary)', background: 'var(--color-text-primary)', padding: '0.75rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <HiLightningBolt />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '0.2rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>Built multiple real-world projects independently</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Full stack development practice</p>
            </div>
          </div>

          <div className="feature-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem 2rem', width: '100%' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-bg-primary)', background: 'var(--color-text-primary)', padding: '0.75rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <HiLightningBolt />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '0.2rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>Practicing DSA regularly</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Core problem solving</p>
            </div>
          </div>

          <div className="feature-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.75rem 2rem', width: '100%' }}>
            <div style={{ fontSize: '1.5rem', color: 'var(--color-bg-primary)', background: 'var(--color-text-primary)', padding: '0.75rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
              <HiLightningBolt />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '0.2rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>Exploring backend and system design concepts</h3>
              <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>Advanced architectural study</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Experience
