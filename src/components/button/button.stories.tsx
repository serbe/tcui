import { Colors, Sizes } from "../../utils/variables";
import { Button } from "./index";

const colors = [
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

// <button className="mx-2 min-w-[110px] rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
// Custom
// </button>;

export const AllVariants = (): JSX.Element => (
  <div className="container mx-auto">
    <div className="flex items-end py-1">
      <Button isDisabled>Disabled</Button>
      <Button isDisabled isOutline>
        Disabled O
      </Button>
      <Button isUpperCase>UpperCase</Button>
      <Button isUpperCase isOutline>
        UpperCase O
      </Button>
    </div>
    <div className="flex items-end py-1">
      <Button isFullwith>FullWidth</Button>
      <Button isFullwith isOutline>
        FullWidth O
      </Button>
    </div>
    <div className="flex items-end py-1">
      <Button>D</Button>
      <Button isOutline>OD</Button>
      <Button size="small">S</Button>
      <Button isOutline size="small">
        OS
      </Button>
      <Button size="large">L</Button>
      <Button isOutline size="large">
        OL
      </Button>
    </div>
    {colors.map((color) => (
      <div className="flex items-end py-1" key={`div-${color}`}>
        {[undefined, "small", "large"].map((size) =>
          [false, true].map((isOutlined) => (
            <Button
              color={color as Colors}
              size={size as Sizes}
              isOutline={isOutlined}
              key={`${isOutlined ? "O" : ""}${color}${size ?? ""}`}
            >{`${color} ${size ?? ""}${isOutlined ? " O" : ""}`}</Button>
          ))
        )}
      </div>
    ))}
  </div>
);

export const Buttons = (): JSX.Element => {
  return (
    <div className="container mx-auto">
      <div className="flex items-end py-1">
        <Button isDisabled>Disabled</Button>
      </div>
    </div>
  );
};
