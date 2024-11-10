// const score = Number(prompt("점수를 입력하세요"));

// if (score >= 90) {
//   alert("A등급입니다.");
// } else if (score >= 80) {
//   alert("B등급입니다.");
// } else if (score >= 70) {
//   alert("C등급입니다.");
// } else if (score >= 60) {
//   alert("D등급 입니다.");
// } else {
//   alert("F등급입니다");
// }

const score = Number(prompt("점수를 입력하세요"));

let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

alert(`${grade}등급입니다.`);

