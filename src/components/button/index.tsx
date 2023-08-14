import type { FC, MouseEventHandler, ReactNode } from "react";
import React from "react";

import { classNames, classToString } from "../../utils/classNames";
import {
  IClassName,
  backgroundColor,
  borderColor,
  focusRingColor,
  hoverShadowColor,
  shadowColor,
  textColor,
  type Colors,
  type IPadding,
  type Sizes,
} from "../../utils/variables";

export interface IButtonProps {
  children: ReactNode;
  className?: string;
  color?: Colors;
  isDisabled?: boolean;
  isFullwith?: boolean;
  isOutlined?: boolean;
  isUpperCase?: boolean;
  onClick?: MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement | HTMLInputElement
  >;
  size?: Sizes;
}

interface IButtonSize {
  padding: IPadding;
  textSize: string;
  width: string;
}

const buttonSize: Record<Sizes, IButtonSize> = {
  small: {
    padding: { x: "px-4", y: "py-2.5" },
    textSize: "text-xs",
    width: "min-w-[80px]",
  },
  normal: {
    padding: { x: "px-6", y: "py-2.5" },
    textSize: "text-sm",
    width: "min-w-[100px]",
  },
  large: {
    padding: { x: "px-7", y: "py-3" },
    textSize: "text-base",
    width: "min-w-[120px]",
  },
};

const buttonClasses = (
  color: Colors,
  isOutlined: boolean,
  size: Sizes,
  isUpperCase: boolean,
  isFullwith: boolean,
): IClassName => {
  const bSize = buttonSize[size];
  return {
    margin: {
      right: "mr-4",
    },
    border: {
      radius: "rounded-lg",
      color: isOutlined ? borderColor[color] : undefined,
      width: isOutlined ? "border" : undefined,
    },
    background: {
      color: isOutlined ? undefined : backgroundColor[color],
    },
    padding: {
      x: bSize.padding.x,
      y: bSize.padding.y,
    },
    font: {
      family: "font-sans",
      color: isOutlined ? textColor[color] : "text-white",
      size: bSize.textSize,
      weight: "font-bold",
    },
    text: {
      transform: isUpperCase ? "uppercase" : "capitalize",
    },
    width: isFullwith ? "w-full" : bSize.width,
    box: {
      shadow: isOutlined ? undefined : "shadow-md",
      color: isOutlined ? undefined : shadowColor[color],
    },
    transition: {
      transition: "transition-all",
    },
    hover: {
      opacity: isOutlined ? "hover:opacity-75" : undefined,
      box: {
        shadow: isOutlined ? undefined : "hover:shadow-lg",
        color: isOutlined ? undefined : hoverShadowColor[color],
      },
    },
    focus: {
      opacity: isOutlined ? undefined : "focus:opacity-[0.85]",
      ring: {
        ring: isOutlined ? "focus:ring" : undefined,
        color: isOutlined ? focusRingColor[color] : undefined,
      },
      box: {
        shadow: isOutlined ? undefined : "focus:shadow-none",
      },
    },
    active: {
      opacity: "active:opacity-[0.85]",
      box: {
        shadow: isOutlined ? undefined : "active:shadow-none",
      },
    },
    disabled: {
      pointerEvent: "disabled:pointer-events-none",
      opacity: "disabled:opacity-50",
      box: {
        shadow: "disabled:shadow-none",
      },
    },
  };
};

// blue    className="mx-2 rounded-lg                                 bg-blue-500        py-3         px-6         font-sans text-xs  font-bold capitalize text-white    shadow-md     shadow-blue-500/20    transition-all hover:shadow-lg     hover:shadow-blue-500/40                    focus:opacity-[0.85] focus:shadow-none                                                               active:opacity-[0.85] active:shadow-none   disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
// red     className="mx-2 rounded-lg                                 bg-red-500         py-3         px-6         font-sans text-xs  font-bold capitalize text-white    shadow-md     shadow-red-500/20     transition-all hover:shadow-lg     hover:shadow-red-500/40                     focus:opacity-[0.85] focus:shadow-none                                                               active:opacity-[0.85] active:shadow-none   disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
// green   className="mx-2 rounded-lg                                 bg-green-500       py-3         px-6         font-sans text-xs  font-bold capitalize text-white    shadow-md     shadow-green-500/20   transition-all hover:shadow-lg     hover:shadow-green-500/40                   focus:opacity-[0.85] focus:shadow-none                                                               active:opacity-[0.85] active:shadow-none   disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
// orange  className="mx-2 rounded-lg                                 bg-orange-500      py-3         px-6         font-sans text-xs  font-bold capitalize text-white    shadow-md     shadow-orange-500/20  transition-all hover:shadow-lg     hover:shadow-orange-500/40                  focus:opacity-[0.85] focus:shadow-none                                                               active:opacity-[0.85] active:shadow-none   disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
// pink    className="mx-2 rounded-lg                                 bg-pink-500        py-3         px-6         font-sans text-xs  font-bold uppercase  text-white    shadow-md     shadow-pink-500/20    transition-all hover:shadow-lg     hover:shadow-pink-500/40                    focus:opacity-[0.85] focus:shadow-none                                                               active:opacity-[0.85] active:shadow-none   disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
// pink ou className="mx-2 rounded-lg border          border-pink-500                    py-3         px-6         font-sans text-xs  font-bold uppercase  text-pink-500                                     transition-all                                                hover:opacity-75                                          focus:ring        focus:ring-pink-200                       active:opacity-[0.85]                      disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
// bc                 mx-2 rounded-lg bc.border.width bc.border.color bc.backgroundColor bc.padding.y bc.padding.x font-sans textSize font-bold capitalize bc.textColor  bc.shadow.box bc.shadow.color       transition-all bc.hover.shadow.box bc.hover.shadow.box        bc.hover.opacity bc.focus.opacity     bc.focus.shadow.box bc.focus.ring.box bc.focus.ring.color                       active:opacity-[0.85] bc.active.shadow.box disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none

// pink gr className="mx-2 rounded-lg                        bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs  font-bold uppercase  text-white    shadow-md shadow-pink-500/20   transition-all hover:shadow-lg hover:shadow-pink-500/40                                                                                                                    active:opacity-[0.85]                    disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
// pink z  className="mx-2 rounded-lg                                                                    py-3 px-6 font-sans text-xs  font-bold uppercase  text-pink-500                                transition-all                                            hover:bg-pink-500/10                                                                       active:bg-pink-500/30                                          disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"

export const Button: FC<IButtonProps> = ({
  children,
  className,
  color = "blue",
  isDisabled,
  isFullwith = false,
  isOutlined = false,
  isUpperCase = false,
  onClick,
  size = "normal",
}) => {
  const bc = buttonClasses(color, isOutlined, size, isUpperCase, isFullwith);
  const click = isDisabled ? undefined : onClick;

  const buttonClass = classNames(className, classToString(bc));

  return (
    <button
      className={buttonClass}
      onClick={click}
      disabled={isDisabled}
      data-ripple-light="true"
    >
      {children}
    </button>
  );
};

export default Button;
