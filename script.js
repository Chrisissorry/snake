import * as config from "./modules/config.js";
import {apple} from "./modules/apple.js";
import {snake} from "./modules/snake.js";
import {getDarkMode} from "./modules/darkTheme.js";

let gameScreen = document.getElementById('gamescreen');
export let gameScreenHeight = gameScreen.height;
export let gameScreenWidth = gameScreen.width;
export let ctx = gameScreen.getContext('2d');

let difficultyArea = document.getElementById('difficulties');

difficultyArea.style.display = 'none';

config.interactionButton.addEventListener('click', executeInteraction, false);

config.darkModeButton.addEventListener('click', getDarkMode, false);

function executeInteraction() {
    lockButtons();
    apple();
    snake();
}

function lockButtons() {
    config.interactionButton.setAttribute('disabled', 'disabled');
}