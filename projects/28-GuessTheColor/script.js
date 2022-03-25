const correctColorDisplay = document.querySelector(`.game__correct-answer`);
const answers = document.querySelectorAll(`.answer`);
const overlay = document.querySelector(`.overlay`);
const popupTitle = document.querySelector(`.popup__title`);
const popupCorrectAnswer = document.querySelector(`.popup__answer`);

let colors = {
  correctColor: "",
  colors: [],
};

function togglePopup(visible = true) {
  if (visible) {
    overlay.style.visibility = "visible";
  } else {
    overlay.style.visibility = "hidden";
    colors.correctColor = "";
    colors.colors = [];
    displayAnswers();
  }
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

function randomColor() {
  let r = randInt(0, 255);
  let g = randInt(0, 255);
  let b = randInt(0, 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function generateColors() {
  for (let i = 0; i < 6; i++) {
    colors.colors.push(randomColor());
  }
  colors.correctColor = colors.colors[randInt(-1, 5)];
}

function displayAnswers() {
  generateColors();
  for (let i = 0; i < colors.colors.length; i++) {
    answers[i].style.backgroundColor = colors.colors[i];
    answers[i].style.boxShadow = `0 0 10px ${colors.colors[i]}`;
  }
  correctColorDisplay.textContent = colors.correctColor.toUpperCase();
}

function checkAnswer() {
  popupCorrectAnswer.style.backgroundColor = colors.correctColor;
  if (this.style.backgroundColor === colors.correctColor) {
    popupTitle.textContent = "Nice! 😎";
  } else {
    popupTitle.textContent = "Oh no 😢";
  }
  togglePopup();
}

window.addEventListener("load", displayAnswers);

answers.forEach((answer) => answer.addEventListener("click", checkAnswer));

overlay.addEventListener("click", (e) => {
  if (!e.target.closest(".popup")) {
    togglePopup(false);
  }
});
