import { expect, test } from "vitest";

import { classNames } from "./classNames";

test("sums two numbers", () => {
  expect(classNames("one", "two")).toBe("one two");
});
