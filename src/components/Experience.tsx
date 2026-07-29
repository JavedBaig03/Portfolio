import './Experience.css'
import { HiLightningBolt, HiAcademicCap, HiChip } from 'react-icons/hi'

const experiences = [
  {
    icon: <HiLightningBolt />,
    title: 'End-to-end project development',
    subtitle: 'Independently designed, built, and deployed full-stack applications from architecture to production.',
  },
  {
    icon: <HiAcademicCap />,
    title: 'Algorithmic problem solving',
    subtitle: 'Consistent practice in data structures and algorithms, focused on optimization and efficiency.',
  },
  {
    icon: <HiChip />,
    title: 'System architecture & backend design',
    subtitle: 'Studying scalable patterns including microservices, API design, and distributed systems.',
  },
]

const Experience = () => {
  return (
    <div className="experience-wrapper">
      <div className="container">
        <div className="features">
          <h2 className="section-title features__title">Learning & Growth</h2>

          <div className="experience__timeline">
            {experiences.map((exp, index) => (
              <div key={index} className="experience__item">
                <div className="experience__node" />
                <div className="experience__card">
                  <div className="experience__card-icon">
                    {exp.icon}
                  </div>
                  <div className="experience__card-content">
                    <h3 className="experience__card-title">{exp.title}</h3>
                    <p className="experience__card-subtitle">{exp.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
