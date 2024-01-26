// Button scroll top
const displayButton = () => {
    window.addEventListener('scroll', () => {
        console.log(window.scrollY);

        if (window.scrollY > 100) {
            let buttonTop = document.querySelector(".btn-top");
            buttonTop.style.display = "block";
        } else {
            let buttonTop = document.querySelector(".btn-top");
            buttonTop.style.display = "none";
        }
    });
};

const scrollToTop = () => {
    let buttonTop = document.querySelector(".btn-top");
    buttonTop.addEventListener("click", () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        console.log(event);
    });
};

displayButton();
scrollToTop();