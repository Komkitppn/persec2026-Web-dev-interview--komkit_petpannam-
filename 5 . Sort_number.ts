function checkInputArray(arr: number[]): number[] {
  const result: number[] = [];

  for (const num of arr) {
    
    if (!Number.isInteger(num) || num <= 0) {
      continue;
    }

    const digits = num.toString().split("");
    digits.sort().reverse();

    result.push(Number(digits.join("")));
  }

  return result;
}

console.log(checkInputArray([3008, 1989, 2679, 9163]));