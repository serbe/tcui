import type { Story } from "@ladle/react";

import { useState } from "react";

import type { Colors } from "../../utils/variables";
import type { IInputProperties } from "./index";

import { useValue } from "../../utils/handles";
import { ColorValues } from "../../utils/variables";
import { Input } from "./index";

const Icon: JSX.Element = (
  <svg
    className="size-full text-green-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Phone: JSX.Element = (
  <svg
    className="size-full text-green-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Link: JSX.Element = (
  <svg
    className="size-full text-blue-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const At: JSX.Element = (
  <svg
    className="size-full text-orange-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
      strokeLinecap="round"
    />
  </svg>
);

const Es: JSX.Element = (
  <svg
    className="size-full text-red-500"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Txt: JSX.Element = (
  <svg
    className="size-full text-amber-800"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InputOutlineWidthIcon = (): JSX.Element => {
  const [value, setValue] = useValue("");

  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="my-2 flex flex-wrap" key={`div-${color}`}>
          <div className="m-2">
            <Input
              color={color as Colors}
              icon={Icon}
              label={`${color} small`}
              name={`${color}small`}
              onChange={setValue}
              placeholder={color}
              size="small"
              value={value}
            ></Input>
          </div>
          <div className="m-2">
            <Input
              color={color as Colors}
              icon={Icon}
              label={`${color} normal`}
              name={`${color}normal`}
              onChange={setValue}
              placeholder={color}
              value={value}
            ></Input>
          </div>
          <div className="m-2">
            <Input
              color={color as Colors}
              icon={Icon}
              label={`${color} large`}
              name={`${color}large`}
              onChange={setValue}
              placeholder={color}
              size="large"
              value={value}
            ></Input>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InputNoOutlineWidthIcon = (): JSX.Element => {
  const [value, setValue] = useValue("");

  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="flex flex-wrap" key={`div-${color}`}>
          <div className="m-1">
            <Input
              color={color as Colors}
              icon={Icon}
              isOutlined={false}
              label={`${color} small`}
              name={`${color}small`}
              onChange={setValue}
              placeholder={color}
              size="small"
              value={value}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              color={color as Colors}
              icon={Icon}
              isOutlined={false}
              label={`${color} normal`}
              name={`${color}normal`}
              onChange={setValue}
              placeholder={color}
              value={value}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              color={color as Colors}
              icon={Icon}
              isOutlined={false}
              label={`${color} large`}
              name={`${color}large`}
              onChange={setValue}
              placeholder={color}
              size="large"
              value={value}
            ></Input>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InputBgColorsWidthIcon = (): JSX.Element => {
  const [value, setValue] = useValue("");

  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="flex flex-wrap" key={`div-${color}`}>
          <div className="m-1">
            <Input
              bgColor={color as Colors}
              icon={Icon}
              isOutlined={true}
              label={`${color} small o`}
              name={`o${color}small`}
              onChange={setValue}
              placeholder={color}
              size="small"
              value={value}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              bgColor={color as Colors}
              icon={Icon}
              isOutlined={true}
              label={`${color} normal o`}
              name={`o${color}normal`}
              onChange={setValue}
              placeholder={color}
              value={value}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              bgColor={color as Colors}
              icon={Icon}
              isOutlined={true}
              label={`${color} large o`}
              name={`o${color}large`}
              onChange={setValue}
              placeholder={color}
              size="large"
              value={value}
            ></Input>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InputOutline = (): JSX.Element => {
  const [value, setValue] = useValue("");

  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="my-2 flex flex-wrap" key={`div-${color}`}>
          <div className="m-2">
            <Input
              color={color as Colors}
              label={`${color} small`}
              name={`${color}small`}
              onChange={setValue}
              placeholder={color}
              size="small"
              value={value}
            ></Input>
          </div>
          <div className="m-2">
            <Input
              color={color as Colors}
              label={`${color} normal`}
              name={`${color}normal`}
              onChange={setValue}
              placeholder={color}
              value={value}
            ></Input>
          </div>
          <div className="m-2">
            <Input
              color={color as Colors}
              label={`${color} large`}
              name={`${color}large`}
              onChange={setValue}
              placeholder={color}
              size="large"
              value={value}
            ></Input>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InputNoOutline = (): JSX.Element => {
  const [value, setValue] = useValue("");

  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="flex flex-wrap" key={`div-${color}`}>
          <div className="m-1">
            <Input
              color={color as Colors}
              isOutlined={false}
              label={`${color} small`}
              name={`${color}small`}
              onChange={setValue}
              placeholder={color}
              size="small"
              value={value}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              color={color as Colors}
              isOutlined={false}
              label={`${color} normal`}
              name={`${color}normal`}
              onChange={setValue}
              placeholder={color}
              value={value}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              color={color as Colors}
              isOutlined={false}
              label={`${color} large`}
              name={`${color}large`}
              onChange={setValue}
              placeholder={color}
              size="large"
              value={value}
            ></Input>
          </div>
        </div>
      ))}
    </div>
  );
};

export const InputBgColors = (): JSX.Element => {
  const [value, setValue] = useValue("");

  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="flex flex-wrap" key={`div-${color}`}>
          <div className="m-1">
            <Input
              bgColor={color as Colors}
              isOutlined={true}
              label={`${color} small o`}
              name={`o${color}small`}
              onChange={setValue}
              placeholder={color}
              size="small"
              value={value}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              bgColor={color as Colors}
              isOutlined={true}
              label={`${color} normal o`}
              name={`o${color}normal`}
              onChange={setValue}
              placeholder={color}
              value={value}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              bgColor={color as Colors}
              isOutlined={true}
              label={`${color} large o`}
              name={`o${color}large`}
              onChange={setValue}
              placeholder={color}
              size="large"
              value={value}
            ></Input>
          </div>
        </div>
      ))}
    </div>
  );
};

