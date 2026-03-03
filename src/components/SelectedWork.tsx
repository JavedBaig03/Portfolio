import { projects } from '../data/profile'
import { HiExternalLink } from 'react-icons/hi'

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
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    <HiExternalLink />
                  </a>
                )}
              </div>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__stack">
                {project.stack.map((tech) => (
                  <span key={tech} className="project-card__tag">{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectedWork
