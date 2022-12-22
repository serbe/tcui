import clsx from 'clsx'
import type { MouseEventHandler, ReactNode } from 'react'

export type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | undefined

export type ButtonSize = 'small' | 'normal' | 'big' | undefined

const colorClass = (color: ButtonColors): string => {
  switch (color) {
    case 'primary':
      return 'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800'
    case 'secondary':
      return 'bg-purple-600 text-white hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-800'
    case 'success':
      return 'bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 active:bg-green-700'
    case 'danger':
      return 'bg-red-600 text-white hover:bg-red-700 focus:bg-red-700 active:bg-red-800'
    case 'warning':
      return 'bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600 active:bg-yellow-700'
    case 'info':
      return 'bg-blue-400 text-white hover:bg-blue-500 focus:bg-blue-500 active:bg-blue-600'
    case 'light':
      return 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400'
    case 'dark':
      return 'bg-gray-800 text-white hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-900'
    default:
      return 'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800'
  }
}

const sizeClass = (size: ButtonSize): string => {
  switch (size) {
    case 'small':
      return 'px-4 py-1.5 text-xs'
    case 'normal':
      return 'px-6 py-2.5 text-xs'
    case 'big':
      return 'px-7 py-3 text-sm'
    default:
      return 'px-6 py-2.5 text-xs'
  }
}

type ButtonProperties = {
  children: ReactNode
  className?: string
  color: ButtonColors
  isRounded?: boolean
  isDisabled?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement>
  size?: ButtonSize
}

export function Button({
  children,
  className,
  color,
  isRounded,
  isDisabled,
  onClick,
  size,
}: ButtonProperties): JSX.Element {
  const buttonClass = clsx(
    `inline-block rounded font-medium uppercase leading-tight shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg`,
    className,
    sizeClass(size),
    colorClass(color),
    { ['rounded-full']: isRounded, ['pointer-events-none opacity-60']: isDisabled },
  )

  return (
    <button className={buttonClass} disabled={isDisabled} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  isActive: false,
  className: undefined,
  color: undefined,
  isDisable: false,
  isFocus: false,
  isHover: false,
  href: undefined,
  isInvert: false,
  isStatic: false,
  isLight: false,
  isLoad: false,
  onClick: undefined,
  isOutline: false,
  isRound: false,
  size: undefined,
}

export default Button
