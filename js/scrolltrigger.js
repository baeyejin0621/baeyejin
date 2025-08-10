"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, CustomEase);

  /*새로고침하면 스크롤 위치 최상단으로 이동*/
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  /*두번째 섹션*/

  //섹션 제목 애니메이션
  //브라우저 너비 1024px 이상일 때
  gsap.matchMedia().add("(min-width: 1024px)", () => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec2 .sec_title",
        start: "0% 9%",
      },
      onStart: () => {
        document.documentElement.style.overflowY = "hidden";
      },
      onComplete: () => {
        document.documentElement.style.overflowY = "auto";
        ScrollTrigger.refresh();
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

  //브라우저 너비 1023px 이하일 때
  gsap.matchMedia().add("(max-width: 1023px)", () => {
    let tl = gsap.timeline({
      onStart: () => {
        document.documentElement.style.overflowY = "hidden";
      },
      onComplete: () => {
        document.documentElement.style.overflowY = "auto";
        ScrollTrigger.refresh();
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
      fontSize: "2.4rem",
      delay: 0.5,
      duration: 0.3,
    })
      .to(".sec2 .sec_title", {
        height: "3rem",
        duration: 0.5,
      })
      .to(
        ".sec2 .content",
        {
          opacity: 1,
          duration: 0.5,
        },
        "<"
      );
  });

  /*섹션 올라오면서 투명도 1 되는 효과*/

  //섹션들
  let section = Array.from(document.querySelectorAll("section"));
  section.shift();
  section.shift();

  section.forEach((element) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "0 20%",
          end: "0% 0%",
        },
      })
      .fromTo(
        element,
        {
          y: 150,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
  });

  /*세번째 섹션*/

  //컨텐츠 박스
  const contentBox = document.querySelectorAll(".sec3 .content_box");

  let sec3Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "0% 20%",
    },
  });

  contentBox.forEach((element, index) => {
    if (index === 0) {
      sec3Tl.fromTo(
        element,
        {
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
        }
      );
    } else {
      sec3Tl.fromTo(
        element,
        {
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
        },
        ">"
      );
    }
  });

  /*네번째 섹션*/

  //컨텐츠 랩
  const contentWrap = Array.from(document.querySelectorAll(".sec4 .con_wrap"));
  contentWrap.shift();

  contentWrap.forEach((element) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: element,
          start: "0% 70%",
        },
      })
      .fromTo(
        element,
        {
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
        }
      );
  });

  /*다섯번째 섹션*/

  //a 태그
  const sec5A = document.querySelectorAll(".sec5 a");

  let sec5Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".sec5",
      start: "0% 20%",
    },
  });

  sec5A.forEach((element, index) => {
    if (index === 0) {
      sec5Tl.fromTo(
        element,
        {
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
        }
      );
    } else {
      sec5Tl.fromTo(
        element,
        {
          y: 100,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
        },
        ">"
      );
    }
  });
});
