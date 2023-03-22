import React, {
  ChangeEvent,
  FC,
  FocusEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";

import { classNames } from "../../utils/classNames";
import type {
  Colors,
  IBorder,
  InputTypes,
  IPadding,
  Sizes,
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

interface IInputClass {
  border?: IBorder;
  focus?: { border?: IBorder };
  padding?: IPadding;
  placeholderShown?: { border?: IBorder };
}

const sizePadding: Record<Sizes, IPadding> = {
  small: { top: "pt-4", bottom: "pb-1.5" },
  normal: { top: "pt-4", bottom: "pb-1.5" },
  large: { top: "pt-4", bottom: "pb-1.5" },
};

const sizePaddingOutlined: Record<Sizes, IPadding> = {
  small: { x: "px-3", y: "py-2.5" },
  normal: { x: "px-3", y: "py-2.5" },
  large: { x: "px-3", y: "py-3" },
};

const sizeBorderRadius: Record<Sizes, string> = {
  small: "rounded-[7px]",
  normal: "rounded-[7px]",
  large: "rounded-md",
};

const inputFocusColor: Record<Colors, string> = {
  slate: "focus:border-slate-500",
  gray: "focus:border-gray-500",
  zinc: "focus:border-zinc-500",
  neutral: "focus:border-neutral-500",
  stone: "focus:border-stone-500",
  red: "focus:border-red-500",
  orange: "focus:border-orange-500",
  amber: "focus:border-amber-500",
  yellow: "focus:border-yellow-500",
  lime: "focus:border-lime-500",
  green: "focus:border-green-500",
  emerald: "focus:border-emerald-500",
  teal: "focus:border-teal-500",
  cyan: "focus:border-cyan-500",
  sky: "focus:border-sky-500",
  blue: "focus:border-blue-500",
  indigo: "focus:border-indigo-500",
  violet: "focus:border-violet-500",
  purple: "focus:border-purple-500",
  fuchsia: "focus:border-fuchsia-500",
  pink: "focus:border-pink-500",
  rose: "focus:border-rose-500",
};

const getInputClass = (
  color: Colors,
  isOutlined: boolean,
  size: Sizes
): IInputClass => {
  const borderRadius = sizeBorderRadius[size];
  const padding = isOutlined ? sizePaddingOutlined[size] : sizePadding[size];
  const focusColor = inputFocusColor[color];
  return !isOutlined
    ? {
        border: { width: "border-b" },
        padding: padding,
      }
    : {
        border: {
          radius: borderRadius,
          topColor: "border-t-transparent",
          width: "border",
        },
        placeholderShown: {
          border: { width: "placeholder-shown:border" },
        },
        focus: {
          border: {
            color: focusColor,
            topColor: "focus:border-t-transparent",
            width: "focus:border-2",
          },
        },
        padding: padding,
      };
};

// static   className="peer h-full w-full                          border-b                border-cyan-200                             bg-transparent pt-4                    pb-1.5                                                                                                                    font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all                                         placeholder-shown:border-cyan-200                                focus:border-pink-500                                          focus:outline-0 disabled:border-0 disabled:bg-cyan-50
// standard className="peer h-full w-full                          border-b                border-slate-300                            bg-transparent pt-4                    pb-1.5                                                                                                                    font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all                                         placeholder-shown:border-slate-300                               focus:border-pink-500                                          focus:outline-0 disabled:border-0 disabled:bg-slate-100"
// outlined className="peer h-full w-full rounded-[7px]            border                  border-slate-300 border-t-transparent       bg-transparent                                                    px-3                  py-2.5                                                                   font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border                placeholder-shown:border-slate-300 focus:border-2                focus:border-pink-500         focus:border-t-transparent       focus:outline-0 disabled:border-0 disabled:bg-slate-100"
// r button className="peer h-full w-full rounded-[7px]            border                  border-cyan-200  border-t-transparent       bg-transparent                                                    px-3                  py-2.5 pr-20                                                             font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border                placeholder-shown:border-cyan-200  focus:border-2                focus:border-pink-500         focus:border-t-transparent       focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
// r icon   className="peer h-full w-full rounded-[7px]            border                  border-cyan-200  border-t-transparent       bg-transparent                                                    px-3                  py-2.5 !pr-9                                                             font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border                placeholder-shown:border-cyan-200  focus:border-2                focus:border-pink-500         focus:border-t-transparent       focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
// large    className="peer h-full w-full rounded-md               border                  border-cyan-200  border-t-transparent       bg-transparent                                                    p-3                                                                                            font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border                placeholder-shown:border-cyan-200  focus:border-2                focus:border-pink-500         focus:border-t-transparent       focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
// new      className="peer h-full w-full {ic.border.borderRadius} {ic.border.borderWidth} border-slate-300 {ic.border.borderTopColor} bg-transparent {ic.padding.paddingTop} {ic.padding.paddingBottom} {ic.padding.paddingX} {ic.padding.paddingY} {ic.padding.paddingLeft} {ic.padding.paddingRight} font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all {ic.placeholderShown.border.borderWith} placeholder-shown:border-slate-300 {ic.focus.border.borderWidth} {ic.focus.border.borderColor} {ic.focus.border.borderTopColor} focus:outline-0 disabled:border-0 disabled:bg-slate-100"

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
  placeholder,
  size = "normal",
  textHelper,
  type,
  value,
}) => {
  const inputRef = useRef(null);

  // const { width, height, textSize } = sizeValues[size];
  const [inputValue, setInputValue] = useState<string | number>(value);

  const ic = getInputClass(color, isOutlined, size);

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

  const inputClassNames = classNames(
    "peer h-full w-full",
    ic.border?.radius,
    ic.border?.width,
    "border-slate-300",
    ic.border?.topColor,
    "bg-transparent",
    ic.padding?.top,
    ic.padding?.bottom,
    ic.padding?.x,
    ic.padding?.y,
    ic.padding?.left,
    ic.padding?.right,
    "font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all",
    ic.placeholderShown?.border?.width,
    "placeholder-shown:border-slate-300",
    ic.focus?.border?.width,
    ic.focus?.border?.color,
    ic.focus?.border?.topColor,
    "focus:outline-0 disabled:border-0 disabled:bg-slate-100",
    // width,
    // height,
    // textSize,
    // "shadow-sm",
    className
  );

  // <div class="relative z-0">
  //    <input type="text" id="floating_standard" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
  //    <label for="floating_standard" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Floating standard</label>
  // </div>

  return (
    <div>
      <div className="relative h-10 w-full min-w-[200px]">
        <input
          autoComplete={autocomplete}
          className={inputClassNames}
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
