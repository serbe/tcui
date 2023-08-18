import { useValue } from "../../utils/handles";
import { Colors, ColorValues } from "../../utils/variables";
import { Input } from "./index";

export const AllColors = (): JSX.Element => {
  const [value, setValue] = useValue("");
  return (
    <div className="container mx-auto">
      {ColorValues.map((color) => (
        <div className="my-2 flex flex-wrap" key={`div-${color}`}>
          <div className="m-2">
            <Input
              color={color as Colors}
              isOutlined={false}
              name={`${color}NoOutline`}
              label={`${color} no outline`}
              value={value}
              onChange={setValue}
              className=""
            ></Input>
          </div>
          <div className="m-2">
            <Input
              color={color as Colors}
              name={`${color}normal`}
              label={`${color} normal`}
              value={value}
              onChange={setValue}
              className=""
            ></Input>
          </div>
          <div className="m-2">
            <Input
              color={color as Colors}
              name={`${color}small`}
              label={`${color} small`}
              value={value}
              size="small"
              onChange={setValue}
              className=""
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
              className=""
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
      <div className="my-2 flex flex-wrap">
        <div className="m-2">
          <Input
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
          />
        </div>
        <div className="m-2">
          <Input
            name="password"
            type="password"
            placeholder="password"
            value="password"
            onChange={setValue}
          />
        </div>
        <div className="m-2">
          <Input
            name="tel"
            type="tel"
            placeholder="+1800123456"
            value="+1800123456"
            onChange={setValue}
          />
        </div>
        <div className="m-2">
          <Input
            name="text"
            type="text"
            placeholder="text"
            value="text"
            onChange={setValue}
          />
        </div>
        <div className="m-2">
          <Input
            name="url"
            type="url"
            placeholder="URL"
            value="http://example.com"
            onChange={setValue}
          />
        </div>
        <div className="m-2">
          <Input
            name="number"
            type="number"
            placeholder="123"
            value="123"
            onChange={setValue}
          />
        </div>
        <div className="m-2">
          <Input
            isDisabled
            name="isDisabled"
            placeholder="is disabled"
            value=""
            onChange={setValue}
          />
        </div>
        <div className="m-2">
          <Input
            isReadOnly
            name="isReadOnly"
            placeholder="is read only"
            value=""
            onChange={setValue}
          />
        </div>
      </div>
    </div>
  );
};

export const LAI = (): JSX.Element => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Email
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pr-10 text-sm leading-6 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus-within:ring-2 focus-within:ring-inset focus:ring-red-500"
          placeholder="you@example.com"
          aria-invalid="true"
          aria-describedby="email-error"
          value="adamwathan"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-5 text-red-500"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <p className="mt-2 text-sm text-red-600" id="email-error">
        Not a valid email address.
      </p>
    </div>
  );
};

// export const Label = (): JSX.Element => {
//   const [value, setValue] = useValue("");
//   return (
//     <Input
//       name="label"
//       label="label"
//       placeholder="label"
//       value={value}
//       onChange={setValue}
//     />
//   );
// };

// export const TextHelper = (): JSX.Element => {
//   const [value, setValue] = useValue("");
//   return (
//     <Input
//       name="textHelper"
//       textHelper="text helper"
//       placeholder="text helper"
//       value={value}
//       onChange={setValue}
//     />
//   );
// };

// export const LabelAndHelper = (): JSX.Element => {
//   const [value, setValue] = useValue("");
//   return (
//     <Input
//       name="labelAndHelper"
//       label="label"
//       textHelper="text helper"
//       placeholder="label and text helper"
//       value={value}
//       onChange={setValue}
//     />
//   );
// };
