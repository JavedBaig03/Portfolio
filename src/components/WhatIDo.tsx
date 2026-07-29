import './WhatIDo.css'
import TrueFocus from './TrueFocus.jsx'

type FloatingPathsProps = {
  position: number
}

const FloatingPaths = ({ position }: FloatingPathsProps) => {
  const paths = Array.from({ length: 36 }, (_, index) => ({
    id: index,
    d: `M-${380 - index * 5 * position} -${189 + index * 6}C-${
      380 - index * 5 * position
    } -${189 + index * 6} -${312 - index * 5 * position} ${216 - index * 6} ${
      152 - index * 5 * position
    } ${343 - index * 6}C${616 - index * 5 * position} ${470 - index * 6} ${
      684 - index * 5 * position
    } ${875 - index * 6} ${684 - index * 5 * position} ${875 - index * 6}`,
  }))

  return (
    <div
      className={`whatido__paths ${position > 0 ? 'whatido__paths--left' : 'whatido__paths--right'}`}
      aria-hidden="true"
    >
      <svg className="whatido__paths-svg" viewBox="0 0 696 316" fill="none" preserveAspectRatio="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            className="whatido__path"
            style={{
              animationDelay: `${path.id * 0.12}s`,
              ['--path-opacity' as string]: `${0.12 + path.id * 0.003}`,
              ['--path-width' as string]: `${0.55 + path.id * 0.025}`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

const WhatIDo = () => {
  return (
    <section className="whatido-page">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div className="container whatido-page__content">
        <div className="whatido-page__copy">
          <h1 className="whatido-page__eyebrow">What I Do</h1>
          <div className="whatido-page__focus" aria-label="Crafting refined scalable digital products">
            <TrueFocus
              sentence="Crafting refined scalable digital products"
              manualMode={true}
              blurAmount={6}
              borderColor="rgba(15, 23, 42, 0.7)"
              glowColor="rgba(15, 23, 42, 0.2)"
              animationDuration={0.55}
              pauseBetweenAnimations={1.1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
