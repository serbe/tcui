import { Dispatch, SetStateAction, useState } from "react";

export const useValue = (
  initValue: string | number,
): [
  string | number,
  // eslint-disable-next-line no-unused-vars
  (newValue: string | number) => void,
  Dispatch<SetStateAction<string | number>>,
] => {
  const [value, setValue] = useState<string | number>(initValue);

  const handleValueChange = (newValue: string | number): void => {
    setValue(newValue);
  };

  return [value, handleValueChange, setValue];
};
