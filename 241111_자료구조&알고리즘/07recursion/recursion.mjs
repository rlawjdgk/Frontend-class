const myFunc = () => {
  if (number > 10) return;
  console.log(number);
  myFunc(number + 1);
};

myFunc(1);

// const funcA = () => {
//   let a = 10;
//   let b = 5;
//   return a + b;
// };

// const funcB = () => {
//   let a = 10;
//   let b = 5;
//   return c - d;
// };

// funcA();
// funcB();

const funC = () => {
  let a = 10;
  let b = 5;
  return a - b;
};

const funD = () => {
  let c = 10;
  let d = 5;
  let e = funC();
  return c + d + e;
};

funC();
funD();
