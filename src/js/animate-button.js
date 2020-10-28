const animateButtons = document.querySelectorAll('[data-button=animate]');

animateButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const { nextElementSibling } = e.target;
        nextElementSibling.classList.add("JPs-animate");
    });
});