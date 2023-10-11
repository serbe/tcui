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
}

interface IElementSize {
  divHeight: string;
  iconHeight: string;
  iconWidth: string;
  paddingRight: string;
}

const getInputSize: Record<Sizes, IInputSize> = {
  large: {
    fontSize: "text-lg",
    height: "h-9",
    leading: "leading-7",
  },
  normal: {
    fontSize: "text-base",
    height: "h-8",
    leading: "leading-tight",
  },
  small: {
    fontSize: "text-sm",
    height: "h-7",
    leading: "leading-3",
  },
};

const getElementSize: Record<Sizes, IElementSize> = {
  large: {
    divHeight: "min-h-[3.3rem]",
    iconHeight: "h-8",
    iconWidth: "w-8",
    paddingRight: "pr-9",
  },
  normal: {
    divHeight: "min-h-[3.1rem]",
    iconHeight: "h-7",
    iconWidth: "w-7",
    paddingRight: "pr-8",
  },
  small: {
    divHeight: "min-h-[2.9rem]",
    iconHeight: "h-6",
    iconWidth: "w-6",
    paddingRight: "pr-7",
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
        outlineColor: isOutlined ? focusOutlineColor[color] : undefined,
      },
    },
    hover: {
      border: {
        borderColor: isOutlined ? undefined : hoverBorderColor[color],
        outlineColor: isOutlined ? hoverOutlineColor[color] : undefined,
      },
    },
    interactivity: {
      appearance: "appearance-none",
    },
    layout: {
      position: "relative",
      top: "top-3",
    },
    margin: {
      x: isOutlined ? "mx-1" : undefined,
    },
    padding: {
      left: isOutlined ? "pl-1" : "undefined",
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
      width: isFullwidth ? "w-full" : undefined,
    },
    typography: {
      fontSize: inputSize.fontSize,
      lineHeight: inputSize.leading,
    },
  };
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
  const iconClassName = classNames(
    "absolute",
    isOutlined ? "right-1" : "right-0",
    "top-3.5",
    "grid",
    elementSize.iconHeight,
    elementSize.iconWidth,
    "place-items-center",
  );

  const Icon = (): JSX.Element | null =>
    icon ? <div className={iconClassName}>{icon}</div> : null;

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
