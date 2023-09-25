import type { ChangeEvent, Dispatch, SetStateAction } from "react";

export type Colors =
  | "amber"
  | "black"
  | "blue"
  | "cyan"
  | "emerald"
  | "fuchsia"
  | "gray"
  | "green"
  | "indigo"
  | "lime"
  | "neutral"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "rose"
  | "sky"
  | "slate"
  | "stone"
  | "teal"
  | "violet"
  | "white"
  | "yellow"
  | "zinc";

export const ColorValues = [
  "amber",
  "black",
  "blue",
  "cyan",
  "emerald",
  "fuchsia",
  "gray",
  "green",
  "indigo",
  "lime",
  "neutral",
  "orange",
  "pink",
  "purple",
  "red",
  "rose",
  "sky",
  "slate",
  "stone",
  "teal",
  "violet",
  "white",
  "yellow",
  "zinc",
];

export const outlineColor: Record<Colors, string> = {
  amber: "outline-amber-300",
  black: "outline-black",
  blue: "outline-blue-300",
  cyan: "outline-cyan-300",
  emerald: "outline-emerald-300",
  fuchsia: "outline-fuchsia-300",
  gray: "outline-gray-300",
  green: "outline-green-300",
  indigo: "outline-indigo-300",
  lime: "outline-lime-300",
  neutral: "outline-neutral-300",
  orange: "outline-orange-300",
  pink: "outline-pink-300",
  purple: "outline-purple-300",
  red: "outline-red-300",
  rose: "outline-rose-300",
  sky: "outline-sky-300",
  slate: "outline-slate-300",
  stone: "outline-stone-300",
  teal: "outline-teal-300",
  violet: "outline-violet-300",
  white: "outline-white",
  yellow: "outline-yellow-300",
  zinc: "outline-zinc-300",
};

export const focusOutlineColor: Record<Colors, string> = {
  amber: "focus:outline-amber-400",
  black: "focus:outline-black",
  blue: "focus:outline-blue-400",
  cyan: "focus:outline-cyan-400",
  emerald: "focus:outline-emerald-400",
  fuchsia: "focus:outline-fuchsia-400",
  gray: "focus:outline-gray-400",
  green: "focus:outline-green-400",
  indigo: "focus:outline-indigo-400",
  lime: "focus:outline-lime-400",
  neutral: "focus:outline-neutral-400",
  orange: "focus:outline-orange-400",
  pink: "focus:outline-pink-400",
  purple: "focus:outline-purple-400",
  red: "focus:outline-red-400",
  rose: "focus:outline-rose-400",
  sky: "focus:outline-sky-400",
  slate: "focus:outline-slate-400",
  stone: "focus:outline-stone-400",
  teal: "focus:outline-teal-400",
  violet: "focus:outline-violet-400",
  white: "focus:outline-white",
  yellow: "focus:outline-yellow-400",
  zinc: "focus:outline-zinc-400",
};

export const hoverOutlineColor: Record<Colors, string> = {
  amber: "hover:outline-amber-300",
  black: "hover:outline-black",
  blue: "hover:outline-blue-300",
  cyan: "hover:outline-cyan-300",
  emerald: "hover:outline-emerald-300",
  fuchsia: "hover:outline-fuchsia-300",
  gray: "hover:outline-gray-300",
  green: "hover:outline-green-300",
  indigo: "hover:outline-indigo-300",
  lime: "hover:outline-lime-300",
  neutral: "hover:outline-neutral-300",
  orange: "hover:outline-orange-300",
  pink: "hover:outline-pink-300",
  purple: "hover:outline-purple-300",
  red: "hover:outline-red-300",
  rose: "hover:outline-rose-300",
  sky: "hover:outline-sky-300",
  slate: "hover:outline-slate-300",
  stone: "hover:outline-stone-300",
  teal: "hover:outline-teal-300",
  violet: "hover:outline-violet-300",
  white: "hover:outline-white",
  yellow: "hover:outline-yellow-300",
  zinc: "hover:outline-zinc-300",
};

