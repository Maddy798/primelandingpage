const lenis = new Lenis();

lenis.on("scroll", (e) => {});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 500);
});

gsap.ticker.lagSmoothing(0);

document.addEventListener("mousemove", (e) => {
  const pre = document.querySelectorAll(".main-img");
  const pre1 = document.querySelectorAll(".main-img2");
  const pre2 = document.querySelectorAll(".main-img3");
  const pre3 = document.querySelectorAll(".main-img4");
  const text = document.querySelectorAll(".heading");
  const text1 = document.querySelectorAll(".heading2");
  const text2 = document.querySelectorAll(".heading3");
  const text3 = document.querySelectorAll(".heading4");
  const decoration = document.querySelectorAll(".decoration");

  pre.forEach((element) => {
    moveImage(e, element);
  });
  pre1.forEach((element) => {
    moveImage(e, element);
  });
  pre2.forEach((element) => {
    moveImage(e, element);
  });
  pre3.forEach((element) => {
    moveImage(e, element);
  });
  text.forEach((element) => {
    moveText(e, element);
  });
  text1.forEach((element) => {
    moveText(e, element);
  });
  text2.forEach((element) => {
    moveText(e, element);
  });
  text3.forEach((element) => {
    moveText(e, element);
  });
  decoration.forEach((element) => {
    moveDecoration(e, element);
  });
});

function moveImage(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 3;
  const offsetY = ((y - middleY) / middleY) * 3;

  element.style.setProperty("--Leftmovement", offsetX + "px");
  element.style.setProperty("--topmovement", offsetY + "px");
}

function moveText(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 5;
  const offsetY = ((y - middleY) / middleY) * 5;

  element.style.setProperty("--Leftmovement", offsetX + "px");
  element.style.setProperty("--topmovement", offsetY + "px");
}

function moveDecoration(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 1.5;
  const offsetY = ((y - middleY) / middleY) * 1.5;

  element.style.setProperty("--Leftmovement", offsetX + "px");
  element.style.setProperty("--topmovement", offsetY + "px");
}

var tlbase = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "30% 0%",
    end: "25% 0%",
    markers: false,
    scrub: true,
  },
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "25% 0%",
    end: "35% 0%",
    markers: false,
    scrub: true,
  },
});

tl1.to(
  ".page-1",
  {
    backgroundColor: "#00c7e6",
  },
  "lemon"
);

tl1.to(
  ".page-1 .main-img",
  {
    top: "-100%",
  },
  "lemon"
);

tl1.from(
  ".page-1 .main-img2",
  {
    bottom: "-100%",
  },
  "lemon"
);

tl1.to(
  ".page-1 .top-left",
  {
    left: "-100%",
  },
  "lemon"
);

tl1.from(
  ".page-1 .top-left2",
  {
    left: "-100%",
  },
  "lemon"
);

tl1.from(
  ".page-1 .bottom-right2",
  {
    right: "-100%",
  },
  "lemon"
);

tl1.to(
  ".page-1 .bottom-right",
  {
    right: "-100%",
  },
  "lemon"
);

tl1.to(
  ".page-1 .heading",
  {
    transform: "rotateX(90deg)",
  },
  "lemon"
);

tl1.to(
  ".page-1 .heading2",
  {
    transform: "rotateX(0deg)",
  },
  "lemon"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "50% 0%",
    end: "60% 0%",
    markers: false,
    scrub: true,
  },
});

tl2.to(
  ".page-1 .heading2",
  {
    transform: "rotateX(90deg)",
  },
  "lemon"
);

tl2.to(
  ".page-1 .heading3",
  {
    transform: "rotateX(0deg)",
  },
  "lemon"
);

tl2.to(
  ".page-1 .main-img2",
  {
    bottom: "-100%",
  },
  "lemon"
);

tl2.from(
  ".page-1 .main-img3",
  {
    bottom: "-100%",
  },
  "lemon"
);

tl2.to(
  ".page-1",
  {
    backgroundColor: "#a15456",
  },
  "lemon"
);

tl2.to(
  ".page-1 .top-left2",
  {
    left: "-100%",
  },
  "lemon"
);

tl2.to(
  ".page-1 .bottom-right2",
  {
    right: "-100%",
  },
  "lemon"
);

tl2.from(
  ".page-1 .top-left3",
  {
    left: "-100%",
  },
  "lemon"
);

tl2.from(
  ".page-1 .bottom-right3",
  {
    right: "-100%",
  },
  "lemon"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "75% 0%",
    end: "85% 0%",
    markers: false,
    scrub: true,
  },
});

tl3.to(
  ".page-1 .heading3",
  {
    transform: "rotateX(90deg)",
  },
  "lemon"
);

tl3.to(
  ".page-1 .heading4",
  {
    transform: "rotateX(0deg)",
  },
  "lemon"
);

tl3.to(
  ".page-1 .main-img3",
  {
    bottom: "-100%",
  },
  "lemon"
);

tl3.from(
  ".page-1 .main-img4",
  {
    bottom: "-100%",
  },
  "lemon"
);

tl3.to(
  ".page-1",
  {
    backgroundColor: "rgb(255, 182, 182)",
  },
  "lemon"
);

tl3.to(
  ".page-1 .top-left3",
  {
    left: "-100%",
  },
  "lemon"
);

tl3.to(
  ".page-1 .bottom-right3",
  {
    right: "-100%",
  },
  "lemon"
);

tl3.from(
  ".page-1 .top-left4",
  {
    left: "-100%",
  },
  "lemon"
);

tl3.from(
  ".page-1 .bottom-right4",
  {
    right: "-100%",
  },
  "lemon"
);

var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "85% 0%",
    end: "90% 100%",
    markers: false,
    scrub: true,
  },
});

tl4.to(
  "footer",
  {
    bottom: "0%",
  },
  "lemon"
);
