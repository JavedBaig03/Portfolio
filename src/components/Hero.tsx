import type { RefObject } from 'react'

type HeroProps = {
  contentRef?: RefObject<HTMLDivElement | null>
}

const Hero = ({ contentRef }: HeroProps) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content hero__content--spaced" ref={contentRef}>
          <h3 className='hero__greetings'>Full Stack Developer | React • Spring Boot • 3D Experiences</h3>
          <h1 className="hero__title">Engineering Scalable Digital Products</h1>
          <p className="hero__description">
            B.Tech CSE student with hands-on experience in building full-stack apps and interactive 3D systems using React, Spring Boot, and Unity.
          </p>
          <div className="hero__actions">
            <a href="#work" className="hero__cta btn--glass">
              <span>View My Work</span>
              <span>→</span>
            </a>
            <a href="/resume.pdf" download className="hero__cta btn--glass" style={{ background: 'transparent', color: 'var(--color-text-primary)' }}>
              <span>Download Resume</span>
              <span>📄</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero