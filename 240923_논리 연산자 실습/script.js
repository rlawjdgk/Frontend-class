const a = 10;
const b = 20;
const m = 30;
const n = 40;

let result;
result = a > b || b >= m || m > n;
// 10 > 20 || 20 >= 30 || 30 > 40
console.log(result);
// false || false || false
// false

result = a > b || b >= m || m <= n;
// 10 > 20 || 20 >= 30 || 30 <= 40
console.log(result);
// false || false || true
// true

result = a <= b && b >= m && m <= n;
//10 <= 20 && 20 >= 30 && 30 <= 40
console.log(result);
// true && false && true
// false

result = a <= b && b <= m && m <= n;
// 10 <= 20 && 20 <= 30 && 30 <= 40
console.log(result);
// true && true && true
// true

result = !(a > b);
// !(10 > 20)
console.log(result);
// true
