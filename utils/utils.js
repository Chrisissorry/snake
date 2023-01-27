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