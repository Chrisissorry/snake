import {Apple} from "./modules/Apple.js";
import {Snake} from "./modules/Snake.js";
import {SpeedAdjust} from "./modules/Speedadjust.js";
import {HasGameEnded} from "./modules/HasGameEnded.js";
import {ChangeDirection} from "./modules/ChangeDirection.js";

document.getElementById("easy").addEventListener("click", function(){startGame(250, 1)});
document.getElementById("medium").addEventListener("click", function(){startGame(200, 2)});
document.getElementById("hard").addEventListener("click", function(){startGame(150, 3)});

let body = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200}
];
let difficulty;
let timeout;
let startScreen = document.getElementById("startScreen");
let gameScreen;
let gameScreenHeight;
let gameScreenWidth;
let ctx;
let direction = "right";
let points = 0;
let dx = 10;
let dy = 0;
let applePositionX = 0;
let applePositionY = 0;


function startGame (time, difficult) {
    timeout = time;
    difficulty = difficult;
    startScreen.remove();
    loadCanvas();
    gameScreen = document.getElementById("gameScreen");
    gameScreenHeight = gameScreen.height;
    gameScreenWidth = gameScreen.width;
    ctx = gameScreen.getContext("2d");
    const apple = new Apple(gameScreenWidth, gameScreenHeight, body);
    rect(apple.positionX, apple.positionY, 10, 10);
    draw();
}

function loadCanvas() {
    let canvas = document.createElement("canvas");
    let div = document.getElementById("canvasContainer");
    canvas.id = "gameScreen";
    canvas.width = 600;
    canvas.height = 600;
    canvas.style.border = "1px solid";
    div.appendChild(canvas);
}

function draw() {
    const hasGameEnded = new HasGameEnded(body, gameScreenWidth, gameScreenHeight);
    if (hasGameEnded.hasGameEnded() || ((gameScreenHeight * gameScreenWidth) / 100) - body.length === 0) {
        gameOver();
    }

    setTimeout(function onTick() {
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

function onKeyDown(evt) {
    let keyCode = evt.keyCode;
    const changeDirection = new ChangeDirection(keyCode, direction, body);
    changeDirection.changeDirection();
    direction = changeDirection.direction;
}

function gameOver() {
    document.location.reload();
    alert ('You is dead! Points: ' + points);
}

function clear() {
    ctx.clearRect(0,0,gameScreenWidth,gameScreenHeight);
}

function moveSnake() {
    let head = {x: body[0].x + dx, y: body[0].y + dy};
    body.unshift(head);
    const hasEatenFood = body[0].x === applePositionX && body[0].y === applePositionY;
    if (hasEatenFood) {
        const speedAdjust = new SpeedAdjust(difficulty, timeout);
        speedAdjust.adjustSpeedBySize();
        timeout = speedAdjust.timeout;
        const apple = new Apple(gameScreenWidth, gameScreenHeight, body);
        applePositionX = apple.applePositionX;
        applePositionY = apple.applePositionY;
        points = points + 10;
    } else {
        body.pop();
    }
}

function rect(x,y,width,height) {
    ctx.beginPath();
    ctx.rect(x,y,width,height);
    ctx.closePath();
    ctx.fill();
}

function drawSnake() {
    body.forEach(drawSnakePart);
}

function drawSnakePart(snakePart) {
    ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
    ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

