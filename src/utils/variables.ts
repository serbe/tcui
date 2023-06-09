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

export const ColorValues = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

export type Sizes = "large" | "normal" | "small";

export const SizeValues = ["large", "normal", "small"];

export type InputTypes =
  | "email"
  | "password"
  | "tel"
  | "text"
  | "url"
  | "number";

export type Positions = "left" | "right";

type HtmlInputSetter = (event: ChangeEvent<HTMLInputElement>) => void;

export interface IBackground {
  background?: string;
  attachment?: string;
  blendMode?: string;
  clip?: string;
  color?: string;
  image?: string;
  origin?: string;
  position?: string;
  positionX?: string;
  positionY?: string;
  repeat?: string;
  size?: string;
}

export interface IBorder {
  border?: string;
  radius?: string;
  width?: string;
  top?: BasicProps;
  bottom?: BasicProps;
  left?: BasicProps;
  right?: BasicProps;
  color?: string;
  placement?: IPlacement;
}

export interface IBox {
  decorationBreak?: string;
  shadow?: string;
  sizing?: string;
}

export interface IFlex {
  flex?: string;
  basis?: string;
  direction?: string;
  flow?: string;
  grow?: string;
  shrink?: string;
  wrap?: string;
}

export interface IFont {
  font?: string;
  color?: string;
  family?: string;
  size?: string;
  style?: string;
  variant?: string;
  weight?: string;
}

export interface IGrid {
  grid?: string;
  area?: string;
  column?: string;
  row?: string;
  template?: string;
}

export interface ILine {
  break?: string;
  height?: string;
}

export interface IMargin {
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
}

export interface IOutline {
  outline?: string;
  color?: string;
  offset?: string;
  style?: string;
  width?: string;
}

export interface IPadding {
  padding?: string;
  block?: string;
  blockEnd?: string;
  blockStart?: string;
  bottom?: string;
  inline?: string;
  inlineEnd?: string;
  inlineStart?: string;
  left?: string;
  right?: string;
  top?: string;
  x?: string;
  y?: string;
}

export interface IPlacement {
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
  inset?: string;
}

export interface IText {
  align?: string;
  decoration?: string;
  indent?: string;
  justify?: string;
  orientation?: string;
  overflow?: string;
  shadow?: string;
  transform?: string;
}

export interface ITransition {
  transition?: string;
  delay?: string;
  duration?: string;
  property?: string;
  timingFunction?: string;
}

export interface ICSSStyle extends BasicProps {
  background?: IBackground;
  border?: IBorder;
  box?: IBox;
  display?: string;
  duration?: string;
  flex?: IFlex;
  font?: IFont;
  grid?: IGrid;
  line?: ILine;
  margin?: IMargin;
  outline?: IOutline;
  padding?: IPadding;
  placement?: IPlacement;
  pointerEvent?: string;
  position?: string;
  scale?: string;
  text?: IText;
  transition?: ITransition;
  userSelect?: string;
}

export interface BasicProps {
  blockSize?: string;
  bottom?: string;
  collapse?: string;
  color?: string;
  colorScheme?: string;
  columns?: string;
  end?: string;
  height?: string;
  image?: string;
  inline?: string;
  left?: string;
  radius?: string;
  right?: string;
  spacing?: string;
  start?: string;
  style?: string;
  top?: string;
  width?: string;
}

export interface IClassName extends ICSSStyle {
  before?: ICSSStyle;
  after?: ICSSStyle;
  peer?: ICSSStyle & {
    peer?: string;
    placeholder?: ICSSStyle & {
      shown?: ICSSStyle & {
        before?: ICSSStyle;
        after?: ICSSStyle;
      };
    };
    focus?: ICSSStyle & {
      after?: ICSSStyle;
      before?: ICSSStyle;
    };
    disabled?: ICSSStyle & {
      before?: ICSSStyle;
      after?: ICSSStyle;
      peer?: ICSSStyle & {
        placeholder?: ICSSStyle & {
          shown?: ICSSStyle;
        };
      };
    };
  };
  placeholder?: ICSSStyle & {
    shown?: ICSSStyle;
  };
  focus?: ICSSStyle;
  disabled?: ICSSStyle;
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
