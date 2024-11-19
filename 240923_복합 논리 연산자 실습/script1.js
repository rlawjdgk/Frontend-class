let a = 20;
let b = 22;
let c = 19;
let d = 30;
let result;

result = b >= c || c < d || b <= d;
// 22 >= 19 || 19 < 30 || 22 <= 30
// true || true || true
console.log(result);
// true

result = a < b || b > c || a > d;
// 20 < 22 || 22 > 19 || 20 > 30
// true || true || false
console.log(result);
// true

result = a > d || b < c || a > d;
// 20 > 30 || 22 < 19 || 20 > 30
// false || false || fasle
console.log(result);
// false

result = b >= c && c < d && b <= d;
// 22 >= 19 && 19 < 30 && 22 <= 30
// true && true && true
console.log(result);
// true

result = a < b && b > c && a > d;
// 20 < 22 && 22 > 19 && 20 > 30
// true && true && false
console.log(result);
// false

result = a > d && b < c && a > d;
// 20 > 30 && 22 < 19 && 20 > 30
// false && false && false
console.log(result);
// false

result = (--a > c && a < b) || (++c > a && d > c);
// (19 > 19 && 19 < 22) || (20 > 19 && 30 > 20)
// (false && true) || (true && true)
// (false) || (true)
console.log(result);
// true

result = (--b > c++ || d <= 40) && a > b;
// (21 > 20 || 30 <= 40) && 19 > 22
// (true || true) && false
// true && false
console.log(result);
// false

d -= 10;

result = ++a >= d && b <= c && c < d;
// 20 >= 20 && 22 <= 20 && 20 < 20
// true && false && true
console.log(result);
// false
