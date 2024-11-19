// const studyMember01 = ["지수", "지선", "예지", "혜정", "령희", "승연"];
// const studyMember02 = ["보경", "정하", "예림", "희진", "다은"];
// 1. studyMember01 끝에 리아 추가하기
// console.log(studyMember01);

// 2. studyMember02 맨 앞에 리아 추가하기
// console.log(studyMember02);

// 3. studyMember01 끝에 리아 빼기
// console.log(studyMember01);

// 4. studyMember02 맨 앞에 리아 빼기
// console.log(studyMember02);

// 5. studyMember01 순서를 바꾸기
// console.log(studyMember01);

// 6. studyMember03 이라는 새로운 배열에 studyMember01과 studyMember02합치고 첫번째에 리아 넣기
// console.log(studyMember03);

// 7. studyMember03을 출력할 때 사이사이에 +를 넣어서 출력
// console.log(???);

// 1. studyMember01 끝에 리아 추가하기
const studyMember01 = ["지수", "지선", "예지", "혜정", "령희", "승연"];
studyMember01.splice(6, 0, "리아");
console.log(studyMember01);

// 2. studyMember02 맨 앞에 리아 추가하기
const studyMember02 = ["보경", "정하", "예림", "희진", "다은"];
studyMember02.unshift("리아");
console.log(studyMember02);

// 3. studyMember01 끝에 리아 빼기
const studyMember03 = ["지수", "지선", "예지", "혜정", "령희", "승연", "리아"];
console.log(studyMember03);
studyMember01.pop();
console.log(studyMember03);

// 4. studyMember02 맨 앞에 리아 빼기
const studyMember04 = ["리아", "보경", "정하", "예림", "희진", "다은"];
const first = studyMember04.shift();
console.log(studyMember04);

// 5. studyMember01 순서를 바꾸기
const studyMember05 = ["지수", "지선", "예지", "혜정", "령희", "승연"];
studyMember05.sort();
console.log(studyMember05);

// 6. studyMember03 이라는 새로운 배열에 studyMember01과 studyMember02합치고 첫번째에 리아 넣기
const studyMember06 = ["지수", "지선", "예지", "혜정", "령희", "승연"];
const studyMember07 = ["보경", "정하", "예림", "희진", "다은"];
let studyMember08 = studyMember01.concat(studyMember02);
console.log(studyMember06);

// 7. studyMember03을 출력할 때 사이사이에 +를 넣어서 출력
const studyMember09 = [
  "지수",
  "지선",
  "예지",
  "혜정",
  "령희",
  "승연",
  "보경",
  "정하",
  "예림",
  "희진",
  "다은",
];

const studyMember010 = studyMember09.join("+");
console.log(studyMember08);
