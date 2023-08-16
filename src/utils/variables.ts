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

export const borderColor: Record<Colors, string> = {
  slate: "border-slate-500",
  gray: "border-gray-500",
  zinc: "border-zinc-500",
  neutral: "border-neutral-500",
  stone: "border-stone-500",
  red: "border-red-500",
  orange: "border-orange-500",
  amber: "border-amber-500",
  yellow: "border-yellow-500",
  lime: "border-lime-500",
  green: "border-green-500",
  emerald: "border-emerald-500",
  teal: "border-teal-500",
  cyan: "border-cyan-500",
  sky: "border-sky-500",
  blue: "border-blue-500",
  indigo: "border-indigo-500",
  violet: "border-violet-500",
  purple: "border-purple-500",
  fuchsia: "border-fuchsia-500",
  pink: "border-pink-500",
  rose: "border-rose-500",
};

export const backgroundColor: Record<Colors, string> = {
  slate: "bg-slate-500",
  gray: "bg-gray-500",
  zinc: "bg-zinc-500",
  neutral: "bg-neutral-500",
  stone: "bg-stone-500",
  red: "bg-red-500",
  orange: "bg-orange-500",
  amber: "bg-amber-500",
  yellow: "bg-yellow-500",
  lime: "bg-lime-500",
  green: "bg-green-500",
  emerald: "bg-emerald-500",
  teal: "bg-teal-500",
  cyan: "bg-cyan-500",
  sky: "bg-sky-500",
  blue: "bg-blue-500",
  indigo: "bg-indigo-500",
  violet: "bg-violet-500",
  purple: "bg-purple-500",
  fuchsia: "bg-fuchsia-500",
  pink: "bg-pink-500",
  rose: "bg-rose-500",
};

export const textColor: Record<Colors, string> = {
  slate: "text-slate-500",
  gray: "text-gray-500",
  zinc: "text-zinc-500",
  neutral: "text-neutral-500",
  stone: "text-stone-500",
  red: "text-red-500",
  orange: "text-orange-500",
  amber: "text-amber-500",
  yellow: "text-yellow-500",
  lime: "text-lime-500",
  green: "text-green-500",
  emerald: "text-emerald-500",
  teal: "text-teal-500",
  cyan: "text-cyan-500",
  sky: "text-sky-500",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  violet: "text-violet-500",
  purple: "text-purple-500",
  fuchsia: "text-fuchsia-500",
  pink: "text-pink-500",
  rose: "text-rose-500",
};