export const borderColor: Record<Colors, string> = {
  amber: "border-amber-500",
  black: "border-black",
  blue: "border-blue-500",
  cyan: "border-cyan-500",
  emerald: "border-emerald-500",
  fuchsia: "border-fuchsia-500",
  gray: "border-gray-500",
  green: "border-green-500",
  indigo: "border-indigo-500",
  lime: "border-lime-500",
  neutral: "border-neutral-500",
  orange: "border-orange-500",
  pink: "border-pink-500",
  purple: "border-purple-500",
  red: "border-red-500",
  rose: "border-rose-500",
  sky: "border-sky-500",
  slate: "border-slate-500",
  stone: "border-stone-500",
  teal: "border-teal-500",
  violet: "border-violet-500",
  white: "border-white",
  yellow: "border-yellow-500",
  zinc: "border-zinc-500",
};

export const backgroundColor: Record<Colors, string> = {
  amber: "bg-amber-500",
  black: "bg-black",
  blue: "bg-blue-500",
  cyan: "bg-cyan-500",
  emerald: "bg-emerald-500",
  fuchsia: "bg-fuchsia-500",
  gray: "bg-gray-500",
  green: "bg-green-500",
  indigo: "bg-indigo-500",
  lime: "bg-lime-500",
  neutral: "bg-neutral-500",
  orange: "bg-orange-500",
  pink: "bg-pink-500",
  purple: "bg-purple-500",
  red: "bg-red-500",
  rose: "bg-rose-500",
  sky: "bg-sky-500",
  slate: "bg-slate-500",
  stone: "bg-stone-500",
  teal: "bg-teal-500",
  violet: "bg-violet-500",
  white: "bg-white",
  yellow: "bg-yellow-500",
  zinc: "bg-zinc-500",
};

export const textColor: Record<Colors, string> = {
  amber: "text-amber-500",
  black: "text-black",
  blue: "text-blue-500",
  cyan: "text-cyan-500",
  emerald: "text-emerald-500",
  fuchsia: "text-fuchsia-500",
  gray: "text-gray-500",
  green: "text-green-500",
  indigo: "text-indigo-500",
  lime: "text-lime-500",
  neutral: "text-neutral-500",
  orange: "text-orange-500",
  pink: "text-pink-500",
  purple: "text-purple-500",
  red: "text-red-500",
  rose: "text-rose-500",
  sky: "text-sky-500",
  slate: "text-slate-500",
  stone: "text-stone-500",
  teal: "text-teal-500",
  violet: "text-violet-500",
  white: "text-white",
  yellow: "text-yellow-500",
  zinc: "text-zinc-500",
};

export const placeholderTextColor: Record<Colors, string> = {
  amber: "placeholder:text-amber-300",
  black: "placeholder:text-black",
  blue: "placeholder:text-blue-300",
  cyan: "placeholder:text-cyan-300",
  emerald: "placeholder:text-emerald-300",
  fuchsia: "placeholder:text-fuchsia-300",
  gray: "placeholder:text-gray-300",
  green: "placeholder:text-green-300",
  indigo: "placeholder:text-indigo-300",
  lime: "placeholder:text-lime-300",
  neutral: "placeholder:text-neutral-300",
  orange: "placeholder:text-orange-300",
  pink: "placeholder:text-pink-300",
  purple: "placeholder:text-purple-300",
  red: "placeholder:text-red-300",
  rose: "placeholder:text-rose-300",
  sky: "placeholder:text-sky-300",
  slate: "placeholder:text-slate-300",
  stone: "placeholder:text-stone-300",
  teal: "placeholder:text-teal-300",
  violet: "placeholder:text-violet-300",
  white: "placeholder:text-white",
  yellow: "placeholder:text-yellow-300",
  zinc: "placeholder:text-zinc-300",
};

export const focusBorderColor: Record<Colors, string> = {
  amber: "focus:border-amber-400",
  black: "focus:border-black",
  blue: "focus:border-blue-400",
  cyan: "focus:border-cyan-400",
  emerald: "focus:border-emerald-400",
  fuchsia: "focus:border-fuchsia-400",
  gray: "focus:border-gray-400",
  green: "focus:border-green-400",
  indigo: "focus:border-indigo-400",
  lime: "focus:border-lime-400",
  neutral: "focus:border-neutral-400",
  orange: "focus:border-orange-400",
  pink: "focus:border-pink-400",
  purple: "focus:border-purple-400",
  red: "focus:border-red-400",
  rose: "focus:border-rose-400",
  sky: "focus:border-sky-400",
  slate: "focus:border-slate-400",
  stone: "focus:border-stone-400",
  teal: "focus:border-teal-400",
  violet: "focus:border-violet-400",
  white: "focus:border-white",
  yellow: "focus:border-yellow-400",
  zinc: "focus:border-zinc-400",
};

