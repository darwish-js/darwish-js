import { expect, test } from "vitest";
import { typeOfData } from "@darwish/utils-tools";

test("typeOfData", () => {
  expect(typeOfData(null)).toBe("null");
  expect(typeOfData(undefined)).toBe("undefined");
  expect(typeOfData("123")).toBe("string");
  expect(typeOfData(true)).toBe("boolean");
  expect(typeOfData(123)).toBe("number");
  expect(typeOfData({})).toBe("object");
  expect(typeOfData([])).toBe("array");
  expect(typeOfData(Symbol())).toBe("symbol");
  expect(typeOfData(new Date())).toBe("date");
  expect(typeOfData(function () {})).toBe("function");
  expect(typeOfData(async function () {})).toBe("asyncfunction");
  expect(typeOfData(Promise.resolve())).toBe("promise");
  expect(typeOfData(new Error())).toBe("error");
  expect(typeOfData(new Map())).toBe("map");
  expect(typeOfData(new WeakMap())).toBe("weakmap");
  expect(typeOfData(new WeakSet())).toBe("weakset");
});
