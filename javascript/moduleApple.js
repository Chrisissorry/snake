function isAppleEaten() {
    if (snakeSpawnX === apple_position_x && snakeSpawnY === apple_position_y) {
        clearInterval(interval_id);
        speed = speed - 2;
        interval_id = setInterval(draw, speed);
        if (speed <= 30) {
            speed = 30;
        }
        return true;
    }
    return false;
}

function init_apple() {
    apple_position_x = getRandomInt(0, gamescreen_width);
    apple_position_y = getRandomInt(0, gamescreen_height);
}

function rectApple(x, y, width, height) {
    drawBox(x, y, width, height, "red");
}