const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector(`.speak`);
const stopButton = document.querySelector(`.stop`);

msg.text = document.querySelector(`[name="text"]`).value;

function populateVoices() {
  voices = speechSynthesis.getVoices();
  voicesDropdown.innerHTML = voices
    .map(
      (voice) =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join("");
}

function changeVoice() {
  msg.voice = voices.find((voice) => voice.name === this.value);
  toggle();
}

function toggle(restart = true) {
  speechSynthesis.cancel();

  if (restart) {
    speechSynthesis.speak(msg);
  }
}

function changeOption() {
  msg[this.name] = this.value;
  toggle();
}

// Firefox
window.addEventListener("load", populateVoices);

// Chrome
speechSynthesis.addEventListener("voiceschanged", populateVoices);

voicesDropdown.addEventListener("change", changeVoice);
options.forEach((option) => option.addEventListener("change", changeOption));
speakButton.addEventListener("click", toggle);
stopButton.addEventListener("click", () => toggle(false));
