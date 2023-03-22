import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export type Colors =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export type Sizes = "large" | "normal" | "small";

export type InputTypes =
  | "email"
  | "password"
  | "tel"
  | "text"
  | "url"
  | "number";

export type Positions = "left" | "right";

type HtmlInputSetter = (event: ChangeEvent<HTMLInputElement>) => void;

export interface IBorder {
  radius?: string;
  width?: string;
  color?: string;
  topColor?: string;
}

export interface IPadding {
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
  x?: string;
  y?: string;
}

export interface IShadow {
  box?: string;
  color: string;
}

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
