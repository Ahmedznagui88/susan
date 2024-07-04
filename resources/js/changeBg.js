document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector(".img-container-category");
    const defaultImage = "none";  
    const defaultColor = "transparent";
    const setBackgroundImage = (selector, imageUrl) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                main.style.backgroundImage = `url(${imageUrl})`;
                main.style.backgroundSize = 'cover'; 
                main.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
                main.style.background = 'opacity 0.5'
            });
            element.addEventListener("mouseleave", () => {
                main.style.backgroundImage = defaultImage;
                main.style.backgroundColor = defaultColor;
                main.style.backgroundSize = "cover";
                main.style.boxShadow = ""
            });
        });
    };

    setBackgroundImage(".manicure", "./media/img/nail2.avif");
    setBackgroundImage(".pedicure", "./media/img/pedicure.avif");
    setBackgroundImage(".ricostruzione", "./media/img/ricostruzione.avif");
    setBackgroundImage(".trucco", "./media/img/person.avif");
    setBackgroundImage(".extension", "./media/img/extension.avif");
    setBackgroundImage(".trattamento", "./media/img/beauty.avif");
    setBackgroundImage(".epilazione", "./media/img/epilazione.avif");
    setBackgroundImage(".offerta ", "./media/img/offerta.avif");
    document.addEventListener("mousemove", (e) => {
        gsap.to(main, {
            x: e.clientX,
            y: e.clientY,
            duration:0.5,
            smoothOrigin: "center center",
            ease: "power1.out",
        });
    });
});
