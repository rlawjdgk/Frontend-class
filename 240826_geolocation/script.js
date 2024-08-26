// geolocation => 사용자의 위치를 파악하기 위한 목적 API

// getCurrentPoisition(successCB, errorCB, options)

const getLocation = document.querySelector("#getLocation");

const showPoisition = (position) => {
  console.log(position);
  const result = document.querySelector("#result");
  result.innerText = `위도 : ${position.coords.latitude}, 경도 : ${position.coords.longitude}`;
};

const errorPosition = (err) => {
  alert(err, message);
};

getLocation.addEventListener("click", () => {
  // console.log("click");
  if (navigator.geolocation) {
    navigator.getlocation.getCurrentPoisition(showPoisition, errorPosition);

    const options = {
      enableHighAccuracy: true,
      maximAge: 2000,
      timeout: 5000,
    };

    let watchId = navigator.geolocation.watchPosition(
      showPoisition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 30000);
  } else {
    alert("Geolocation을 지원하지 않습니다.");
  }
});
