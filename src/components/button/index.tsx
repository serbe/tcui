import type { FC, MouseEventHandler, ReactNode } from "react";
import React from "react";

import { classNames } from "../../utils/classNames";
import type { Colors, IBorder, IPadding, Sizes } from "../../utils/variables";

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

const borderColor: Record<Colors, string> = {
  slate: "border-slate-500",
  gray: "border-gray-500",
  zinc: "border-zinc-500",
  neutral: "border-neutral-500",
  stone: "border-stone-500",
  red: "border-red-500",
  orange: "border-orange-500",
  amber: "border-amber-500",
  yellow: "border-yellow-500",
  lime: "border-lime-500",
  green: "border-green-500",
  emerald: "border-emerald-500",
  teal: "border-teal-500",
  cyan: "border-cyan-500",
  sky: "border-sky-500",
  blue: "border-blue-500",
  indigo: "border-indigo-500",
  violet: "border-violet-500",
  purple: "border-purple-500",
  fuchsia: "border-fuchsia-500",
  pink: "border-pink-500",
  rose: "border-rose-500",
};

const backgroundColor: Record<Colors, string> = {
  slate: "bg-slate-500",
  gray: "bg-gray-500",
  zinc: "bg-zinc-500",
  neutral: "bg-neutral-500",
  stone: "bg-stone-500",
  red: "bg-red-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-500",
  lime: "bg-lime-500",
  green: "bg-green-500",
  emerald: "bg-emerald-500",
  teal: "bg-teal-500",
  cyan: "bg-cyan-500",
  sky: "bg-sky-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  purple: "bg-purple-500",
  fuchsia: "bg-fuchsia-500",
  pink: "bg-pink-500",
  rose: "bg-rose-500",
};

const textColor: Record<Colors, string> = {
  slate: "text-slate-500",
  gray: "text-gray-500",
  zinc: "text-zinc-500",
  neutral: "text-neutral-500",
  stone: "text-stone-500",
  red: "text-red-500",
  orange: "text-orange-500",
  amber: "text-amber-500",
  yellow: "text-yellow-500",
  lime: "text-lime-500",
  green: "text-green-500",
  emerald: "text-emerald-500",
  teal: "text-teal-500",
  cyan: "text-cyan-500",
  sky: "text-sky-500",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  violet: "text-violet-500",
  purple: "text-purple-500",
  fuchsia: "text-fuchsia-500",
  pink: "text-pink-500",
  rose: "text-rose-500",
};

const focusRingColor: Record<Colors, string> = {
  slate: "focus:ring-slate-500",
  gray: "focus:ring-gray-500",
  zinc: "focus:ring-zinc-500",
  neutral: "focus:ring-neutral-500",
  stone: "focus:ring-stone-500",
  red: "focus:ring-red-500",
  orange: "focus:ring-orange-500",
  amber: "focus:ring-amber-500",
  yellow: "focus:ring-yellow-500",
  lime: "focus:ring-lime-500",
  green: "focus:ring-green-500",
  emerald: "focus:ring-emerald-500",
  teal: "focus:ring-teal-500",
  cyan: "focus:ring-cyan-500",
  sky: "focus:ring-sky-500",
  blue: "focus:ring-blue-500",
  indigo: "focus:ring-indigo-500",
  violet: "focus:ring-violet-500",
  purple: "focus:ring-purple-500",
  fuchsia: "focus:ring-fuchsia-500",
  pink: "focus:ring-pink-500",
  rose: "focus:ring-rose-500",
};

const shadowColor: Record<Colors, string> = {
  slate: "shadow-slate-500/20",
  gray: "shadow-gray-500/20",
  zinc: "shadow-zinc-500/20",
  neutral: "shadow-neutral-500/20",
  stone: "shadow-stone-500/20",
  red: "shadow-red-500/20",
  orange: "shadow-orange-500/20",
  amber: "shadow-amber-500/20",
  yellow: "shadow-yellow-500/20",
  lime: "shadow-lime-500/20",
  green: "shadow-green-500/20",
  emerald: "shadow-emerald-500/20",
  teal: "shadow-teal-500/20",
  cyan: "shadow-cyan-500/20",
  sky: "shadow-sky-500/20",
  blue: "shadow-blue-500/20",
  indigo: "shadow-indigo-500/20",
  violet: "shadow-violet-500/20",
  purple: "shadow-purple-500/20",
  fuchsia: "shadow-fuchsia-500/20",
  pink: "shadow-pink-500/20",
  rose: "shadow-rose-500/20",
};

