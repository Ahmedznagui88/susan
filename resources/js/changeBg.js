
document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector(".img-container-category");
    const defaultImage = "none"; 
    const setBackgroundImage = (selector, imageUrl) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.addEventListener("mouseenter", () => {
                main.style.backgroundImage = `url(${imageUrl})`;
                main.style.backgroundSize = 'cover'; 

            });
            element.addEventListener("mouseleave", () => {
                main.style.backgroundImage = defaultImage;
                main.style.backgroundColor = defaultColor;


                main.style.backgroundSize = "cover";

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
});

/*




Trattamento
Epilazione
Offerta 
 */