export const hoverBorderColor: Record<Colors, string> = {
  amber: "hover:border-amber-500",
  black: "hover:border-black",
  blue: "hover:border-blue-500",
  cyan: "hover:border-cyan-500",
  emerald: "hover:border-emerald-500",
  fuchsia: "hover:border-fuchsia-500",
  gray: "hover:border-gray-500",
  green: "hover:border-green-500",
  indigo: "hover:border-indigo-500",
  lime: "hover:border-lime-500",
  neutral: "hover:border-neutral-500",
  orange: "hover:border-orange-500",
  pink: "hover:border-pink-500",
  purple: "hover:border-purple-500",
  red: "hover:border-red-500",
  rose: "hover:border-rose-500",
  sky: "hover:border-sky-500",
  slate: "hover:border-slate-500",
  stone: "hover:border-stone-500",
  teal: "hover:border-teal-500",
  violet: "hover:border-violet-500",
  white: "hover:border-white",
  yellow: "hover:border-yellow-500",
  zinc: "hover:border-zinc-500",
};

export const peerFocusTextColor: Record<Colors, string> = {
  amber: "peer-focus:text-amber-500",
  black: "peer-focus:text-black",
  blue: "peer-focus:text-blue-500",
  cyan: "peer-focus:text-cyan-500",
  emerald: "peer-focus:text-emerald-500",
  fuchsia: "peer-focus:text-fuchsia-500",
  gray: "peer-focus:text-gray-500",
  green: "peer-focus:text-green-500",
  indigo: "peer-focus:text-indigo-500",
  lime: "peer-focus:text-lime-500",
  neutral: "peer-focus:text-neutral-500",
  orange: "peer-focus:text-orange-500",
  pink: "peer-focus:text-pink-500",
  purple: "peer-focus:text-purple-500",
  red: "peer-focus:text-red-500",
  rose: "peer-focus:text-rose-500",
  sky: "peer-focus:text-sky-500",
  slate: "peer-focus:text-slate-500",
  stone: "peer-focus:text-stone-500",
  teal: "peer-focus:text-teal-500",
  violet: "peer-focus:text-violet-500",
  white: "peer-focus:text-white",
  yellow: "peer-focus:text-yellow-500",
  zinc: "peer-focus:text-zinc-500",
};

export const peerFocusBeforeBorderColor: Record<Colors, string> = {
  amber: "peer-focus:before:border-amber-500",
  black: "peer-focus:before:border-black",
  blue: "peer-focus:before:border-blue-500",
  cyan: "peer-focus:before:border-cyan-500",
  emerald: "peer-focus:before:border-emerald-500",
  fuchsia: "peer-focus:before:border-fuchsia-500",
  gray: "peer-focus:before:border-gray-500",
  green: "peer-focus:before:border-green-500",
  indigo: "peer-focus:before:border-indigo-500",
  lime: "peer-focus:before:border-lime-500",
  neutral: "peer-focus:before:border-neutral-500",
  orange: "peer-focus:before:border-orange-500",
  pink: "peer-focus:before:border-pink-500",
  purple: "peer-focus:before:border-purple-500",
  red: "peer-focus:before:border-red-500",
  rose: "peer-focus:before:border-rose-500",
  sky: "peer-focus:before:border-sky-500",
  slate: "peer-focus:before:border-slate-500",
  stone: "peer-focus:before:border-stone-500",
  teal: "peer-focus:before:border-teal-500",
  violet: "peer-focus:before:border-violet-500",
  white: "peer-focus:before:border-white",
  yellow: "peer-focus:before:border-yellow-500",
  zinc: "peer-focus:before:border-zinc-500",
};

