/* eslint-disable import/extensions */
import Apple from './modules/Apple.js';
import Snake from './modules/Snake.js';
import SpeedAdjust from './modules/Speedadjust.js';
import HasGameEnded from './modules/HasGameEnded.js';
import ChangeDirection from './modules/ChangeDirection.js';

const body = [
  { x: 200, y: 200 },
  { x: 190, y: 200 },
  { x: 180, y: 200 },
  { x: 170, y: 200 },
  { x: 160, y: 200 },
];
let difficulty;
let timeout;
const startScreen = document.getElementById('startScreen');
let gameScreen;
let gameScreenHeight;
let gameScreenWidth;
let ctx;
let direction = 'right';
let points = 0;
let dx = 10;
let dy = 0;
let applePositionX = 0;
let applePositionY = 0;

function loadCanvas() {
  const canvas = document.createElement('canvas');
  const div = document.getElementById('canvasContainer');
  canvas.id = 'gameScreen';
  canvas.width = 600;
  canvas.height = 600;
  canvas.style.border = '3px solid #ff0000';
  canvas.style.backgroundColor = '#f7f7f7';
  div.appendChild(canvas);
}

function onKeyDown(evt) {
  const { keyCode } = evt;
  const changeDirection = new ChangeDirection(keyCode, direction, body);
  changeDirection.changeDirection();
  direction = changeDirection.direction;
}

function gameOver() {
  document.location.reload();
  // eslint-disable-next-line no-alert
  alert(`You is dead! Points: ${points}`);
}

function clear() {
  ctx.clearRect(0, 0, gameScreenWidth, gameScreenHeight);
}

function moveSnake() {
  const head = { x: body[0].x + dx, y: body[0].y + dy };
  body.unshift(head);
  const hasEatenFood = body[0].x === applePositionX && body[0].y === applePositionY;
  if (hasEatenFood) {
    const speedAdjust = new SpeedAdjust(difficulty, timeout);
    speedAdjust.adjustSpeedBySize();
    timeout = speedAdjust.timeout;
    const apple = new Apple(gameScreenWidth, gameScreenHeight, body);
    apple.initApple();
    applePositionX = apple.applePositionX;
    applePositionY = apple.applePositionY;
    points += 10;
  } else {
    body.pop();
  }
}

function rect(x, y, width, height) {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.closePath();
  ctx.fill();
}

function drawSnakePart(snakePart) {
  ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
  ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
  ctx.fillStyle = 'green';
  ctx.strokestyle = 'black';
}

function drawSnake() {
  body.forEach(drawSnakePart);
}

function draw() {
  const hasGameEnded = new HasGameEnded(body, gameScreenWidth, gameScreenHeight);
  // eslint-disable-next-line max-len
  if (hasGameEnded.hasGameEnded() || ((gameScreenHeight * gameScreenWidth) / 100) - body.length === 0) {
    gameOver();
  }

  setTimeout(() => {
    const snake = new Snake(direction, dx, dy);
    document.addEventListener('keydown', onKeyDown);
    snake.checkDirection();
    dx = snake.dx;
    dy = snake.dy;
    clear();
    moveSnake();
    drawSnake();
    rect(applePositionX, applePositionY, 10, 10);
    draw();
  }, timeout);
}

function startGame(time, difficult) {
  timeout = time;
  difficulty = difficult;
  startScreen.remove();
  loadCanvas();
  gameScreen = document.getElementById('gameScreen');
  gameScreenHeight = gameScreen.height;
  gameScreenWidth = gameScreen.width;
  ctx = gameScreen.getContext('2d');
  const apple = new Apple(gameScreenWidth, gameScreenHeight, body);
  apple.initApple();
  applePositionX = apple.applePositionX;
  applePositionY = apple.applePositionY;
  rect(applePositionX, applePositionY, 10, 10);
  draw();
}

document.getElementById('easy').addEventListener('click', () => { startGame(250, 1); });
document.getElementById('medium').addEventListener('click', () => { startGame(200, 2); });
document.getElementById('hard').addEventListener('click', () => { startGame(150, 3); });
