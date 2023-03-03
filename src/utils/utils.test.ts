import { test, expect } from "vitest";
import { classNames } from "./index";

test("sums two numbers", () => {
  expect(classNames("one", "two")).toBe("one two");
});
