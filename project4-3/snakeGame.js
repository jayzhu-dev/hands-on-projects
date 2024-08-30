const gameBoard = document.getElementById('game-board');
const boardSize = 20;
let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let direction = { x: 0, y: 0 };
let gameInterval;

function createBoard() {
  for (let y = 0; y < boardSize; y++) {
    for (let x = 0; x < boardSize; x++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      gameBoard.appendChild(cell);
    }
  }
}

function updateBoard() {
  const cells = gameBoard.querySelectorAll('.cell');
  cells.forEach(cell => cell.classList.remove('snake', 'food'));

  snake.forEach(segment => {
    const cell = cells[segment.y * boardSize + segment.x];
    cell.classList.add('snake');
  });

  const foodCell = cells[food.y * boardSize + food.x];
  foodCell.classList.add('food');
}

function moveSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

  if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
    clearInterval(gameInterval);
    alert('Game Over!');
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    food = { x: Math.floor(Math.random() * boardSize), y: Math.floor(Math.random() * boardSize) };
  } else {
    snake.pop();
  }

  updateBoard();
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case 'ArrowDown':
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case 'ArrowLeft':
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
});

window.onload = function () {
  createBoard();
  updateBoard();
  direction = { x: 1, y: 0 }; // 设置初始方向
  gameInterval = setInterval(moveSnake, 100);
};