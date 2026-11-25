function tribonacci(start: number[], n: number): number[] {
  // copy ค่าเริ่มต้นมา และตัดทิ้งถ้าขอน้อยกว่าที่มี
  const result = start.slice(0, n);

  while (result.length < n) {
    const len = result.length;

    // ถ้าตัวข้างหน้าไม่ครบ 3 ตัว ให้นับตัวที่ขาดเป็น 0
    const a = result[len - 1] ?? 0;
    const b = result[len - 2] ?? 0;
    const c = result[len - 3] ?? 0;

    result.push(a + b + c);
  }

  return result;
}



console.log(tribonacci([1, 3, 5], 5));
console.log(tribonacci([2, 2, 2], 3));
console.log(tribonacci([10, 10, 10], 4));


console.log(tribonacci([1], 5));
console.log(tribonacci([], 3));


console.log(tribonacci([1, 3, 5], 2));
console.log(tribonacci([1, 3, 5], 0));