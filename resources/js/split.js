import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", function () {
let split = new SplitText(".text-header, .title-header, .contact, .scroll", { type: "chars" });
let chars = split.chars;

const tl = gsap.timeline();

tl.from('.row-hero', {
    opacity: 0,
    autoAlpha: 1,
    duration: 2,
    delay:1,
    height: 50,
    ease: "power4.out",
})

tl.from(".logo , .div-bottom-header, .btn",
    {
        opacity: 0,
        autoAlpha: 1,
        delay:1,
        y: 30,
        transformOrigin: "bottom left",
        stagger: 0.1,
        ease: "power1.out",
    }
);

tl.to(".logo , .btn", {
    opacity: 1,
    stagger: 0.1,
    ease: "power1.out",
    display: 'block',
    duration: 2,
}, 1.2);

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
            grid: [9, 50],
            from: "top",
            axis: "null",
            amount: 0.9,
        },
    } ,1.5
);

 tl.timeScale(0.9).play(0.2);

});

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
