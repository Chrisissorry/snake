import * as config from "./modules/config.js";
import {getDarkMode} from "./modules/darkTheme.js";
import {clear} from "./utils/utils.js";
import Apple from "./modules/apple.js";
import Snake from "./modules/snake.js";

let difficultyArea = document.getElementById('difficulties');

const apple = new Apple();
const snake = new Snake();

difficultyArea.style.display = 'none';

config.interactionButton.addEventListener('click', executeInteraction, false);

config.darkModeButton.addEventListener('click', getDarkMode, false);

function executeInteraction() {
    lockButtons();
    snake.spawn();
    snake.move();
    init();
}

function lockButtons() {
    config.interactionButton.setAttribute('disabled', 'disabled');
}

export function draw() {
    //checkDirection()  //TODO add direction-check
    snake.body.unshift({'x': snake.spawnX, 'y': snake.spawnY});
    /*if (isSelfCollision() || isWallCollision()) { //TODO add collision detection
        gameOver();
    }*/
    clear();
    snake.move();
    apple.spawn();
}

export function init() {
    apple.spawn()
    snake.intervalID = setInterval(draw, snake.speed);
}