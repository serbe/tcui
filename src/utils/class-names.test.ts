import { expect, test } from "vitest";

import type { IClassName } from "./variables";

import { classNames, classToString, objectsToArray } from "./class-names";

test("test classNames", () => {
  expect(classNames(["one", "two"])).toBe("one two");
});

const testClass: IClassName = {
  background: {
    color: "bg-red-200",
  },
  size: {
    height: "200px",
  },
};

const testObject = {
  a: "a",
  b: undefined,
  c: {
    d: "d",
    e: 1,
  },
};

test("test classToString", () => {
  expect(classToString(testClass)).toBe("bg-red-200 200px");
});

test("test objectsToArray", () => {
  expect(objectsToArray(testObject)).toStrictEqual(["a", "d"]);
});
