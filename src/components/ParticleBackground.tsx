import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Particles = ({ count = 5000 }) => {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate spiral/galactic particle positions and colors
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)
    
    const colorChoices = [
      new THREE.Color('#333333'), // Dark gray
      new THREE.Color('#000000'), // Black
      new THREE.Color('#e04836'), // Subtle Red/Orange
      new THREE.Color('#388cfcfc'), // Subtle Blue
      new THREE.Color('#f0ba2d'), // Subtle Yellow
    ]

    for (let i = 0; i < count; i++) {
      // Golden ratio spiral for a galaxy-like distribution
      const r = Math.pow(Math.random(), 0.8) * 8
      const theta = r * 8 + Math.random() * 0.5
      
      pos[i * 3 + 0] = r * Math.cos(theta)
      pos[i * 3 + 1] = (Math.random() - 0.5) * 1.5 // thin depth
      pos[i * 3 + 2] = r * Math.sin(theta)

      // Mix colors: 70% chance of being greyscale, 30% chance for color
      const isColored = Math.random() > 0.7
      const color = isColored 
        ? colorChoices[Math.floor(Math.random() * (colorChoices.length - 2)) + 2] 
        : colorChoices[Math.floor(Math.random() * 2)]

      cols[i * 3 + 0] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }
    return { positions: pos, colors: cols }
  }, [count])

  // Animate the particles
  useFrame((state) => {
    if (pointsRef.current) {
      // Slowly rotate the entire system
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
      
      // Slight interactive tilt based on mouse position
      const mouseX = (state.pointer.x * Math.PI) / 10
      const mouseY = (state.pointer.y * Math.PI) / 10
      
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, mouseY * 0.5 + 0.2, 0.05)
      pointsRef.current.rotation.z = THREE.MathUtils.lerp(pointsRef.current.rotation.z, -mouseX * 0.2, 0.05)
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export default function ParticleBackground({ className }: { className?: string }) {
  return (
    <div className={className} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas camera={{ position: [0, 4, 10], fov: 60 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <Particles count={7000} />
      </Canvas>
    </div>
  )
}
