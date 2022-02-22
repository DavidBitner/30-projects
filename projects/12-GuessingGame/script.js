"use strict";

let correct_number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let high_score = 0;

document.querySelector(`.check`).addEventListener("click", function () {
  const guess = document.querySelector(`.guess`).value;

  // No input
  if (!guess) {
    document.querySelector(`.message`).textContent = "Invalid Number!";

    // When the player wins
  } else if (guess == correct_number) {
    document.querySelector(`.message`).textContent = "Correct Number!";
    if (high_score < score) {
      high_score = score;
    }
    document.querySelector(`body`).style.backgroundColor = "green";
    document.querySelector(`.number`).style.width = "30rem";
    document.querySelector(`.number`).textContent = correct_number;

    // When the guess is wrong
  } else if (guess != correct_number) {
    if (score > 1) {
      // When the guess is too high or too low
      document.querySelector(`.message`).textContent =
        guess > correct_number ? "Too High!" : "Too Low!";
      score--;

      // When the player loses
    } else {
      document.querySelector(`.message`).textContent = "You Lost!";
      score = 0;
      document.querySelector(`body`).style.backgroundColor = "red";
    }
  }
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.highscore`).textContent = high_score;
});

// Restart game
document.querySelector(`.again`).addEventListener("click", function () {
  score = 20;
  correct_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(`body`).style.backgroundColor = "#222";
  document.querySelector(`.number`).style.width = "15rem";
  document.querySelector(`.number`).textContent = "?";
  document.querySelector(`.guess`).value = "";
});
