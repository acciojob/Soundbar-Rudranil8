// const buttons = document.querySelectorAll('.btn');
// const stopButton = document.querySelector('.stop');
// const sounds = [];

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         const sound = new Audio(`sounds/${button.innerText}.mp3`);
//         sounds.push(sound);
//         sound.play();
//     });
// });

// stopButton.addEventListener('click', () => {
//     sounds.forEach(sound => {
//         sound.pause();
//         sound.currentTime = 0;
//     });
// });
window.onload = function() {
    const buttons = document.querySelectorAll('.btn');
    const stopButton = document.querySelector('.stop');
    let sound;

    buttons.forEach(button => {
        // button.addEventListener('click', () => {
        //     const sound = new Audio(`sounds/${button.innerText}.mp3`);
        //     sounds.push(sound);
        //     sound.play();
        // });
		button.addEventListener('click', () => {
            if (sound) {
                sound.pause();
                sound.currentTime = 0;
            }
            sound = new Audio(`sounds/${button.innerText}.mp3`);
            sound.play();
        });
    });
	stopButton.addEventListener('click', () => {
        if (sound) {
            sound.pause();
            sound.currentTime = 0;
        }
    });
};