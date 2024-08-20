const playButton = document.querySelector(".play-pause");
// console.log(playButton);
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
// console.log(volumeBar);
const progressCover = document.querySelector(".progress");
const player = document.querySelector(".player");

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

const updateProgress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  // console.log(progressbar, progressPointer);
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  const progressBarwidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarwidth - 1;
  // console.log(progressBarwidth);
  progressPointer.style.left = `${newPosition}px`;
};

const videoPoint = (e) => {
  // console.log(e.pageX);
  // console.log(player.offsetLeft);
  const mouseX = e.pageX - player.offersetLeft;
  const progressBarwidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / progressBarwidth) * duration;
  video.currentTime = clickedTime;
};

playButton.addEventListener("click", togglePlay);
video.addEventListener("click", setVolume);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateProgress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", (e) => {
  videoPoint(e);
});
