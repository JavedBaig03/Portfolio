import { about } from '../data/profile'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title} data-animate="fade-in">
          About
        </h2>
        <p className={styles.text} data-animate="fade-in" data-delay="1">
          {about}
        </p>
      </div>
    </section>
  )
}

export default About
