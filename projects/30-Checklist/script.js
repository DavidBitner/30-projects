const input = document.querySelector(`.input`);
const btn = document.querySelector(`.btn`);
const checklist = document.querySelector(`.checklist`);

function addTask() {
  if (!input.value) {
    alert("Enter Task");
    return;
  }

  const text = document.createElement("div");
  const task = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  text.classList.add("text");
  text.innerHTML = input.value;
  task.classList.add("task");
  task.appendChild(checkbox);
  task.appendChild(text);
  checklist.appendChild(task);
}

function checkUncheck(e) {
  let checkbox;
  let text;
  if (e.target.classList.contains("task")) {
    checkbox = e.target.firstChild;
    text = e.target.childNodes[1];
  } else if (e.target.classList.contains("text")) {
    checkbox = e.target.previousElementSibling;
    text = e.target;
  } else if (e.target.classList.contains("checkbox")) {
    checkbox = e.target;
    text = e.target.nextElementSibling;

    if (checkbox.checked) {
      checkbox.checked = false;
    } else if (!checkbox.checked) {
      checkbox.checked = true;
    }
  }

  if (checkbox.checked) {
    checkbox.checked = false;
    text.style.textDecoration = "none";
  } else {
    checkbox.checked = true;
    text.style.textDecoration = "line-through";
  }
}

btn.addEventListener("click", addTask);
checklist.addEventListener("click", (e) => checkUncheck(e));
