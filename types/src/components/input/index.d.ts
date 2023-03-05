import { FC, FocusEventHandler, MouseEventHandler } from "react";
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
export declare const Input: FC<IInputProps>;
export default Input;
