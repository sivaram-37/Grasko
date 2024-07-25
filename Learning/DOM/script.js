const section = document.querySelector("section");

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  section.classList.toggle("invisible");
});
