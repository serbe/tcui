// Import { ChangeEventHandler, FocusEventHandler, Fragment, MouseEventHandler } from 'react'
import type { FC } from "react";

import type { Colors, Sizes } from "../../utils/variables";

import { classNames } from "../../utils/class-names";
import { backgroundColor } from "../../utils/variables";

interface ISelectItem {
  id: number;
  name: string;
}

interface ISelectProperties {
  bgColor?: Colors;
  className?: string;
  data: ISelectItem[];
  divClassName?: string;
  id?: number;
  isFullwidth?: boolean;
  name: string;
  size?: Sizes;
  // Setter: Dispatch<SetStateAction<number | undefined>>
}

// interface ISelectSize {
//   width: string;
//   height: string;
//   textSize: string;
// }

// const selectValues: Record<Sizes, ISelectSize> = {
//   small: { width: "px-2", height: "py-1", textSize: "text-sm" },
//   normal: { width: "px-3", height: "py-1.5", textSize: "text-base" },
//   large: { width: "px-4", height: "py-2", textSize: "text-xl" },
// };

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

export const Select: FC<ISelectProperties> = ({
  bgColor = "white",
  // className,
  data,
  divClassName,
  // id,
  isFullwidth,
  // name,
  // size,
}) => {
  /// eslint-disable-next-line tailwindcss/no-custom-classname
  // const selectClass = classNames(
  //   "form-select m-0 block w-full appearance-none rounded border border-solid border-gray-300",
  //   "bg-white bg-clip-padding bg-no-repeat font-normal text-gray-700 transition ease-in-out",
  //   "focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none",
  //   className,
  //   // selectValues[size ?? "normal"],
  // );

  const divClassNames = classNames(
    divClassName,
    "relative",
    isFullwidth ? "w-full" : undefined,
    // elementSize.divHeight,
    backgroundColor[bgColor],
  );

  return (
    <div className={divClassNames}>
      <input />
      <div>
        {data.map((SelectItem) => (
          <div key={SelectItem.id}>{SelectItem.name}</div>
        ))}
      </div>
      {/* <div className="mb-3 xl:w-96">
        <select aria-label={name} className={selectClass}>
          {data.map((SelectItem) => (
            <option
              key={`${name} + ${SelectItem.id}`}
              selected={SelectItem.id === (id ?? 0)}
              value={SelectItem.id}
            >
              {SelectItem.name}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
};

Select.defaultProps = {
  size: "normal",
};

export default Select;
