import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const smoother = ScrollSmoother.create({
    smooth:1,
    effects: true,
    smoothTouch:0.1,
});

let jump = document.querySelector(".servizi");

jump.addEventListener("click", (e) => {
    smoother.scrollTo(".section-products", true, "center 600");
});