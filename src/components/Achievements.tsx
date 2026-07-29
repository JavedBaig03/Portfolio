import './Achievements.css'
import { HiBadgeCheck } from 'react-icons/hi'

const certs = [
  { title: 'Salesforce Certified AI Associate', subtitle: 'Artificial Intelligence', link: '/Certifications/Cert5121446_AIAssociate_20241024.pdf', featured: true },
  { title: 'Oracle Cloud Certification', subtitle: 'Cloud Infrastructure & Database', link: '/Certifications/Oracle.pdf', featured: true },
  { title: 'MongoDB Developer Certification', subtitle: 'NoSQL Database Management', link: '/Certifications/javed-ahmed-baig-certificate-MongoDB.pdf', featured: true },
  { title: 'Unity Game Development', subtitle: 'Real-Time 3D Development', link: '/Certifications/Unity.pdf', featured: true },
  { title: 'MultiCloud Networking', subtitle: 'Cloud Architecture', link: '/Certifications/MultiCloudNetwork.newlogo20251015-32-q5cabv.pdf', featured: false },
  { title: 'Process Automation', subtitle: 'Workflow Automation', link: '/Certifications/Automation.pdf', featured: false },
  { title: 'Cambridge Linguaskill', subtitle: 'English Proficiency', link: '/Certifications/Linguaskill .pdf', featured: false },
  { title: 'DSA & System Design', subtitle: 'Ongoing Technical Development', link: null, featured: false },
];

const featuredCerts = certs.filter(c => c.featured)
const moreCerts = certs.filter(c => !c.featured)

const Achievements = () => {
  return (
    <div className="achievements-wrapper">
      <div className="container">
        <div className="features">
          <h2 className="section-title features__title">Certifications & Credentials</h2>

          <p className="features__subtitle achievements__subtitle">
            Industry-recognized certifications that validate my technical expertise. Featured credentials are highlighted below, with additional qualifications grouped for reference.
          </p>

          <div className="achievements__grid">
            {featuredCerts.map((cert, index) => {
              const content = (
                <>
                  {cert.featured && (
                    <span className="achievements__featured-badge">Verified</span>
                  )}
                  <div style={{ fontSize: '1.5rem', color: 'var(--color-bg-primary)', background: 'var(--color-text-primary)', padding: '0.75rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)' }}>
                    <HiBadgeCheck />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', paddingTop: '0.2rem' }}>
                    <h3 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>{cert.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--color-text-secondary)', fontWeight: 500 }}>{cert.subtitle}</p>
                  </div>
                </>
              );

              const commonStyle: React.CSSProperties = { display: 'flex', alignItems: 'flex-start', gap: '1.25rem', padding: '1.5rem 1.75rem', width: '100%', textDecoration: 'none' };

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
              Additional Qualifications
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
    </div>
  )
}

export default Achievements
