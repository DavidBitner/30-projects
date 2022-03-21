const display = document.querySelector(`.counter-display`);
const btnAdd = document.querySelector(`.btn-add`);
const btnRemove = document.querySelector(`.btn-remove`);
const counterBox = document.querySelector(`.counter-box`);
let number = 0;

function displayUpdate() {
  display.textContent = number;
  counterBox.style.boxShadow = "0px 0px 20px var(--color-primary)";
}

function addNumber() {
  number++;
  displayUpdate();
}

function removeNumber() {
  number--;
  displayUpdate();
}

btnAdd.addEventListener("click", addNumber);
btnRemove.addEventListener("click", removeNumber);
counterBox.addEventListener("transitionend", () => {
  counterBox.style.boxShadow = "0px 0px 20px var(--color-secundary)";
});
