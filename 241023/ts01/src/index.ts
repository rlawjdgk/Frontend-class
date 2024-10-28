// const numArr: number[] = [1, 2, 3];
// const strArr: string[] = ["hello", "world"];
// const boolArr: Array<boolean> = [true, false, true];

// let multiStr: (number | String)[] = [1, "hello"];

// let boubleArr = [
//   [1, 2, 3],
//   [4, 5],
// ];

// let tup1: number[] = [1, 2];

// // tup1 = [1, 2, 3];

// tup1.push(5);

// 선택적 타입
// const user: {
//   id?: number;
//   name: string;
// } = {
//   name: "BBO",
// };

// const result = user.id;

// 구조적 타입 시스템을 적용!
// 점진적 타입 시스템
// 선택적 타입 적용

// let config: {
//   readonly apikey: string;
// } = {
//   apikey: "123456789",
// };

// config.apikey = "Hacked";

// type User = {
//   id: number;
//   name: string;
//   location: string;
// };

// let user1: User = {
//   id: 1,
//   name: "wangho",
//   location: "Seoul",
// };

// let user2: User = {
//   id: 2,
//   name: "peter",
//   location: "Incheon",
// };

// const fnc = () => {
//   type User = {};
// };

// 인덱스 시그니처
// > 타입별칭으로 어떤 타입입을 정의 => 하위; 요소의 모든 타입의 형태가 동일한 경우

// const CountryCodes = {
//   [key: string]: string
// }

// const countryCodes = {
//   korea: "ko",
//   Unitedstate: "US"
//   unitedkingcom: "uk"
// };

// interface User01 {
//   id: number;
// }

// // implements // extends

// interface Person {
//   name: string;
//   age: number;
//   etc?: boolean;
// }

// const person01 = {
//   name: "Peter",
//   ahe: 20,
// };
// const person02 = {
//   name: "Peter",
//   age: 20,
//   etc: true,
// };

// class person1 {
//   name: string;
//   age: number;
// }

// const person03: Person1 = new person1();
// person03.name = "peter";
// person03.age = 20;

// console.log(person03);

// class Person2 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class Person2 {
//   constructor(public name: string, public age?: number) {}
// }

// const person04 = new Person2("Remeo");
// console.log(person04);

// interface person5 {
//   name: string;
//   age: number;
// }

// class person6 implements person5 {
//   constructor(public name: string, public age: number) {}
// }

// const person05 = new Person2("Juliet", 20);

/* 추상 클래스 */
/* 추상화 */
/* 형태가 없는 비정형화된 사물을 표현하는 것 */
/* 어떤 클래스를 정의하기 위해서 추상적인 개념을 만들어놓고, 해당 추상적인 개념을 모티브로 클래스를 선언 & 생성 */

// abstract class Person7 {
//   constructor(public name: string, public age: number) {}
// }

// class Person8 extends Person7 {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
// }

// const person06 = new Person8("Bruce", 20);
// console.log(person06);

// // static 속성
// class TestA {
//   initialValue = 1;
// }

// const test01A = TestA.initialValue;

// console.log(test01A);

// enum Role {
//   ADMIN = 0,
//   USER = 1,
//   GUEST = 2,
// }

// const user1 = {
//   name: "wangho",
//   role: "Role.ADMIN",
// };
// const user2 = {
//   name: "peanut",
//   role: "Role.USER",
// };
// const user3 = {
//   name: "chovy",
// };

// console.log(user1, user2, user3);

// let test01: any = 10;
// test01 = "Hello";
// Text02 = () => text011

// let testB: = unpi;
// text02 + 1;

// false(tyoe test02 -- "number") {

// }

// const fun1 = (): string => {
//   console.log("World");
// };
// const fun2 = (): void => {
//   console.log("World");
// };

// let test05: test05 = undefined;

// const fun3 = (): never => {
//   while (true) {}
// };

// let obj: object = {
//   name: "wangho",
// };

// interface Nameable {
//   name: string;
// }

// let name1 = (<Nameable>obj).name;
// let name2 = (obj as Nameable).name;

// console.log(name1, name2);

// const add = (a: any, b: any): number => {
//   return a + b;
// };

// // 타입별칭
// type printMeFnc = (name: string, age: number) => void;

// // 함수 시그니처
// const printMe: printMeFnc = (name, age) => {
//   console.log(`name: ${name}, age: ${age}`);
// };

// interface Nameable02 {
//   name: string;
// }

// const getName = (o: Nameable02) => {
//   return o !== undefined ? o.name : "...Loading";
// };

// const dataResult = getName(undefined);

// console.log(dataResult);

const getName = (o) => {
  return o.name;
};
