import { projects } from '../data/profile'
import styles from './Work.module.css'

const Work = () => {
  return (
    <section id="work" className={styles.section}>
      <div className="section__header">
        <h2 className="section__title">Selected Work</h2>
      </div>

      <div className="grid grid--2">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="card"
            data-animate="fade-in"
            data-delay={index + 1}
          >
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.tag}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work
