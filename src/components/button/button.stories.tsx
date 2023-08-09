import type { Story } from "@ladle/react";
import { useState } from "react";

import { Colors, ColorValues, Sizes } from "../../utils/variables";
import { Button, IButtonProps } from "./index";

// <button className="mx-2 min-w-[110px] rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
// Custom
// </button>;

export const AllVariants = (): JSX.Element => (
  <div className="container mx-auto">
    <div className="flex items-end py-1">
      <Button isDisabled>Disabled</Button>
      <Button isDisabled isOutlined>
        Disabled O
      </Button>
      <Button isUpperCase>UpperCase</Button>
      <Button isUpperCase isOutlined>
        UpperCase O
      </Button>
    </div>
    <div className="flex items-end py-1">
      <Button isFullwith>FullWidth</Button>
      <Button isFullwith isOutlined>
        FullWidth O
      </Button>
    </div>
    <div className="flex items-end py-1">
      <Button>D</Button>
      <Button isOutlined>OD</Button>
      <Button size="small">S</Button>
      <Button isOutlined size="small">
        OS
      </Button>
      <Button size="large">L</Button>
      <Button isOutlined size="large">
        OL
      </Button>
    </div>
    {ColorValues.map((color) => (
      <div className="flex items-end py-1" key={`div-${color}`}>
        {[undefined, "small", "large"].map((size) =>
          [false, true].map((isOutlined) => (
            <Button
              color={color as Colors}
              size={size as Sizes}
              isOutlined={isOutlined}
              key={`${isOutlined ? "O" : ""}${color}${size ?? ""}`}
            >{`${color} ${size ?? ""}${isOutlined ? " O" : ""}`}</Button>
          )),
        )}
      </div>
    ))}
  </div>
);

export const Buttons: Story<IButtonProps> = ({
  children,
  className,
  color,
  isDisabled,
  isFullwith,
  isOutlined,
  isUpperCase,
  size,
}: IButtonProps): JSX.Element => {
  const [count, setCount] = useState(0);
  const onClick = (): void => {
    setCount(count + 1);
  };
  return (
    <div className="container mx-auto">
      <div className="flex items-end py-1">
        <Button
          className={className}
          color={color}
          isDisabled={isDisabled}
          isFullwith={isFullwith}
          isOutlined={isOutlined}
          isUpperCase={isUpperCase}
          onClick={onClick}
          size={size}
        >
          {children}
        </Button>
      </div>
      <div className="flex items-end py-1"> Clicks: {count}</div>
    </div>
  );
};

Buttons.args = {
  children: "Button",
  color: "blue",
  size: "normal",
  isDisabled: false,
  isFullwith: false,
  isOutlined: false,
  isUpperCase: false,
  className: "",
};

Buttons.argTypes = {
  color: {
    options: ColorValues,
    control: { type: "select" },
    defaultValue: "blue",
  },
  size: {
    options: ["small", "normal", "large"],
    control: { type: "select" },
    defaultValue: "normal",
  },
};
