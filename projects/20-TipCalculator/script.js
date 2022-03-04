const input = document.querySelector(`.value-input`);
const slider = document.querySelector(`.slider`);
const sliderPercentage = document.querySelector(`.tip-slider-percentage`);
const tipValue = document.querySelector(`#tip-amount`);
const totalBill = document.querySelector(`#total-bill`);
const dolarSign = document.querySelector(`.value-sign`);

function calculateTip() {
  const value = input.value;
  const percentage = slider.value;
  sliderPercentage.textContent = `${percentage}%`;

  if (isNaN(value) || value == 0) {
    input.style.boxShadow = `0px 0px 5px red`;
    dolarSign.style.color = "red";
    return;
  }

  const tip = (value * percentage) / 100;
  const total = parseFloat(value) + parseFloat(tip);

  input.style.boxShadow = `0px 0px 5px green`;
  dolarSign.style.color = "green";

  tipValue.textContent = `$${tip.toFixed(2)}`;
  totalBill.textContent = `$${total.toFixed(2)}`;
}

slider.addEventListener("click", calculateTip);
slider.addEventListener("mousemove", calculateTip);

input.addEventListener("focus", () => {
  input.style.boxShadow = `0px 0px 5px black`;
  dolarSign.style.color = "black";
});
