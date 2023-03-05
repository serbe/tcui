import type { ChangeEvent, Dispatch, SetStateAction } from "react";
export type Colors = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
export type Sizes = "large" | "normal" | "small";
export type InputTypes = "email" | "password" | "tel" | "text" | "url" | "number";
export type Positions = "left" | "right";
type HtmlInputSetter = (event: ChangeEvent<HTMLInputElement>) => void;
export interface StringInputProperties {
    value?: string;
    setter: HtmlInputSetter;
}
export interface NumberInputProperties {
    value?: number;
    setter: HtmlInputSetter;
}
export interface BooleanInputProperties {
    value: boolean;
    setter: Dispatch<SetStateAction<boolean>>;
}
export interface SelectValues {
    id?: number;
    setter: Dispatch<SetStateAction<number | undefined>>;
}
export interface DatePickerValues {
    value?: string;
    setter: Dispatch<SetStateAction<string | undefined>>;
}
export {};
