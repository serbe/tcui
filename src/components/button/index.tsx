import type { MouseEventHandler, ReactNode } from "react";
import React from "react";

import { classNames } from "../../utils";
import type { Colors, Sizes } from "../../utils/variables";

interface ButtonProperties {
  children: ReactNode;
  className?: string;
  color: Colors;
  hasRipple?: boolean;
  isDisabled?: boolean;
  isFullwith?: boolean;
  isOutline?: boolean;
  isRounded?: boolean;
  onClick?: MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement | HTMLInputElement
  >;
  size: Sizes;
}

interface ButtonColors {
  borderColor: string;
  textColor: string;
  bgColor: string;
  hoverTextColor: string;
  hoverBgColor: string;
  activeTextColor: string;
  activeBgColor: string;
}

interface ButtonSize {
  width: string;
  height: string;
  textSize: string;
}

const colorValues: Record<Colors, ButtonColors> = {
  primary: {
    borderColor: "border-blue-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-600",
    hoverTextColor: "hover:text-blue-600",
    hoverBgColor: "hover:bg-blue-600",
    activeTextColor: "active:text-blue-700",
    activeBgColor: "active:bg-blue-700",
  },
  secondary: {
    borderColor: "border-purple-600",
    textColor: "text-purple-600",
    bgColor: "bg-purple-600",
    hoverTextColor: "hover:text-purple-600",
    hoverBgColor: "hover:bg-purple-600",
    activeTextColor: "active:text-purple-700",
    activeBgColor: "active:bg-purple-700",
  },
  success: {
    borderColor: "border-green-500",
    textColor: "text-green-500",
    bgColor: "bg-green-500",
    hoverTextColor: "hover:text-green-500",
    hoverBgColor: "hover:bg-green-500",
    activeTextColor: "active:text-green-600",
    activeBgColor: "active:bg-green-600",
  },
  danger: {
    borderColor: "border-red-600",
    textColor: "text-red-600",
    bgColor: "bg-red-600",
    hoverTextColor: "hover:text-red-600",
    hoverBgColor: "hover:bg-red-600",
    activeTextColor: "active:text-red-700",
    activeBgColor: "active:bg-red-700",
  },
  warning: {
    borderColor: "border-yellow-500",
    textColor: "text-yellow-500",
    bgColor: "bg-yellow-500",
    hoverTextColor: "hover:text-yellow-500",
    hoverBgColor: "hover:bg-yellow-500",
    activeTextColor: "active:text-yellow-600",
    activeBgColor: "active:bg-yellow-600",
  },
  info: {
    borderColor: "border-blue-400",
    textColor: "text-blue-400",
    bgColor: "bg-blue-400",
    hoverTextColor: "hover:text-blue-400",
    hoverBgColor: "hover:bg-blue-400",
    activeTextColor: "active:text-blue-500",
    activeBgColor: "active:bg-blue-500",
  },
  light: {
    borderColor: "border-gray-200",
    textColor: "text-gray-200",
    bgColor: "bg-gray-200",
    hoverTextColor: "hover:text-gray-200",
    hoverBgColor: "hover:bg-gray-200",
    activeTextColor: "active:text-gray-300",
    activeBgColor: "active:bg-gray-300",
  },
  dark: {
    borderColor: "border-gray-800",
    textColor: "text-gray-800",
    bgColor: "bg-gray-800",
    hoverTextColor: "hover:text-gray-800",
    hoverBgColor: "hover:bg-gray-800",
    activeTextColor: "active:text-gray-900",
    activeBgColor: "active:bg-gray-900",
  },
};

const sizeValues: Record<Sizes, ButtonSize> = {
  small: { width: "w-20", height: "py-1", textSize: "text-xs" },
  normal: { width: "w-28", height: "py-1.5", textSize: "text-sm" },
  large: { width: "w-28", height: "py-2", textSize: "text-base" },
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
  const {
    borderColor,
    textColor,
    bgColor,
    hoverTextColor,
    hoverBgColor,
    activeTextColor,
    activeBgColor,
  } = colorValues[color];
  const { width, height, textSize } = sizeValues[size];
  const round = isRounded ? "rounded-full" : "rounded";
  const buttonWidth = isFullwith ? "w-full" : width;
  const click = isDisabled ? undefined : onClick;
  const buttonClassName = (): string => {
    if (isOutline) {
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

  const buttonClass = classNames(
    className,
    buttonClassName(),
    isDisabled ? "pointer-events-none opacity-50" : ""
  );

  return (
    <a className={buttonClass} onClick={click}>
      {children}
    </a>
  );
};

Button.defaultProps = {
  className: undefined,
  color: "primary",
  isDisabled: false,
  isFullwith: false,
  isOutline: false,
  isRounded: false,
  onClick: undefined,
  size: "normal",
};

export default Button;
