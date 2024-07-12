import { expect, test } from "vitest";
import {
  isObject,
  isSet,
  isMap,
  isWeakSet,
  isWeakMap,
  isNull,
  isArray,
  isBigint,
  isDate,
  isFunction,
  isBoolean,
  isString,
  isInfinity,
  isUndef,
  isNumber,
  isRegExp,
  isPromise,
} from "../../is/isTypings";

test("isObject", () => {
  expect(isObject({})).toBe(true);
  expect(isObject([])).toBe(false);
  expect(isObject("")).toBe(false);
  expect(isObject(null)).toBe(false);
  expect(isObject(undefined)).toBe(false);
  expect(isObject(123)).toBe(false);
  expect(isObject(true)).toBe(false);
  expect(isObject(Symbol())).toBe(false);
  expect(isObject(() => {})).toBe(false);
  expect(isObject(new Date())).toBe(false);
  expect(isObject(new Map())).toBe(false);
  expect(isObject(new Set())).toBe(false);
  expect(isObject(new WeakMap())).toBe(false);
  expect(isObject(new WeakSet())).toBe(false);
});

test("isSet", () => {
  expect(isSet(new Set())).toBe(true);
  expect(isSet(new WeakSet())).toBe(false);
  expect(isSet([])).toBe(false);
  expect(isSet({})).toBe(false);
  expect(isSet("")).toBe(false);
  expect(isSet(null)).toBe(false);
  expect(isSet(undefined)).toBe(false);
  expect(isSet(123)).toBe(false);
  expect(isSet(true)).toBe(false);
  expect(isSet(Symbol())).toBe(false);
  expect(isSet(() => {})).toBe(false);
  expect(isSet(new Date())).toBe(false);
  expect(isSet(new Map())).toBe(false);
  expect(isSet(new WeakMap())).toBe(false);
  expect(isSet(new WeakSet())).toBe(false);
});

test("isMap", () => {
  expect(isMap(new Map())).toBe(true);
  expect(isMap(new WeakMap())).toBe(false);
  expect(isMap([])).toBe(false);
  expect(isMap({})).toBe(false);
  expect(isMap("")).toBe(false);
  expect(isMap(null)).toBe(false);
  expect(isMap(undefined)).toBe(false);
  expect(isMap(123)).toBe(false);
  expect(isMap(true)).toBe(false);
  expect(isMap(Symbol())).toBe(false);
  expect(isMap(() => {})).toBe(false);
  expect(isMap(new Date())).toBe(false);
  expect(isMap(new Set())).toBe(false);
  expect(isMap(new WeakSet())).toBe(false);
});

test("isWeakSet", () => {
  expect(isWeakSet(new WeakSet())).toBe(true);
  expect(isWeakSet(new Set())).toBe(false);
  expect(isWeakSet([])).toBe(false);
  expect(isWeakSet({})).toBe(false);
  expect(isWeakSet("")).toBe(false);
  expect(isWeakSet(null)).toBe(false);
  expect(isWeakSet(undefined)).toBe(false);
  expect(isWeakSet(123)).toBe(false);
  expect(isWeakSet(true)).toBe(false);
  expect(isWeakSet(Symbol())).toBe(false);
  expect(isWeakSet(() => {})).toBe(false);
  expect(isWeakSet(new Date())).toBe(false);
  expect(isWeakSet(new Map())).toBe(false);
  expect(isWeakSet(new WeakMap())).toBe(false);
});

test("isWeakMap", () => {
  expect(isWeakMap(new WeakMap())).toBe(true);
  expect(isWeakMap(new Map())).toBe(false);
  expect(isWeakMap([])).toBe(false);
  expect(isWeakMap({})).toBe(false);
  expect(isWeakMap("")).toBe(false);
  expect(isWeakMap(null)).toBe(false);
  expect(isWeakMap(undefined)).toBe(false);
  expect(isWeakMap(123)).toBe(false);
  expect(isWeakMap(true)).toBe(false);
  expect(isWeakMap(Symbol())).toBe(false);
  expect(isWeakMap(() => {})).toBe(false);
  expect(isWeakMap(new Date())).toBe(false);
  expect(isWeakMap(new Set())).toBe(false);
  expect(isWeakMap(new WeakSet())).toBe(false);
});

