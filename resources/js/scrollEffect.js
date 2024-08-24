import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const updateSpeed = (selector, newSpeed) => {
  document.querySelectorAll(selector).forEach(element => {
    element.setAttribute("data-speed", newSpeed);
  });
};

const button = document.querySelector(".contact");
button.addEventListener("click", () => {
  window.smoother.scrollTo(".adress", true, "bottom 100px");
});

const createSmoother = () => ScrollSmoother.create({
  smooth: 0.9,
  effects: true,
  smoothTouch: 1,
});

const handleMediaQueryChange = (event) => {
  if (event.matches) {
    updateSpeed(".div-img img", 0);
    updateSpeed(".paragraph", 0);
    updateSpeed(".img-who-we-2", 0);
    updateSpeed(".img-who-we-re", 0);
  } else {
    updateSpeed(".div-img img", 0.5);
    updateSpeed(".paragraph", 0.2);
  }

  if (window.smoother) {
    window.smoother.kill();
  }
  window.smoother = createSmoother();
};

const mediaQuery = window.matchMedia("(max-width: 900px)");
mediaQuery.addListener(handleMediaQueryChange);
handleMediaQueryChange(mediaQuery);

window.smoother = createSmoother();