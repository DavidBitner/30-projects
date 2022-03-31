import { MY_API_KEY } from "./config.js";

const btn = document.querySelector(`.btn`);
const countryDisplay = document.querySelector(`.country`);
const cityDisplay = document.querySelector(`.city`);
const regionDisplay = document.querySelector(`.region`);
const currentWeatherImg = document.querySelector(`.current-weather-img`);
const currentWeatherText = document.querySelector(`.current-weather-text`);
const tempDisplay = document.querySelector(`.temp`);

let coords;

function getLocation() {
  navigator.geolocation.getCurrentPosition(getCoords);
}

function getCoords(position) {
  coords = [position.coords.latitude, position.coords.longitude];
}

async function showWeather() {
  if (!coords) {
    alert("Allow access to location necessary");
    return;
  }

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${coords[0]}%2C${coords[1]}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": MY_API_KEY,
      },
    }
  );
  const data = await response.json();

  const object = {
    country: data.location.country,
    city: data.location.region,
    region: data.location.name,
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    conditionImg: data.current.condition.icon,
  };

  countryDisplay.textContent = object.country;
  cityDisplay.textContent = object.city;
  regionDisplay.textContent = object.region;
  currentWeatherImg.style.display = "inline";
  currentWeatherImg.src = object.conditionImg;
  currentWeatherText.textContent = object.condition;
  tempDisplay.textContent = `${object.temp}°C`;
}

window.addEventListener("load", getLocation);

btn.addEventListener("click", showWeather);