export const AllTypes = (): JSX.Element => {
  const [value, setValue] = useValue("");

  return (
    <div className="container mx-auto">
      <div className="my-1 flex flex-wrap">
        <div className="m-2">
          <Input
            label="default"
            name="default"
            onChange={setValue}
            placeholder="default"
            value={value}
          />
        </div>
        <div className="m-2">
          <Input
            icon={At}
            label="email"
            name="email"
            onChange={setValue}
            placeholder="email"
            type="email"
            value="mail@example.com"
          />
        </div>
        <div className="m-2">
          <Input
            icon={Es}
            label="password"
            name="password"
            onChange={setValue}
            placeholder="password"
            type="password"
            value="password"
          />
        </div>
        <div className="m-2">
          <Input
            icon={Phone}
            label="tel"
            name="tel"
            onChange={setValue}
            placeholder="+1800123456"
            type="tel"
            value="+1800123456"
          />
        </div>
        <div className="m-2">
          <Input
            icon={Txt}
            label="text"
            name="text"
            onChange={setValue}
            placeholder="text"
            type="text"
            value="text"
          />
        </div>
        <div className="m-2">
          <Input
            icon={Link}
            label="url"
            name="url"
            onChange={setValue}
            placeholder="URL"
            type="url"
            value="http://example.com"
          />
        </div>
        <div className="m-2">
          <Input
            label="number"
            name="number"
            onChange={setValue}
            placeholder="123"
            type="number"
            value="123"
          />
        </div>
        <div className="m-2">
          <Input
            isDisabled
            label="disabled"
            name="isDisabled"
            onChange={setValue}
            placeholder="is disabled"
            value=""
          />
        </div>
        <div className="m-2">
          <Input
            isReadOnly
            label="read only"
            name="isReadOnly"
            onChange={setValue}
            placeholder="is read only"
            value=""
          />
        </div>
      </div>
    </div>
  );
};

export const Inputs: Story<IInputProperties> = ({
  bgColor,
  className,
  color,
  divClassName,
  isDisabled,
  isFullwidth,
  isOutlined,
  isReadOnly,
  label,
  name,
  placeholder,
  size,
  type,
  value,
}: IInputProperties): JSX.Element => {
  const [countBlur, setCountBlur] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [text, setText] = useState(value);
  const onBlur = (): void => {
    setCountBlur(countBlur + 1);
  };
  const onClick = (): void => {
    setCountClick(countClick + 1);
  };
  const onChange = (newValue: number | string): void => {
    setText(newValue);
  };

  return (
    <div className="container mx-auto">
      <div className="">
        <Input
          bgColor={bgColor}
          className={className}
          color={color}
          divClassName={divClassName}
          isDisabled={isDisabled}
          isFullwidth={isFullwidth}
          isOutlined={isOutlined}
          isReadOnly={isReadOnly}
          label={label}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          onClick={onClick}
          placeholder={placeholder}
          size={size}
          type={type}
          value={text}
        />
      </div>
      <div className=""> Value: {text}</div>
      <div className=""> Blurs: {countBlur}</div>
      <div className=""> Clicks: {countClick}</div>
    </div>
  );
};

Inputs.args = {
  bgColor: "white",
  className: "",
  color: "slate",
  divClassName: "",
  isDisabled: false,
  isFullwidth: false,
  isOutlined: true,
  isReadOnly: false,
  label: "Label",
  name: "input",
  placeholder: "placeholder",
  size: "normal",
  type: "text",
};

Inputs.argTypes = {
  bgColor: {
    control: { type: "select" },
    defaultValue: "white",
    options: ColorValues,
  },
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
  type: {
    control: { type: "select" },
    defaultValue: "text",
    options: ["email", "password", "tel", "text", "url", "number"],
  },
};
