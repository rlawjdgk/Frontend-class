const handleWindowSize = () => {
  if (innerWidth < 800) {
    $(".posters").slick({
      dots: false,
      arrows: false,
      infinite: true, // Disable infinite scrolling
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          fade: true,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          fade: true,
          autoplay: true,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  } else {
    $(".posters").slick("unslick");
    $(".album_list").slick("unslick");
  }
};

window.addEventListener("resize", handleWindowSize);

// Header Nav
window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  const header = document.querySelector("header");
  const gototop = document.querySelector(".gototop");

  if (scroll > 50) {
    header.classList.add("active");
    gototop.classList.add("active");
  } else {
    header.classList.remove("active");
    gototop.classList.remove("active");
  }
});

// Trigger
const trigger = document.querySelector(".trigger");
const gnb = document.querySelector(".gnb");
const gnbLinks = gnb.querySelectorAll("a");

trigger.addEventListener("click", function () {
  this.classList.toggle("active");
  gnb.classList.toggle("active");
});

gnbLinks.forEach((link) => {
  link.addEventListener("click", () => {
    trigger.classList.remove("active");
    gnb.classList.remove("active");
  });
});

// Slick Slider
$(".myslider").slick({
  dots: false,
  infinite: true, // Disable infinite scrolling
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// poster slider

// ScrollTo
$(".gototop, .gnb a").click(function () {
  $.scrollTo(this.hash || 0, 800);
});

/* youtube */
function resizeIframe() {
  const iframe = document.querySelector(".video iframe");

  if (iframe) {
    // Ensure iframe exists
    const width = window.innerWidth;

    // Check if the screen width is less than or equal to 390px (for mobile)
    if (width <= 390) {
      iframe.style.width = "100%";
      iframe.style.height = width / (6 / 7) + "px"; // Maintain 16:9 ratio for mobile
    } else {
      iframe.style.width = "100%"; // Keep responsive on larger screens too
      iframe.style.height = "56.25vw"; // Maintain 16:9 ratio
    }
  }
}

// Resize iframe on page load and when the window is resized
window.onload = resizeIframe;
window.onresize = resizeIframe;

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

prevBtn.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});