export const focusBorderColor: Record<Colors, string> = {
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

export const peerFocusTextColor: Record<Colors, string> = {
  slate: "peer-focus:text-slate-500",
  gray: "peer-focus:text-gray-500",
  zinc: "peer-focus:text-zinc-500",
  neutral: "peer-focus:text-neutral-500",
  stone: "peer-focus:text-stone-500",
  red: "peer-focus:text-red-500",
  orange: "peer-focus:text-orange-500",
  amber: "peer-focus:text-amber-500",
  yellow: "peer-focus:text-yellow-500",
  lime: "peer-focus:text-lime-500",
  green: "peer-focus:text-green-500",
  emerald: "peer-focus:text-emerald-500",
  teal: "peer-focus:text-teal-500",
  cyan: "peer-focus:text-cyan-500",
  sky: "peer-focus:text-sky-500",
  blue: "peer-focus:text-blue-500",
  indigo: "peer-focus:text-indigo-500",
  violet: "peer-focus:text-violet-500",
  purple: "peer-focus:text-purple-500",
  fuchsia: "peer-focus:text-fuchsia-500",
  pink: "peer-focus:text-pink-500",
  rose: "peer-focus:text-rose-500",
};

export const peerFocusBeforeBorderColor: Record<Colors, string> = {
  slate: "peer-focus:before:border-slate-500",
  gray: "peer-focus:before:border-gray-500",
  zinc: "peer-focus:before:border-zinc-500",
  neutral: "peer-focus:before:border-neutral-500",
  stone: "peer-focus:before:border-stone-500",
  red: "peer-focus:before:border-red-500",
  orange: "peer-focus:before:border-orange-500",
  amber: "peer-focus:before:border-amber-500",
  yellow: "peer-focus:before:border-yellow-500",
  lime: "peer-focus:before:border-lime-500",
  green: "peer-focus:before:border-green-500",
  emerald: "peer-focus:before:border-emerald-500",
  teal: "peer-focus:before:border-teal-500",
  cyan: "peer-focus:before:border-cyan-500",
  sky: "peer-focus:before:border-sky-500",
  blue: "peer-focus:before:border-blue-500",
  indigo: "peer-focus:before:border-indigo-500",
  violet: "peer-focus:before:border-violet-500",
  purple: "peer-focus:before:border-purple-500",
  fuchsia: "peer-focus:before:border-fuchsia-500",
  pink: "peer-focus:before:border-pink-500",
  rose: "peer-focus:before:border-rose-500",
};

export const peerFocusAfterBorderColor: Record<Colors, string> = {
  slate: "peer-focus:after:border-slate-500",
  gray: "peer-focus:after:border-gray-500",
  zinc: "peer-focus:after:border-zinc-500",
  neutral: "peer-focus:after:border-neutral-500",
  stone: "peer-focus:after:border-stone-500",
  red: "peer-focus:after:border-red-500",
  orange: "peer-focus:after:border-orange-500",
  amber: "peer-focus:after:border-amber-500",
  yellow: "peer-focus:after:border-yellow-500",
  lime: "peer-focus:after:border-lime-500",
  green: "peer-focus:after:border-green-500",
  emerald: "peer-focus:after:border-emerald-500",
  teal: "peer-focus:after:border-teal-500",
  cyan: "peer-focus:after:border-cyan-500",
  sky: "peer-focus:after:border-sky-500",
  blue: "peer-focus:after:border-blue-500",
  indigo: "peer-focus:after:border-indigo-500",
  violet: "peer-focus:after:border-violet-500",
  purple: "peer-focus:after:border-purple-500",
  fuchsia: "peer-focus:after:border-fuchsia-500",
  pink: "peer-focus:after:border-pink-500",
  rose: "peer-focus:after:border-rose-500",
};

export const afterBorderColor: Record<Colors, string> = {
  slate: "after:border-slate-500",
  gray: "after:border-gray-500",
  zinc: "after:border-zinc-500",
  neutral: "after:border-neutral-500",
  stone: "after:border-stone-500",
  red: "after:border-red-500",
  orange: "after:border-orange-500",
  amber: "after:border-amber-500",
  yellow: "after:border-yellow-500",
  lime: "after:border-lime-500",
  green: "after:border-green-500",
  emerald: "after:border-emerald-500",
  teal: "after:border-teal-500",
  cyan: "after:border-cyan-500",
  sky: "after:border-sky-500",
  blue: "after:border-blue-500",
  indigo: "after:border-indigo-500",
  violet: "after:border-violet-500",
  purple: "after:border-purple-500",
  fuchsia: "after:border-fuchsia-500",
  pink: "after:border-pink-500",
  rose: "after:border-rose-500",
};

export const focusRingColor: Record<Colors, string> = {
  slate: "focus:ring-slate-500",
  gray: "focus:ring-gray-500",
  zinc: "focus:ring-zinc-500",
  neutral: "focus:ring-neutral-500",
  stone: "focus:ring-stone-500",
  red: "focus:ring-red-500",
  orange: "focus:ring-orange-500",
  amber: "focus:ring-amber-500",
  yellow: "focus:ring-yellow-500",
  lime: "focus:ring-lime-500",
  green: "focus:ring-green-500",
  emerald: "focus:ring-emerald-500",
  teal: "focus:ring-teal-500",
  cyan: "focus:ring-cyan-500",
  sky: "focus:ring-sky-500",
  blue: "focus:ring-blue-500",
  indigo: "focus:ring-indigo-500",
  violet: "focus:ring-violet-500",
  purple: "focus:ring-purple-500",
  fuchsia: "focus:ring-fuchsia-500",
  pink: "focus:ring-pink-500",
  rose: "focus:ring-rose-500",
};

export const shadowColor: Record<Colors, string> = {
  slate: "shadow-slate-500/20",
  gray: "shadow-gray-500/20",
  zinc: "shadow-zinc-500/20",
  neutral: "shadow-neutral-500/20",
  stone: "shadow-stone-500/20",
  red: "shadow-red-500/20",
  orange: "shadow-orange-500/20",
  amber: "shadow-amber-500/20",
  yellow: "shadow-yellow-500/20",
  lime: "shadow-lime-500/20",
  green: "shadow-green-500/20",
  emerald: "shadow-emerald-500/20",
  teal: "shadow-teal-500/20",
  cyan: "shadow-cyan-500/20",
  sky: "shadow-sky-500/20",
  blue: "shadow-blue-500/20",
  indigo: "shadow-indigo-500/20",
  violet: "shadow-violet-500/20",
  purple: "shadow-purple-500/20",
  fuchsia: "shadow-fuchsia-500/20",
  pink: "shadow-pink-500/20",
  rose: "shadow-rose-500/20",
};

export const hoverShadowColor: Record<Colors, string> = {
  slate: "hover:shadow-slate-500/40",
  gray: "hover:shadow-gray-500/40",
  zinc: "hover:shadow-zinc-500/40",
  neutral: "hover:shadow-neutral-500/40",
  stone: "hover:shadow-stone-500/40",
  red: "hover:shadow-red-500/40",
  orange: "hover:shadow-orange-500/40",
  amber: "hover:shadow-amber-500/40",
  yellow: "hover:shadow-yellow-500/40",
  lime: "hover:shadow-lime-500/40",
  green: "hover:shadow-green-500/40",
  emerald: "hover:shadow-emerald-500/40",
  teal: "hover:shadow-teal-500/40",
  cyan: "hover:shadow-cyan-500/40",
  sky: "hover:shadow-sky-500/40",
  blue: "hover:shadow-blue-500/40",
  indigo: "hover:shadow-indigo-500/40",
  violet: "hover:shadow-violet-500/40",
  purple: "hover:shadow-purple-500/40",
  fuchsia: "hover:shadow-fuchsia-500/40",
  pink: "hover:shadow-pink-500/40",
  rose: "hover:shadow-rose-500/40",
};

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
  color?: string;
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

export interface IRing {
  ring?: string;
  color?: string;
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
  pointerEvent?: string;
  margin?: IMargin;
  box?: IBox;
  position?: string;
  placement?: IPlacement;
  display?: string;
  userSelect?: string;
  line?: ILine;
  font?: IFont;
  flex?: IFlex;
  border?: IBorder;
  transition?: ITransition;
  background?: IBackground;
  scale?: string;
  duration?: string;
  grid?: IGrid;
  outline?: IOutline;
  ring?: IRing;
  padding?: IPadding;
  text?: IText;
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
  opacity?: string;
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
  active?: ICSSStyle;
  empty?: ICSSStyle;
  focus?: ICSSStyle;
  hover?: ICSSStyle;
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
