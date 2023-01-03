import {gamescreen_width, gamescreen_height, step, SEGMENT_WIDTH, SEGMENT_HEIGHT, hidingDifficultyLevels, modalAppearanceGameOver, clear} from "./snakeGame.js";
import {init_apple, rectApple} from "./moduleApple.js";
import {snakeStart, isWallCollision, isSelfCollision, moveSnake} from "./moduleSnake.js";

let speed = 1000;
let interval_id;
let direction;
export let snakeSpawnX = 550;
export let snakeSpawnY = 550;
let gameDifficultyEasy = document.getElementById('difficultyEasy');
let gameDifficultyMedium = document.getElementById('difficultyMedium');
let gameDifficultyHard = document.getElementById('difficultyHard');

gameDifficultyEasy.addEventListener('click', () => startGame('easy'), false);

gameDifficultyMedium.addEventListener('click', () => startGame('medium'), false);

gameDifficultyHard.addEventListener('click', () => startGame('hard'), false);

function startGame(difficulty) {
    switch (difficulty) {
        case 'easy':
            speed = 550;    //200ms
            break;
        case 'medium':
            speed = 130;
            break;
        case 'hard':
            speed = 60;
            break;
    }
    lockButtons();
    init_apple(gamescreen_width, gamescreen_height);
    interval_id = setInterval(draw, speed);
}

function lockButtons() {
    gameDifficultyEasy.setAttribute('disabled', 'disabled');
    gameDifficultyMedium.setAttribute('disabled', 'disabled');
    gameDifficultyHard.setAttribute('disabled', 'disabled');
    hidingDifficultyLevels.style.display = "none";
}

function gameOver() {
    clearInterval(interval_id);
    modalAppearanceGameOver();
}
//--------------------------------------------
export function speedUp() {
    clearInterval(interval_id);
    speed = speed - 2;
    interval_id = setInterval(draw, speed);
    if (speed <= 30) {
        speed = 30;
    }
}

function checkDirection() {
    switch (direction) {
        case 'left':
            snakeSpawnX -= step;
            break;
        case 'up':
            snakeSpawnY -= step;
            break;
        case 'right':
            snakeSpawnX += step;
            break;
        case 'down':
            snakeSpawnY += step;
            break;
        default:
            direction = 'up';
            snakeSpawnY -= step;
    }
}

function onKeyDown(evt) {
    switch (evt.keyCode) {
        // left
        case 37:
            if (direction === 'right') break;
            direction = 'left';
            break;
        // up
        case 38:
            if (direction === 'down') break;
            direction = 'up';
            break;
        // right
        case 39:
            if (direction === 'left') return;
            direction = 'right';
            break;
        // down
        case 40:
            if (direction === 'up') break;
            direction = 'down';
            break;
    }
}

function draw() {
    checkDirection();
    snakeStart();
    if (isSelfCollision() || isWallCollision()) {
        gameOver();
    }
    clear();
    moveSnake();
    rectApple(SEGMENT_WIDTH, SEGMENT_HEIGHT);
}

document.addEventListener('keydown', onKeyDown);

