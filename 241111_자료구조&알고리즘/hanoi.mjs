// const hanoi = (count, form, to, temp) => {
//   if (count === 0) return;
//   hanoi(count - 1, form, temp, to);
//   console.log(`원반 ${count}을 ${from}에서 ${to}로 이동`);
//   hanoi(count - 1, temp, to, from);
// };

// hanoi(3, "A", "c", "B");

// const hanoi1 = (3, A, C, B) => {
//   if (3 === 0) return;
//   hanoi(3 - 1, A, B, C);
//   console.log(`원반 ${3}을 ${A}에서 ${C}로 이동`);
//   hanoi(3 - 1, B, C, A);
// };

// const hanoi2 = (2, A, B, C) => {
//   if (3 === 0) return;
//   hanoi(2 - 1, A, C, B) ;
//   console.log(`원반 ${2}을 ${A}에서 ${B}로 이동`);
//   hanoi(2 - 1, C, B, A) ;
// };

// const hanoi3 = (2, B, C, A) => {
//   if (3 === 0) return;
//   hanoi(2 - 1, B, A, C) ;
//   console.log(`원반 ${2}을 ${A}에서 ${B}로 이동`);
//   hanoi(2 - 1, A, C, B) ;
// };
