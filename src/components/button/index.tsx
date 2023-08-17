import type { FC, MouseEventHandler, ReactNode } from "react";

import { classNames, classToString } from "../../utils/classNames";
import {
  IClassName,
  backgroundColor,
  borderColor,
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
  fontSize: string;
  minWidth: string;
}

const buttonSize: Record<Sizes, IButtonSize> = {
  small: {
    padding: { x: "px-2", bottom: "pb-1.5", top: "pt-1" },
    fontSize: "text-xs",
    minWidth: "min-w-[80px]",
  },
  normal: {
    padding: { x: "px-3", bottom: "pb-1.5", top: "pt-1" },
    fontSize: "text-sm",
    minWidth: "min-w-[100px]",
  },
  large: {
    padding: { x: "px-4", bottom: "pb-1.5", top: "pt-1" },
    fontSize: "text-base",
    minWidth: "min-w-[120px]",
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
    size: {
      width: isFullwith ? "w-full" : undefined,
      minWidth: bSize.minWidth,
    },
    border: {
      borderRadius: "rounded-md",
      borderWidth: "border",
      borderColor: borderColor[color],
    },
    background: {
      color: isOutlined ? "bg-white" : backgroundColor[color],
    },
    padding: {
      x: bSize.padding.x,
      bottom: bSize.padding.bottom,
      top: bSize.padding.top,
    },
    typography: {
      fontSize: bSize.fontSize,
      fontWeight: "font-bold",
      textColor: isOutlined ? textColor[color] : "text-white",
      textTransform: isUpperCase ? "uppercase" : undefined,
    },
    effect: {
      boxShadow: "shadow-md",
    },
    hover: {
      effect: {
        boxShadow: "hover:shadow-lg",
      },
    },
  };
};

export const Button: FC<IButtonProps> = ({
  children,
  className,
  color = "slate",
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
