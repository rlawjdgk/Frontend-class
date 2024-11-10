const numbers = [1, 2, 3, 4, 5];

const square = function (numbers) {
  return numbers.map((a) => a * a);
};

console.log(square(numbers));

// arr.reduce((a, b) => a + b);

const add = function (numbers) {
  return numbers.reduce((a, b) => a + b);
};

console.log(add(numbers));
