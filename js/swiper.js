"use strict";

var swiper = new Swiper(".swiper", {
  effect: "cube",
  cubeEffect: {
    shadow: false,
    slideShadows: false,
  },
  slidesPerView: 1,
  direction: "vertical",
  autoplay: {
    delay: 1500,
    reverseDirection: true,
  },
  resistance: false,
  loop: true,
});

let swiperWidth = document.querySelector(".main_visual .swiper");
const swiperSlideWidth = getComputedStyle(
  document.querySelector(".main_visual .swiper-slide:nth-child(2)")
);

swiperWidth.style.width = swiperSlideWidth;
