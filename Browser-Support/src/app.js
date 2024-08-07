const copyBtn = document.querySelector("button");
const textToCopy = document.querySelector("p");

copyBtn.addEventListener("click", () => {
  const text = textToCopy.textContent;
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } else {
    alert("Your browser doesn't do support this feature");
  }
});
