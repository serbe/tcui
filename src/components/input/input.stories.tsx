import { Story } from "@ladle/react";
import { useState } from "react";
import { useValue } from "../../utils/handles";
import { Colors, ColorValues } from "../../utils/variables";
import { IInputProps, Input } from "./index";

const Icon: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-full w-full text-green-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
    />
  </svg>
);

const Phone: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-full w-full text-green-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    />
  </svg>
);

const Link: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-full w-full text-blue-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    />
  </svg>
);

const At: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-full w-full text-orange-500"
  >
    <path
      strokeLinecap="round"
      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
    />
  </svg>
);

const Es: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-full w-full text-red-500"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
    />
  </svg>
);

const Txt: JSX.Element = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="h-full w-full text-amber-800"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    />
  </svg>
);

export const InputOutline = (): JSX.Element => {
  const [value, setValue] = useValue("");
  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="my-2 flex flex-wrap" key={`div-${color}`}>
          <div className="m-2">
            <Input
              color={color as Colors}
              name={`${color}small`}
              label={`${color} small`}
              value={value}
              size="small"
              onChange={setValue}
              placeholder={color}
              icon={Icon}
            ></Input>
          </div>
          <div className="m-2">
            <Input
              color={color as Colors}
              name={`${color}normal`}
              label={`${color} normal`}
              value={value}
              onChange={setValue}
              placeholder={color}
              icon={Icon}
            ></Input>
          </div>
          <div className="m-2">
            <Input
              color={color as Colors}
              name={`${color}large`}
              label={`${color} large`}
              value={value}
              size="large"
              onChange={setValue}
              placeholder={color}
              icon={Icon}
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
              isOutlined={false}
              color={color as Colors}
              name={`${color}small`}
              label={`${color} small`}
              value={value}
              size="small"
              onChange={setValue}
              placeholder={color}
              icon={Icon}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              isOutlined={false}
              color={color as Colors}
              name={`${color}normal`}
              label={`${color} normal`}
              value={value}
              onChange={setValue}
              placeholder={color}
              icon={Icon}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              isOutlined={false}
              color={color as Colors}
              name={`${color}large`}
              label={`${color} large`}
              value={value}
              size="large"
              onChange={setValue}
              placeholder={color}
              icon={Icon}
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
              isOutlined={true}
              bgColor={color as Colors}
              name={`o${color}small`}
              label={`${color} small o`}
              value={value}
              size="small"
              onChange={setValue}
              placeholder={color}
              icon={Icon}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              isOutlined={true}
              bgColor={color as Colors}
              name={`o${color}normal`}
              label={`${color} normal o`}
              value={value}
              onChange={setValue}
              placeholder={color}
              icon={Icon}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              isOutlined={true}
              bgColor={color as Colors}
              name={`o${color}large`}
              label={`${color} large o`}
              value={value}
              size="large"
              onChange={setValue}
              placeholder={color}
              icon={Icon}
            ></Input>
          </div>
          <div className="m-1">
            <Input
              isOutlined={false}
              bgColor={color as Colors}
              name={`${color}large`}
              label={`${color} large`}
              value={value}
              size="large"
              onChange={setValue}
              placeholder={color}
              icon={Icon}
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
            placeholder="default"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="m-2">
          <Input
            name="email"
            type="email"
            placeholder="email"
            value="mail@example.com"
            onChange={setValue}
            label="email"
            icon={At}
          />
        </div>
        <div className="m-2">
          <Input
            name="password"
            type="password"
            placeholder="password"
            value="password"
            onChange={setValue}
            label="password"
            icon={Es}
          />
        </div>
        <div className="m-2">
          <Input
            name="tel"
            type="tel"
            placeholder="+1800123456"
            value="+1800123456"
            onChange={setValue}
            label="tel"
            icon={Phone}
          />
        </div>
        <div className="m-2">
          <Input
            name="text"
            type="text"
            placeholder="text"
            value="text"
            onChange={setValue}
            label="text"
            icon={Txt}
          />
        </div>
        <div className="m-2">
          <Input
            name="url"
            type="url"
            placeholder="URL"
            value="http://example.com"
            onChange={setValue}
            label="url"
            icon={Link}
          />
        </div>
        <div className="m-2">
          <Input
            name="number"
            type="number"
            placeholder="123"
            value="123"
            onChange={setValue}
            label="number"
          />
        </div>
        <div className="m-2">
          <Input
            isDisabled
            name="isDisabled"
            placeholder="is disabled"
            value=""
            onChange={setValue}
            label="disabled"
          />
        </div>
        <div className="m-2">
          <Input
            isReadOnly
            name="isReadOnly"
            placeholder="is read only"
            value=""
            onChange={setValue}
            label="read only"
          />
        </div>
      </div>
    </div>
  );
};

export const Inputs: Story<IInputProps> = ({
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
}: IInputProps): JSX.Element => {
  const [countBlur, setCountBlur] = useState(0);
  const [countClick, setCountClick] = useState(0);
  const [text, setText] = useState(value);
  const onBlur = (): void => {
    setCountBlur(countBlur + 1);
  };
  const onClick = (): void => {
    setCountClick(countClick + 1);
  };
  const onChange = (val: string | number): void => {
    setText(val);
  };
  return (
    <div className="container mx-auto">
      <div className="flex items-end">
        <Input
          className={className}
          bgColor={bgColor}
          color={color}
          divClassName={divClassName}
          isDisabled={isDisabled}
          isFullwidth={isFullwidth}
          isOutlined={isOutlined}
          isReadOnly={isReadOnly}
          label={label}
          name={name}
          placeholder={placeholder}
          size={size}
          type={type}
          value={text}
          onBlur={onBlur}
          onClick={onClick}
          onChange={onChange}
        />
      </div>
      <div className="flex items-end"> Value: {text}</div>
      <div className="flex items-end"> Blurs: {countBlur}</div>
      <div className="flex items-end"> Clicks: {countClick}</div>
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
