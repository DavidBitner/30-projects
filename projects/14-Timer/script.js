const btns = document.querySelectorAll(".btn");
const input = document.querySelector(".input");
const timeLeft = document.querySelector(".time-left");
const timeEnd = document.querySelector(`.time-end`);

let countdown;

function timer(seconds) {
  // Clear existing timer
  clearInterval(countdown);

  const now = Date.now();
  const alarmTime = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(alarmTime);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((alarmTime - Date.now()) / 1000);

    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timeLeft.textContent = display;
}

function displayEndTime(time) {
  const end = new Date(time);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  timeEnd.textContent = `Timer ends at ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

btns.forEach((btn) => btn.addEventListener("click", startTimer));

document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
