import type { FC, MouseEventHandler, ReactNode } from "react";

import { classNames, classToString } from "../../utils/classNames";
import {
  IClassName,
  backgroundColor,
  borderColor,
  textColor,
  type Colors,
  type Sizes,
} from "../../utils/variables";

export interface IButtonProps {
  children: ReactNode;
  className?: string;
  color?: Colors;
  isDisabled?: boolean;
  isFullwidth?: boolean;
  isOutlined?: boolean;
  isUpperCase?: boolean;
  onClick?: MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement | HTMLInputElement
  >;
  size?: Sizes;
}

interface IButtonSize {
  paddingX: string;
  fontSize: string;
  minWidth: string;
}

const buttonSize: Record<Sizes, IButtonSize> = {
  small: {
    paddingX: "px-2",
    fontSize: "text-xs",
    minWidth: "min-w-[80px]",
  },
  normal: {
    paddingX: "px-3",
    fontSize: "text-sm",
    minWidth: "min-w-[100px]",
  },
  large: {
    paddingX: "px-4",
    fontSize: "text-base",
    minWidth: "min-w-[120px]",
  },
};

const buttonClasses = (
  color: Colors,
  isOutlined: boolean,
  size: Sizes,
  isUpperCase: boolean,
  isFullwidth: boolean,
): IClassName => {
  const bSize = buttonSize[size];
  return {
    size: {
      width: isFullwidth ? "w-full" : undefined,
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
      x: bSize.paddingX,
      bottom: "pb-1.5",
      top: "pt-1",
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
  isFullwidth = false,
  isOutlined = false,
  isUpperCase = false,
  onClick,
  size = "normal",
}) => {
  const bc = buttonClasses(color, isOutlined, size, isUpperCase, isFullwidth);
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
