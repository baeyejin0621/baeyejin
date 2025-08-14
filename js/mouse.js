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

/*브라우저 너비가 679px 이하일 때*/
const matchMedia679 = window.matchMedia("(max-width: 679px)");
const sec3Box = document.querySelectorAll(".sec3 .content .content_box");
const sec3BoxP = document.querySelectorAll(".sec3 .content .content_box > p");

const sec3PHeight = [];

if (matchMedia679.matches) {
  sec3BoxP.forEach((element) => {
    element.style.height = "fit-content";
    sec3PHeight.push(getComputedStyle(element).height);
    element.style.height = 0;
  });

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

/*브라우저 크기가 달라지면 새로고침*/
window.addEventListener("resize", () => {
  location.reload();

  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, CustomEase);

    ScrollTrigger.refresh();
  });
});

/*키보드 접근성*/
//gnb
gnb.forEach((element) => {
  element.addEventListener("focus", () => {
    element.style.fontWeight = 700;
  });

  element.addEventListener("blur", () => {
    element.style.fontWeight = "";
  });
});

//세번째 섹션 컨텐츠 박스
//브라우저 너비가 320 - 679px일 때
const matchMedia320To679 = window.matchMedia(
  "(min-width: 320px) and (max-width: 679px)"
);

if (matchMedia320To679.matches) {
  sec3Box.forEach((element, index) => {
    element.addEventListener("focus", () => {
      element.style.backgroundColor = "var(--black-color7)";
    });

    element.addEventListener("blur", () => {
      element.style.backgroundColor = "";
    });
  });
} else {
  sec3Box.forEach((element, index) => {
    element.addEventListener("focus", () => {
      element.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.03)";
      sec3BoxP[index].style.opacity = 1;
    });

    element.addEventListener("blur", () => {
      element.style.boxShadow = "";
      sec3BoxP[index].style.opacity = 0;
    });
  });
}

//네번째 섹션 a 태그
const sec4A = document.querySelectorAll(".sec4 .con_wrap .info a");
sec4A.forEach((element) => {
  element.addEventListener("focus", () => {
    element.children[0].style.color = "var(--main-color)";
  });

  element.addEventListener("blur", () => {
    element.children[0].style.color = "";
  });
});

//다섯번째 섹션 a 태그
const sec5A = document.querySelectorAll(".sec5 a");

sec5A.forEach((element) => {
  element.addEventListener("focus", () => {
    element.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.04)";
    element.children[0].style.color = "var(--main-color)";
    element.children[1].style.opacity = 1;
  });

  element.addEventListener("blur", () => {
    element.style.boxShadow = "";
    element.children[0].style.color = "";
    element.children[1].style.opacity = 0;
  });
});
