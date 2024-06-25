/* import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

let tmln = gsap.timeline({
    scrollTrigger: {
        trigger: ".first-img, .div-paragraph",
        start: "top 580px",
        end: "top 10",
        smooth: 5,
        opacity: 0,
        scrub: 2,
    },
});

tmln.from(".first-img, .div-paragraph", {
    y: 35,
    opacity: 0,
    duration: 5,
});

tmln.to(".first-img, .div-paragraph", {
    ease: 'power1out',
    duration: 10,
    y: -40,
    opacity: 1,
    delay: 3,
    stagger: 2,
});
 */