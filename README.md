# PERSEC 2026 – Web Developer Interview

คำตอบแบบทดสอบ Web Developer เขียนด้วย TypeScript

## วิธีรัน

ต้องใช้ Node.js 22.6 ขึ้นไป ไม่ต้องติดตั้ง package เพิ่ม

```bash
node --experimental-strip-types src/01-valid-brackets.ts
```

เปลี่ยนชื่อไฟล์เป็นข้ออื่นได้ตามต้องการ แต่ละไฟล์มีตัวอย่างหรือโค้ดทดสอบอยู่ท้ายไฟล์

## รายการข้อ

| ข้อ | หัวข้อ | ไฟล์ |
|---|---|---|
| 1 | ตรวจวงเล็บ `()`, `[]`, `{}` ว่าเปิด-ปิดครบคู่และถูกลำดับ | [src/01-valid-brackets.ts](src/01-valid-brackets.ts) |
| 2 | เรียงรหัสแบบ natural sort (`TH2` มาก่อน `TH10`) | [src/02-natural-sort.ts](src/02-natural-sort.ts) |
| 3 | Autocomplete เรียงผลตาม ขึ้นต้น → ตรงกลาง → ท้ายคำ | [src/03-autocomplete.ts](src/03-autocomplete.ts) |
| 4 | แปลงเลข ⇄ เลขโรมัน | [src/04-roman-numerals.ts](src/04-roman-numerals.ts) |
| 5 | เรียงหลักของตัวเลขแต่ละตัวจากมากไปน้อย (`3008` → `8300`) | [src/05-sort-digits.ts](src/05-sort-digits.ts) |
| 6 | Tribonacci | [src/06-tribonacci.ts](src/06-tribonacci.ts) |


## Prompts

prompt ที่ใช้กับ AI ในข้อ 4 และ 6 อยู่ในโฟลเดอร์ [prompts/](prompts/)
