let seconds = document.querySelector('.seconds_hand');
let minutes = document.querySelector('.minutes_hand');
let hours = document.querySelector('.hours_hand');

function setDate() {
    let now = new Date();

    let seconde = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    let secondDegrees = ((seconde / 60) * 360) + 90;
    let minuteDegrees = ((minute / 60) * 360) + 90;
    let hourDegrees = ((hour / 12) * 360) + 90;

    seconds.style.transform = `rotate(${secondDegrees}deg)`;
    minutes.style.transform = `rotate(${minuteDegrees}deg)`;
    hours.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);