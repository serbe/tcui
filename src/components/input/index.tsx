import React, {
  ChangeEvent,
  FC,
  FocusEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";

import { classNames } from "../../utils/classNames";
import type { InputTypes, Sizes } from "../../utils/variables";

interface IInputProps {
  autocomplete?: string;
  className?: string;
  isDisabled?: boolean;
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
  width: string;
  height: string;
  textSize: string;
}

const sizeValues: Record<Sizes, IInputSize> = {
  small: { width: "px-2", height: "py-1", textSize: "text-sm" },
  normal: { width: "px-3", height: "py-1.5", textSize: "text-base" },
  large: { width: "px-4", height: "py-2", textSize: "text-xl" },
};

export const Input: FC<IInputProps> = ({
  autocomplete,
  className,
  isDisabled,
  isReadOnly,
  label,
  name,
  onBlur,
  onChange,
  onClick,
  placeholder,
  size = "normal",
  textHelper,
  type,
  value,
}) => {
  const inputRef = useRef(null);

  const { width, height, textSize } = sizeValues[size];
  const [inputValue, setInputValue] = useState<string | number>(value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
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

  const Label = (): JSX.Element | null => {
    return label ? (
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
    ) : null;
  };

  const inputClass = classNames(
    "w-full rounded-lg border-gray-200",
    width,
    height,
    textSize,
    "shadow-sm",
    className,
    isDisabled ? "pointer-events-none opacity-60" : ""
  );

  return (
    <div>
      <Label />
      <div className="relative">
        <input
          autoComplete={autocomplete}
          className={inputClass}
          disabled={isDisabled}
          id={name}
          key={name}
          onBlur={onBlur}
          onChange={handleInputChange}
          onClick={onClick}
          placeholder={placeholder ?? label}
          readOnly={isReadOnly}
          ref={inputRef}
          type={type}
          value={inputValue}
        />
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
