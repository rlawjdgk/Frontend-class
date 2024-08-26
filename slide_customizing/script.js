document.addEventListener("DOMContentLoaded", function () {
  const radios = document.querySelectorAll('input[name="tabmenu"]');
  let currentIndex = 0;
  const totalTabs = radios.length;

  function autoScroll() {
    radios[currentIndex].checked = true;
    currentIndex = (currentIndex + 1) % totalTabs;
  }

  let autoScrollInterval = setInterval(autoScroll, 3000); // 3초마다 자동 스크롤

  // 사용자가 수동으로 클릭했을 때 자동 스크롤 중지
  radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
      clearInterval(autoScrollInterval);
      currentIndex = index; // 현재 선택된 탭으로 인덱스 업데이트
      autoScrollInterval = setInterval(autoScroll, 3000); // 일정 시간 후 자동 스크롤 재개
    });
  });
});
