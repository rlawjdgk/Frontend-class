new fullpage("#fullpage", {
  anchorsColors: ["#fff", "#fff", "#fff"],
  anchors: ["section1", "section2", "section3", "section4"], // 각 섹션에 대한 앵커 설정
  navigation: true, // 네비게이션 바를 화면에 표시
  navigationPosition: "right", // 네비게이션 위치
  loopBottom: true, // 마지막 섹션에서 처음 섹션으로 돌아가기
  loopTop: false, // 첫 번째 섹션에서 마지막 섹션으로 돌아가기
  scrollBar: true, // 스크롤바 표시
  autoScrolling: true, // 자동 스크롤 사용 여부
  fitToSection: true, // 섹션 크기에 맞춰서 자동으로 맞추기
  //   responsiveWidth: 1200, // 특정 화면 크기 이상에서만 fullPage.js 사용
});

fetch("./player.json")
  .then((response) => response.json()) // JSON으로 변환
  .then((data) => {
    const playerList = document.getElementById("player-list");

    // JSON 배열 순회
    data.players.forEach((player) => {
      // 각 플레이어 정보 HTML 생성
      const playerDiv = document.createElement("div");
      playerDiv.classList.add("player-card"); // player-card 클래스 추가

      playerDiv.innerHTML = `
        <img src="${player.image}" alt="${player.nickname}" class="player-image" />
        <h3>${player.nickname}</h3>
        <p>${player.name}</p>
        <p>${player.age}</p>
        <p>${player.position}</p>
      `;

      playerList.appendChild(playerDiv);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