export const peerFocusAfterBorderColor: Record<Colors, string> = {
  amber: "peer-focus:after:border-amber-500",
  black: "peer-focus:after:border-black",
  blue: "peer-focus:after:border-blue-500",
  cyan: "peer-focus:after:border-cyan-500",
  emerald: "peer-focus:after:border-emerald-500",
  fuchsia: "peer-focus:after:border-fuchsia-500",
  gray: "peer-focus:after:border-gray-500",
  green: "peer-focus:after:border-green-500",
  indigo: "peer-focus:after:border-indigo-500",
  lime: "peer-focus:after:border-lime-500",
  neutral: "peer-focus:after:border-neutral-500",
  orange: "peer-focus:after:border-orange-500",
  pink: "peer-focus:after:border-pink-500",
  purple: "peer-focus:after:border-purple-500",
  red: "peer-focus:after:border-red-500",
  rose: "peer-focus:after:border-rose-500",
  sky: "peer-focus:after:border-sky-500",
  slate: "peer-focus:after:border-slate-500",
  stone: "peer-focus:after:border-stone-500",
  teal: "peer-focus:after:border-teal-500",
  violet: "peer-focus:after:border-violet-500",
  white: "peer-focus:after:border-white",
  yellow: "peer-focus:after:border-yellow-500",
  zinc: "peer-focus:after:border-zinc-500",
};

export const afterBorderColor: Record<Colors, string> = {
  amber: "after:border-amber-500",
  black: "after:border-black",
  blue: "after:border-blue-500",
  cyan: "after:border-cyan-500",
  emerald: "after:border-emerald-500",
  fuchsia: "after:border-fuchsia-500",
  gray: "after:border-gray-500",
  green: "after:border-green-500",
  indigo: "after:border-indigo-500",
  lime: "after:border-lime-500",
  neutral: "after:border-neutral-500",
  orange: "after:border-orange-500",
  pink: "after:border-pink-500",
  purple: "after:border-purple-500",
  red: "after:border-red-500",
  rose: "after:border-rose-500",
  sky: "after:border-sky-500",
  slate: "after:border-slate-500",
  stone: "after:border-stone-500",
  teal: "after:border-teal-500",
  violet: "after:border-violet-500",
  white: "after:border-white",
  yellow: "after:border-yellow-500",
  zinc: "after:border-zinc-500",
};

// export const ringColor: Record<Colors, string> = {
//   slate: "ring-slate-500",
//   gray: "ring-gray-500",
//   zinc: "ring-zinc-500",
//   neutral: "ring-neutral-500",
//   stone: "ring-stone-500",
//   red: "ring-red-500",
//   orange: "ring-orange-500",
//   amber: "ring-amber-500",
//   yellow: "ring-yellow-500",
//   lime: "ring-lime-500",
//   green: "ring-green-500",
//   emerald: "ring-emerald-500",
//   teal: "ring-teal-500",
//   cyan: "ring-cyan-500",
//   sky: "ring-sky-500",
//   blue: "ring-blue-500",
//   indigo: "ring-indigo-500",
//   violet: "ring-violet-500",
//   purple: "ring-purple-500",
//   fuchsia: "ring-fuchsia-500",
//   pink: "ring-pink-500",
//   rose: "ring-rose-500",
// };

// export const focusRingColor: Record<Colors, string> = {
//   slate: "focus:ring-slate-500",
//   gray: "focus:ring-gray-500",
//   zinc: "focus:ring-zinc-500",
//   neutral: "focus:ring-neutral-500",
//   stone: "focus:ring-stone-500",
//   red: "focus:ring-red-500",
//   orange: "focus:ring-orange-500",
//   amber: "focus:ring-amber-500",
//   yellow: "focus:ring-yellow-500",
//   lime: "focus:ring-lime-500",
//   green: "focus:ring-green-500",
//   emerald: "focus:ring-emerald-500",
//   teal: "focus:ring-teal-500",
//   cyan: "focus:ring-cyan-500",
//   sky: "focus:ring-sky-500",
//   blue: "focus:ring-blue-500",
//   indigo: "focus:ring-indigo-500",
//   violet: "focus:ring-violet-500",
//   purple: "focus:ring-purple-500",
//   fuchsia: "focus:ring-fuchsia-500",
//   pink: "focus:ring-pink-500",
//   rose: "focus:ring-rose-500",
// };

