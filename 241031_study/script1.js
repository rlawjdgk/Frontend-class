const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("arr 모든 값 출력");
console.log("---1번 문제---");
arr.forEach((element, i) => console.log(`${i}번째 값은:${element}`));

console.log("---2번 문제---");
console.log("arr 두배인 배열 만들어서 arr1이라는 변수에 넣기");
const arr1 = arr.map((X) => X * 2);
console.log(arr1);

console.log("---3번 문제---");
console.log("arr에서 짝수만 arr2이라는 변수에 넣기");
const arr2 = arr.filter((arr) => arr % 2 === 0);
console.log(arr2);

console.log("---4번 문제---");
console.log("arr에서 5보다 큰 숫자 중 첫번째 값만 출력하기");
const found = arr.find((element) => element > 5);
console.log(found);

console.log("---5번 문제---");
console.log("arr에서 오름차순으로 출력하기");
console.log(arr.sort((a, b) => a - b));

console.log("---6번 문제---");
console.log("arr에서 내림차순으로 출력하기");
console.log(arr.sort((a, b) => b - a));

console.log("---7번 문제---");
console.log("arr 값 모두 더하기");
console.log(arr.reduce((a, b) => a + b));
