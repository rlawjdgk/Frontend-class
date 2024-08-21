const result = document.querySelector("#result");

const member1 = ["HTML", "Node", "React"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "React"];

const subjects = [...member1, ...member2, ...member3];
// console.log(subjects);

const resultList = new Set();
// console.log(resultList);

subjects.forEach((subject) => {
  resultList.add(subject);
});

console.log(resultList);
// 배열화 시켜주기

result.innerHTML = `
  <ul>
  ${[...resultList].map((subject) => `<li>${subject}</li>`).json.("")
  </ul>
`;
