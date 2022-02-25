// Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Varibles
let p1 = document.querySelector(`#p1`);
let p2 = document.querySelector(`#p2`);
let p1Score = document.querySelector(`#p1-score`);
let p1Total = document.querySelector(`#p1-total`);
let p2Score = document.querySelector(`#p2-score`);
let p2Total = document.querySelector(`#p2-total`);
let dice = document.querySelector(`#dice`);
const btnNewGame = document.querySelector(`#new`);
const btnRoll = document.querySelector(`#roll`);
const btnHold = document.querySelector(`#hold`);

let score = 0;
let activePlayer = 1;
let roll1 = false;

// Setting Game
p1Score.textContent = 0;
p1Total.textContent = 0;
p2Score.textContent = 0;
p2Total.textContent = 0;

function changePlayer(jogador) {
  p1.classList.toggle("inactive");
  p1.classList.toggle("active");
  p2.classList.toggle("inactive");
  p2.classList.toggle("active");
}

// Listeners
btnNewGame.addEventListener("click", function () {
  p1Score.textContent = 0;
  p1Total.textContent = 0;
  p2Score.textContent = 0;
  p2Total.textContent = 0;
  score = 0;
  dice.src = "img/hidden.png";
  p1.classList.add("active");
  p1.classList.remove("inactive");
  p2.classList.add("inactive");
  p2.classList.remove("active");
  activePlayer = 1;
  p1.classList.remove("win");
  p2.classList.remove("win");
  btnHold.disabled = false;
  btnRoll.disabled = false;
});

btnRoll.addEventListener("click", function () {
  let n = Math.trunc(Math.random() * 6 + 1);

  switch (n) {
    case 1:
      dice.src = "img/dice-1.png";
      roll1 = true;
      break;
    case 2:
      dice.src = "img/dice-2.png";
      score += 2;
      break;
    case 3:
      dice.src = "img/dice-3.png";
      score += 3;
      break;
    case 4:
      dice.src = "img/dice-4.png";
      score += 4;
      break;
    case 5:
      dice.src = "img/dice-5.png";
      score += 5;
      break;
    case 6:
      dice.src = "img/dice-6.png";
      score += 6;
      break;
    default:
      dice.src = "img/hidden.png";
      break;
  }

  if (activePlayer == 1) {
    p1Score.textContent = score;
    if (roll1) {
      activePlayer = 2;
      roll1 = false;
      score = 0;
      p1Score.textContent = 0;
      changePlayer(1);
    }
  } else if (activePlayer == 2) {
    p2Score.textContent = score;
    if (roll1) {
      activePlayer = 1;
      roll1 = false;
      score = 0;
      p2Score.textContent = 0;
      changePlayer(2);
    }
  }
});

btnHold.addEventListener("click", function () {
  if (activePlayer == 1) {
    p1Total.textContent = Number(p1Total.textContent) + score;
    score = 0;
    p1Score.textContent = 0;
    activePlayer = 2;
    changePlayer(1);
    if (Number(p1Total.textContent >= 100)) {
      p1.classList.toggle("win");
      btnHold.disabled = true;
      btnRoll.disabled = true;
    }
  } else if (activePlayer == 2) {
    p2Total.textContent = Number(p2Total.textContent) + score;
    score = 0;
    p2Score.textContent = 0;
    activePlayer = 1;
    changePlayer(2);
    if (Number(p2Total.textContent >= 100)) {
      p2.classList.toggle("win");
      btnHold.disabled = true;
      btnRoll.disabled = true;
    }
  }
});
