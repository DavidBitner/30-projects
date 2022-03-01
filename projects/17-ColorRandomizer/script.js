const container = document.querySelector(`.container`);
const containerText = document.querySelector(`.container__text`);
const box = document.querySelector(`.box`);
const boxHeader = document.querySelector(`.box__header`);
const boxHeaderText = document.querySelector(`.box__header--text`);
const boxBody = document.querySelector(`.box__body`);
const boxBodyText = document.querySelector(`.box__body--text`);
const btnRandom = document.querySelector(`.btn`);

function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function padZero(str, len) {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
}

function invertColor(hex, blackWhite = true) {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (blackWhite) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

function randomize() {
  const containerBackground = randomColor();
  const boxHeaderBackground = randomColor();
  const boxBodyBackground = randomColor();
  const boxShadowColor = randomColor();

  container.style.backgroundColor = containerBackground;
  containerText.style.color = invertColor(containerBackground);
  containerText.innerHTML = `Background Color: ${containerBackground}`;

  boxHeader.style.backgroundColor = boxHeaderBackground;
  boxHeaderText.style.color = invertColor(boxHeaderBackground);
  boxHeaderText.innerHTML = `Background Color: ${boxHeaderBackground}`;

  box.style.boxShadow = `0px 0px 200px ${boxShadowColor}`;

  boxBody.style.backgroundColor = boxBodyBackground;
  boxBodyText.style.color = invertColor(boxBodyBackground);
  boxBodyText.innerHTML = `Background Color: ${boxBodyBackground}<br>
    Shadow Color: ${boxShadowColor}`;
}

btnRandom.addEventListener("click", randomize);
