// Import { ChangeEventHandler, FocusEventHandler, Fragment, MouseEventHandler } from 'react'
import React, { FC } from "react";

import { classNames, classToString } from "../../utils/classNames";
import {
  borderColor,
  focusBorderColor,
  textColor,
  type Colors,
  type IClassName,
  type Sizes,
} from "../../utils/variables";

interface ISelectItem {
  id: number;
  name: string;
}

interface ISelectProps {
  color?: Colors;
  className?: string;
  data: ISelectItem[];
  id?: number;
  label?: string;
  name: string;
  size?: Sizes;
  // Setter: Dispatch<SetStateAction<number | undefined>>
}

interface ISelectSize {
  width: string;
  height: string;
  textSize: string;
}

// Export const Select({
//   name,
//   id,
//   label,
//   icon,
//   color,
//   listName,
//   setter,
//   size = "normal"
// }: SelectProperties): JSX.Element {
//   const [opened, setOpened] = useState(false)
//   const [itemID, setItemID] = useState(id ?? 0)
//   const [list, error] = GetSelect(listName)
//   const [value, setValue, valueInput] = useStringU()

//   useEffect(() => {
//     if (itemID === 0 && id) {
//       setItemID(id)
//     }

//     if (list[0].id !== 0) {
//       list.unshift({ id: 0, name: '' })
//     }

//     if (id === 0) {
//       setValue('')
//     } else {
//       const currentItem = list.find((item) => item.id === id)
//       setValue(currentItem?.name ?? '')
//     }
//   }, [list, id, itemID, setValue])

//   const currentValue = (): string => {
//     if (opened) {
//       return value ?? ''
//     }

//     const currentItem = list.find((item) => item.id === itemID)
//     return currentItem?.name ?? ''
//   }

//   const filteredList = (): SelectItem[] => {
//     const inputValue = currentValue()

//     if (inputValue.trim().length === 0) {
//       return list
//     }

//     const inputArray = inputValue.split(' ')

//     return list.filter(
//       (listItem) =>
//         listItem.name === '' ||
//         inputArray.every((listItemValue: string) =>
//           new RegExp(listItemValue, 'i').exec(listItem.name),
//         ),
//     )
//   }

//   const inputColor = color ? `is-${color}` : ''
//   const iconColor = color === 'primary' ? undefined : color

//   return (
//     <div key={name} className="field">
//       {label && (
//         <label key="SelectLabel" className="label" htmlFor={`select-${name}-id`}>
//           {label}
//         </label>
//       )}
//       <div
//         key={`${name}-control`}
//         className={`control is-expanded select is-fullwidth ${icon ? 'has-icons-left' : ''}`}
//         id={`select-${name}-id`}
//       >
//         <input
//           key={`${name}-input`}
//           aria-controls="dropdown-menu"
//           aria-haspopup="true"
//           autoComplete="off"
//           className={`input ${inputColor}`}
//           name={name}
//           type="text"
//           value={currentValue()}
//           onBlur={(): void => {
//             setTimeout(() => {
//               setOpened(false)
//             }, 300)
//           }}
//           onChange={valueInput}
//           onFocus={(): void => {
//             setOpened(true)
//           }}
//         />
//         {icon && <Icon key="SelectIconLeft" color={iconColor} icon={icon} position="left" />}
//       </div>
//       {!error && opened && (
//         <div key={`${name}-dropdown`} className="select-box">
//           {filteredList().map((ListItem, index) => (
//             <div
//               key={`${name}-${ListItem.id}`}
//               className="select-item"
//               role="row"
//               tabIndex={index}
//               onMouseDown={(): void => {
//                 setItemID(ListItem.id)
//                 setValue(ListItem.name)
//                 setter(ListItem.id === 0 ? undefined : ListItem.id)
//               }}
//             >
//               {ListItem.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// Select.defaultProps = {
//   color: undefined,
//   icon: undefined,
//   id: 0,
//   label: undefined,
// }

const selectValues: Record<Sizes, ISelectSize> = {
  small: { width: "px-2", height: "py-1", textSize: "text-sm" },
  normal: { width: "px-3", height: "py-1.5", textSize: "text-base" },
  large: { width: "px-4", height: "py-2", textSize: "text-xl" },
};

const getSelectClass = (color: Colors, size: Sizes): IClassName => {
  const selectSize = selectValues[size ?? "normal"];
  return {
    peer: {
      peer: "peer",
    },
    height: "h-full",
    width: "w-full",
    border: {
      radius: "rounded-[7px]",
      width: "border",
      color: borderColor[color],
      top: {
        color: "border-t-transparent",
      },
    },
    background: {
      color: "bg-transparent",
    },
    padding: {
      x: selectSize.width,
      y: selectSize.height,
    },
    font: {
      family: "font-sans",
      size: selectSize.textSize,
      weight: "font-normal",
      color: textColor[color],
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
        },
      },
    },
    empty: {
      background: {
        color: "empty:!bg-red-500",
      },
    },
    focus: {
      border: {
        width: "focus:border-2",
        color: focusBorderColor[color],
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

const getLabelClass = (color: Colors): IClassName => {
  return {
    pointerEvent: "pointer-events-none",
    position: "absolute",
    top: "-top-1.5",
    left: "left-0",
    flex: {
      flex: "flex",
    },
    height: "h-full",
    width: "w-full",
    userSelect: "select-none",
    font: {
      size: "text-[11px]",
      weight: "font-normal",
      color: textColor[color],
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
        color: "before:border-slate-200",
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
        color: "after:border-slate-200",
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
                color: "peer-disabled:peer-placeholder-shown:text-slate-500",
              },
            },
          },
        },
      },
    },
  };
};

export const Select: FC<ISelectProps> = ({
  color = "slate",
  className,
  data,
  id,
  label,
  name,
  size = "normal",
}) => {
  const selectClass = classNames(
    classToString(getSelectClass(color, size)),
    className,
  );

  const valueClass = classToString(getLabelClass(color));

  return (
    <div className="flex justify-center">
      <div className="relative h-10 w-72">
        <select
          id={name}
          className={selectClass}
          // value={SelectItem?.id ? SelectItem.id : 0}
          defaultValue={id ? id : 0}
          aria-label={name}
        >
          {data.map((item) => (
            <option key={`${name} + ${item.id}`} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
        <label htmlFor={name} className={valueClass}>
          {label}
        </label>
      </div>
    </div>
  );
};

Select.defaultProps = {
  size: "normal",
};

export default Select;
