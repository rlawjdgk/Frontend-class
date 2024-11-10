// 사용자로부터 이름, 키, 체중을 입력 받은 후
// 적정 평균 체중을 구합니다.
// 적정 평균 체중 오차는 플러스, 마이너스 5이며
// 사용자가 입력한 체중이 적정 체중일 경우에는 'xxx님은 적정 체중입니다.'를 , 아닐 경우에는 'xxx님은 적정 체중이 아닙니다'를 출력해주세요
// 적정 체중 구하는 공식은 키에서 100 뺀 후 0.9를 곱해주면 됩니다
// 삼항연산자로 alert 찍어보죠
// result라는 변수에 결과를 삼항연산자로 넣은다음 그걸 alert로 출력

const name = prompt("이름을 작성하세요");
const height = Number(prompt("키를 작성하세요"));
const weight = Number(prompt("몸무게를 작성하세요"));
console.log(height, weight);

const normalWeight = (height - 100) * 0.9;
// console.log(normalWeight);

let result = weight <= normalWeight + 5 && weight >= normalWeight - 5;
console.log(result);

result = result ? `적정 체중입니다.` : `적정 체중이 아닙니다`;
console.log(result);

alert(`${name}님은 ${result}`);
