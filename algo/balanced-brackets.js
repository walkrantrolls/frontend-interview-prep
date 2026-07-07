/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
  const stack = [];

  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of str) {
    // Opening bracket
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    }
    // Closing bracket
    else {
      const top = stack.pop();

      if (top !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
