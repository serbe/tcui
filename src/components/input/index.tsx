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
  Colors,
  IClassName,
  IPadding,
  InputTypes,
  Sizes,
  afterBorderColor,
  focusBorderColor,
  peerFocusAfterBorderColor,
  peerFocusBeforeBorderColor,
  peerFocusTextColor,
  textColor,
} from "../../utils/variables";

interface InputProps {
  autocomplete?: string;
  className?: string;
  color?: Colors;
  colorHelper?: Colors;
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

const getLabelClass = (
  color: Colors,
  isOutlined: boolean,
  size: Sizes,
): IClassName => {
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
        line: {
          height: "leading-tight",
        },
        font: {
          size: "text-[11px]",
          weight: "font-normal",
          color: "text-slate-500",
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
            color: afterBorderColor[color],
          },
          transition: {
            transition: "after:transition-transform",
          },
          duration: "after:duration-300",
        },
        peer: {
          placeholder: {
            shown: {
              line: {
                height: "peer-placeholder-shown:leading-[4.25]",
              },
              font: {
                size: lSize.fontSize,
                color: "peer-placeholder-shown:text-slate-500",
              },
            },
          },
          focus: {
            line: {
              height: "peer-focus:leading-tight",
            },
            font: {
              size: "peer-focus:text-[11px]",
              color: peerFocusTextColor[color],
            },
            after: {
              scale: "peer-focus:after:scale-x-100",
              border: {
                color: peerFocusAfterBorderColor[color],
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
        line: {
          height: "leading-tight",
        },
        font: {
          size: "text-[11px]",
          weight: "font-normal",
          color: "text-slate-400",
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
            grow: "after:grow",
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
              line: {
                height: lSize.height,
              },
              font: {
                size: lSize.fontSize,
                color: "peer-placeholder-shown:text-slate-500",
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
            line: {
              height: "peer-focus:leading-tight",
            },
            font: {
              size: "peer-focus:text-[11px]",
              color: peerFocusTextColor[color],
            },
            before: {
              border: {
                left: {
                  width: "peer-focus:before:border-l-2",
                },
                top: {
                  width: "peer-focus:before:border-t-2",
                },
                color: peerFocusBeforeBorderColor[color],
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
                color: peerFocusAfterBorderColor[color],
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
  const iFocusBorderColor = focusBorderColor[color];
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
  colorHelper = "slate",
  isDisabled,
  isOutlined = false,
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
      <div className={`mt-1 text-xs ${textColor[colorHelper]}`}>
        {textHelper}
      </div>
    ) : null;
  };

  const gl = getLabelClass(color, isOutlined, size);

  const labelClassNames = classToString(gl);

  const inputClassNames = classNames(classToString(ic), className);

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
          placeholder={label ? " " : placeholder}
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
