// const displayA = () => {
//   console.log("A");
// };

// const displayB = () => {
//   console.log("B");
// };

// const displayC = () => {
//   console.log("C");
// };

// displayA();
// displayB();
// displayC();

// 멀티스레드 => 비동기 방식인거처럼
const displayA = () => {
  console.log("A");
};

const displayB = (callback) => {
  setTimeout(() => {
    console.log("B");
    callback();
  }, 2000);
};

const displayC = () => {
  console.log("C");
};

displayA();
displayB(displayC);
