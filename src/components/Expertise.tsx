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
          <h2 className="section-title features__title">What I Focus On</h2>
          <p className="features__subtitle">Core areas where I deliver impact</p>

          <div className="features__grid">
            <div className="feature-card">
              <div className="feature-card__icon"><HiCode /></div>
              <h3 className="feature-card__title">Modern Web Interfaces</h3>
              <p className="feature-card__description">
                Building responsive, interactive web applications with a strong focus on usability, performance, and clean UI design.
              </p>
              <div className="feature-card__tags">
                <span className="feature-card__tag">React</span>
                <span className="feature-card__tag">JavaScript</span>
                <span className="feature-card__tag">Tailwind</span>
                <span className="feature-card__tag">Responsive Design</span>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card__icon"><HiCube /></div>
              <h3 className="feature-card__title">Interactive 3D Experiences</h3>
              <p className="feature-card__description">
                Creating immersive 3D environments and interactive experiences using Unity and Blender, combining logic with creativity.
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
              <h3 className="feature-card__title">Backend & Core Foundations</h3>
              <p className="feature-card__description">
                Exploring backend development and strengthening my fundamentals in data structures, APIs, and system logic step by step.
              </p>
              <div className="feature-card__tags">
                <span className="feature-card__tag">Node.js</span>
                <span className="feature-card__tag">REST APIs</span>
                <span className="feature-card__tag">DSA</span>
                <span className="feature-card__tag">Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expertise
