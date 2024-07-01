import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

let split = new SplitText(".text-header, .title-header", { type: "chars" });
let chars = split.chars;

const tl = gsap.timeline();
tl.pause();

tl.fromTo(".div-img-header", {
  opacity: 0,
  visibility: "hidden",
  height: 0,
 
}, {
  opacity: 1,
  visibility: "visible",
  duration: 1.5,
  delay: 1,
  height: 650,
  y: 0,
  ease: "slow(0.7, 0.7, false)",
});

tl.call(() => {
  console.log("call");
});

tl.fromTo(chars, {
  yPercent: 50,
  autoAlpha: 0,
  opacity: 0,
  visibility: "hidden",
}, {
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
});

tl.timeScale(1).play();
