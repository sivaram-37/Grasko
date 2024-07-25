const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

const startBtn = document.getElementById("start");
const choice = document.getElementById("choose");
const backdrop = document.getElementById("backdrop");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissor");

const openChoice = () => choice.classList.add("visible");
const closeChoice = () => choice.classList.remove("visible");

const addBackdrop = () => backdrop.classList.add("visible");
const removeBackdrop = () => backdrop.classList.remove("visible");

const startBtnHandler = () => {
  openChoice();
  addBackdrop();
};

const getComputerInput = () => {
  const ranNumber = Math.random();
  let computerChoice;
  if (ranNumber < 0.33) {
    computerChoice = ROCK;
  } else if (ranNumber < 0.67) {
    computerChoice = PAPER;
  } else {
    computerChoice = SCISSOR;
  }
  return computerChoice;
};

const runGame = (inp) => {
  const userInput = inp;
  const computerInput = getComputerInput();
  const result = document.querySelector(".res");
  const details = document.createElement("p");
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
    result.style.color = "rgb(0, 204, 0)";
  } else {
    result.textContent = `You Lost...!!!`;
    result.style.color = "#cc0000";
  }
  details.textContent = `You Chooses "${userInput}" and Computer chooses "${computerInput}"`;

  result.append(details);
  console.log(userInput, computerInput);
  removeBackdrop();
  closeChoice();
};

startBtn.addEventListener("click", startBtnHandler);
rockBtn.addEventListener("click", runGame.bind(this, ROCK));
paperBtn.addEventListener("click", runGame.bind(this, PAPER));
scissorBtn.addEventListener("click", runGame.bind(this, SCISSOR));
