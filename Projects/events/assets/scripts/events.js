const btn = document.querySelector("button");
btn.addEventListener("click", (event) => console.log(event));

// // To click a element in a list
// const listItems = document.querySelectorAll("li");
// listItems.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

const list = document.querySelector("ul");

// we can remove the forEach loop by doing this method but if the list item has more than one element it fails
list.addEventListener("click", (event) => {
  event.target.classList.toggle("highlight");
});

list.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
});
