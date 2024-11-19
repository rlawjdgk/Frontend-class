let num1 = 30;
let num2 = 6;
let num3 = 11;
let result = 0;

result = ++num1 + num2++ * num3--;
// 31 + 6 * 11 = 97
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);
// num1 = 31, num2 = 7, num3 = 10, result = 97

num1 -= 7;
result = (num1-- / --num2) * ++num3;
// (24 / 6) * 11 = 44
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);
// num1 = 23, num2 = 6, num3 = 11, result = 44

num1 += num2++ * --num3;
// 23 += 6 * 10 = 83
console.log(`num1= ${num1}, num2=${num2}, num3=${num3}, result=${result}`);
// num1 = 83, num2 = 6, num3 = 10, result = 44
