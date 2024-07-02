import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ repeat: -1, yoyo: true,ease: "slow(0.5, 0.8, true)"});

    tl.fromTo(
        ".inner-line",
        {
            y: 35,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1.6,
        }
    ).fromTo(
        ".inner-line",
        {
            y: 0,
            opacity: 1,
        },
        {
            y: 35,
            opacity: 0,
            duration: 1.6,
        }
    );
});
