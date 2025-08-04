"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  /*두번째 섹션*/
  //섹션 제목 애니메이션
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec2 .sec_title",
      start: "0% 9%",
    },
    onStart: () => {
      document.documentElement.style.overflowY = "hidden";

      document.querySelector(".sec2").scrollIntoView({
        behavior: "smooth",
      });
    },
    onComplete: () => {
      document.documentElement.style.overflowY = "auto";
    },
  });

  //섹션 제목 글자 하나하나
  const titleLetter = document.querySelectorAll(".sec2 .sec_title span");

  //섹션 제목 글자 하나하나 또로록 올라오는 애니메이션
  titleLetter.forEach((element, index) => {
    if (index === 0) {
      tl.fromTo(
        element,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0,0 0.044,0.308 0.069,0.397 0.089,0.472 0.113,0.625 0.139,0.69 0.161,0.75 0.217,0.903 0.245,0.95 0.268,0.991 0.344,1.15 0.409,1.163 0.543,1.188 0.664,1.028 0.738,0.993 0.808,0.959 0.848,0.977 0.87,0.977 0.915,0.977 1,1 1,1 "
          ),
        }
      );
    } else {
      tl.fromTo(
        element,
        {
          yPercent: 110,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0,0 0.044,0.308 0.069,0.397 0.089,0.472 0.113,0.625 0.139,0.69 0.161,0.75 0.217,0.903 0.245,0.95 0.268,0.991 0.344,1.15 0.409,1.163 0.543,1.188 0.664,1.028 0.738,0.993 0.808,0.959 0.848,0.977 0.87,0.977 0.915,0.977 1,1 1,1 "
          ),
        },
        "-=.28"
      );
    }
  });

  tl.to(".sec2 .sec_title", {
    fontSize: "6.4rem",
    delay: 0.5,
    duration: 0.3,
  })
    .to(".sec2 .sec_title", {
      height: "6.4rem",
      duration: 0.5,
    })
    .to(
      ".sec2 .content",
      {
        opacity: 1,
        duration: 0.5,
      },
      "<"
    )
    .to(
      ".sec2",
      {
        paddingTop: "22rem",
        duration: 0.5,
      },
      "<"
    );
});
