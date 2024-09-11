document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector(".img-container-category");
    const defaultImage = "./media/img/nail2.webp"; 
    const defaultColor = "transparent"; // Assicurati di definire defaultColor
    const offset = { x: 50, y: 50 }; // Offset per mantenere distanza dal mouse

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

    setBackgroundImage(".manicure", "./media/img/nail2.webp");
    setBackgroundImage(".pedicure", "./media/img/pedicure.webp");
    setBackgroundImage(".ricostruzione", "./media/img/ricostruzione.webp");
    setBackgroundImage(".trucco", "./media/img/person.webp");
    setBackgroundImage(".extension", "./media/img/extension.webp");
    setBackgroundImage(".trattamento", "./media/img/beauty.webp");
    setBackgroundImage(".epilazione", "./media/img/epilazione.webp");
    setBackgroundImage(".offerta", "./media/img/offerta.webp");
});
