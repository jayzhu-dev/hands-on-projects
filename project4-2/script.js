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
      roundResult.textContent = "平局";
      showNotification("平局!");
      tieSound.play();
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      roundResult.textContent = "你赢了";
      humanScore += 1;
      showNotification("你赢了!");
      winSound.play();
    } else {
      roundResult.textContent = "你输了，行不行啊!";
      computerScore += 1;
      showNotification("你输了，二狗赢了!");
      loseSound.play();
    }
    humanScoreDisplay.textContent = `小猫咪的分数: ${humanScore}`;
    computerScoreDisplay.textContent = `二狗的分数: ${computerScore}`;

    if (humanScore === 3) {
      showNotification("哎嘛，让你赢了!");
      winSound.play();
      resetGame();
    } else if (computerScore === 3) {
      showNotification("输了吧，小猫咪!");
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
  // 保留最后一局的分数显示
  // humanScoreDisplay.textContent = "小猫咪的分数: 0";
  // computerScoreDisplay.textContent = "二狗的分数: 0";
  // 保留最后一局的选择显示
  // userChoiceDisplay.innerHTML = "";
  // computerChoiceDisplay.innerHTML = `<div class="waiting-animation"></div>`;
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