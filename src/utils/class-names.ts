import type { IClassName } from "./variables";

export const objectsToArray = (
  object: object,
): (object | string | undefined)[] => {
  let result: (object | string | undefined)[] = [];

  for (const value of Object.values(object)) {
    if (typeof value === "string") {
      result = [...result, value];
    } else if (
      typeof value === "object" &&
      !Array.isArray(value) &&
      value !== null
    ) {
      result = [...result, ...objectsToArray(value as object)];
    }
  }

  return result;
};

export const classToString = (classes: IClassName): string =>
  objectsToArray(classes)
    .filter((v) => typeof v === "string")
    .join(" ");

export const classNames = (...classes: (string | undefined)[]): string =>
  classes.filter(Boolean).join(" ");
