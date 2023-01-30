let gameScreen = document.getElementById('gamescreen');
let gameScreenHeight = gameScreen.height;
let gameScreenWidth = gameScreen.width;
let ctx = gameScreen.getContext('2d');

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