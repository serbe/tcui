import {
  ChangeEvent,
  FC,
  FocusEventHandler,
  MouseEventHandler,
  ReactNode,
  useRef,
  useState,
} from "react";

import { classNames, classToString } from "../../utils/classNames";
import {
  backgroundColor,
  focusBorderColor,
  focusOutlineColor,
  hoverBorderColor,
  hoverOutlineColor,
  placeholderTextColor,
  type Colors,
  type IClassName,
  type IInputTypes,
  type Sizes,
} from "../../utils/variables";

export interface IInputProps {
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
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string | number) => void;
  onClick?: MouseEventHandler<HTMLInputElement>;
  placeholder?: string;
  size?: Sizes;
  type?: IInputTypes;
  value: number | string;
}

interface IInputSize {
  fontSize: string;
  height: string;
  minWidth: string;
  leading: string;
}

interface IElemSize {
  divHeight: string;
  divWidth: string;
  iconHeight: string;
  iconWidth: string;
  paddingRight: string;
}

const inputSize: Record<Sizes, IInputSize> = {
  large: {
    fontSize: "text-lg",
    height: "h-9",
    leading: "leading-7",
    minWidth: "min-w-[100px]",
  },
  normal: {
    fontSize: "text-base",
    height: "h-8",
    leading: "leading-tight",
    minWidth: "min-w-[100px]",
  },
  small: {
    fontSize: "text-sm",
    height: "h-7",
    leading: "leading-3",
    minWidth: "min-w-[100px]",
  },
};

const getInputClass = (
  color: Colors,
  isFullwidth: boolean,
  isOutlined: boolean,
  size: Sizes,
  paddingRight?: string,
): IClassName => {
  const iSize = inputSize[size];
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
      right: paddingRight ? paddingRight : `${isOutlined ? "pr-1" : undefined}`,
      y: "py-1",
    },
    placeholder: {
      typography: {
        textColor: placeholderTextColor[color],
      },
    },
    size: {
      height: iSize.height,
      minWidth: iSize.minWidth,
      width: isFullwidth ? "w-full" : undefined,
    },
    typography: {
      fontSize: iSize.fontSize,
      lineHeight: iSize.leading,
    },
  };
};

const elemSize: Record<Sizes, IElemSize> = {
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

export const Input: FC<IInputProps> = ({
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
  const inputRef = useRef(null);

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

  const elem = elemSize[size];

  const ic = getInputClass(
    color,
    isFullwidth,
    isOutlined,
    size,
    icon ? elem.paddingRight : undefined,
  );

  const inputClassNames = classNames(classToString(ic), className);

  const Icon = (): JSX.Element | null => {
    return icon ? (
      <div
        className={`absolute right-1.5 top-3.5 grid ${elem.iconHeight} ${elem.iconWidth} place-items-center`}
      >
        {icon}
      </div>
    ) : null;
  };

  const Label = (): JSX.Element | null => {
    return label ? (
      <label
        htmlFor={name}
        className={`pointer-events-none absolute select-none ${
          isOutlined ? "left-2" : ""
        } z-10 ${backgroundColor[bgColor]} px-1 text-xs`}
      >
        {label}
      </label>
    ) : null;
  };

  const divClassNames = classNames(
    divClassName,
    "relative",
    isFullwidth ? "w-full" : undefined,
    elem.divHeight,
    elem.divWidth,
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
        ref={inputRef}
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
