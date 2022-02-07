const pointerSeconds = document.querySelector(`.pointer-second`);
const pointerMinutes = document.querySelector(`.pointer-minute`);
const pointerHours = document.querySelector(`.pointer-hour`);

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Code to stop pointers from going crazy
  if (seconds == 0) {
    pointerSeconds.style.transitionDuration = "0s";
    pointerMinutes.style.transitionDuration = "0s";
    pointerHours.style.transitionDuration = "0s";
  } else {
    pointerSeconds.style.transitionDuration = "0.05s";
    pointerMinutes.style.transitionDuration = "0.05s";
    pointerHours.style.transitionDuration = "0.05s";
  }

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  pointerSeconds.style.transform = `rotate(${secondsDegrees}deg)`;
  pointerMinutes.style.transform = `rotate(${minutesDegrees}deg)`;
  pointerHours.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
