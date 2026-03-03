import { ComponentType, CSSProperties } from 'react'

interface MasonryItem {
  id: number | string
  img: string
  height: number
  url?: string
  [key: string]: any
}

interface MasonryProps {
  items: MasonryItem[]
  ease?: string
  duration?: number
  stagger?: number
  animateFrom?: 'left' | 'right' | 'top' | 'bottom' | 'random'
  scaleOnHover?: boolean
  hoverScale?: number
  blurToFocus?: boolean
  className?: string
  style?: CSSProperties
  [key: string]: any
}

declare const Masonry: ComponentType<MasonryProps>
export default Masonry
