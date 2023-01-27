import Apple from "../modules/apple.js";
import Snake from "../modules/snake.js";

let gameScreen = document.getElementById('gamescreen');
let gameScreenHeight = gameScreen.height;
let gameScreenWidth = gameScreen.width;
let ctx = gameScreen.getContext('2d');

const apple = new Apple();
const snake = new Snake();

export function drawBox(x, y, width, height, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.fill();
}

export function clear() {
    ctx.clearRect(0, 0, gameScreenWidth, gameScreenHeight);
}

function draw() {
    //checkDirection()  //TODO add direction-check
    snake.body.unshift({'x': snake.spawnX, 'y': snake.spawnY});
    /*if (isSelfCollision() || isWallCollision()) { //TODO add collision detection
        gameOver();
    }*/
    clear();
    snake.spawn();
    //moveSnake();  //TODO change snake.spawn to snake.move
    apple.spawn();
}

export function init() {
    apple.spawn()
    snake.intervalID = setInterval(draw, snake.speed);
}