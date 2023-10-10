const videoPlayerBox = document.querySelector(".video-player-box");
const video = videoPlayerBox.querySelector("video");
const toggleBtn = videoPlayerBox.querySelector(".toggle-play");
const skipButtons = videoPlayerBox.querySelectorAll(".skip-container button");
const ranges = videoPlayerBox.querySelectorAll("input[type=range]");
const filled = videoPlayerBox.querySelector(".filled");
const progressBar = videoPlayerBox.querySelector(".progress-bar");

function togglePlay() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateBtnText() {
    const icon = this.paused ? '►' : '❚ ❚';

    toggleBtn.innerHTML = icon;
}

function skipVideo() {
    video.currentTime += parseInt(this.dataset.skip);
}

function rangeChange() {
    video[this.name] = this.value;
}

function handleProgress() {
    filled.style.width = video.currentTime / video.duration * 100 + "%";
}

function moveVideoTo(e) {
    video.currentTime = e.offsetX / progressBar.offsetWidth * video.duration;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateBtnText);
video.addEventListener("pause", updateBtnText);
video.addEventListener("timeupdate", handleProgress);

toggleBtn.addEventListener("click", togglePlay);

for(let i = 0; i < skipButtons.length; i++) {
    skipButtons[i].addEventListener("click", skipVideo);
}

for(let i = 0; i < ranges.length; i++) {
    ranges[i].addEventListener("change", rangeChange);
}

let isMouseDown = false;
progressBar.addEventListener("click", moveVideoTo);
progressBar.addEventListener("mousedown", () => isMouseDown = true);
progressBar.addEventListener("mouseup", () => isMouseDown = false);
progressBar.addEventListener("mousemove", (e) => isMouseDown && moveVideoTo(e));