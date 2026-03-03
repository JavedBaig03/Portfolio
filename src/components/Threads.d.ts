import { ComponentType, CSSProperties } from 'react'

interface ThreadsProps {
  className?: string
  style?: CSSProperties
  [key: string]: any
}

declare const Threads: ComponentType<ThreadsProps>
export default Threads
