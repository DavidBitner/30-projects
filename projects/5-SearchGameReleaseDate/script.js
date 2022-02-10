import { MY_API_KEY, RAWG_API_KEY } from "./config.js";
import { ListBinding } from "./ListBinding.js";

const myList = document.querySelector(`.list`);
const listBinding = new ListBinding(myList);
const input = document.querySelector(`#input`);
const btn = document.querySelector(".btn");
let games = [];

// Ripple effect
function create_ripple(event) {
  const btn = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(btn.clientWidth, btn.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (btn.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (btn.offsetTop + radius)}px`;
  circle.classList.add("ripple");

  const ripple = btn.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }

  btn.appendChild(circle);
}

function showGames(game) {
  listBinding.add(`${game.name}, ${game.released}`);
}

async function searchGames() {
  try {
    const response = await fetch(
      `https://rawg-video-games-database.p.rapidapi.com/games?key=${RAWG_API_KEY}&search=${input.value}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
          "x-rapidapi-key": MY_API_KEY,
        },
      }
    );
    const data = await response.json();
    games = data.results;
    listBinding.clear();
    games.forEach((game) => showGames(game));
  } catch (error) {
    console.log(error);
  }
}

function pressEnterSearch(e) {
  if (e.key === "Enter" || e.code === "NumpadEnter") {
    btn.click();
  }
}

btn.addEventListener("click", create_ripple);
btn.addEventListener("click", searchGames);
input.addEventListener("keyup", pressEnterSearch);
