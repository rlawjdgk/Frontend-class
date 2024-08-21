// 1.순차적으로 처리할 수 있는
// Lterable 객체 = 객체 안에 담겨있는 각각의 독립적인 아이쳄 요소를 팢아서 어떤 실행을

// JS 안에서 Iterable 객체 => 배열 & 분사열

// Iterable 객체
// 1) for...of 반목문
// 2) 전개연산자 구문
// 3) 구조분해할당

// for in문(*객체)

// 표현식문 vs 실행문

// JSX => Javascript And Xml

// json을 활용해서 data
// js에서 fetch() 출력
// 이벤트 => 결과
// 이벤트 x //

// 1) fetch() 데이터를 가져오는 함수 내부에서 이벤트

// 2) Promise() // async & await

let hi = "hello";

for (let ch of hi) {
  console.log(ch);
}

let chArray = [...hi];
console.log(chArray);

let [ch1, ch2, ch3, ch4, ch5] = hi;
console.log(ch1, ch2, ch3, ch4, ch5);

const arr = [1, 2, 3, 4, 5];
console.log(arr);

let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// 이터러블한 객체 => 이터레이터 객체 속성
// 이터레이터 객체 속성 => next()
// next() => 반복문으로 무언가를 실행시키고자 할 때, 실행되는 메서드 함수

// 제너레이터

// 이터러블하지 못한 데이터 자료구조
// 반복문x

// 제너레이터는 함수
// 태생적으로 이터러블하지 못한 요소들을 이터러블한 속성을 갖게끔 하기 위한 목적으로 태어난 함수

function* fnc() {
  // console.log("1");
  // console.log("2");
  // console.log("3");
  yield 1;
  yield 2;
  yield 3;
}

// fnc();
const g1 = fnc();
console.log(g1);

// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

for (let i of g1) {
  console.log(i);
}

// for문을 사용할 수 있다 => 이터러블한 객체이다
