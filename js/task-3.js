const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  const inputValue = textInput.value.trim();
  output.textContent = inputValue || "Anonymous";
});
