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

export const outlineColor: Record<Colors, string> = {
  slate: "outline-slate-300",
  gray: "outline-gray-300",
  zinc: "outline-zinc-300",
  neutral: "outline-neutral-300",
  stone: "outline-stone-300",
  red: "outline-red-300",
  orange: "outline-orange-300",
  amber: "outline-amber-300",
  yellow: "outline-yellow-300",
  lime: "outline-lime-300",
  green: "outline-green-300",
  emerald: "outline-emerald-300",
  teal: "outline-teal-300",
  cyan: "outline-cyan-300",
  sky: "outline-sky-300",
  blue: "outline-blue-300",
  indigo: "outline-indigo-300",
  violet: "outline-violet-300",
  purple: "outline-purple-300",
  fuchsia: "outline-fuchsia-300",
  pink: "outline-pink-300",
  rose: "outline-rose-300",
};

export const focusOutlineColor: Record<Colors, string> = {
  slate: "focus:outline-slate-500",
  gray: "focus:outline-gray-500",
  zinc: "focus:outline-zinc-500",
  neutral: "focus:outline-neutral-500",
  stone: "focus:outline-stone-500",
  red: "focus:outline-red-500",
  orange: "focus:outline-orange-500",
  amber: "focus:outline-amber-500",
  yellow: "focus:outline-yellow-500",
  lime: "focus:outline-lime-500",
  green: "focus:outline-green-500",
  emerald: "focus:outline-emerald-500",
  teal: "focus:outline-teal-500",
  cyan: "focus:outline-cyan-500",
  sky: "focus:outline-sky-500",
  blue: "focus:outline-blue-500",
  indigo: "focus:outline-indigo-500",
  violet: "focus:outline-violet-500",
  purple: "focus:outline-purple-500",
  fuchsia: "focus:outline-fuchsia-500",
  pink: "focus:outline-pink-500",
  rose: "focus:outline-rose-500",
};

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
  slate: "focus:border-slate-600",
  gray: "focus:border-gray-600",
  zinc: "focus:border-zinc-600",
  neutral: "focus:border-neutral-600",
  stone: "focus:border-stone-600",
  red: "focus:border-red-600",
  orange: "focus:border-orange-600",
  amber: "focus:border-amber-600",
  yellow: "focus:border-yellow-600",
  lime: "focus:border-lime-600",
  green: "focus:border-green-600",
  emerald: "focus:border-emerald-600",
  teal: "focus:border-teal-600",
  cyan: "focus:border-cyan-600",
  sky: "focus:border-sky-600",
  blue: "focus:border-blue-600",
  indigo: "focus:border-indigo-600",
  violet: "focus:border-violet-600",
  purple: "focus:border-purple-600",
  fuchsia: "focus:border-fuchsia-600",
  pink: "focus:border-pink-600",
  rose: "focus:border-rose-600",
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

export interface IClassName extends IObject {
  before?: IObject;
  after?: IObject;
  peer?: IObject & {
    peer?: string;
    placeholder?: IObject & {
      shown?: IObject & {
        before?: IObject;
        after?: IObject;
      };
    };
    focus?: IObject & {
      after?: IObject;
      before?: IObject;
    };
    disabled?: IObject & {
      before?: IObject;
      after?: IObject;
      peer?: IObject & {
        placeholder?: IObject & {
          shown?: IObject;
        };
      };
    };
  };
  placeholder?: IObject & {
    shown?: IObject;
  };
  active?: IObject;
  empty?: IObject;
  focus?: IObject;
  hover?: IObject;
  disabled?: IObject;
}

export interface IObject extends IBasicProps {
  sm?: IBasicProps;
  md?: IBasicProps;
  lg?: IBasicProps;
  xl?: IBasicProps;
  xxl?: IBasicProps;
}

export interface IBasicProps {
  layout?: ILayout;
  item?: IItem;
  padding?: IPadding;
  margin?: IMargin;
  space?: ISpace;
  size?: ISize;
  typography?: ITypography;
  background?: IBackground;
  border?: IBorder;
  effect?: IEffect;
  filter?: IFilter;
  table?: ITable;
  transition?: ITransition;
  transform?: ITransform;
  interactivity?: IInteractivity;
}

export interface ILayout {
  aspectRatio?: string;
  container?: string;
  columns?: string;
  breakAfter?: string;
  breakBefore?: string;
  breakInside?: string;
  boxDecorationBreak?: string;
  boxSizing?: string;
  display?: string;
  float?: string;
  clear?: string;
  isolation?: string;
  objectFit?: string;
  objectPosition?: string;
  overflow?: string;
  overscrollBehavior?: string;
  position?: string;
  inset?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  visibility?: string;
  zIndex?: string;
}

