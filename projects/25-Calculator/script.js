const btns = document.getElementsByTagName("a");
const secondaryView = document.querySelector("#secondary-view");
const mainView = document.querySelector("#main-view");
const clear = document.querySelector("#clear");
const clearAll = document.querySelector("#clear-all");
const backspace = document.querySelector("#backspace");
const negative = document.querySelector("#negative");
const comma = document.querySelector("#comma");
const division = document.querySelector("#division");
const multiplication = document.querySelector("#multiplication");
const subtraction = document.querySelector("#subtraction");
const sum = document.querySelector("#sum");
const equal = document.querySelector("#equal");
const numbers = document.getElementsByClassName("btn-number");

let type = "none";

function rippleEffect(event) {
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

function clearDisplay(main = 0, secondary = false, txt = "") {
  if (secondary) {
    secondaryView.innerHTML = txt;
  }

  mainView.innerHTML = main;
}

function transfer(op = "none") {
  let main = mainView.textContent;

  if (main.slice(-1) == ",") {
    main = main.replace(",", "");
  }

  clearDisplay(0, true, main + ` ${op}`);
}

function solution(equal = false) {
  let first = secondaryView.textContent.slice(0, -2);
  let second = mainView.textContent;
  let result = 0;

  if (first.includes(",")) {
    first = first.replace(",", ".");
  }
  if (second.includes(",")) {
    second = second.replace(",", ".");
  }

  first = Number(first);
  second = Number(second);

  if (type == "÷") {
    result = first / second;
  } else if (type == "*") {
    result = first * second;
  } else if (type == "-") {
    result = first - second;
  } else if (type == "+") {
    result = first + second;
  }

  result = String(result);

  if (result.includes(".")) {
    result = result.replace(".", ",");
  }

  if (secondaryView.textContent != 0 && mainView.textContent != 0) {
    if (equal) {
      clearDisplay(result, true, 0);
      type = "none";
    } else {
      clearDisplay(0, true, result + ` ${type}`);
    }
  }
}

/*
  This function exists to make sure that after an
  operator button is clicked the operation happens, without this 
  function the calculator does not change the operation after a 
  button click;
*/
function operator(operator = "") {
  if (type == "none") {
    type = operator;
    transfer(type);
  } else {
    solution();
    type = operator;
    clearDisplay(0, true, secondaryView.textContent.slice(0, -1) + type);
  }
}

for (const btn of btns) {
  btn.addEventListener("click", rippleEffect);
}

for (const number of numbers) {
  number.addEventListener("click", function () {
    if (mainView.textContent == 0) {
      clearDisplay(number.textContent);
    } else {
      mainView.innerHTML += number.textContent;
    }
  });
}

clear.addEventListener("click", function () {
  clearDisplay();
});

clearAll.addEventListener("click", function () {
  clearDisplay(0, true, 0);
  type = "none";
});

backspace.addEventListener("click", function () {
  if (mainView.textContent.length > 1) {
    let txt = mainView.textContent.slice(0, -1);
    clearDisplay(txt);
  } else {
    clearDisplay();
  }
});

division.addEventListener("click", function () {
  operator("÷");
});

multiplication.addEventListener("click", function () {
  operator("*");
});

subtraction.addEventListener("click", function () {
  operator("-");
});

sum.addEventListener("click", function () {
  operator("+");
});

equal.addEventListener("click", function () {
  solution(true);
});

negative.addEventListener("click", function () {
  let n = mainView.textContent;

  if (n.includes(",")) {
    n = n.replace(",", ".");
  }

  n = Number(n);

  if (n > 0 || n < 0) {
    n *= -1;
  }

  n = String(n);

  if (n.includes(".")) {
    n = n.replace(".", ",");
  }

  clearDisplay(n);
});

comma.addEventListener("click", function () {
  let n = mainView.textContent;
  if (!n.includes(",")) {
    n += ",";
  }
  clearDisplay(n);
});
