const playButton = document.querySelector(".play-pause");
// console.log(playButton);
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
// console.log(volumeBar);

const play = () => {
  playButton.innerText = "||";
  video.play();
};

const pause = () => {
  playButton.innerText = "▶";
  video.pause();
};

const togglePlay = () => {
  // console.log("click");
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  // console.log(e);
  video.volume = e.target.value;
};

const formatting = (time) => {
  // console.log(time);
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");
  // console.log(current, duration);

  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", setVolume);
video.addEventListener("timeupdate", updateTime);
volumeBar.addEventListener("change", setVolume);
