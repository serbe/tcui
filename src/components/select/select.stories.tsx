import { Select } from "./index";

const data = [
  { id: 0, name: "name-0" },
  { id: 1, name: "name-1" },
  { id: 2, name: "name-2" },
  { id: 3, name: "name-3" },
];

export const Default = (): JSX.Element => <Select data={data} name="default" />;
