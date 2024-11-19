const a = 10;
const b = 20;
const c = 10;
const f = "20";
let result;

result = a > b;
console.log(result);
// 10 > 20
// false

result = a < b;
console.log(result);
// 10 < 20
// true

result = a <= b;
console.log(result);
// 10 <= 20
// true

result = a >= c;
console.log(result);
// 10 >= 10
// true

result = b == f;
console.log(result);
// 20 == "20"
// true

result = a != b;
console.log(result);
// 10 != 20
// true

result = b === f;
console.log(result);
// 20 === "20"
// false
