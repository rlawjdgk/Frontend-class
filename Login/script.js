// script.js
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("user");
  const passwordInput = document.getElementById("password");
  const passwordCheckInput = document.getElementById("passwordCheck");
  const phoneInput = document.getElementById("phone");
  const authCheckbox = document.getElementById("auth");
  const privateCheckbox = document.getElementById("private");
  const submitButton = form.querySelector('input[type="submit"]');
  const emailMessage = document.getElementById("emailMessage");
  const phoneMessage = document.getElementById("phoneMessage");
  const passwordCheckMessage = document.getElementById("passwordCheckMessage");

  function validateEmail() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailMessage.textContent = "유효한 이메일을 입력해 주세요.";
      emailMessage.style.color = "red";
      return false; // 이메일 형식이 유효하지 않음
    } else {
      emailMessage.textContent = "사용 가능한 이메일입니다.";
      emailMessage.style.color = "green";
      return true; // 이메일 형식이 유효함
    }
  }
  function validatePassword() {
    if (passwordInput.value.length < 6) {
      passwordMessage.textContent = "비밀번호는 최소 6자 이상이어야 합니다.";
      passwordMessage.style.color = "red";
      return false; // 비밀번호 형식이 유효하지 않음
    } else {
      passwordMessage.textContent = "사용 가능한 비밀번호입니다.";
      passwordMessage.style.color = "green";
      return true; // 비밀번호 형식이 유효함
    }
  }

  function validatePasswordCheck() {
    if (passwordCheckInput.value === "") {
      passwordCheckMessage.textContent = "비밀번호가 일치하지 않습니다.";
      passwordCheckMessage.style.color = "red";
      return false; // 비밀번호 확인란이 비어 있음
    } else if (passwordInput.value !== passwordCheckInput.value) {
      passwordCheckMessage.textContent = "다시 비밀번호를 입력하세요.";
      passwordCheckMessage.style.color = "red";
      return false; // 비밀번호 확인이 일치하지 않음
    } else {
      passwordCheckMessage.textContent = "비밀번호가 일치합니다.";
      passwordCheckMessage.style.color = "green";
      return true; // 비밀번호 확인이 일치함
    }
  }

  function validatePhone() {
    const phonePattern = /^[0-9]{10,11}$/; // 숫자 10~11자리
    if (phoneInput.value === "") {
      phoneMessage.textContent = "전화번호를 입력하세요.";
      phoneMessage.style.color = "red";
      return false; // 전화번호가 비어 있음
    } else if (!phonePattern.test(phoneInput.value)) {
      phoneMessage.textContent = "다시 입력하세요.";
      phoneMessage.style.color = "red";
      return false; // 전화번호 형식이 유효하지 않음
    } else {
      phoneMessage.textContent = "사용 가능한 전화번호입니다.";
      phoneMessage.style.color = "green";
      return true; // 전화번호 형식이 유효함
    }
  }

  // 입력란 및 체크박스의 이벤트 리스너 추가
  emailInput.addEventListener("input", function () {
    validateEmail();
    validateForm();
  });

  passwordInput.addEventListener("input", function () {
    validatePassword();
    validatePasswordCheck();
    validateForm();
  });

  passwordCheckInput.addEventListener("input", function () {
    validatePasswordCheck();
    validateForm();
  });

  phoneInput.addEventListener("input", function () {
    validatePhone();
    validateForm();
  });

  phoneInput.addEventListener("input", validateForm);
  authCheckbox.addEventListener("change", validateForm);
  privateCheckbox.addEventListener("change", validateForm);

  form.addEventListener("submit", function (event) {
    let isValid = true;
    let errorMessage = "";

    // 이메일 유효성 검사
    if (!validateEmail()) {
      isValid = false;
    }

    // 비밀번호 유효성 검사
    if (!validatePassword()) {
      isValid = false;
    }

    // 비밀번호 확인
    if (!validatePasswordCheck()) {
      isValid = false;
    }

    // 전화번호 유효성 검사
    const phonePattern = /^[0-9]{10,11}$/; // 숫자 10~11자리
    if (!phonePattern.test(phoneInput.value)) {
      isValid = false;
      errorMessage += "유효한 전화번호를 입력해 주세요.\n";
    }
  });
  validateForm(); // 초기 상태 확인
});