const hoverShadowColor: Record<Colors, string> = {
  slate: "shadow-slate-500/40",
  gray: "shadow-gray-500/40",
  zinc: "shadow-zinc-500/40",
  neutral: "shadow-neutral-500/40",
  stone: "shadow-stone-500/40",
  red: "shadow-red-500/40",
  orange: "shadow-orange-500/40",
  amber: "shadow-amber-500/40",
  yellow: "shadow-yellow-500/40",
  lime: "shadow-lime-500/40",
  green: "shadow-green-500/40",
  emerald: "shadow-emerald-500/40",
  teal: "shadow-teal-500/40",
  cyan: "shadow-cyan-500/40",
  sky: "shadow-sky-500/40",
  blue: "shadow-blue-500/40",
  indigo: "shadow-indigo-500/40",
  violet: "shadow-violet-500/40",
  purple: "shadow-purple-500/40",
  fuchsia: "shadow-fuchsia-500/40",
  pink: "shadow-pink-500/40",
  rose: "shadow-rose-500/40",
};

interface IButtonSize {
  padding: IPadding;
  textSize: string;
  width: string;
}

interface IRing {
  box?: string;
  color?: string;
}

interface IShadow {
  box?: string;
  color?: string;
}

interface IButtonClass {
  backgroundColor?: string;
  border: IBorder;
  sizes?: IButtonSize;
  shadow?: IShadow;
  textColor: string;
  hover?: {
    opacity?: string;
    shadow?: IShadow;
  };
  focus?: {
    opacity?: string;
    ring?: IRing;
    shadow?: IShadow;
  };
  active?: {
    opacity?: string;
    shadow?: IShadow;
  };
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
): IButtonClass => {
  const bSize = buttonSize[size];
  return {
    backgroundColor: isOutlined ? undefined : backgroundColor[color],
    border: {
      color: isOutlined ? borderColor[color] : undefined,
      width: isOutlined ? "border" : undefined,
    },
    sizes: bSize,
    textColor: isOutlined ? textColor[color] : "text-white",
    shadow: {
      box: isOutlined ? "shadow-md" : undefined,
      color: isOutlined ? shadowColor[color] : undefined,
    },
    hover: {
      opacity: isOutlined ? undefined : "hover:opacity-75",
      shadow: {
        box: isOutlined ? "hover:shadow-lg" : undefined,
        color: isOutlined ? hoverShadowColor[color] : undefined,
      },
    },
    focus: {
      opacity: isOutlined ? undefined : "focus:opacity-[0.85]",
      ring: {
        box: isOutlined ? "focus:ring" : undefined,
        color: isOutlined ? focusRingColor[color] : undefined,
      },
      shadow: {
        box: isOutlined ? undefined : "focus:shadow-none",
      },
    },
    active: {
      shadow: {
        box: isOutlined ? undefined : "active:shadow-none",
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
  isFullwith,
  isOutlined = false,
  isUpperCase,
  onClick,
  size = "normal",
}) => {
  const bc = buttonClasses(color, isOutlined, size);
  const buttonWidth = isFullwith ? "w-full" : bc.sizes?.width;
  const click = isDisabled ? undefined : onClick;

  const buttonClass = classNames(
    className,
    "mx-2",
    buttonWidth,
    "rounded-lg",
    bc.border.width,
    bc.border.color,
    bc.backgroundColor,
    bc.sizes?.padding.y,
    bc.sizes?.padding.x,
    "font-sans",
    bc.sizes?.textSize,
    "font-bold",
    isUpperCase ? "uppercase" : "capitalize",
    bc.textColor,
    bc.shadow?.box,
    bc.shadow?.color,
    "transition-all",
    bc.hover?.shadow?.box,
    bc.hover?.shadow?.box,
    bc.hover?.opacity,
    bc.focus?.opacity,
    bc.focus?.shadow?.box,
    bc.focus?.ring?.box,
    bc.focus?.ring?.color,
    "active:opacity-[0.85]",
    bc.active?.shadow?.box,
    "disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
  );

  return (
    <button className={buttonClass} onClick={click} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;
