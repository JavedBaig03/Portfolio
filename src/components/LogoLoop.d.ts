import { ComponentType, ReactNode, CSSProperties } from 'react'

interface LogoLoopProps {
  logos: { node: ReactNode; title: string }[]
  speed?: number
  direction?: 'left' | 'right'
  width?: string | number
  logoHeight?: number
  gap?: number
  pauseOnHover?: boolean
  hoverSpeed?: number
  fadeOut?: boolean
  fadeOutColor?: string
  scaleOnHover?: boolean
  renderItem?: (logo: { node: ReactNode; title: string }, index: number) => ReactNode
  ariaLabel?: string
  className?: string
  style?: CSSProperties
}

export const LogoLoop: ComponentType<LogoLoopProps>
export default LogoLoop
