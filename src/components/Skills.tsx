import { skillGroups } from '../data/profile'
import styles from './Skills.module.css'

const Skills = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className="section__header">
        <h2 className="section__title">Skills</h2>
      </div>

      <div className={styles.grid}>
        {skillGroups.map((group, index) => (
          <div
            key={group.category}
            className={styles.group}
            data-animate="fade-in"
            data-delay={index + 1}
          >
            <h3 className={styles.category}>{group.category}</h3>
            <div className={styles.skills}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
