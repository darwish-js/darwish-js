/**
 * Check if the value is an object, excluding proxies
 * if excludeProxy is true, it will return false if the value is a proxy
 * @param value the value to check
 * @param excludeProxy whether to exclude proxies or not, defaults to `true`
 * @returns true if the value is an object, false otherwise
 */
export const isObject = (value: unknown): value is Record<PropertyKey, any> =>
  objProtoCallType(value, "object");
export const isSet = (value: unknown): value is Set<any> =>
  objProtoCallType(value, "set");
export const isMap = (value: unknown): value is Map<any, any> =>
  objProtoCallType(value, "map");
export const isNull = (value: unknown): value is null =>
  objProtoCallType(value, "null");
export const isBigint = (value: unknown): value is bigint =>
  typeof value === "bigint";
export const isDate = (value: unknown): value is Date =>
  objProtoCallType(value, "date");
export const isArray = (value: unknown): value is any[] => Array.isArray(value);
export const isSymbol = (value: unknown): value is symbol =>
  typeof value === "symbol";
export const isFunction = (value: unknown): value is (...props: any) => any =>
  typeof value === "function";
export const isString = (value: unknown): value is string =>
  typeof value === "string";
export const isBoolean = (value: unknown): value is boolean =>
  typeof value === "boolean";
export const isNumber = (value: unknown): value is number =>
  typeof value === "number";
export const isInfinity = (value: unknown): value is number =>
  value === Infinity || value === -Infinity;
export const isUndef = (value: unknown): value is undefined =>
  typeof value === "undefined";
export const isRegExp = (value: unknown): value is RegExp =>
  objProtoCallType(value, "regexp");
export const isError = (value: unknown): value is Error =>
  objProtoCallType(value, "error");
export const isPromise = (value: unknown): value is Promise<any> =>
  objProtoCallType(value, "promise");
export const isArrayBuffer = (value: unknown): value is ArrayBuffer =>
  objProtoCallType(value, "arraybuffer");
export const isDataView = (value: unknown): value is DataView =>
  objProtoCallType(value, "dataview");
export const isWeakMap = (value: unknown): value is WeakMap<any, any> =>
  objProtoCallType(value, "weakmap");
export const isWeakSet = (value: unknown): value is WeakSet<any> =>
  objProtoCallType(value, "weakset");
// export const isArrayBufferLike = (value: unknown): value is ArrayBufferLike =>
//   isArrayBuffer(value) || isSharedArrayBuffer(value);
// export const isSharedArrayBuffer = (
//   value: unknown
// ): value is SharedArrayBuffer => objProtoCallType(value, "sharedarraybuffer");
// export const isInt8Array = (value: unknown): value is Int8Array =>
//   objProtoCallType(value, "int8array");
// export const isUint8Array = (value: unknown): value is Uint8Array =>
//   objProtoCallType(value, "uint8array");
// export const isUint8ClampedArray = (
//   value: unknown
// ): value is Uint8ClampedArray => objProtoCallType(value, "uint8clampedarray");
// export const isInt16Array = (value: unknown): value is Int16Array =>
//   objProtoCallType(value, "int16array");
// export const isUint16Array = (value: unknown): value is Uint16Array =>
//   objProtoCallType(value, "uint16array");
// export const isInt32Array = (value: unknown): value is Int32Array =>
//   objProtoCallType(value, "int32array");
// export const isUint32Array = (value: unknown): value is Uint32Array =>
//   objProtoCallType(value, "uint32array");
// export const isFloat32Array = (value: unknown): value is Float32Array =>
//   objProtoCallType(value, "float32array");
// export const isFloat64Array = (value: unknown): value is Float64Array =>
//   objProtoCallType(value, "float64array");

const objProtoCallType = <T>(value: unknown, type: T) =>
  Object.prototype.toString.call(value).slice(8, -1).toLowerCase() === type;
