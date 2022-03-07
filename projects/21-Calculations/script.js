const firstNumberDisplay = document.querySelector(`.first-number`);
const secondNumberDisplay = document.querySelector(`.second-number`);
const sign = document.querySelector(`.sign`);
const input = document.querySelector(`.input`);
const btn = document.querySelector(`.btn`);
const displayAnswer = document.querySelector(`.answer`);
const span = document.querySelector(`.ans`);
let operationAnswer;

function randomNumber(limit = 1001) {
  return Math.floor(Math.random() * limit);
}

function generateCalculation() {
  let firstNumber = randomNumber();
  let secondNumber = randomNumber();
  const operation = randomNumber(3);

  if (operation === 0) {
    operationAnswer = firstNumber + secondNumber;
    sign.textContent = "+";
  } else if (operation === 1) {
    let thirdNumber;
    if (secondNumber > firstNumber) {
      thirdNumber = firstNumber;
      firstNumber = secondNumber;
      secondNumber = thirdNumber;
    }
    operationAnswer = firstNumber - secondNumber;
    sign.textContent = "-";
  } else {
    operationAnswer = firstNumber * secondNumber;
    sign.textContent = "*";
  }

  firstNumberDisplay.textContent = firstNumber;
  secondNumberDisplay.textContent = secondNumber;
  input.value = "";
}

function checkAnswer() {
  const userAnswer = input.value;
  if (userAnswer == operationAnswer) {
    displayAnswer.style.color = "green";
    displayAnswer.textContent = `Correct Answer! ${operationAnswer}`;
  } else {
    displayAnswer.style.color = "red";
    displayAnswer.textContent = `Wrong Answer! ${operationAnswer}`;
  }
}

window.addEventListener("load", generateCalculation);

btn.addEventListener("click", () => {
  checkAnswer();
  generateCalculation();
});
