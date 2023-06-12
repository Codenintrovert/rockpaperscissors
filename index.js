const game = () => {
    let choices = {
      rock: 'rock',
      paper: 'paper',
      scissors: 'scissors'
    }
  
    const getComputerChoice = () => {
      let gamePiece = Object.keys(choices);
      return gamePiece[Math.floor(Math.random() * gamePiece.length)]
    }
    const userInput = () => {
      let input = prompt("Do you want rock paper or scissors?").toLowerCase()
      return input
    }
  
    let playerSelection = userInput()
    let computerSelection = getComputerChoice();
  
    const playRound = (playerSelection, computerSelection) => {
  
      if (playerSelection === computerSelection) {
        return "draw";
      } else {
        if (playerSelection === 'rock') {
          if (computerSelection === 'paper') {
            console.log("You Lose! Paper covers Rock");
          } else {
            console.log("You Win! Rock crushes scissors");
          }
        } else if (playerSelection === 'paper') {
          if (computerSelection === 'rock') {
            console.log("You win! Paper covers Rock");
          } else {
            console.log("You Lose! Scissors cuts paper");
          }
        } else if (playerSelection === 'scissors') {
          if (computerSelection === 'rock') {
            console.log("You Lose! Rock crushes Scissors");
          } else {
            console.log("You Win! Scissors cuts paper");
          }
        }
      }
    }
    return playRound(playerSelection, computerSelection);
  }
  const gameTime = () => {
    for (let i = 0; i < 5; i++) {
      console.log(game())
    }
  }
  console.log(gameTime())
  
  
  
  