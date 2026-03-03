import type { RefObject } from 'react'

type HeroProps = {
  contentRef?: RefObject<HTMLDivElement | null>
}

const Hero = ({ contentRef }: HeroProps) => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content hero__content--spaced" ref={contentRef}>
          <h3 className='hero__greetings'>Greetings, I'm Javed Ahmed Baig —</h3>
          <h1 className="hero__title">Engineering Scalable Digital Products</h1>
          <p className="hero__description">
            Full-stack engineer building systems that scale. From React frontends to Spring Boot
            backends, every line of code is crafted for performance, clarity, and user delight.
          </p>
          <a href="#work" className="hero__cta btn--glass">
            <span>View My Work</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero