import clsx from 'clsx'
import type { MouseEventHandler, ReactNode } from 'react'
import type { Sizes } from '../variables'

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

type ButtonProperties = {
  children: ReactNode
  className?: string
  color: ButtonColors
  fullwith?: boolean
  isDisabled?: boolean
  isOutline?: boolean
  isRounded?: boolean
  withRipple?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement>
  size?: Sizes
}

const colorClass = (color: ButtonColors): string => {
  switch (color) {
    case 'primary':
      return 'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg'
    case 'secondary':
      return 'bg-purple-600 text-white shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg active:bg-purple-800 active:shadow-lg'
    case 'success':
      return 'bg-green-500 text-white shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg active:bg-green-700 active:shadow-lg'
    case 'danger':
      return 'bg-red-600 text-white shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg active:bg-red-800 active:shadow-lg'
    case 'warning':
      return 'bg-yellow-500 text-white shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg active:bg-yellow-700 active:shadow-lg'
    case 'info':
      return 'bg-blue-400 text-white shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg active:bg-blue-600 active:shadow-lg'
    case 'light':
      return 'bg-gray-200 text-gray-700 shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg active:bg-gray-400 active:shadow-lg'
    case 'dark':
      return 'bg-gray-800 text-white shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg active:bg-gray-900 active:shadow-lg'
    default:
      return 'bg-blue-600 text-white shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg'
  }
}

const colorClassOutline = (color: ButtonColors): string => {
  switch (color) {
    case 'primary':
      return 'border-2 border-blue-600 text-blue-600 hover:bg-black hover:bg-opacity-5'
    case 'secondary':
      return 'border-2 border-purple-600 text-purple-600 hover:bg-black hover:bg-opacity-5'
    case 'success':
      return 'border-2 border-green-500 text-green-500 hover:bg-black hover:bg-opacity-5'
    case 'danger':
      return 'border-2 border-red-600 text-red-600 hover:bg-black hover:bg-opacity-5'
    case 'warning':
      return 'border-2 border-yellow-500 text-yellow-500 hover:bg-black hover:bg-opacity-5'
    case 'info':
      return 'border-2 border-blue-400 text-blue-400 hover:bg-black hover:bg-opacity-5'
    case 'light':
      return 'border-2 border-gray-200 text-gray-200 hover:bg-black hover:bg-opacity-5'
    case 'dark':
      return 'border-2 border-gray-800 text-gray-800 hover:bg-black hover:bg-opacity-5'
    default:
      return 'border-2 border-blue-600 text-blue-600 hover:bg-black hover:bg-opacity-5'
  }
}

const sizeClass = (size: Sizes): string => {
  switch (size) {
    case 'small':
      return 'px-4 py-1.5 text-xs'
    case 'normal':
      return 'px-6 py-2.5 text-xs'
    case 'large':
      return 'px-7 py-3 text-sm'
    default:
      return 'px-6 py-2.5 text-xs'
  }
}

const sizeClassOutline = (size: Sizes): string => {
  switch (size) {
    case 'small':
      return 'px-4 py-1 text-xs'
    case 'normal':
      return 'px-6 py-2 text-xs'
    case 'large':
      return 'px-7 py-2.5 text-sm'
    default:
      return 'px-6 py-2 text-xs'
  }
}

export function Button({
  children,
  className,
  color,
  fullwith,
  isRounded,
  isDisabled,
  isOutline,
  onClick,
  size,
  withRipple,
}: ButtonProperties): JSX.Element {
  const buttonClass = clsx(
    `inline-block font-medium uppercase leading-tight transition duration-150 ease-in-out focus:outline-none focus:ring-0`,
    className,
    fullwith ? (isRounded ? 'w-full' : 'mb-2 w-full') : '',
    isRounded ? 'rounded-full' : 'rounded',
    isOutline ? sizeClassOutline(size) : sizeClass(size),
    isOutline ? colorClassOutline(color) : colorClass(color),
    { ['pointer-events-none opacity-60']: isDisabled },
  )

  return (
    <button
      data-mdb-ripple={withRipple}
      data-mdb-ripple-color={withRipple ? 'light' : undefined}
      className={buttonClass}
      disabled={isDisabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: undefined,
  color: undefined,
  fullwith: false,
  isDisable: false,
  isOutline: false,
  isRounded: false,
  onClick: undefined,
  size: 'normal',
}

export default Button
