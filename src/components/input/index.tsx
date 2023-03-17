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

interface InputProps {
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

interface IInputOutlined {
  borderWidth: string;
}

const inputOutline = (isOutlined: boolean): IInputOutlined => {
  return isOutlined ? { borderWidth: "border" } : { borderWidth: "border-b" };
};

// standard className="peer h-full w-full               border-b        border-slate-300                      bg-transparent     pt-4 pb-1.5                   font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all                          placeholder-shown:border-slate-300                focus:border-pink-500                            focus:outline-0 disabled:border-0 disabled:bg-slate-100"
// className="peer h-full w-full rounded-[7px]          border border-slate-300 border-t-transparent bg-transparent                 px-3 py-2.5       font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-300 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-100"
// r button className="peer h-full w-full rounded-[7px]          border border-cyan-200  border-t-transparent bg-transparent                 px-3 py-2.5 pr-20 font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-cyan-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
// r icon   className="peer h-full w-full rounded-[7px]          border border-cyan-200  border-t-transparent bg-transparent                 px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-cyan-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
// large    className="peer h-full w-full rounded-md             border border-cyan-200  border-t-transparent bg-transparent p-3                               font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-cyan-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
// new      className="peer h-full w-full rounded-md                                     "
//                                              {inputOutline.borderWidth}

export const Input: FC<InputProps> = ({
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
      <label
        htmlFor={name}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      >
        {label}
      </label>
    ) : null;
  };

  const inputClass = classNames(
    "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500",
    // width,
    // height,
    // textSize,
    // "shadow-sm",
    className,
    isDisabled ? "pointer-events-none opacity-60" : ""
  );

  // <div class="relative z-0">
  //    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
  //    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Floating standard</label>
  // </div>

  return (
    <div>
      <div className="relative z-0 py-2">
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
