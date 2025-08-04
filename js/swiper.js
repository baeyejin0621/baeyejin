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
