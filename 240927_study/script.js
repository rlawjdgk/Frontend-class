// 진영이의 하루 지출 비용의 합계를 구한 후
// 적정 지출 비용의 초과 여부

//진영이의 하루 지출 내역
// 교통비 3000원
// 식비 6000원
// 음료비 3000원

const bus = Number(prompt("교통비를 입력하세요"));
const eat = Number(prompt("식비를 입력하세요"));
const drink = Number(prompt("음료비를 입력하세요"));

const total = bus + eat + drink;

let result =
  total > 10000 ? `${total - 10000}원 초과했습니다` : `돈 관리를 잘했어요`;

alert(`${result}`);
