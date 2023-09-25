import type { FC, MouseEventHandler, ReactNode } from "react";

import type { IClassName } from "../../utils/variables";

import { classNames, classToString } from "../../utils/class-names";
import {
  backgroundColor,
  borderColor,
  textColor,
  type Colors,
  type Sizes,
} from "../../utils/variables";

export interface IButtonProperties {
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
  fontSize: string;
  minWidth: string;
  paddingX: string;
}

const buttonSize: Record<Sizes, IButtonSize> = {
  large: {
    fontSize: "text-base",
    minWidth: "min-w-[120px]",
    paddingX: "px-4",
  },
  normal: {
    fontSize: "text-sm",
    minWidth: "min-w-[100px]",
    paddingX: "px-3",
  },
  small: {
    fontSize: "text-xs",
    minWidth: "min-w-[80px]",
    paddingX: "px-2",
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
    background: {
      color: isOutlined ? "bg-white" : backgroundColor[color],
    },
    border: {
      borderColor: borderColor[color],
      borderRadius: "rounded-md",
      borderWidth: "border",
    },
    effect: {
      boxShadow: "shadow-md",
    },
    hover: {
      effect: {
        boxShadow: "hover:shadow-lg",
      },
    },
    padding: {
      bottom: "pb-1.5",
      top: "pt-1",
      x: bSize.paddingX,
    },
    size: {
      minWidth: bSize.minWidth,
      width: isFullwidth ? "w-full" : undefined,
    },
    typography: {
      fontSize: bSize.fontSize,
      fontWeight: "font-bold",
      textColor: isOutlined ? textColor[color] : "text-white",
      textTransform: isUpperCase ? "uppercase" : undefined,
    },
  };
};

export const Button: FC<IButtonProperties> = ({
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
      data-ripple-light="true"
      disabled={isDisabled}
      onClick={click}
    >
      {children}
    </button>
  );
};

export default Button;
