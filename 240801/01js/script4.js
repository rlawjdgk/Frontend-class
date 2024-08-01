// const math = Number(prompt("수학점수를 받으세요"));
// const kor = Number(prompt("국어점수를 받으세요"));

// const savedNum = (math + kor) * 2;

const arr = ["수학", "국어"];

function testAvg() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(prompt(`${arr} 점수는?`));
  }

  let avg = sum / arr.length;
  return avg;
}

alert(`평균점수는 ${testAvg()}점 입니다`);
