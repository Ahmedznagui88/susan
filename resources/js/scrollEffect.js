/* import {gsap} from "gsap";

import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(SplitText, ScrollTrigger); 

let mySpiltText = new SplitText(".div-paragraph", {type:"chars"});
let chars = mySpiltText.chars;


gsap.from (chars, {
    yPercent: 130,
    stagger: 1.2,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".div-paragraph",
        start: "top 90%",
        end: "top 20%",
        markers: true,
        scrub: 1
    }
})
 */