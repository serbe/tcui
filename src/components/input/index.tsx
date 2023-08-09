import React, {
  ChangeEvent,
  FC,
  FocusEventHandler,
  MouseEventHandler,
  useRef,
  useState,
} from "react";

import { classNames, classToString } from "../../utils/classNames";
import type {
  Colors,
  IClassName,
  IPadding,
  InputTypes,
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

interface IDivSize {
  height: string;
}

const divSize: Record<Sizes, IDivSize> = {
  small: {
    height: "h-9",
  },
  normal: {
    height: "h-10",
  },
  large: {
    height: "h-11",
  },
};

interface IInputSize {
  fontSize: string;
  radius: string;
  padding: IPadding;
}

const inputSize: Record<Sizes, IInputSize> = {
  small: {
    fontSize: "text-sm",
    radius: "rounded-[8px]",
    padding: { x: "px-3", y: "py-2" },
  },
  normal: {
    fontSize: "text-sm",
    radius: "rounded-[7px]",
    padding: { x: "px-3", y: "py-2.5" },
  },
  large: {
    fontSize: "text-base",
    radius: "rounded-md",
    padding: { padding: "p-3" },
  },
};

interface ILabelSize {
  height: string;
  fontSize: string;
}

const labelSize: Record<Sizes, ILabelSize> = {
  small: {
    height: "peer-placeholder-shown:leading-[3.4]",
    fontSize: "peer-placeholder-shown:text-sm",
  },
  normal: {
    height: "peer-placeholder-shown:leading-[3.75]",
    fontSize: "peer-placeholder-shown:text-sm",
  },
  large: {
    height: "peer-placeholder-shown:leading-[3.4]",
    fontSize: "peer-placeholder-shown:text-base",
  },
};

interface ILabelPeerFocusColor {
  text: string;
  beforeBorder: string;
  afterBorder: string;
  afterBorderN: string;
}

const peerFocusColor: Record<Colors, ILabelPeerFocusColor> = {
  slate: {
    text: "peer-focus:text-slate-500",
    beforeBorder: "peer-focus:before:border-slate-500",
    afterBorder: "peer-focus:after:border-slate-500",
    afterBorderN: "after:border-slate-500",
  },
  gray: {
    text: "peer-focus:text-gray-500",
    beforeBorder: "peer-focus:before:border-gray-500",
    afterBorder: "peer-focus:after:border-gray-500",
    afterBorderN: "after:border-gray-500",
  },
  zinc: {
    text: "peer-focus:text-zinc-500",
    beforeBorder: "peer-focus:before:border-zinc-500",
    afterBorder: "peer-focus:after:border-zinc-500",
    afterBorderN: "after:border-zinc-500",
  },
  neutral: {
    text: "peer-focus:text-neutral-500",
    beforeBorder: "peer-focus:before:border-neutral-500",
    afterBorder: "peer-focus:after:border-neutral-500",
    afterBorderN: "after:border-neutral-500",
  },
  stone: {
    text: "peer-focus:text-stone-500",
    beforeBorder: "peer-focus:before:border-stone-500",
    afterBorder: "peer-focus:after:border-stone-500",
    afterBorderN: "after:border-stone-500",
  },
  red: {
    text: "peer-focus:text-red-500",
    beforeBorder: "peer-focus:before:border-red-500",
    afterBorder: "peer-focus:after:border-red-500",
    afterBorderN: "after:border-red-500",
  },
  orange: {
    text: "peer-focus:text-orange-500",
    beforeBorder: "peer-focus:before:border-orange-500",
    afterBorder: "peer-focus:after:border-orange-500",
    afterBorderN: "after:border-orange-500",
  },
  amber: {
    text: "peer-focus:text-amber-500",
    beforeBorder: "peer-focus:before:border-amber-500",
    afterBorder: "peer-focus:after:border-amber-500",
    afterBorderN: "after:border-amber-500",
  },
  yellow: {
    text: "peer-focus:text-yellow-500",
    beforeBorder: "peer-focus:before:border-yellow-500",
    afterBorder: "peer-focus:after:border-yellow-500",
    afterBorderN: "after:border-yellow-500",
  },
  lime: {
    text: "peer-focus:text-lime-500",
    beforeBorder: "peer-focus:before:border-lime-500",
    afterBorder: "peer-focus:after:border-lime-500",
    afterBorderN: "after:border-lime-500",
  },
  green: {
    text: "peer-focus:text-green-500",
    beforeBorder: "peer-focus:before:border-green-500",
    afterBorder: "peer-focus:after:border-green-500",
    afterBorderN: "after:border-green-500",
  },
  emerald: {
    text: "peer-focus:text-emerald-500",
    beforeBorder: "peer-focus:before:border-emerald-500",
    afterBorder: "peer-focus:after:border-emerald-500",
    afterBorderN: "after:border-emerald-500",
  },
  teal: {
    text: "peer-focus:text-teal-500",
    beforeBorder: "peer-focus:before:border-teal-500",
    afterBorder: "peer-focus:after:border-teal-500",
    afterBorderN: "after:border-teal-500",
  },
  cyan: {
    text: "peer-focus:text-cyan-500",
    beforeBorder: "peer-focus:before:border-cyan-500",
    afterBorder: "peer-focus:after:border-cyan-500",
    afterBorderN: "after:border-cyan-500",
  },
  sky: {
    text: "peer-focus:text-sky-500",
    beforeBorder: "peer-focus:before:border-sky-500",
    afterBorder: "peer-focus:after:border-sky-500",
    afterBorderN: "after:border-sky-500",
  },
  blue: {
    text: "peer-focus:text-blue-500",
    beforeBorder: "peer-focus:before:border-blue-500",
    afterBorder: "peer-focus:after:border-blue-500",
    afterBorderN: "after:border-blue-500",
  },
  indigo: {
    text: "peer-focus:text-indigo-500",
    beforeBorder: "peer-focus:before:border-indigo-500",
    afterBorder: "peer-focus:after:border-indigo-500",
    afterBorderN: "after:border-indigo-500",
  },
  violet: {
    text: "peer-focus:text-violet-500",
    beforeBorder: "peer-focus:before:border-violet-500",
    afterBorder: "peer-focus:after:border-violet-500",
    afterBorderN: "after:border-violet-500",
  },
  purple: {
    text: "peer-focus:text-purple-500",
    beforeBorder: "peer-focus:before:border-purple-500",
    afterBorder: "peer-focus:after:border-purple-500",
    afterBorderN: "after:border-purple-500",
  },
  fuchsia: {
    text: "peer-focus:text-fuchsia-500",
    beforeBorder: "peer-focus:before:border-fuchsia-500",
    afterBorder: "peer-focus:after:border-fuchsia-500",
    afterBorderN: "after:border-fuchsia-500",
  },
  pink: {
    text: "peer-focus:text-pink-500",
    beforeBorder: "peer-focus:before:border-pink-500",
    afterBorder: "peer-focus:after:border-pink-500",
    afterBorderN: "after:border-pink-500",
  },
  rose: {
    text: "peer-focus:text-rose-500",
    beforeBorder: "peer-focus:before:border-rose-500",
    afterBorder: "peer-focus:after:border-rose-500",
    afterBorderN: "after:border-rose-500",
  },
};

const inputFocusBorderColor: Record<Colors, string> = {
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
  size: Sizes,
): IClassName => {
  const pfColor = peerFocusColor[color];
  const lSize = labelSize[size];
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
            color: pfColor.afterBorderN,
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
                size: lSize.fontSize,
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
              color: pfColor.text,
            },
            line: {
              height: "peer-focus:leading-tight",
            },
            after: {
              scale: "peer-focus:after:scale-x-100",
              border: {
                color: pfColor.afterBorder,
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
                size: lSize.fontSize,
                color: "peer-placeholder-shown:text-slate-500",
              },
              line: {
                height: lSize.height,
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
              color: pfColor.text,
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
                color: pfColor.beforeBorder,
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
                color: pfColor.afterBorder,
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
  size: Sizes,
): IClassName => {
  const iFocusBorderColor = inputFocusBorderColor[color];
  const iSize = inputSize[size];
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
          size: iSize.fontSize,
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
            color: iFocusBorderColor,
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
          radius: iSize.radius,
          width: "border",
          color: "border-slate-300",
          top: {
            color: "border-t-transparent",
          },
        },
        background: {
          color: "bg-transparent",
        },
        padding: iSize.padding,
        font: {
          family: "font-sans",
          size: iSize.fontSize,
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
            color: iFocusBorderColor,
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

//               font-sans
// icon // !pr-9 font-sans

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

  const labelClassNames = classToString(gl);

  const inputClassNames = classNames(
    ic.peer?.peer,
    ic.height,
    ic.width,
    ic.border?.border,
    ic.border?.radius,
    ic.border?.width,
    ic.border?.color,
    ic.border?.bottom?.width,
    ic.border?.top?.color,
    ic.background?.color,
    ic.padding?.padding,
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
    className,
  );

  const Label = (): JSX.Element | null => {
    return label ? (
      <label htmlFor={name} className={labelClassNames}>
        {label}
      </label>
    ) : null;
  };

  const iDiv = divSize[size];

  const divClassNames = classNames(
    "relative",
    iDiv.height,
    "w-full",
    "min-w-[200px]",
  );

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
