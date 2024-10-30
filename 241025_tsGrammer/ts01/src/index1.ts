// // 타입별칭 + 인덱스 타입 + 제네릭
// type Map2<T> = {
//   [key: string]: T;
// };

// const stringMap2: Map2<string> = {
//   name: "Wangho",
//   nickName: "Peter",
// };

// const stringMap3: Map2<number> = {
//   age: 20,
//   birhday: 2002,
// };

// //제네릭 + 인터페이스 조합
// interface keyPair<T, U> {
//   key: T;
//   value: U;
// }

// const keyPair: keyPair<string, number> = {
//   key: "key",
//   value: 0,
// };
// const keyPair2: keyPair<boolean, string[]> = {
//   key: true,
//   value: ["1"],
// };
