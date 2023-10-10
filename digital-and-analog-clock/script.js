const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");
const digitalClock = document.querySelector(".digital-clock");

setInterval(() => {
    const date = new Date();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    digitalClock.innerHTML = `${hours < 10 ? "0" + hours : hours}  : ${minutes < 10 ? "0" + minutes : minutes} : ${seconds < 10 ? "0" + seconds : seconds}`;

    const secondAngle = seconds * 6;
    const minuteAngle = minutes * 6 + 0.1 * seconds;
    const hourAngle = hours * 30 + minutes * 0.5;

    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
}, 1000);