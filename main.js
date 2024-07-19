
function mouseeffect() {
  let page1Content = document.querySelector("#page1");
  let cursor = document.querySelector(".cursor");
  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x,
      y: dets.y,
    });
  });
  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });
  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
mouseeffect();
function scroll() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#line",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#line",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Add animate.css class using ScrollTrigger
    ScrollTrigger.create({
      trigger: "#line",
      start: "top 80%", // Adjust as needed
      onEnter: () => {
        document
          .querySelector("#line")
          .classList.add("animate__animated", "animate__backInUp");
      },
    });
  });
}
scroll();
function para() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#para",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#para",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Add animate.css class using ScrollTrigger
    ScrollTrigger.create({
      trigger: "#para",
      start: "top 80%", // Adjust as needed
      onEnter: () => {
        document
          .querySelector("#para")
          .classList.add("animate__animated", "animate__rollIn");
      },
    });
  });
}
para();
function page2Content() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#page2Content",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#page2Content",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Add animate.css class using ScrollTrigger
    ScrollTrigger.create({
      trigger: "#page2Content",
      start: "top 80%", // Adjust as needed
      onEnter: () => {
        document
          .querySelector("#page2Content")
          .classList.add("animate__animated", "animate__zoomInDown");
      },
    });
  });
}
page2Content();
function imageEffect() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#page3-element",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#page3-element",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Add animate.css class using ScrollTrigger
    ScrollTrigger.create({
      trigger: "#page3-element",
      start: "top 80%", // Adjust as needed
      onEnter: () => {
        document
          .querySelector("#page3-element")
          .classList.add("animate__animated", "animate__zoomInDown");
      },
    });
  });
}
imageEffect();
function textFour() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#text4",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#text4",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Add animate.css class using ScrollTrigger
    ScrollTrigger.create({
      trigger: "#text4",
      start: "top 80%", // Adjust as needed
      onEnter: () => {
        document
          .querySelector("#text4")
          .classList.add("animate__animated", "animate__rollIn");
      },
    });
  });
}
textFour();
function lineone() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#line1",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#line1",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Add animate.css class using ScrollTrigger
    ScrollTrigger.create({
      trigger: "#line1",
      start: "top 80%", // Adjust as needed
      onEnter: () => {
        document
          .querySelector("#line1")
          .classList.add("animate__animated", "animate__backInUp");
      },
    });
  });
}
lineone();
function paraone() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#para1",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#para1",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Add animate.css class using ScrollTrigger
    ScrollTrigger.create({
      trigger: "#para1",
      start: "top 80%", // Adjust as needed
      onEnter: () => {
        document
          .querySelector("#para1")
          .classList.add("animate__animated", "animate__fadeInDownBig");
      },
    });
  });
}
paraone();

function autoplayslide() {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
autoplayslide();

function page5Text() {
  document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#swiper",
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        visibility: "visible",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#swiper",
          start: "top 80%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );

    // Add animate.css class using ScrollTrigger
    ScrollTrigger.create({
      trigger: "#swiper",
      start: "top 80%", // Adjust as needed
      onEnter: () => {
        document
          .querySelector("#swiper")
          .classList.add("animate__animated", "animate__zoomInUp");
      },
    });
  });
}
page5Text();



  let tl=gsap.timeline()
  tl.from("#loader h3",{
    x:60,
    opacity:0,
    duration:1,
    stagger:0.2,
    delay:1

  })
  tl.to("#loader h3",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:-0.1
  })
  tl.to("#loader",{
    opacity:0
  })
  tl.to("#loader",{
    display:"none"
  })
  tl.from("#page1-content h1 span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:1
  })
  document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.from("#last h1 span", {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: "#last",
        start: "top 80%", // when the top of the trigger hits 80% of the viewport height
        end: "bottom 20%", // when the bottom of the trigger hits 20% of the viewport height
        toggleActions: "play none none none" // play the animation on enter, no other actions
      }
    });
  });
  