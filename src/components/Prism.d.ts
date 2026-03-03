import { ComponentType, CSSProperties } from 'react'

interface PrismProps {
  className?: string
  style?: CSSProperties
  noise?: number
  glow?: number
  bloom?: number
  timeScale?: number
  suspendWhenOffscreen?: boolean
  [key: string]: any
}

declare const Prism: ComponentType<PrismProps>
export default Prism
