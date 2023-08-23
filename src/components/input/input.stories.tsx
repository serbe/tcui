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
              placeholder={color}
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
              placeholder={color}
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
              placeholder={color}
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
              placeholder={color}
            ></Input>
          </div>
        </div>
      ))}
      <section>
        <header className="space-y-4 bg-white p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Проекты</h2>
            <a
              href="/new"
              className="group flex items-center rounded-md bg-blue-500 py-2 pl-2 pr-3 text-sm font-medium text-white shadow-sm hover:bg-blue-400"
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New
            </a>
          </div>
          <form className="group relative">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="pointer-events-none absolute left-3 top-1/2 -mt-2.5 text-slate-400 group-focus-within:text-blue-500"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              />
            </svg>
            <input
              className="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 shadow-sm ring-1 ring-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              aria-label="Filter projects"
              placeholder="Filter projects..."
            />
          </form>
        </header>
        <ul className="grid grid-cols-1 gap-4 bg-slate-50 p-4 text-sm leading-6 sm:grid-cols-2 sm:px-8 sm:pb-8 sm:pt-6 lg:grid-cols-1 lg:p-4 xl:grid-cols-2 xl:px-8 xl:pb-8 xl:pt-6">
          <li>
            <a
              href="project.url"
              className="group rounded-md bg-white p-3 shadow-sm ring-1 ring-slate-200 hover:bg-blue-500 hover:shadow-md hover:ring-blue-500"
            >
              <dl className="grid grid-cols-2 grid-rows-2 items-center sm:block lg:grid xl:block">
                <div>
                  <dt className="sr-only">Заголовок</dt>
                  <dd className="font-semibold text-slate-900 group-hover:text-white">
                    title
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Категория</dt>
                  <dd className="group-hover:text-blue-200">category</dd>
                </div>
                <div className="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4">
                  <dt className="sr-only">Пользователи</dt>
                  <dd className="flex justify-end -space-x-1.5 sm:justify-start lg:justify-end xl:justify-start">
                    <img
                      src="user.avatar"
                      alt="user.name"
                      className="h-6 w-6 rounded-full bg-slate-100 ring-2 ring-white"
                      loading="lazy"
                    />
                  </dd>
                </div>
              </dl>
            </a>
          </li>
          <li className="flex">
            <a
              href="/new"
              className="group flex w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 py-3 text-sm font-medium leading-6 text-slate-900 hover:border-solid hover:border-blue-500 hover:bg-white hover:text-blue-500"
            >
              <svg
                className="mb-1 text-slate-400 group-hover:text-blue-500"
                width="20"
                height="20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              Новый проект
            </a>
          </li>
        </ul>
      </section>
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
