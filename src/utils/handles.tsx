import type { Dispatch, SetStateAction } from "react";

import { useState } from "react";

export const useValue = (
  initValue: number | string,
): [
  number | string,
  (newValue: number | string) => void,
  Dispatch<SetStateAction<number | string>>,
] => {
  const [value, setValue] = useState<number | string>(initValue);

  const handleValueChange = (newValue: number | string): void => {
    setValue(newValue);
  };

  return [value, handleValueChange, setValue];
};
