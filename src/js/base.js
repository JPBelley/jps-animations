const offsetDelay = 0.1;

var spanText = function spanText(text) {
    var string = text.innerText;
    var spaned = '';

    for (var i = 0; i < string.length; i++) {
        var delay = offsetDelay * i;
        if (string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
        else spaned += `<span style="animation-delay: ${delay}s">${string.substring(i, i + 1)}</span>`;
    }
    text.innerHTML = spaned;
}


var allAnimations = document.querySelectorAll(".JPs-anim");


allAnimations.forEach(anim => {
    spanText(anim);
});
