export default function deepClone(value) {
 // Primitive values (including null)
  if (value === null || typeof value !== "object") {
    return value;
  }

  // Arrays
  if (Array.isArray(value)) {
    return value.map(item => deepClone(item));
  }

  // Plain objects
  const clone = {};

  for (const key in value) {
    clone[key] = deepClone(value[key]);
  }

  return clone;
}
