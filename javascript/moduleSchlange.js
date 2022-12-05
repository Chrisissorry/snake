import {leftWall, topWall, step, SEGMENT_WIDTH, SEGMENT_HEIGHT, gamescreen_width, gamescreen_height, drawBox} from "./snakeGame.js";
import {isAppleEaten, init_apple} from "./moduleApple.js";
import {snakeSpawnX, snakeSpawnY} from "./gameSetup.js";

export let deathReason = [];
let snake = [];
export let snakeSize = 1;
export let applesEaten = 0;

function rectSnake(xValue, yValue, width, height) {
    drawBox( xValue, yValue, width, height, "green");
}

export function isSelfCollision() {
    const headSnake = snake[0];
    rectSnake(headSnake.x, headSnake.y, SEGMENT_WIDTH, SEGMENT_HEIGHT);
    let snakeTail = snake.slice(1, snakeSize);
    for (let segment = 0; segment < snakeTail.length; segment++) {
        if (snakeTail[segment].x === headSnake.x && snakeTail[segment].y === headSnake.y) {
            deathReason[0] = 'You bit your own tail';
            return true;
        }
    }
    return false;
}

export function isWallCollision() {
    if (snake[0].x < leftWall
        || gamescreen_width - snake[0].x < step
        || snake[0].y < topWall
        || gamescreen_height - snake[0].y < step) {
        deathReason[1] = 'You have collided with the wall';
        return true;
    }
    return false;
}

export function moveSnake() {
    snakeElements();
    if (isAppleEaten()) {
        snakeSize++;
        applesEaten++;
        init_apple();
        return;
    }
    snake.pop();
}

export function snakeStart() {
    snake.unshift({'x': snakeSpawnX, 'y': snakeSpawnY});
}

function snakeElements() {
    snake.forEach( (segment) => {
        rectSnake(segment.x, segment.y, SEGMENT_WIDTH, SEGMENT_HEIGHT);
    });
}


