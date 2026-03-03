import './App.css'
import ColorBends from './components/ColorBends'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WhatIDo from './components/WhatIDo'
import Expertise from './components/Expertise'
import TechStack from './components/TechStack'
import SelectedWork from './components/SelectedWork'
import Contact from './components/Contact'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import { useEffect, useRef } from 'react'

const App = () => {
  const heroContentRef = useRef<HTMLDivElement>(null)
  const heroWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero scroll fade-out + scale-down effect
    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = heroWrapperRef.current?.offsetHeight || window.innerHeight
      const progress = Math.min(scrollY / heroHeight, 1)

      if (heroContentRef.current) {
        const opacity = 1 - progress * 1.5 // fades out by ~66% scroll
        const scale = 1 - progress * 0.08   // subtle scale from 1 → 0.92
        heroContentRef.current.style.opacity = `${Math.max(opacity, 0)}`
        heroContentRef.current.style.transform = `scale(${Math.max(scale, 0.92)}) translateZ(0)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // init

    // Scroll reveal animation observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    }, observerOptions)

    const whatidoSection = document.querySelector('.whatido')
    const featureCards = document.querySelectorAll('.feature-card')
    const techCards = document.querySelectorAll('.techstack__card')

    if (whatidoSection) observer.observe(whatidoSection)
    featureCards.forEach((card) => observer.observe(card))
    techCards.forEach((card) => observer.observe(card))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="page">
      <div className="page__content">
        <main>
          {/* ===== HERO WRAPPER: Navbar + Hero ===== */}
          <div className="hero-wrapper" ref={heroWrapperRef}>
            <div className="hero__bg" aria-hidden="true">
              <ColorBends
                className="hero__bg"
                colors={["#707070", "#707070", "#707070"]}
                rotation={13}
                speed={0.24}
                scale={1}
                frequency={1}
                warpStrength={1}
                mouseInfluence={1}
                parallax={0.5}
                noise={0.01}
                transparent
                autoRotate={-5}
              />
            </div>

            <NavBar />

            <section id="hero">
              <Hero contentRef={heroContentRef} />
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
