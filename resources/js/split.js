import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    let split = new SplitText(
        ".title-header, .scroll, .text-header-2",
        { type: "chars" }
    );
    let chars = split.chars;

    const tl = gsap.timeline();
    function animateLargeScreens() {
        gsap.from(".row-hero", {
            opacity: 0,
            autoAlpha: 1,
            duration: 2,
            delay: 1,
            height: 50,
            ease: "power4.out",
        });
    }

    function animateSmallScreens() {
        gsap.from(".row-hero", {
            opacity: 0,
            autoAlpha: 1,
            duration: 1.5,
            delay: 0.5,
            height: 50,
            ease: "power4.out",
        });
    }

    const mediaQuery = window.matchMedia("(max-width: 767px)");

    function handleMediaQueryChange(e) {
        if (e.matches) {
            animateSmallScreens();
        } else {
            animateLargeScreens();
        }
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);

    tl.from(
        ".circle, .instagram",
        {
            opacity: 0,
            autoAlpha: 1,
            y: 50,
            transformOrigin: "bottom left",
            stagger: 0.1,
            ease: "power1.out",
        },
        2.3
    );

    tl.from(".logo, .btn", {
        opacity: 0,
        autoAlpha: 1,
        delay: 1,
        y: 30,
        transformOrigin: "bottom left",
        stagger: 0.1,
        ease: "power1.out",
    });

    tl.to(
        ".logo , .btn",
        {
            opacity: 1,
            stagger: 0.1,
            ease: "power1.out",
            display: "block",
            duration: 1,
        },
        1.2
    );

    tl.fromTo(
        chars,
        {
            yPercent: 100,
            autoAlpha: 0,
            opacity: 0,
        },
        {
            yPercent: 0,
            autoAlpha: 1,
            opacity: 1,
            ease: "power1.out",
            stagger: {
                grid: [9, 50],
                from: "top",
                axis: "null",
                amount: 0.9,
            }},1.5);

    tl.timeScale(0.9).play(0.2);
});

document.addEventListener("DOMContentLoaded", function () {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, ease: "back.out(1.7)" });

    tl.fromTo(
        ".inner-line",
        {y: 35, opacity: 0,},
        {y: 0, opacity: 1, duration: 2.5 }
    ).fromTo(
        ".inner-line",
        {y: 0, opacity: 1},
        {y: 35, opacity: 0, duration: 2}
    );
});
