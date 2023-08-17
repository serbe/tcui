import type { Story } from "@ladle/react";
import { useState } from "react";

import { Colors, ColorValues, Sizes } from "../../utils/variables";
import { Button, IButtonProps } from "./index";

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
      <Button className="mx-1" isUpperCase isOutlined>
        UpperCase O
      </Button>
    </div>
    <div className="my-1 flex items-end">
      <Button className="mx-1" isFullwith>
        FullWidth
      </Button>
      <Button className="mx-1" isFullwith isOutlined>
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
              color={color as Colors}
              size={size as Sizes}
              isOutlined={isOutlined}
              key={`${isOutlined ? "O" : ""}${color}${size ?? ""}`}
              className="mx-1"
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
