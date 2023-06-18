const game = () => {
  let playerScore = 0;
  let compScore = 0;
  let rounds = 0;

  const gamePlay = () => {
    const rockBtn = document.querySelector(".rock");
    const paperBtn = document.querySelector(".paper");
    const scissorsBtn = document.querySelector(".scissors");
    const playerSelection = [rockBtn, paperBtn, scissorsBtn];
    const computerSelection = ["rock", "paper", "scissors"];

    playerSelection.forEach((selection) => {
      selection.addEventListener("click", function () {
        const roundsLeft = document.querySelector(".roundsleft");
        rounds++;
        roundsLeft.innerText = `Rounds Left: ${5 - rounds}`;

        const compChoice = Math.floor(Math.random() * 3);
        const compInput = computerSelection[compChoice];

        theWinnerIs(this.innerText, compInput);

        if (rounds == 5) {
          gameOver(playerSelection, roundsLeft);
        }
      });
    });
  };
  const theWinnerIs = (player, computer) => {
    const result = document.querySelector(".results");
    const pScoreBoard = document.querySelector(".p-count");
    const cScoreBoard = document.querySelector(".c-count");

    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if (player === computer) {
      result.textContent = "Tie";
    } else if (player == "rock") {
      if (computer == "paper") {
        result.textContent = "Computer Won";
        compScore++;
        cScoreBoard.textContent = compScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        pScoreBoard.textContent = playerScore;
      }
    } else if (player == "scissors") {
      if (computer == "rock") {
        result.textContent = "Computer Won";
        compScore++;
        cScoreBoard.textContent = compScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        pScoreBoard.textContent = playerScore;
      }
    } else if (player == "paper") {
      if (computer == "scissors") {
        result.textContent = "Computer Won";
        compScore++;
        cScoreBoard.textContent = compScore;
      } else {
        result.textContent = "Player Won";
        playerScore++;
        pScoreBoard.textContent = playerScore;
      }
    }
  };

  const gameOver = (playerOptions, roundsLeft) => {
    const chooseWeapon = document.querySelector(".weapon");
    const result = document.querySelector(".results");
    const reStartBtn = document.querySelector(".restart");

    playerOptions.forEach((option) => {
      option.style.display = "none";
    });

    chooseWeapon.innerText = "Game Over!!";
    roundsLeft.style.display = "none";

    if (playerScore > compScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Won The Game!";
      result.style.color = "#308D46";
    } else if (playerScore < compScore) {
      result.style.fontSize = "2rem";
      result.innerText = "You Lost The Game!";
      result.style.color = "red";
    } else {
      result.style.fontSize = "2rem";
      result.innerText = "Tie!";
      result.style.color = "grey";
    }
    reStartBtn.innerText = "Restart";
    reStartBtn.style.display = "flex";
    reStartBtn.addEventListener("click", () => {
      window.location.reload();
    });
  };

  // Calling playGame function inside game
  gamePlay();
};

// Calling the game function
game();
