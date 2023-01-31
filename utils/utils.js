let gameScreen = document.getElementById('gamescreen');
export let gameScreenHeight = gameScreen.height;
export let gameScreenWidth = gameScreen.width;
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