import { IClassName } from "./variables";

const objectsToArray = (object: object): (string | object | undefined)[] => {
  let result: (string | object | undefined)[] = [];

  Object.values(object).forEach((value) => {
    if (typeof value === "string") {
      result = [...result, value];
    } else if (
      typeof value === "object" &&
      !Array.isArray(value) &&
      value !== null
    ) {
      result = [...result, ...objectsToArray(value as object)];
    }

    return undefined;
  });

  return result;
};

export const classToString = (classes: IClassName): string => {
  return objectsToArray(classes)?.filter(Boolean).join(" ") ?? "";
};

export const classNames = (...classes: unknown[]): string => {
  return classes.filter(Boolean).join(" ");
};
