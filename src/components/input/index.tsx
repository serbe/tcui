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
  IClassName,
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

const getLabelClass = (
  color: Colors,
  isOutlined: boolean,
  size: Sizes
): IClassName => {
  // const leading =
  //   size == "large"
  //     ? "peer-placeholder-shown:leading-[4.1]"
  //     : "peer-placeholder-shown:leading-[3.75]";
  return !isOutlined
    ? {
        pointerEvent: "pointer-events-none",
        position: "absolute",
        placement: {
          top: "-top-1.5",
          left: "left-0",
        },
        display: "flex",
        height: "h-full",
        width: "w-full",
        userSelect: "select-none",
        font: {
          size: "text-[11px]",
          weight: "font-normal",
          color: "text-slate-500",
        },
        line: {
          height: "leading-tight",
        },
        transition: {
          transition: "transition-all",
        },
        after: {
          position: "after:absolute",
          placement: {
            bottom: "after:-bottom-1.5",
          },
          display: "after:block",
          width: "after:w-full",
          scale: "after:scale-x-0",
          border: {
            placement: {
              bottom: "after:border-b-2",
            },
            color: "after:border-pink-500",
          },
          transition: {
            transition: "after:transition-transform",
          },
          duration: "after:duration-300",
        },
        peer: {
          placeholder: {
            shown: {
              font: {
                size: "peer-placeholder-shown:text-sm",
                color: "peer-placeholder-shown:text-slate-500",
              },
              line: {
                height: "peer-placeholder-shown:leading-[4.25]",
              },
            },
          },
          focus: {
            font: {
              size: "peer-focus:text-[11px]",
              color: "peer-focus:text-pink-500",
            },
            line: {
              height: "peer-focus:leading-tight",
            },
            after: {
              scale: "peer-focus:after:scale-x-100",
              border: {
                color: "peer-focus:after:border-pink-500",
              },
            },
          },
          disabled: {
            font: {
              color: "peer-disabled:text-transparent",
            },
            peer: {
              placeholder: {
                shown: {
                  font: {
                    color:
                      "peer-disabled:peer-placeholder-shown:text-slate-500",
                  },
                },
              },
            },
          },
        },
      }
    : {
        pointerEvent: "pointer-events-none",
        position: "absolute",
        placement: {
          top: "-top-1.5",
          left: "left-0",
        },
        display: "flex",
        height: "h-full",
        width: "w-full",
        userSelect: "select-none",
        font: {
          size: "text-[11px]",
          weight: "font-normal",
          color: "text-slate-400",
        },
        line: {
          height: "leading-tight",
        },
        transition: {
          transition: "transition-all",
        },
        before: {
          pointerEvent: "before:pointer-events-none",
          margin: {
            right: "before:mr-1",
            top: "before:mt-[6.5px]",
          },
          box: {
            sizing: "before:box-border",
          },
          display: "before:block",
          height: "before:h-1.5",
          width: "before:w-2.5",
          border: {
            radius: "before:rounded-tl-md",
            left: {
              width: "before:border-l",
            },
            top: {
              width: "before:border-t",
            },
            color: "before:border-slate-300",
          },
          transition: {
            transition: "before:transition-all",
          },
        },
        after: {
          pointerEvent: "after:pointer-events-none",
          margin: {
            left: "after:ml-1",
            top: "after:mt-[6.5px]",
          },
          box: {
            sizing: "after:box-border",
          },
          display: "after:block",
          height: "after:h-1.5",
          width: "after:w-2.5",
          flex: {
            grow: "after:flex-grow",
          },
          border: {
            radius: "after:rounded-tr-md",
            right: {
              width: "after:border-r",
            },
            top: {
              width: "after:border-t",
            },
            color: "after:border-slate-300",
          },
          transition: {
            transition: "after:transition-all",
          },
        },
        peer: {
          placeholder: {
            shown: {
              font: {
                size: "peer-placeholder-shown:text-sm",
                color: "peer-placeholder-shown:text-slate-500",
              },
              line: {
                height: "peer-placeholder-shown:leading-[3.75]",
              },
              before: {
                border: {
                  color: "peer-placeholder-shown:before:border-transparent",
                },
              },
              after: {
                border: {
                  color: "peer-placeholder-shown:after:border-transparent",
                },
              },
            },
          },
          focus: {
            font: {
              size: "peer-focus:text-[11px]",
              color: "peer-focus:text-pink-500",
            },
            line: {
              height: "peer-focus:leading-tight",
            },
            before: {
              border: {
                left: {
                  width: "peer-focus:before:border-l-2",
                },
                top: {
                  width: "peer-focus:before:border-t-2",
                },
                color: "peer-focus:before:border-pink-500",
              },
            },
            after: {
              border: {
                right: {
                  width: "peer-focus:after:border-r-2",
                },
                top: {
                  width: "peer-focus:after:border-t-2",
                },
                color: "peer-focus:after:border-pink-500",
              },
            },
          },
          disabled: {
            font: {
              color: "peer-disabled:text-transparent",
            },
            before: {
              border: {
                color: "peer-disabled:before:border-transparent",
              },
            },
            after: {
              border: {
                color: "peer-disabled:after:border-transparent",
              },
            },
            peer: {
              placeholder: {
                shown: {
                  font: {
                    color:
                      "peer-disabled:peer-placeholder-shown:text-slate-500",
                  },
                },
              },
            },
          },
        },
      };
};

