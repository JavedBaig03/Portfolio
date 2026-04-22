import { HiBadgeCheck } from 'react-icons/hi'

const certs = [
  { title: 'Salesforce Certified AI Associate', subtitle: 'Public Certification', link: '/Certifications/Cert5121446_AIAssociate_20241024.pdf' },
  { title: 'Oracle Certification', subtitle: 'Cloud & Database', link: '/Certifications/Oracle.pdf' },
  { title: 'MongoDB Certification', subtitle: 'Database Management', link: '/Certifications/javed-ahmed-baig-certificate-MongoDB.pdf' },
  { title: 'Unity Certification', subtitle: '3D Game Development', link: '/Certifications/Unity.pdf' },
  { title: 'MultiCloud Network', subtitle: 'Networking Concept', link: '/Certifications/MultiCloudNetwork.newlogo20251015-32-q5cabv.pdf' },
  { title: 'Automation', subtitle: 'Process Automation', link: '/Certifications/Automation.pdf' },
  { title: 'Cambridge Linguaskill', subtitle: 'Language Proficiency', link: '/Certifications/Linguaskill .pdf' },
  { title: 'Active learner in DSA and system design', subtitle: 'Continuous technical growth', link: null },
];

const featuredCerts = certs.slice(0, 4)
const moreCerts = certs.slice(4)

const Achievements = () => {
  return (
    <div className="container">
      <div className="features">
        <h2 className="section-title features__title">Achievements / Certifications</h2>

        <p className="features__subtitle achievements__subtitle">
          A tighter snapshot of the certifications I want to foreground. The rest are grouped below so this section stays scannable.
        </p>

        <div className="achievements__grid">
          {featuredCerts.map((cert, index) => {
            const content = (
              <>
                <div style={{ fontSize: '1.5rem', color: 'var(--color-bg-primary)', background: 'var(--color-text-primary)', padding: '0.75rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)' }}>
                  <HiBadgeCheck />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '0.2rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>{cert.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{cert.subtitle}</p>
                </div>
              </>
            );

            const commonStyle = { display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem 1.75rem', width: '100%', textDecoration: 'none' };

            return cert.link ? (
              <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className="feature-card achievements__card" style={commonStyle}>
                {content}
              </a>
            ) : (
              <div key={index} className="feature-card achievements__card" style={commonStyle}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="feature-card achievements__more" style={{ padding: '1.25rem 1.5rem', marginTop: '1.5rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text-primary)', textAlign: 'left' }}>
            More certifications and learning focus
          </h3>
          <div className="achievements__chips">
            {moreCerts.map((cert) => (
              <span key={cert.title} className="achievements__chip">
                {cert.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements
