for (let i = 0; i < 5; i++) {
  game();
}

function game() {
  let playerChoice = window.prompt("choose rock, paper, or scissors", "rock");
  let pcChoice = (() => {
    let random = Math.floor(Math.random() * Math.floor(3));
    switch (random) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  })();


  let result = ((player,computer) =>{
    console.log(`You choose: ${player} and the computer choose: ${computer}`);
  if (player === computer) {
    return "tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
  });

  console.log(result(playerChoice,pcChoice));
}
