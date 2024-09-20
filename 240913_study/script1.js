const i = Number(prompt("첫번째 숫자를 입력하세요"));
let j = Number(prompt("두번째 숫자를 입력하세요"));

console.log(`현재 i: ${i}, j: ${j}`);
console.log(`두 수를 더한 결과를 i에 넣으면 j의 값은 ${(j += i)} 입니다`);

console.log(`현재 i: ${i}, j: ${j}`);
console.log(`두 수를 빼기 결과를 i에 넣으면 j의 값은 ${(j -= i)} 입니다`);

console.log(`현재 i: ${i}, j: ${j}`);
console.log(`두 수를 곱하기 결과를 i에 넣으면 j의 값은 ${(j *= i)} 입니다`);

console.log(`현재 i: ${i}, j: ${j}`);
console.log(`두 수를 나누기 결과를 i에 넣으면 j의 값은 ${(j /= i)} 입니다`);

console.log(`현재 i: ${i}, j: ${j}`);
console.log(`두 수를 나머지 결과를 i에 넣으면 j의 값은 ${(j %= i)} 입니다`);
