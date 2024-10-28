// // interface student {
// //   name: string;
// //   profile: {
// //     type: string;
// //     school: string;
// //   };
// // }

// interface Developer {
//   type: string;
//   skill: string;
// }

// interface Student {
//   type: string;
//   skill: string;
// }

// interface User {
//   name: string;
//   profile: Developer | Student;
// }

// const developerUser = {
//   name: "Wangho",
//   profile: {
//     type: "developer",
//     skill: "typescript",
//   },
// };

// const studentUser = {
//   name: "Peter",
//   profile: {
//     type: "student",
//     schoool: "서울대학교",
//   },
// };

// const gotoSchool = (user: :"User<Student>") => {
//   if (user.profile.type !== "student") {
//     console.log("잘못찾아오셨습니다");
//     return;
//   }
// ;
