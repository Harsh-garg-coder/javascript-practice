const buttons = document.querySelectorAll(".button");
let previousAudio;

function playMusic(button) {
    button.classList.add("button-clicked");

    if(previousAudio) {
        previousAudio.pause();
    }

    const currentAudio = document.querySelector(`#${button.id}-sound`);
    
    currentAudio.currentTime = 0;
    currentAudio.play();
    previousAudio = currentAudio;

    setTimeout(() => {
        button.classList.remove("button-clicked");
    }, 200);
}

function handleKeyDown(event) {
    const currentBtn = document.querySelector(`.${event.key}`);

    if(!currentBtn) return;

    playMusic(currentBtn);
}

for(let i = 0; i < buttons.length; i++) {
    const currentBtn = buttons[i];

    currentBtn.addEventListener("click", () => playMusic(currentBtn));
}

document.addEventListener("keydown", handleKeyDown);