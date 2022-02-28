const holes = document.querySelectorAll(".hole");
const score = document.querySelector(`.score`);
const moles = document.querySelectorAll(`.mole`);
const btnStart = document.querySelector(`.start`);
let lastHole;
let endGame = false;
let scoreGame = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const holeNumber = Math.floor(Math.random() * holes.length);
  const hole = holes[holeNumber];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function showMule() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");
    if (!endGame) {
      showMule();
    }
  }, time);
}

function startGame() {
  scoreGame = 0;
  score.textContent = 0;
  endGame = false;
  btnStart.disabled = true;
  showMule();
  setTimeout(() => {
    endGame = true;
    btnStart.disabled = false;
  }, 10000);
}

function moleHit() {
  scoreGame++;
  this.classList.remove("up");
  score.textContent = scoreGame;
}

moles.forEach((mole) => mole.addEventListener("click", moleHit));

btnStart.addEventListener("click", startGame);
