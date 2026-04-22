import { projects } from '../data/profile'

const SelectedWork = () => {
  return (
    <div className="container">
      <div className="work-preview">
        <div className="work-preview__content">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A showcase of projects that demonstrate my approach to building modern,
            performant applications. Each project represents careful attention to design,
            user experience, and technical detail.
          </p>
        </div>
        <div className="work-preview__grid">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card" style={{ animationDelay: `${index * 120}ms` }}>
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
              </div>
              
              <div style={{ margin: '1rem 0' }}>
                <p className="project-card__description" style={{ marginBottom: '1rem', fontWeight: 600 }}>
                  Problem: {project.description}
                </p>
                <ul style={{ listStyleType: 'disc', paddingLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
                  {project.bullets.map((bullet, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>{bullet}</li>
                  ))}
                </ul>
              </div>

              <div className="project-card__stack" style={{ marginBottom: '1.5rem' }}>
                {project.stack.map((tech) => (
                  <span key={tech} className="project-card__tag">{tech}</span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn--glass" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem' }}>
                    🔗 Live Demo
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn--glass" style={{ display: 'inline-flex', padding: '0.5rem 1rem', fontSize: '0.85rem', background: 'transparent', color: 'var(--color-text-primary)' }}>
                    💻 GitHub
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectedWork
