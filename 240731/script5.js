const students = ["David", "Jullien", "Peter"];

// for(초기값; 버위; 증감문) {

// }

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// for (let student of students) {
//   console.log(student);
// }

// const theBook = {
//   title: "Javascript",
//   pages: 250,
//   published: "2024-07-31",
// };

// for (let key in theBook) {
//   console.log(`${key} : ${theBook[key]}`);
// }

let stars = Number(prompt("별의 개수 입력"));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

do {
  document.write("*");
  stars--;
} while (stars > 0);