export const shadowColor: Record<Colors, string> = {
  amber: "shadow-amber-500/20",
  black: "shadow-black",
  blue: "shadow-blue-500/20",
  cyan: "shadow-cyan-500/20",
  emerald: "shadow-emerald-500/20",
  fuchsia: "shadow-fuchsia-500/20",
  gray: "shadow-gray-500/20",
  green: "shadow-green-500/20",
  indigo: "shadow-indigo-500/20",
  lime: "shadow-lime-500/20",
  neutral: "shadow-neutral-500/20",
  orange: "shadow-orange-500/20",
  pink: "shadow-pink-500/20",
  purple: "shadow-purple-500/20",
  red: "shadow-red-500/20",
  rose: "shadow-rose-500/20",
  sky: "shadow-sky-500/20",
  slate: "shadow-slate-500/20",
  stone: "shadow-stone-500/20",
  teal: "shadow-teal-500/20",
  violet: "shadow-violet-500/20",
  white: "shadow-white",
  yellow: "shadow-yellow-500/20",
  zinc: "shadow-zinc-500/20",
};

export const hoverShadowColor: Record<Colors, string> = {
  amber: "hover:shadow-amber-500/40",
  black: "hover:shadow-black",
  blue: "hover:shadow-blue-500/40",
  cyan: "hover:shadow-cyan-500/40",
  emerald: "hover:shadow-emerald-500/40",
  fuchsia: "hover:shadow-fuchsia-500/40",
  gray: "hover:shadow-gray-500/40",
  green: "hover:shadow-green-500/40",
  indigo: "hover:shadow-indigo-500/40",
  lime: "hover:shadow-lime-500/40",
  neutral: "hover:shadow-neutral-500/40",
  orange: "hover:shadow-orange-500/40",
  pink: "hover:shadow-pink-500/40",
  purple: "hover:shadow-purple-500/40",
  red: "hover:shadow-red-500/40",
  rose: "hover:shadow-rose-500/40",
  sky: "hover:shadow-sky-500/40",
  slate: "hover:shadow-slate-500/40",
  stone: "hover:shadow-stone-500/40",
  teal: "hover:shadow-teal-500/40",
  violet: "hover:shadow-violet-500/40",
  white: "hover:shadow-white",
  yellow: "hover:shadow-yellow-500/40",
  zinc: "hover:shadow-zinc-500/40",
};

export type Sizes = "large" | "normal" | "small";

export const SizeValues = ["large", "normal", "small"];

export type IInputTypes =
  | "email"
  | "number"
  | "password"
  | "tel"
  | "text"
  | "url";

export type Positions = "left" | "right";

export interface IClassName extends IBasicProperties {
  active?: IClassName;
  after?: IClassName;
  autofill?: IClassName;
  before?: IClassName;
  checked?: IClassName;
  default?: IClassName;
  disabled?: IClassName;
  empty?: IClassName;
  enabled?: IClassName;
  even?: IClassName;
  first?: IClassName;
  firstOfType?: IClassName;
  focus?: IClassName;
  focusVisible?: IClassName;
  focusWithin?: IClassName;
  group?: IClassName;
  hover?: IClassName;
  inRange?: IClassName;
  indeterminate?: IClassName;
  invalid?: IClassName;
  last?: IClassName;
  lastOfType?: IClassName;
  lg?: IClassName;
  max?: IClassName;
  maxLg?: IClassName;
  maxMd?: IClassName;
  maxSm?: IClassName;
  maxXl?: IClassName;
  md?: IClassName;
  min?: IClassName;
  odd?: IClassName;
  only?: IClassName;
  onlyOfType?: IClassName;
  outOfRange?: IClassName;
  peer?: IClassName;
  placeholder?: IClassName;
  placeholderShown?: IClassName;
  readOnly?: IClassName;
  required?: IClassName;
  selection?: IClassName;
  sm?: IClassName;
  target?: IClassName;
  valid?: IClassName;
  visited?: IClassName;
  xl?: IClassName;
  xxl?: IClassName;
}

export interface IBasicProperties {
  background?: IBackground;
  border?: IBorder;
  effect?: IEffect;
  filter?: IFilter;
  interactivity?: IInteractivity;
  item?: IItem;
  layout?: ILayout;
  margin?: IMargin;
  padding?: IPadding;
  self?: string;
  size?: ISize;
  space?: ISpace;
  table?: ITable;
  transform?: ITransform;
  transition?: ITransition;
  typography?: ITypography;
}

export interface ILayout {
  aspectRatio?: string;
  bottom?: string;
  boxDecorationBreak?: string;
  boxSizing?: string;
  breakAfter?: string;
  breakBefore?: string;
  breakInside?: string;
  clear?: string;
  columns?: string;
  container?: string;
  display?: string;
  float?: string;
  inset?: string;
  isolation?: string;
  left?: string;
  objectFit?: string;
  objectPosition?: string;
  overflow?: string;
  overscrollBehavior?: string;
  position?: string;
  right?: string;
  top?: string;
  visibility?: string;
  zIndex?: string;
}

