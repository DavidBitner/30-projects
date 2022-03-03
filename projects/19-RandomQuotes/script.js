import { MY_API_KEY } from "./config.js";

const btn = document.querySelector(`.btn`);
const quoteText = document.querySelector(`.quote-text`);
const quoteAutor = document.querySelector(`.quote-autor`);

async function generateQuote() {
  try {
    const response = await fetch(
      "https://quotes15.p.rapidapi.com/quotes/random/",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "quotes15.p.rapidapi.com",
          "x-rapidapi-key": MY_API_KEY,
        },
      }
    );
    const data = await response.json();
    const quote = data.content;
    const autor = data.originator.name;

    quoteText.textContent = quote;
    quoteAutor.textContent = autor;
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", generateQuote);
