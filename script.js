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
        button.addEventListener('click', () => {
            if (sound) {
                sound.pause();
                sound.currentTime = 0;
                sound.remove();  
            }
            sound = document.createElement('audio');
            sound.src = `https://pixabay.com/music/beats-no-copyright-for-her-chill-upbeat-summel-travel-vlog-and-ig-music-202298/`;
            document.body.appendChild(sound); 
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
};