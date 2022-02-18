const container = document.querySelector(".container");
const text = container.querySelector("h1");
const walk1 = 50;
const walk2 = 100;
const walk3 = 500;

function shadow(e) {
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  let x = e.offsetX;
  let y = e.offsetY;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const shadowPositionX1 = Math.round((x / width) * walk1 - walk1 / 2);
  const shadowPositionY1 = Math.round((y / height) * walk1 - walk1 / 2);

  const shadowPositionX2 = Math.round((x / width) * walk2 - walk2 / 2);
  const shadowPositionY2 = Math.round((y / height) * walk2 - walk2 / 2);

  const shadowPositionX3 = Math.round((x / width) * walk3 - walk3 / 2);
  const shadowPositionY3 = Math.round((y / height) * walk3 - walk3 / 2);

  text.style.textShadow = `
    ${shadowPositionX1}px ${shadowPositionY1}px 0 rgba(255,255,255,0.7),
    ${shadowPositionX1 * -1}px ${shadowPositionY1}px 0 rgba(255,255,255,0.7),
    ${shadowPositionY1}px ${shadowPositionX1 * -1}px 0 rgba(255,255,255,0.7),
    ${shadowPositionY1 * -1}px ${shadowPositionX1}px 0 rgba(255,255,255,0.7),
    ${shadowPositionX2}px ${shadowPositionY2 * -1}px 0 rgba(255,255,255,0.5),
    ${shadowPositionX2 * -1}px ${shadowPositionY2 * -1}px 0 rgba(255,255,255,0.5),
    ${shadowPositionY2 * -1}px ${shadowPositionX2 * -1}px 0 rgba(255,255,255,0.5),
    ${shadowPositionY2 * -1 * -1}px ${shadowPositionX2}px 0 rgba(255,255,255,0.5),
    ${shadowPositionX3}px ${shadowPositionY3}px 0 rgba(255,255,255,0.3),
    ${shadowPositionX3 * -1}px ${shadowPositionY3}px 0 rgba(255,255,255,0.3),
    ${shadowPositionY3}px ${shadowPositionX3 * -1}px 0 rgba(255,255,255,0.3),
    ${shadowPositionY3 * -1}px ${shadowPositionX3}px 0 rgba(255,255,255,0.3)
  `;
}

container.addEventListener("mousemove", shadow);
