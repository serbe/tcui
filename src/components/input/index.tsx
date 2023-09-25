/* eslint-disable unicorn/no-null */
import type {
  ChangeEvent,
  FC,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
} from "react";

import { useRef, useState } from "react";

import type {
  Colors,
  IClassName,
  IInputTypes,
  Sizes,
} from "../../utils/variables";

import { classNames, classToString } from "../../utils/class-names";
import {
  backgroundColor,
  focusBorderColor,
  focusOutlineColor,
  hoverBorderColor,
  hoverOutlineColor,
  placeholderTextColor,
} from "../../utils/variables";

export interface IInputProperties {
  autocomplete?: string;
  bgColor?: Colors;
  className?: string;
  color?: Colors;
  divClassName?: string;
  icon?: ReactNode;
  isDisabled?: boolean;
  isFullwidth?: boolean;
  isOutlined?: boolean;
  isReadOnly?: boolean;
  label?: string;
  name: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange: (value: number | string) => void;
  onClick?: MouseEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: Sizes;
  type?: IInputTypes;
  value: number | string;
}

interface IInputSize {
  fontSize: string;
  height: string;
  leading: string;
  minWidth: string;
}

interface IElementSize {
  divHeight: string;
  divWidth: string;
  iconHeight: string;
  iconWidth: string;
  paddingRight: string;
}

const minW100 = "min-w-[100px]";

const getInputSize: Record<Sizes, IInputSize> = {
  large: {
    fontSize: "text-lg",
    height: "h-9",
    leading: "leading-7",
    minWidth: minW100,
  },
  normal: {
    fontSize: "text-base",
    height: "h-8",
    leading: "leading-tight",
    minWidth: minW100,
  },
  small: {
    fontSize: "text-sm",
    height: "h-7",
    leading: "leading-3",
    minWidth: minW100,
  },
};

const getInputClass = (
  color: Colors,
  isFullwidth: boolean,
  isOutlined: boolean,
  size: Sizes,
  paddingRight?: string,
): IClassName => {
  const inputSize = getInputSize[size];

  return {
    background: {
      color: "bg-transparent",
    },
    border: {
      borderColor: isOutlined ? undefined : "border-slate-500",
      borderRadius: isOutlined ? "rounded-sm" : undefined,
      borderWidth: isOutlined ? undefined : "border-b",
      outlineColor: isOutlined ? "outline-slate-500" : undefined,
      outlineStyle: "outline-none",
      outlineWidth: isOutlined ? "outline-1" : undefined,
    },
    focus: {
      border: {
        borderColor: isOutlined ? undefined : focusBorderColor[color],
        // borderWidth: isOutlined ? undefined : "focus:border-b-1",
        outlineColor: isOutlined ? focusOutlineColor[color] : undefined,
        // outlineWidth: isOutlined ? "focus:outline-1" : undefined,
      },
    },
    hover: {
      border: {
        borderColor: isOutlined ? undefined : hoverBorderColor[color],
        outlineColor: isOutlined ? hoverOutlineColor[color] : undefined,
      },
      // effect: {
      //   boxShadow: "hover:shadow",
      // },
    },
    interactivity: {
      appearance: "appearance-none",
    },
    layout: {
      left: "left-1",
      position: "relative",
      top: "top-3",
    },
    padding: {
      left: isOutlined ? "pl-1" : undefined,
      right: paddingRight ?? `${isOutlined ? "pr-1" : undefined}`,
      y: "py-1",
    },
    placeholder: {
      typography: {
        textColor: placeholderTextColor[color],
      },
    },
    size: {
      height: inputSize.height,
      minWidth: inputSize.minWidth,
      width: isFullwidth ? "w-full" : undefined,
    },
    typography: {
      fontSize: inputSize.fontSize,
      lineHeight: inputSize.leading,
    },
  };
};

const getElementSize: Record<Sizes, IElementSize> = {
  large: {
    divHeight: "min-h-[3.3rem]",
    divWidth: "min-w-[16.35rem]",
    iconHeight: "h-8",
    iconWidth: "w-8",
    paddingRight: "pr-10",
  },
  normal: {
    divHeight: "min-h-[3.1rem]",
    divWidth: "min-w-[14.6rem]",
    iconHeight: "h-7",
    iconWidth: "w-7",
    paddingRight: "pr-9",
  },
  small: {
    divHeight: "min-h-[2.9rem]",
    divWidth: "min-w-[13.5rem]",
    iconHeight: "h-6",
    iconWidth: "w-6",
    paddingRight: "pr-8",
  },
};

export const Input: FC<IInputProperties> = ({
  autocomplete,
  bgColor = "white",
  className,
  color = "slate",
  divClassName,
  icon,
  isDisabled,
  isFullwidth = false,
  isOutlined = true,
  isReadOnly,
  label,
  name,
  onBlur,
  onChange,
  onClick,
  placeholder,
  size = "normal",
  type = "text",
  value,
}) => {
  const inputReference = useRef(null);

  const [inputValue, setInputValue] = useState<number | string>(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    setInputValue(value);

    if (type === "number") {
      onChange(Number(value));
    } else {
      onChange(value);
    }
  };

  const elementSize = getElementSize[size];

  const ic = getInputClass(
    color,
    isFullwidth,
    isOutlined,
    size,
    icon ? elementSize.paddingRight : undefined,
  );

  const inputClassNames = classNames(classToString(ic), className);

  const Icon = (): JSX.Element | null =>
    icon ? (
      <div
        className={`absolute right-1.5 top-3.5 grid ${elementSize.iconHeight} ${elementSize.iconWidth} place-items-center`}
      >
        {icon}
      </div>
    ) : null;

  const Label = (): JSX.Element | null =>
    label ? (
      <label
        className={`pointer-events-none absolute select-none ${
          isOutlined ? "left-2" : ""
        } z-10 ${backgroundColor[bgColor]} px-1 text-xs`}
        htmlFor={name}
      >
        {label}
      </label>
    ) : null;

  const divClassNames = classNames(
    divClassName,
    "relative",
    isFullwidth ? "w-full" : undefined,
    elementSize.divHeight,
    elementSize.divWidth,
    backgroundColor[bgColor],
  );

  return (
    <div className={divClassNames}>
      <Label />
      <Icon />
      <input
        autoComplete={autocomplete}
        className={inputClassNames}
        disabled={isDisabled}
        id={name}
        key={name}
        onBlur={onBlur}
        onChange={handleInputChange}
        onClick={onClick}
        placeholder={placeholder}
        readOnly={isReadOnly}
        ref={inputReference}
        type={type}
        value={inputValue}
      />
    </div>
  );
};

Input.defaultProps = {
  autocomplete: undefined,
  isDisabled: false,
  isReadOnly: false,
  onBlur: undefined,
  onChange: undefined,
  onClick: undefined,
  placeholder: undefined,
  size: "normal",
  type: "text",
  value: undefined,
};

export default Input;
