import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

let split = new SplitText(".text-header, .title-header", { type: "chars" });
let chars = split.chars;

const tl = gsap.timeline();
tl.pause();

tl.fromTo(
    chars,
    {
        yPercent: 50,
        autoAlpha: 0,
        opacity: 0,
        delay:1,
    },
    {
        delay:1,
        yPercent: 0,
        autoAlpha: 1,
        opacity: 1,
        ease: "power1.out",
        stagger: {
            grid: [9, 50],
            from: "top",
            axis: "null",
            amount: 0.9,
        },
    }
);

tl.timeScale(0.8).play();

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
