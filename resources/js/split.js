import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

let split = new SplitText(".text-header, .title-header", { type: "chars" });
let chars = split.chars;

const tl = gsap.timeline();
tl.pause();

/* tl.fromTo(".div-img-header", {
  opacity: 0,
  visibility: "hidden",
  height: 0,
 
}, {
  opacity: 1,
  visibility: "visible",
  duration: 0.8,
  delay: 1,
  height: 650,
  y: 0,
  ease: "slow(0.7, 0.7, false)",
});

tl.call(() => {
  console.log("call");
}); */

tl.fromTo(
    chars,
    {
        yPercent: 50,
        autoAlpha: 0,
        opacity: 0,
    },
    {
        yPercent: 0,
        autoAlpha: 1,
        opacity: 1,
        ease: "power1.out",
        stagger: {
            grid: [5, 50],
            from: "top",
            axis: "null",
            amount: 0.6,
        },
    }
);

tl.timeScale(0.6).play();

document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "back.out(1.7)",});

  tl.fromTo(
      ".inner-line",
      {
          y: 35,
          opacity: 0,
      },
      {
          y: 0,
          opacity: 1,
          duration: 2.5,
      }
  ).fromTo(
      ".inner-line",
      {
          y: 0,
          opacity: 1,
      },
      {
          y: 35,
          opacity: 0,
          duration: 2,
      }
  );
});