test("isNull", () => {
  expect(isNull(null)).toBe(true);
  expect(isNull(undefined)).toBe(false);
  expect(isNull([])).toBe(false);
  expect(isNull({})).toBe(false);
  expect(isNull("")).toBe(false);
  expect(isNull(123)).toBe(false);
  expect(isNull(true)).toBe(false);
  expect(isNull(Symbol())).toBe(false);
  expect(isNull(() => {})).toBe(false);
  expect(isNull(new Date())).toBe(false);
  expect(isNull(new Map())).toBe(false);
  expect(isNull(new Set())).toBe(false);
  expect(isNull(new WeakMap())).toBe(false);
  expect(isNull(new WeakSet())).toBe(false);
});

test("isArray", () => {
  expect(isArray([])).toBe(true);
  expect(isArray({})).toBe(false);
  expect(isArray("")).toBe(false);
  expect(isArray(null)).toBe(false);
  expect(isArray(undefined)).toBe(false);
  expect(isArray(123)).toBe(false);
  expect(isArray(true)).toBe(false);
  expect(isArray(Symbol())).toBe(false);
  expect(isArray(() => {})).toBe(false);
  expect(isArray(new Date())).toBe(false);
  expect(isArray(new Map())).toBe(false);
  expect(isArray(new Set())).toBe(false);
  expect(isArray(new WeakMap())).toBe(false);
  expect(isArray(new WeakSet())).toBe(false);
});

test("isBigint", () => {
  expect(isBigint(123n)).toBe(true);
  expect(isBigint(123)).toBe(false);
  expect(isBigint([])).toBe(false);
  expect(isBigint({})).toBe(false);
  expect(isBigint("")).toBe(false);
  expect(isBigint(null)).toBe(false);
  expect(isBigint(undefined)).toBe(false);
  expect(isBigint(true)).toBe(false);
  expect(isBigint(Symbol())).toBe(false);
  expect(isBigint(() => {})).toBe(false);
  expect(isBigint(new Date())).toBe(false);
  expect(isBigint(new Map())).toBe(false);
  expect(isBigint(new Set())).toBe(false);
  expect(isBigint(new WeakMap())).toBe(false);
  expect(isBigint(new WeakSet())).toBe(false);
});

test("isDate", () => {
  expect(isDate(new Date())).toBe(true);
  expect(isDate([])).toBe(false);
  expect(isDate({})).toBe(false);
  expect(isDate("")).toBe(false);
  expect(isDate(null)).toBe(false);
  expect(isDate(undefined)).toBe(false);
  expect(isDate(123)).toBe(false);
  expect(isDate(true)).toBe(false);
  expect(isDate(Symbol())).toBe(false);
  expect(isDate(() => {})).toBe(false);
  expect(isDate(new Map())).toBe(false);
  expect(isDate(new Set())).toBe(false);
  expect(isDate(new WeakMap())).toBe(false);
  expect(isDate(new WeakSet())).toBe(false);
});

test("isFunction", () => {
  expect(isFunction(() => {})).toBe(true);
  expect(isFunction([])).toBe(false);
  expect(isFunction({})).toBe(false);
  expect(isFunction("")).toBe(false);
  expect(isFunction(null)).toBe(false);
  expect(isFunction(undefined)).toBe(false);
  expect(isFunction(123)).toBe(false);
  expect(isFunction(true)).toBe(false);
  expect(isFunction(Symbol())).toBe(false);
  expect(isFunction(new Date())).toBe(false);
  expect(isFunction(new Map())).toBe(false);
  expect(isFunction(new Set())).toBe(false);
  expect(isFunction(new WeakMap())).toBe(false);
  expect(isFunction(new WeakSet())).toBe(false);
});

test("isBoolean", () => {
  expect(isBoolean(true)).toBe(true);
  expect(isBoolean(false)).toBe(true);
  expect(isBoolean([])).toBe(false);
  expect(isBoolean({})).toBe(false);
  expect(isBoolean("")).toBe(false);
  expect(isBoolean(null)).toBe(false);
  expect(isBoolean(undefined)).toBe(false);
  expect(isBoolean(123)).toBe(false);
  expect(isBoolean(Symbol())).toBe(false);
  expect(isBoolean(() => {})).toBe(false);
  expect(isBoolean(new Date())).toBe(false);
  expect(isBoolean(new Map())).toBe(false);
  expect(isBoolean(new Set())).toBe(false);
  expect(isBoolean(new WeakMap())).toBe(false);
  expect(isBoolean(new WeakSet())).toBe(false);
});

