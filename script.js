const sound = new Audio(`sounds/${button.innerText}.mp3`);
sound.play();
sounds.forEach(sound => sound.pause());
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
const sounds = [];
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sound = new Audio(`sounds/${button.innerText}.mp3`);
        sounds.push(sound);
        sound.play();
    });
});

stopButton.addEventListener('click', () => {
    sounds.forEach(sound => sound.pause());
});