"use strict";

/*두번째 섹션 타이틀*/
const sec2Title = document.querySelector(".sec2 .sec_title");

window.addEventListener("load", () => {
  sec2Title.style.fontSize = innerWidth / 5 + "px";
  sec2Title.style.height =
    getComputedStyle(sec2Title).fontSize.slice(0, -2) * 2 + "px";
});

window.addEventListener("resize", () => {
  sec2Title.style.fontSize = innerWidth / 5 + "px";
  sec2Title.style.height =
    getComputedStyle(sec2Title).fontSize.slice(0, -2) * 2 + "px";
});

/*네번째 섹션 썸네일*/
const thumb = document.querySelectorAll(".sec4 .thumb");

window.addEventListener("load", () => {
  const thumbWidth = getComputedStyle(thumb[0]).width;
  const thumbHeight = (thumbWidth.slice(0, -2) / 818) * 550;
  thumb.forEach((element) => {
    element.style.height = thumbHeight + "px";
  });
});

window.addEventListener("resize", () => {
  const thumbWidth = getComputedStyle(thumb[0]).width;
  const thumbHeight = (thumbWidth.slice(0, -2) / 818) * 550;
  thumb.forEach((element) => {
    element.style.height = thumbHeight + "px";
  });
});
