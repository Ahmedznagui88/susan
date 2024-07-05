document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector(".img-container-category");
    const overlay = document.querySelector(".overlay");

    let isAnimating = false;

    const setBackgroundImage = (selector, imageUrl) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                if (isAnimating) return;
                isAnimating = true;

                overlay.style.backgroundImage = `url(${imageUrl})`;
                overlay.style.display = 'block';

                gsap.fromTo(overlay, 
                    {left: '100%'}, 
                    {left: '0%', duration: 1, ease: "power2.out", onComplete: () => {
                        main.style.backgroundImage = `url(${imageUrl})`;
                        overlay.style.display = 'none';
                        isAnimating = false;
                    }}
                );
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
    setBackgroundImage(".offerta", "./media/img/offerta.avif");
});