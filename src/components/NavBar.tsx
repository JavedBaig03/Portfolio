import { profile } from '../data/profile'

const NavBar = () => {
  return (
    <nav className="nav nav--floating">
      <div className="nav__container">
        <a href="#/" className="nav__brand">
          {profile.name}
        </a>
        <div className="nav__links">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a
            href="/resume.pdf"
            className="nav__cta btn--glass"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
