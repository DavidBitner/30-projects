import { BANDS } from "./bands.js";

function strip(bandName) {
  return bandName.replace(/^(a |the |an)/i, "").trim();
}

BANDS.sort();

document.querySelector(".unsorted").innerHTML = BANDS.map(
  (band) => `<li>${band}</li>`
).join("");

BANDS.sort((a, b) => (strip(a) > strip(b) ? 1 : -1));

document.querySelector(".sorted").innerHTML = BANDS.map(
  (band) => `<li>${band}</li>`
).join("");
