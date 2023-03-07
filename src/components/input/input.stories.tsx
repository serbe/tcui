import React, { ChangeEvent, useState } from "react";

import { useValue } from "../../utils/handles";
import { Input } from "./index";

export const Default = (): JSX.Element => {
  const [value, setValue] = useValue("default");
  return (
    <Input
      name="default"
      placeholder="default"
      value={value}
      onChange={setValue}
    />
  );
};

export const Small = (): JSX.Element => {
  const [value, setValue] = useValue("small");
  return (
    <Input
      name="small"
      size="small"
      placeholder="small"
      value={value}
      onChange={setValue}
    />
  );
};

export const Normal = (): JSX.Element => {
  const [value, setValue] = useValue("normal");
  return (
    <Input
      name="normal"
      size="normal"
      placeholder="normal"
      value={value}
      onChange={setValue}
    />
  );
};

export const Large = (): JSX.Element => {
  const [value, setValue] = useValue("large");
  return (
    <Input
      name="large"
      size="large"
      placeholder="large"
      value={value}
      onChange={setValue}
    />
  );
};

export const Label = (): JSX.Element => {
  const [value, setValue] = useValue("");
  return (
    <Input
      name="label"
      label="label"
      placeholder="label"
      value={value}
      onChange={setValue}
    />
  );
};

export const TextHelper = (): JSX.Element => {
  const [value, setValue] = useValue("");
  return (
    <Input
      name="textHelper"
      textHelper="text helper"
      placeholder="text helper"
      value={value}
      onChange={setValue}
    />
  );
};

export const LabelAndHelper = (): JSX.Element => {
  const [value, setValue] = useValue("");
  return (
    <Input
      name="labelAndHelper"
      label="label"
      textHelper="text helper"
      placeholder="label and text helper"
      value={value}
      onChange={setValue}
    />
  );
};

export const IsDisabled = (): JSX.Element => {
  const [value, setValue] = useValue("");
  return (
    <Input
      isDisabled
      name="isDisabled"
      placeholder="is disabled"
      value={value}
      onChange={setValue}
    />
  );
};

export const IsReadOnly = (): JSX.Element => {
  const [value, setValue] = useValue("");
  return (
    <Input
      isReadOnly
      name="isReadOnly"
      placeholder="is read only"
      value={value}
      onChange={setValue}
    />
  );
};

export const Email = (): JSX.Element => {
  const [value, setValue] = useValue("mail@example.com");
  return (
    <Input
      name="email"
      type="email"
      placeholder="email"
      value={value}
      onChange={setValue}
    />
  );
};

export const Password = (): JSX.Element => {
  const [value, setValue] = useValue("password");
  return (
    <Input
      name="password"
      type="password"
      placeholder="password"
      value={value}
      onChange={setValue}
    />
  );
};

export const Tel = (): JSX.Element => {
  const [value, setValue] = useValue("+1800123456");
  return (
    <Input
      name="tel"
      type="tel"
      placeholder="+1800123456"
      value={value}
      onChange={setValue}
    />
  );
};

export const Text = (): JSX.Element => {
  const [value, setValue] = useValue("text");
  return (
    <Input
      name="text"
      type="text"
      placeholder="text"
      value={value}
      onChange={setValue}
    />
  );
};

export const Url = (): JSX.Element => {
  const [value, setValue] = useValue("http://example.com");
  return (
    <Input
      name="url"
      type="url"
      placeholder="URL"
      value={value}
      onChange={setValue}
    />
  );
};

export const Number = (): JSX.Element => {
  const [value, setValue] = useValue(123);
  return (
    <Input
      name="number"
      type="number"
      placeholder="123"
      value={value}
      onChange={setValue}
    />
  );
};

export const FloatingStandard = () => {
  return (
    <div className="relative z-0">
      <input
        type="text"
        id="floating_standard"
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        placeholder=" "
      />
      <label
        htmlFor="floating_standard"
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      >
        Floating standard
      </label>
    </div>
  );
};

export const FloatingOutlined = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };
  return (
    <div className="relative">
      <input
        type="text"
        id="floating_outlined"
        className="peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        value={inputValue}
        onChange={handleInputChange}
        placeholder=" "
      />
      <label
        htmlFor="floating_outlined"
        className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      >
        Floating outlined
      </label>
    </div>
  );
};

export const EmailInput = () => (
  <div className="relative flex items-center">
    <input
      type="text"
      className="w-full rounded-lg border-b-2 border-black bg-gray-200/50 px-3 py-2 outline-none transition-all focus:border-blue-800"
      id="email"
      name="email"
      value=""
    />
    <label
      htmlFor="email"
      className="absolute top-0 p-2 font-semibold transition-all ease-out"
    >
      Email
    </label>
  </div>
);

export const AnO = () => (
  <div className="relative z-0 mb-8 w-full">
    <input
      id="and_o"
      type="text"
      placeholder=" "
      className="mt-0 block w-full appearance-none border-0 border-b-2 border-gray-200 bg-transparent px-0 pt-3 pb-2 focus:border-black focus:outline-none focus:ring-0"
    />
    <label
      htmlFor="and_o"
      className="-z-1 origin-0 absolute top-3 text-gray-500 duration-300"
    >
      and_o
    </label>
  </div>
);

export const AllInputs = (): JSX.Element => {
  return (
    <div>
      <div>
        <AnO />
      </div>
      <div>
        <FloatingStandard />
      </div>
      <div>
        <FloatingOutlined />
      </div>
      <div>
        <EmailInput />
      </div>

      <div>
        <Label />
      </div>
      <div>
        <TextHelper />
      </div>
      <div>
        <LabelAndHelper />
      </div>
      <div>
        <Default />
      </div>
      <div>
        <Small />
        <Normal />
        <Large />
      </div>
      <div>
        <IsDisabled />
      </div>
      <div>
        <IsReadOnly />
      </div>
      <div>
        <Email />
        <Password />
        <Tel />
        <Text />
        <Url />
        <Number />
      </div>
    </div>
  );
};
