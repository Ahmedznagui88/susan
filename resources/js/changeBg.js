document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector(".img-container-category");
    const overlay = document.querySelector(".overlay");

    let isAnimating = false;
    let lastDirection = 'left';

    const preloadImage = (url) => {
        const img = new Image();
        img.src = url;
    };

    const setBackgroundImage = (selector, imageUrl) => {
        preloadImage(imageUrl);

        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                if (isAnimating) return;
                isAnimating = true;

                overlay.style.backgroundImage = `url(${imageUrl})`;
                overlay.style.display = 'block';

                const direction = lastDirection === 'left' ? 'right' : 'left';
                lastDirection = direction;

                const fromValue = direction === 'left' ? '100%' : '-100%';
                const toValue = '0%';

                gsap.fromTo(overlay, 
                    {left: fromValue}, 
                    {left: toValue, duration: 1, ease: "power4.out", onComplete: () => {
                        main.style.backgroundImage = `url(${imageUrl})`;
                        overlay.style.display = 'none';
                        isAnimating = false;
                    }}
                );
            });

            element.addEventListener("mouseleave", () => {
                isAnimating = false;
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
