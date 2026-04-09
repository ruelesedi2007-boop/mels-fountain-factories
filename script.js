const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);