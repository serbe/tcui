import { expect, test } from "vitest";

import { classNames } from "./class-names";

test("sums two numbers", () => {
  expect(classNames("one", "two")).toBe("one two");
});
