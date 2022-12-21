import {gamescreen_width, gamescreen_height, drawBox} from "./snakeGame.js";
import {snakeSpawnX, snakeSpawnY, speedUp, getRandomInt} from "./gameSetup.js";

let apple_position_x;
let apple_position_y;

export function isAppleEaten() {
    if (snakeSpawnX === apple_position_x && snakeSpawnY === apple_position_y) {
        speedUp();
        return true;
    }
    return false;
}

export function init_apple() {
    apple_position_x = getRandomInt(0, gamescreen_width);
    apple_position_y = getRandomInt(0, gamescreen_height);
}

export function rectApple(width, height) {
    drawBox(apple_position_x, apple_position_y , width, height, "red");
}

