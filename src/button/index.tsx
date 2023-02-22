import type { MouseEventHandler, ReactNode } from 'react'
import { classNames } from 'utils'
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

type ButtonProperties = {
  children: ReactNode
  className?: string
  color?: ButtonColors
  hasRipple?: boolean
  isDisabled?: boolean
  isFullwith?: boolean
  isOutline?: boolean
  isRounded?: boolean
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement>
  size?: Sizes
}

const colorClass = (color?: ButtonColors): [string, number] => {
  switch (color) {
    case 'primary':
      return ['blue', 600]
    case 'secondary':
      return ['purple', 600]
    case 'success':
      return ['green', 500]
    case 'danger':
      return ['red', 600]
    case 'warning':
      return ['yellow', 500]
    case 'info':
      return ['blue', 400]
    case 'light':
      return ['gray', 200]
    case 'dark':
      return ['gray', 800]
    default:
      return ['blue', 600]
  }
}

const sizeClass = (size: Sizes): [string, string, string] => {
  switch (size) {
    case 'small':
      return ['w-20', 'py-1', 'text-xs']
    case 'normal':
      return ['w-28', 'py-1.5', 'text-sm']
    case 'large':
      return ['w-28', 'py-2', 'text-base']
    default:
      return ['w-28', 'py-1.5', 'text-sm']
  }
}

export function Button({
  children,
  className,
  color,
  isDisabled,
  isFullwith,
  isOutline,
  isRounded,
  onClick,
  size,
}: ButtonProperties): JSX.Element {
  const [colorName, colorShade] = colorClass(color)
  const [width, height, textSize] = sizeClass(size)
  const round = isRounded ? 'rounded-full' : 'rounded'
  const buttonWidth = isFullwith ? 'w-full' : width
  const click = isDisabled ? undefined : onClick
  const buttonClassName = (): string => {
    if (isOutline) {
      return classNames(
        `inline-block ${buttonWidth} ${round} border border-${colorName}-${colorShade}`,
        `${height} text-center ${textSize} font-medium text-${colorName}-${colorShade}`,
        `hover:bg-${colorName}-${colorShade} hover:text-white focus:outline-none`,
        `focus:ring active:bg-${colorName}-${colorShade}`,
      )
    } else {
      return classNames(
        `inline-block ${buttonWidth} ${round} border border-${colorName}-${colorShade}`,
        `bg-${colorName}-${colorShade} ${height} text-center ${textSize}`,
        `font-medium text-white hover:bg-transparent hover:text-${colorName}-${colorShade}`,
        `focus:outline-none focus:ring active:text-${colorName}-${colorShade + 100}`,
      )
    }
  }
  const buttonClass = classNames(
    className,
    buttonClassName(),
    isDisabled ? 'pointer-events-none opacity-50' : '',
  )

  return (
    <a className={buttonClass} onClick={click}>
      {children}
    </a>
  )
}

Button.defaultProps = {
  className: undefined,
  isDisabled: false,
  isFullwith: false,
  isOutline: false,
  isRounded: false,
  onClick: undefined,
  size: 'normal',
}

export default Button

// ;('inline-block rounded border text-center font-medium focus:outline-none focus:ring')
// ;('w-28 py-1.5 text-sm')
// ;('border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 active:text-indigo-500')
// ;('inline-block w-28 rounded border py-1.5 text-center text-sm font-medium focus:outline-none focus:ring')
// ;('w-28 py-1.5')
// ;('border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white active:bg-indigo-500')
