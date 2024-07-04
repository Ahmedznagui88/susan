import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function updateSpeed(selector, newSpeed) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) => {
        element.setAttribute("data-speed", newSpeed);
    });
}

let button = document.querySelector(".contact");

button.addEventListener("click", (e) => {
    smoother.scrollTo(".adress", true, "bottom 100px");
});

function createSmoother() {
    return ScrollSmoother.create({
        smooth: 0.5,
        effects: true,
        smoothTouch: 1,
    });
}

function handleMediaQueryChange(event) {
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
}

const mediaQuery = window.matchMedia("(max-width: 900px)");

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);

window.smoother = createSmoother();
