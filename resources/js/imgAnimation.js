import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function updateSpeed(selector, newSpeed) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.setAttribute('data-speed', newSpeed);
    });
}


function createSmoother() {
    return ScrollSmoother.create({
        smooth: 1,
        effects: true,
        smoothTouch: 0.1,
    });
}

function handleMediaQueryChange(event) {
    if (event.matches) {
        // Se la media query corrisponde, aggiorna il data-speed per dispositivi mobili
        updateSpeed('.div-img img', 0);
        updateSpeed('.div-paragraph', 0);
        updateSpeed('.img-who-we-2', 0);
        updateSpeed('.img-who-we-re', 0);
    } else {
        // Se la media query non corrisponde, usa i valori di default
        updateSpeed('.div-img img', 0.5);
        updateSpeed('.div-paragraph', 0.1);
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