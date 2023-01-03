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

export function rectApple(width, height) {
}