export interface IItem {
  alignContent?: string;
  alignItems?: string;
  alignSelf?: string;
  flex?: string;
  flexBasis?: string;
  flexDirection?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexWrap?: string;
  gap?: string;
  gridAutoColumns?: string;
  gridAutoFlow?: string;
  gridAutoRows?: string;
  gridColumnEnd?: string;
  gridColumnStart?: string;
  gridRowEnd?: string;
  gridRowStart?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  justifyContent?: string;
  justifyItems?: string;
  justifySelf?: string;
  order?: string;
  placeContent?: string;
  placeItems?: string;
  placeSelf?: string;
}

export interface IPadding {
  bottom?: string;
  inline?: string;
  inlineEnd?: string;
  inlineStart?: string;
  left?: string;
  padding?: string;
  right?: string;
  top?: string;
  x?: string;
  y?: string;
}

export interface IMargin {
  bottom?: string;
  inline?: string;
  inlineEnd?: string;
  inlineStart?: string;
  left?: string;
  margin?: string;
  right?: string;
  top?: string;
  x?: string;
  y?: string;
}

export interface ISpace {
  x?: string;
  y?: string;
}

export interface ISize {
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  width?: string;
}

export interface ITypography {
  content?: string;
  fontFamily?: string;
  fontSize?: string;
  fontSmoothing?: string;
  fontStyle?: string;
  fontVariant?: string;
  fontWeight?: string;
  hyphens?: string;
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
  textIndent?: string;
  textOverflow?: string;
  textTransform?: string;
  textUnderlineOffset?: string;
  verticalAlign?: string;
  whitespace?: string;
  wordBreak?: string;
}

export interface IBackground {
  attachment?: string;
  clip?: string;
  color?: string;
  gradientColorStops?: string;
  image?: string;
  origin?: string;
  position?: string;
  repeat?: string;
  size?: string;
}

export interface IBorder {
  borderColor?: string;
  borderRadius?: string;
  borderStyle?: string;
  borderWidth?: string;
  divideColor?: string;
  divideStyle?: string;
  divideWidth?: string;
  outlineColor?: string;
  outlineOffset?: string;
  outlineStyle?: string;
  outlineWidth?: string;
  ringColor?: string;
  ringOffsetColor?: string;
  ringOffsetWidth?: string;
  ringWidth?: string;
}

export interface IEffect {
  backgroundBlendMode?: string;
  boxShadow?: string;
  boxShadowColor?: string;
  mixBlendMode?: string;
  opacity?: string;
}

export interface IFilter {
  backdropBlur?: string;
  backdropBrightness?: string;
  backdropContrast?: string;
  backdropGrayscale?: string;
  backdropHueRotate?: string;
  backdropInvert?: string;
  backdropOpacity?: string;
  backdropSaturate?: string;
  backdropSepia?: string;
  blur?: string;
  brightness?: string;
  contrast?: string;
  dropShadow?: string;
  grayscale?: string;
  hueRotate?: string;
  invert?: string;
  saturate?: string;
  sepia?: string;
}

export interface ITable {
  borderCollapse?: string;
  borderSpacing?: string;
  captionSide?: string;
  tableLayout?: string;
}

export interface ITransition {
  animation?: string;
  transitionDelay?: string;
  transitionDuration?: string;
  transitionProperty?: string;
  transitionTimingFunction?: string;
}

export interface ITransform {
  rotate?: string;
  scale?: string;
  skew?: string;
  transformOrigin?: string;
  translate?: string;
}

export interface IInteractivity {
  accentColor?: string;
  appearance?: string;
  caretColor?: string;
  cursor?: string;
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
  setter: HtmlInputSetter;
  value?: string;
}

export interface NumberInputProperties {
  setter: HtmlInputSetter;
  value?: number;
}

export interface BooleanInputProperties {
  setter: Dispatch<SetStateAction<boolean>>;
  value: boolean;
}

export interface SelectValues {
  id?: number;
  setter: Dispatch<SetStateAction<number | undefined>>;
}

export interface DatePickerValues {
  setter: Dispatch<SetStateAction<string | undefined>>;
  value?: string;
}