const getInputClass = (
  color: Colors,
  isOutlined: boolean,
  size: Sizes
): IClassName => {
  return !isOutlined
    ? {
        peer: {
          peer: "peer",
        },
        height: "h-full",
        width: "w-full",
        border: {
          bottom: {
            width: "border-b",
          },
          color: "border-slate-300",
        },
        background: {
          color: "bg-transparent",
        },
        padding: {
          bottom: "pb-1.5",
          top: "pt-4",
        },
        font: {
          family: "font-sans",
          size: "text-sm",
          weight: "font-normal",
          color: "text-slate-600",
        },
        outline: {
          style: "outline",
          width: "outline-0",
        },
        transition: {
          transition: "transition-all",
        },
        placeholder: {
          shown: {
            border: {
              color: "placeholder-shown:border-slate-300",
            },
          },
        },
        focus: {
          border: {
            color: "focus:border-pink-500",
          },
          outline: {
            width: "focus:outline-0",
          },
        },
        disabled: {
          border: {
            width: "disabled:border-0",
          },
          background: {
            color: "disabled:bg-slate-100",
          },
        },
      }
    : {
        peer: {
          peer: "peer",
        },
        height: "h-full",
        width: "w-full",
        border: {
          radius: "rounded-[7px]",
          width: "border",
          color: "border-slate-300",
          top: {
            color: "border-t-transparent",
          },
        },
        background: {
          color: "bg-transparent",
        },
        padding: {
          x: "px-3",
          y: "py-2.5",
        },
        font: {
          family: "font-sans",
          size: "text-sm",
          weight: "font-normal",
          color: "text-slate-600",
        },
        outline: {
          style: "outline",
          width: "outline-0",
        },
        transition: {
          transition: "transition-all",
        },
        placeholder: {
          shown: {
            border: {
              width: "placeholder-shown:border",
              color: "placeholder-shown:border-slate-300",
              top: {
                color: "placeholder-shown:border-t-slate-300",
              },
            },
          },
        },
        focus: {
          border: {
            width: "focus:border-2",
            color: "focus:border-pink-500",
            top: {
              color: "focus:border-t-transparent",
            },
          },
          outline: {
            width: "focus:outline-0",
          },
        },
        disabled: {
          border: {
            width: "disabled:border-0",
          },
          background: {
            color: "disabled:bg-slate-100",
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

  const ic = getInputClass(color, isOutlined, size);

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

  const gl = getLabelClass(color, isOutlined, size);

  const labelClassNames = classNames(
    gl.pointerEvent,
    gl.position,
    gl.placement?.left,
    gl.placement?.top,
    gl.display,
    gl.height,
    gl.width,
    gl.userSelect,
    gl.font?.size,
    gl.font?.weight,
    gl.line?.height,
    gl.font?.color,
    gl.transition?.transition,
    gl.before?.pointerEvent,
    gl.before?.margin?.top,
    gl.before?.margin?.right,
    gl.before?.box?.sizing,
    gl.before?.display,
    gl.before?.height,
    gl.before?.width,
    gl.before?.border?.radius,
    gl.before?.border?.left?.width,
    gl.before?.border?.top?.width,
    gl.before?.border?.color,
    gl.before?.transition?.transition,
    gl.after?.pointerEvent,
    gl.after?.margin?.top,
    gl.after?.margin?.left,
    gl.after?.box?.sizing,
    gl.after?.position,
    gl.after?.placement?.bottom,
    gl.after?.display,
    gl.after?.height,
    gl.after?.width,
    gl.after?.flex?.grow,
    gl.after?.scale,
    gl.after?.border?.radius,
    gl.after?.border?.right?.width,
    gl.after?.border?.top?.width,
    gl.after?.border?.placement?.bottom,
    gl.after?.border?.color,
    gl.after?.transition?.transition,
    gl.after?.duration,
    gl.peer?.placeholder?.shown?.font?.size,
    gl.peer?.placeholder?.shown?.line?.height,
    gl.peer?.placeholder?.shown?.font?.color,
    gl.peer?.placeholder?.shown?.before?.border?.color,
    gl.peer?.placeholder?.shown?.after?.border?.color,
    gl.peer?.focus?.font?.size,
    gl.peer?.focus?.line?.height,
    gl.peer?.focus?.font?.color,
    gl.peer?.focus?.before?.border?.left?.width,
    gl.peer?.focus?.before?.border?.top?.width,
    gl.peer?.focus?.before?.border?.color,
    gl.peer?.focus?.after?.scale,
    gl.peer?.focus?.after?.border?.right?.width,
    gl.peer?.focus?.after?.border?.top?.width,
    gl.peer?.focus?.after?.border?.color,
    gl.peer?.disabled?.font?.color,
    gl.peer?.disabled?.before?.border?.color,
    gl.peer?.disabled?.after?.border?.color,
    gl.peer?.disabled?.peer?.placeholder?.shown?.font?.color
  );

  const inputClassNames = classNames(
    ic.peer?.peer,
    ic.height,
    ic.width,
    ic.border?.radius,
    ic.border?.width,
    ic.border?.color,
    ic.border?.bottom?.width,
    ic.border?.top?.color,
    ic.background?.color,
    ic.padding?.bottom,
    ic.padding?.top,
    ic.padding?.x,
    ic.padding?.y,
    ic.font?.family,
    ic.font?.size,
    ic.font?.weight,
    ic.font?.color,
    ic.outline?.style,
    ic.outline?.width,
    ic.transition?.transition,
    ic.placeholder?.shown?.border?.width,
    ic.placeholder?.shown?.border?.color,
    ic.focus?.border?.width,
    ic.focus?.border?.color,
    ic.focus?.border?.top?.color,
    ic.focus?.outline?.width,
    ic.disabled?.border?.width,
    ic.disabled?.background?.color,
    className
  );

  const Label = (): JSX.Element | null => {
    return label ? (
      <label htmlFor={name} className={labelClassNames}>
        {label}
      </label>
    ) : null;
  };

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
