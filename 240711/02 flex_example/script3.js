//js 변수 선언 var let socdt

// var

const trigger = document.querySelector(".trigger");
trigger.addEventListener9(click, function () {
  const gnb = document.querySelector(".gnb > ul");
  const sns = document.querySelector(".sns");
  gnb.classList.toggle(".on");
  sns.classList.toggle(".on");
  this.classList.toggle("active");
});
