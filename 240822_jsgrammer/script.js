const xhr = new XMLHttpRequest();

xhr.open("Get", "student.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const students = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    // console.log(result);
    result.innerText = `${students.name}은 ${students.major}학과의 ${students.grade}학년 입니다`;
  }
};
