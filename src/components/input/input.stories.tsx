import { ChangeEvent, useState } from "react";

import { useValue } from "../../utils/handles";
import { Colors, ColorValues, Sizes } from "../../utils/variables";
import { Input } from "./index";

export const ACustom = (): JSX.Element => {
  return (
    <div className="flex w-72 flex-col gap-6">
      <div className="relative h-10 w-full min-w-[200px]">
        <input
          className="peer h-full w-full truncate rounded-[7px] border border-slate-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-300 focus:text-clip focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-100"
          placeholder=" "
          id="custom"
        />
        <label
          htmlFor="custom"
          className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none overflow-y-hidden text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-300 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-slate-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
        >
          Input label
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          placeholder="Static"
          className="peer h-full w-full border-b border-slate-300 bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border-slate-300 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-slate-100"
          id="static"
        />
        <label
          htmlFor="static"
          className="pointer-events-none absolute -top-2.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight text-slate-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-slate-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
        >
          Static
        </label>
      </div>
      <div className="relative h-11 w-full min-w-[200px]">
        <input
          className="peer h-full w-full border-b border-slate-300 bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border-slate-300 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-slate-100"
          placeholder=" "
          id="standard"
        />
        <label
          htmlFor="standard"
          className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-slate-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
        >
          Standard
        </label>
      </div>
      <div className="relative h-10 w-full min-w-[200px]">
        <input
          className="peer h-full w-full rounded-[7px] border border-slate-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-300 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-100"
          placeholder=" "
          id="outlined"
        />
        <label
          htmlFor="outlined"
          className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-300 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-slate-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
        >
          Outlined
        </label>
      </div>
      <div>
        <label
          htmlFor="outlined"
          className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-300 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-slate-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-600"
        >
          Input Medium
        </label>
        <label
          htmlFor="outlined"
          className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-500 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-300 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-slate-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-slate-600 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-600"
        >
          Input Large
        </label>
      </div>
    </div>
  );
};

export const AllVariants = (): JSX.Element => {
  const [value, setValue] = useValue("default");
  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="flex items-end py-2" key={`div-${color}`}>
          {[undefined, "small", "large"].map((size) =>
            [false, true].map((isOutlined) => (
              <Input
                color={color as Colors}
                size={size as Sizes}
                isOutlined={isOutlined}
                key={`${isOutlined ? "O" : ""}${color}${size ?? ""}`}
                name={`${isOutlined ? "O" : ""}${color}${size ?? ""}`}
                label={`${color} ${size ?? ""}${isOutlined ? "O" : ""}`}
                value={value}
                onChange={setValue}
              ></Input>
            ))
          )}
        </div>
      ))}
    </div>
  );
};

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

export const FloatingStandard = (): JSX.Element => {
  return (
    <div className="relative z-0">
      <input
        type="text"
        id="floating_standard"
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
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

export const FloatingOutlined = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
        className="absolute left-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
      >
        Floating outlined
      </label>
    </div>
  );
};

export const EmailInput = (): JSX.Element => (
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

export const BStaticI = (): JSX.Element => (
  <div className="relative h-11 w-full min-w-[200px]">
    <input
      id="and_o"
      type="text"
      placeholder="And O"
      className="peer h-full w-full border-b border-gray-200 bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-gray-50"
    />
    <label
      htmlFor="and_o"
      className="pointer-events-none absolute -top-2.5 left-0 flex h-full w-full select-none text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-placeholder-shown:text-gray-500 peer-focus:text-sm peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
    >
      Static
    </label>
  </div>
);

export const BStandardI = (): JSX.Element => (
  <div className="relative h-11 w-full min-w-[200px]">
    <input
      id="istand"
      className="peer h-full w-full border-b border-gray-200 bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-gray-50"
      placeholder=" "
    />
    <label
      htmlFor="istand"
      className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
    >
      Standard
    </label>
  </div>
);

export const BOutlinedI = (): JSX.Element => (
  <div className="relative h-10 w-full min-w-[200px]">
    <input
      id="ioutl"
      // className="peer h-full w-full border-b border-cyan-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-cyan-700 outline outline-0 transition-all placeholder-shown:border-cyan-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
      className="peer h-full w-full rounded-[7px]          border border-slate-300 border-t-transparent bg-transparent                 px-3 py-2.5 !pr-20      font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-300 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-100"
      // standard className="peer h-full w-full               border-b        border-slate-300                      bg-transparent     pt-4 pb-1.5                   font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all                          placeholder-shown:border-slate-300                focus:border-pink-500                            focus:outline-0 disabled:border-0 disabled:bg-slate-100"
      // outlined className="peer h-full w-full rounded-[7px]          border border-slate-300 border-t-transparent bg-transparent                 px-3 py-2.5       font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-300 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-100"
      // o indigo className="peer h-full w-full rounded-[7px]          border border-gray-200  border-t-transparent bg-transparent                 px-3 py-2.5       font-sans text-sm font-normal text-gray-700  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200  focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50
      // r button className="peer h-full w-full rounded-[7px]          border border-cyan-200  border-t-transparent bg-transparent                 px-3 py-2.5 pr-20 font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-cyan-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
      // r icon   className="peer h-full w-full rounded-[7px]          border border-cyan-200  border-t-transparent bg-transparent                 px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-cyan-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
      // large    className="peer h-full w-full rounded-md             border border-cyan-200  border-t-transparent bg-transparent p-3                               font-sans text-sm font-normal text-cyan-700  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-cyan-200  focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-cyan-50"
      placeholder=" "
    />
    <label
      htmlFor="ioutj"
      className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
    >
      Outlined
    </label>
  </div>
);

export const BOutlinedIndigoI = (): JSX.Element => (
  <div className="relative h-10 w-full min-w-[200px]">
    <input
      id="indigo"
      className="peer h-full w-full rounded-[7px] border border-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-200 focus:border-2 focus:border-indigo-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
      placeholder=" "
    />
    <label
      htmlFor="indigo"
      className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-gray-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-indigo-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-indigo-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-indigo-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
    >
      Input Indigo
    </label>
  </div>
);

export const AllInputs = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <BStaticI />
      </div>
      <div>
        <BStandardI />
      </div>
      <div>
        <BOutlinedI />
      </div>
      <div>
        <BOutlinedIndigoI />
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
