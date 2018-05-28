document.addEventListener(`DOMContentLoaded`, function () {


    function playSound(e) {
        let btn = e.keyCode;
        const audio = document.querySelector(`audio[data-key="${btn}"]`);
        const key = document.querySelector(`.key[data-key="${btn}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add(`is-playing`);
    }

    function removeTransition(e) {
        if (e.propertyName !== `transform`) return;
        this.classList.remove(`is-playing`);


    }

    var keys = document.querySelectorAll(`.key`);
    keys.forEach(key => key.addEventListener(`transitionend`, removeTransition))

    window.addEventListener(`keydown`, playSound);



});
