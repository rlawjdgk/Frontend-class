const fruits = ["apple", "banana", "kiwi"];
// 1. ['blueberry', 'apple', 'banana', 'kiwi']
// fruit1.splice();
// console.log(fruit1);

// 2. ['blueberry', 'mango', 'apple', 'banana', 'kiwi']
// fruit2.splice();
// console.log(fruit2);

// 3. ['apple', 'blueberry', 'banana', 'kiwi']
// fruit3.splice();
// console.log(fruit3);

// 4. ['blueberry', 'banana', 'kiwi']
// fruit4.splice();
// console.log(fruit4);

// 5. ['blueberry', 'banana', 'kiwi', 'grape']
// fruit5.splice();
// console.log(fruit5);

// 6. ['blueberry', 'banana', 'kiwi']
// fruit6.splice();
// console.log(fruit6);

// 7. ['blueberry', 'banana', 'apple', 'kiwi']
// fruit7.splice();
// console.log(fruit7);

// 8. []
// fruit8.splice();
// console.log(fruit8);

const fruit1 = ["apple", "banana", "kiwi"];
const add1 = fruit1.splice(0, 0, "blueberry");
console.log(fruit1);

const fruit2 = ["apple", "banana", "kiwi"];
const add2 = fruit2.splice(0, 0, "blueberry", "mango");
console.log(fruit2);

const fruit3 = ["apple", "banana", "kiwi"];
const add3 = fruit3.splice(1, 0, "blueberry");
console.log(fruit3);

const fruit4 = ["apple", "banana", "kiwi"];
const add4 = fruit4.splice(0, 1, "blueberry");
console.log(fruit4);

const fruit5 = ["apple", "banana", "kiwi"];
const add5 = fruit5.splice(0, 0, "blueberry");
const add6 = fruit5.splice(4, 4, "grape");
console.log(fruit5);

const fruit6 = ["apple", "banana", "kiwi"];
const add7 = fruit6.splice(0, 1, "blueberry");
console.log(fruit6);

const fruit7 = ["apple", "banana", "kiwi"];
const add8 = fruit7.splice(0, 1, "blueberry");
const add9 = fruit7.splice(2, 0, "apple");
console.log(fruit7);

const fruit8 = ["apple", "banana", "kiwi"];
const add10 = fruit8.splice(0, 3);
console.log(fruit8);
