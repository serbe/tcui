import React, {
  ChangeEvent,
  FC,
  FocusEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";

import { classNames, classToString } from "../../utils/classNames";
import {
  borderColor,
  focusOutlineColor,
  type Colors,
  type IClassName,
  type InputTypes,
  type Sizes,
} from "../../utils/variables";

interface InputProps {
  autocomplete?: string;
  className?: string;
  color?: Colors;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isReadOnly?: boolean;
  label?: string;
  name: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange: (value: string | number) => void;
  onClick?: MouseEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: Sizes;
  textHelper?: string;
  type?: InputTypes;
  value: number | string;
}

interface IInputSize {
  fontSize: string;
  radius: string;
  padding: {
    x: string;
    ox: string;
    y: string;
  };
  minWidth: string;
  leading: string;
}

const inputSize: Record<Sizes, IInputSize> = {
  small: {
    fontSize: "text-sm",
    radius: "rounded-[8px]",
    padding: { x: "px-2", ox: "px-3", y: "py-1" },
    minWidth: "min-w-[100px]",
    leading: "leading-tight",
  },
  normal: {
    fontSize: "text-base",
    radius: "rounded-[7px]",
    padding: { x: "px-2", ox: "px-3", y: "py-1" },
    minWidth: "min-w-[100px]",
    leading: "leading-tight",
  },
  large: {
    fontSize: "text-lg",
    radius: "rounded-md",
    padding: { x: "px-2", ox: "px-3", y: "py-1" },
    minWidth: "min-w-[100px]",
    leading: "leading-7",
  },
};

export const inp = (): JSX.Element => (
  <input
    type="text"
    name="first-name"
    id="first-name"
    autoComplete="given-name"
    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
  ></input>
);

const getInputClass = (
  color: Colors,
  isOutlined: boolean,
  size: Sizes,
): IClassName => {
  const iSize = inputSize[size];
  return {
    layout: {
      display: "block",
    },
    padding: {
      x: isOutlined ? iSize.padding.ox : iSize.padding.x,
      y: iSize.padding.y,
    },
    size: {
      maxWidth: iSize.minWidth,
    },
    border: {
      borderRadius: isOutlined ? "rounded-full" : "rounded-sm",
      borderColor: borderColor[color],
      borderWidth: isOutlined ? "border" : "border-b",
      outlineStyle: "outline-none",
    },
    typography: {
      fontSize: iSize.fontSize,
      lineHeight: iSize.leading,
    },
    interactivity: {
      accentColor: "accent-transparent",
    },
    hover: {
      effect: {
        boxShadow: "hover:shadow-lg",
      },
    },
    focus: {
      border: {
        outlineColor: focusOutlineColor[color],
        outlineOffset: "focus:outline-offset-0",
        outlineWidth: "focus:outline-2",
        outlineStyle: "focus:outline-none",
      },
    },
  };
};

export const Input: FC<InputProps> = ({
  autocomplete,
  className,
  color = "slate",
  isDisabled,
  isOutlined = true,
  isReadOnly,
  label,
  name,
  onBlur,
  onChange,
  onClick,
  size = "normal",
  placeholder,
  textHelper,
  type,
  value,
}) => {
  const inputRef = useRef(null);

  // const { width, height, textSize } = sizeValues[size];
  const [inputValue, setInputValue] = useState<string | number>(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setInputValue(value);

    if (type === "number") {
      onChange(Number(value));
    } else {
      onChange(value);
    }
  };

  const Helper = (): JSX.Element | null => {
    return textHelper ? (
      <div className="mt-1 text-sm text-gray-500">{textHelper}</div>
    ) : null;
  };

  // const labelClassNames = classToString(gl);
  const ic = getInputClass(color, isOutlined, size);

  const inputClassNames = classNames(classToString(ic), className);

  const Label = (): JSX.Element | null => {
    return label ? <label htmlFor={name}>{label}</label> : null;
  };

  const divClassNames = classNames("relative", "min-w-[200px]", "min-h-[8px]");

  return (
    <div>
      <div className={divClassNames}>
        <input
          autoComplete={autocomplete}
          className={inputClassNames}
          disabled={isDisabled}
          id={name}
          key={name}
          onBlur={onBlur}
          onChange={handleInputChange}
          onClick={onClick}
          placeholder={label ? "" : placeholder}
          readOnly={isReadOnly}
          ref={inputRef}
          type={type}
          value={inputValue}
        />
        <Label />
      </div>
      <Helper />
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
