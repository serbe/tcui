import React from "react";
import {
  ChangeEventHandler,
  FocusEventHandler,
  MouseEventHandler,
  useRef,
} from "react";

import { classNames } from "../../utils";
import type { InputTypes, Sizes } from "../../utils/variables";

interface InputProperties {
  autocomplete?: string;
  className?: string;
  defaultValue?: number | string;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  label?: string;
  name: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  placeholder?: string;
  size: Sizes;
  textHelper?: string;
  type: InputTypes;
  value?: number | string;
}

interface InputSize {
  width: string;
  height: string;
  textSize: string;
}

const sizeValues: Record<Sizes, InputSize> = {
  small: { width: "px-2", height: "py-1", textSize: "text-sm" },
  normal: { width: "px-3", height: "py-1.5", textSize: "text-base" },
  large: { width: "px-4", height: "py-2", textSize: "text-xl" },
};

export const Input = ({
  autocomplete,
  className,
  defaultValue,
  isDisabled,
  isReadOnly,
  label,
  name,
  onBlur,
  onChange,
  onClick,
  placeholder,
  size,
  textHelper,
  type,
  value,
}: InputProperties): JSX.Element => {
  const inputRef = useRef(null);
  const { width, height, textSize } = sizeValues[size];

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

  const defaultValueCheck = onChange ? undefined : "";

  return (
    <div>
      <Label />
      <div className="relative">
        <input
          key={name}
          type={type}
          className={inputClass}
          autoComplete={autocomplete}
          defaultValue={defaultValue ? defaultValue : defaultValueCheck}
          disabled={isDisabled}
          id={name}
          placeholder={placeholder ?? label}
          readOnly={isReadOnly}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          ref={inputRef}
        />
      </div>
      <Helper />
    </div>
  );
};

Input.defaultProps = {
  autocomplete: undefined,
  defaultValue: undefined,
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
