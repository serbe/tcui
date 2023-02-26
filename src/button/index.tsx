import type { MouseEventHandler, ReactNode } from 'react';
import React from 'react';

import { classNames } from '../utils';
import type { Sizes } from '../variables';

export type ButtonColors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

type ButtonProperties = {
  children: ReactNode;
  className?: string;
  color?: ButtonColors;
  hasRipple?: boolean;
  isDisabled?: boolean;
  isFullwith?: boolean;
  isOutline?: boolean;
  isRounded?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement | HTMLInputElement>;
  size?: Sizes;
};

const colorClass = (color?: ButtonColors): [string, string, string, string, string, string, string] => {
  switch (color) {
    case 'primary':
      return [
        'border-blue-600',
        'text-blue-600',
        'bg-blue-600',
        'hover:text-blue-600',
        'hover:bg-blue-600',
        'active:text-blue-700',
        'active:bg-blue-700',
      ];
    case 'secondary':
      return [
        'border-purple-600',
        'text-purple-600',
        'bg-purple-600',
        'hover:text-purple-600',
        'hover:bg-purple-600',
        'active:text-purple-700',
        'active:bg-purple-700',
      ];
    case 'success':
      return [
        'border-green-500',
        'text-green-500',
        'bg-green-500',
        'hover:text-green-500',
        'hover:bg-green-500',
        'active:text-green-600',
        'active:bg-green-600',
      ];
    case 'danger':
      return [
        'border-red-600',
        'text-red-600',
        'bg-red-600',
        'hover:text-red-600',
        'hover:bg-red-600',
        'active:text-red-700',
        'active:bg-red-700',
      ];
    case 'warning':
      return [
        'border-yellow-500',
        'text-yellow-500',
        'bg-yellow-500',
        'hover:text-yellow-500',
        'hover:bg-yellow-500',
        'active:text-yellow-600',
        'active:bg-yellow-600',
      ];
    case 'info':
      return [
        'border-blue-400',
        'text-blue-400',
        'bg-blue-400',
        'hover:text-blue-400',
        'hover:bg-blue-400',
        'active:text-blue-500',
        'active:bg-blue-500',
      ];
    case 'light':
      return [
        'border-gray-200',
        'text-gray-200',
        'bg-gray-200',
        'hover:text-gray-200',
        'hover:bg-gray-200',
        'active:text-gray-300',
        'active:bg-gray-300',
      ];
    case 'dark':
      return [
        'border-gray-800',
        'text-gray-800',
        'bg-gray-800',
        'hover:text-gray-800',
        'hover:bg-gray-800',
        'active:text-gray-900',
        'active:bg-gray-900',
      ];
    default:
      return [
        'border-blue-600',
        'text-blue-600',
        'bg-blue-600',
        'hover:text-blue-600',
        'hover:bg-blue-600',
        'active:text-blue-700',
        'active:bg-blue-700',
      ];
  }
};

const sizeClass = (size: Sizes): [string, string, string] => {
  switch (size) {
    case 'small':
      return ['w-20', 'py-1', 'text-xs'];
    case 'normal':
      return ['w-28', 'py-1.5', 'text-sm'];
    case 'large':
      return ['w-28', 'py-2', 'text-base'];
    default:
      return ['w-28', 'py-1.5', 'text-sm'];
  }
};

export const Button = ({
  children,
  className,
  color,
  isDisabled,
  isFullwith,
  isOutline,
  isRounded,
  onClick,
  size,
}: ButtonProperties): JSX.Element => {
  const [borderColor, textColor, bgColor, hoverTextColor, hoverBgColor, activeTextColor, activeBgColor] =
    colorClass(color);
  const [width, height, textSize] = sizeClass(size);
  const round = isRounded ? 'rounded-full' : 'rounded';
  const buttonWidth = isFullwith ? 'w-full' : width;
  const click = isDisabled ? undefined : onClick;
  const buttonClassName = (): string => {
    if (isOutline) {
      // inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium
      // text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500
      return classNames(
        `inline-block ${buttonWidth} ${round} border ${borderColor} ${height}`,
        `text-center ${textSize} font-medium ${textColor} ${hoverBgColor}`,
        `hover:text-white focus:outline-none focus:ring ${activeBgColor}`
      );
    } else {
      return classNames(
        `inline-block ${buttonWidth} ${round} border ${borderColor} ${bgColor}`,
        `${height} text-center ${textSize} font-medium text-white hover:bg-transparent`,
        `${hoverTextColor} focus:outline-none focus:ring ${activeTextColor}`
      );
    }
  };

  const buttonClass = classNames(className, buttonClassName(), isDisabled ? 'pointer-events-none opacity-50' : '');

  return (
    <a className={buttonClass} onClick={click}>
      {children}
    </a>
  );
};

Button.defaultProps = {
  className: undefined,
  isDisabled: false,
  isFullwith: false,
  isOutline: false,
  isRounded: false,
  onClick: undefined,
  size: 'normal',
};

export default Button;