export interface IItem {
  flexBasis?: string;
  flexDirection?: string;
  flexWrap?: string;
  flex?: string;
  flexGrow?: string;
  flexShrink?: string;
  order?: string;
  gridTemplateColumns?: string;
  gridColumnStart?: string;
  gridColumnEnd?: string;
  gridTemplateRows?: string;
  gridRowStart?: string;
  gridRowEnd?: string;
  gridAutoFlow?: string;
  gridAutoColumns?: string;
  gridAutoRows?: string;
  gap?: string;
  justifyContent?: string;
  justifyItems?: string;
  justifySelf?: string;
  alignContent?: string;
  alignItems?: string;
  alignSelf?: string;
  placeContent?: string;
  placeItems?: string;
  placeSelf?: string;
}

export interface IPadding {
  padding?: string;
  x?: string;
  y?: string;
  inline?: string;
  inlineStart?: string;
  inlineEnd?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export interface IMargin {
  margin?: string;
  x?: string;
  y?: string;
  inline?: string;
  inlineStart?: string;
  inlineEnd?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
}

export interface ISpace {
  x?: string;
  y?: string;
}

export interface ISize {
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
}

export interface ITypography {
  fontFamily?: string;
  fontSize?: string;
  fontSmoothing?: string;
  fontStyle?: string;
  fontWeight?: string;
  fontVariant?: string;
  letterSpacing?: string;
  lineClamp?: string;
  lineHeight?: string;
  listStyleImage?: string;
  listStylePosition?: string;
  listStyleType?: string;
  textAlign?: string;
  textColor?: string;
  textDecoration?: string;
  textDecorationColor?: string;
  textDecorationStyle?: string;
  textDecorationThickness?: string;
  textUnderlineOffset?: string;
  textTransform?: string;
  textOverflow?: string;
  textIndent?: string;
  verticalAlign?: string;
  whitespace?: string;
  wordBreak?: string;
  hyphens?: string;
  content?: string;
}

export interface IBackground {
  attachment?: string;
  clip?: string;
  color?: string;
  origin?: string;
  position?: string;
  repeat?: string;
  size?: string;
  image?: string;
  gradientColorStops?: string;
}

export interface IBorder {
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  divideWidth?: string;
  divideColor?: string;
  divideStyle?: string;
  outlineWidth?: string;
  outlineColor?: string;
  outlineStyle?: string;
  outlineOffset?: string;
  ringWidth?: string;
  ringColor?: string;
  ringOffsetWidth?: string;
  ringOffsetColor?: string;
}

export interface IEffect {
  boxShadow?: string;
  boxShadowColor?: string;
  opacity?: string;
  mixBlendMode?: string;
  backgroundBlendMode?: string;
}

export interface IFilter {
  blur?: string;
  brightness?: string;
  contrast?: string;
  dropShadow?: string;
  grayscale?: string;
  hueRotate?: string;
  invert?: string;
  saturate?: string;
  sepia?: string;
  backdropBlur?: string;
  backdropBrightness?: string;
  backdropContrast?: string;
  backdropGrayscale?: string;
  backdropHueRotate?: string;
  backdropInvert?: string;
  backdropOpacity?: string;
  backdropSaturate?: string;
  backdropSepia?: string;
}

export interface ITable {
  borderCollapse?: string;
  borderSpacing?: string;
  tableLayout?: string;
  captionSide?: string;
}

export interface ITransition {
  transitionProperty?: string;
  transitionDuration?: string;
  transitionTimingFunction?: string;
  transitionDelay?: string;
  animation?: string;
}

export interface ITransform {
  scale?: string;
  rotate?: string;
  translate?: string;
  skew?: string;
  transformOrigin?: string;
}

export interface IInteractivity {
  accentColor?: string;
  appearance?: string;
  cursor?: string;
  caretColor?: string;
  pointerEvents?: string;
  resize?: string;
  scrollBehavior?: string;
  scrollMargin?: string;
  scrollPadding?: string;
  scrollSnapAlign?: string;
  scrollSnapStop?: string;
  scrollSnapType?: string;
  touchAction?: string;
  userSelect?: string;
  willChange?: string;
}

export type HtmlInputSetter = (event: ChangeEvent<HTMLInputElement>) => void;

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
