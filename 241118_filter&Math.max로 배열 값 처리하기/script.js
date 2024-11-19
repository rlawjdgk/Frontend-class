// 1번 문제 const numbers1 = [1, 2, 3, 4, 5, 6]; 짝수를 추출하는 함수를 만들어주세요
// filter
const numbers1 = [1, 2, 3, 4, 5, 6];

const filternum = numbers1.filter((item) => item % 2 === 0);

console.log(filternum);

// 2번 문제 const numbers2 = [3, 5, 7, 2, 8]; 가장 큰 값 추출하는 함수를 만들어주세요
// Math.max

const numbers2 = [3, 5, 7, 2, 8];

const Mathnum = Math.max(...numbers2);

console.log(Mathnum);
