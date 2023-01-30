import * as config from "./modules/config.js";
import {getDarkMode} from "./modules/darkTheme.js";
import {clear} from "./utils/utils.js";
import Apple from "./modules/apple.js";
import Snake from "./modules/snake.js";

let difficultyArea = document.getElementById('difficulties');
let direction;

const apple = new Apple();
const snake = new Snake();

difficultyArea.style.display = 'none';

config.interactionButton.addEventListener('click', executeInteraction, false);

config.darkModeButton.addEventListener('click', getDarkMode, false);


function executeInteraction() {
    lockButtons();
    init();
}

function lockButtons() {
    config.interactionButton.setAttribute('disabled', 'disabled');
}

export function draw() {
    checkDirection();
    snake.snakeBody.unshift({'x': snake.positionX, 'y': snake.positionY});
    /*if (isSelfCollision() || isWallCollision()) { //TODO add collision detection
        gameOver();
    }*/
    clear();
    snake.move(apple.positionX, apple.positionY);
    apple.getApplePosition();
}

export function init() {
    apple.spawn()
    snake.spawn();
    snake.intervalID = setInterval(draw, snake.speed);
}



function checkDirection() {
    switch (direction) {
        case 'left':
            snake.positionX -= snake.step;
            break;
        case 'up':
            snake.positionY -= snake.step;
            break;
        case 'right':
            snake.positionX += snake.step;
            break;
        case 'down':
            snake.positionY += snake.step;
            break;
        default:
            direction = 'up';
            snake.positionY -= snake.step;
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

document.addEventListener('keydown', onKeyDown);