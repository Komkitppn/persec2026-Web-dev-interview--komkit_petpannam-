function Check_input(Sign: string): boolean {
  const pairs: Record<string, string> = { ')': '(', ']': '[', '}': '{' };
  const stack: string[] = [];

  for (const check_sign of Sign) {
    if (check_sign === '(' || check_sign === '[' || check_sign === '{') {
      stack.push(check_sign);
    } else if (check_sign in pairs) {
      if (stack.pop() !== pairs[check_sign]) return false;
    }
  }
  return stack.length === 0;
}



const Result_test : [string, boolean][] = [
  ["()", true],
  ["([]]", false],
  ["([{}])", true],
  ["([[{}]]]", false],
  [")", false],
  ["(}])", false],
  ["([)]", false],
  ["{", false],
];

for (const [input, expected] of Result_test) {
  const result = Check_input(input);
  console.log(`${result === expected ? "PASS" : "FAIL"} "${input}" => ${result}`);
}