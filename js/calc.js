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

/*세번째 섹션 컨텐츠 박스*/
/*브라우저 너비가 680 - 1578px일 때*/
const matchMedia680 = window.matchMedia(
  "(min-width: 680px) and (max-width: 1578px)"
);

if (matchMedia680.matches) {
  const contentBox = document.querySelectorAll(".sec3 .content_box");

  if (
    getComputedStyle(contentBox[1]).width.slice(0, -2) >
    getComputedStyle(contentBox[1]).height.slice(0, -2)
  ) {
    contentBox.forEach((element) => {
      element.style.height = getComputedStyle(element).width;
    });
  }
}
