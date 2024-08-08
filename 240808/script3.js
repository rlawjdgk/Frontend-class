const userQuestion = prompt(
  "만보걷기를 시작한 날짜를 입력해주세요",
  "1000-08-08"
);

const result = document.querySelector("#result");

const today = new Date();
const firstDay = new Date(userQuestion);

const passedTime = today.getTime() - firstDay.getTime();
const passedDate = Math.round(passedTime / (24 * 60 * 60 * 1000));

result.innerText = passedDate;
