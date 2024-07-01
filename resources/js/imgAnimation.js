import { gsap } from "gsap";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const smoother = ScrollSmoother.create({
    smooth:1,
    effects: true,
    smoothTouch:0.1,
});

let servizi = document.querySelector(".servizi");
let whoWeAre = document.querySelector(".whoWeAre");

// Aggiungi un listener di evento a entrambi gli elementi
servizi.addEventListener("click", (e) => {
    smoother.scrollTo(".section-products", true, "center 600");
});

whoWeAre.addEventListener("click", (e) => {
    smoother.scrollTo(".section-product-whoWeAre", true, "center 200");
});


