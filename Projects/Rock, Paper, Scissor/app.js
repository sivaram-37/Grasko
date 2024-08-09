const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "Draw...!!!";
const RESULT_PLAYER_WINS = "Hurry!!! you win...!!!";
const RESULT_COMPUTER_WINS = "Sorry!!! Computer win...!!!";

let isGameRunning = false;

const getUserChoice = () => {
  let userChoice = prompt(
    `Choose you choice : ${ROCK}, ${PAPER} or ${SCISSOR}`,
    ""
  ).toLowerCase();
  if (userChoice != ROCK && userChoice != PAPER && userChoice != SCISSOR) {
    alert(`Invalid choice.!!!, we choose you ${DEFAULT_CHOICE}`);
    return;
  }
  return userChoice;
};

const getComputerChoice = () => {
  let randomNumber = Math.random();
  return randomNumber < 0.34 ? ROCK : randomNumber < 0.67 ? PAPER : SCISSOR;
};

const whoWins = (computerChoice, playerChoice = DEFAULT_CHOICE) => {
  if (playerChoice === computerChoice) {
    return RESULT_DRAW;
  } else if (
    (playerChoice === ROCK && computerChoice === SCISSOR) ||
    (playerChoice === PAPER && computerChoice === ROCK) ||
    (playerChoice === SCISSOR && computerChoice === PAPER)
  ) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};

startGameBtn.addEventListener("click", () => {
  if (isGameRunning) {
    return;
  }
  isGameRunning = true;
  console.log("The Game is started...!!!");
  const playerChoice = getUserChoice();
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = whoWins(computerChoice, playerChoice);
  } else {
    winner = whoWins(computerChoice);
  }

  let msg = `You chooses ${
    playerChoice || DEFAULT_CHOICE
  }, and the computer chooses ${computerChoice}.Therefore you had `;
  if (winner === RESULT_DRAW) {
    msg += `a Draw...!!!`;
  } else if (winner === RESULT_PLAYER_WINS) {
    msg += `won the round...!!!`;
  } else {
    msg += `lost the round...!!!`;
  }

  alert(msg);
  isGameRunning = false;
  console.log(winner);
  console.log("Game ended...!!!");
});
