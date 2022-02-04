function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  const key = document.querySelector(`.key[data-key="${e.code}"]`);

  // Defense clausule to stop in case a key without a audio assigned to it is pressed
  if (!audio) {
    return;
  }

  audio.currentTime = 0; // necessary to play fast
  audio.play();

  key.classList.add("playing");
}

// Code that makes animation go away
function removeTransition(e) {
  // Defense clausule in case the event is not a transition
  if (e.propertyName !== "transform") {
    return;
  }

  this.classList.remove("playing");
}

// Listen to event of key press
window.addEventListener("keydown", playSound);

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
