const phoneNumber = document.querySelector('input[type="text"]');
const warningMessage = document.querySelector("#warningMessage");

phoneNumber.addEventListener("keyup", function () {
  // console.log("keyup");
  const numberValue = this.value;
  // console.log(numberValue);
  const trimNumber = numberValue.replace(/-/g, "");
  // console.log(trimNumber);

  // const regexp = /^[0]\d{9,10}$/.test(trimNumber);
  const regexp = /^[0][0-9]{9,10}$/.test(trimNumber);
  // const regexp = /^0[0-9]{9,10}$/.test(trimNumber);

  if (regexp === false)
    warningMessage.innerText = "전화번호의 형식에 맞춰서 입력해주세요";
  else warningMessage.innerText = "";
});
