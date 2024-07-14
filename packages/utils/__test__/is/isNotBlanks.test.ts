import { expect, test } from "vitest";
import { isNotBlanks } from "../../";

test("isNotBlanks", () => {
  expect(isNotBlanks("")).toBe(false);
  expect(isNotBlanks(" ")).toBe(false);
  expect(isNotBlanks("   ")).toBe(false);
  expect(isNotBlanks("hello")).toBe(true);
  expect(isNotBlanks("  hello  ")).toBe(true);
  expect(isNotBlanks(null)).toBe(false);
  expect(isNotBlanks(undefined)).toBe(false);
  expect(isNotBlanks(0)).toBe(false);
  expect(isNotBlanks(1)).toBe(true);
  expect(isNotBlanks(true)).toBe(true);
  expect(isNotBlanks(false)).toBe(false);
  expect(isNotBlanks([])).toBe(false);
  expect(isNotBlanks({})).toBe(false);
});
