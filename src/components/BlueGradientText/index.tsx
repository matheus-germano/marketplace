import { ReactNode } from 'react'

interface BlueGradientTextProps {
  children: ReactNode
}

export function BlueGradientText({ children }: BlueGradientTextProps) {
  return (
    <span className="bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text">
      {children}
    </span>
  )
}
