// // 제네릭 필요한 상황

// const func = (value: unknown) => {
//   return value;
// };

// const num = func(10);
// num.toUpperCase();
// // func("Wangho");
// // func([1, 2, 3]);
// // func({ name: "Wangho", age: 20 });

// const func = <T>(value: T) => {
//   return value;
// };

// const swap = <T, U>(a: T, b: U) => {
//   return [b, a];
// };

// const [a, b] = swap("1, 2");

// const funcArray = <T>(data: T[]): T => {
//   return data[0];
// };

// const num = funcArray([0, 1, 2]);
// console.log(num);

// let str = funcArray([1, "Hello", "World"]);
// console.log(str);

// const returnFirst = <T>(data: [T, ...unknown[]]): T => {
//   return data[0];
// };

// const str = returnFirst([1, "hello", "world"]);

// console.log(str);

const func4 = <T extends { length: number }>(data: T) => {
  return data.length;
};

console.log(func4("123"));
console.log(func4([1, 2, 3]));
console.log(func4({ length: 1 }));

// console.log(func4(null));
// console.log(func4(undefined));
