document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector(".img-container-category");
    const overlay = document.querySelector(".overlay");

    let isAnimating = false;
    let lastDirection = 'left';

    const images = [
        "./media/img/nail2.avif",
        "./media/img/pedicure.avif",
        "./media/img/ricostruzione.avif",
        "./media/img/person.avif",
        "./media/img/extension.avif",
        "./media/img/beauty.avif",
        "./media/img/epilazione.avif",
        "./media/img/offerta.avif"
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

    setBackgroundImage(".manicure", "./media/img/nail2.avif");
    setBackgroundImage(".pedicure", "./media/img/pedicure.avif");
    setBackgroundImage(".ricostruzione", "./media/img/ricostruzione.avif");
    setBackgroundImage(".trucco", "./media/img/person.avif");
    setBackgroundImage(".extension", "./media/img/extension.avif");
    setBackgroundImage(".trattamento", "./media/img/beauty.avif");
    setBackgroundImage(".epilazione", "./media/img/epilazione.avif");
    setBackgroundImage(".offerta", "./media/img/offerta.avif");
});