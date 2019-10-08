let buttons = document.querySelectorAll("button");
let updateResult = document.querySelector('.choices-container');
let wins = 0;
let ties = 0;
let losses = 0;

buttons.forEach(button => {
  button.addEventListener("click", event => {
    let playerChoice = button.innerHTML;
    game(playerChoice);
  });
});

function game(player) {
  let pcChoice = pcChooce();
  whoWins(pcChoice, player);
  updateMoves(pcChoice,player);
}

function whoWins(pc, player) {
  if (
    (pc === "ROCK" && player === "SCISSORS") ||
    (pc === "SCISSORS" && player === "PAPER") ||
    (pc === "PAPER" && player === "ROCK")
  ) {
    losses++;
    updateLosses();
  } else if (pc === player) {
    ties++;
    updateTies();
  } else {
    wins++;
    updateWins();
  }
}

function updateMoves(pc,player) {
  let updatePc = document.querySelector('p[class="pc-move"]');
  let updatePlayer = document.querySelector('p[class="player-move"]');

  updatePc.innerText = `computer choose: ${pc}`;
  updatePlayer.innerText = `you choose:  ${player}`;
}

function updateLosses() {
  let update = document.querySelector('p[class~="losses"]');
  update.innerText = `lossess: ${losses}`;

  let result = document.querySelector('p[class~="result"]')
  result.innerHTML = `YOU LOSE!`
}

function updateTies() {
  let update = document.querySelector('p[class~="ties"]');
  update.innerText = `ties: ${ties}`;

  let result = document.querySelector('p[class~="result"]')
  result.innerHTML = `It's a tie!`
}

function updateWins() {
  let update = document.querySelector('p[class~="wins"]');
  update.innerText = `wins: ${wins}`;

  let result = document.querySelector('p[class~="result"]')
  result.innerHTML = `YOU WIN!`
}

function pcChooce() {
  let int = Math.floor(Math.random() * Math.floor(3));

  switch (int) {
    case 0:
      return "ROCK";
    case 1:
      return "PAPER";
    case 2:
      return "SCISSORS";
  }
}
