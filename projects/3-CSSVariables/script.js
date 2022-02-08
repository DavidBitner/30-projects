const inputSpacing = document.querySelector(`.spacing-input`);
const inputBlur = document.querySelector(`.blur-input`);
const inputOverlay = document.querySelector(`.overlay-input`);

const inputs = [inputSpacing, inputBlur, inputOverlay];

function handleUpdate() {
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