test("isString", () => {
  expect(isString("")).toBe(true);
  expect(isString("123")).toBe(true);
  expect(isString([])).toBe(false);
  expect(isString({})).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
  expect(isString(123)).toBe(false);
  expect(isString(true)).toBe(false);
  expect(isString(Symbol())).toBe(false);
  expect(isString(() => {})).toBe(false);
  expect(isString(new Date())).toBe(false);
  expect(isString(new Map())).toBe(false);
  expect(isString(new Set())).toBe(false);
  expect(isString(new WeakMap())).toBe(false);
  expect(isString(new WeakSet())).toBe(false);
});

test("isInfinity", () => {
  expect(isInfinity(Infinity)).toBe(true);
  expect(isInfinity(-Infinity)).toBe(true);
  expect(isInfinity(123)).toBe(false);
  expect(isInfinity([])).toBe(false);
  expect(isInfinity({})).toBe(false);
  expect(isInfinity("")).toBe(false);
  expect(isInfinity(null)).toBe(false);
  expect(isInfinity(undefined)).toBe(false);
  expect(isInfinity(true)).toBe(false);
  expect(isInfinity(Symbol())).toBe(false);
  expect(isInfinity(() => {})).toBe(false);
  expect(isInfinity(new Date())).toBe(false);
  expect(isInfinity(new Map())).toBe(false);
  expect(isInfinity(new Set())).toBe(false);
  expect(isInfinity(new WeakMap())).toBe(false);
  expect(isInfinity(new WeakSet())).toBe(false);
});

test("isUndef", () => {
  expect(isUndef(undefined)).toBe(true);
  expect(isUndef(null)).toBe(false);
  expect(isUndef([])).toBe(false);
  expect(isUndef({})).toBe(false);
  expect(isUndef("")).toBe(false);
  expect(isUndef(123)).toBe(false);
  expect(isUndef(true)).toBe(false);
  expect(isUndef(Symbol())).toBe(false);
  expect(isUndef(() => {})).toBe(false);
  expect(isUndef(new Date())).toBe(false);
  expect(isUndef(new Map())).toBe(false);
  expect(isUndef(new Set())).toBe(false);
  expect(isUndef(new WeakMap())).toBe(false);
  expect(isUndef(new WeakSet())).toBe(false);
});

test("isNumber", () => {
  expect(isNumber(123)).toBe(true);
  expect(isNumber(123.45)).toBe(true);
  expect(isNumber(Infinity)).toBe(true);
  expect(isNumber(-Infinity)).toBe(true);
  expect(isNumber([])).toBe(false);
  expect(isNumber({})).toBe(false);
  expect(isNumber("")).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber(Symbol())).toBe(false);
  expect(isNumber(() => {})).toBe(false);
  expect(isNumber(new Date())).toBe(false);
  expect(isNumber(new Map())).toBe(false);
  expect(isNumber(new Set())).toBe(false);
  expect(isNumber(new WeakMap())).toBe(false);
  expect(isNumber(new WeakSet())).toBe(false);
});

test("isRegExp", () => {
  expect(isRegExp(/test/)).toBe(true);
  expect(isRegExp(new RegExp("test"))).toBe(true);
  expect(isRegExp([])).toBe(false);
  expect(isRegExp({})).toBe(false);
  expect(isRegExp("")).toBe(false);
  expect(isRegExp(null)).toBe(false);
  expect(isRegExp(undefined)).toBe(false);
  expect(isRegExp(123)).toBe(false);
  expect(isRegExp(true)).toBe(false);
  expect(isRegExp(Symbol())).toBe(false);
  expect(isRegExp(() => {})).toBe(false);
  expect(isRegExp(new Date())).toBe(false);
  expect(isRegExp(new Map())).toBe(false);
  expect(isRegExp(new Set())).toBe(false);
  expect(isRegExp(new WeakMap())).toBe(false);
  expect(isRegExp(new WeakSet())).toBe(false);
});

test("isPromise", () => {
  expect(isPromise(Promise.resolve())).toBe(true);
  expect(isPromise(new Promise(() => {}))).toBe(true);
  expect(isPromise([])).toBe(false);
  expect(isPromise({})).toBe(false);
  expect(isPromise("")).toBe(false);
  expect(isPromise(null)).toBe(false);
  expect(isPromise(undefined)).toBe(false);
  expect(isPromise(123)).toBe(false);
  expect(isPromise(true)).toBe(false);
  expect(isPromise(Symbol())).toBe(false);
  expect(isPromise(() => {})).toBe(false);
  expect(isPromise(new Date())).toBe(false);
  expect(isPromise(new Map())).toBe(false);
  expect(isPromise(new Set())).toBe(false);
  expect(isPromise(new WeakMap())).toBe(false);
  expect(isPromise(new WeakSet())).toBe(false);
});
