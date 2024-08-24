document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector(".img-container-category");
    const overlay = document.querySelector(".overlay");

    let isAnimating = false;
    let lastDirection = 'left';

    const images = [
        "./media/img/nail2.webp",
        "./media/img/pedicure.webp",
        "./media/img/ricostruzione.webp",
        "./media/img/person.webp",
        "./media/img/extension.webp",
        "./media/img/beauty.webp",
        "./media/img/epilazione.webp",
        "./media/img/offerta.webp"
    ];
    
    images.forEach(url => {
        const img = new Image();
        img.src = url;
    });

    const setBackgroundImage = (selector, imageUrl) => {
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
                    {left: toValue, duration: 0.75, ease: "power4.out", onComplete: () => {
                        main.style.backgroundImage = `url(${imageUrl})`;
                        overlay.style.display = 'none';
                        isAnimating = false;
                    }}
                );
            });

            element.addEventListener("mouseleave", () => {
                if (isAnimating) {
                    gsap.killTweensOf(overlay);
                    isAnimating = false;
                    overlay.style.display = 'none';
                }
            });
        });
    };

    setBackgroundImage(".manicure", "./media/img/nail2.webp");
    setBackgroundImage(".pedicure", "./media/img/pedicure.webp");
    setBackgroundImage(".ricostruzione", "./media/img/ricostruzione.webp");
    setBackgroundImage(".trucco", "./media/img/person.webp");
    setBackgroundImage(".extension", "./media/img/extension.webp");
    setBackgroundImage(".trattamento", "./media/img/beauty.webp");
    setBackgroundImage(".epilazione", "./media/img/epilazione.webp");
    setBackgroundImage(".offerta", "./media/img/offerta.webp");
});