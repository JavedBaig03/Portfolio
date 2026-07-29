import Threads from './Threads'
import { HiCode, HiCube, HiServer } from 'react-icons/hi'

const Expertise = () => {
  return (
    <div className="expertise-wrapper">
      <div className="expertise-bg" aria-hidden="true">
        <Threads color={[0.44, 0.47, 0.47]} amplitude={0.8} distance={0.3} enableMouseInteraction />
      </div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="features">
          <h2 className="section-title features__title">Areas of Expertise</h2>
          <p className="features__subtitle">Core domains where I deliver measurable impact</p>

          <div className="features__grid">
            <div className="feature-card">
              <div className="feature-card__icon"><HiCode /></div>
              <h3 className="feature-card__title">Frontend Engineering</h3>
              <p className="feature-card__description">
                Building responsive, performant interfaces with component-driven architecture and optimized rendering pipelines.
              </p>
              <div className="feature-card__tags">
                <span className="feature-card__tag">React</span>
                <span className="feature-card__tag">JavaScript</span>
                <span className="feature-card__tag">Tailwind CSS</span>
                <span className="feature-card__tag">Responsive Design</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><HiCube /></div>
              <h3 className="feature-card__title">3D & Interactive Systems</h3>
              <p className="feature-card__description">
                Creating immersive real-time environments with custom physics engines, dynamic lighting, and optimized asset pipelines.
              </p>
              <div className="feature-card__tags">
                <span className="feature-card__tag">Unity</span>
                <span className="feature-card__tag">C#</span>
                <span className="feature-card__tag">Blender</span>
                <span className="feature-card__tag">3D Modeling</span>
                <span className="feature-card__tag">Optimization</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><HiServer /></div>
              <h3 className="feature-card__title">Backend & API Development</h3>
              <p className="feature-card__description">
                Architecting RESTful services with secure authentication, efficient database queries, and scalable data models.
              </p>
              <div className="feature-card__tags">
                <span className="feature-card__tag">Spring Boot</span>
                <span className="feature-card__tag">REST APIs</span>
                <span className="feature-card__tag">Node.js</span>
                <span className="feature-card__tag">System Design</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise
