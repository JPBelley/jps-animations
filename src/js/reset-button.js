const resetButtons = document.querySelectorAll('[data-button=reset]');

resetButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const { previousElementSibling } = e.target;
        previousElementSibling.classList.remove("JPs-animate");
    });
});