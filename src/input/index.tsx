import clsx from 'clsx'
import { ChangeEventHandler, FocusEventHandler, Fragment, MouseEventHandler } from 'react'
import type { InputTypes, Sizes } from '../variables'

type InputProperties = {
  autocomplete?: string
  className?: string
  defaultValue?: number | string
  isDisabled?: boolean
  isReadOnly?: boolean
  label?: string
  name: string
  onBlur?: FocusEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
  placeholder?: string
  size?: Sizes
  textHelper?: string
  type?: InputTypes
  value?: number | string
}

const sizeClass = (size: Sizes): string => {
  switch (size) {
    case 'small':
      return 'px-2 py-1 text-sm'
    case 'normal':
      return 'px-3 py-1.5 text-base'
    case 'large':
      return 'px-4 py-2 text-xl'
    default:
      return 'px-3 py-1.5 text-base'
  }
}

export function Input({
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
}: InputProperties): JSX.Element {
  const Helper = () =>
    textHelper ? <div className="mt-1 text-sm text-gray-500">{textHelper}</div> : <Fragment />

  const Label = () =>
    label ? (
      <label htmlFor={name} className="mb-2 inline-block text-gray-700">
        {label}
      </label>
    ) : (
      <Fragment />
    )

  // eslint-disable-next-line tailwindcss/no-custom-classname
  const inputClass = clsx(
    `form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none`,
    className,
    sizeClass(size),
    { ['pointer-events-none opacity-60']: isDisabled },
  )

  const defaultValueCheck = onChange ? undefined : ''

  return (
    <div className="mb-3 xl:w-96">
      <Label />
      <input
        type={type}
        className={inputClass}
        autoComplete={autocomplete}
        defaultValue={defaultValue ? defaultValue : defaultValueCheck}
        disabled={isDisabled}
        id={name}
        placeholder={placeholder || label}
        key={name}
        onBlur={onBlur}
        onChange={onChange}
        onClick={onClick}
        readOnly={isReadOnly}
        value={value}
      />
      <Helper />
    </div>
  )
}

Input.defaultProps = {
  autocomplete: undefined,
  color: undefined,
  defaultValue: undefined,
  isDisabled: false,
  isReadOnly: false,
  onBlur: undefined,
  onChange: undefined,
  onClick: undefined,
  placeholder: undefined,
  type: 'text',
  value: undefined,
}

export default Input
