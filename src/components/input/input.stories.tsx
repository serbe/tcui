import { useValue } from "../../utils/handles";
import { Colors, ColorValues } from "../../utils/variables";
import { Input } from "./index";

export const AllColors = (): JSX.Element => {
  const [value, setValue] = useValue("");
  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="flex items-end py-2" key={`div-${color}`}>
          {[false, true].map((isOutlined) => (
            <Input
              color={color as Colors}
              isOutlined={isOutlined}
              key={`${isOutlined ? "O" : ""} ${color}`}
              name={`${isOutlined ? "O" : ""} ${color}`}
              label={`${color} ${isOutlined ? "O" : ""}`}
              value={value}
              onChange={setValue}
            ></Input>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Orig = (): JSX.Element => {
  return (
    <div className="relative h-10 w-full min-w-[200px]">
      <input
        id="orig"
        className="peer h-full w-full rounded-[7px] border border-slate-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-50"
        placeholder=" "
      />
      <label
        htmlFor="orig"
        className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-200 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-slate-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-pink-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
      >
        Required
      </label>
    </div>
  );
};

export const Red = (): JSX.Element => {
  return (
    <div className="relative h-10 w-full min-w-[200px]">
      <input
        className="peer h-full w-full rounded-[7px] border border-slate-300 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-slate-600 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-slate-300 focus:border-2 focus:border-red-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-slate-100"
        id="O red"
        placeholder=""
        type="text"
        value=""
      />
      <label
        htmlFor="O red"
        className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight text-slate-400 transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:border-slate-300 before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:grow after:rounded-tr-md after:border-r after:border-t after:border-slate-300 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-slate-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-red-500 peer-focus:before:border-l-2 peer-focus:before:border-t-2 peer-focus:before:border-red-500 peer-focus:after:border-r-2 peer-focus:after:border-t-2 peer-focus:after:border-red-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-slate-500"
      >
        red O
      </label>
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
      label="text helper"
      textHelper="text helper"
      placeholder="text helper"
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

export const AllInputs = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Label />
      </div>
      <div>
        <TextHelper />
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
