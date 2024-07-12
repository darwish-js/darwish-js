import { expect, test } from "vitest";
import isBlanks from "../../is/isBlanks";

test("isBlanks", () => {
  expect(isBlanks("")).toBe(true);
  expect(isBlanks(" ")).toBe(true);
  expect(isBlanks("   ")).toBe(true);
  expect(isBlanks("hello")).toBe(false);
  expect(isBlanks("  hello  ")).toBe(false);
  expect(isBlanks(null)).toBe(true);
  expect(isBlanks(undefined)).toBe(true);
  expect(isBlanks(0)).toBe(true);
  expect(isBlanks(1)).toBe(false);
  expect(isBlanks(true)).toBe(false);
  expect(isBlanks(false)).toBe(true);
  expect(isBlanks([])).toBe(true);
  expect(isBlanks({})).toBe(true);
});
