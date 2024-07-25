const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 18;
const MONSTER_ATTACK_VALUE = 15;
const HEAL_HEALTH_VALUE = 25;

const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";

const enteredHealthValue = prompt(
  "Enter the health value for you and the monster",
  "100"
);

let battleLog = [];

function getMaxHealth() {
  let enteredValue = parseInt(enteredHealthValue);
  if (isNaN(enteredValue) || enteredValue <= 0) {
    throw { message: "Entered input is not a number" };
  }
  return enteredValue;
}

let chosenHealth;
try {
  chosenHealth = getMaxHealth();
} catch (e) {
  console.log(e);
  chosenHealth = 100;
  alert(
    "You have not entered the maximum health in number..! , So The maximum health is set to default"
  );
}

let currentMonsterHealth = chosenHealth;
let currentPlayerHealth = chosenHealth;
let hasBonusLife = true;

function writeToLog(ev, val, getPlayerHealth, getMonsterHealth) {
  let logentry = {
    event: ev,
    value: val,
    playerHealth: getPlayerHealth,
    monsterHealth: getMonsterHealth,
  };
  if (ev === LOG_EVENT_PLAYER_ATTACK) {
    logentry.target = "MONSTER";
  } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
    logentry.target = "MONSTER";
  } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
    logentry.target = "PLAYER";
  } else if (ev === LOG_EVENT_HEAL) {
    logentry.target = "PLAYER";
  }
  battleLog.push(logentry);
}

adjustHealthBars(chosenHealth);

function reset() {
  currentMonsterHealth = chosenHealth;
  currentPlayerHealth = chosenHealth;
  resetGame(chosenHealth);
}

function endRound() {
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  const initialPlayerHealth = currentPlayerHealth;

  currentPlayerHealth -= playerDamage;

  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentPlayerHealth,
    currentMonsterHealth
  );

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(currentPlayerHealth);
    alert("Lucky there is a bonus life otherwise you would be death...!!!");
    removeBonusLife();
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert("You WON...!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "PLAYER_WON",
      currentPlayerHealth,
      currentMonsterHealth
    );
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert("You LOST...!");
    writeToLog(
      LOG_EVENT_GAME_OVER,
      "MONSTER_WON",
      currentPlayerHealth,
      currentMonsterHealth
    );
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert("Match DRAW...!");
    writeToLog(LOG_EVENT_GAME_OVER, "DRAW", currentPlayerHealth, currentMonsterHealth);
  }

  if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
    alert("To reset the game, Click 'ok' !");
    reset();
  }
}

function attackMonster(attackType) {
  let maxDamage = attackType === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
  let getAttackType =
    attackType === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
  // if (attackType === MODE_ATTACK) {
  //   maxDamage = ATTACK_VALUE;
  //   getAttackType = LOG_EVENT_PLAYER_ATTACK;
  // } else if (attackType === MODE_STRONG_ATTACK) {
  //   maxDamage = STRONG_ATTACK_VALUE;
  //   getAttackType = LOG_EVENT_PLAYER_STRONG_ATTACK;
  // }
  const monsterDamage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= monsterDamage;
  writeToLog(getAttackType, monsterDamage, currentPlayerHealth, currentMonsterHealth);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenHealth - HEAL_HEALTH_VALUE) {
    alert("You can't heal more than maximum health...!");
    healValue = chosenHealth - currentPlayerHealth;
  } else {
    healValue = HEAL_HEALTH_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(LOG_EVENT_HEAL, healValue, currentPlayerHealth, currentMonsterHealth);
  endRound();
}

function logHandler() {
  //for loop
  // for (let i = 0; i < 5; i++) {
  //   console.log(i);
  // }

  //for-of loop
  for (const ele of battleLog) {
    console.log(ele);
  }
}

attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener("click", healHandler);
logBtn.addEventListener("click", logHandler);
