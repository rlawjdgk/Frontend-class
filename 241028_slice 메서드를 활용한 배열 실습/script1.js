const animals = ["ant", "bison", "camel", "duck", "elephant"];
// 1, ["ant", "bison", "camel", "duck", "elephant"]
// 1-1. undefined 사용
console.log(animals.slice(undefined));
// 1-2. 양수 사용
console.log(animals.slice(0, 5));
// 1-3. 음수사용
console.log(animals.slice(-5));

// 2, ["duck", "elephant"]
// 2-1. 양수 사용
console.log(animals.slice(3, 5));
// 2-2. 음수 사용
console.log(animals.slice(-2));

// 3, ["camel", "duck", "elephant"]
// 3-1. 양수 사용
console.log(animals.slice(2, 5));
// 3-2. 음수 사용
console.log(animals.slice(-3));

// 4, ["camel", "duck"]
// 4-1. 양수 사용
console.log(animals.slice(2, 4));
// 4-2. 음수 사용
console.log(animals.slice(-3, -1));

// 5, []
console.log(animals.slice(5));

// 6, ["elephant"]
// 6-1. 양수 사용
console.log(animals.slice(4));
// 6-2. 음수 사용
console.log(animals.slice(-1));

// 7, ["ant"]
// 7-1.undefined 사용
console.log(animals.slice(undefined, 1));
// 7-2. 양수 사용
console.log(animals.slice(0, 1));
// 7-3. 음수 사용
console.log(animals.slice(-5, -4));
