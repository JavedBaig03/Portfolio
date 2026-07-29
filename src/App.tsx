import './App.css'
import ParticleBackground from './components/ParticleBackground'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Expertise from './components/Expertise'
import TechStack from './components/TechStack'
import SelectedWork from './components/SelectedWork'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Achievements from './components/Achievements'
import Experience from './components/Experience'

const App = () => {
  return (
    <div className="page">
      <div className="page__content">
        <main>
          {/* ===== HERO WRAPPER: Navbar + Hero ===== */}
          <div className="hero-wrapper">
            <div className="hero__bg" aria-hidden="true">
              <ParticleBackground className="hero__bg" />
            </div>

            <NavBar />

            <section id="hero">
              <Hero />
            </section>
          </div>

          {/* ===== SECTIONS OVERLAY: slides up over hero ===== */}
          <div className="sections-overlay">
            <section id="about">
              <WhatIDo />
            </section>

            <section id="expertise">
              <Expertise />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="achievements">
              <Achievements />
            </section>

            <section id="work">
              <SelectedWork />
            </section>

            <section id="gallery">
              <Gallery />
            </section>

            <section id="skills">
              <TechStack />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default App
