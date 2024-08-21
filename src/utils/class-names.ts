import type { IClassName } from "./variables";

const getItem = (
  value: string | object | undefined,
): (object | string | undefined)[] => {
  return typeof value === "string"
    ? [value]
    : value && typeof value === "object" && !Array.isArray(value)
      ? objectsToArray(value as object)
      : [];
};

export const objectsToArray = (
  object: object,
): (object | string | undefined)[] =>
  // eslint-disable-next-line unicorn/no-array-callback-reference
  Object.values(object).map(getItem).flat(Infinity);

// for (const value of Object.values(object)) {
//   if (typeof value === "string") {
//     result = [...result, value];
//   } else if (
//     typeof value === "object" &&
//     !Array.isArray(value) &&
//     value !== null
//   ) {
//     result = [...result, ...objectsToArray(value as object)];
//   }
//   result = [...result, ...objectsToArray(value as object)];
// }

export const classToString = (classes: Readonly<IClassName>): string =>
  objectsToArray(classes)
    .filter((v) => typeof v === "string")
    .join(" ");

export const classNames = (classes: readonly (string | undefined)[]): string =>
  classes.filter(Boolean).join(" ");
