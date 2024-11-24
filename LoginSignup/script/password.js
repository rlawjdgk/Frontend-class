// 이메일을 잊으셨나요 기능
const input = document.querySelector(".input");
const mailFind = document.querySelector(".mailFind");

// 이벤트 리스너 추가
input.addEventListener("focus", () => {
  mailFind.style.color = "#2196f3"; // 클릭 시 색상 변경
});

input.addEventListener("blur", () => {
  mailFind.style.color = "#888"; // 포커스 해제 시 원래 색상으로 복원
});

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("form"); // 폼 요소 선택
  const passwordInput = document.getElementById("password"); // 비밀번호 입력 필드

  // 비밀번호 정규식 패턴 (영문, 숫자, 특수문자를 포함하고 8자 이상)
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  // 폼 제출 시 유효성 검사
  loginForm.addEventListener("submit", (event) => {
    const passwordValue = passwordInput.value.trim();

    if (!passwordRegex.test(passwordValue)) {
      event.preventDefault(); // 폼 제출 방지
      alert(
        "비밀번호는 영문, 숫자, 특수문자를 포함하고 8자 이상이어야 합니다."
      );
      passwordInput.focus(); // 입력 필드로 포커스 이동
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password"); // 비밀번호 입력 필드
  const nextButton = document.querySelector(".nextButton"); // "다음" 버튼

  // 비밀번호 입력 필드에서 Enter 키 눌렀을 때
  passwordInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 Enter 키 동작 방지
      nextButton.click(); // "다음" 버튼 클릭
    }
  });
});
