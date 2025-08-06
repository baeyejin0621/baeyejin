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
