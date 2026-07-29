const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__content hero__content--spaced">
          <h3 className='hero__greetings'>Full-Stack Developer · React · Flutter · Spring Boot · Firebase</h3>
          <h1 className="hero__title">Engineering Scalable Digital Products</h1>
          <p className="hero__description">
            Product-focused engineer specializing in full-stack web applications, cross-platform mobile apps, and interactive 3D experiences. Driven by clean architecture, performance, and thoughtful design.
          </p>
          <div className="hero__actions">
            <a href="#work" className="hero__cta btn--glass">
              <span>View Projects</span>
              <span>→</span>
            </a>
            <a href="/resume.pdf" download className="hero__cta btn--glass" style={{ background: 'transparent', color: 'var(--color-text-primary)' }}>
              <span>Download Resume</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero