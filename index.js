var circle = document.querySelector("#circle");
var frame = document.querySelector(".frame");
const lerp = (x, y, a) => x * (1 - a) + y * a;

window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.2,
    ease: Expo,
  });
});

frame.addEventListener("mousemove", function (dets) {
    

  gsap.to(circle, {
    scale: 8,
  });

  gsap.to(".frame span", {
    color: "#fff",
    duration: 0.4,
    y: "-5vw",
  });
});

frame.addEventListener("mouseleave", function (dets) {
  gsap.to(circle, {
    scale: 1,
  });

  gsap.to(".frame span", {
    color: "#000",
    duration: 0.4,
    y: 0,
  });
});
