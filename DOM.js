// DOM Manipulation - snippets/javascript/dom.js
// Example: change text in an element with id="demo"
document.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("#demo");
  if (el) el.textContent = "Hello from snippets/dom.js!";
});
