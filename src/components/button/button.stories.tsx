import type { Story } from "@ladle/react";

import { useState } from "react";

import type { Colors, Sizes } from "../../utils/variables";
import type { IButtonProperties } from "./index";

import { ColorValues } from "../../utils/variables";
import { Button } from "./index";

export const AllVariants = (): JSX.Element => (
  <div className="container mx-auto">
    <div className="my-1 flex items-end">
      <Button className="mx-1" isDisabled>
        Disabled
      </Button>
      <Button className="mx-1" isDisabled isOutlined>
        Disabled O
      </Button>
      <Button className="mx-1" isUpperCase>
        UpperCase
      </Button>
      <Button className="mx-1" isOutlined isUpperCase>
        UpperCase O
      </Button>
    </div>
    <div className="my-1 flex items-end">
      <Button className="mx-1" isFullwidth>
        FullWidth
      </Button>
      <Button className="mx-1" isFullwidth isOutlined>
        FullWidth O
      </Button>
    </div>
    <div className="my-1 flex items-end">
      <Button className="mx-1">Default</Button>
      <Button className="mx-1" isOutlined>
        Default O
      </Button>
      <Button className="mx-1" size="small">
        Small
      </Button>
      <Button className="mx-1" isOutlined size="small">
        Small O
      </Button>
      <Button className="mx-1" size="large">
        Large
      </Button>
      <Button className="mx-1" isOutlined size="large">
        Large O
      </Button>
    </div>
    {ColorValues.map((color) => (
      <div className="my-1 flex items-end" key={`div-${color}`}>
        {[undefined, "small", "large"].map((size) =>
          [false, true].map((isOutlined) => (
            <Button
              className="mx-1"
              color={color as Colors}
              isOutlined={isOutlined}
              key={`${isOutlined ? "O" : ""}${color}${size ?? ""}`}
              size={size as Sizes}
            >{`${color} ${size ?? ""}${isOutlined ? " O" : ""}`}</Button>
          )),
        )}
      </div>
    ))}
  </div>
);

export const Buttons: Story<IButtonProperties> = ({
  children,
  className,
  color,
  isDisabled,
  isFullwidth,
  isOutlined,
  isUpperCase,
  size,
}: Readonly<IButtonProperties>): JSX.Element => {
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
          isFullwidth={isFullwidth}
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
  className: "",
  color: "slate",
  isDisabled: false,
  isFullwidth: false,
  isOutlined: false,
  isUpperCase: false,
  size: "normal",
};

Buttons.argTypes = {
  color: {
    control: { type: "select" },
    defaultValue: "slate",
    options: ColorValues,
  },
  size: {
    control: { type: "select" },
    defaultValue: "normal",
    options: ["small", "normal", "large"],
  },
};
