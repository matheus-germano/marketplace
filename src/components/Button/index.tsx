import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color: 'blue' | 'white' | 'black' | 'transparent'
  outlined?: boolean
}

export function Button({
  color,
  outlined = false,
  children,
  ...rest
}: ButtonProps) {
  let buttonStyle

  if (color === 'blue') {
    if (outlined) {
      buttonStyle = 'border-2 border-blue-700'
    } else {
      buttonStyle =
        'bg-gradient-to-r from-blue-700 to-blue-500 text-[color:var(--white)]'
    }
  } else if (color === 'white') {
    if (outlined) {
      buttonStyle = 'border-2 border-[color:var(--white)]'
    } else {
      buttonStyle = 'bg-[color:var(--white)] text-[color:var(--text)]'
    }
  } else if (color === 'black') {
    if (outlined) {
      buttonStyle = 'border-2 border-[color:var(--title)]'
    } else {
      buttonStyle = 'bg-[color:var(--title)] text-[color:var(--white)]'
    }
  } else {
    buttonStyle = 'bg-transparent text-[color:var(--text)]'
  }

  return (
    <button
      className={
        'h-10 p-2 flex items-center justify-center font-bold rounded-lg ' +
        buttonStyle
      }
      {...rest}
    >
      {children}
    </button>
  )
}
