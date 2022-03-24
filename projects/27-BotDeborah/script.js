import { MY_API_KEY } from "./config.js";

const input = document.querySelector(`.input`);
const btn = document.querySelector(`.btn`);
const overlay = document.querySelector(`.overlay`);
const modalTitle = document.querySelector(`.modal__title`);

function toggleModal(visible = true) {
  if (visible) {
    overlay.style.visibility = "visible";
  } else {
    overlay.style.visibility = "hidden";
  }
}

function botResponse(txt = "") {
  modalTitle.textContent = txt;

  toggleModal();
}

function showBotResponse() {
  if (!input.value) {
    botResponse(`I can't understand you! 🤔`);
    return;
  }

  // For some reason I can't make fetch requests work, so I'm using http requests
  const data = null;

  const xhr = new XMLHttpRequest();
  const url = `https://aeona2.p.rapidapi.com/?userId=0&text=${input.value}`;
  xhr.withCredentials = true;

  xhr.open("GET", url);
  xhr.setRequestHeader("X-RapidAPI-Host", "aeona2.p.rapidapi.com");
  xhr.setRequestHeader("X-RapidAPI-Key", MY_API_KEY);

  xhr.send(data);

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      if (this.responseText.includes("https")) {
        botResponse(`wtf 😂`);
      } else {
        botResponse(`${this.responseText}`);
      }
    }
  });
}

btn.addEventListener("click", showBotResponse);

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    showBotResponse();
  }
});

overlay.addEventListener("click", (e) => {
  if (!e.target.closest(".modal")) {
    toggleModal(false);
  }
});
