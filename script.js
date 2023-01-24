import * as config from "./modules/config.js";
import {getDarkMode} from "./modules/darkTheme.js";
import Apple from "./modules/apple.js";

let gameScreen = document.getElementById('gamescreen');
let gameScreenHeight = gameScreen.height;
let gameScreenWidth = gameScreen.width;
export let ctx = gameScreen.getContext('2d');

let difficultyArea = document.getElementById('difficulties');

difficultyArea.style.display = 'none';

config.interactionButton.addEventListener('click', executeInteraction, false);

config.darkModeButton.addEventListener('click', getDarkMode, false);

function executeInteraction() {
    lockButtons();
    const apple = new Apple();
    apple.spawn(gameScreenWidth, gameScreenHeight);

}

function lockButtons() {
    config.interactionButton.setAttribute('disabled', 'disabled');
}