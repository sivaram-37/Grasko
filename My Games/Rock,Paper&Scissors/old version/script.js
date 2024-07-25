const startbtn = document.getElementById("start");
const choices = document.getElementById("choose");
const backdrop = document.getElementById("backdrop");
const submitbtn = document.querySelector(".submit");
const userInputs = document.querySelectorAll("input");

const showresult = document.querySelector(".res");
const result = document.createElement("h2");
const details = document.createElement("h3");

const DEFAULT_USER_INPUT = "rock";

const toggleChoice = () => {
  choices.classList.toggle("visible");
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const clearUserInputs = () => {
  for (const inp of userInputs) {
    if (inp.checked) {
      inp.checked = false;
    }
  }
};

const startbtnHandler = () => {
  toggleChoice();
  toggleBackdrop();
};

const getUserInput = () => {
  let selectedOption;
  for (const inp of userInputs) {
    if (inp.checked) {
      selectedOption = inp.value;
      break;
    }
  }
  if (!selectedOption) {
    selectedOption = DEFAULT_USER_INPUT;
    alert(
      `you didn't choose any of the options!,So we choose you " ${DEFAULT_USER_INPUT} "`
    );
  }
  return selectedOption;
};

const getComputerInput = () => {
  const randomNumber = Math.random();
  let computerInput;
  if (randomNumber < 0.33) {
    computerInput = "rock";
  } else if (randomNumber < 0.67) {
    computerInput = "paper";
  } else {
    computerInput = "scissor";
  }
  return computerInput;
};

const submitbtnHandler = () => {
  const userInput = getUserInput();
  const computerInput = getComputerInput();

  result.textContent = "";
  details.textContent = "";

  if (userInput === computerInput) {
    result.textContent = `Game Draw...!!!`;
    result.style.color = "white";
  } else if (
    (userInput === "paper" && computerInput === "rock") ||
    (userInput === "scissor" && computerInput === "paper") ||
    (userInput === "rock" && computerInput === "scissor")
  ) {
    result.textContent = `You Won...!!!`;
    result.style.color = "rgb(1, 255, 1)";
  } else {
    result.textContent = `You Lost...!!!`;
    result.style.color = "#cc0000";
  }
  details.textContent = `your choice is "${userInput}" ; computer's choice is "${computerInput}"`;
  showresult.appendChild(result);
  showresult.appendChild(details);
  toggleChoice();
  toggleBackdrop();
  clearUserInputs();
};

startbtn.addEventListener("click", startbtnHandler);
submitbtn.addEventListener("click", submitbtnHandler);
