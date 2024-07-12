import { expect, test } from "vitest";
import { isObject } from "../../is/isTypings";

test("isObject", () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(false);
  expect(isObject("")).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject(true)).toBe(false);
});
