import isBlanks from "./isBlanks";
export default function isNotBlanks<T>(value: T | null | undefined) {
  return !isBlanks(value);
}
