import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const smoother = ScrollSmoother.create({
    smooth:2,
    effects: true,
    onUpdate: (self) => console.log("progress", self.progress)

});

let jump = document.querySelector(".servizi");

jump.addEventListener("click", (e) => {
    smoother.scrollTo(".section-products", true, "center 690");
});