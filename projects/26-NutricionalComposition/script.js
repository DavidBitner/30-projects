import { MY_API_KEY } from "./config.js";

const input = document.querySelector(`.input`);
const btn = document.querySelector(`.btn`);
const overlay = document.querySelector(`.overlay`);
const modalTitle = document.querySelector(`.modal__title`);
const list = document.querySelector(`.list`);

function toggleModal(visible = true) {
  if (visible) {
    overlay.style.visibility = "visible";
  } else {
    overlay.style.visibility = "hidden";
  }
}

async function fetchNutritionalComposition() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "food-nutrition-information.p.rapidapi.com",
      "X-RapidAPI-Key": MY_API_KEY,
    },
  };

  const response = await fetch(
    `https://food-nutrition-information.p.rapidapi.com/foods/search?query=${input.value}&pageSize=1&pageNumber=1`,
    options
  );
  const data = await response.json();
  const food = data.foods[0];

  if (!food) {
    alert("Invalid Name");
    return undefined;
  }

  const object = {
    name: food.description,
    brand: food.brandOwner,
    nutrients: [],
  };

  food.foodNutrients.forEach((nutrient) =>
    object.nutrients.push(nutrient.nutrientName)
  );

  return object;
}

async function generateNutritionalComposition() {
  list.textContent = "";
  const food = await fetchNutritionalComposition();

  if (!food) {
    return;
  }

  modalTitle.textContent = `${food.name}, ${
    food.brand != undefined ? `${food.brand}` : ""
  }`;

  food.nutrients.forEach((nutrient) => {
    let li = document.createElement("li");
    li.innerText = nutrient;
    list.appendChild(li);
  });

  const listSize = document.getElementsByTagName("li").length;

  if (listSize >= 50) {
    list.style.fontSize = "6px";
    list.style.gridTemplateColumns = "repeat(5, max-content)";
  } else {
    list.style.fontSize = "1rem";
    list.style.gridTemplateColumns = "repeat(3, 1fr)";
  }

  toggleModal();
}

btn.addEventListener("click", generateNutritionalComposition);
overlay.addEventListener("click", (e) => {
  if (!e.target.closest(".modal")) {
    toggleModal(false);
  }
});
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    generateNutritionalComposition();
  }
});
