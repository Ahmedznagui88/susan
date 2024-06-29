import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const smoother = ScrollSmoother.create({
    smooth:1,
    effects: true,
    onUpdate: (self) => console.log("progress", self.progress)

});

