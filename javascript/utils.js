import {gameScreenWidth, gameScreenHeight, ctx} from "../script.js";

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