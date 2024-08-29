

// let round = 0;
// let humanScore = 0;
// let computerScore = 0;

// for (round = 1; round <= 5; round++) {

//   //这两行要重新琢磨透彻！之前完全没想到，依靠AI做出来的

//   // let randomNum = Math.random();
//   // let computerChoice = getComputerChoice(randomNum);

//   // function getComputerChoice(randomNum) {
//   //   if (randomNum < 1 / 3) {
//   //     return "rock";
//   //   } else if (randomNum > 1 / 3 && randomNum < 2 / 3) {
//   //     return "paper";
//   //   } else {
//   //     return "scissors";
//   //   }
//   // }
//   const randomNum = Math.floor(Math.random() * 3);
//   const array = ["rock", "paper", "scissors"];
//   const computerChoice = array[randomNum];



//   // getComputerChoice(randomNum);
//   console.log(randomNum);
//   console.log(computerChoice);

//   let humanChoice = prompt("Please give a try")

//   function getHumanChoice(humanChoice) {
//     humanChoice = humanChoice.toLowerCase()
//     console.log(humanChoice);
//   }
//   getHumanChoice(humanChoice)


//   function playRound(humanChoice, computerChoice) {
//     if (humanChoice === computerChoice) {
//       alert("You get a tie");
//       humanScore += 0;
//       computerScore += 0;
//     }
//     else if (
//       (humanChoice === "rock" && computerChoice === "scissors") ||
//       (humanChoice === "paper" && computerChoice === "rock") ||
//       (humanChoice === "scissors" && computerChoice === "paper")
//     ) {
//       alert("You win!");
//       humanScore += 1;
//       computerScore += 0;
//     }
//     else {
//       alert("You lose!")
//       humanScore += 0;
//       computerScore += 1;
//     }
//     console.log(round);
//     console.log(humanScore, computerScore);
//   }

//   if
//     (humanScore === 3) {
//     break;
//     alert("YOU WIN in the end!")
//   }
//   else if
//     (computerScore === 3) {
//     break;
//     alert("YOU LOSE in the end! You can try again");
//   }

//   playRound(humanChoice, computerChoice)

// }

// // console.log(humanScore, computerScore);

// if (humanScore > computerScore) {
//   alert("YOU WIN in the end!");
// }
// else {
//   alert("YOU LOSE in the end! You can try again");
// }


let round = 0;
let humanScore = 0;
let computerScore = 0;

const roundResult = document.getElementById('roundResult');
const humanScoreDisplay = document.getElementById('humanScore');
const computerScoreDisplay = document.getElementById('computerScore');
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const notification = document.getElementById('notification');
const winSound = document.getElementById('winSound');
const loseSound = document.getElementById('loseSound');
const tieSound = document.getElementById('tieSound');

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  const array = ["rock", "paper", "scissors"];
  return array[randomNum];
}

function showNotification(message) {
  notification.textContent = message;
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

function playRound(humanChoice, computerChoice) {
  userChoiceDisplay.innerHTML = `<img src="${humanChoice}.png" alt="${humanChoice}">`;
  computerChoiceDisplay.innerHTML = `<div class="waiting-animation"></div>`;

  setTimeout(() => {
    computerChoiceDisplay.innerHTML = `<img src="${computerChoice}.png" alt="${computerChoice}">`;

    if (humanChoice === computerChoice) {
      roundResult.textContent = "You get a tie";
      showNotification("Tie!");
      tieSound.play();
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      roundResult.textContent = "You win!";
      humanScore += 1;
      showNotification("You Win!");
      winSound.play();
    } else {
      roundResult.textContent = "You lose!";
      computerScore += 1;
      showNotification("You Lose!");
      loseSound.play();
    }
    humanScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    if (humanScore === 3) {
      showNotification("YOU WIN in the end!");
      winSound.play();
      resetGame();
    } else if (computerScore === 3) {
      showNotification("YOU LOSE in the end! You can try again");
      loseSound.play();
      resetGame();
    }
  }, 1000);
}

function resetGame() {
  round = 0;
  humanScore = 0;
  computerScore = 0;
  roundResult.textContent = "";
  humanScoreDisplay.textContent = "Human Score: 0";
  computerScoreDisplay.textContent = "Computer Score: 0";
  userChoiceDisplay.innerHTML = "";
  computerChoiceDisplay.innerHTML = `<div class="waiting-animation"></div>`;
}

document.getElementById('rock').addEventListener('click', () => {
  playRound('rock', getComputerChoice());
});

document.getElementById('paper').addEventListener('click', () => {
  playRound('paper', getComputerChoice());
});

document.getElementById('scissors').addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
});