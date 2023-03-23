export function add(a, b) {
  try {
    if (isNaN(a) && isNaN(b)) {
      return a + b;
    }
  } catch {
    return "Not a number!";
  }
}
export function sub(a, b) {
  try {
    if (isNaN(a) && isNaN(b)) {
      return a - b;
    }
  } catch {
    return "Not a number!";
  }
}
