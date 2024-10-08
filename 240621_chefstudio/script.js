// scroll event
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const nav = document.querySelector("nav");
  const logo = document.querySelector("#logo");
  const gnbDesktop = document.querySelector(".gnbDesktop");
  const gnbMobile = document.querySelector(".gnbMobile");
  const trigger = document.querySelectorAll(".trigger span");

  if (window.scrollY > 60) {
    header.classList.add("active");
    nav.classList.add("active");
    logo.classList.add("active");
    gnbDesktop.classList.add("active");
    gnbMobile.classList.add("active");
    trigger.forEach((bar) => {
      bar.classList.add("active");
    });
  } else {
    header.classList.remove("active");
    nav.classList.remove("active");
    logo.classList.remove("active");
    gnbDesktop.classList.remove("active");
    gnbMobile.classList.remove("active");
    trigger.forEach((bar) => {
      bar.classList.remove("active");
    });
  }
});

// toggle event
const toggleBtn = document.querySelector(".trigger");
toggleBtn.addEventListener("click", function () {
  const gnbMobile = document.querySelector(".gnbMobile");
  gnbMobile.classList.toggle("open");
  this.classList.toggle("active");
});

// searchbar trigger
const searchBar = document.querySelectorAll("ul .fa-magnifying-glass");
const searchResult = document.querySelector(".search_bar");
const closeBtn = document.querySelector(".fa-xmark");

searchBar.forEach((item) => {
  item.addEventListener("click", () => {
    searchResult.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  searchResult.classList.remove("active");
});

// main slide
document.addEventListener("DOMContentLoaded", () => {
  const slideContainer = document.querySelector(".slide_container");
  const slides = document.querySelectorAll(".slide_container li");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");
  const pagers = document.querySelectorAll(".slide_pager span");
  let currentIndex = 0;
  const totalSlides = slides.length;
  let slideInterval;

  // 슬라이드 이동 함수
  const moveToSlide = (index) => {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePagers();
  };

  // 페이저 업데이트 함수
  const updatePagers = () => {
    pagers.forEach((pager, idx) => {
      pager.classList.toggle("active", idx === currentIndex);
    });
  };

  // 자동 슬라이드 시작 함수
  const startSlideShow = () => {
    slideInterval = setInterval(() => {
      moveToSlide(currentIndex + 1);
    }, 4000); // 4초마다 슬라이드 변경
  };

  // 자동 슬라이드 정지 함수
  const stopSlideShow = () => {
    clearInterval(slideInterval);
  };

  // 화살표 클릭 이벤트
  rightArrow.addEventListener("click", () => {
    moveToSlide(currentIndex + 1);
    resetSlideShow();
  });

  leftArrow.addEventListener("click", () => {
    moveToSlide(currentIndex - 1);
    resetSlideShow();
  });

  // 페이저 클릭 이벤트
  pagers.forEach((pager, index) => {
    pager.addEventListener("click", () => {
      moveToSlide(index);
      resetSlideShow();
    });
  });

  // 슬라이드 컨테이너에 마우스 오버 시 자동 슬라이드 정지
  slideContainer.addEventListener("mouseover", stopSlideShow);
  // 마우스 아웃 시 자동 슬라이드 재시작
  slideContainer.addEventListener("mouseout", startSlideShow);

  // 슬라이드 쇼 재시작 함수
  const resetSlideShow = () => {
    stopSlideShow();
    startSlideShow();
  };

  // 초기 페이저 업데이트
  updatePagers();

  // 슬라이드 쇼 시작
  startSlideShow();
});
