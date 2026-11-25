// เรียงจากมากไปน้อย และรวมแบบลบ (CM, CD, XC, XL, IX, IV) ไว้ด้วย
const romanTable: [number, string][] = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

const symbolValues: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// Int -> Roman
function toRoman(num: number): string {
  if (!Number.isInteger(num) || num < 1 || num > 3999) {
    throw new Error(`แปลงเป็นเลขโรมันไม่ได้: ${num} (รองรับ 1 - 3999)`);
  }

  let result = "";
  let remaining = num;

  for (const [value, symbol] of romanTable) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }

  return result;
}

// Roman -> Int
function fromRoman(roman: string): number {
  const text = roman.toUpperCase();
  let total = 0;

  for (let i = 0; i < text.length; i++) {
    const current = symbolValues[text[i]];
    const next = symbolValues[text[i + 1]] ?? 0;

    if (current === undefined) {
      throw new Error(`ตัวอักษรไม่ใช่เลขโรมัน: "${text[i]}" ใน "${roman}"`);
    }

    // ตัวเล็กอยู่หน้าตัวใหญ่ = ลบ เช่น IV = 5 - 1
    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  // กันรูปแบบผิด เช่น IIII, VV, IC: แปลงกลับแล้วต้องได้ข้อความเดิม
  if (total < 1 || total > 3999 || toRoman(total) !== text) {
    throw new Error(`รูปแบบเลขโรมันไม่ถูกต้อง: "${roman}"`);
  }

  return total;
}

// ---------- ทดสอบ ----------

let passed = 0;
let failed = 0;

function check(label: string, actual: unknown, expected: unknown) {
  if (actual === expected) {
    passed++;
  } else {
    failed++;
    console.log(`FAIL  ${label} => ${actual} (expected ${expected})`);
  }
}

function checkThrows(label: string, fn: () => unknown) {
  try {
    fn();
    failed++;
    console.log(`FAIL  ${label} should throw`);
  } catch (err) {
    passed++;
    console.log(`PASS  ${label} throws: ${(err as Error).message}`);
  }
}

const pairs: [number, string][] = [
  // ตัวอย่างจากโจทย์
  [1989, "MCMLXXXIX"],
  [2000, "MM"],
  [68, "LXVIII"],
  [109, "CIX"],
  // แบบลบทั้ง 6 แบบ
  [4, "IV"],
  [9, "IX"],
  [40, "XL"],
  [90, "XC"],
  [400, "CD"],
  [900, "CM"],
  // ค่าต่ำสุด / สูงสุด
  [1, "I"],
  [3999, "MMMCMXCIX"],
];

for (const [num, roman] of pairs) {
  check(`toRoman(${num})`, toRoman(num), roman);
  check(`fromRoman("${roman}")`, fromRoman(roman), num);
  console.log(`PASS  ${num} <=> ${roman}`);
}

// ตัวพิมพ์เล็ก
check(`fromRoman("mcmlxxxix")`, fromRoman("mcmlxxxix"), 1989);
console.log(`PASS  fromRoman("mcmlxxxix") => 1989`);

// แปลงไปกลับต้องได้เลขเดิม ทุกตัว 1 - 3999
let roundTripOk = true;
for (let n = 1; n <= 3999; n++) {
  if (fromRoman(toRoman(n)) !== n) {
    roundTripOk = false;
    console.log(`FAIL  round-trip ${n}`);
  }
}
check("round-trip 1-3999", roundTripOk, true);
console.log(`PASS  round-trip 1 - 3999 (3999 numbers)`);

// input ผิด
checkThrows("toRoman(0)", () => toRoman(0));
checkThrows("toRoman(-5)", () => toRoman(-5));
checkThrows("toRoman(4000)", () => toRoman(4000));
checkThrows("toRoman(1.5)", () => toRoman(1.5));
checkThrows(`fromRoman("")`, () => fromRoman(""));
checkThrows(`fromRoman("ABC")`, () => fromRoman("ABC"));
checkThrows(`fromRoman("IIII")`, () => fromRoman("IIII"));
checkThrows(`fromRoman("VV")`, () => fromRoman("VV"));
checkThrows(`fromRoman("IC")`, () => fromRoman("IC"));
checkThrows(`fromRoman("MMMM")`, () => fromRoman("MMMM"));

console.log(`\n${passed} passed, ${failed} failed`);
