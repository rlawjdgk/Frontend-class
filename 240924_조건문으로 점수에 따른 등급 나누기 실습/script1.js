const score = Number(prompt("점수를 입력하세요"));

if (score >= 90) {
  alert("A등급입니다.");
} else if (score >= 80) {
  alert("B등급입니다.");
} else if (score >= 70) {
  alert("C등급입니다.");
} else if (score >= 60) {
  alert("D등급 입니다.");
} else {
  alert("F등급입니다");
}
