"use strict";

/*gnb 클릭 이벤트*/

//gnb 메뉴들
const gnb = Array.from(document.querySelectorAll("header nav ul li"));
//section들
let section = Array.from(document.querySelectorAll("section"));
section.shift();

gnb.forEach((element, index) => {
  element.addEventListener("click", () => {
    window.scrollTo({ top: section[index].offsetTop, behavior: "smooth" });
  });
});

/*브라우저 너비가 1024 이하일 때*/
const matchMedia1024 = window.matchMedia("(max-width: 1024px)");
const sec3Box = document.querySelectorAll(".sec3 .content .content_box");
const sec3BoxP = document.querySelectorAll(".sec3 .content .content_box > p");
const sec3PHeight = [];
sec3BoxP.forEach((element) => {
  element.style.height = "fit-content";
  sec3PHeight.push(getComputedStyle(element).height);
  element.style.height = 0;
});

if (matchMedia1024.matches) {
  sec3Box.forEach((element, index) => {
    element.addEventListener("click", () => {
      if (getComputedStyle(sec3BoxP[index]).height == "0px") {
        sec3BoxP[index].style.height = sec3PHeight[index];
      } else {
        sec3BoxP[index].style.height = 0;
      }
    });
  });
}
