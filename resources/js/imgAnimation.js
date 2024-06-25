import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const smoother = ScrollSmoother.create({
    smooth:1,
    effects: true,
});

document.querySelector('[data-target="servizi" ]').addEventListener('click', 
    function(){
const id = `#${this.dataset.target}`

       gsap.to(smooth, {
        scrollTop: smoother.offset(id),
        duration: 1,
        ease: "power4"
       })
    } 
)